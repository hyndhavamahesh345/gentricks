import { ArrowUpRight, CheckCircle2, FileText, Info, Lock, Mail, RefreshCw, Send, Shield, Trash2, UserX } from 'lucide-react';
import { useEffect, useState } from 'react';

type RequestType = 'access' | 'correction' | 'withdrawal' | 'erasure' | 'grievance';

interface RequestOption {
  id: RequestType;
  title: string;
  icon: typeof Shield;
  shortDesc: string;
  legalBasis: string;
}

const requestOptions: RequestOption[] = [
  {
    id: 'access',
    title: 'Request My Data',
    icon: FileText,
    shortDesc: 'Receive a summary and export of all personal data held about you by GENTRICKS.',
    legalBasis: 'Section 11 (Right to Access Information) of the DPDP Act, 2023',
  },
  {
    id: 'correction',
    title: 'Correct My Information',
    icon: RefreshCw,
    shortDesc: 'Update or rectify outdated, incomplete, or inaccurate personal information.',
    legalBasis: 'Section 12 (Right to Correction & Erasure) of the DPDP Act, 2023',
  },
  {
    id: 'withdrawal',
    title: 'Withdraw Consent',
    icon: UserX,
    shortDesc: 'Revoke your consent for future marketing, updates, or community communications.',
    legalBasis: 'Section 6(4) (Right to Withdraw Consent) of the DPDP Act, 2023',
  },
  {
    id: 'erasure',
    title: 'Delete My Data',
    icon: Trash2,
    shortDesc: 'Permanently erase your personal data from all active GENTRICKS databases.',
    legalBasis: 'Section 12(2) (Right to Erasure) of the DPDP Act, 2023',
  },
  {
    id: 'grievance',
    title: 'Raise Privacy Grievance',
    icon: Shield,
    shortDesc: 'File a formal grievance regarding personal data processing or security.',
    legalBasis: 'Section 13 (Right of Grievance Redressal) of the DPDP Act, 2023',
  },
];

export function DataPrivacyPortal() {
  const getInitialType = (): RequestType => {
    if (window.location.hash.includes('grievance')) return 'grievance';
    return 'access';
  };

  const [activeType, setActiveType] = useState<RequestType>(getInitialType);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [details, setDetails] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const handleHash = () => {
      if (window.location.hash.includes('grievance')) {
        setActiveType('grievance');
      } else if (window.location.hash.includes('privacy-requests')) {
        setActiveType('access');
      }
    };
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const currentOption = requestOptions.find((o) => o.id === activeType) || requestOptions[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Pre-populate an email link for immediate dispatch to privacy@gentricks.in
    const subject = encodeURIComponent(`[DPDP Request: ${currentOption.title}] - ${fullName}`);
    const body = encodeURIComponent(
      `Full Name: ${fullName}\nRegistered Email: ${email}\nRequest Category: ${currentOption.title}\nStatutory Reference: ${currentOption.legalBasis}\n\nSpecific Details / Notes:\n${details || 'No additional comments provided.'}\n\nSubmitted via GENTRICKS Data & Privacy Management Portal on ${new Date().toISOString()}`
    );
    window.location.href = `mailto:privacy@gentricks.in?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <article className="legal-page section-space" aria-labelledby="portal-heading">
      <div className="site-container">
        <header className="legal-header">
          <p className="eyebrow"><span aria-hidden="true" /> Data Principal Rights Portal</p>
          <h1 id="portal-heading">Manage Your <em>Data & Privacy</em></h1>
          <p className="legal-meta">
            <span>Direct statutory rights execution under the Digital Personal Data Protection Act, 2023</span>
            <span>Official Channel: privacy@gentricks.in</span>
          </p>
        </header>

        <div className="portal-grid">
          {/* Navigation selector */}
          <aside className="portal-menu" aria-label="Privacy Request Types">
            <p className="portal-menu-heading">Select Your Request</p>
            {requestOptions.map((opt) => {
              const Icon = opt.icon;
              const isActive = activeType === opt.id;
              return (
                <button
                  key={opt.id}
                  type="button"
                  className={`portal-nav-btn ${isActive ? 'is-active' : ''}`}
                  onClick={() => {
                    setActiveType(opt.id);
                    setSubmitted(false);
                  }}
                >
                  <Icon size={18} aria-hidden="true" />
                  <span>
                    <strong>{opt.title}</strong>
                    <small>{opt.id === 'grievance' ? 'Formal complaint' : 'Statutory right'}</small>
                  </span>
                </button>
              );
            })}
          </aside>

          {/* Action form panel */}
          <section className="portal-panel">
            <div className="portal-panel-header">
              <span className="portal-badge">{currentOption.legalBasis}</span>
              <h2>{currentOption.title}</h2>
              <p>{currentOption.shortDesc}</p>
            </div>

            {submitted ? (
              <div className="portal-success-card" role="status">
                <CheckCircle2 size={36} aria-hidden="true" className="success-icon" />
                <h3>Request Prepared</h3>
                <p>
                  Your email client has been opened with your preformatted <strong>{currentOption.title}</strong> ticket
                  addressed to <code>privacy@gentricks.in</code>.
                </p>
                <p className="success-sub">
                  If your email client didn't open automatically, you can email directly to{' '}
                  <a href="mailto:privacy@gentricks.in" className="text-link">privacy@gentricks.in</a> with your registered email: <strong>{email}</strong>.
                </p>
                <p className="timeline-notice">
                  <Info size={16} aria-hidden="true" />
                  <span>Standard Response: Acknowledgement within 48h; complete resolution within statutory timelines.</span>
                </p>
                <button
                  type="button"
                  className="button button-ghost"
                  onClick={() => {
                    setSubmitted(false);
                    setDetails('');
                  }}
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <form className="portal-form" onSubmit={handleSubmit}>
                <div className="portal-form-grid">
                  <label>
                    <span>Full Name *</span>
                    <input
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                    />
                  </label>
                  <label>
                    <span>Registered Email Address *</span>
                    <input
                      required
                      type="email"
                      placeholder="you@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </label>
                </div>

                <label className="portal-textarea-label">
                  <span>
                    {activeType === 'correction'
                      ? 'What information needs to be updated? *'
                      : activeType === 'grievance'
                      ? 'Details of your grievance or concern *'
                      : 'Additional details or specific instructions (optional)'}
                  </span>
                  <textarea
                    rows={4}
                    required={activeType === 'correction' || activeType === 'grievance'}
                    placeholder={
                      activeType === 'correction'
                        ? 'Please describe the field (e.g. City or Email) and the updated correct value...'
                        : activeType === 'erasure'
                        ? 'Confirm if you want complete erasure of all records from GENTRICKS...'
                        : activeType === 'withdrawal'
                        ? 'Please note any specific communications or full withdrawal from GENTRICKS...'
                        : activeType === 'grievance'
                        ? 'Please detail the nature of your concern, dates, and relevant context...'
                        : 'Any specific requests or preferred format for data summary...'
                    }
                    value={details}
                    onChange={(e) => setDetails(e.target.value)}
                  />
                </label>

                <div className="portal-actions">
                  <button type="submit" className="button button-primary">
                    Proceed with {currentOption.title} <Send size={16} aria-hidden="true" />
                  </button>
                  <a href="#privacy-policy" className="text-link">
                    Read Privacy Policy <ArrowUpRight size={14} aria-hidden="true" />
                  </a>
                </div>

                <p className="portal-footnote">
                  In compliance with DPDP Rules 2025, verification of identity may be conducted via registered email
                  before data export or deletion is executed to protect your records against unauthorized access.
                </p>
              </form>
            )}
          </section>
        </div>
      </div>
    </article>
  );
}
