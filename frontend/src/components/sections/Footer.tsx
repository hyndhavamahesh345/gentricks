import React from 'react';
import { ArrowUpRight, Mail } from 'lucide-react';
import { socialLinks, contactEmails } from '../../config/socialLinks';
import { SocialIcon } from '../SocialIcons';

interface FooterProps {
  onOpenModal: (type: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenModal }) => {
  return (
    <footer className="relative py-16 px-6 sm:px-10 lg:px-16 bg-black border-t border-white/[0.08] text-white" id="footer">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-12">
          {/* Brand Col */}
          <div className="md:col-span-5 flex flex-col items-start gap-4">
            <a href="#hero" aria-label="Gentricks">
              <img src="/assets/logo.svg" alt="Gentricks" className="h-8 sm:h-10 w-auto object-contain" />
            </a>
            <p className="font-body text-xs sm:text-sm text-zinc-400 max-w-sm leading-relaxed">
              Building the ecosystem for the next generation.
            </p>

            {/* Direct Official Contact Emails */}
            <div className="flex flex-col gap-1.5 pt-1 text-xs text-zinc-400 font-mono">
              <a
                href={`mailto:${contactEmails.collab}`}
                className="hover:text-gentricks-yellow transition-colors inline-flex items-center gap-1.5"
              >
                <Mail className="w-3.5 h-3.5 text-zinc-500" />
                <span>Collab: <strong className="font-medium text-zinc-300">{contactEmails.collab}</strong></span>
              </a>
              <a
                href={`mailto:${contactEmails.support}`}
                className="hover:text-gentricks-yellow transition-colors inline-flex items-center gap-1.5"
              >
                <Mail className="w-3.5 h-3.5 text-zinc-500" />
                <span>Support: <strong className="font-medium text-zinc-300">{contactEmails.support}</strong></span>
              </a>
            </div>

            {/* Centralized Social Links */}
            <div className="flex items-center gap-2 pt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.id}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-md bg-zinc-950 border border-white/[0.08] flex items-center justify-center text-zinc-400 hover:text-white hover:border-white/[0.2] transition-colors"
                  aria-label={social.name}
                >
                  <SocialIcon name={social.iconName} className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3">
            <h4 className="font-mono text-xs font-medium uppercase tracking-widest text-zinc-400 mb-4">
              Navigation
            </h4>
            <ul className="space-y-2 font-body text-xs sm:text-sm text-zinc-400">
              <li><a href="#ecosystem" className="hover:text-white transition-colors">Ecosystem</a></li>
              <li><a href="#journey" className="hover:text-white transition-colors">Build Pathway</a></li>
              <li><a href="#people" className="hover:text-white transition-colors">Community</a></li>
              <li><a href="#opportunities" className="hover:text-white transition-colors">Opportunities</a></li>
            </ul>
          </div>

          {/* Direct Actions */}
          <div className="md:col-span-4">
            <h4 className="font-mono text-xs font-medium uppercase tracking-widest text-zinc-400 mb-4">
              Engagement
            </h4>
            <p className="font-body text-xs text-zinc-400 mb-4 leading-relaxed">
              Connect with our team for early builder tracks, campus chapters, and institutional partnerships.
            </p>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => onOpenModal('join')}
                className="px-4 py-2 rounded-md bg-gentricks-yellow text-black font-display font-medium text-xs tracking-wide hover:bg-gentricks-yellowHover flex items-center gap-1.5"
              >
                Join Waitlist <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => onOpenModal('partner')}
                className="px-4 py-2 rounded-md bg-zinc-950 border border-white/[0.1] text-zinc-300 font-display font-medium text-xs tracking-wide hover:border-white/[0.2] hover:text-white transition-colors"
              >
                Partner Inquiries
              </button>
            </div>
          </div>
        </div>

        {/* Legal & Copyright */}
        <div className="pt-8 border-t border-white/[0.05] flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-zinc-500">
          <div>© 2026 Gentricks. All rights reserved.</div>
          <div className="flex items-center gap-6">
            <button
              onClick={() => onOpenModal('privacy')}
              className="hover:text-zinc-300 transition-colors"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => onOpenModal('terms')}
              className="hover:text-zinc-300 transition-colors"
            >
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
