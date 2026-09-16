import React from 'react';
import { StudioProject } from '../lib/projectService';
import { ExternalLink, Github, Eye, Gamepad2, Globe, Box, Layers, ArrowUpRight } from 'lucide-react';

interface ProjectCardProps {
  project: StudioProject;
  onSelect: (project: StudioProject) => void;
  isAdmin?: boolean;
  onEdit?: (project: StudioProject) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  onSelect,
  isAdmin = false,
  onEdit,
}) => {
  const hasLiveLink = Boolean(project.projectLink && project.projectLink.trim() !== '');
  const hasGithub = Boolean(project.githubUrl && project.githubUrl.trim() !== '');

  // Render a polished thematic preview banner for each project
  const renderThumbnail = () => {
    if (project.imageUrl && project.imageUrl.trim() !== '') {
      return (
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
          loading="lazy"
        />
      );
    }

    // High quality contextual preview banners
    const id = project.id.toLowerCase();
    const isGame = id.includes('game') || project.category?.toLowerCase().includes('game');

    return (
      <div className="w-full h-full bg-gradient-to-b from-[#F8FAFC] to-[#F1F5F9] border-b border-[#E2E8F0] p-6 flex flex-col justify-between relative overflow-hidden select-none">
        {/* Subtle geometric dot grid pattern */}
        <div
          className="absolute inset-0 opacity-40 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(#CBD5E1 1px, transparent 1px)`,
            backgroundSize: '18px 18px',
          }}
        />

        {/* Top bar with category & indicator */}
        <div className="relative z-10 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#E2E8F0] group-hover:bg-[#93C5FD] transition-colors" />
            <span className="w-2 h-2 rounded-full bg-[#E2E8F0]" />
            <span className="w-2 h-2 rounded-full bg-[#E2E8F0]" />
          </div>
          <span className="text-[11px] font-semibold text-[#475569] bg-white/90 backdrop-blur-xs px-2.5 py-0.5 rounded-md border border-[#E2E8F0] shadow-2xs">
            {project.category}
          </span>
        </div>

        {/* Thematic Mockup Visual */}
        <div className="relative z-10 my-3 flex items-center justify-center">
          {isGame ? (
            <div className="w-full max-w-[280px] bg-white rounded-lg border border-[#E2E8F0] shadow-xs p-3.5 space-y-2.5 group-hover:border-[#BFDBFE] transition-colors">
              <div className="flex items-center justify-between pb-2 border-b border-[#F1F5F9]">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-md bg-[#EFF6FF] text-[#2563EB] flex items-center justify-center">
                    <Gamepad2 className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs font-bold text-[#0F172A]">Game Prototype</span>
                </div>
                <span className="text-[10px] font-medium text-[#2563EB] bg-[#EFF6FF] px-1.5 py-0.5 rounded">
                  Unity / C#
                </span>
              </div>
              <div className="h-10 rounded bg-[#F8FAFC] border border-[#F1F5F9] flex items-center justify-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#2563EB]/20 border border-[#2563EB] animate-pulse" />
                <span className="text-[11px] text-[#475569] font-medium">Interactive Mechanics</span>
              </div>
            </div>
          ) : (
            <div className="w-full max-w-[280px] bg-white rounded-lg border border-[#E2E8F0] shadow-xs p-3.5 space-y-2.5 group-hover:border-[#BFDBFE] transition-colors">
              <div className="flex items-center justify-between pb-2 border-b border-[#F1F5F9]">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-md bg-[#EFF6FF] text-[#2563EB] flex items-center justify-center">
                    <Globe className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs font-bold text-[#0F172A]">{project.title || 'Digital Product'}</span>
                </div>
                <span className="text-[10px] font-medium text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">
                  Production
                </span>
              </div>
              <div className="h-10 rounded bg-[#F8FAFC] border border-[#F1F5F9] flex items-center justify-between px-3 text-[11px] text-[#475569]">
                <span>TypeScript</span>
                <span className="text-[#2563EB] font-medium">Responsive</span>
                <span>Production Ready</span>
              </div>
            </div>
          )}
        </div>

        {/* Bottom meta */}
        <div className="relative z-10 flex items-center justify-between text-[11px] text-[#64748B]">
          <span className="font-medium">Nextframe Studio</span>
          <span>{project.year || '2025'}</span>
        </div>
      </div>
    );
  };

  return (
    <div className="group rounded-2xl bg-white border border-[#E2E8F0] shadow-xs hover:border-[#93C5FD] hover:-translate-y-1 hover:shadow-md transition-all duration-300 ease-out flex flex-col justify-between overflow-hidden">
      <div>
        {/* Project Thumbnail (Clickable, opens case study) */}
        <div
          onClick={() => onSelect(project)}
          className="relative w-full aspect-[16/10] bg-[#F1F5F9] cursor-pointer overflow-hidden border-b border-[#E2E8F0]"
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              onSelect(project);
            }
          }}
          aria-label={`View details for ${project.title}`}
        >
          {renderThumbnail()}

          {/* Admin badge if published / hidden */}
          {isAdmin && (
            <div className="absolute top-3 right-3 z-20">
              <span
                className={`text-[10px] font-semibold px-2.5 py-1 rounded-md border shadow-xs ${
                  project.isPublished
                    ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                    : 'bg-amber-50 text-amber-700 border-amber-200'
                }`}
              >
                {project.isPublished ? 'Published' : 'Hidden'}
              </span>
            </div>
          )}
        </div>

        {/* Card Body */}
        <div className="p-5 sm:p-6 space-y-3">
          {/* Category Tag */}
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-[#2563EB] tracking-wide">
              {project.category}
            </span>
            <span className="text-xs text-[#94A3B8] font-medium">
              {project.year || '2025'}
            </span>
          </div>

          {/* Project Title (Clickable) */}
          <h3
            onClick={() => onSelect(project)}
            className="text-lg sm:text-xl font-bold text-[#0F172A] tracking-tight group-hover:text-[#2563EB] transition-colors cursor-pointer flex items-center justify-between"
          >
            <span>{project.title}</span>
            <ArrowUpRight className="w-4 h-4 text-[#94A3B8] opacity-0 group-hover:opacity-100 group-hover:text-[#2563EB] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 ml-2" />
          </h3>

          {/* Short Description */}
          <p className="text-sm text-[#525F7F] leading-relaxed line-clamp-2">
            {project.description}
          </p>

          {/* Technology Tags */}
          {project.tags && project.tags.length > 0 && (
            <div className="pt-1 flex flex-wrap gap-1.5">
              {project.tags.slice(0, 4).map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2.5 py-1 rounded-md bg-[#F8FAFC] text-[#475569] border border-[#E2E8F0] font-medium"
                >
                  {tag}
                </span>
              ))}
              {project.tags.length > 4 && (
                <span className="text-xs px-2 py-1 rounded-md bg-[#F8FAFC] text-[#94A3B8] border border-[#E2E8F0]">
                  +{project.tags.length - 4}
                </span>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Card Actions Footer */}
      <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-3 border-t border-[#F1F5F9] flex items-center justify-between gap-3 bg-white">
        {/* View Project Button */}
        <button
          type="button"
          onClick={() => onSelect(project)}
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold text-white bg-[#0F172A] hover:bg-[#2563EB] active:scale-[0.98] transition-all duration-200 cursor-pointer shadow-2xs"
        >
          <Eye className="w-3.5 h-3.5" />
          <span>View Project</span>
        </button>

        {/* Secondary Actions (Live link and GitHub button when available) */}
        <div className="flex items-center gap-2">
          {hasGithub && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium text-[#475569] hover:text-[#0F172A] bg-[#F8FAFC] hover:bg-[#F1F5F9] border border-[#E2E8F0] transition-colors"
              title="View on GitHub"
            >
              <Github className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">GitHub</span>
            </a>
          )}

          {hasLiveLink && (
            <a
              href={project.projectLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium text-[#2563EB] hover:text-white bg-[#EFF6FF] hover:bg-[#2563EB] border border-[#DBEAFE] transition-all"
              title="Open Live Project"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Live</span>
            </a>
          )}

          {isAdmin && onEdit && (
            <button
              type="button"
              onClick={() => onEdit(project)}
              className="text-xs px-3 py-2 rounded-lg text-[#2563EB] hover:bg-[#EFF6FF] border border-blue-200 font-semibold transition-colors cursor-pointer"
            >
              Edit
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
