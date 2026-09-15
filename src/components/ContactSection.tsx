import React, { useState } from 'react';
import { Mail, Linkedin, Github, Check, Copy, ArrowRight, Send } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Web Development',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const contactEmail = 'hello@nextframe.studio';
  const whatsappNumber = '919999999999'; // Easy to edit placeholder
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Hi%20Nextframe%20Studio%2C%20I%20would%20like%20to%20discuss%20a%20project.`;
  const linkedinUrl = 'https://linkedin.com/company/nextframe-studio';
  const githubUrl = 'https://github.com/nextframe-studio';

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(contactEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#F8FAFC] border-b border-[#E2E8F0]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <span className="text-xs font-semibold text-[#2563EB] tracking-wider uppercase block mb-2">
            Contact
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
            Let's Talk About Your Project
          </h2>
          <p className="mt-3 text-base text-[#525F7F] leading-relaxed">
            Reach out through your preferred channel. Ranjan and Mohmed Sami respond to all inquiries within 24 hours.
          </p>
        </div>

        {/* 2-Column Layout: Contact Channels (Left) & Direct Form (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Official Contact Channels (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* 1. WhatsApp */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-xl bg-white border border-[#E2E8F0] shadow-xs hover:border-[#25D366] hover:shadow-sm transition-all flex items-center justify-between group"
            >
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-lg bg-[#E7F9EE] text-[#25D366] flex items-center justify-center shrink-0">
                  {/* Official WhatsApp Brand Icon */}
                  <svg
                    viewBox="0 0 24 24"
                    className="w-6 h-6 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.979-.275-.1-.475-.15-.675.15-.2.3-.775.979-.95 1.18-.175.2-.35.225-.65.075-.3-.15-1.267-.467-2.413-1.488-.892-.796-1.494-1.78-1.67-2.08-.175-.3-.018-.462.132-.612.135-.135.3-.35.45-.525.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525-.075-.15-.675-1.625-.925-2.225-.244-.584-.492-.505-.675-.514-.175-.009-.375-.01-.575-.01-.2 0-.525.075-.8.375s-1.05 1.025-1.05 2.5 1.075 2.895 1.225 3.095c.15.2 2.116 3.23 5.125 4.53.716.31 1.275.495 1.71.634.72.23 1.375.197 1.893.12.578-.087 1.78-.728 2.03-1.43.25-.703.25-1.305.175-1.43-.075-.125-.275-.2-.575-.35z" />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.98-1.396A9.957 9.957 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.2a8.16 8.16 0 01-4.228-1.177l-.303-.18-3.136.878.88-3.053-.198-.315A8.156 8.156 0 013.8 12c0-4.529 3.671-8.2 8.2-8.2s8.2 3.671 8.2 8.2-3.671 8.2-8.2 8.2z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#0F172A] group-hover:text-[#25D366] transition-colors">
                    WhatsApp
                  </h3>
                  <p className="text-xs text-[#64748B]">Direct chat &amp; quick inquiries</p>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-[#94A3B8] group-hover:text-[#25D366] group-hover:translate-x-0.5 transition-all" />
            </a>

            {/* 2. Email */}
            <div className="p-5 rounded-xl bg-white border border-[#E2E8F0] shadow-xs hover:border-[#2563EB] hover:shadow-sm transition-all flex items-center justify-between group">
              <a
                href={`mailto:${contactEmail}`}
                className="flex items-center gap-4 flex-1"
              >
                <div className="w-11 h-11 rounded-lg bg-[#EFF6FF] text-[#2563EB] flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#0F172A] group-hover:text-[#2563EB] transition-colors">
                    Email
                  </h3>
                  <p className="text-xs text-[#64748B]">{contactEmail}</p>
                </div>
              </a>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="p-2 rounded-lg text-[#64748B] hover:text-[#0F172A] hover:bg-[#F1F5F9] transition-colors"
                title="Copy email address"
              >
                {copiedEmail ? (
                  <Check className="w-4 h-4 text-emerald-600" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>

            {/* 3. LinkedIn */}
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-xl bg-white border border-[#E2E8F0] shadow-xs hover:border-[#0A66C2] hover:shadow-sm transition-all flex items-center justify-between group"
            >
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-lg bg-[#EBF4FC] text-[#0A66C2] flex items-center justify-center shrink-0">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#0F172A] group-hover:text-[#0A66C2] transition-colors">
                    LinkedIn
                  </h3>
                  <p className="text-xs text-[#64748B]">Professional studio profile</p>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-[#94A3B8] group-hover:text-[#0A66C2] group-hover:translate-x-0.5 transition-all" />
            </a>

            {/* 4. GitHub */}
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-xl bg-white border border-[#E2E8F0] shadow-xs hover:border-[#0F172A] hover:shadow-sm transition-all flex items-center justify-between group"
            >
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-lg bg-[#F1F5F9] text-[#0F172A] flex items-center justify-center shrink-0">
                  <Github className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#0F172A] group-hover:text-black transition-colors">
                    GitHub
                  </h3>
                  <p className="text-xs text-[#64748B]">Open source &amp; code repositories</p>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-[#94A3B8] group-hover:text-[#0F172A] group-hover:translate-x-0.5 transition-all" />
            </a>

          </div>

          {/* Right Column: Direct Inquiry Message Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[#E2E8F0] shadow-xs">
              
              <h3 className="text-lg font-bold text-[#0F172A] mb-1">
                Send a Direct Message
              </h3>
              <p className="text-xs text-[#64748B] mb-6">
                Tell us about your project, timeline, and what you're looking to build.
              </p>

              {submitted ? (
                <div className="py-10 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-bold text-[#0F172A]">
                    Message Received
                  </h4>
                  <p className="text-sm text-[#64748B] max-w-sm mx-auto">
                    Thank you for reaching out to Nextframe Studio. Ranjan and Mohmed Sami will get back to you shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        service: 'Web Development',
                        message: '',
                      });
                    }}
                    className="mt-4 px-4 py-2 text-xs font-semibold text-[#2563EB] hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#0F172A] mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex Morgan"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-[#CBD5E1] focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] text-sm text-[#0F172A] outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#0F172A] mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@example.com"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-[#CBD5E1] focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] text-sm text-[#0F172A] outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#0F172A] mb-1.5">
                      Service of Interest
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-[#CBD5E1] focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] text-sm text-[#0F172A] bg-white outline-none"
                    >
                      <option value="Web Development">Web Development</option>
                      <option value="Full-Stack Development">Full-Stack Development</option>
                      <option value="App Development">App Development</option>
                      <option value="UI/UX Design">UI/UX Design</option>
                      <option value="Video Editing">Video Editing</option>
                      <option value="2D/3D Design">2D/3D Design</option>
                      <option value="Game Development">Game Development</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#0F172A] mb-1.5">
                      Message / Project Details *
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Briefly describe what you'd like to build, your timeline, or any questions..."
                      className="w-full px-3.5 py-2.5 rounded-lg border border-[#CBD5E1] focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] text-sm text-[#0F172A] outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-lg bg-[#0F172A] hover:bg-[#1E293B] text-white text-sm font-semibold transition-colors shadow-xs"
                  >
                    <span>Send Inquiry</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
