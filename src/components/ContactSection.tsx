import React, { useState } from 'react';
import { Mail, Github, Check, Copy, ArrowRight, Send } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Web Development',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const contactEmail = 'r40993674@gmail.com';
  const githubUrl = 'https://github.com/boby-raj';

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
    <section id="contact" className="py-20 sm:py-24 bg-[#F8FAFC] border-b border-[#E2E8F0]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12 sm:mb-14">
          <span className="text-xs font-semibold text-[#2563EB] tracking-wider uppercase block mb-2">
            Contact
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
            Let's Talk About Your Project
          </h2>
          <p className="mt-3 text-base text-[#525F7F] leading-relaxed">
            Reach out through email or explore our repositories on GitHub. Ranjan and Mohmed Sami respond to all inquiries within 24 hours.
          </p>
        </div>

        {/* 2-Column Layout: Contact Channels (Left) & Direct Form (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Left Column: Official Contact Channels (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* 1. Email */}
            <div className="p-5 rounded-2xl bg-white border border-[#E2E8F0] shadow-xs hover:border-[#2563EB] hover:-translate-y-1 hover:shadow-md transition-all duration-300 ease-out flex items-center justify-between group">
              <a
                href={`mailto:${contactEmail}`}
                className="flex items-center gap-4 flex-1"
              >
                <div className="w-12 h-12 rounded-xl bg-[#EFF6FF] text-[#2563EB] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-200">
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
                className="p-2 rounded-lg text-[#64748B] hover:text-[#0F172A] hover:bg-[#F1F5F9] transition-colors cursor-pointer"
                title="Copy email address"
              >
                {copiedEmail ? (
                  <Check className="w-4 h-4 text-emerald-600" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>

            {/* 2. GitHub */}
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl bg-white border border-[#E2E8F0] shadow-xs hover:border-[#0F172A] hover:-translate-y-1 hover:shadow-md transition-all duration-300 ease-out flex items-center justify-between group"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#F1F5F9] text-[#0F172A] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-200">
                  <Github className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#0F172A] group-hover:text-black transition-colors">
                    GitHub
                  </h3>
                  <p className="text-xs text-[#64748B]">github.com/boby-raj</p>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-[#94A3B8] group-hover:text-[#0F172A] group-hover:translate-x-1 transition-all" />
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
                    className="mt-4 px-4 py-2 text-xs font-semibold text-[#2563EB] hover:underline cursor-pointer"
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
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#CBD5E1] focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] text-sm text-[#0F172A] outline-none transition-colors"
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
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#CBD5E1] focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] text-sm text-[#0F172A] outline-none transition-colors"
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
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#CBD5E1] focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] text-sm text-[#0F172A] bg-white outline-none transition-colors"
                    >
                      <option value="Web Development">Web Development</option>
                      <option value="Full-Stack Development">Full-Stack Development</option>
                      <option value="App Development">App Development</option>
                      <option value="UI/UX Design">UI/UX Design</option>
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
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#CBD5E1] focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] text-sm text-[#0F172A] outline-none transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-[#0F172A] hover:bg-[#2563EB] active:scale-[0.98] text-white text-sm font-semibold transition-all duration-200 shadow-2xs cursor-pointer"
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
