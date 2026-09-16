import React from 'react';
import {
  Globe,
  Layers,
  Smartphone,
  Layout,
  Zap,
  Box,
  Gamepad2,
  ArrowRight,
} from 'lucide-react';

interface ServiceData {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  tags: string[];
}

const SERVICES_LIST: ServiceData[] = [
  {
    id: 'web-dev',
    title: 'Web Development',
    description:
      'Clean, responsive websites and modern frontend interfaces built for speed, search visibility, and smooth performance across all devices.',
    icon: <Globe className="w-5 h-5 text-[#2563EB]" />,
    tags: ['React', 'TypeScript', 'Tailwind', 'Performance'],
  },
  {
    id: 'full-stack',
    title: 'Full-Stack Development',
    description:
      'End-to-end web applications connecting intuitive user interfaces with structured backend APIs, databases, and secure data handling.',
    icon: <Layers className="w-5 h-5 text-[#2563EB]" />,
    tags: ['Node.js', 'Express', 'APIs', 'Databases'],
  },
  {
    id: 'app-dev',
    title: 'App Development',
    description:
      'Cross-platform and mobile application interfaces designed with clear user journeys, ergonomic touch navigation, and smooth screen transitions.',
    icon: <Smartphone className="w-5 h-5 text-[#2563EB]" />,
    tags: ['Mobile UI', 'Responsive UX', 'Cross-Platform'],
  },
  {
    id: 'ui-ux',
    title: 'UI/UX Design',
    description:
      'User-centered interfaces, wireframes, and design systems crafted for effortless readability, visual hierarchy, and seamless usability.',
    icon: <Layout className="w-5 h-5 text-[#2563EB]" />,
    tags: ['Wireframes', 'Design Systems', 'Figma'],
  },
  {
    id: 'api-cloud',
    title: 'API & Cloud Architecture',
    description:
      'Scalable serverless endpoints, database schemas, third-party service integrations, and robust data synchronizations.',
    icon: <Zap className="w-5 h-5 text-[#2563EB]" />,
    tags: ['REST APIs', 'Cloud Databases', 'Integration'],
  },
  {
    id: 'game-dev',
    title: 'Game Development',
    description:
      'Playable interactive game prototypes built in Unity with responsive character controls, physics mechanics, and custom gameplay systems.',
    icon: <Gamepad2 className="w-5 h-5 text-[#2563EB]" />,
    tags: ['Unity', 'C# Mechanics', 'Physics', 'Prototypes'],
  },
];

export const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-20 sm:py-24 bg-[#F8FAFC] border-b border-[#E2E8F0]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12 sm:mb-14">
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

        {/* 6 Core Service Cards Grid (3 columns on desktop, 2 on tablet, 1 on mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_LIST.map((service) => (
            <div
              key={service.id}
              className="group p-6 sm:p-7 rounded-2xl bg-white border border-[#E2E8F0] shadow-xs hover:border-[#93C5FD] hover:-translate-y-1 hover:shadow-md transition-all duration-300 ease-out flex flex-col justify-between"
            >
              <div>
                <div className="w-11 h-11 rounded-xl bg-[#EFF6FF] border border-[#DBEAFE] flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-200">
                  {service.icon}
                </div>

                <h3 className="text-lg font-bold text-[#0F172A] mb-2 group-hover:text-[#2563EB] transition-colors">
                  {service.title}
                </h3>

                <p className="text-sm text-[#525F7F] leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#F1F5F9] flex flex-wrap gap-1.5">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-medium px-2 py-0.5 rounded bg-[#F8FAFC] text-[#64748B] border border-[#E2E8F0]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Sleek Custom Project Banner */}
        <div className="mt-8 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#0F172A] via-[#1E293B] to-[#0F172A] text-white shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border border-[#334155]">
          <div className="max-w-xl">
            <span className="text-xs font-semibold text-[#93C5FD] uppercase tracking-wider block mb-1">
              Have a Custom Project?
            </span>
            <h3 className="text-lg sm:text-xl font-bold text-white">
              Let's talk through your vision and requirements.
            </h3>
            <p className="text-xs sm:text-sm text-[#94A3B8] mt-1 leading-relaxed">
              We collaborate directly with you on web apps, frontend architecture, and interactive digital solutions.
            </p>
          </div>

          <div className="shrink-0">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs sm:text-sm font-semibold transition-all duration-200 shadow-2xs group cursor-pointer"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
