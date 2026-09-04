-- Run this in your Supabase SQL Editor (Dashboard > SQL Editor)
-- This grants full permissions (SELECT, INSERT, UPDATE, DELETE) to view and manage your existing table data with RLS enabled

ALTER TABLE public.yfc_members ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Full access to yfc_members" ON public.yfc_members;
DROP POLICY IF EXISTS "Allow public read access to yfc_members" ON public.yfc_members;
DROP POLICY IF EXISTS "Allow read access to yfc_members" ON public.yfc_members;

CREATE POLICY "Full access to yfc_members"
ON public.yfc_members
FOR ALL
TO anon, authenticated
USING (true)
WITH CHECK (true);
