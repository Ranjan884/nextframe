import React, { useState } from 'react';
import { Project } from '../data/studioData';
import { Play, Pause, Maximize2, Droplets, Gamepad2, Globe, Layers } from 'lucide-react';

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

    switch (project.id) {
      case 'aquatrack':
        return (
          <div className="w-full h-full bg-[#EAF0FF] flex flex-col items-center justify-center p-6 relative overflow-hidden">
            {/* Water rings animation */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-56 h-56 rounded-full border border-[#bfdbfe] animate-ping opacity-25" />
              <div className="w-40 h-40 rounded-full border border-[#93c5fd] opacity-35" />
            </div>

            {/* AquaTrack UI Mockup Window */}
            <div className="relative z-10 w-full max-w-sm rounded-xl bg-white border border-[#bfdbfe] shadow-md p-4 transition-transform duration-300 group-hover:-translate-y-1">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#E5E7EB]">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-md bg-[#2457D6] text-white flex items-center justify-center">
                    <Droplets className="w-3.5 h-3.5" />
                  </div>
                  <span className="font-mono text-xs font-bold text-[#111827]">AquaTrack // Telemetry</span>
                </div>
                <span className="font-mono text-[10px] text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full font-semibold">
                  Live Metric
                </span>
              </div>

              {/* Mock Gauges */}
              <div className="grid grid-cols-2 gap-2 mb-3">
                <div className="p-2.5 rounded-lg bg-[#F6F8FC] border border-[#E5E7EB]">
                  <span className="text-[10px] font-mono text-[#667085] block">Daily Liters</span>
                  <span className="text-lg font-mono font-bold text-[#2457D6]">142.4 L</span>
                  <div className="w-full bg-[#E5E7EB] h-1 rounded-full mt-1 overflow-hidden">
                    <div className="bg-[#2457D6] h-full w-[65%]" />
                  </div>
                </div>
                <div className="p-2.5 rounded-lg bg-[#F6F8FC] border border-[#E5E7EB]">
                  <span className="text-[10px] font-mono text-[#667085] block">Efficiency</span>
                  <span className="text-lg font-mono font-bold text-emerald-600">+18.2%</span>
                  <div className="w-full bg-[#E5E7EB] h-1 rounded-full mt-1 overflow-hidden">
                    <div className="bg-emerald-500 h-full w-[82%]" />
                  </div>
                </div>
              </div>

              {/* Micro graph line */}
              <div className="h-10 w-full flex items-end justify-between gap-1 pt-2 px-1">
                {[45, 60, 35, 70, 50, 40, 65, 80, 55, 30, 60, 48].map((val, idx) => (
                  <div
                    key={idx}
                    style={{ height: `${val}%` }}
                    className="w-full bg-[#2457D6]/30 hover:bg-[#2457D6] rounded-t-xs transition-colors"
                  />
                ))}
              </div>
            </div>
          </div>
        );

      case 'game-development':
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
                  <span className="font-mono text-xs font-bold text-[#111827]">Unity Engine // C# Logic</span>
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
                  <span>RIGIDBODY // KINEMATIC</span>
                  <span className="text-emerald-400 font-semibold">STATE: GROUNDED</span>
                </div>
              </div>
            </div>
          </div>
        );

      case 'web-experiences':
        return (
          <div className="w-full h-full bg-[#f5f3ff] flex flex-col items-center justify-center p-6 relative overflow-hidden">
            {/* Animated floating layout panels */}
            <div className="relative z-10 w-full max-w-sm rounded-xl bg-white border border-[#ddd6fe] shadow-md p-4 transition-transform duration-300 group-hover:-translate-y-1">
              <div className="flex items-center justify-between pb-2 mb-3 border-b border-[#E5E7EB]">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-md bg-indigo-600 text-white flex items-center justify-center">
                    <Globe className="w-3.5 h-3.5" />
                  </div>
                  <span className="font-mono text-xs font-bold text-[#111827]">Full-Stack Web Core</span>
                </div>
                <span className="font-mono text-[10px] text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded font-semibold">
                  100/100 Lighthouse
                </span>
              </div>

              {/* Modern Grid Wireframe */}
              <div className="space-y-2">
                <div className="h-4 bg-indigo-50 rounded border border-indigo-100 flex items-center px-2">
                  <div className="w-12 h-1.5 bg-indigo-400 rounded" />
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <div className="h-14 rounded bg-indigo-50/60 border border-indigo-100 p-2 flex flex-col justify-between">
                    <div className="w-4 h-4 rounded bg-indigo-200" />
                    <div className="w-8 h-1 bg-indigo-300 rounded" />
                  </div>
                  <div className="h-14 rounded bg-indigo-50/60 border border-indigo-100 p-2 flex flex-col justify-between">
                    <div className="w-4 h-4 rounded bg-indigo-200" />
                    <div className="w-8 h-1 bg-indigo-300 rounded" />
                  </div>
                  <div className="h-14 rounded bg-indigo-50/60 border border-indigo-100 p-2 flex flex-col justify-between">
                    <div className="w-4 h-4 rounded bg-indigo-200" />
                    <div className="w-8 h-1 bg-indigo-300 rounded" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case '3d-motion':
      default:
        return (
          <div className="w-full h-full bg-[#faf5ff] flex flex-col items-center justify-center p-6 relative overflow-hidden">
            {/* 3D wireframe prism */}
            <div className="relative z-10 w-full max-w-sm rounded-xl bg-white border border-[#f3e8ff] shadow-md p-4 transition-transform duration-300 group-hover:-translate-y-1">
              <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#E5E7EB]">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-md bg-purple-600 text-white flex items-center justify-center">
                    <Layers className="w-3.5 h-3.5" />
                  </div>
                  <span className="font-mono text-xs font-bold text-[#111827]">Blender // Cycles 3D</span>
                </div>
                <span className="font-mono text-[10px] text-purple-700 bg-purple-50 px-2 py-0.5 rounded font-semibold">
                  EEVEE Next
                </span>
              </div>

              {/* 3D Viewport composition */}
              <div className="h-28 rounded-lg bg-[#18181b] p-3 flex flex-col items-center justify-center relative overflow-hidden">
                <div className="w-14 h-14 border-2 border-purple-400 rotate-45 flex items-center justify-center animate-spin [animation-duration:12s] shadow-[0_0_15px_rgba(168,85,247,0.3)]">
                  <div className="w-7 h-7 bg-purple-500/40 rounded-xs" />
                </div>
                <div className="absolute bottom-2 left-3 text-[9px] font-mono text-purple-300">
                  SHADING: PROCEDURAL
                </div>
                <div className="absolute bottom-2 right-3 text-[9px] font-mono text-zinc-400">
                  SAMPLES: 512
                </div>
              </div>
            </div>
          </div>
        );
    }
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
