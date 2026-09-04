# YFC Mobile — Members Tab Fix

Fixes the members list in `frontend/src/components/dashboard/MembersTab.tsx` and its Supabase
connection, plus the same defect where it was duplicated in
`backend/src/controllers/membersController.ts`.

---

## TL;DR

The database connection was never actually broken. `MembersTab` called a Postgres function that
does not exist, and its fallback logic never cleared that first failure — so a **successful**
query that returned zero rows was reported to the user as a connection error.

Two things were wrong, and they compounded:

1. **A guaranteed-failing first request** to an RPC that was never deployed.
2. **Error state that outlived it**, turning "no rows" into "cannot connect".

On top of that, the component and the repo's SQL described a table schema that does not match
the real one.

---

## Root cause

### 1. The `get_yfc_members` RPC does not exist

`fetchMembers` started with `supabase.rpc('get_yfc_members')`. That function is defined in
`backend/database/functions.sql` but was **never run** in the Supabase SQL Editor — only
`verify_login` was. Every mount therefore began with:

```
404  PGRST202  Could not find the function public.get_yfc_members in the schema cache
```

### 2. The fallback could not clear the error (the actual bug)

```js
let { data, error: fetchError } = await supabase.rpc('get_yfc_members');   // 404, data = null

if (fetchError || !data || data.length === 0) {
  const tableRes = await supabase.from('yfc_members').select('*');          // 200 OK, data = []
  if (tableRes.data && tableRes.data.length > 0) {   // [] has length 0  -> false
    data = tableRes.data;
    fetchError = null;                               // never reached
  } else if (fetchError && tableRes.error) {         // tableRes.error is null -> false
    fetchError = tableRes.error;
  }
}

if (fetchError && (!data || data.length === 0)) {    // stale 404 still set -> TRUE
  setError('Unable to load members right now. Please try again.');
}
```

`fetchError` was only cleared when the fallback returned **at least one row**. The table query
succeeded, correctly returned an empty array, and the stale 404 survived — so the component
rendered a red *"Unable to load members right now"* instead of an empty state.

The consequence is worse than a bad message: **whenever the table is empty, the `No members
found` branch is unreachable**, and a healthy database is indistinguishable from a broken one.

### 3. The table really is empty

Verified against the live project — the read path is completely healthy:

| Probe | Result |
| --- | --- |
| `GET /rest/v1/yfc_members?select=*` | `200 []` — table exists, RLS read policy works |
| exact / estimated / **planned** row count | `0` in all three |
| `POST /rest/v1/rpc/get_yfc_members` | `404 PGRST202` — function missing |
| `POST /rest/v1/rpc/verify_login` | `200` — deployed and working |

Planner-based counts are not filtered by RLS, so all three reading `0` proves the rows are
genuinely absent rather than hidden by a policy. `seed.sql` had never been applied — and it
could not be, see below.

### 4. The schema in this repo did not match the live database

The live `public.yfc_members` actually has:

```
"member_ID", firstname, middlename, lastname, picture, email, area, status
```

`chapter`, `ministry`, `contact_number`, `created_at` and `updated_at` **do not exist**. Two
consequences:

- `seed.sql` inserted into `chapter` and `ministry`, so it failed with `42703` — which is why the
  table stayed empty.
- The row subtitle in the original mock-up (`Chapter 1 • Music Ministry`) could never be populated.

Also note the capital letters in **`"member_ID"`**. The live table was created through the
Supabase dashboard, which quotes identifiers, so Postgres preserved the case. `schema.sql`
declared it unquoted (`member_ID VARCHAR(50)`), which Postgres folds to `member_id` — a column
that does not exist. Confirmed:

```
GET /rest/v1/yfc_members?select=member_id
400  42703  column yfc_members.member_id does not exist
     hint: Perhaps you meant to reference the column "yfc_members.member_ID".
```

---

## Changes

### `frontend/src/components/dashboard/MembersTab.tsx`

**Connection**

- **Dropped the RPC call.** The component now selects from `yfc_members` directly, which the
  public read policy already permits. This removes a request that could only ever 404.
- **An empty result is treated as success.** Only a real `error` object sets error state, so zero
  rows now falls through to the empty state.
- **Explicit column list** instead of `select('*')`, so a future schema drift fails loudly here
  rather than silently rendering blank rows.
- **Results ordered** by `lastname`, then `firstname` (previously unordered).
- **Stale responses ignored.** A request id plus a mounted flag stop a resolved request from
  writing state after unmount, and stop a slow first request from overwriting a newer *Retry*.
- Dev-only logging now includes `hint`, which is what identified the column-name mismatch.

**Display**

- **Subtitle uses `area` and `status`** — the columns that exist — instead of the raw member ID.
  The ID is now its own line. (`chapter`/`ministry` cannot be shown; see the optional migration
  in `schema.sql`.)
- **Fixed avatar URLs.** `getImageUrl` treated the first path segment as the bucket name, so a
  picture stored as `avatars/maria.jpg` resolved against a bucket called `avatars`:

  ```
  before: /storage/v1/object/public/avatars/maria.jpg              (dead link)
  after : /storage/v1/object/public/yfc_members/avatars/maria.jpg  (correct)
  ```

  A leading segment is now stripped only when it is literally the bucket name.
- **Rows normalized once** at the fetch boundary into a typed shape, replacing the `?? ` fallback
  chains and the `[key: string]: any` index signature that had masked the column mismatch.
- **Distinct empty states**: "No members in the database yet." vs. `No members match "…"`.
- Avatar image fills its container instead of re-hardcoding `36`/`18`; `overflow: hidden` kept so
  Android clips it to a circle.
- Last row no longer draws a trailing divider; search also matches email, area, and status;
  hardcoded `#FF3B30` replaced with `UiColors.error`.

### `backend/database/schema.sql`

Rewritten to match the live table, with `"member_ID"` correctly quoted and a commented-out
optional migration for `chapter`/`ministry` if you prefer the original design.

### `backend/database/seed.sql`

Now inserts into columns that exist, so it actually runs.

### `backend/database/functions.sql`

Header noting that only `verify_login` is deployed and that the frontend no longer needs
`get_yfc_members`.

### `backend/src/controllers/membersController.ts`

The same two fixes, because this file carried an identical copy of the bug:

- **`getMembers`** used the same RPC-then-fallback block, so `GET /api/members` returned a **500**
  on an empty table. It now selects the real columns directly and returns `200` with
  `count: 0, data: []` when there are no rows. Search also matches email and area.
- **`getMemberById`** filtered with `.or(\`member_ID.eq.${id},member_id.eq.${id}\`)`. Because
  `member_id` does not exist, the filter itself failed with `42703`, so **every** lookup returned
  "Member not found" — including ids that do exist:

  ```
  old .or() -> 42703 column yfc_members.member_id does not exist
  new .eq() -> no error
  ```

  It now uses `.eq('member_ID', id)`, which also closes a filter-injection hole: the id used to be
  interpolated straight into the PostgREST filter expression, letting caller input rewrite the
  query. `.eq()` sends it as a parameter. `.single()` became `.maybeSingle()` so a real database
  failure stays a `500` and only a genuine miss becomes a `404`.

---

## To finish the setup

The app is now correct, but the list will read **"No members in the database yet."** until the
table has rows. In the Supabase dashboard → SQL Editor, run:

```sql
-- backend/database/seed.sql
```

Then reopen the Members tab. No frontend change is needed — `.env` already holds a working
`EXPO_PUBLIC_SUPABASE_URL` and publishable key.

---

## Verification

Run against the live project with the real `@supabase/supabase-js` client:

```
Generated URL: /rest/v1/yfc_members?select=member_ID,firstname,middlename,lastname,
               picture,email,area,status&order=lastname.asc,firstname.asc
error: null
data : []
--> renders: EMPTY STATE: "No members in the database yet."
```

Previously this exact response produced the red error state. `npx tsc --noEmit` passes clean for
both `frontend/` and `backend/`. Row rendering, name assembly, avatar URL resolution, and search
were verified against sample rows matching the real schema; rendering with live data still needs
the seed above.

The backend was booted against the live database and every endpoint exercised:

| Request | Before | After |
| --- | --- | --- |
| `GET /api/health` | `200` | `200` |
| `GET /api/members` | `500` | `200 {"success":true,"count":0,"data":[]}` |
| `GET /api/members?q=santos` | `500` | `200` |
| `GET /api/members/YFC-2026-001` | `404` (filter error) | `404 Member not found` (genuine miss) |

The server log stayed clean throughout — no error path was taken.

---

## One thing worth your attention

**Security — worth looking at soon:**

- The `credentials` table is readable by the public/anon key and stores passwords in plain text.
  Anyone with the key shipped in the mobile bundle can read every username and password with a
  single request. Consider moving authentication to Supabase Auth, or at minimum revoking anon
  `SELECT` on that table so only the `SECURITY DEFINER` `verify_login` function can read it, and
  storing password hashes rather than plaintext.

**Minor housekeeping:**

- `frontend/.expo/dev/logs/start.log` is tracked in git and records resolved env values on every
  start. It is build output; adding `.expo/` to `.gitignore` would keep it out of commits.
