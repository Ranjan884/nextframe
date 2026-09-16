export interface StudioProject {
  id: string;
  title: string;
  summary?: string;
  description: string;
  category: string;
  tags: string[];
  imageUrl?: string;
  projectLink?: string;
  githubUrl?: string;
  isPublished: boolean;
  year?: string;
  role?: string;
  keyFeatures?: string[];
}

export const INITIAL_STUDIO_PROJECTS: StudioProject[] = [];

const STORAGE_KEY = 'nextframe_studio_projects_v7';
const AUTH_KEY = 'nextframe_admin_authenticated';
const ADMIN_PASSCODE = 'nextframe2025';

const REMOVED_PROJECT_IDS = new Set([
  'aquatrack',
  'unity-prototype',
  'nextframe-web',
  'showcase-video-reel',
  'hard-surface-3d',
]);

// Load all projects from localStorage or fallback to defaults
export const getProjects = (): StudioProject[] => {
  if (typeof window === 'undefined') return INITIAL_STUDIO_PROJECTS;
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed)) {
        return parsed.filter(
          (p: StudioProject) =>
            !REMOVED_PROJECT_IDS.has(p.id) &&
            !p.category?.toLowerCase().includes('3d') &&
            !p.category?.toLowerCase().includes('video') &&
            !p.title?.toLowerCase().includes('aquatrack') &&
            !p.title?.toLowerCase().includes('showcase reel') &&
            !p.title?.toLowerCase().includes('kinematic 3d')
        );
      }
    }
  } catch (e) {
    console.warn('Error reading projects from storage:', e);
  }
  return INITIAL_STUDIO_PROJECTS;
};

// Return only published projects for visitors
export const getPublishedProjects = (): StudioProject[] => {
  const all = getProjects();
  return all.filter((p) => p.isPublished !== false);
};

// Save a project (create or update)
export const saveProject = (project: StudioProject): StudioProject[] => {
  const current = getProjects();
  const index = current.findIndex((p) => p.id === project.id);
  let updated: StudioProject[];

  if (index >= 0) {
    updated = [...current];
    updated[index] = { ...project };
  } else {
    updated = [project, ...current];
  }

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  } catch (e) {
    console.error('Error saving projects to storage:', e);
  }

  // Dispatch custom event to notify components
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('nextframe_projects_updated'));
  }

  return updated;
};

// Delete a project by ID
export const deleteProject = (id: string): StudioProject[] => {
  const current = getProjects();
  const updated = current.filter((p) => p.id !== id);

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  } catch (e) {
    console.error('Error deleting project from storage:', e);
  }

  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('nextframe_projects_updated'));
  }

  return updated;
};

// Toggle published status
export const togglePublishProject = (id: string): StudioProject[] => {
  const current = getProjects();
  const updated = current.map((p) => {
    if (p.id === id) {
      return { ...p, isPublished: !p.isPublished };
    }
    return p;
  });

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  } catch (e) {
    console.error('Error updating project status:', e);
  }

  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('nextframe_projects_updated'));
  }

  return updated;
};

// Check if currently authenticated as admin in this session
export const isAdminAuthenticated = (): boolean => {
  if (typeof window === 'undefined') return false;
  return sessionStorage.getItem(AUTH_KEY) === 'true';
};

// Authenticate with passcode
export const verifyAdminPasscode = (passcode: string): boolean => {
  if (passcode.trim() === ADMIN_PASSCODE) {
    if (typeof window !== 'undefined') {
      sessionStorage.setItem(AUTH_KEY, 'true');
      window.dispatchEvent(new CustomEvent('nextframe_auth_changed'));
    }
    return true;
  }
  return false;
};

// Log out admin
export const logoutAdmin = (): void => {
  if (typeof window !== 'undefined') {
    sessionStorage.removeItem(AUTH_KEY);
    window.dispatchEvent(new CustomEvent('nextframe_auth_changed'));
  }
};
