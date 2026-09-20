import { ArrowUpRight, CheckCircle2, FileText, Lock, Mail, Shield, UserCheck } from 'lucide-react';

export function PrivacyPolicy() {
  return (
    <article className="legal-page section-space" aria-labelledby="privacy-heading">
      <div className="site-container">
        <header className="legal-header">
          <p className="eyebrow"><span aria-hidden="true" /> Legal & Data Protection</p>
          <h1 id="privacy-heading">Privacy <em>Policy</em></h1>
          <p className="legal-meta">
            <span>Notice pursuant to Section 5 of the Digital Personal Data Protection Act, 2023 & DPDP Rules, 2025</span>
            <span>Effective Date: November 2025 · Last Updated: 2026</span>
          </p>
        </header>

        <div className="legal-summary-card">
          <div className="legal-summary-badge">
            <Shield size={20} aria-hidden="true" />
            <strong>DPDP 2023 / Rules 2025 Compliance Notice</strong>
          </div>
          <p>
            GENTRICKS is committed to processing your digital personal data lawfully, transparently, and with integrity.
            This notice details the specific personal data collected, processing purposes, your rights under Indian law as a
            Data Principal, and the grievance redressal mechanism available to you.
          </p>
          <div className="legal-quick-links">
            <a href="#privacy-requests" className="button button-primary">
              Manage Your Data & Rights <ArrowUpRight size={16} aria-hidden="true" />
            </a>
            <a href="mailto:support@gentricks.in" className="button button-ghost">
              <Mail size={16} aria-hidden="true" /> Contact Support Officer
            </a>
          </div>
        </div>

        <div className="legal-content">
          <section className="legal-section">
            <h2>1. Who We Are (Data Fiduciary)</h2>
            <p>
              <strong>GENTRICKS</strong> operates as a technology, innovation, and community ecosystem for builders, creators,
              and future leaders across Andhra Pradesh and India. Under the Digital Personal Data Protection Act, 2023,
              GENTRICKS acts as the <strong>Data Fiduciary</strong> regarding personal data collected via <code>gentricks.in</code>,
              affiliated forms, event registrations, and community channels.
            </p>
          </section>

          <section className="legal-section">
            <h2>2. Personal Data We Collect & Data Minimization</h2>
            <p>
              In accordance with data minimization principles, GENTRICKS collects only the minimum necessary information
              required to facilitate community membership, communications, events, and opportunities:
            </p>
            <div className="legal-table-wrapper">
              <table className="legal-table">
                <thead>
                  <tr>
                    <th>Category</th>
                    <th>Data Elements</th>
                    <th>Collection Point</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Identity & Contact</strong></td>
                    <td>Full Name, Email Address, City, State</td>
                    <td>Join GENTRICKS Form, Contact, Event RSVP</td>
                  </tr>
                  <tr>
                    <td><strong>Profile & Interests</strong></td>
                    <td>Role (Student, Builder, Creator, Founder, Professional), Stated Interests</td>
                    <td>Onboarding and pathway preference forms</td>
                  </tr>
                  <tr>
                    <td><strong>Program Submissions</strong></td>
                    <td>Project descriptions, team information, contact details</td>
                    <td>Hackathon registrations, project submissions</td>
                  </tr>
                  <tr>
                    <td><strong>Technical Metadata</strong></td>
                    <td>IP address, browser type, device type, timestamp (stored without tracking PII across unrelated web domains)</td>
                    <td>Server logs, security and performance firewalls</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="legal-callout">
              <strong>What we do NOT collect:</strong> We do NOT collect government identifiers (such as Aadhaar, PAN, Passport),
              biometric data, financial account credentials, or unnecessary sensitive data unless strictly mandated by a specific statutory requirement.
            </p>
          </section>

          <section className="legal-section">
            <h2>3. Specified Purposes for Processing</h2>
            <p>
              Personal data is collected and processed solely for specified, explicit, and legitimate purposes:
            </p>
            <ul className="legal-list">
              <li>Facilitating access to the GENTRICKS community, programs, hackathons, and local city hub meetups.</li>
              <li>Sending newsletters, updates, announcements, and opportunities relevant to your selected interests.</li>
              <li>Processing event RSVPs, workshop attendances, and issuing confirmations.</li>
              <li>Protecting the security, stability, and integrity of the platform against fraud and unauthorized misuse.</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>4. Legal Basis: Consent & Legitimate Uses</h2>
            <p>
              Processing is primarily founded on your clear, affirmative, and un-prechecked <strong>Consent</strong> under
              Section 6 of the DPDP Act, 2023. When you submit a form on GENTRICKS, you receive a prior notice and voluntarily
              provide specific, informed, and unconditional consent for the specified purposes.
            </p>
            <p>
              You have the right to <strong>withdraw your consent</strong> at any point in time with ease comparable to how consent
              was granted, without retroactive invalidation of prior lawful processing.
            </p>
          </section>

          <section className="legal-section">
            <h2>5. Third-Party Data Processors</h2>
            <p>
              GENTRICKS engages select, trusted service providers (Data Processors) under strict confidentiality and security
              agreements. We do not sell, rent, or trade your personal data to advertisers or commercial data brokers.
            </p>
            <div className="legal-table-wrapper">
              <table className="legal-table">
                <thead>
                  <tr>
                    <th>Service Provider</th>
                    <th>Role / Activity</th>
                    <th>Data Handled</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Supabase</strong></td>
                    <td>Database storage & encrypted API layer</td>
                    <td>Community member registrations, contact records</td>
                  </tr>
                  <tr>
                    <td><strong>Vercel</strong></td>
                    <td>Web application hosting & CDN delivery</td>
                    <td>HTTP access logs, network telemetry</td>
                  </tr>
                  <tr>
                    <td><strong>Transactional Email Provider</strong></td>
                    <td>Delivering community updates & confirmations</td>
                    <td>Name, email address</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="legal-section">
            <h2>6. Data Retention and Disposal</h2>
            <p>
              Personal data is retained only for as long as necessary to satisfy the specified purposes for which it was
              collected, or until you request its erasure or withdraw your consent. Upon withdrawal of consent or upon
              determination that the purpose is fulfilled, personal data is permanently deleted or irreversibly anonymized.
            </p>
          </section>

          <section className="legal-section">
            <h2>7. Your Statutory Rights as a Data Principal</h2>
            <p>Under the DPDP Act 2023, you are entitled to exercise the following statutory rights:</p>
            <div className="rights-grid">
              <div className="right-card">
                <CheckCircle2 size={20} aria-hidden="true" />
                <h3>Right to Access Information</h3>
                <p>Request a summary of your personal data processed by GENTRICKS and identities of processors shared with.</p>
              </div>
              <div className="right-card">
                <FileText size={20} aria-hidden="true" />
                <h3>Right to Correction & Updating</h3>
                <p>Request rectification of inaccurate, misleading, or out-of-date personal data in our systems.</p>
              </div>
              <div className="right-card">
                <Lock size={20} aria-hidden="true" />
                <h3>Right to Erasure (Deletion)</h3>
                <p>Request the complete deletion of your personal records, subject to legal compliance retentions.</p>
              </div>
              <div className="right-card">
                <UserCheck size={20} aria-hidden="true" />
                <h3>Right to Nominate</h3>
                <p>Nominate an individual to exercise your rights in the event of death or incapacity.</p>
              </div>
            </div>
            <p>
              To exercise any of these rights, visit our dedicated <a href="#privacy-requests" className="text-link">Data & Privacy Requests Portal</a> or email us directly at <a href="mailto:support@gentricks.in" className="text-link">support@gentricks.in</a>.
            </p>
          </section>

          <section className="legal-section" id="grievance">
            <h2>8. Grievance Redressal Mechanism</h2>
            <p>
              In compliance with Section 13 of the DPDP Act, 2023 and the DPDP Rules, 2025, GENTRICKS maintains a readily accessible
              Grievance Redressal mechanism for all data privacy and protection concerns:
            </p>
            <div className="officer-card">
              <h3>Data Protection Grievance Contact</h3>
              <p><strong>Entity:</strong> GENTRICKS Ecosystem</p>
              <p><strong>Designation:</strong> Data Protection Grievance Officer</p>
              <p><strong>Official Email:</strong> <a href="mailto:support@gentricks.in">support@gentricks.in</a></p>
              <p><strong>Response Timeline:</strong> Acknowledgement within 48 business hours; substantive resolution within 30 days as prescribed by law.</p>
              <p>
                If your grievance is not resolved satisfactorily by GENTRICKS within the statutory timeframe, you hold the right to
                approach the <strong>Data Protection Board of India (DPBI)</strong>.
              </p>
            </div>
          </section>
        </div>
      </div>
    </article>
  );
}
