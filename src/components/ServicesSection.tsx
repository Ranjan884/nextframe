import React from 'react';
import {
  Globe,
  Layers,
  Smartphone,
  Layout,
  Film,
  Box,
  Gamepad2,
  ArrowRight,
} from 'lucide-react';

interface ServiceData {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const SERVICES_LIST: ServiceData[] = [
  {
    id: 'web-dev',
    title: 'Web Development',
    description:
      'Clean, responsive websites and modern frontend interfaces built for speed, search visibility, and smooth performance across all devices.',
    icon: <Globe className="w-5 h-5 text-[#2563EB]" />,
  },
  {
    id: 'full-stack',
    title: 'Full-Stack Development',
    description:
      'End-to-end web applications connecting intuitive user interfaces with structured backend APIs, databases, and secure data handling.',
    icon: <Layers className="w-5 h-5 text-[#2563EB]" />,
  },
  {
    id: 'app-dev',
    title: 'App Development',
    description:
      'Cross-platform and mobile application interfaces designed with clear user journeys, ergonomic touch navigation, and smooth screen transitions.',
    icon: <Smartphone className="w-5 h-5 text-[#2563EB]" />,
  },
  {
    id: 'ui-ux',
    title: 'UI/UX Design',
    description:
      'User-centered interfaces, wireframes, and design systems crafted for effortless readability, visual hierarchy, and seamless usability.',
    icon: <Layout className="w-5 h-5 text-[#2563EB]" />,
  },
  {
    id: 'video-editing',
    title: 'Video Editing',
    description:
      'Engaging video production with precise cuts, dynamic pacing, audio synchronization, and visual storytelling for products and creators.',
    icon: <Film className="w-5 h-5 text-[#2563EB]" />,
  },
  {
    id: '2d-3d-design',
    title: '2D/3D Design',
    description:
      'Custom 3D prop modeling in Blender, studio lighting, procedural materials, and clean 2D digital graphic assets for your brand.',
    icon: <Box className="w-5 h-5 text-[#2563EB]" />,
  },
  {
    id: 'game-dev',
    title: 'Game Development',
    description:
      'Playable 2D and 3D game prototypes built in Unity with responsive character controls, physics mechanics, and custom low-poly assets.',
    icon: <Gamepad2 className="w-5 h-5 text-[#2563EB]" />,
  },
];

export const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-20 sm:py-28 bg-[#F8FAFC] border-b border-[#E2E8F0]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <span className="text-xs font-semibold text-[#2563EB] tracking-wider uppercase block mb-2">
            Services
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
            What We Do
          </h2>
          <p className="mt-3 text-base text-[#525F7F] leading-relaxed">
            We provide specialized engineering, design, and digital creative capabilities to help individuals, startups, and businesses bring ideas to life.
          </p>
        </div>

        {/* Consistent 7 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_LIST.map((service) => (
            <div
              key={service.id}
              className="p-6 sm:p-7 rounded-xl bg-white border border-[#E2E8F0] shadow-xs hover:border-[#CBD5E1] transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-lg bg-[#EFF6FF] flex items-center justify-center mb-5">
                  {service.icon}
                </div>
                <h3 className="text-lg font-bold text-[#0F172A] mb-2.5">
                  {service.title}
                </h3>
                <p className="text-sm text-[#525F7F] leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div className="pt-6 mt-4 border-t border-[#F1F5F9] flex items-center justify-between text-xs text-[#64748B]">
                <span className="font-medium">Nextframe Discipline</span>
                <a
                  href="#contact"
                  className="text-[#2563EB] hover:text-[#1D4ED8] font-medium flex items-center gap-1 group"
                >
                  <span>Inquire</span>
                  <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
                </a>
              </div>
            </div>
          ))}

          {/* Quick Inquiry Balancing Card */}
          <div className="p-6 sm:p-7 rounded-xl bg-[#0F172A] text-white flex flex-col justify-between shadow-xs">
            <div>
              <span className="text-xs font-semibold text-[#93C5FD] tracking-wider uppercase block mb-2">
                Have a Custom Need?
              </span>
              <h3 className="text-lg font-bold text-white mb-2.5">
                Let's discuss your project scope.
              </h3>
              <p className="text-sm text-[#94A3B8] leading-relaxed">
                Whether it's a standalone web app or a cross-discipline creative project, Ranjan and Mohmed Sami review all inquiries directly.
              </p>
            </div>

            <div className="pt-6 mt-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-lg bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs font-semibold transition-colors"
              >
                <span>Send a Project Brief</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
