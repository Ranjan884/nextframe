import React from 'react';
import { TeamMember } from '../data/studioData';
import { Github, Linkedin, Briefcase } from 'lucide-react';

interface TeamCardProps {
  member: TeamMember;
}

export const TeamCard: React.FC<TeamCardProps> = ({ member }) => {
  return (
    <div className="rounded-2xl bg-[#141822] border border-[#222838] p-6 sm:p-8 flex flex-col justify-between shadow-lg hover:border-[#2E384D] hover:shadow-xl transition-all duration-300">
      <div>
        {/* Top: Avatar Slot or Real Photo */}
        <div className="flex items-start justify-between gap-4 mb-6">
          <div className="relative">
            {member.photoUrl ? (
              <img
                src={member.photoUrl}
                alt={member.name}
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl object-cover border-2 border-[#3B82F6] shadow-md"
              />
            ) : (
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-[#0D1017] border border-[#222838] flex flex-col items-center justify-center text-[#F3F5F9] shadow-inner">
                <span className="font-display font-black text-2xl sm:text-3xl text-[#3B82F6]">
                  {member.avatarInitials}
                </span>
                <span className="text-[9px] font-mono text-[#64748B] uppercase tracking-wider mt-1">
                  Nextframe
                </span>
              </div>
            )}
          </div>

          <div className="flex flex-col items-end">
            <span className="font-mono text-[11px] text-[#3B82F6] bg-[#1E2536] border border-[#3B82F6]/30 px-2.5 py-1 rounded-full font-semibold">
              Co-Founder
            </span>
          </div>
        </div>

        {/* Member Name */}
        <h3 className="font-display font-black text-2xl sm:text-3xl text-[#F3F5F9] tracking-tight mb-2">
          {member.name}
        </h3>

        {/* Disciplines string requested */}
        <p className="font-mono text-xs sm:text-sm text-[#3B82F6] font-medium leading-relaxed mb-4">
          {member.rolesDisplay}
        </p>

        {/* Bio */}
        <p className="text-sm sm:text-base text-[#94A0B8] leading-relaxed mb-6 font-normal">
          {member.fullBio}
        </p>

        {/* Disciplines pills */}
        <div className="space-y-2 mb-6">
          <span className="block text-[11px] font-mono font-semibold uppercase tracking-wider text-[#64748B]">
            Focus Areas
          </span>
          <div className="flex flex-wrap gap-1.5">
            {member.disciplines.map((disc) => (
              <span
                key={disc}
                className="px-2.5 py-1 rounded-md bg-[#0D1017] border border-[#222838] text-xs font-mono text-[#CBD5E1]"
              >
                {disc}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Footer: Tools & Social Links */}
      <div className="pt-4 border-t border-[#1C2230] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="block text-[10px] font-mono text-[#64748B] uppercase tracking-wider mb-1">
            Primary Toolset
          </span>
          <p className="text-xs font-mono text-[#CBD5E1]">
            {member.coreTools.slice(0, 5).join(' · ')}
          </p>
        </div>

        {/* Channels */}
        <div className="flex items-center gap-2">
          {member.github && (
            <a
              href={member.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-[#0D1017] hover:bg-[#1E2536] text-[#CBD5E1] hover:text-white border border-[#222838] transition-colors"
              title="GitHub"
            >
              <Github className="w-3.5 h-3.5" />
            </a>
          )}
          {member.linkedin && (
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-[#0D1017] hover:bg-[#1E2536] text-[#3B82F6] hover:text-[#60A5FA] border border-[#222838] transition-colors"
              title="LinkedIn"
            >
              <Linkedin className="w-3.5 h-3.5" />
            </a>
          )}
          {member.freelancer && (
            <a
              href={member.freelancer}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-[#0D1017] hover:bg-[#1E2536] text-[#3B82F6] hover:text-[#60A5FA] border border-[#222838] transition-colors"
              title="Freelancer Profile"
            >
              <Briefcase className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
