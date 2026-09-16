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
import { Plus, Settings, LogOut } from 'lucide-react';

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

    return cat.includes(filter);
  });

  const handleEditFromCard = (project: StudioProject) => {
    setEditingProject(project);
    setIsManagerOpen(true);
  };

  return (
    <section id="projects" className="py-12 sm:py-16 bg-white border-b border-[#E2E8F0]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Protected Admin Bar (Visible ONLY when logged in as admin) */}
        {isAdmin && (
          <div className="mb-6 p-4 rounded-xl bg-[#EFF6FF] border border-[#BFDBFE] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
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
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#2563EB] text-white font-semibold hover:bg-[#1D4ED8] transition-colors cursor-pointer"
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
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-[#BFDBFE] text-[#1E3A8A] font-semibold hover:bg-blue-50 transition-colors cursor-pointer"
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
                className="p-1.5 rounded-lg text-[#64748B] hover:text-[#0F172A] hover:bg-white cursor-pointer"
                title="Exit Admin"
              >
                <LogOut className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* Sleek Category Filter Tabs - Starting directly at top of Projects */}
        <div className="flex items-center justify-start overflow-x-auto pb-2 scrollbar-none gap-2">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer whitespace-nowrap ${
                  isActive
                    ? 'bg-[#0F172A] text-white shadow-xs'
                    : 'bg-[#F8FAFC] text-[#64748B] hover:text-[#0F172A] hover:bg-[#EDF2F7] border border-[#E2E8F0]'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Clean Project Grid (2 columns for maximum visual focus) */}
        {displayedProjects.length === 0 ? (
          <div className="py-14 sm:py-16 text-center rounded-2xl border border-dashed border-[#CBD5E1] bg-[#F8FAFC] p-8 text-[#64748B] mt-6">
            <p className="text-base font-semibold text-[#0F172A] mb-1">
              {allProjects.length === 0 ? 'Portfolio Updates in Progress' : 'No projects found in this category.'}
            </p>
            <p className="text-xs sm:text-sm text-[#64748B] max-w-md mx-auto mb-5 leading-relaxed">
              {allProjects.length === 0
                ? 'Selected project case studies are being updated. In the meantime, explore our active repositories on GitHub or log in to manage studio projects.'
                : 'Try selecting another category filter or view all projects.'}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {allProjects.length === 0 ? (
                <>
                  <a
                    href="https://github.com/boby-raj"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#0F172A] text-white text-xs font-semibold hover:bg-[#1E293B] transition-colors cursor-pointer"
                  >
                    View GitHub Repositories ↗
                  </a>
                  {!isAdmin && (
                    <button
                      type="button"
                      onClick={() => setIsAuthOpen(true)}
                      className="px-4 py-2 rounded-lg bg-white border border-[#CBD5E1] text-[#0F172A] text-xs font-semibold hover:bg-[#F1F5F9] transition-colors cursor-pointer"
                    >
                      Studio Access
                    </button>
                  )}
                </>
              ) : (
                <button
                  type="button"
                  onClick={() => setActiveCategory('All')}
                  className="px-4 py-2 rounded-lg bg-[#0F172A] text-white text-xs font-semibold hover:bg-[#1E293B] transition-colors cursor-pointer"
                >
                  Show All Projects
                </button>
              )}
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7 sm:gap-8 mt-6 sm:mt-8">
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
