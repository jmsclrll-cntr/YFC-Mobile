-- Schema Definition for YFC Members Database
--
-- IMPORTANT: this file documents the table as it ACTUALLY exists in the Supabase project.
-- The live table was created through the Supabase dashboard, which quotes identifiers, so the
-- primary key is the case-sensitive column "member_ID" -- not member_id. Writing it unquoted
-- (member_ID VARCHAR(50)) would make Postgres fold it to member_id and produce a table that
-- does not match the live one. Keep the quotes.

CREATE TABLE IF NOT EXISTS public.yfc_members (
    "member_ID" VARCHAR(50) PRIMARY KEY,
    firstname   VARCHAR(100) NOT NULL,
    middlename  VARCHAR(100),
    lastname    VARCHAR(100) NOT NULL,
    picture     TEXT,
    email       VARCHAR(150),
    area        VARCHAR(100),
    status      VARCHAR(50)
);

-- Index for performance when searching
CREATE INDEX IF NOT EXISTS idx_yfc_members_names
ON public.yfc_members (firstname, lastname);

-- Row Level Security (RLS) & Read Policy
ALTER TABLE public.yfc_members ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Allow public read access to yfc_members" ON public.yfc_members;

CREATE POLICY "Allow public read access to yfc_members"
ON public.yfc_members
FOR SELECT
TO public
USING (true);

-- ---------------------------------------------------------------------------
-- OPTIONAL: the dashboard mock-up displayed "Chapter 1 - Music Ministry", but the live
-- table has `area` and `status` instead of `chapter`/`ministry`. MembersTab now renders
-- `area` and `status` because those are the columns that exist. If you would rather keep
-- the original chapter/ministry design, run the migration below and then switch the
-- MEMBER_COLUMNS list and normalizeMember() in
-- frontend/src/components/dashboard/MembersTab.tsx over to the new columns.
-- ---------------------------------------------------------------------------
-- ALTER TABLE public.yfc_members ADD COLUMN IF NOT EXISTS chapter  VARCHAR(100);
-- ALTER TABLE public.yfc_members ADD COLUMN IF NOT EXISTS ministry VARCHAR(100);
