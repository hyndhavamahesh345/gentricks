import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { socialLinks } from '../config/socialLinks';
import { SocialIcon } from './SocialIcons';

interface NavigationProps {
  onOpenModal: (modalType: string) => void;
  visible?: boolean;
}

export const Navigation: React.FC<NavigationProps> = ({ onOpenModal, visible = true }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Ecosystem', href: '#ecosystem' },
    { name: 'Build', href: '#journey' },
    { name: 'Community', href: '#people' },
    { name: 'Opportunities', href: '#opportunities' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          visible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
        } ${
          isScrolled
            ? 'h-[64px] sm:h-[70px] bg-black/90 backdrop-blur-xl border-b border-white/[0.08]'
            : 'h-[68px] sm:h-[76px] bg-transparent border-b border-white/[0.05]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 h-full flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#hero" className="flex items-center gap-3 shrink-0 py-1" aria-label="Gentricks Homepage">
            <img
              src="/assets/logo.svg"
              alt="Gentricks Logo"
              width="160"
              height="40"
              loading="eager"
              decoding="async"
              className="h-8 sm:h-9 md:h-10 w-auto object-contain transition-opacity hover:opacity-85"
            />
          </a>

          {/* Desktop Classic Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs uppercase tracking-widest font-mono font-medium text-zinc-400 hover:text-white transition-colors py-1"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTA & Mobile Hamburger */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => onOpenModal('join')}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-md bg-gentricks-yellow text-black font-display font-semibold text-xs tracking-wide hover:bg-gentricks-yellowHover transition-colors"
            >
              Join Gentricks
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-3 text-zinc-300 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-gentricks-yellow/50 rounded-md"
              aria-label="Toggle navigation"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="w-6 h-6 text-gentricks-yellow" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile Drawer */}
      <div
        className={`fixed inset-0 z-40 bg-black/98 backdrop-blur-2xl transition-all duration-300 ease-out md:hidden flex flex-col justify-between p-8 pt-24 ${
          mobileOpen ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none -translate-y-4'
        }`}
      >
        <div className="flex flex-col gap-4 max-w-sm mx-auto w-full">
          {navLinks.map((link, idx) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-between py-3.5 border-b border-white/[0.08] font-display text-xl font-medium text-white hover:text-gentricks-yellow transition-colors"
            >
              <span>{link.name}</span>
              <span className="font-mono text-xs text-zinc-500">0{idx + 1}</span>
            </a>
          ))}

          <button
            onClick={() => {
              setMobileOpen(false);
              onOpenModal('join');
            }}
            className="w-full mt-6 py-3.5 rounded-md bg-gentricks-yellow text-black font-display font-semibold text-xs uppercase tracking-wider text-center"
          >
            Join Gentricks
          </button>
        </div>

        {/* Centralized Social Links in Mobile Menu */}
        <div className="max-w-sm mx-auto w-full pt-6 border-t border-white/[0.08] flex items-center justify-center gap-6 text-zinc-400">
          {socialLinks.map((social) => (
            <a
              key={social.id}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:text-white transition-colors"
              aria-label={social.name}
            >
              <SocialIcon name={social.iconName} className="w-4 h-4" />
            </a>
          ))}
        </div>
      </div>
    </>
  );
};
