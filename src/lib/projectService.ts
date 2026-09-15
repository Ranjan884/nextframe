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

export const INITIAL_STUDIO_PROJECTS: StudioProject[] = [
  {
    id: 'aquatrack',
    title: 'AquaTrack',
    category: 'Web Development',
    summary: 'A civic water-awareness platform transforming domestic consumption telemetry into actionable conservation benchmarks.',
    description:
      'AquaTrack is a clean, civic-utility web application designed to help households track, benchmark, and understand water consumption. Features interactive estimation calculators, domestic leak diagnostics, and visual usage meters built with responsive layouts.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Data Visualizer'],
    projectLink: 'https://aquatrack.demo',
    githubUrl: 'https://github.com/nextframe-studio/aquatrack',
    isPublished: true,
    year: '2025',
    role: 'Frontend Engineering & Interface Design',
    keyFeatures: [
      'Interactive domestic water usage calculator and benchmark estimates',
      'Diagnostic tool for detecting household fixtures and fixture leaks',
      'Responsive, high-contrast visual gauges designed for quick mobile reading',
    ],
  },
  {
    id: 'unity-prototype',
    title: 'Kinematic 3D Game Prototype',
    category: 'Game Development',
    summary: 'Interactive 3D gameplay experience in Unity with multi-directional physics, kinematic player controllers, and custom assets.',
    description:
      'A prototype built in Unity with C#, focusing on tight kinematic character movement, state-machine loop architecture, physics interactions, and custom low-poly environmental assets modeled from scratch in Blender.',
    tags: ['Unity', 'C#', 'Blender', 'Physics Mechanics', 'Game Dev'],
    projectLink: '',
    githubUrl: 'https://github.com/nextframe-studio/unity-game-prototype',
    isPublished: true,
    year: '2025',
    role: 'Gameplay Programming, Systems Logic & 3D Integration',
    keyFeatures: [
      'Kinematic player controller with responsive multi-directional physics',
      'Modular state-machine architecture for game loops and enemy AI behaviors',
      'Custom 3D low-poly props and environmental lighting crafted in Blender',
    ],
  },
  {
    id: 'nextframe-web',
    title: 'Nextframe Studio Web Platform',
    category: 'Full-Stack Development',
    summary: 'A fast, responsive web application engineered with modular TypeScript architecture and accessible interfaces.',
    description:
      'An end-to-end frontend and web platform exploring modern typography, responsive layout systems, client-side data management, and zero layout shift across desktop, tablet, and mobile screens.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Responsive Design'],
    projectLink: 'https://nextframe.studio',
    githubUrl: 'https://github.com/nextframe-studio/portfolio',
    isPublished: true,
    year: '2025',
    role: 'Full-Stack Engineering & UI System Architecture',
    keyFeatures: [
      'Mathematical spacing scale and fluid typography with Manrope font pairing',
      'Protected client-side studio project manager with Supabase-ready adapter',
      'High-contrast accessible color system and zero cumulative layout shifts',
    ],
  },
  {
    id: 'hard-surface-3d',
    title: '3D Hard-Surface & Product Visuals',
    category: '2D/3D Design',
    summary: 'Custom hard-surface 3D models with procedural shaders, realistic studio lighting, and digital assets.',
    description:
      'Visual asset production featuring high-detail 3D geometry, procedural metallic shaders, clean edge topology, and realistic three-point studio lighting setups optimized for digital media and product presentation.',
    tags: ['Blender', '3D Modeling', 'Cycles', 'Studio Lighting', 'Photoshop'],
    projectLink: '',
    githubUrl: '',
    isPublished: true,
    year: '2024 - 2025',
    role: '3D Modeling, Texturing, Lighting & Post-Processing',
    keyFeatures: [
      'Hard-surface geometric modeling with clean sub-d topology and beveled edges',
      'Procedural node-based shader networks for realistic brushed metals and glass',
      'Three-point studio lighting configurations and high-resolution renders',
    ],
  },
  {
    id: 'showcase-video-reel',
    title: 'Dynamic Product Showcase Reel',
    category: 'Video Editing',
    summary: 'Paced video edit featuring rhythmic audio synchronization, kinetic title typography, and creative cuts.',
    description:
      'A video showcase production emphasizing rhythmic cuts, precise pacing, customized sound design, color curve grading, and clean typographic motion overlays designed for product launches and portfolios.',
    tags: ['Premiere Pro', 'After Effects', 'Sound Design', 'Color Grading'],
    projectLink: '',
    githubUrl: '',
    isPublished: true,
    year: '2024 - 2025',
    role: 'Video Editing, Sound Design & Motion Graphics',
    keyFeatures: [
      'Beat-matched video cuts and dynamic sequence pacing',
      'Multi-track audio equalization and synchronized sound effects',
      'Cinematic color grading and multi-format export optimization',
    ],
  },
];

const STORAGE_KEY = 'nextframe_studio_projects_v2';
const AUTH_KEY = 'nextframe_admin_authenticated';
const ADMIN_PASSCODE = 'nextframe2025';

// Load all projects from localStorage or fallback to defaults
export const getProjects = (): StudioProject[] => {
  if (typeof window === 'undefined') return INITIAL_STUDIO_PROJECTS;
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed;
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
