/**
 * Supabase Client Configuration & Adapter for Nextframe Studio
 *
 * This file provides the clean interface for connecting the Nextframe Studio
 * project management system to a live Supabase backend.
 *
 * When connecting Supabase in production:
 * 1. Define VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in .env
 * 2. Set SUPABASE_ENABLED = true
 * 3. Run schema migration for the `projects` table:
 *    CREATE TABLE projects (
 *      id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
 *      title TEXT NOT NULL,
 *      description TEXT NOT NULL,
 *      category TEXT NOT NULL,
 *      tags TEXT[] DEFAULT '{}',
 *      image_url TEXT,
 *      project_link TEXT,
 *      github_url TEXT,
 *      is_published BOOLEAN DEFAULT true,
 *      created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
 *      updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
 *    );
 *    -- Enable Row Level Security (RLS)
 *    ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
 *    -- Public can only READ published projects
 *    CREATE POLICY "Public can view published projects" ON projects
 *      FOR SELECT USING (is_published = true);
 *    -- Only authenticated studio members can INSERT, UPDATE, DELETE
 *    CREATE POLICY "Admin can manage all projects" ON projects
 *      FOR ALL USING (auth.role() = 'authenticated');
 */

import { StudioProject } from './projectService';

const metaEnv = (import.meta as unknown as { env?: Record<string, string> }).env || {};

export const SUPABASE_CONFIG = {
  url: metaEnv.VITE_SUPABASE_URL || '',
  anonKey: metaEnv.VITE_SUPABASE_ANON_KEY || '',
  isConfigured: Boolean(metaEnv.VITE_SUPABASE_URL && metaEnv.VITE_SUPABASE_ANON_KEY),
};

// Supabase Async API contract
export interface SupabaseProjectService {
  fetchProjects: () => Promise<StudioProject[]>;
  createProject: (project: Omit<StudioProject, 'id'>) => Promise<StudioProject>;
  updateProject: (project: StudioProject) => Promise<StudioProject>;
  deleteProject: (id: string) => Promise<boolean>;
  uploadThumbnail: (file: File) => Promise<string>;
}
