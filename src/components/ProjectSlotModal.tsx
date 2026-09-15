import React, { useState } from 'react';
import { Project } from '../data/studioData';
import {
  X,
  Plus,
  Upload,
  ExternalLink,
  Sparkles,
  Layers,
  Code2,
  CheckCircle2,
  Copy,
  Monitor,
  Smartphone,
  Tablet,
  Globe,
  Trash2,
} from 'lucide-react';

interface ProjectSlotModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddProject: (project: Project) => void;
  existingCustomProjects?: Project[];
  onDeleteCustomProject?: (id: string) => void;
}

export const ProjectSlotModal: React.FC<ProjectSlotModalProps> = ({
  isOpen,
  onClose,
  onAddProject,
  existingCustomProjects = [],
  onDeleteCustomProject,
}) => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Web Development');
  const [status, setStatus] = useState('Live Demo');
  const [description, setDescription] = useState('');
  const [projectLink, setProjectLink] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [tagsInput, setTagsInput] = useState('React, TypeScript, Tailwind CSS');
  const [featuresInput, setFeaturesInput] = useState(
    'Responsive modern architecture\nCustom interactive user experience\nClean optimized code structure'
  );
  const [technicalOverview, setTechnicalOverview] = useState(
    'Engineered with modern frontend standards and optimized asset delivery.'
  );

  const [previewDevice, setPreviewDevice] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [copiedCode, setCopiedCode] = useState(false);
  const [slotSuccess, setSlotSuccess] = useState(false);
  const [activeTab, setActiveTab] = useState<'create' | 'manage'>('create');

  if (!isOpen) return null;

  const categories = [
    'Web Development',
    'Full-Stack Application',
    'Unity / Game Development',
    '3D & Motion Graphics',
    'Mobile Application',
    'UI/UX Architecture',
  ];

  const statuses = [
    'Live Demo',
    'In Development',
    'Prototype',
    'Selected Work',
    'Client Showcase',
  ];

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const loadExampleTemplate = () => {
    setTitle('Nebula Cybernetic Dashboard');
    setCategory('Web Development');
    setStatus('Live Demo');
    setDescription(
      'An ultra-responsive telemetry and analytics platform featuring real-time data visualizers, tactile dark-gray interfaces, and hardware-accelerated canvas animations.'
    );
    setProjectLink('https://github.com/nextframe-studio');
    setImageUrl(
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop'
    );
    setTagsInput('Next.js, Tailwind CSS, TypeScript, WebGL, Lucide');
    setFeaturesInput(
      'Real-time streaming telemetry charts\nResponsive titanium gray aesthetic\nHigh-contrast accessible typography'
    );
    setTechnicalOverview(
      'Constructed with Next.js 14, WebGL canvas buffers, and modular TypeScript components.'
    );
  };

  const handleSlotProject = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) return;

    const tags = tagsInput
      .split(',')
      .map((t) => t.trim())
      .filter(Boolean);

    const keyFeatures = featuresInput
      .split('\n')
      .map((f) => f.trim())
      .filter(Boolean);

    const newProject: Project = {
      id: `slot-${Date.now()}`,
      title: title.trim().toUpperCase(),
      category: category,
      categoryLabel: `${category} Project`,
      status: status,
      year: `${new Date().getFullYear()}`,
      summary: description.slice(0, 120),
      description: description.trim(),
      tags: tags.length ? tags : ['Web', 'Creative Tech'],
      tools: tags.length ? tags : ['TypeScript', 'Tailwind'],
      technologies: tags.length ? tags : ['TypeScript', 'Tailwind'],
      keyFeatures: keyFeatures.length ? keyFeatures : ['Interactive Project Slot'],
      technicalOverview: technicalOverview.trim(),
      role: 'Project Slotted in Showcase',
      image: imageUrl || undefined,
      imageUrl: imageUrl || undefined,
      projectLink: projectLink.trim() || undefined,
    };

    onAddProject(newProject);
    setSlotSuccess(true);
    setTimeout(() => {
      setSlotSuccess(false);
      onClose();
    }, 1200);
  };

  const generateJsonSnippet = () => {
    const tags = tagsInput
      .split(',')
      .map((t) => t.trim())
      .filter(Boolean);
    const keyFeatures = featuresInput
      .split('\n')
      .map((f) => f.trim())
      .filter(Boolean);

    const snippet = {
      id: title ? title.toLowerCase().replace(/\s+/g, '-') : 'custom-project',
      title: (title || 'PROJECT TITLE').toUpperCase(),
      category: category,
      status: status,
      year: `${new Date().getFullYear()}`,
      description: description || 'Project description here...',
      technologies: tags.length ? tags : ['React', 'TypeScript'],
      keyFeatures: keyFeatures.length ? keyFeatures : ['Feature 1', 'Feature 2'],
      technicalOverview: technicalOverview || 'Technical notes here...',
      image: imageUrl || '/projects/screenshot.png',
      projectLink: projectLink || 'https://yourlink.com',
    };

    navigator.clipboard.writeText(JSON.stringify(snippet, null, 2));
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-8 bg-black/75 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full max-w-5xl max-h-[92vh] overflow-y-auto bg-[#141822] border border-[#2B3346] rounded-2xl p-5 sm:p-7 md:p-9 text-[#F3F5F9] shadow-2xl space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-[#222838]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#1E2536] border border-[#303B52] flex items-center justify-center text-[#3B82F6]">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-semibold text-[#3B82F6] uppercase tracking-wider">
                  STUDIO SHOWCASE HUB //
                </span>
                <span className="px-2 py-0.5 rounded-full bg-[#1E293B] border border-[#3B82F6]/40 text-[10px] font-mono text-[#93C5FD]">
                  LIVE PROJECT SLOT
                </span>
              </div>
              <h2 className="font-display font-bold text-xl sm:text-2xl text-[#F3F5F9] tracking-tight">
                Slot Your Project For Others To See
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Manage existing custom projects tab */}
            {existingCustomProjects.length > 0 && (
              <div className="flex rounded-lg bg-[#0D1017] p-1 border border-[#222838]">
                <button
                  type="button"
                  onClick={() => setActiveTab('create')}
                  className={`px-3 py-1 rounded-md text-xs font-mono transition-colors ${
                    activeTab === 'create'
                      ? 'bg-[#2563EB] text-white font-semibold'
                      : 'text-[#94A0B8] hover:text-[#F3F5F9]'
                  }`}
                >
                  Slot Project
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('manage')}
                  className={`px-3 py-1 rounded-md text-xs font-mono transition-colors flex items-center gap-1.5 ${
                    activeTab === 'manage'
                      ? 'bg-[#2563EB] text-white font-semibold'
                      : 'text-[#94A0B8] hover:text-[#F3F5F9]'
                  }`}
                >
                  <span>Slotted</span>
                  <span className="w-4 h-4 rounded-full bg-[#1E2536] text-[10px] flex items-center justify-center text-[#3B82F6]">
                    {existingCustomProjects.length}
                  </span>
                </button>
              </div>
            )}

            <button
              type="button"
              onClick={loadExampleTemplate}
              className="px-3 py-1.5 rounded-lg bg-[#1B2232] hover:bg-[#232C40] border border-[#2E384D] text-xs font-mono text-[#CBD5E1] transition-colors flex items-center gap-1.5 cursor-pointer"
              title="Autofill a sample project to test the slot"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#3B82F6]" />
              <span className="hidden sm:inline">Load Sample</span>
            </button>

            <button
              type="button"
              onClick={onClose}
              className="w-9 h-9 rounded-xl bg-[#1B2232] hover:bg-[#252E42] border border-[#2E384D] flex items-center justify-center text-[#94A0B8] hover:text-[#F3F5F9] transition-colors cursor-pointer"
              aria-label="Close project slot modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Content Tabs */}
        {activeTab === 'manage' ? (
          /* Manage Slotted Projects */
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <p className="text-sm text-[#94A0B8]">
                Projects you have slotted into the live portfolio. Anyone visiting can see them in your current session.
              </p>
              <button
                type="button"
                onClick={() => setActiveTab('create')}
                className="px-4 py-2 rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs font-mono font-semibold transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Slot Another Project</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              {existingCustomProjects.map((p) => (
                <div
                  key={p.id}
                  className="p-4 rounded-xl bg-[#0D1017] border border-[#222838] flex flex-col justify-between gap-3"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <span className="text-[11px] font-mono text-[#3B82F6] font-semibold uppercase">
                        {p.category}
                      </span>
                      <h4 className="font-display font-bold text-lg text-[#F3F5F9] uppercase">
                        {p.title}
                      </h4>
                      <p className="text-xs text-[#94A0B8] line-clamp-2 mt-1">
                        {p.description}
                      </p>
                    </div>
                    {onDeleteCustomProject && (
                      <button
                        type="button"
                        onClick={() => onDeleteCustomProject(p.id)}
                        className="p-1.5 rounded-lg text-[#64748B] hover:text-red-400 hover:bg-red-950/30 transition-colors"
                        title="Remove project slot"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    )}
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-[#1C2230] text-xs font-mono">
                    <span className="text-emerald-400 font-semibold">{p.status}</span>
                    {p.projectLink && (
                      <a
                        href={p.projectLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#3B82F6] hover:underline flex items-center gap-1"
                      >
                        <span>Visit Demo</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          /* Create / Slot Form & Live Preview Dual Layout */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: Input Form (7 cols) */}
            <form onSubmit={handleSlotProject} className="lg:col-span-7 space-y-4">
              {/* Project Title & Category */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#94A0B8] mb-1.5 font-semibold">
                    Project Title <span className="text-[#3B82F6]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="e.g. AEROFLIGHT GAME CORE"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#0D1017] border border-[#222838] focus:border-[#3B82F6] text-sm text-[#F3F5F9] placeholder-[#505D77] focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#94A0B8] mb-1.5 font-semibold">
                    Discipline / Category
                  </label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#0D1017] border border-[#222838] focus:border-[#3B82F6] text-sm text-[#F3F5F9] focus:outline-none transition-colors cursor-pointer"
                  >
                    {categories.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Status & Live URL */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#94A0B8] mb-1.5 font-semibold">
                    Project Status Badge
                  </label>
                  <select
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#0D1017] border border-[#222838] focus:border-[#3B82F6] text-sm text-[#F3F5F9] focus:outline-none transition-colors cursor-pointer"
                  >
                    {statuses.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#94A0B8] mb-1.5 font-semibold">
                    Live Demo or Repo Link
                  </label>
                  <div className="relative">
                    <input
                      type="url"
                      value={projectLink}
                      onChange={(e) => setProjectLink(e.target.value)}
                      placeholder="https://yourproject.com"
                      className="w-full pl-9 pr-3.5 py-2.5 rounded-xl bg-[#0D1017] border border-[#222838] focus:border-[#3B82F6] text-sm text-[#F3F5F9] placeholder-[#505D77] focus:outline-none transition-colors"
                    />
                    <Globe className="w-4 h-4 text-[#64748B] absolute left-3 top-3" />
                  </div>
                </div>
              </div>

              {/* Screenshot or Visual Asset */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-[#94A0B8] mb-1.5 font-semibold">
                  Screenshot or Artwork (URL or Upload)
                </label>
                <div className="flex flex-col sm:flex-row gap-2.5">
                  <input
                    type="url"
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)}
                    placeholder="https://image-url.com/preview.png"
                    className="flex-1 px-3.5 py-2.5 rounded-xl bg-[#0D1017] border border-[#222838] focus:border-[#3B82F6] text-sm text-[#F3F5F9] placeholder-[#505D77] focus:outline-none transition-colors"
                  />
                  <label className="px-4 py-2.5 rounded-xl bg-[#1B2232] hover:bg-[#242D42] border border-[#2E384D] text-xs font-mono text-[#CBD5E1] transition-colors flex items-center justify-center gap-1.5 cursor-pointer shrink-0">
                    <Upload className="w-3.5 h-3.5 text-[#3B82F6]" />
                    <span>Upload Image</span>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                    />
                  </label>
                </div>
              </div>

              {/* Description */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-[#94A0B8] mb-1.5 font-semibold">
                  Description / Case Study Summary <span className="text-[#3B82F6]">*</span>
                </label>
                <textarea
                  required
                  rows={3}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Explain what was designed or engineered, the technology stack, and what problems it solves..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#0D1017] border border-[#222838] focus:border-[#3B82F6] text-sm text-[#F3F5F9] placeholder-[#505D77] focus:outline-none transition-colors resize-none"
                />
              </div>

              {/* Technologies / Tags */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-[#94A0B8] mb-1.5 font-semibold">
                  Technologies (comma separated)
                </label>
                <input
                  type="text"
                  value={tagsInput}
                  onChange={(e) => setTagsInput(e.target.value)}
                  placeholder="React, TypeScript, Blender, WebGL, Unity"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#0D1017] border border-[#222838] focus:border-[#3B82F6] text-sm text-[#F3F5F9] placeholder-[#505D77] focus:outline-none transition-colors"
                />
              </div>

              {/* Key Features (One per line) */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-[#94A0B8] mb-1.5 font-semibold">
                  Key Features / Mechanics (one per line)
                </label>
                <textarea
                  rows={2}
                  value={featuresInput}
                  onChange={(e) => setFeaturesInput(e.target.value)}
                  placeholder="Feature 1&#10;Feature 2"
                  className="w-full px-3.5 py-2 rounded-xl bg-[#0D1017] border border-[#222838] focus:border-[#3B82F6] text-xs text-[#F3F5F9] placeholder-[#505D77] focus:outline-none transition-colors resize-none font-mono"
                />
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <button
                  type="submit"
                  className="w-full sm:flex-1 py-3 px-6 rounded-full bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-mono text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all shadow-lg hover:shadow-blue-500/20 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Plus className="w-4 h-4" />
                  <span>Slot Project Into Showcase</span>
                </button>

                <button
                  type="button"
                  onClick={generateJsonSnippet}
                  className="w-full sm:w-auto py-3 px-4 rounded-full bg-[#1B2232] hover:bg-[#252E42] border border-[#2E384D] text-[#CBD5E1] font-mono text-xs font-semibold uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  title="Copy this project as TypeScript configuration"
                >
                  {copiedCode ? (
                    <>
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Code Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-[#3B82F6]" />
                      <span>Copy Code Snippet</span>
                    </>
                  )}
                </button>
              </div>

              {slotSuccess && (
                <div className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-emerald-300 text-xs font-mono flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Project successfully slotted into the live portfolio showcase!</span>
                </div>
              )}
            </form>

            {/* Right: Live Preview Slot (5 cols) */}
            <div className="lg:col-span-5 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-wider text-[#94A0B8] font-semibold flex items-center gap-2">
                  <Monitor className="w-3.5 h-3.5 text-[#3B82F6]" />
                  Real-time Slot Preview
                </span>

                {/* Device viewport sizing toggles */}
                <div className="flex items-center gap-1 bg-[#0D1017] p-1 rounded-lg border border-[#222838]">
                  <button
                    type="button"
                    onClick={() => setPreviewDevice('desktop')}
                    className={`p-1 rounded text-xs transition-colors ${
                      previewDevice === 'desktop'
                        ? 'bg-[#2563EB] text-white'
                        : 'text-[#64748B] hover:text-[#CBD5E1]'
                    }`}
                    title="Desktop Preview"
                  >
                    <Monitor className="w-3.5 h-3.5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setPreviewDevice('tablet')}
                    className={`p-1 rounded text-xs transition-colors ${
                      previewDevice === 'tablet'
                        ? 'bg-[#2563EB] text-white'
                        : 'text-[#64748B] hover:text-[#CBD5E1]'
                    }`}
                    title="Tablet Preview"
                  >
                    <Tablet className="w-3.5 h-3.5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setPreviewDevice('mobile')}
                    className={`p-1 rounded text-xs transition-colors ${
                      previewDevice === 'mobile'
                        ? 'bg-[#2563EB] text-white'
                        : 'text-[#64748B] hover:text-[#CBD5E1]'
                    }`}
                    title="Mobile Preview"
                  >
                    <Smartphone className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* The Slotted Project Card Preview */}
              <div
                className={`mx-auto rounded-2xl bg-[#0D1017] border border-[#2B3346] p-4 transition-all duration-300 shadow-xl ${
                  previewDevice === 'mobile'
                    ? 'max-w-[280px]'
                    : previewDevice === 'tablet'
                    ? 'max-w-[360px]'
                    : 'w-full'
                }`}
              >
                {/* Visual Canvas Area */}
                <div className="aspect-video w-full rounded-xl bg-[#161B26] border border-[#222838] overflow-hidden relative flex items-center justify-center mb-3">
                  {imageUrl ? (
                    <img
                      src={imageUrl}
                      alt={title || 'Preview'}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center p-4 text-center">
                      <div className="w-10 h-10 rounded-xl bg-[#1E2536] border border-[#303B52] flex items-center justify-center text-[#3B82F6] mb-2">
                        <Code2 className="w-5 h-5" />
                      </div>
                      <span className="font-mono text-xs text-[#94A0B8]">
                        Visual Graphic Slot
                      </span>
                      <span className="text-[10px] text-[#64748B] mt-0.5">
                        Add URL or upload screenshot above
                      </span>
                    </div>
                  )}

                  {/* Status Tag */}
                  <span className="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-[#0D1017]/90 border border-[#2B3346] text-[10px] font-mono text-[#3B82F6] font-semibold">
                    {status || 'Selected Work'}
                  </span>
                </div>

                {/* Card Information */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between font-mono text-[11px]">
                    <span className="text-[#3B82F6] font-semibold uppercase">
                      {category}
                    </span>
                    <span className="text-[#64748B]">{new Date().getFullYear()}</span>
                  </div>

                  <h3 className="font-display font-bold text-base text-[#F3F5F9] uppercase tracking-tight">
                    {title || 'YOUR PROJECT TITLE'}
                  </h3>

                  <p className="text-xs text-[#94A0B8] line-clamp-3 leading-relaxed">
                    {description ||
                      'Your project description will render here cleanly with high-contrast typography.'}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 pt-2">
                    {tagsInput
                      .split(',')
                      .slice(0, 3)
                      .map((t, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 rounded bg-[#161B26] border border-[#222838] text-[10px] font-mono text-[#CBD5E1]"
                        >
                          {t.trim() || 'Tech'}
                        </span>
                      ))}
                  </div>

                  {projectLink && (
                    <div className="pt-2 border-t border-[#1C2230]">
                      <a
                        href={projectLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-mono text-[#3B82F6] hover:underline"
                      >
                        <span>Test Live Link: {projectLink.replace(/^https?:\/\//, '')}</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  )}
                </div>
              </div>

              {/* Slot Info Helper */}
              <div className="p-3.5 rounded-xl bg-[#0D1017] border border-[#222838] text-xs text-[#94A0B8] space-y-1.5 font-mono">
                <div className="text-[#F3F5F9] font-semibold flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#3B82F6]" />
                  <span>How Project Slots Work</span>
                </div>
                <p className="text-[11px] text-[#64748B]">
                  Slotted projects appear prominently in the "Selected Work" showcase. They persist in local browser storage so clients and visitors can explore your work seamlessly.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
