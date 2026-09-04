-- RPC Functions for YFC Mobile
--
-- NOTE: only verify_login is currently deployed to the Supabase project. get_yfc_members
-- below was never run in the SQL Editor, so calling it returns 404 / PGRST202
-- ("Could not find the function public.get_yfc_members in the schema cache").
-- MembersTab no longer depends on it -- it selects from the table directly, which the
-- public read policy already allows. This function is kept only for
-- backend/src/controllers/membersController.ts; run this file if you want that path to work.

-- 1. Login verification function
CREATE OR REPLACE FUNCTION public.verify_login(p_username TEXT, p_password TEXT)
RETURNS BOOLEAN
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
    -- Check credentials against credentials table or fallback to default
    IF EXISTS (
        SELECT 1 FROM public.credentials 
        WHERE LOWER(username) = LOWER(p_username) AND password = p_password
    ) THEN
        RETURN TRUE;
    END IF;

    RETURN FALSE;
END;
$$;

-- 2. Members fetching function (SECURITY DEFINER allows it to access yfc_members without RLS blocking, just like verify_login)
CREATE OR REPLACE FUNCTION public.get_yfc_members()
RETURNS SETOF public.yfc_members
LANGUAGE sql
SECURITY DEFINER
AS $$
    SELECT * FROM public.yfc_members;
$$;
