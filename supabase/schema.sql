-- GENTRICKS SUPABASE DATABASE SCHEMA
-- PostgreSQL schema for Gentricks youth technology & innovation ecosystem
-- Run this SQL in your Supabase SQL Editor (https://supabase.com/dashboard/project/_/sql)

-- 1. REGISTRATIONS TABLE (Waitlist & Founding Member Access)
CREATE TABLE IF NOT EXISTS public.registrations (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    full_name TEXT NOT NULL,
    email TEXT NOT NULL,
    domain TEXT NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

-- Index for email lookups
CREATE INDEX IF NOT EXISTS idx_registrations_email ON public.registrations(email);
CREATE INDEX IF NOT EXISTS idx_registrations_created_at ON public.registrations(created_at DESC);

-- Enable RLS on registrations
ALTER TABLE public.registrations ENABLE ROW LEVEL SECURITY;

-- Policy: Allow public anonymous user to submit registration
CREATE POLICY "Allow public insert on registrations"
    ON public.registrations FOR INSERT
    WITH CHECK (true);

-- Policy: Allow service role & authenticated admins to view registrations
CREATE POLICY "Allow service role read on registrations"
    ON public.registrations FOR SELECT
    USING (auth.role() = 'authenticated' OR auth.role() = 'service_role');


-- 2. BUILDER PROJECTS TABLE (Incubation Submissions)
CREATE TABLE IF NOT EXISTS public.builder_projects (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    project_name TEXT NOT NULL,
    stage TEXT NOT NULL,
    founder_email TEXT NOT NULL,
    summary TEXT NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

-- Index for project stage & emails
CREATE INDEX IF NOT EXISTS idx_builder_founder_email ON public.builder_projects(founder_email);
CREATE INDEX IF NOT EXISTS idx_builder_created_at ON public.builder_projects(created_at DESC);

-- Enable RLS on builder_projects
ALTER TABLE public.builder_projects ENABLE ROW LEVEL SECURITY;

-- Policy: Allow public anonymous user to submit project
CREATE POLICY "Allow public insert on builder_projects"
    ON public.builder_projects FOR INSERT
    WITH CHECK (true);

-- Policy: Allow service role & authenticated admins to view projects
CREATE POLICY "Allow service role read on builder_projects"
    ON public.builder_projects FOR SELECT
    USING (auth.role() = 'authenticated' OR auth.role() = 'service_role');


-- 3. PARTNER INQUIRIES TABLE (Institutional & Chapter Leads)
CREATE TABLE IF NOT EXISTS public.partner_inquiries (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    org_name TEXT NOT NULL,
    contact_person TEXT NOT NULL,
    work_email TEXT NOT NULL,
    scope TEXT NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

-- Index for partner inquiries
CREATE INDEX IF NOT EXISTS idx_partner_work_email ON public.partner_inquiries(work_email);
CREATE INDEX IF NOT EXISTS idx_partner_created_at ON public.partner_inquiries(created_at DESC);

-- Enable RLS on partner_inquiries
ALTER TABLE public.partner_inquiries ENABLE ROW LEVEL SECURITY;

-- Policy: Allow public anonymous user to submit inquiry
CREATE POLICY "Allow public insert on partner_inquiries"
    ON public.partner_inquiries FOR INSERT
    WITH CHECK (true);

-- Policy: Allow service role & authenticated admins to view inquiries
CREATE POLICY "Allow service role read on partner_inquiries"
    ON public.partner_inquiries FOR SELECT
    USING (auth.role() = 'authenticated' OR auth.role() = 'service_role');


-- 4. CONTACT MESSAGES TABLE (Direct Contact Form Messages)
CREATE TABLE IF NOT EXISTS public.contact_messages (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    org TEXT,
    purpose TEXT NOT NULL,
    message TEXT NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

-- Enable RLS on contact_messages
ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;

-- Policy: Allow public anonymous user to submit contact message
CREATE POLICY "Allow public insert on contact_messages"
    ON public.contact_messages FOR INSERT
    WITH CHECK (true);

-- Policy: Allow service role & authenticated admins to view messages
CREATE POLICY "Allow service role read on contact_messages"
    ON public.contact_messages FOR SELECT
    USING (auth.role() = 'authenticated' OR auth.role() = 'service_role');
