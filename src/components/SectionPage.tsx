import { Building2, Calendar, Clock, Code2, Layers3, Lightbulb, Mail, MapPin, Plus, Rocket, Trophy, Users } from 'lucide-react';
import { useEffect, useState } from 'react';
import { type EventRecord, ecosystemData, ecosystemPeople } from '../data/ecosystem';
import { getEvents } from '../services/firebase';
import { EcosystemVisual } from './EcosystemVisual';

export type SectionPageName = 'ecosystem' | 'events' | 'opportunities';

const opportunityTypes = ['Internships', 'Collaborations', 'Hackathons'];

const whatWeDoOfferings = [
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
];

function PageHero({ label, title, copy }: { label: string; title: string; copy: string }) {
  return <section className="page-hero"><div className="site-container"><p className="eyebrow hero-eyebrow"><span aria-hidden="true" /> {label}</p><h1>{title}</h1><p>{copy}</p></div></section>;
}

function SectionLead({ eyebrow, title, copy }: { eyebrow: string; title: string; copy?: string }) {
  return <div className="section-lead"><p className="eyebrow"><span aria-hidden="true" /> {eyebrow}</p><h2>{title}</h2>{copy && <p className="section-copy">{copy}</p>}</div>;
}

export function SectionPage({ page }: { page: SectionPageName }) {
  if (page === 'ecosystem') return <EcosystemPage />;
  if (page === 'events') return <EventsPage />;
  if (page === 'opportunities') return <OpportunitiesPage />;
  return <EcosystemPage />;
}

function EcosystemPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeName, activeDescription] = ecosystemPeople[activeIndex];

  return <><PageHero label="Developer Pathways" title="Choose Your Track" copy="Whether you write code, design interfaces, or build early startups, find your place in the ecosystem." /><section className="ecosystem section-space"><div className="site-container ecosystem-layout"><div className="people-list">{ecosystemPeople.map(([name, description], index) => <button className={'person-row person-' + index + (index === activeIndex ? ' is-active' : '')} key={name} type="button" onMouseEnter={() => setActiveIndex(index)} onFocus={() => setActiveIndex(index)} onClick={() => setActiveIndex(index)}><span className="person-number">0{index + 1}</span><span className="person-copy"><strong>{name}</strong><small>{description}</small></span></button>)}</div><div className="ecosystem-feature"><EcosystemVisual kind={activeName} /><p className="ecosystem-feature-copy">{activeDescription}</p></div></div></section></>;
}

function EventsPage() {
  const [eventsList, setEventsList] = useState<EventRecord[]>(ecosystemData.events);
  const [filter, setFilter] = useState<'all' | 'hackathon' | 'workshop' | 'meetup'>('all');

  useEffect(() => {
    let isMounted = true;
    getEvents().then((remoteEvents) => {
      if (isMounted && remoteEvents && remoteEvents.length > 0) {
        setEventsList(remoteEvents as EventRecord[]);
      }
    });
    return () => {
      isMounted = false;
    };
  }, []);

  const filteredEvents = eventsList.filter((ev) => {
    if (filter === 'all') return true;
    return ev.category === filter;
  });

  return (
    <div className="programs-view">
      <PageHero
        label="Hackathons & Sprints"
        title="Build, Ship, and Compete"
        copy="Flagship hackathons, live code sprints, and builder meetups across Andhra Pradesh, Telangana, and India. Hosting an event? Send details to collab@gentricks.in."
      />

      {/* 1. Live Events Section */}
      <section className="events-live-section section-space" style={{ paddingTop: '50px' }}>
        <div className="site-container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '20px', marginBottom: '32px' }}>
            <div>
              <p className="eyebrow"><span aria-hidden="true" /> Live & Upcoming</p>
              <h2 style={{ fontSize: 'clamp(1.75rem, 3.2vw, 2.6rem)', margin: '6px 0 0', letterSpacing: '-0.03em' }}>
                Explore Events
              </h2>
            </div>

            {/* Actions: Filter Pills & Add Event Direct Email */}
            <div style={{ display: 'flex', gap: '10px', alignItems: 'center', flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                {(['all', 'hackathon', 'workshop', 'meetup'] as const).map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setFilter(cat)}
                    style={{
                      padding: '8px 16px',
                      fontFamily: 'var(--mono)',
                      fontSize: '0.72rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      background: filter === cat ? 'var(--yellow)' : 'rgba(255, 255, 255, 0.04)',
                      color: filter === cat ? '#000' : 'var(--paper)',
                      border: '1px solid ' + (filter === cat ? 'var(--yellow)' : 'var(--line)'),
                      borderRadius: '4px',
                      cursor: 'pointer',
                      fontWeight: 700,
                      transition: 'all 160ms ease',
                    }}
                  >
                    {cat === 'all' ? 'All Events' : cat + 's'}
                  </button>
                ))}
              </div>

              <a
                href="mailto:collab@gentricks.in?subject=Add%20an%20Event%20to%20GENTRICKS&body=Hi%20GENTRICKS%20Team%2C%0A%0AWe%20would%20like%20to%20add%20our%20event%20to%20the%20GENTRICKS%20Events%20board.%0A%0AEvent%20Title%3A%20%0AEvent%20Dates%20%26%20Time%3A%20%0AVenue%20%2F%20Format%20(In-person%20%2F%20Online%20%2F%20Hybrid)%3A%20%0ARegistration%20%2F%20Event%20Link%3A%20%0AOrganization%20%2F%20Community%3A%20%0ABrief%20Description%3A%20%0A%0AThank%20you!"
                className="button button-primary"
                style={{ padding: '8px 16px', fontSize: '0.72rem', gap: '6px' }}
                title="Email collab@gentricks.in to add your event"
              >
                <Plus size={14} aria-hidden="true" /> Add Your Event
              </a>
            </div>
          </div>

          {/* Events Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '24px', marginBottom: '56px' }}>
            {filteredEvents.map((event) => (
              <article
                key={event.id}
                style={{
                  background: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid var(--line)',
                  borderRadius: '10px',
                  padding: '28px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'border-color 200ms ease, transform 200ms ease',
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '10px', marginBottom: '16px' }}>
                    <span
                      style={{
                        fontFamily: 'var(--mono)',
                        fontSize: '0.68rem',
                        padding: '4px 9px',
                        background: 'var(--yellow)',
                        color: '#000',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                        borderRadius: '3px',
                      }}
                    >
                      {event.category || 'Event'} · {event.format}
                    </span>
                    {event.dates && (
                      <span style={{ fontFamily: 'var(--mono)', fontSize: '0.8rem', color: 'var(--yellow)', fontWeight: 600 }}>
                        {event.dates}
                      </span>
                    )}
                  </div>

                  <h3 style={{ fontSize: '1.4rem', fontWeight: 700, margin: '0 0 10px', color: 'var(--paper)' }}>
                    {event.title}
                  </h3>

                  {event.description && (
                    <p style={{ color: 'var(--muted)', fontSize: '0.92rem', lineHeight: 1.6, margin: '0 0 18px' }}>
                      {event.description}
                    </p>
                  )}

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '9px', marginBottom: '22px', fontSize: '0.85rem', color: '#b0b0a8' }}>
                    {event.venue && (
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <MapPin size={15} style={{ color: 'var(--yellow)', flexShrink: 0 }} aria-hidden="true" />
                        <span>{event.venue}</span>
                      </div>
                    )}
                    {event.dates && (
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <Calendar size={15} style={{ color: 'var(--yellow)', flexShrink: 0 }} aria-hidden="true" />
                        <span>Dates: {event.dates}</span>
                      </div>
                    )}
                    {event.round1Deadline && (
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <Clock size={15} style={{ color: 'var(--yellow)', flexShrink: 0 }} aria-hidden="true" />
                        <span>Round 1: {event.round1Deadline} {event.shortlistDate ? `· Shortlist: ${event.shortlistDate}` : ''}</span>
                      </div>
                    )}
                  </div>
                </div>

                <div style={{ paddingTop: '18px', borderTop: '1px solid var(--line)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px' }}>
                  <a
                    href={event.link || '#join'}
                    target={event.link ? '_blank' : undefined}
                    rel={event.link ? 'noreferrer' : undefined}
                    className="button button-primary"
                    style={{ flex: 1, justifyContent: 'center' }}
                  >
                    Register Now
                  </a>
                  <a
                    href="mailto:collab@gentricks.in?subject=Event%20Inquiry%20-%20"
                    className="button button-ghost"
                    style={{ padding: '0 14px' }}
                    title="Inquire or Sponsor"
                  >
                    Inquire
                  </a>
                </div>
              </article>
            ))}

            {/* Host with GENTRICKS Callout */}
            <article
              style={{
                background: 'linear-gradient(145deg, rgba(255, 222, 0, 0.08), rgba(0, 0, 0, 0.4))',
                border: '1px dashed rgba(255, 222, 0, 0.4)',
                borderRadius: '10px',
                padding: '28px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <span
                  style={{
                    fontFamily: 'var(--mono)',
                    fontSize: '0.68rem',
                    padding: '4px 9px',
                    background: 'rgba(255, 255, 255, 0.08)',
                    color: 'var(--yellow)',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    borderRadius: '3px',
                    display: 'inline-block',
                    marginBottom: '16px',
                  }}
                >
                  Add Your Event · Co-Host
                </span>
                <h3 style={{ fontSize: '1.35rem', fontWeight: 700, margin: '0 0 10px', color: 'var(--paper)' }}>
                  Want to Add an Event Here?
                </h3>
                <p style={{ color: 'var(--muted)', fontSize: '0.92rem', lineHeight: 1.6, margin: '0 0 18px' }}>
                  Are you hosting a hackathon, workshop, or tech meetup? Send your event details directly to our team at <strong>collab@gentricks.in</strong> to feature your event on GENTRICKS.
                </p>
              </div>

              <div style={{ paddingTop: '18px', borderTop: '1px solid var(--line)' }}>
                <a
                  href="mailto:collab@gentricks.in?subject=Add%20an%20Event%20to%20GENTRICKS&body=Hi%20GENTRICKS%20Team%2C%0A%0AWe%20would%20like%20to%20add%20our%20event%20to%20the%20GENTRICKS%20Events%20board.%0A%0AEvent%20Title%3A%20%0AEvent%20Dates%20%26%20Time%3A%20%0AVenue%20%2F%20Format%20(In-person%20%2F%20Online%20%2F%20Hybrid)%3A%20%0ARegistration%20%2F%20Event%20Link%3A%20%0AOrganization%20%2F%20Community%3A%20%0ABrief%20Description%3A%20%0A%0AThank%20you!"
                  className="button button-secondary"
                  style={{ width: '100%', justifyContent: 'center', gap: '8px' }}
                >
                  <Mail size={15} aria-hidden="true" /> Email collab@gentricks.in
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* 2. What We Do (What GENTRICKS Actually Provides) */}
      <section className="what-we-do-section section-space" aria-labelledby="what-we-do-title">
        <div className="site-container">
          <div className="section-lead">
            <p className="eyebrow"><span aria-hidden="true" /> What GENTRICKS Provides</p>
            <h2 id="what-we-do-title">What We Do</h2>
            <p className="section-copy">
              Hands-on technical hackathons, campus developer chapters, and direct paths to startup engineering roles.
            </p>
          </div>

          <div className="what-we-do-grid">
            {whatWeDoOfferings.map((item, idx) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className="what-we-do-card">
                  <div className="what-we-do-card-top">
                    <Icon size={22} strokeWidth={1.8} className="what-we-do-icon" aria-hidden="true" />
                    <span className="what-we-do-number">0{idx + 1}</span>
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              );
            })}
          </div>

          <div className="what-we-do-actions">
            <a href="https://chat.whatsapp.com/F6F4Z2NukhG52S7xP9on9J" target="_blank" rel="noreferrer" className="button button-primary">
              Join WhatsApp Community
            </a>
            <a href="mailto:collab@gentricks.in" className="button button-ghost">
              Partner or Sponsor
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

function OpportunitiesPage() {
  const hasOpportunities = ecosystemData.opportunities.length > 0;
  return (
    <>
      <PageHero
        label="Engineering Careers & Bounties"
        title="Verified Roles & Hackathons"
        copy="Access software engineering internships, technical hackathons, and developer bounties backed by partner companies."
      />
      <section className="opportunities section-space">
        <div className="site-container opportunities-layout">
          <div className="opportunities-board">
            <div className="board-label"><Layers3 size={17} aria-hidden="true" /> Opportunity board</div>
            <div className="opportunity-types">
              {opportunityTypes.map((type, index) => {
                if (type === 'Hackathons') {
                  return (
                    <a
                      key={type}
                      href="https://fts.aircwou.in/hackathon"
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        minHeight: '58px',
                        padding: '13px',
                        borderRight: '1px solid var(--line-dark)',
                        borderBottom: '1px solid var(--line-dark)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        color: 'inherit',
                        textDecoration: 'none',
                        background: 'rgba(242, 214, 10, 0.08)',
                      }}
                      title="Register for AGENTIC X 2.0 Hackathon"
                    >
                      0{index + 1} / {type}
                    </a>
                  );
                }
                return <span key={type}>0{index + 1} / {type}</span>;
              })}
            </div>

            {hasOpportunities && (
              <div className="opportunity-listings" style={{ marginTop: '28px', borderTop: '1px solid var(--line-dark)', paddingTop: '22px' }}>
                {ecosystemData.opportunities.map((opp) => (
                  <article key={opp.id} className="opportunity-card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px', padding: '18px 20px', background: 'rgba(0, 0, 0, 0.04)', border: '1px solid var(--line-dark)', marginBottom: '14px' }}>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
                        <span style={{ fontFamily: 'var(--mono)', fontSize: '0.68rem', padding: '3px 8px', background: 'var(--ink)', color: 'var(--yellow)', textTransform: 'uppercase', fontWeight: 600, letterSpacing: '0.05em' }}>
                          {opp.type}
                        </span>
                        <span style={{ fontSize: '0.82rem', color: '#555', fontFamily: 'var(--mono)' }}>
                          {opp.dates ? `${opp.dates} · ${opp.organization}` : opp.organization}
                        </span>
                      </div>
                      <h3 style={{ margin: '0 0 4px', fontSize: '1.25rem', fontWeight: 700, color: 'var(--ink)' }}>{opp.title}</h3>
                      {opp.deadline && <p style={{ margin: 0, fontSize: '0.85rem', color: '#555' }}>{opp.deadline}</p>}
                    </div>
                    <a
                      href={opp.link || 'https://fts.aircwou.in/hackathon'}
                      target="_blank"
                      rel="noreferrer"
                      className="button button-dark"
                      style={{ minHeight: '38px', padding: '0 18px', fontSize: '0.85rem' }}
                    >
                      Apply / Register
                    </a>
                  </article>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
