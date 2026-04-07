import { Link } from 'wouter';
import { useEffect, useState } from 'react';

/**
 * Design Philosophy: Premium Minimal Architecture
 * - Full-screen immersive hero with high-quality architectural image
 * - Subtle zoom animation on load, barely noticeable
 * - Minimal centered text overlay (studio name + subheading only)
 * - Transparent navigation overlay
 * - Image-driven, calm, elegant aesthetic
 * - No clutter, no extra elements
 */

export default function Home() {
  const [heroLoaded, setHeroLoaded] = useState(false);

  useEffect(() => {
    // Trigger fade-in animation on mount
    setHeroLoaded(true);
  }, []);

  const projects = [
    {
      id: 1,
      title: 'Residential Sanctuary',
      location: 'Cape Town',
      year: '2024',
      type: 'Residential',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=800&fit=crop',
    },
    {
      id: 2,
      title: 'Commercial Hub',
      location: 'Johannesburg',
      year: '2023',
      type: 'Commercial',
      image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&h=800&fit=crop',
    },
    {
      id: 3,
      title: 'Healthcare Innovation',
      location: 'Durban',
      year: '2023',
      type: 'Healthcare',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=800&fit=crop',
    },
    {
      id: 4,
      title: 'Mixed-Use Development',
      location: 'Pretoria',
      year: '2022',
      type: 'Mixed-Use',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=800&fit=crop',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Full-Screen Immersive Hero */}
      <section
        className={`hero-section ${heroLoaded ? 'hero-loaded' : ''}`}
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&h=1080&fit=crop)',
        }}
      >
        {/* Navigation - Transparent Overlay */}
        <nav className="hero-nav">
          <div className="nav-container">
            <Link href="/" className="nav-logo">
              SDA
            </Link>
            <div className="nav-menu">
              <Link href="/work" className="nav-link">
                Work
              </Link>
              <Link href="/about" className="nav-link">
                About
              </Link>
              <Link href="/contact" className="nav-link">
                Contact
              </Link>
            </div>
          </div>
        </nav>

        {/* Hero Content - Minimal and Centered */}
        <div className="hero-content">
          <h1 className="hero-title">Sullivan Design Architects</h1>
          <p className="hero-subtitle">Minimal. Purposeful. Enduring.</p>
        </div>

        {/* Scroll Indicator */}
        <div className="scroll-indicator">
          <div className="scroll-dot" />
        </div>
      </section>

      {/* Project Grid Section */}
      <section className="projects-section">
        <div className="projects-container">
          {/* Section Title */}
          <div className="section-header">
            <h2 className="section-title">Recent Work</h2>
            <div className="title-underline" />
          </div>

          {/* Project Grid - 2 columns with large images */}
          <div className="projects-grid">
            {projects.map((project) => (
              <Link
                key={project.id}
                href={`/project/${project.id}`}
                className="project-link"
              >
                <div className="project-card">
                  {/* Project Image */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-image"
                  />

                  {/* Overlay with Project Info */}
                  <div className="project-overlay" />

                  {/* Project Title & Meta - Reveal on Hover */}
                  <div className="project-info">
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-meta">
                      {project.location} • {project.year} • {project.type}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Studio Philosophy Section */}
      <section className="philosophy-section">
        <div className="philosophy-container">
          <div className="philosophy-content">
            <h3 className="philosophy-title">Our Approach</h3>
            <p className="philosophy-text">
              We believe in architecture that speaks through simplicity and intention. Every design decision serves a purpose, every line has meaning, and every space is crafted to enhance human experience.
            </p>
            <p className="philosophy-text">
              Our work reflects a commitment to timeless design, sustainable practices, and collaborative excellence.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-container">
          <h2 className="cta-title">Ready to Create Something Meaningful?</h2>
          <p className="cta-subtitle">
            Let's discuss your vision and bring your architectural dreams to life.
          </p>
          <Link href="/contact" className="cta-button">
            Start a Project
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-grid">
            {/* Brand */}
            <div className="footer-section">
              <h4 className="footer-heading">Sullivan Design Architects</h4>
              <p className="footer-text">Premium architecture design studio</p>
            </div>

            {/* Navigation */}
            <div className="footer-section">
              <h4 className="footer-heading">Navigation</h4>
              <div className="footer-links">
                <Link href="/work" className="footer-link">
                  Work
                </Link>
                <Link href="/about" className="footer-link">
                  About
                </Link>
                <Link href="/contact" className="footer-link">
                  Contact
                </Link>
              </div>
            </div>

            {/* Contact */}
            <div className="footer-section">
              <h4 className="footer-heading">Contact</h4>
              <p className="footer-text">+27 (0)82 772 8753</p>
              <p className="footer-text">preston@sdarchstudio.co.za</p>
            </div>
          </div>

          {/* Divider */}
          <div className="footer-divider" />

          {/* Copyright */}
          <p className="footer-copyright">
            © 2024 Sullivan Design Architects. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
