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
          <Link href="/" className="header-logo">
            <img src="/sda-logo.png" alt="SDA" className="logo-img" />
          </Link>
          <div className="flex gap-8 hidden md:flex">
            <Link href="/work" className="text-sm font-light text-gray-900 hover:text-blue-900 transition-colors pb-1">
              Work
            </Link>
            <Link href="/about" className="text-sm font-light text-blue-900 hover:text-blue-900 transition-colors border-b-2 border-blue-900 pb-1">
              About
            </Link>
            <Link href="/services" className="text-sm font-light text-gray-900 hover:text-blue-900 transition-colors pb-1">
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
      <main className="about-main">
        <div className="about-container">
          {/* Page Title */}
          <section className="about-section about-title-section">
            <h1 className="page-title">About</h1>
          </section>

          {/* Bio Section */}
          <section className="about-section about-bio-section">
            <div className="about-content">
              <h2 className="about-welcome">Welcome.</h2>
              <p className="about-bio">
                I believe architecture is more than buildings—it's about shaping how people live, move, and connect within a space. Every project is an opportunity to balance clarity, function, and experience, creating environments that feel considered, purposeful, and enduring.
              </p>
              <p className="about-bio">
                Over the past nine years, I've worked across a diverse range of projects—from high-end residential homes to large-scale healthcare and mixed-use developments. This breadth has shaped a design approach that is both pragmatic and adaptable—grounded in technical precision while remaining open to creative exploration.
              </p>
              <p className="about-bio">
                My work is driven by collaboration. Whether leading multidisciplinary teams or working closely with clients and consultants, I focus on translating complex ideas into clear, buildable solutions. From early concept through to construction, I aim to deliver architecture that not only meets expectations but elevates them.
              </p>
              <p className="about-bio">
                With a strong foundation in BIM and technical delivery, I approach design with a deep understanding of how buildings come together—ensuring that ideas are not only compelling, but executable.
              </p>
              <p className="about-bio">
                At its core, my work is about creating spaces that work—functionally, visually, and humanly—while standing the test of time.
              </p>
            </div>
          </section>

          {/* Credentials Section */}
          <section className="about-section about-credentials-section">
            <h2 className="about-subtitle">Experience & Approach</h2>
            <div className="credentials-list">
              <div className="credential-item">
                <h3 className="credential-title">Project Types</h3>
                <ul className="credential-details">
                  <li>High-end Residential</li>
                  <li>Healthcare Facilities</li>
                  <li>Mixed-Use Developments</li>
                  <li>Commercial Design</li>
                </ul>
              </div>

              <div className="credential-item">
                <h3 className="credential-title">Core Strengths</h3>
                <ul className="credential-details">
                  <li>BIM & Technical Delivery</li>
                  <li>Design Development</li>
                  <li>Multidisciplinary Collaboration</li>
                  <li>Construction Administration</li>
                </ul>
              </div>

              <div className="credential-item">
                <h3 className="credential-title">Design Philosophy</h3>
                <ul className="credential-details">
                  <li>Pragmatic & Adaptable</li>
                  <li>Functionally Driven</li>
                  <li>Technically Precise</li>
                  <li>Creatively Exploratory</li>
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
