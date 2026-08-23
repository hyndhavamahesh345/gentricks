import React, { useState } from 'react';
import { X, CheckCircle } from 'lucide-react';

interface ModalRootProps {
  activeModal: string | null;
  onClose: () => void;
}

export const ModalRoot: React.FC<ModalRootProps> = ({ activeModal, onClose }) => {
  const [feedback, setFeedback] = useState<string | null>(null);

  if (!activeModal) return null;

  const handleFormSubmit = (e: React.FormEvent, successMsg: string) => {
    e.preventDefault();
    setFeedback(successMsg);
    setTimeout(() => {
      setFeedback(null);
      onClose();
    }, 2500);
  };

  return (
    <div
      className="fixed inset-0 z-[1000] flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl animate-fadeIn"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto rounded-2xl bg-gentricks-card border border-white/15 p-8 shadow-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-black hover:bg-gentricks-yellow hover:border-gentricks-yellow transition-all"
        >
          <X className="w-4 h-4" />
        </button>

        {/* 1. JOIN GENTRICKS WAITLIST MODAL */}
        {activeModal === 'join' && (
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-gentricks-yellow bg-gentricks-yellow/10 border border-gentricks-yellow/20 px-2.5 py-1 rounded-full mb-3">
              Early Access
            </div>
            <h3 className="font-display font-black text-2xl uppercase tracking-tight text-white mb-2">
              JOIN GENTRICKS
            </h3>
            <p className="font-body text-sm text-zinc-400 mb-6">
              Register your interest to become a founding community member as we prepare our official ecosystem launch.
            </p>

            <form
              onSubmit={(e) =>
                handleFormSubmit(
                  e,
                  'Welcome to Gentricks! You have been added to the founding member waitlist.'
                )
              }
              className="space-y-4"
            >
              <div>
                <label className="block font-mono text-xs text-zinc-400 uppercase mb-1.5">Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="Your name"
                  className="w-full px-4 py-2.5 rounded-lg bg-zinc-900 border border-white/15 text-white text-sm focus:border-gentricks-yellow outline-none"
                />
              </div>

              <div>
                <label className="block font-mono text-xs text-zinc-400 uppercase mb-1.5">Email Address *</label>
                <input
                  type="email"
                  required
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-2.5 rounded-lg bg-zinc-900 border border-white/15 text-white text-sm focus:border-gentricks-yellow outline-none"
                />
              </div>

              <div>
                <label className="block font-mono text-xs text-zinc-400 uppercase mb-1.5">Your Domain *</label>
                <select
                  required
                  className="w-full px-4 py-2.5 rounded-lg bg-zinc-900 border border-white/15 text-white text-sm focus:border-gentricks-yellow outline-none"
                >
                  <option value="" disabled selected>Select domain</option>
                  <option value="Student">Student / Learner</option>
                  <option value="Developer">Software Engineer / Developer</option>
                  <option value="Designer">UI/UX / Product Designer</option>
                  <option value="Creator">Content / Media Creator</option>
                  <option value="Founder">Founder / Startup Builder</option>
                  <option value="Mentor">Mentor / Industry Expert</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-lg bg-gentricks-yellow text-black font-display font-black text-xs uppercase tracking-wider shadow-yellow-glow hover:bg-gentricks-yellowHover transition-all"
              >
                SUBMIT REGISTRATION
              </button>
            </form>
          </div>
        )}

        {/* 2. EARLY BUILDER PROJECT SUBMISSION MODAL */}
        {activeModal === 'builder' && (
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-gentricks-yellow bg-gentricks-yellow/10 border border-gentricks-yellow/20 px-2.5 py-1 rounded-full mb-3">
              Incubation Track
            </div>
            <h3 className="font-display font-black text-2xl uppercase tracking-tight text-white mb-2">
              BUILD WITH US
            </h3>
            <p className="font-body text-sm text-zinc-400 mb-6">
              Submit your idea or working prototype for incubation guidance, peer review, and early mentor feedback.
            </p>

            <form
              onSubmit={(e) =>
                handleFormSubmit(
                  e,
                  'Project submission received! Our incubation team will review your application.'
                )
              }
              className="space-y-4"
            >
              <div>
                <label className="block font-mono text-xs text-zinc-400 uppercase mb-1.5">Project / Idea Name *</label>
                <input
                  type="text"
                  required
                  placeholder="Project Name"
                  className="w-full px-4 py-2.5 rounded-lg bg-zinc-900 border border-white/15 text-white text-sm focus:border-gentricks-yellow outline-none"
                />
              </div>

              <div>
                <label className="block font-mono text-xs text-zinc-400 uppercase mb-1.5">Current Stage *</label>
                <select
                  required
                  className="w-full px-4 py-2.5 rounded-lg bg-zinc-900 border border-white/15 text-white text-sm focus:border-gentricks-yellow outline-none"
                >
                  <option value="" disabled selected>Select current stage</option>
                  <option value="Idea">Idea / Concept Formation</option>
                  <option value="Wireframe">Wireframe / Technical Architecture</option>
                  <option value="MVP">Functional MVP</option>
                  <option value="Beta">Early Users / Traction</option>
                </select>
              </div>

              <div>
                <label className="block font-mono text-xs text-zinc-400 uppercase mb-1.5">Founder Contact Email *</label>
                <input
                  type="email"
                  required
                  placeholder="founder@example.com"
                  className="w-full px-4 py-2.5 rounded-lg bg-zinc-900 border border-white/15 text-white text-sm focus:border-gentricks-yellow outline-none"
                />
              </div>

              <div>
                <label className="block font-mono text-xs text-zinc-400 uppercase mb-1.5">Problem & Solution Summary *</label>
                <textarea
                  required
                  rows={3}
                  placeholder="What problem are you solving?"
                  className="w-full px-4 py-2.5 rounded-lg bg-zinc-900 border border-white/15 text-white text-sm focus:border-gentricks-yellow outline-none resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-lg bg-gentricks-yellow text-black font-display font-black text-xs uppercase tracking-wider shadow-yellow-glow hover:bg-gentricks-yellowHover transition-all"
              >
                SUBMIT PROJECT FOR REVIEW
              </button>
            </form>
          </div>
        )}

        {/* 3. PARTNERSHIP INQUIRY MODAL */}
        {activeModal === 'partner' && (
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-gentricks-yellow bg-gentricks-yellow/10 border border-gentricks-yellow/20 px-2.5 py-1 rounded-full mb-3">
              Institutional Relations
            </div>
            <h3 className="font-display font-black text-2xl uppercase tracking-tight text-white mb-2">
              PARTNER WITH GENTRICKS
            </h3>
            <p className="font-body text-sm text-zinc-400 mb-6">
              Connect with our partnership team or email directly at <a href="mailto:collab@gentricks.in" className="text-gentricks-yellow hover:underline font-mono text-xs">collab@gentricks.in</a> to explore talent pipelines, campus chapters, and innovation initiatives.
            </p>

            <form
              onSubmit={(e) =>
                handleFormSubmit(
                  e,
                  'Partnership inquiry recorded! Our institutional relations lead will reach out promptly.'
                )
              }
              className="space-y-4"
            >
              <div>
                <label className="block font-mono text-xs text-zinc-400 uppercase mb-1.5">Organization Name *</label>
                <input
                  type="text"
                  required
                  placeholder="Company / University / Community"
                  className="w-full px-4 py-2.5 rounded-lg bg-zinc-900 border border-white/15 text-white text-sm focus:border-gentricks-yellow outline-none"
                />
              </div>

              <div>
                <label className="block font-mono text-xs text-zinc-400 uppercase mb-1.5">Contact Person & Title *</label>
                <input
                  type="text"
                  required
                  placeholder="Name, Role"
                  className="w-full px-4 py-2.5 rounded-lg bg-zinc-900 border border-white/15 text-white text-sm focus:border-gentricks-yellow outline-none"
                />
              </div>

              <div>
                <label className="block font-mono text-xs text-zinc-400 uppercase mb-1.5">Work Email *</label>
                <input
                  type="email"
                  required
                  placeholder="partner@organization.com"
                  className="w-full px-4 py-2.5 rounded-lg bg-zinc-900 border border-white/15 text-white text-sm focus:border-gentricks-yellow outline-none"
                />
              </div>

              <div>
                <label className="block font-mono text-xs text-zinc-400 uppercase mb-1.5">Collaboration Scope *</label>
                <textarea
                  required
                  rows={3}
                  placeholder="How would you like to collaborate with Gentricks?"
                  className="w-full px-4 py-2.5 rounded-lg bg-zinc-900 border border-white/15 text-white text-sm focus:border-gentricks-yellow outline-none resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-lg bg-gentricks-yellow text-black font-display font-black text-xs uppercase tracking-wider shadow-yellow-glow hover:bg-gentricks-yellowHover transition-all"
              >
                SUBMIT PARTNERSHIP INQUIRY
              </button>
            </form>
          </div>
        )}


        {/* 5. PRIVACY POLICY MODAL */}
        {activeModal === 'privacy' && (
          <div>
            <h3 className="font-display font-black text-2xl uppercase tracking-tight text-white mb-4">
              PRIVACY POLICY
            </h3>
            <div className="space-y-3 font-body text-xs text-zinc-400 leading-relaxed">
              <p>Gentricks respects the privacy of all community members, builders, partners, and visitors.</p>
              <p>We collect only necessary information to deliver access to ecosystem programs, review builder submissions, and communicate official updates.</p>
              <p>No user data is sold or shared with unauthorized third parties.</p>
            </div>
          </div>
        )}

        {/* 6. TERMS OF SERVICE MODAL */}
        {activeModal === 'terms' && (
          <div>
            <h3 className="font-display font-black text-2xl uppercase tracking-tight text-white mb-4">
              TERMS OF SERVICE
            </h3>
            <div className="space-y-3 font-body text-xs text-zinc-400 leading-relaxed">
              <p>By participating in Gentricks programs, you agree to collaborative conduct and merit-based participation.</p>
              <p><strong className="text-white">Builder IP Ownership:</strong> Builders retain 100% intellectual property ownership over any projects, software, content, or startup concepts developed within the ecosystem.</p>
            </div>
          </div>
        )}

        {/* Feedback confirmation banner */}
        {feedback && (
          <div className="mt-4 p-3 rounded-lg bg-gentricks-yellow/10 border border-gentricks-yellow text-gentricks-yellow text-xs font-mono flex items-center gap-2 animate-fadeIn">
            <CheckCircle className="w-4 h-4 shrink-0" />
            <span>{feedback}</span>
          </div>
        )}
      </div>
    </div>
  );
};
