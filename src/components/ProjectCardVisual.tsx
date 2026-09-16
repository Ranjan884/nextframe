import React, { useState } from 'react';
import { Project } from '../data/studioData';
import { Play, Pause, Maximize2, Gamepad2, Globe, Layers } from 'lucide-react';

interface ProjectCardVisualProps {
  project: Project;
  onOpenDetail?: () => void;
}

export const ProjectCardVisual: React.FC<ProjectCardVisualProps> = ({
  project,
  onOpenDetail,
}) => {
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const displayImage = project.image || project.imageUrl;
  const displayVideo = project.video || project.videoUrl;

  // Render project-specific interactive or graphic visual
  const renderInteractiveGraphic = () => {
    if (displayImage) {
      return (
        <img
          src={displayImage}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      );
    }

    const isGame = project.category?.toLowerCase().includes('game');

    if (isGame) {
      return (
        <div className="w-full h-full bg-[#f0fdf4] flex flex-col items-center justify-center p-6 relative overflow-hidden">
          {/* Viewport coordinate grid */}
          <div className="absolute inset-0 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:16px_16px] opacity-25" />

          {/* Unity Scene Simulation */}
          <div className="relative z-10 w-full max-w-sm rounded-xl bg-white border border-[#bbf7d0] shadow-md p-4 transition-transform duration-300 group-hover:-translate-y-1">
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#E5E7EB]">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-md bg-emerald-600 text-white flex items-center justify-center">
                  <Gamepad2 className="w-3.5 h-3.5" />
                </div>
                <span className="font-mono text-xs font-bold text-[#111827]">Game Logic // Mechanics</span>
              </div>
              <span className="font-mono text-[10px] text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded font-semibold">
                60 FPS
              </span>
            </div>

            {/* Game View Canvas Simulation */}
            <div className="h-28 rounded-lg bg-[#0f172a] p-3 flex flex-col justify-between relative overflow-hidden text-white font-mono text-xs">
              <div className="flex justify-between text-[10px] text-emerald-400">
                <span>POS: X:14.2 Y:0.0 Z:8.5</span>
                <span>PHYSICS: ACTIVE</span>
              </div>

              {/* Simulated Character & Platform */}
              <div className="relative h-12 flex items-end justify-center">
                <div className="w-16 h-2 bg-emerald-500 rounded-full" />
                <div className="absolute bottom-3 w-5 h-5 rounded bg-white shadow-lg animate-bounce" />
              </div>

              <div className="flex justify-between items-center text-[9px] text-[#94a3b8]">
                <span>CONTROLLER // ENGINE</span>
                <span className="text-emerald-400 font-semibold">STATE: READY</span>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="w-full h-full bg-[#f8fafc] flex flex-col items-center justify-center p-6 relative overflow-hidden">
        {/* Design System & Creative Interface Preview */}
        <div className="relative z-10 w-full max-w-sm rounded-xl bg-white border border-[#E2E8F0] shadow-md p-4 transition-transform duration-300 group-hover:-translate-y-1">
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#E2E8F0]">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-md bg-[#2563EB] text-white flex items-center justify-center text-[10px] font-bold">
                UI
              </div>
              <span className="font-mono text-xs font-bold text-[#0F172A]">{project.title || 'Digital Product'}</span>
            </div>
            <span className="font-mono text-[10px] text-[#2563EB] bg-[#EFF6FF] px-2 py-0.5 rounded font-semibold border border-[#DBEAFE]">
              Active
            </span>
          </div>

          {/* Interface canvas */}
          <div className="h-28 rounded-lg bg-[#0F172A] p-3 flex flex-col justify-between relative overflow-hidden text-white">
            <div className="flex items-center justify-between">
              <div className="flex gap-1">
                <div className="w-2 h-2 rounded-full bg-red-400" />
                <div className="w-2 h-2 rounded-full bg-amber-400" />
                <div className="w-2 h-2 rounded-full bg-emerald-400" />
              </div>
              <span className="text-[9px] font-mono text-[#94A3B8]">FAST · 0ms LATENCY</span>
            </div>
            <div className="grid grid-cols-3 gap-2 my-auto">
              <div className="h-10 rounded bg-white/10 p-1.5 flex flex-col justify-between">
                <div className="w-3 h-3 rounded bg-[#2563EB]" />
                <div className="w-8 h-1 bg-white/40 rounded" />
              </div>
              <div className="h-10 rounded bg-white/10 p-1.5 flex flex-col justify-between">
                <div className="w-3 h-3 rounded bg-emerald-500" />
                <div className="w-10 h-1 bg-white/40 rounded" />
              </div>
              <div className="h-10 rounded bg-white/10 p-1.5 flex flex-col justify-between">
                <div className="w-3 h-3 rounded bg-indigo-500" />
                <div className="w-6 h-1 bg-white/40 rounded" />
              </div>
            </div>
            <div className="flex justify-between items-center text-[9px] font-mono text-[#94A3B8]">
              <span>INTERACTION: READY</span>
              <span className="text-[#38BDF8]">100% RESPONSIVE</span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative w-full aspect-video rounded-xl overflow-hidden border border-[#222838] bg-[#0D1017] cursor-pointer group select-none shadow-md"
      onClick={onOpenDetail}
    >
      {/* Visual Content: Video Player or Graphic Simulation */}
      {isPlayingVideo && displayVideo ? (
        <div className="w-full h-full bg-[#0D1017] flex flex-col items-center justify-center p-4">
          <iframe
            src={displayVideo}
            title={project.title}
            className="w-full h-full rounded"
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        </div>
      ) : (
        renderInteractiveGraphic()
      )}

      {/* Top Left Status Pill */}
      <div className="absolute top-3 left-3 z-20 flex items-center gap-2">
        <span className="px-2.5 py-1 rounded-full bg-[#0D1017]/90 border border-[#2B3346] text-[11px] font-mono font-medium text-[#F3F5F9] shadow-md backdrop-blur-xs">
          {project.status || 'Selected Work'}
        </span>
      </div>

      {/* Top Right Quick Controls */}
      <div className="absolute top-3 right-3 z-20 flex items-center gap-1.5 opacity-90 group-hover:opacity-100 transition-opacity">
        {displayVideo && (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setIsPlayingVideo(!isPlayingVideo);
            }}
            className="p-2 rounded-lg bg-[#141822]/90 hover:bg-[#1E2536] border border-[#2B3346] text-[#F3F5F9] hover:text-[#3B82F6] shadow-md transition-colors cursor-pointer"
            title={isPlayingVideo ? 'Close video' : 'Watch video preview'}
          >
            {isPlayingVideo ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
          </button>
        )}

        {/* Inspect Modal Trigger */}
        {onOpenDetail && (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onOpenDetail();
            }}
            className="p-2 rounded-lg bg-[#141822]/90 hover:bg-[#1E2536] border border-[#2B3346] text-[#F3F5F9] hover:text-[#3B82F6] shadow-md transition-colors cursor-pointer"
            title="Inspect project details"
          >
            <Maximize2 className="w-3.5 h-3.5" />
          </button>
        )}
      </div>

      {/* Bottom overlay bar on hover */}
      <div className="absolute bottom-0 inset-x-0 p-3 bg-[#141822]/95 border-t border-[#2B3346] transform translate-y-full group-hover:translate-y-0 transition-transform duration-200 flex items-center justify-between text-xs font-mono text-[#94A0B8]">
        <span>Click to explore case study</span>
        <span className="text-[#3B82F6] font-semibold">View Details ↗</span>
      </div>
    </div>
  );
};
