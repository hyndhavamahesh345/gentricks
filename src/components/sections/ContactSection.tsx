import React, { useState } from 'react';
import { Send, CheckCircle, Mail, Zap, Handshake } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    org: '',
    purpose: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', org: '', purpose: '', message: '' });

      setTimeout(() => setSubmitted(false), 8000);
    }, 600);
  };

  return (
    <section className="relative py-28 px-6 bg-gentricks-black border-t border-white/5" id="contact">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Column: Direct Access */}
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-gentricks-yellow bg-gentricks-yellow/10 border border-gentricks-yellow/20 px-3.5 py-1.5 rounded-full mb-4">
              Direct Access
            </div>
            <h2 className="font-display font-black text-4xl sm:text-6xl uppercase tracking-tight text-white mb-6">
              LET'S BUILD <br />
              <span className="text-gentricks-yellow">SOMETHING.</span>
            </h2>
            <p className="font-body text-base sm:text-lg text-zinc-400 mb-10 leading-relaxed max-w-lg">
              Whether you are an ambitious student builder, a future institutional partner, an investor, or a community organizer, we’d love to connect.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 rounded-xl bg-zinc-900/60 border border-white/5">
                <div className="w-10 h-10 rounded-lg bg-gentricks-yellow/10 text-gentricks-yellow flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-mono text-[10px] text-zinc-500 uppercase">General Inquiries</div>
                  <div className="font-mono text-sm font-bold text-white">hello@gentricks.org</div>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-zinc-900/60 border border-white/5">
                <div className="w-10 h-10 rounded-lg bg-gentricks-yellow/10 text-gentricks-yellow flex items-center justify-center">
                  <Handshake className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-mono text-[10px] text-zinc-500 uppercase">Partnerships & Chapters</div>
                  <div className="font-mono text-sm font-bold text-white">partners@gentricks.org</div>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-zinc-900/60 border border-white/5">
                <div className="w-10 h-10 rounded-lg bg-gentricks-yellow/10 text-gentricks-yellow flex items-center justify-center">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-mono text-[10px] text-zinc-500 uppercase">Builder Support & Submissions</div>
                  <div className="font-mono text-sm font-bold text-white">build@gentricks.org</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="rounded-2xl bg-gentricks-card border border-white/10 p-8 sm:p-10 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block font-mono text-xs uppercase tracking-wider text-zinc-400 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-zinc-900 border border-white/15 text-white placeholder-zinc-500 focus:border-gentricks-yellow outline-none transition-colors text-sm"
                  />
                </div>

                <div>
                  <label className="block font-mono text-xs uppercase tracking-wider text-zinc-400 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-zinc-900 border border-white/15 text-white placeholder-zinc-500 focus:border-gentricks-yellow outline-none transition-colors text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block font-mono text-xs uppercase tracking-wider text-zinc-400 mb-2">
                  Organization / University / Project
                </label>
                <input
                  type="text"
                  placeholder="e.g. Stanford / Startup Co / Community"
                  value={formData.org}
                  onChange={(e) => setFormData({ ...formData, org: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-zinc-900 border border-white/15 text-white placeholder-zinc-500 focus:border-gentricks-yellow outline-none transition-colors text-sm"
                />
              </div>

              <div>
                <label className="block font-mono text-xs uppercase tracking-wider text-zinc-400 mb-2">
                  What would you like to connect about? *
                </label>
                <select
                  required
                  value={formData.purpose}
                  onChange={(e) => setFormData({ ...formData, purpose: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-zinc-900 border border-white/15 text-white focus:border-gentricks-yellow outline-none transition-colors text-sm"
                >
                  <option value="" disabled>Select an area of interest</option>
                  <option value="Community">Community & Membership</option>
                  <option value="Partnership">Institutional Partnership</option>
                  <option value="Startup">Startup & Project Incubation</option>
                  <option value="Technology">Technology & Innovation Track</option>
                  <option value="Creator">Creator & Media Track</option>
                  <option value="Opportunity">Opportunity / Job Listing</option>
                  <option value="General">General Inquiry</option>
                </select>
              </div>

              <div>
                <label className="block font-mono text-xs uppercase tracking-wider text-zinc-400 mb-2">
                  Message *
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Tell us what you would like to build or explore together..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-zinc-900 border border-white/15 text-white placeholder-zinc-500 focus:border-gentricks-yellow outline-none transition-colors text-sm resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 rounded-lg bg-gentricks-yellow text-black font-display font-black text-xs uppercase tracking-wider shadow-yellow-glow hover:bg-gentricks-yellowHover transition-all flex items-center justify-center gap-2"
              >
                {loading ? 'TRANSMITTING...' : 'SEND MESSAGE'}
                <Send className="w-4 h-4" />
              </button>

              {submitted && (
                <div className="p-4 rounded-lg bg-gentricks-yellow/10 border border-gentricks-yellow text-gentricks-yellow text-xs font-mono flex items-center gap-2 animate-fadeIn">
                  <CheckCircle className="w-4 h-4 shrink-0" />
                  <span>Message recorded successfully! Our team will get back to you shortly.</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
