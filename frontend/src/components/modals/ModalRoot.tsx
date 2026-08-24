import React, { useState } from 'react';
import { X, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { submitRegistration, submitBuilderProject, submitPartnerInquiry } from '../../services/api';

interface ModalRootProps {
  activeModal: string | null;
  onClose: () => void;
}

export const ModalRoot: React.FC<ModalRootProps> = ({ activeModal, onClose }) => {
  const [feedback, setFeedback] = useState<{ type: 'success' | 'error'; message: string } | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // 1. Join Waitlist Form State
  const [joinData, setJoinData] = useState({ fullName: '', email: '', domain: '' });

  // 2. Builder Project Form State
  const [builderData, setBuilderData] = useState({ projectName: '', stage: '', founderEmail: '', summary: '' });

  // 3. Partner Inquiry Form State
  const [partnerData, setPartnerData] = useState({ orgName: '', contactPerson: '', workEmail: '', scope: '' });

  if (!activeModal) return null;

  const handleClose = () => {
    setFeedback(null);
    setIsSubmitting(false);
    onClose();
  };

  const handleJoinSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFeedback(null);

    const res = await submitRegistration(joinData);
    setIsSubmitting(false);

    if (res.success) {
      setFeedback({ type: 'success', message: res.message || 'Registration submitted successfully!' });
      setJoinData({ fullName: '', email: '', domain: '' });
      setTimeout(handleClose, 2500);
    } else {
      setFeedback({ type: 'error', message: res.error || 'Failed to submit registration.' });
    }
  };

  const handleBuilderSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFeedback(null);

    const res = await submitBuilderProject(builderData);
    setIsSubmitting(false);

    if (res.success) {
      setFeedback({ type: 'success', message: res.message || 'Project submitted successfully!' });
      setBuilderData({ projectName: '', stage: '', founderEmail: '', summary: '' });
      setTimeout(handleClose, 2500);
    } else {
      setFeedback({ type: 'error', message: res.error || 'Failed to submit project.' });
    }
  };

  const handlePartnerSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFeedback(null);

    const res = await submitPartnerInquiry(partnerData);
    setIsSubmitting(false);

    if (res.success) {
      setFeedback({ type: 'success', message: res.message || 'Partner inquiry recorded successfully!' });
      setPartnerData({ orgName: '', contactPerson: '', workEmail: '', scope: '' });
      setTimeout(handleClose, 2500);
    } else {
      setFeedback({ type: 'error', message: res.error || 'Failed to submit partner inquiry.' });
    }
  };

  return (
    <div
      className="fixed inset-0 z-[1000] flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl animate-fadeIn"
      onClick={(e) => {
        if (e.target === e.currentTarget) handleClose();
      }}
    >
      <div className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto rounded-2xl bg-gentricks-card border border-white/15 p-8 shadow-2xl">
        {/* Close Button */}
        <button
          onClick={handleClose}
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

            <form onSubmit={handleJoinSubmit} className="space-y-4">
              <div>
                <label htmlFor="join-fullname" className="block font-mono text-xs text-zinc-400 uppercase mb-1.5">Full Name *</label>
                <input
                  id="join-fullname"
                  type="text"
                  required
                  placeholder="Your name"
                  value={joinData.fullName}
                  onChange={(e) => setJoinData({ ...joinData, fullName: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg bg-zinc-900 border border-white/15 text-white text-sm focus:border-gentricks-yellow focus:ring-2 focus:ring-gentricks-yellow/30 outline-none"
                />
              </div>

              <div>
                <label htmlFor="join-email" className="block font-mono text-xs text-zinc-400 uppercase mb-1.5">Email Address *</label>
                <input
                  id="join-email"
                  type="email"
                  required
                  placeholder="your.email@example.com"
                  value={joinData.email}
                  onChange={(e) => setJoinData({ ...joinData, email: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg bg-zinc-900 border border-white/15 text-white text-sm focus:border-gentricks-yellow focus:ring-2 focus:ring-gentricks-yellow/30 outline-none"
                />
              </div>

              <div>
                <label htmlFor="join-domain" className="block font-mono text-xs text-zinc-400 uppercase mb-1.5">Your Domain *</label>
                <select
                  id="join-domain"
                  required
                  value={joinData.domain}
                  onChange={(e) => setJoinData({ ...joinData, domain: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg bg-zinc-900 border border-white/15 text-white text-sm focus:border-gentricks-yellow focus:ring-2 focus:ring-gentricks-yellow/30 outline-none"
                >
                  <option value="" disabled>Select domain</option>
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
                disabled={isSubmitting}
                className="w-full py-3.5 rounded-lg bg-gentricks-yellow text-black font-display font-black text-xs uppercase tracking-wider shadow-yellow-glow hover:bg-gentricks-yellowHover focus:ring-2 focus:ring-white transition-all flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    SUBMITTING...
                  </>
                ) : (
                  'SUBMIT REGISTRATION'
                )}
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

            <form onSubmit={handleBuilderSubmit} className="space-y-4">
              <div>
                <label className="block font-mono text-xs text-zinc-400 uppercase mb-1.5">Project / Idea Name *</label>
                <input
                  type="text"
                  required
                  placeholder="Project Name"
                  value={builderData.projectName}
                  onChange={(e) => setBuilderData({ ...builderData, projectName: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg bg-zinc-900 border border-white/15 text-white text-sm focus:border-gentricks-yellow outline-none"
                />
              </div>

              <div>
                <label className="block font-mono text-xs text-zinc-400 uppercase mb-1.5">Current Stage *</label>
                <select
                  required
                  value={builderData.stage}
                  onChange={(e) => setBuilderData({ ...builderData, stage: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg bg-zinc-900 border border-white/15 text-white text-sm focus:border-gentricks-yellow outline-none"
                >
                  <option value="" disabled>Select current stage</option>
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
                  value={builderData.founderEmail}
                  onChange={(e) => setBuilderData({ ...builderData, founderEmail: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg bg-zinc-900 border border-white/15 text-white text-sm focus:border-gentricks-yellow outline-none"
                />
              </div>

              <div>
                <label className="block font-mono text-xs text-zinc-400 uppercase mb-1.5">Problem & Solution Summary *</label>
                <textarea
                  required
                  rows={3}
                  placeholder="What problem are you solving?"
                  value={builderData.summary}
                  onChange={(e) => setBuilderData({ ...builderData, summary: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg bg-zinc-900 border border-white/15 text-white text-sm focus:border-gentricks-yellow outline-none resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 rounded-lg bg-gentricks-yellow text-black font-display font-black text-xs uppercase tracking-wider shadow-yellow-glow hover:bg-gentricks-yellowHover transition-all flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    SUBMITTING...
                  </>
                ) : (
                  'SUBMIT PROJECT FOR REVIEW'
                )}
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

            <form onSubmit={handlePartnerSubmit} className="space-y-4">
              <div>
                <label className="block font-mono text-xs text-zinc-400 uppercase mb-1.5">Organization Name *</label>
                <input
                  type="text"
                  required
                  placeholder="Company / University / Community"
                  value={partnerData.orgName}
                  onChange={(e) => setPartnerData({ ...partnerData, orgName: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg bg-zinc-900 border border-white/15 text-white text-sm focus:border-gentricks-yellow outline-none"
                />
              </div>

              <div>
                <label className="block font-mono text-xs text-zinc-400 uppercase mb-1.5">Contact Person & Title *</label>
                <input
                  type="text"
                  required
                  placeholder="Name, Role"
                  value={partnerData.contactPerson}
                  onChange={(e) => setPartnerData({ ...partnerData, contactPerson: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg bg-zinc-900 border border-white/15 text-white text-sm focus:border-gentricks-yellow outline-none"
                />
              </div>

              <div>
                <label className="block font-mono text-xs text-zinc-400 uppercase mb-1.5">Work Email *</label>
                <input
                  type="email"
                  required
                  placeholder="partner@organization.com"
                  value={partnerData.workEmail}
                  onChange={(e) => setPartnerData({ ...partnerData, workEmail: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg bg-zinc-900 border border-white/15 text-white text-sm focus:border-gentricks-yellow outline-none"
                />
              </div>

              <div>
                <label className="block font-mono text-xs text-zinc-400 uppercase mb-1.5">Collaboration Scope *</label>
                <textarea
                  required
                  rows={3}
                  placeholder="How would you like to collaborate with Gentricks?"
                  value={partnerData.scope}
                  onChange={(e) => setPartnerData({ ...partnerData, scope: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg bg-zinc-900 border border-white/15 text-white text-sm focus:border-gentricks-yellow outline-none resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 rounded-lg bg-gentricks-yellow text-black font-display font-black text-xs uppercase tracking-wider shadow-yellow-glow hover:bg-gentricks-yellowHover transition-all flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    SUBMITTING...
                  </>
                ) : (
                  'SUBMIT PARTNERSHIP INQUIRY'
                )}
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

        {/* Feedback confirmation / Error banner */}
        {feedback && (
          <div
            className={`mt-4 p-3 rounded-lg border text-xs font-mono flex items-center gap-2 animate-fadeIn ${
              feedback.type === 'success'
                ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400'
                : 'bg-rose-500/10 border-rose-500/30 text-rose-400'
            }`}
          >
            {feedback.type === 'success' ? (
              <CheckCircle className="w-4 h-4 shrink-0 text-emerald-400" />
            ) : (
              <AlertCircle className="w-4 h-4 shrink-0 text-rose-400" />
            )}
            <span>{feedback.message}</span>
          </div>
        )}
      </div>
    </div>
  );
};
