import React, { useEffect, useRef, useState } from 'react';

export const HeroVisual: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let width = (canvas.width = 460);
    let height = (canvas.height = 460);

    const handleResize = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      width = Math.min(rect.width, 500);
      height = width;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    let time = 0;
    let currentTiltX = 0;
    let currentTiltY = 0;

    const render = () => {
      time += 0.015;

      // Smooth interpolation toward target cursor offset
      const targetTiltX = isHovered ? (mousePos.x - 0.5) * 35 : Math.sin(time * 0.5) * 12;
      const targetTiltY = isHovered ? (mousePos.y - 0.5) * 35 : Math.cos(time * 0.4) * 12;
      currentTiltX += (targetTiltX - currentTiltX) * 0.08;
      currentTiltY += (targetTiltY - currentTiltY) * 0.08;

      ctx.clearRect(0, 0, width, height);

      const centerX = width / 2;
      const centerY = height / 2;

      // 1. Subtle background grid dots
      const gridSize = 24;
      for (let x = 20; x < width; x += gridSize) {
        for (let y = 20; y < height; y += gridSize) {
          const dx = x - (centerX + currentTiltX * 0.5);
          const dy = y - (centerY + currentTiltY * 0.5);
          const dist = Math.sqrt(dx * dx + dy * dy);
          const alpha = Math.max(0.04, 0.22 - dist / (width * 0.7));
          ctx.fillStyle = `rgba(148, 163, 184, ${alpha})`;
          ctx.fillRect(x, y, 1.5, 1.5);
        }
      }

      // 2. Geometric Frame Layers (Inspired by Nextframe logo)
      const frames = [
        { size: 280, color: '#222838', stroke: 1.2, rot: 0, dash: [] },
        { size: 220, color: '#475569', stroke: 1.5, rot: currentTiltX * 0.015, dash: [4, 4] },
        { size: 160, color: '#3B82F6', stroke: 2, rot: -currentTiltY * 0.02, dash: [] },
      ];

      frames.forEach((f, idx) => {
        ctx.save();
        ctx.translate(centerX + currentTiltX * (idx + 1) * 0.3, centerY + currentTiltY * (idx + 1) * 0.3);
        ctx.rotate(f.rot);

        ctx.strokeStyle = f.color;
        ctx.lineWidth = f.stroke;
        ctx.setLineDash(f.dash);

        const half = f.size / 2;
        ctx.strokeRect(-half, -half, f.size, f.size);

        // Corner tick marks on outer frame
        if (idx === 0) {
          ctx.setLineDash([]);
          ctx.strokeStyle = '#2457D6';
          ctx.lineWidth = 2;
          const tick = 12;
          // Top-left
          ctx.beginPath();
          ctx.moveTo(-half, -half + tick);
          ctx.lineTo(-half, -half);
          ctx.lineTo(-half + tick, -half);
          ctx.stroke();
          // Top-right
          ctx.beginPath();
          ctx.moveTo(half - tick, -half);
          ctx.lineTo(half, -half);
          ctx.lineTo(half, -half + tick);
          ctx.stroke();
          // Bottom-left
          ctx.beginPath();
          ctx.moveTo(-half, half - tick);
          ctx.lineTo(-half, half);
          ctx.lineTo(-half + tick, half);
          ctx.stroke();
          // Bottom-right
          ctx.beginPath();
          ctx.moveTo(half - tick, half);
          ctx.lineTo(half, half);
          ctx.lineTo(half, half - tick);
          ctx.stroke();
        }

        ctx.restore();
      });

      // 3. Dynamic Forward Frame Arrow (The Nextframe motif)
      ctx.save();
      ctx.translate(centerX + currentTiltX * 0.8, centerY + currentTiltY * 0.8);

      // Inner Nextframe Core
      ctx.fillStyle = '#141822';
      ctx.beginPath();
      ctx.roundRect(-42, -42, 84, 84, 16);
      ctx.fill();

      // Subtle shadow outline
      ctx.strokeStyle = '#3B82F6';
      ctx.lineWidth = 2;
      ctx.stroke();

      // Bracket mark (White)
      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      ctx.moveTo(-20, -18);
      ctx.lineTo(-4, -18);
      ctx.lineTo(-4, -12);
      ctx.lineTo(-14, -12);
      ctx.lineTo(-14, 12);
      ctx.lineTo(-4, 12);
      ctx.lineTo(-4, 18);
      ctx.lineTo(-20, 18);
      ctx.closePath();
      ctx.fill();

      // Dynamic forward chevron (Signature Electric Blue #2457D6)
      ctx.fillStyle = '#2457D6';
      ctx.beginPath();
      ctx.moveTo(4, -18);
      ctx.lineTo(22, 0);
      ctx.lineTo(4, 18);
      ctx.lineTo(4, 10);
      ctx.lineTo(14, 0);
      ctx.lineTo(4, -10);
      ctx.closePath();
      ctx.fill();

      // Precision coordinate point
      ctx.beginPath();
      ctx.arc(-3, 0, 3, 0, Math.PI * 2);
      ctx.fill();

      ctx.restore();

      // 4. Subtle orbital blue ray/pulse
      const pulseRadius = 140 + Math.sin(time * 2) * 10;
      ctx.save();
      ctx.translate(centerX + currentTiltX * 0.4, centerY + currentTiltY * 0.4);
      ctx.strokeStyle = 'rgba(36, 87, 214, 0.25)';
      ctx.lineWidth = 1;
      ctx.setLineDash([3, 6]);
      ctx.beginPath();
      ctx.arc(0, 0, pulseRadius, 0, Math.PI * 2);
      ctx.stroke();

      // Orbiting pulse node
      const nodeAngle = time * 0.8;
      const nx = Math.cos(nodeAngle) * pulseRadius;
      const ny = Math.sin(nodeAngle) * pulseRadius;
      ctx.fillStyle = '#2457D6';
      ctx.beginPath();
      ctx.arc(nx, ny, 3.5, 0, Math.PI * 2);
      ctx.fill();

      ctx.restore();

      animationId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, [mousePos, isHovered]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setMousePos({ x, y });
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative w-full aspect-square max-w-[440px] mx-auto flex items-center justify-center p-4 cursor-crosshair group select-none"
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full object-contain relative z-10"
      />

      {/* Subtle Frame Telemetry Badges */}
      <div className="absolute top-2 left-4 font-mono text-[10px] text-[#94A0B8] bg-[#141822]/90 border border-[#2B3346] px-2.5 py-1 rounded-md shadow-xs z-20">
        FRAME // 01 · 60 FPS
      </div>

      <div className="absolute bottom-2 right-4 font-mono text-[10px] text-[#93C5FD] bg-[#1E293B] border border-[#3B82F6]/40 px-2.5 py-1 rounded-md shadow-xs z-20 flex items-center gap-1.5">
        <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] animate-pulse" />
        <span>INTERACTIVE COORDINATES</span>
      </div>
    </div>
  );
};
