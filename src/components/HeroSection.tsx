import React from 'react';
import { ArrowRight, Code2, Smartphone, Palette, Film } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, selector: string) => {
    e.preventDefault();
    const target = document.querySelector(selector);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-32 pb-16 sm:pt-40 sm:pb-24 bg-white border-b border-[#E2E8F0]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Main Hero Copy (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Studio Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#F1F5F9] text-[#2563EB] text-xs font-semibold tracking-wide">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
              <span>Nextframe Studio · Creative Technology</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-[3.25rem] font-extrabold text-[#0F172A] tracking-tight leading-[1.15]">
              We design and build modern digital products, apps, and media.
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-[#475569] leading-relaxed max-w-xl font-normal">
              Nextframe is an independent studio founded by Ranjan and Mohmed Sami. We help clients turn ideas into functional, beautifully engineered websites, mobile applications, 3D visuals, and video content.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3.5">
              <a
                href="#projects"
                onClick={(e) => handleScrollTo(e, '#projects')}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#0F172A] hover:bg-[#1E293B] text-white font-medium text-sm transition-colors shadow-xs group"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </a>

              <a
                href="#contact"
                onClick={(e) => handleScrollTo(e, '#contact')}
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-white hover:bg-[#F8FAFC] text-[#0F172A] border border-[#E2E8F0] font-medium text-sm transition-colors"
              >
                Contact Us
              </a>
            </div>

            {/* Natural Human Note */}
            <div className="pt-3 flex items-center gap-2 text-xs text-[#64748B]">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>Currently available for freelance projects and collaborations</span>
            </div>

          </div>

          {/* Right Showcase Card (5 cols) */}
          <div className="lg:col-span-5">
            <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl p-6 sm:p-7 shadow-xs">
              
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-[#E2E8F0]">
                <div>
                  <span className="text-xs font-semibold text-[#64748B] uppercase tracking-wider block">
                    Core Studio Capabilities
                  </span>
                  <h3 className="text-base font-bold text-[#0F172A] mt-0.5">
                    Engineering + Creative Craft
                  </h3>
                </div>
                <span className="text-xs font-semibold px-2 py-1 rounded bg-white border border-[#E2E8F0] text-[#2563EB]">
                  2-Person Studio
                </span>
              </div>

              <div className="space-y-3.5">
                <div className="flex items-start gap-3.5 p-3 rounded-xl bg-white border border-[#E2E8F0]">
                  <div className="w-8 h-8 rounded-lg bg-[#EFF6FF] text-[#2563EB] flex items-center justify-center shrink-0 mt-0.5">
                    <Code2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[#0F172A]">Web &amp; Full-Stack</h4>
                    <p className="text-xs text-[#64748B] mt-0.5">
                      Fast, responsive web applications built with modern frontend frameworks and clean code.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3 rounded-xl bg-white border border-[#E2E8F0]">
                  <div className="w-8 h-8 rounded-lg bg-[#EFF6FF] text-[#2563EB] flex items-center justify-center shrink-0 mt-0.5">
                    <Smartphone className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[#0F172A]">App &amp; Game Prototyping</h4>
                    <p className="text-xs text-[#64748B] mt-0.5">
                      Mobile application interfaces and interactive Unity 2D/3D gameplay prototypes.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3 rounded-xl bg-white border border-[#E2E8F0]">
                  <div className="w-8 h-8 rounded-lg bg-[#EFF6FF] text-[#2563EB] flex items-center justify-center shrink-0 mt-0.5">
                    <Palette className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[#0F172A]">3D &amp; Digital Design</h4>
                    <p className="text-xs text-[#64748B] mt-0.5">
                      Custom 3D prop modeling in Blender, UI design systems, and digital assets.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3 rounded-xl bg-white border border-[#E2E8F0]">
                  <div className="w-8 h-8 rounded-lg bg-[#EFF6FF] text-[#2563EB] flex items-center justify-center shrink-0 mt-0.5">
                    <Film className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[#0F172A]">Video &amp; Motion Editing</h4>
                    <p className="text-xs text-[#64748B] mt-0.5">
                      Sharp video editing, audio synchronization, and visual storytelling.
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
