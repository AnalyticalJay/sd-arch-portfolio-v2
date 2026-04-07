import { Link } from 'wouter';

/**
 * Design Philosophy: Minimal Editorial
 * - Clean typography hierarchy
 * - Maximum whitespace
 * - Short, focused content (max 2 paragraphs)
 * - No heavy design elements
 * - Simple credentials list
 */

export default function About() {
  return (
    <div className="about-page">
      {/* Header */}
      <header className="page-header">
        <div className="header-content">
          <div className="header-logo">
            <img src="/sda-logo.png" alt="SDA" className="logo-img" />
          </div>
          <button className="hamburger" aria-label="Toggle menu">
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="about-main">
        <div className="about-container">
          {/* Page Title */}
          <section className="about-section about-title-section">
            <h1 className="page-title">About</h1>
          </section>

          {/* Bio Section */}
          <section className="about-section about-bio-section">
            <div className="about-content">
              <p className="about-bio">
                Sullivan Design Architects is a forward-thinking studio dedicated to creating spaces that balance form and function. With a focus on sustainable design and innovative solutions, we craft environments that inspire and endure.
              </p>
              <p className="about-bio">
                Our approach combines meticulous attention to detail with a deep understanding of human experience. We believe great architecture emerges from collaboration, creativity, and an unwavering commitment to excellence.
              </p>
            </div>
          </section>

          {/* Credentials Section */}
          <section className="about-section about-credentials-section">
            <h2 className="about-subtitle">Credentials</h2>
            <div className="credentials-list">
              <div className="credential-item">
                <h3 className="credential-title">Expertise</h3>
                <ul className="credential-details">
                  <li>Residential Architecture</li>
                  <li>Commercial Design</li>
                  <li>Healthcare Facilities</li>
                  <li>Mixed-Use Development</li>
                </ul>
              </div>

              <div className="credential-item">
                <h3 className="credential-title">Recognition</h3>
                <ul className="credential-details">
                  <li>International Architecture Award 2023</li>
                  <li>Design Excellence Award 2022</li>
                  <li>Sustainable Design Recognition 2021</li>
                </ul>
              </div>

              <div className="credential-item">
                <h3 className="credential-title">Team</h3>
                <ul className="credential-details">
                  <li>Licensed Architects</li>
                  <li>Design Specialists</li>
                  <li>Project Managers</li>
                </ul>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="about-section about-cta-section">
            <p className="about-cta-text">Ready to start your next project?</p>
            <Link href="/contact" className="about-cta-button">
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
