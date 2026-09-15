import React, { useState, useEffect, useRef } from 'react';
import { StudioProject, saveProject, deleteProject, togglePublishProject } from '../lib/projectService';
import {
  X,
  Plus,
  Edit2,
  Trash2,
  Eye,
  EyeOff,
  Upload,
  ExternalLink,
  Github,
  Check,
  AlertCircle,
  ShieldAlert,
} from 'lucide-react';

interface StudioProjectManagerModalProps {
  isOpen: boolean;
  onClose: () => void;
  projects: StudioProject[];
  onProjectsUpdated: () => void;
  initialEditingProject?: StudioProject | null;
}

const CATEGORIES = [
  'Web Development',
  'Full-Stack Development',
  'App Development',
  'UI/UX Design',
  'Video Editing',
  '2D/3D Design',
  'Game Development',
];

export const StudioProjectManagerModal: React.FC<StudioProjectManagerModalProps> = ({
  isOpen,
  onClose,
  projects,
  onProjectsUpdated,
  initialEditingProject = null,
}) => {
  const [activeTab, setActiveTab] = useState<'list' | 'form'>('list');
  const [editingId, setEditingId] = useState<string | null>(null);

  // Form fields
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState(CATEGORIES[0]);
  const [tagsInput, setTagsInput] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [projectLink, setProjectLink] = useState('');
  const [githubUrl, setGithubUrl] = useState('');
  const [isPublished, setIsPublished] = useState(true);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);

  // Sync initial editing project if provided
  useEffect(() => {
    if (initialEditingProject) {
      loadProjectIntoForm(initialEditingProject);
      setActiveTab('form');
    }
  }, [initialEditingProject]);

  if (!isOpen) return null;

  const resetForm = () => {
    setEditingId(null);
    setTitle('');
    setDescription('');
    setCategory(CATEGORIES[0]);
    setTagsInput('');
    setImageUrl('');
    setProjectLink('');
    setGithubUrl('');
    setIsPublished(true);
    setStatusMessage(null);
  };

  const loadProjectIntoForm = (proj: StudioProject) => {
    setEditingId(proj.id);
    setTitle(proj.title);
    setDescription(proj.description);
    setCategory(proj.category || CATEGORIES[0]);
    setTagsInput(proj.tags ? proj.tags.join(', ') : '');
    setImageUrl(proj.imageUrl || '');
    setProjectLink(proj.projectLink || '');
    setGithubUrl(proj.githubUrl || '');
    setIsPublished(proj.isPublished !== false);
    setStatusMessage(null);
    setActiveTab('form');
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 2.5 * 1024 * 1024) {
      alert('Image file is too large. Please select an image under 2.5 MB.');
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        setImageUrl(reader.result);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) {
      setStatusMessage('Please provide a project title.');
      return;
    }

    const tagsArray = tagsInput
      .split(',')
      .map((t) => t.trim())
      .filter((t) => t.length > 0);

    const projectData: StudioProject = {
      id: editingId || `project_${Date.now()}`,
      title: title.trim(),
      description: description.trim(),
      category: category,
      tags: tagsArray.length > 0 ? tagsArray : ['Creative Tech'],
      imageUrl: imageUrl.trim(),
      projectLink: projectLink.trim(),
      githubUrl: githubUrl.trim(),
      isPublished: isPublished,
      year: new Date().getFullYear().toString(),
    };

    saveProject(projectData);
    onProjectsUpdated();
    setStatusMessage(editingId ? 'Project updated successfully.' : 'New project added successfully.');

    setTimeout(() => {
      resetForm();
      setActiveTab('list');
    }, 600);
  };

  const handleDelete = (id: string, projectTitle: string) => {
    if (window.confirm(`Are you sure you want to delete "${projectTitle}"?`)) {
      deleteProject(id);
      onProjectsUpdated();
      if (editingId === id) {
        resetForm();
        setActiveTab('list');
      }
    }
  };

  const handleTogglePublish = (id: string) => {
    togglePublishProject(id);
    onProjectsUpdated();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl max-h-[90vh] bg-white rounded-2xl border border-[#E2E8F0] shadow-xl flex flex-col overflow-hidden">
        
        {/* Modal Header */}
        <div className="px-6 py-4 border-b border-[#E2E8F0] flex items-center justify-between bg-[#F8FAFC]">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-600" />
              <span className="text-xs font-semibold text-[#64748B] uppercase tracking-wider">
                Nextframe Studio
              </span>
            </div>
            <h2 className="text-lg font-bold text-[#0F172A] mt-0.5">
              Project Management
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-lg text-[#64748B] hover:text-[#0F172A] hover:bg-white border border-transparent hover:border-[#E2E8F0] transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="px-6 border-b border-[#E2E8F0] flex items-center justify-between bg-white">
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => {
                setActiveTab('list');
                setStatusMessage(null);
              }}
              className={`py-3 text-sm font-semibold border-b-2 transition-colors ${
                activeTab === 'list'
                  ? 'border-[#2563EB] text-[#2563EB]'
                  : 'border-transparent text-[#64748B] hover:text-[#0F172A]'
              }`}
            >
              All Projects ({projects.length})
            </button>

            <button
              type="button"
              onClick={() => {
                resetForm();
                setActiveTab('form');
              }}
              className={`py-3 text-sm font-semibold border-b-2 transition-colors flex items-center gap-1.5 ${
                activeTab === 'form' && !editingId
                  ? 'border-[#2563EB] text-[#2563EB]'
                  : 'border-transparent text-[#64748B] hover:text-[#0F172A]'
              }`}
            >
              <Plus className="w-4 h-4" />
              <span>Add Project</span>
            </button>

            {editingId && activeTab === 'form' && (
              <span className="py-3 text-sm font-semibold border-b-2 border-[#2563EB] text-[#2563EB]">
                Editing: {title || 'Project'}
              </span>
            )}
          </div>

          <span className="text-xs text-[#64748B] hidden sm:inline">
            Admin Mode Active
          </span>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-6">
          
          {/* Status Message */}
          {statusMessage && (
            <div className="mb-4 p-3 rounded-lg bg-blue-50 border border-blue-200 text-blue-800 text-xs font-semibold flex items-center gap-2">
              <Check className="w-4 h-4 text-blue-600" />
              <span>{statusMessage}</span>
            </div>
          )}

          {/* TAB 1: ALL PROJECTS LIST */}
          {activeTab === 'list' && (
            <div className="space-y-3">
              {projects.length === 0 ? (
                <div className="py-12 text-center text-[#64748B]">
                  <p className="text-sm">No projects currently registered.</p>
                  <button
                    type="button"
                    onClick={() => {
                      resetForm();
                      setActiveTab('form');
                    }}
                    className="mt-3 px-4 py-2 rounded-lg bg-[#0F172A] text-white text-xs font-semibold"
                  >
                    Add Your First Project
                  </button>
                </div>
              ) : (
                projects.map((proj) => (
                  <div
                    key={proj.id}
                    className="p-4 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] hover:bg-white hover:border-[#CBD5E1] transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                  >
                    <div className="flex items-start gap-3.5">
                      {/* Mini Thumbnail */}
                      <div className="w-16 h-12 rounded-lg bg-[#E2E8F0] overflow-hidden shrink-0 flex items-center justify-center text-[#64748B]">
                        {proj.imageUrl ? (
                          <img
                            src={proj.imageUrl}
                            alt=""
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <span className="text-[10px] font-semibold">IMG</span>
                        )}
                      </div>

                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="text-sm font-bold text-[#0F172A]">
                            {proj.title}
                          </h4>
                          <span
                            className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                              proj.isPublished
                                ? 'bg-emerald-100 text-emerald-800'
                                : 'bg-gray-200 text-gray-700'
                            }`}
                          >
                            {proj.isPublished ? 'Published' : 'Hidden'}
                          </span>
                        </div>

                        <p className="text-xs text-[#64748B] line-clamp-1 mt-0.5">
                          {proj.category} · {proj.description}
                        </p>
                      </div>
                    </div>

                    {/* Action Controls */}
                    <div className="flex items-center gap-1.5 shrink-0 self-end sm:self-center">
                      <button
                        type="button"
                        onClick={() => handleTogglePublish(proj.id)}
                        className={`p-2 rounded-lg text-xs font-medium border transition-colors ${
                          proj.isPublished
                            ? 'text-gray-700 bg-white border-[#E2E8F0] hover:bg-gray-50'
                            : 'text-emerald-700 bg-emerald-50 border-emerald-200 hover:bg-emerald-100'
                        }`}
                        title={proj.isPublished ? 'Hide from visitors' : 'Publish to visitors'}
                      >
                        {proj.isPublished ? (
                          <span className="flex items-center gap-1">
                            <EyeOff className="w-3.5 h-3.5" />
                            <span className="hidden md:inline">Hide</span>
                          </span>
                        ) : (
                          <span className="flex items-center gap-1">
                            <Eye className="w-3.5 h-3.5" />
                            <span className="hidden md:inline">Publish</span>
                          </span>
                        )}
                      </button>

                      <button
                        type="button"
                        onClick={() => loadProjectIntoForm(proj)}
                        className="p-2 rounded-lg text-xs font-medium text-[#2563EB] bg-blue-50 border border-blue-200 hover:bg-blue-100 transition-colors flex items-center gap-1"
                        title="Edit Project"
                      >
                        <Edit2 className="w-3.5 h-3.5" />
                        <span className="hidden md:inline">Edit</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => handleDelete(proj.id, proj.title)}
                        className="p-2 rounded-lg text-xs font-medium text-red-600 bg-red-50 border border-red-200 hover:bg-red-100 transition-colors"
                        title="Delete Project"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          )}

          {/* TAB 2: ADD / EDIT PROJECT FORM */}
          {activeTab === 'form' && (
            <form onSubmit={handleSave} className="space-y-4">
              {/* Project Title */}
              <div>
                <label className="block text-xs font-bold text-[#0F172A] uppercase tracking-wider mb-1.5">
                  Project Title *
                </label>
                <input
                  type="text"
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="e.g. AquaTrack, Kinematic 3D Prototype..."
                  className="w-full px-3.5 py-2.5 rounded-lg border border-[#CBD5E1] focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] text-sm text-[#0F172A] outline-none"
                />
              </div>

              {/* Category */}
              <div>
                <label className="block text-xs font-bold text-[#0F172A] uppercase tracking-wider mb-1.5">
                  Category *
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-[#CBD5E1] focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] text-sm text-[#0F172A] bg-white outline-none"
                >
                  {CATEGORIES.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>

              {/* Short Description */}
              <div>
                <label className="block text-xs font-bold text-[#0F172A] uppercase tracking-wider mb-1.5">
                  Short Description *
                </label>
                <textarea
                  rows={3}
                  required
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="A concise, natural description of the project, its purpose, and what was built..."
                  className="w-full px-3.5 py-2.5 rounded-lg border border-[#CBD5E1] focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] text-sm text-[#0F172A] outline-none"
                />
              </div>

              {/* Image Upload or URL */}
              <div>
                <label className="block text-xs font-bold text-[#0F172A] uppercase tracking-wider mb-1.5">
                  Project Thumbnail / Image
                </label>
                
                <div className="flex flex-col sm:flex-row items-center gap-3">
                  <input
                    type="url"
                    value={imageUrl.startsWith('data:') ? '(Uploaded Image Asset)' : imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)}
                    placeholder="https://example.com/project-preview.jpg"
                    className="flex-1 w-full px-3.5 py-2 rounded-lg border border-[#CBD5E1] text-xs text-[#0F172A] outline-none"
                  />

                  <div className="flex items-center gap-2 w-full sm:w-auto shrink-0">
                    <input
                      type="file"
                      ref={fileInputRef}
                      onChange={handleFileUpload}
                      accept="image/*"
                      className="hidden"
                    />
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="w-full sm:w-auto px-3.5 py-2 rounded-lg border border-[#E2E8F0] bg-[#F8FAFC] hover:bg-[#F1F5F9] text-xs font-semibold text-[#0F172A] flex items-center justify-center gap-1.5"
                    >
                      <Upload className="w-3.5 h-3.5" />
                      <span>Upload File</span>
                    </button>

                    {imageUrl && (
                      <button
                        type="button"
                        onClick={() => setImageUrl('')}
                        className="px-2 py-2 text-xs text-red-600 hover:bg-red-50 rounded"
                      >
                        Clear
                      </button>
                    )}
                  </div>
                </div>

                {imageUrl && (
                  <div className="mt-2.5 w-32 h-20 rounded-lg overflow-hidden border border-[#E2E8F0] bg-gray-50">
                    <img src={imageUrl} alt="Thumbnail preview" className="w-full h-full object-cover" />
                  </div>
                )}
              </div>

              {/* Technology Tags */}
              <div>
                <label className="block text-xs font-bold text-[#0F172A] uppercase tracking-wider mb-1.5">
                  Technology Tags (Comma-separated)
                </label>
                <input
                  type="text"
                  value={tagsInput}
                  onChange={(e) => setTagsInput(e.target.value)}
                  placeholder="React, TypeScript, Tailwind CSS, Unity, Blender"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-[#CBD5E1] focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] text-sm text-[#0F172A] outline-none"
                />
              </div>

              {/* Links Row (Live Project & GitHub) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#0F172A] uppercase tracking-wider mb-1.5">
                    Live Project Link (Optional)
                  </label>
                  <input
                    type="url"
                    value={projectLink}
                    onChange={(e) => setProjectLink(e.target.value)}
                    placeholder="https://myproject.com"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#CBD5E1] focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] text-sm text-[#0F172A] outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#0F172A] uppercase tracking-wider mb-1.5">
                    GitHub Link (Optional)
                  </label>
                  <input
                    type="url"
                    value={githubUrl}
                    onChange={(e) => setGithubUrl(e.target.value)}
                    placeholder="https://github.com/org/repo"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#CBD5E1] focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] text-sm text-[#0F172A] outline-none"
                  />
                </div>
              </div>

              {/* Publish or Hide Switch */}
              <div className="pt-2">
                <label className="flex items-center gap-2.5 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={isPublished}
                    onChange={(e) => setIsPublished(e.target.checked)}
                    className="w-4 h-4 rounded text-[#2563EB] focus:ring-[#2563EB] border-[#CBD5E1]"
                  />
                  <div>
                    <span className="text-sm font-semibold text-[#0F172A]">
                      Publish this project immediately
                    </span>
                    <p className="text-xs text-[#64748B]">
                      When published, this project will appear in the public Projects gallery for visitors.
                    </p>
                  </div>
                </label>
              </div>

              {/* Form Buttons */}
              <div className="pt-4 flex items-center justify-end gap-3 border-t border-[#E2E8F0]">
                <button
                  type="button"
                  onClick={() => {
                    resetForm();
                    setActiveTab('list');
                  }}
                  className="px-4 py-2.5 rounded-lg border border-[#E2E8F0] text-sm font-semibold text-[#64748B] hover:text-[#0F172A] hover:bg-[#F8FAFC]"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-lg bg-[#0F172A] hover:bg-[#1E293B] text-white text-sm font-semibold transition-colors"
                >
                  {editingId ? 'Save Changes' : 'Create Project'}
                </button>
              </div>
            </form>
          )}

        </div>

      </div>
    </div>
  );
};
