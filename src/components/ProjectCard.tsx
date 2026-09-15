import React from 'react';
import { StudioProject } from '../lib/projectService';
import { ExternalLink, Github, Eye, Layers } from 'lucide-react';

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

  // Render thumbnail image or crisp category graphic banner
  const renderThumbnail = () => {
    if (project.imageUrl && project.imageUrl.trim() !== '') {
      return (
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
        />
      );
    }

    // Default clean visual based on category
    return (
      <div className="w-full h-full bg-[#F8FAFC] border-b border-[#E2E8F0] flex flex-col justify-between p-5 relative overflow-hidden select-none">
        {/* Subtle decorative grid */}
        <div
          className="absolute inset-0 opacity-40 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(to right, #E2E8F0 1px, transparent 1px), linear-gradient(to bottom, #E2E8F0 1px, transparent 1px)`,
            backgroundSize: '24px 24px',
          }}
        />

        {/* Top Mock Window Bar */}
        <div className="relative z-10 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-[#CBD5E1]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#CBD5E1]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#CBD5E1]" />
          </div>
          <span className="text-[11px] font-semibold text-[#64748B] bg-white px-2 py-0.5 rounded border border-[#E2E8F0]">
            {project.category}
          </span>
        </div>

        {/* Center Graphic */}
        <div className="relative z-10 my-4 flex flex-col items-center justify-center text-center">
          <div className="w-12 h-12 rounded-xl bg-white border border-[#E2E8F0] shadow-xs flex items-center justify-center text-[#2563EB] mb-2">
            <Layers className="w-6 h-6" />
          </div>
          <span className="text-xs font-semibold text-[#0F172A] tracking-tight">
            {project.title}
          </span>
        </div>

        {/* Bottom meta */}
        <div className="relative z-10 flex items-center justify-between text-[10px] text-[#64748B]">
          <span>Nextframe Studio</span>
          <span>{project.year || '2025'}</span>
        </div>
      </div>
    );
  };

  return (
    <div className="group rounded-xl bg-white border border-[#E2E8F0] shadow-xs hover:border-[#CBD5E1] transition-all duration-200 flex flex-col justify-between overflow-hidden">
      <div>
        {/* Project Thumbnail (Fixed 16:10 or 16:9 ratio) */}
        <div
          onClick={() => onSelect(project)}
          className="relative w-full aspect-[16/10] bg-[#F1F5F9] cursor-pointer overflow-hidden"
        >
          {renderThumbnail()}
          
          {/* Admin badge if published / hidden */}
          {isAdmin && (
            <div className="absolute top-2.5 right-2.5 z-20">
              <span
                className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border shadow-xs ${
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
          <span className="text-xs font-semibold text-[#2563EB] tracking-wide block">
            {project.category}
          </span>

          {/* Project Title */}
          <h3
            onClick={() => onSelect(project)}
            className="text-lg sm:text-xl font-bold text-[#0F172A] tracking-tight group-hover:text-[#2563EB] transition-colors cursor-pointer"
          >
            {project.title}
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
                  className="text-xs px-2 py-0.5 rounded bg-[#F1F5F9] text-[#475569] font-medium"
                >
                  {tag}
                </span>
              ))}
              {project.tags.length > 4 && (
                <span className="text-xs px-2 py-0.5 rounded bg-[#F8FAFC] text-[#94A3B8]">
                  +{project.tags.length - 4}
                </span>
              )}
            </div>
          )}

        </div>
      </div>

      {/* Card Actions Footer */}
      <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-2 border-t border-[#F1F5F9] flex items-center justify-between gap-3">
        {/* View Project Button */}
        <button
          type="button"
          onClick={() => onSelect(project)}
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold text-white bg-[#0F172A] hover:bg-[#1E293B] transition-colors cursor-pointer"
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
              className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-medium text-[#475569] hover:text-[#0F172A] bg-[#F8FAFC] hover:bg-[#F1F5F9] border border-[#E2E8F0] transition-colors"
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
              className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-medium text-[#2563EB] hover:text-[#1D4ED8] bg-[#EFF6FF] hover:bg-[#DBEAFE] transition-colors"
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
              className="text-xs px-2.5 py-1.5 rounded-lg text-[#2563EB] hover:bg-[#EFF6FF] border border-blue-200 font-semibold cursor-pointer"
            >
              Edit
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
