import React from 'react';
import { Github, Mail } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-24 bg-white border-b border-[#E2E8F0]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12 sm:mb-14">
          <span className="text-xs font-semibold text-[#2563EB] tracking-wider uppercase block mb-2">
            About Nextframe
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
            Independent Studio, Direct Collaboration
          </h2>
          <p className="mt-3 text-base text-[#525F7F] leading-relaxed">
            Nextframe is a two-person creative technology studio founded by Ranjan and Mohmed Sami. We combine software engineering, UI/UX design systems, and digital product craftsmanship to build clean digital products.
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
              Whether you need a responsive web application, interactive game mechanics in Unity, or intuitive UI/UX design systems, we deliver thoughtful work on time.
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
            <div className="p-6 sm:p-7 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] shadow-xs hover:border-[#93C5FD] hover:-translate-y-1 hover:shadow-md transition-all duration-300 ease-out flex flex-col justify-between">
              <div>
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-white border border-[#E2E8F0] flex items-center justify-center text-xl font-extrabold text-[#2563EB] shadow-2xs">
                    R
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-[#EFF6FF] text-[#2563EB] border border-[#DBEAFE]">
                    Co-Founder
                  </span>
                </div>

                <h4 className="text-xl font-bold text-[#0F172A]">
                  Ranjan
                </h4>
                <p className="text-xs font-semibold text-[#2563EB] mt-0.5 mb-3">
                  Web, App &amp; Game Development
                </p>

                <p className="text-sm text-[#525F7F] leading-relaxed mb-5">
                  Focuses on full-stack architecture, responsive frontend applications, TypeScript codebases, and interactive Unity game mechanics. Passionate about clean code, performance, and intuitive user experiences.
                </p>

                <div className="flex flex-wrap gap-1.5 mb-6">
                  {['Web Development', 'Full-Stack', 'App Development', 'Unity / Game Dev'].map((skill) => (
                    <span key={skill} className="text-xs px-2.5 py-1 rounded-md bg-white border border-[#E2E8F0] text-[#475569] font-medium shadow-2xs">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-[#E2E8F0] flex items-center gap-2.5">
                <a
                  href="https://github.com/boby-raj"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-white border border-[#E2E8F0] text-[#64748B] hover:text-[#0F172A] hover:bg-[#F1F5F9] transition-colors"
                  aria-label="Ranjan on GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href="mailto:r40993674@gmail.com"
                  className="p-2 rounded-lg bg-white border border-[#E2E8F0] text-[#64748B] hover:text-[#0F172A] hover:bg-[#F1F5F9] transition-colors"
                  aria-label="Email Ranjan"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Mohmed Sami Card */}
            <div className="p-6 sm:p-7 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] shadow-xs hover:border-[#93C5FD] hover:-translate-y-1 hover:shadow-md transition-all duration-300 ease-out flex flex-col justify-between">
              <div>
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-white border border-[#E2E8F0] flex items-center justify-center text-xl font-extrabold text-[#2563EB] shadow-2xs">
                    M
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-[#EFF6FF] text-[#2563EB] border border-[#DBEAFE]">
                    Co-Founder
                  </span>
                </div>

                <h4 className="text-xl font-bold text-[#0F172A]">
                  Mohmed Sami
                </h4>
                <p className="text-xs font-semibold text-[#2563EB] mt-0.5 mb-3">
                  UI/UX Design, Creative Direction &amp; Interface Systems
                </p>

                <p className="text-sm text-[#525F7F] leading-relaxed mb-5">
                  Leads visual craft, user experience design systems, interactive prototypes, and typography. Dedicated to high-standard aesthetics, clean layout architecture, and intuitive user experiences.
                </p>

                <div className="flex flex-wrap gap-1.5 mb-6">
                  {['UI/UX Design', 'Design Systems', 'Interface Systems', 'Interactive Design'].map((skill) => (
                    <span key={skill} className="text-xs px-2.5 py-1 rounded-md bg-white border border-[#E2E8F0] text-[#475569] font-medium shadow-2xs">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-[#E2E8F0] flex items-center gap-2.5">
                <a
                  href="https://github.com/boby-raj"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-white border border-[#E2E8F0] text-[#64748B] hover:text-[#0F172A] hover:bg-[#F1F5F9] transition-colors"
                  aria-label="Mohmed Sami on GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href="mailto:r40993674@gmail.com"
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
