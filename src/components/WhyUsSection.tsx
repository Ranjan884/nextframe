import React from 'react';
import { WHY_US_POINTS } from '../data/studioData';
import { MessageSquare, Zap, Target, Smartphone, RefreshCw, BookOpen, Check } from 'lucide-react';

export const WhyUsSection: React.FC = () => {
  const iconList = [
    <MessageSquare key="1" className="w-5 h-5 text-[#3B82F6]" />,
    <Zap key="2" className="w-5 h-5 text-[#3B82F6]" />,
    <Target key="3" className="w-5 h-5 text-[#3B82F6]" />,
    <Smartphone key="4" className="w-5 h-5 text-[#3B82F6]" />,
    <RefreshCw key="5" className="w-5 h-5 text-[#3B82F6]" />,
    <BookOpen key="6" className="w-5 h-5 text-[#3B82F6]" />,
    <Check key="7" className="w-5 h-5 text-[#3B82F6]" />,
  ];

  return (
    <section id="why-us" className="py-24 sm:py-32 border-b border-[#222838] bg-[#0D1017]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3 font-mono text-xs text-[#3B82F6] font-semibold tracking-wider uppercase">
              <span>05 //</span>
              <span>STUDIO STANDARDS</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-5xl text-[#F3F5F9] tracking-[-0.03em] uppercase">
              WHY NEXTFRAME?
            </h2>
          </div>
          <p className="max-w-md text-base text-[#94A0B8]">
            Working with an independent, dedicated two-person studio gives you direct communication, fast iteration, and craft without agency bloat.
          </p>
        </div>

        {/* 7 Clean Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {WHY_US_POINTS.map((point, idx) => (
            <div
              key={point.number}
              className={`p-6 sm:p-7 rounded-2xl border transition-all duration-200 ${
                idx === 0
                  ? 'bg-[#141822] border-[#3B82F6]/50 shadow-lg'
                  : 'bg-[#141822] border-[#222838] hover:border-[#2E384D] shadow-md'
              }`}
            >
              {/* Header with number and icon */}
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#0D1017] border border-[#222838] flex items-center justify-center">
                  {iconList[idx]}
                </div>
                <span className="font-mono text-xs font-bold text-[#3B82F6]">
                  {point.number} //
                </span>
              </div>

              {/* Title */}
              <h3 className="font-display font-bold text-lg text-[#F3F5F9] mb-2">
                {point.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-[#94A0B8] leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}

          {/* 8th Balancing Card: Direct Hire CTA */}
          <div className="p-6 sm:p-7 rounded-2xl bg-[#141822] text-[#F3F5F9] flex flex-col justify-between border border-[#3B82F6]/40 shadow-xl">
            <div>
              <span className="font-mono text-xs text-[#3B82F6] uppercase tracking-wider font-semibold block mb-2">
                Ready to Start?
              </span>
              <h3 className="font-display font-bold text-xl text-[#F3F5F9] mb-2">
                Let's discuss your next project.
              </h3>
              <p className="text-xs sm:text-sm text-[#94A0B8] leading-relaxed">
                Send us a short brief or inquiry. Ranjan and Mohmed Sami review every message directly.
              </p>
            </div>

            <a
              href="#contact"
              className="mt-6 inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs font-mono font-semibold uppercase tracking-wider transition-colors cursor-pointer shadow-md"
            >
              <span>Get In Touch ↗</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
