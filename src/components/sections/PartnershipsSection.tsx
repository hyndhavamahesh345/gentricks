import React from 'react';
import { Building2, GraduationCap, Compass, Share2 } from 'lucide-react';

interface PartnershipsSectionProps {
  onOpenModal: (type: string) => void;
}

const partnerTracks = [
  {
    title: 'Companies & Enterprises',
    icon: Building2,
    desc: 'Access exceptional young technical talent, sponsor hackathons, host problem-discovery bounties, and support emerging builders.',
  },
  {
    title: 'Universities & Colleges',
    icon: GraduationCap,
    desc: 'Bring the Gentricks chapter network to your campus. Empower students with experiential startup building and peer-led technical bootcamps.',
  },
  {
    title: 'Incubators & Venture Funds',
    icon: Compass,
    desc: 'Gain proprietary access to early-stage student founders, prototype validation pipelines, and high-velocity builder talent.',
  },
  {
    title: 'Student Communities & Hubs',
    icon: Share2,
    desc: 'Co-host regional hackathons, share cross-community knowledge, and connect your members with global opportunities.',
  },
];

export const PartnershipsSection: React.FC<PartnershipsSectionProps> = ({ onOpenModal }) => {
  return (
    <section className="relative py-28 px-6 bg-gentricks-black border-t border-white/5" id="partners">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-gentricks-yellow bg-gentricks-yellow/10 border border-gentricks-yellow/20 px-3.5 py-1.5 rounded-full mb-4">
            Institutional Collaboration
          </div>
          <h2 className="font-display font-black text-4xl sm:text-6xl uppercase tracking-tight text-white mb-4">
            BUILD WITH <span className="text-gentricks-yellow">GENTRICKS.</span>
          </h2>
          <p className="font-body text-base sm:text-lg text-zinc-400">
            Partner with the next generation of builders, problem-solvers, and future founders.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {partnerTracks.map((track) => {
            const Icon = track.icon;
            return (
              <div
                key={track.title}
                className="p-8 rounded-2xl bg-gentricks-card border border-white/5 hover:border-gentricks-yellow/30 hover:bg-gentricks-cardHover transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-gentricks-yellow/10 border border-gentricks-yellow/20 flex items-center justify-center text-gentricks-yellow mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-display font-black text-2xl uppercase tracking-tight text-white mb-3 group-hover:text-gentricks-yellow transition-colors">
                  {track.title}
                </h3>
                <p className="font-body text-base text-zinc-400 leading-relaxed">
                  {track.desc}
                </p>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <button
            onClick={() => onOpenModal('partner')}
            className="px-8 py-4 rounded-md bg-gentricks-yellow text-black font-display font-bold text-xs uppercase tracking-wider shadow-yellow-glow hover:bg-gentricks-yellowHover transition-all"
          >
            PARTNER WITH US
          </button>
        </div>
      </div>
    </section>
  );
};
