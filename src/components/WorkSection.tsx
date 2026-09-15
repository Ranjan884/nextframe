import React, { useState, useEffect } from 'react';
import {
  StudioProject,
  getProjects,
  getPublishedProjects,
  isAdminAuthenticated,
  logoutAdmin,
} from '../lib/projectService';
import { ProjectCard } from './ProjectCard';
import { ProjectDetailModal } from './ProjectDetailModal';
import { StudioProjectManagerModal } from './StudioProjectManagerModal';
import { StudioAuthModal } from './StudioAuthModal';
import { Plus, Settings, LogOut, Lock } from 'lucide-react';

export const WorkSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<StudioProject | null>(null);
  const [allProjects, setAllProjects] = useState<StudioProject[]>([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isManagerOpen, setIsManagerOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [editingProject, setEditingProject] = useState<StudioProject | null>(null);

  const loadData = () => {
    const adminStatus = isAdminAuthenticated();
    setIsAdmin(adminStatus);
    const loaded = adminStatus ? getProjects() : getPublishedProjects();
    setAllProjects(loaded);
  };

  useEffect(() => {
    loadData();

    const handleProjectsUpdate = () => {
      loadData();
    };

    const handleAuthChange = () => {
      loadData();
    };

    const handleOpenAdminEvent = () => {
      if (isAdminAuthenticated()) {
        setIsManagerOpen(true);
      } else {
        setIsAuthOpen(true);
      }
    };

    window.addEventListener('nextframe_projects_updated', handleProjectsUpdate);
    window.addEventListener('nextframe_auth_changed', handleAuthChange);
    window.addEventListener('open-studio-admin', handleOpenAdminEvent);

    return () => {
      window.removeEventListener('nextframe_projects_updated', handleProjectsUpdate);
      window.removeEventListener('nextframe_auth_changed', handleAuthChange);
      window.removeEventListener('open-studio-admin', handleOpenAdminEvent);
    };
  }, []);

  const categories = [
    'All',
    'Web Development',
    'Full-Stack Development',
    'Game Development',
    '2D/3D Design',
    'Video Editing',
  ];

  const displayedProjects = allProjects.filter((project) => {
    // Normal visitors only ever see published projects
    if (!isAdmin && project.isPublished === false) return false;

    if (activeCategory === 'All') return true;

    const cat = (project.category || '').toLowerCase();
    const filter = activeCategory.toLowerCase();

    if (filter.includes('web')) return cat.includes('web');
    if (filter.includes('full-stack')) return cat.includes('full-stack') || cat.includes('stack');
    if (filter.includes('game')) return cat.includes('game') || cat.includes('unity');
    if (filter.includes('3d')) return cat.includes('3d') || cat.includes('design');
    if (filter.includes('video')) return cat.includes('video') || cat.includes('motion');

    return cat.includes(filter);
  });

  const handleEditFromCard = (project: StudioProject) => {
    setEditingProject(project);
    setIsManagerOpen(true);
  };

  return (
    <section id="projects" className="py-20 sm:py-28 bg-white border-b border-[#E2E8F0]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 gap-6">
          <div>
            <span className="text-xs font-semibold text-[#2563EB] tracking-wider uppercase block mb-2">
              Featured Work
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
              Selected Projects
            </h2>
            <p className="mt-3 text-base text-[#525F7F] max-w-xl">
              A curated selection of real websites, gameplay systems, 3D assets, and media produced by Nextframe Studio.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] self-start md:self-end">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                    isActive
                      ? 'bg-[#0F172A] text-white'
                      : 'text-[#64748B] hover:text-[#0F172A] hover:bg-[#EDF2F7]'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Protected Admin Bar (Visible ONLY when logged in as admin) */}
        {isAdmin && (
          <div className="mb-8 p-4 rounded-xl bg-[#EFF6FF] border border-[#BFDBFE] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
              <span className="font-bold text-[#1E3A8A]">
                Studio Admin Mode Active
              </span>
              <span className="text-[#64748B] hidden sm:inline">•</span>
              <span className="text-[#3B82F6] hidden sm:inline">
                You can add, edit, delete, and publish/hide projects.
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => {
                  setEditingProject(null);
                  setIsManagerOpen(true);
                }}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#2563EB] text-white font-semibold hover:bg-[#1D4ED8] transition-colors"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Add Project</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setEditingProject(null);
                  setIsManagerOpen(true);
                }}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-[#BFDBFE] text-[#1E3A8A] font-semibold hover:bg-blue-50 transition-colors"
              >
                <Settings className="w-3.5 h-3.5" />
                <span>Manage ({allProjects.length})</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  logoutAdmin();
                  setIsAdmin(false);
                  loadData();
                }}
                className="p-1.5 rounded-lg text-[#64748B] hover:text-[#0F172A] hover:bg-white"
                title="Exit Admin"
              >
                <LogOut className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* Clean Project Grid (2 columns for high visual clarity, matching human studio layouts) */}
        {displayedProjects.length === 0 ? (
          <div className="py-16 text-center rounded-2xl border border-dashed border-[#E2E8F0] p-8 text-[#64748B]">
            <p className="text-sm font-medium">
              No projects found in this category.
            </p>
            <button
              type="button"
              onClick={() => setActiveCategory('All')}
              className="mt-3 px-4 py-2 rounded-lg bg-[#0F172A] text-white text-xs font-semibold"
            >
              Show All Projects
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7 sm:gap-8">
            {displayedProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onSelect={(proj) => setSelectedProject(proj)}
                isAdmin={isAdmin}
                onEdit={handleEditFromCard}
              />
            ))}
          </div>
        )}

      </div>

      {/* Project Case Study Detail Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Protected Studio Project Manager (Add / Edit / Delete) */}
      <StudioProjectManagerModal
        isOpen={isManagerOpen}
        onClose={() => {
          setIsManagerOpen(false);
          setEditingProject(null);
        }}
        projects={allProjects}
        onProjectsUpdated={loadData}
        initialEditingProject={editingProject}
      />

      {/* Protected Passcode Modal */}
      <StudioAuthModal
        isOpen={isAuthOpen}
        onClose={() => setIsAuthOpen(false)}
        onSuccess={() => {
          setIsAuthOpen(false);
          setIsAdmin(true);
          loadData();
          setIsManagerOpen(true);
        }}
      />
    </section>
  );
};
