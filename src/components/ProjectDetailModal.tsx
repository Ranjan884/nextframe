import React, { useEffect } from 'react';
import { StudioProject } from '../lib/projectService';
import { X, ExternalLink, Github, CheckCircle2, Layers } from 'lucide-react';

interface ProjectDetailModalProps {
  project: StudioProject | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const hasLiveLink = Boolean(project.projectLink && project.projectLink.trim() !== '');
  const hasGithub = Boolean(project.githubUrl && project.githubUrl.trim() !== '');

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/50 backdrop-blur-xs animate-in fade-in duration-150"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white border border-[#E2E8F0] rounded-2xl p-6 sm:p-8 shadow-xl text-[#0F172A]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-[#F8FAFC] border border-[#E2E8F0] flex items-center justify-center text-[#64748B] hover:text-[#0F172A] hover:bg-[#F1F5F9] transition-colors"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Category & Status */}
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs font-semibold px-2.5 py-1 rounded bg-[#EFF6FF] text-[#2563EB] border border-[#DBEAFE]">
            {project.category}
          </span>
          <span className="text-xs text-[#64748B]">Nextframe Studio</span>
        </div>

        {/* Title */}
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight mb-3">
          {project.title}
        </h2>

        {/* Image Preview if available */}
        {project.imageUrl && (
          <div className="my-5 w-full aspect-video rounded-xl overflow-hidden border border-[#E2E8F0] bg-gray-50">
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {/* Overview Description */}
        <div className="space-y-4 my-5 text-sm sm:text-base text-[#475569] leading-relaxed">
          <p>{project.description}</p>
        </div>

        {/* Key Highlights / Features if present */}
        {project.keyFeatures && project.keyFeatures.length > 0 && (
          <div className="my-5 p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]">
            <h4 className="text-xs font-bold text-[#0F172A] uppercase tracking-wider mb-2.5">
              Project Highlights
            </h4>
            <ul className="space-y-2">
              {project.keyFeatures.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-[#475569]">
                  <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Technology Tags */}
        {project.tags && project.tags.length > 0 && (
          <div className="my-5">
            <h4 className="text-xs font-bold text-[#0F172A] uppercase tracking-wider mb-2">
              Technologies &amp; Tools
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2.5 py-1 rounded-md bg-[#F1F5F9] text-[#334155] font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="pt-5 mt-5 border-t border-[#E2E8F0] flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            {hasLiveLink && (
              <a
                href={project.projectLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs font-semibold transition-colors"
              >
                <span>Open Live Project</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}

            {hasGithub && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#0F172A] hover:bg-[#1E293B] text-white text-xs font-semibold transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>View Source on GitHub</span>
              </a>
            )}
          </div>

          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-[#64748B] hover:text-[#0F172A]"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
