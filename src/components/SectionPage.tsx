import { ArrowUpRight, Briefcase, Building2, Calendar, ChevronLeft, ChevronRight, Code2, Handshake, Layers3, Lightbulb, Megaphone, PenTool, Rocket, TrendingUp, Trophy, Users } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { ecosystemData, ecosystemPeople } from '../data/ecosystem';
import { EcosystemVisual } from './EcosystemVisual';

export type SectionPageName = 'ecosystem' | 'programs' | 'events' | 'community' | 'opportunities';

const eventFormats = ['Technology Events', 'AI Events', 'Hackathons', 'Startup Events', 'Workshops', 'Community Meetups', 'Creator Experiences', 'Summits'];
const opportunityTypes = ['Jobs', 'Internships', 'Projects', 'Hackathons', 'Competitions', 'Fellowships', 'Collaborations', 'Startup opportunities'];

const whoWeBringTogether = [
  {
    icon: Lightbulb,
    title: 'STUDENTS & INNOVATORS',
    description: 'Learn, participate in events, build projects, and discover opportunities.',
  },
  {
    icon: Code2,
    title: 'BUILDERS & DEVELOPERS',
    description: 'Build with technology, join challenges, collaborate, and showcase your work.',
  },
  {
    icon: Rocket,
    title: 'FOUNDERS & ENTREPRENEURS',
    description: 'Connect with talent, mentors, partners, and opportunities to grow.',
  },
  {
    icon: PenTool,
    title: 'CREATORS & EXPERTS',
    description: 'Share knowledge, create experiences, and collaborate with the next generation.',
  },
  {
    icon: TrendingUp,
    title: 'INVESTORS & MENTORS',
    description: 'Discover promising ideas, founders, and emerging talent.',
  },
  {
    icon: Briefcase,
    title: 'INDUSTRY & ORGANIZATIONS',
    description: 'Connect with talent, showcase solutions, and build strategic partnerships.',
  },
  {
    icon: Users,
    title: 'COMMUNITIES & INSTITUTIONS',
    description: 'Build communities, host programs, and create meaningful opportunities.',
  },
  {
    icon: Megaphone,
    title: 'BRANDS & SPONSORS',
    description: 'Connect with student communities, events, and emerging talent through meaningful sponsorships and collaborations.',
  },
];

const whatWeDoOfferings = [
  {
    icon: Calendar,
    title: 'Events & Experiences',
    description: 'Tech summits, workshops, hackathons, conferences and community events.',
  },
  {
    icon: Lightbulb,
    title: 'Learning & Innovation',
    description: 'Workshops, challenges, projects and hands-on technology experiences.',
  },
  {
    icon: Building2,
    title: 'Campus & Community',
    description: 'Campus chapters, student communities and institutional collaborations.',
  },
  {
    icon: Trophy,
    title: 'Opportunities',
    description: 'Internships, careers, competitions, mentorship and networking.',
  },
  {
    icon: Handshake,
    title: 'Sponsorships & Partnerships',
    description: 'Connect events and communities with brands, sponsors and industry partners.',
  },
  {
    icon: Rocket,
    title: 'Startup & Builder Ecosystem',
    description: 'Support founders, builders and emerging ideas through connections and opportunities.',
  },
];

function PageHero({ label, title, copy }: { label: string; title: string; copy: string }) {
  return <section className="page-hero"><div className="site-container"><p className="eyebrow hero-eyebrow"><span aria-hidden="true" /> {label}</p><h1>{title}</h1><p>{copy}</p></div></section>;
}

function SectionLead({ eyebrow, title, copy }: { eyebrow: string; title: string; copy?: string }) {
  return <div className="section-lead"><p className="eyebrow"><span aria-hidden="true" /> {eyebrow}</p><h2>{title}</h2>{copy && <p className="section-copy">{copy}</p>}</div>;
}

export function SectionPage({ page }: { page: SectionPageName }) {
  if (page === 'ecosystem') return <EcosystemPage />;
  if (page === 'programs') return <ProgramsPage />;
  if (page === 'events') return <EventsPage />;
  if (page === 'community') return <CommunityPage />;
  if (page === 'opportunities') return <OpportunitiesPage />;
  return <EcosystemPage />;
}

function EcosystemPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeName, activeDescription] = ecosystemPeople[activeIndex];

  return <><PageHero label="The GENTRICKS ecosystem" title="One Ecosystem. Many Paths." copy="There is no single way to participate. Find people, ideas, and directions that make sense for you." /><section className="ecosystem section-space"><div className="site-container ecosystem-layout"><div className="people-list">{ecosystemPeople.map(([name, description], index) => <button className={'person-row person-' + index + (index === activeIndex ? ' is-active' : '')} key={name} type="button" onMouseEnter={() => setActiveIndex(index)} onFocus={() => setActiveIndex(index)} onClick={() => setActiveIndex(index)}><span className="person-number">0{index + 1}</span><span className="person-copy"><strong>{name}</strong><small>{description}</small></span><ArrowUpRight size={18} aria-hidden="true" /></button>)}</div><div className="ecosystem-feature"><EcosystemVisual kind={activeName} /><p className="ecosystem-feature-copy">{activeDescription}</p></div></div></section></>;
}

function ProgramsPage() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollState = () => {
    const el = sliderRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  };

  useEffect(() => {
    const el = sliderRef.current;
    if (!el) return;
    updateScrollState();
    el.addEventListener('scroll', updateScrollState, { passive: true });
    window.addEventListener('resize', updateScrollState);
    return () => {
      el.removeEventListener('scroll', updateScrollState);
      window.removeEventListener('resize', updateScrollState);
    };
  }, []);

  const handleScroll = (direction: 'left' | 'right') => {
    const el = sliderRef.current;
    if (!el) return;
    const card = el.querySelector('.discovery-card') as HTMLElement | null;
    const scrollAmount = card ? card.offsetWidth + 20 : 310;
    el.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
    <div className="programs-view">
      {/* 1. Who We Bring Together (Competitor-Style High Impact Carousel) */}
      <section className="discovery-section" aria-labelledby="discovery-title">
        <div className="site-container">
          <div className="discovery-header">
            <h1 id="discovery-title" className="discovery-title">
              <span className="discovery-title-main">WHO WE</span>
              <span className="discovery-title-accent theme-yellow">BRING TOGETHER.</span>
            </h1>
          </div>

          <div className="discovery-carousel-wrapper">
            <button
              type="button"
              className="discovery-nav-btn discovery-nav-left theme-yellow"
              onClick={() => handleScroll('left')}
              disabled={!canScrollLeft}
              aria-label="Scroll left"
            >
              <ChevronLeft size={44} strokeWidth={2.4} aria-hidden="true" />
            </button>

            <div className="discovery-track theme-yellow" ref={sliderRef}>
              {whoWeBringTogether.map((card, idx) => {
                const Icon = card.icon;
                return (
                  <article key={idx} className="discovery-card theme-yellow">
                    <div className="discovery-card-icon">
                      <Icon size={38} strokeWidth={1.8} aria-hidden="true" />
                    </div>
                    <h2 className="discovery-card-title">{card.title}</h2>
                    <p className="discovery-card-desc">{card.description}</p>
                  </article>
                );
              })}
            </div>

            <button
              type="button"
              className="discovery-nav-btn discovery-nav-right theme-yellow"
              onClick={() => handleScroll('right')}
              disabled={!canScrollRight}
              aria-label="Scroll right"
            >
              <ChevronRight size={44} strokeWidth={2.5} aria-hidden="true" />
            </button>
          </div>
        </div>
      </section>

      {/* 2. What We Do (What GENTRICKS Actually Provides) */}
      <section className="what-we-do-section section-space" aria-labelledby="what-we-do-title">
        <div className="site-container">
          <div className="section-lead">
            <p className="eyebrow"><span aria-hidden="true" /> What GENTRICKS Provides</p>
            <h2 id="what-we-do-title">What We <em>Do.</em></h2>
            <p className="section-copy">
              Focused experiences, infrastructure, and access at the intersection of technology, community, and momentum.
            </p>
          </div>

          <div className="what-we-do-grid">
            {whatWeDoOfferings.map((item, idx) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className="what-we-do-card">
                  <div className="what-we-do-card-top">
                    <Icon size={28} strokeWidth={1.8} className="what-we-do-icon" aria-hidden="true" />
                    <span className="what-we-do-number">0{idx + 1}</span>
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              );
            })}
          </div>

          <div className="what-we-do-actions">
            <a href="#join" className="button button-primary">
              Join GENTRICKS <ArrowUpRight size={17} aria-hidden="true" />
            </a>
            <a href="mailto:collab@gentricks.in" className="button button-ghost">
              Partner or Sponsor <ArrowUpRight size={17} aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

function EventsPage() {
  const hasEvents = ecosystemData.events.length > 0;
  return <><PageHero label="Experiences / Events" title="Ideas are better when they happen together." copy="Future GENTRICKS experiences will bring technology, learning, builders, and culture into the same room." /><section className="events section-space"><div className="site-container events-layout"><div className="format-list" aria-label="Future experience categories">{eventFormats.map((format) => <span key={format}>{format}</span>)}</div><div className="empty-state event-state"><div className="empty-state-top"><CalendarIcon /><span>UPCOMING EXPERIENCES</span></div><div className="signal-lines" aria-hidden="true"><i /><i /><i /><i /></div><h2>{hasEvents ? 'New experiences are being prepared.' : 'Something is being built.'}</h2><p>Join GENTRICKS to be close to what comes next.</p><a href="#join" className="text-link">Join GENTRICKS <ArrowUpRight size={17} aria-hidden="true" /></a></div></div></section></>;
}

function CommunityPage() {
  return <><PageHero label="Community" title="Find Your Community." copy="Connect with builders, creators, innovators, entrepreneurs, and people shaping what comes next." /><section className="community section-space"><div className="site-container community-layout"><div className="community-copy"><SectionLead eyebrow="Starting with people" title="Build with people who care." copy="GENTRICKS begins in Andhra Pradesh, close to the people and ideas we can serve well." /><a href="#join" className="button button-dark">Build With GENTRICKS <ArrowUpRight size={17} aria-hidden="true" /></a></div><div className="growth-map" aria-label="GENTRICKS is beginning in Andhra Pradesh"><p>Our starting point</p><div className="starting-point"><div className="starting-point-mark" aria-hidden="true">AP</div><div className="starting-point-copy"><span>Beginning here</span><strong>Andhra Pradesh</strong><p>Starting close to the people and ideas we can serve well.</p></div></div><small>Built through real people, real participation, and shared momentum.</small></div></div></section></>;
}

function OpportunitiesPage() {
  const hasOpportunities = ecosystemData.opportunities.length > 0;
  return <><PageHero label="Opportunities" title="The right opportunity can change your direction." copy="This space is designed to connect people with ways to contribute, learn, collaborate, and move forward." /><section className="opportunities section-space"><div className="site-container opportunities-layout"><div className="opportunities-board"><div className="board-label"><Layers3 size={17} aria-hidden="true" /> Opportunity board</div><div className="opportunity-types">{opportunityTypes.map((type, index) => <span key={type}>0{index + 1} / {type}</span>)}</div><div className="board-empty"><p>{hasOpportunities ? 'New opportunities are being organized.' : 'Opportunity listings will appear here when published.'}</p><a href="#join" className="text-link">Join GENTRICKS <ArrowUpRight size={17} aria-hidden="true" /></a></div></div></div></section></>;
}

function CalendarIcon() { return <span className="calendar-glyph" aria-hidden="true"><i /><i /></span>; }
