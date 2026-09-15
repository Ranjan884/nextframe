import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-28 bg-white border-b border-[#E2E8F0]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <span className="text-xs font-semibold text-[#2563EB] tracking-wider uppercase block mb-2">
            About Nextframe
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
            Independent Studio, Direct Collaboration
          </h2>
          <p className="mt-3 text-base text-[#525F7F] leading-relaxed">
            Nextframe is a two-person creative technology studio founded by Ranjan and Mohmed Sami. We combine software development, 3D modeling, and media production to build clean digital products.
          </p>
        </div>

        {/* Narrative & Philosophy Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start mb-16">
          
          <div className="lg:col-span-6 space-y-4 text-sm sm:text-base text-[#475569] leading-relaxed">
            <h3 className="text-lg font-bold text-[#0F172A]">
              Built by engineers who care about design.
            </h3>
            <p>
              We started Nextframe because we love the intersection of robust programming and visual design. Too often, software is functionally sound but visually uninspired, or visually stylish but technically fragile.
            </p>
            <p>
              By handling both the code and the creative production ourselves, we eliminate communication layers and ensure every screen, animation, and asset fits together naturally.
            </p>
          </div>

          <div className="lg:col-span-6 space-y-4 text-sm sm:text-base text-[#475569] leading-relaxed">
            <h3 className="text-lg font-bold text-[#0F172A]">
              How we work with clients.
            </h3>
            <p>
              When you work with Nextframe, you work directly with the two people building your project. There are no project managers, no outsourced contractors, and no generic templates.
            </p>
            <p>
              Whether you need a responsive web application, interactive game mechanics in Unity, custom 3D hard-surface assets in Blender, or high-paced video editing, we deliver thoughtful work on time.
            </p>
          </div>

        </div>

        {/* Team Cards (The Founders: Ranjan & Mohmed Sami) */}
        <div>
          <div className="mb-6">
            <h3 className="text-xl font-bold text-[#0F172A]">
              The Studio Founders
            </h3>
            <p className="text-sm text-[#64748B] mt-1">
              Direct engineering and creative craft on every single project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            
            {/* Ranjan Card */}
            <div className="p-6 sm:p-7 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="w-16 h-16 rounded-xl bg-white border border-[#E2E8F0] flex items-center justify-center text-xl font-bold text-[#2563EB] shadow-xs">
                    R
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded bg-[#EFF6FF] text-[#2563EB] border border-[#DBEAFE]">
                    Co-Founder
                  </span>
                </div>

                <h4 className="text-xl font-bold text-[#0F172A]">
                  Ranjan
                </h4>
                <p className="text-xs font-semibold text-[#2563EB] mt-0.5 mb-3">
                  Web, App &amp; Game Development
                </p>

                <p className="text-sm text-[#525F7F] leading-relaxed mb-4">
                  Focuses on full-stack architecture, responsive frontend applications, TypeScript codebases, and interactive Unity game mechanics. Passionate about clean code, performance, and intuitive user experiences.
                </p>

                <div className="flex flex-wrap gap-1.5 mb-6">
                  {['Web Development', 'Full-Stack', 'App Development', 'Unity / Game Dev'].map((skill) => (
                    <span key={skill} className="text-xs px-2 py-0.5 rounded bg-white border border-[#E2E8F0] text-[#475569] font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-[#E2E8F0] flex items-center gap-3">
                <a
                  href="https://github.com/nextframe-studio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-white border border-[#E2E8F0] text-[#64748B] hover:text-[#0F172A] hover:bg-[#F1F5F9] transition-colors"
                  aria-label="Ranjan on GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-white border border-[#E2E8F0] text-[#64748B] hover:text-[#0F172A] hover:bg-[#F1F5F9] transition-colors"
                  aria-label="Ranjan on LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="mailto:ranjan@nextframe.studio"
                  className="p-2 rounded-lg bg-white border border-[#E2E8F0] text-[#64748B] hover:text-[#0F172A] hover:bg-[#F1F5F9] transition-colors"
                  aria-label="Email Ranjan"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Mohmed Sami Card */}
            <div className="p-6 sm:p-7 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="w-16 h-16 rounded-xl bg-white border border-[#E2E8F0] flex items-center justify-center text-xl font-bold text-[#2563EB] shadow-xs">
                    M
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded bg-[#EFF6FF] text-[#2563EB] border border-[#DBEAFE]">
                    Co-Founder
                  </span>
                </div>

                <h4 className="text-xl font-bold text-[#0F172A]">
                  Mohmed Sami
                </h4>
                <p className="text-xs font-semibold text-[#2563EB] mt-0.5 mb-3">
                  3D Design, Video Editing &amp; UI/UX
                </p>

                <p className="text-sm text-[#525F7F] leading-relaxed mb-4">
                  Leads visual craft, hard-surface 3D modeling and lighting in Blender, UI design systems, and paced video editing. Dedicated to high-standard aesthetics, pacing, and visual storytelling.
                </p>

                <div className="flex flex-wrap gap-1.5 mb-6">
                  {['2D/3D Design', 'Blender', 'Video Editing', 'UI/UX Design'].map((skill) => (
                    <span key={skill} className="text-xs px-2 py-0.5 rounded bg-white border border-[#E2E8F0] text-[#475569] font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-[#E2E8F0] flex items-center gap-3">
                <a
                  href="https://github.com/nextframe-studio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-white border border-[#E2E8F0] text-[#64748B] hover:text-[#0F172A] hover:bg-[#F1F5F9] transition-colors"
                  aria-label="Mohmed Sami on GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-white border border-[#E2E8F0] text-[#64748B] hover:text-[#0F172A] hover:bg-[#F1F5F9] transition-colors"
                  aria-label="Mohmed Sami on LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="mailto:sami@nextframe.studio"
                  className="p-2 rounded-lg bg-white border border-[#E2E8F0] text-[#64748B] hover:text-[#0F172A] hover:bg-[#F1F5F9] transition-colors"
                  aria-label="Email Mohmed Sami"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
