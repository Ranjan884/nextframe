import React, { useState } from 'react';
import { verifyAdminPasscode } from '../lib/projectService';
import { Lock, X, KeyRound, AlertCircle, ArrowRight } from 'lucide-react';

interface StudioAuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

export const StudioAuthModal: React.FC<StudioAuthModalProps> = ({
  isOpen,
  onClose,
  onSuccess,
}) => {
  const [passcode, setPasscode] = useState('');
  const [error, setError] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (verifyAdminPasscode(passcode)) {
      setError(false);
      setPasscode('');
      onSuccess();
    } else {
      setError(true);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="relative w-full max-w-sm bg-white rounded-2xl border border-[#E2E8F0] shadow-xl p-6 overflow-hidden">
        
        <div className="flex items-center justify-between pb-4 border-b border-[#E2E8F0] mb-5">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[#EFF6FF] text-[#2563EB] flex items-center justify-center">
              <Lock className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-[#0F172A]">Studio Access</h3>
              <p className="text-[11px] text-[#64748B]">Admin Project Management</p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#64748B] hover:text-[#0F172A] hover:bg-[#F1F5F9]"
            aria-label="Close auth dialog"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-[#0F172A] mb-1.5">
              Enter Studio Passcode
            </label>
            <div className="relative">
              <input
                type="password"
                required
                autoFocus
                value={passcode}
                onChange={(e) => {
                  setPasscode(e.target.value);
                  setError(false);
                }}
                placeholder="••••••••"
                className={`w-full pl-9 pr-3 py-2.5 rounded-lg border text-sm outline-none transition-colors ${
                  error
                    ? 'border-red-500 ring-1 ring-red-500'
                    : 'border-[#CBD5E1] focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB]'
                }`}
              />
              <KeyRound className="w-4 h-4 text-[#94A3B8] absolute left-3 top-3 pointer-events-none" />
            </div>

            {error && (
              <p className="text-xs text-red-600 mt-1.5 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>Incorrect passcode. Please try again.</span>
              </p>
            )}

            <p className="text-[11px] text-[#64748B] mt-2">
              Protected area for Ranjan and Mohmed Sami to add, edit, and publish studio portfolio items.
            </p>
          </div>

          <div className="pt-2 flex items-center justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-3.5 py-2 text-xs font-semibold text-[#64748B] hover:text-[#0F172A]"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#0F172A] hover:bg-[#1E293B] text-white text-xs font-semibold transition-colors"
            >
              <span>Unlock Admin</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </form>

      </div>
    </div>
  );
};
