import React from 'react';
import { NextframeLogo } from './NextframeLogo';
import { ArrowUp, Mail, Linkedin, Github, Lock } from 'lucide-react';

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

  const whatsappUrl = 'https://wa.me/919999999999?text=Hi%20Nextframe%20Studio';

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
              Founded by Ranjan and Mohmed Sami. Building responsive websites, applications, 3D digital assets, and media.
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
                  href="mailto:hello@nextframe.studio"
                  className="hover:text-[#2563EB] transition-colors flex items-center gap-2"
                >
                  <Mail className="w-3.5 h-3.5 text-[#2563EB]" />
                  <span>hello@nextframe.studio</span>
                </a>
              </li>
              <li>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#25D366] transition-colors flex items-center gap-2"
                >
                  <span className="w-3.5 h-3.5 rounded-full bg-[#25D366] flex items-center justify-center text-white text-[9px] font-bold">
                    W
                  </span>
                  <span>WhatsApp Chat</span>
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/company/nextframe-studio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#0A66C2] transition-colors flex items-center gap-2"
                >
                  <Linkedin className="w-3.5 h-3.5 text-[#0A66C2]" />
                  <span>LinkedIn Profile</span>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/nextframe-studio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#0F172A] transition-colors flex items-center gap-2"
                >
                  <Github className="w-3.5 h-3.5 text-[#0F172A]" />
                  <span>GitHub Studio</span>
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
