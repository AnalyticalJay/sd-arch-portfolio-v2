import { Link } from 'wouter';

/**
 * Design Philosophy: Minimal Editorial
 * - Clean typography hierarchy
 * - Maximum whitespace
 * - Three service categories with icons and details
 * - Simple list formatting
 * - No heavy design elements
 */

export default function Services() {
  return (
    <div className="services-page">
      {/* Header */}
      <header className="page-header">
        <div className="header-content">
          <Link href="/" className="header-logo">
            <img src="/sda-logo.png" alt="SDA" className="logo-img" />
          </Link>
          <div className="flex gap-8 hidden md:flex">
            <Link href="/work" className="text-sm font-light text-gray-900 hover:text-blue-900 transition-colors pb-1">
              Work
            </Link>
            <Link href="/about" className="text-sm font-light text-gray-900 hover:text-blue-900 transition-colors pb-1">
              About
            </Link>
            <Link href="/services" className="text-sm font-light text-blue-900 hover:text-blue-900 transition-colors border-b-2 border-blue-900 pb-1">
              Services
            </Link>
            <Link href="/contact" className="text-sm font-light text-gray-900 hover:text-blue-900 transition-colors pb-1">
              Contact
            </Link>
          </div>
          <button className="hamburger md:hidden" aria-label="Toggle menu">
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="services-main">
        <div className="services-container">
          {/* Page Title */}
          <section className="services-section services-title-section">
            <h1 className="page-title">Services</h1>
          </section>

          {/* Services Grid */}
          <section className="services-section services-grid-section">
            <p className="services-intro">We offer comprehensive architectural services across three core disciplines, each designed to bring your vision to life with precision and creativity.</p>
            <div className="services-grid">
              {/* Design Service */}
              <div className="service-card">
                <div className="service-icon">
                  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <path d="M 50 20 Q 70 20 70 50 Q 70 80 50 80 Q 30 80 30 50 Q 30 20 50 20" fill="none" stroke="currentColor" strokeWidth="2" />
                  </svg>
                </div>
                <h2 className="service-title">Design</h2>
                <ul className="service-list">
                  <li>New Building Design</li>
                  <li>Additions & Alterations</li>
                  <li>Concept Design</li>
                  <li>Design Development</li>
                  <li>New Developments</li>
                </ul>
              </div>

              {/* Architectural Service */}
              <div className="service-card">
                <div className="service-icon">
                  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <rect x="20" y="30" width="15" height="50" fill="none" stroke="currentColor" strokeWidth="2" />
                    <rect x="42.5" y="30" width="15" height="50" fill="none" stroke="currentColor" strokeWidth="2" />
                    <rect x="65" y="30" width="15" height="50" fill="none" stroke="currentColor" strokeWidth="2" />
                  </svg>
                </div>
                <h2 className="service-title">Architectural</h2>
                <ul className="service-list">
                  <li>Stage 1: Inception</li>
                  <li>Stage 2: Concept & Viability</li>
                  <li>Stage 3: Design Development</li>
                  <li>Stage 4: Documentation & Procurement</li>
                  <li>Stage 5: Construction Contract Administration</li>
                  <li>Stage 6: Close-out</li>
                  <li>Municipal Submission</li>
                  <li>As-built Drawings</li>
                  <li>Regulation Plans</li>
                </ul>
              </div>

              {/* Visual Service */}
              <div className="service-card">
                <div className="service-icon">
                  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="2" />
                    <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="2" />
                    <circle cx="50" cy="50" r="10" fill="currentColor" />
                  </svg>
                </div>
                <h2 className="service-title">Visual</h2>
                <ul className="service-list">
                  <li>3D Revit Models</li>
                  <li>3D Rendering & Visualisation</li>
                  <li>3D Walkthrough Animation</li>
                  <li>Graphic Design & Presentation Layouts</li>
                  <li>Model Building</li>
                </ul>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="services-section services-cta-section">
            <p className="services-cta-text">Ready to start your next project?</p>
            <Link href="/contact" className="services-cta-button">
              Get in Touch
            </Link>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="page-footer">
        <div className="footer-container">
          <div className="footer-divider" />
          <p className="footer-copyright">© 2026 Sullivan Design Architects. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
