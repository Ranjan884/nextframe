import React from 'react';
import { ArrowRight, Code2, Smartphone, Palette, Zap } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, selector: string) => {
    e.preventDefault();
    const target = document.querySelector(selector);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-28 pb-16 sm:pt-36 sm:pb-20 bg-white border-b border-[#E2E8F0]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Main Hero Copy (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Studio Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#EFF6FF] text-[#2563EB] text-xs font-semibold tracking-wide border border-[#DBEAFE]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] animate-pulse" />
              <span>Nextframe Studio · Creative Technology</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-[3.25rem] font-extrabold text-[#0F172A] tracking-tight leading-[1.15]">
              We design and build modern digital products, apps, and media.
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-[#525F7F] leading-relaxed max-w-xl font-normal">
              Nextframe is an independent creative technology studio founded by Ranjan and Mohmed Sami. We engineer high-performance web applications, interactive software, UI/UX systems, and dynamic video content.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3.5">
              <a
                href="#projects"
                onClick={(e) => handleScrollTo(e, '#projects')}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0F172A] hover:bg-[#2563EB] text-white font-semibold text-sm transition-all duration-200 shadow-2xs group active:scale-[0.98] cursor-pointer"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="mailto:r40993674@gmail.com"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#EFF6FF] hover:bg-[#DBEAFE] text-[#1E3A8A] border border-[#BFDBFE] font-semibold text-sm transition-all duration-200 active:scale-[0.98] cursor-pointer"
              >
                <span>r40993674@gmail.com</span>
              </a>
            </div>

            {/* Natural Human Note */}
            <div className="pt-2 flex items-center gap-2 text-xs text-[#64748B]">
              <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
              <span>Currently available for freelance projects and direct client collaborations</span>
            </div>

          </div>

          {/* Right Showcase Card (5 cols) */}
          <div className="lg:col-span-5">
            <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl p-6 sm:p-7 shadow-xs">
              
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#E2E8F0]">
                <div>
                  <span className="text-xs font-semibold text-[#64748B] uppercase tracking-wider block">
                    Core Studio Capabilities
                  </span>
                  <h3 className="text-base font-bold text-[#0F172A] mt-0.5">
                    Engineering + Creative Craft
                  </h3>
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-white border border-[#E2E8F0] text-[#2563EB] shadow-2xs">
                  2-Person Studio
                </span>
              </div>

              <div className="space-y-3">
                <div className="flex items-start gap-3.5 p-3 rounded-xl bg-white border border-[#E2E8F0] hover:border-[#93C5FD] hover:-translate-y-0.5 transition-all duration-200 shadow-2xs">
                  <div className="w-8 h-8 rounded-lg bg-[#EFF6FF] text-[#2563EB] flex items-center justify-center shrink-0 mt-0.5">
                    <Code2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#0F172A]">Web &amp; Full-Stack</h4>
                    <p className="text-xs text-[#64748B] mt-0.5 leading-relaxed">
                      Fast, responsive web applications built with modern frontend frameworks and clean code.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3 rounded-xl bg-white border border-[#E2E8F0] hover:border-[#93C5FD] hover:-translate-y-0.5 transition-all duration-200 shadow-2xs">
                  <div className="w-8 h-8 rounded-lg bg-[#EFF6FF] text-[#2563EB] flex items-center justify-center shrink-0 mt-0.5">
                    <Smartphone className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#0F172A]">App &amp; Game Prototyping</h4>
                    <p className="text-xs text-[#64748B] mt-0.5 leading-relaxed">
                      Mobile interfaces and interactive Unity gameplay mechanics and state loops.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3 rounded-xl bg-white border border-[#E2E8F0] hover:border-[#93C5FD] hover:-translate-y-0.5 transition-all duration-200 shadow-2xs">
                  <div className="w-8 h-8 rounded-lg bg-[#EFF6FF] text-[#2563EB] flex items-center justify-center shrink-0 mt-0.5">
                    <Palette className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#0F172A]">UI/UX &amp; Product Design</h4>
                    <p className="text-xs text-[#64748B] mt-0.5 leading-relaxed">
                      Intuitive wireframes, cohesive design systems, and responsive user interfaces.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3 rounded-xl bg-white border border-[#E2E8F0] hover:border-[#93C5FD] hover:-translate-y-0.5 transition-all duration-200 shadow-2xs">
                  <div className="w-8 h-8 rounded-lg bg-[#EFF6FF] text-[#2563EB] flex items-center justify-center shrink-0 mt-0.5">
                    <Zap className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#0F172A]">API &amp; Cloud Integration</h4>
                    <p className="text-xs text-[#64748B] mt-0.5 leading-relaxed">
                      Reliable REST APIs, cloud databases, and fast server integrations.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
