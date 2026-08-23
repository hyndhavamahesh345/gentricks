import React, { useState } from 'react';
import { Bell, Check, Sparkles } from 'lucide-react';

export const OpportunitiesSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail('');
  };

  const oppTracks = [
    { title: 'Internships', icon: '⚡' },
    { title: 'High-Impact Jobs', icon: '💼' },
    { title: 'Hackathons', icon: '🏆' },
    { title: 'Fellowships', icon: '🎓' },
    { title: 'Competitions', icon: '🚀' },
    { title: 'Startup Programs', icon: '🌱' },
    { title: 'Learning Sprints', icon: '📚' },
  ];

  return (
    <section className="relative py-28 px-6 bg-gentricks-black border-t border-white/5" id="opportunities">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-gentricks-yellow bg-gentricks-yellow/10 border border-gentricks-yellow/20 px-3.5 py-1.5 rounded-full mb-4">
            Career & Growth
          </div>
          <h2 className="font-display font-black text-4xl sm:text-6xl uppercase tracking-tight text-white mb-4">
            FIND WHAT'S <span className="text-gentricks-yellow">NEXT.</span>
          </h2>
          <p className="font-body text-base sm:text-lg text-zinc-400">
            Connecting ambitious young talent with real opportunities to build, learn, and lead.
          </p>
        </div>

        {/* Opportunity Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-3 max-w-4xl mx-auto mb-16">
          {oppTracks.map((trk) => (
            <div
              key={trk.title}
              className="px-5 py-3 rounded-full bg-zinc-900 border border-white/10 hover:border-gentricks-yellow/40 hover:bg-zinc-800/80 transition-all duration-200 flex items-center gap-2.5"
            >
              <span className="text-base">{trk.icon}</span>
              <span className="font-display font-bold text-sm text-zinc-200 uppercase tracking-wide">
                {trk.title}
              </span>
            </div>
          ))}
        </div>

        {/* Honest Status Alert & Early Notification Box */}
        <div className="max-w-3xl mx-auto rounded-2xl bg-zinc-900/70 border border-white/10 p-8 sm:p-10 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-left">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-gentricks-yellow uppercase mb-2">
              <Sparkles className="w-4 h-4" />
              OPPORTUNITIES ARE BEING BUILT
            </div>
            <h4 className="font-display font-bold text-xl text-white mb-2">
              Get Notified When Listings Go Live
            </h4>
            <p className="font-body text-sm text-zinc-400">
              Our institutional network is curating verified startup fellowships, internships, and bounties.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="w-full md:w-auto flex flex-col sm:flex-row gap-2 shrink-0">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={subscribed}
              className="px-4 py-3 rounded-md bg-black border border-white/20 text-sm text-white placeholder-zinc-500 focus:border-gentricks-yellow outline-none transition-colors w-full sm:w-64"
            />
            <button
              type="submit"
              disabled={subscribed}
              className={`px-5 py-3 rounded-md font-display font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shrink-0 ${
                subscribed
                  ? 'bg-emerald-500 text-black'
                  : 'bg-gentricks-yellow text-black hover:bg-gentricks-yellowHover shadow-yellow-glow'
              }`}
            >
              {subscribed ? (
                <>
                  <Check className="w-4 h-4" />
                  Alert Set
                </>
              ) : (
                <>
                  <Bell className="w-4 h-4" />
                  Get Alerted
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
