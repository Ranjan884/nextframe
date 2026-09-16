import React from 'react';
import { NextframeLogo } from './NextframeLogo';
import { ArrowUp, Mail, Github, Lock } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleOpenStudioAdmin = (e: React.MouseEvent) => {
    e.preventDefault();
    window.dispatchEvent(new CustomEvent('open-studio-admin'));
  };

  return (
    <footer className="bg-white border-t border-[#E2E8F0] py-14 text-sm text-[#64748B]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-10 border-b border-[#E2E8F0] items-start">
          
          {/* Brand Column (5 cols) */}
          <div className="md:col-span-5 space-y-3">
            <NextframeLogo size="md" lightMode={true} showSubtitle={false} />
            <p className="text-sm font-bold text-[#0F172A] pt-1">
              Creative Technology Studio
            </p>
            <p className="text-xs text-[#64748B] leading-relaxed max-w-sm">
              Founded by Ranjan and Mohmed Sami. Building responsive websites, applications, UI/UX systems, and media.
            </p>
          </div>

          {/* Quick Nav Links (3 cols) */}
          <div className="md:col-span-3 space-y-2.5">
            <span className="block text-xs font-bold uppercase tracking-wider text-[#0F172A] mb-3">
              Navigation
            </span>
            <ul className="space-y-2 text-xs">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[#64748B] hover:text-[#0F172A] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Channels (4 cols) */}
          <div className="md:col-span-4 space-y-2.5">
            <span className="block text-xs font-bold uppercase tracking-wider text-[#0F172A] mb-3">
              Connect
            </span>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href="mailto:r40993674@gmail.com"
                  className="hover:text-[#2563EB] transition-colors flex items-center gap-2"
                >
                  <Mail className="w-3.5 h-3.5 text-[#2563EB]" />
                  <span>r40993674@gmail.com</span>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/boby-raj"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#0F172A] transition-colors flex items-center gap-2"
                >
                  <Github className="w-3.5 h-3.5 text-[#0F172A]" />
                  <span>github.com/boby-raj</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#64748B]">
          <div className="flex items-center gap-4">
            <span>© {new Date().getFullYear()} Nextframe Studio. All rights reserved.</span>
            
            {/* Discrete Studio Admin Access */}
            <button
              type="button"
              onClick={handleOpenStudioAdmin}
              className="inline-flex items-center gap-1 text-[11px] text-[#94A3B8] hover:text-[#2563EB] transition-colors cursor-pointer"
              title="Studio Project Management (Admin Only)"
            >
              <Lock className="w-3 h-3" />
              <span>Studio Access</span>
            </button>
          </div>

          <div className="flex items-center gap-6">
            <span className="text-[#475569]">Ranjan &amp; Mohmed Sami</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-[#64748B] hover:text-[#0F172A] transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
