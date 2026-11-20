import { CheckCircle2, ShieldAlert } from 'lucide-react';

export function TermsAndConditions() {
  return (
    <article className="legal-page section-space" aria-labelledby="terms-heading">
      <div className="site-container">
        <header className="legal-header">
          <p className="eyebrow"><span aria-hidden="true" /> Terms of Participation</p>
          <h1 id="terms-heading">Terms & <em>Conditions</em></h1>
          <p className="legal-meta">
            <span>Platform Usage & Community Guidelines for GENTRICKS Ecosystem</span>
            <span>Effective Date: 2026</span>
          </p>
        </header>

        <div className="legal-content">
          <section className="legal-section">
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing, browsing, or submitting information to <strong>GENTRICKS</strong> (including <code>gentricks.in</code>,
              associated initiatives, hackathons, and local city hub events), you agree to be bound by these Terms & Conditions
              and our <a href="#privacy-policy" className="text-link">Privacy Policy</a>. If you do not agree to these terms,
              please refrain from participating or submitting personal details.
            </p>
          </section>

          <section className="legal-section">
            <h2>2. Purpose & Nature of GENTRICKS</h2>
            <p>
              GENTRICKS is a non-exclusive, innovation-driven platform established to connect students, builders, creators,
              startups, and leaders across India. We provide learning resources, community forums,
              hackathon showcases, and curated industry opportunities.
            </p>
          </section>

          <section className="legal-section">
            <h2>3. Community Standards & Code of Conduct</h2>
            <p>Participants in the GENTRICKS ecosystem agree to adhere to respectful, professional standards:</p>
            <ul className="legal-list">
              <li><strong>Constructive Collaboration:</strong> Support fellow builders and maintain an inclusive, harassment-free environment.</li>
              <li><strong>Authentic Representations:</strong> Provide truthful information regarding your credentials, projects, and affiliations.</li>
              <li><strong>No Malicious Activity:</strong> Do not upload malicious code, exploit platform infrastructure, or compromise community data.</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>4. Intellectual Property Rights</h2>
            <p>
              <strong>Your Projects Belong to You:</strong> When you present or submit ideas, open-source repositories, or startup
              prototypes through GENTRICKS, you retain 100% of your intellectual property ownership. GENTRICKS claims no ownership
              over builder projects unless a separate formal written agreement is executed.
            </p>
            <p>
              <strong>GENTRICKS Brand:</strong> The GENTRICKS name, logo, visual marks, and original website assets are the exclusive
              property of GENTRICKS and may not be reproduced without written permission.
            </p>
          </section>

          <section className="legal-section">
            <h2>5. Disclaimer & Limitation of Liability</h2>
            <p>
              The platform and opportunities provided through GENTRICKS are provided on an "as-is" and "as-available" basis.
              While we strive to vet all external partner opportunities, GENTRICKS is not an employer, venture fund, or educational
              accreditation board, and makes no representations regarding outcomes from third-party events or programs.
            </p>
          </section>

          <section className="legal-section">
            <h2>6. Governing Law & Dispute Resolution</h2>
            <p>
              These terms shall be governed by and construed in accordance with the laws of <strong>India</strong>. Any disputes
              arising out of or in connection with these terms shall be subject to the exclusive jurisdiction of the competent courts
              in India.
            </p>
          </section>

          <section className="legal-section">
            <h2>7. Contact & Inquiries</h2>
            <p>
              For legal inquiries, partnership clarifications, or terms questions, contact us at:
            </p>
            <div className="officer-card">
              <h3>Legal & Operations Desk</h3>
              <p><strong>Official Email:</strong> <a href="mailto:collab@gentricks.in">collab@gentricks.in</a></p>
              <p><strong>Privacy Concerns:</strong> <a href="mailto:support@gentricks.in">support@gentricks.in</a></p>
            </div>
          </section>
        </div>
      </div>
    </article>
  );
}
