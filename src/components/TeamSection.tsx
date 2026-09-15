import React from 'react';
import { TEAM_MEMBERS } from '../data/studioData';
import { TeamCard } from './TeamCard';
import { Users } from 'lucide-react';

export const TeamSection: React.FC = () => {
  return (
    <section id="team" className="py-24 sm:py-32 border-b border-[#222838] bg-[#10141D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3 font-mono text-xs text-[#3B82F6] font-semibold tracking-wider uppercase">
              <span>04 //</span>
              <span>STUDIO BUILDERS</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-5xl text-[#F3F5F9] tracking-[-0.03em] uppercase">
              THE PEOPLE BEHIND NEXTFRAME
            </h2>
            <p className="mt-3 text-base sm:text-lg text-[#94A0B8] max-w-xl font-normal">
              Two engineering students combining software engineering rigor with digital visual art.
            </p>
          </div>

          <div className="flex items-center gap-2 font-mono text-xs text-[#CBD5E1] bg-[#141822] border border-[#2B3346] px-3.5 py-2 rounded-xl shadow-md">
            <Users className="w-4 h-4 text-[#3B82F6]" />
            <span>2-Member Core Studio · Zero Hand-Offs</span>
          </div>
        </div>

        {/* Two-Member Cards Grid (Exactly 2 people: Ranjan & Mohmed Sami) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {TEAM_MEMBERS.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>

      </div>
    </section>
  );
};
