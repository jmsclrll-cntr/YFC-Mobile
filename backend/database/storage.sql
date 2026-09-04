-- Supabase Storage Setup for YFC Member Avatars / Pictures

-- 1. Create storage bucket if not exists
INSERT INTO storage.buckets (id, name, public)
VALUES ('yfc_members', 'yfc_members', true)
ON CONFLICT (id) DO NOTHING;

-- 2. Allow public read access to avatar files in bucket
CREATE POLICY "Public Access to Member Pictures"
ON storage.objects FOR SELECT
USING (bucket_id = 'yfc_members');

-- 3. Allow authenticated uploads
CREATE POLICY "Allow Member Picture Uploads"
ON storage.objects FOR INSERT
WITH CHECK (bucket_id = 'yfc_members');
