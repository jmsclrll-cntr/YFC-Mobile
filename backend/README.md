# YFC Backend Service

Backend API server & database resources for the YFC Mobile application.

## Structure

- `src/`
  - `config/`: Configuration & Supabase client initialization.
  - `controllers/`: Request handling for authentication and members database.
  - `routes/`: Express route definitions.
  - `index.ts`: Application entry point.
- `database/`
  - `schema.sql`: Table structure for `yfc_members`.
  - `functions.sql`: Stored functions including `verify_login`.
  - `storage.sql`: Storage bucket policies for `yfc_members`.
  - `seed.sql`: Example seed rows.

## Setup & Running

1. **Install Dependencies:**
   ```bash
   npm install
   ```

2. **Configure Environment:**
   Review and update `.env` with your Supabase credentials:
   ```env
   PORT=5000
   SUPABASE_URL=https://<your-project>.supabase.co
   SUPABASE_ANON_KEY=<your-anon-key>
   ```

3. **Run in Development:**
   ```bash
   npm run dev
   ```

4. **Build & Start Production:**
   ```bash
   npm run build
   npm start
   ```

## Endpoints

- `GET /api/health`: Server health check
- `POST /api/auth/login`: Validate credentials (`{ "username": "...", "password": "..." }`)
- `GET /api/members`: Retrieve all members or search via query string (`?q=<term>`)
- `GET /api/members/:id`: Retrieve single member by `member_ID`
