import { Link, useLocation } from 'wouter';
import { useState, useEffect } from 'react';
import { usePageTransition } from '@/contexts/PageTransitionContext';

/**
 * Design Philosophy: Premium Minimal Architecture (JLN Architects Inspired)
 * - Full-screen photography-first hero (100vh, edge-to-edge)
 * - White header with logo and hamburger navigation
 * - Centered white block with SDA logo and "Start Now" CTA
 * - Minimal animations, photography dominates
 * - No other sections on homepage
 * - Page transitions with smooth effects
 */

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [, setLocation] = useLocation();
  const { triggerTransition } = usePageTransition();

  const handleStartNow = () => {
    triggerTransition(() => setLocation('/work'), 600);
  };

  useEffect(() => {
    // Prevent body scroll when menu is open
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [menuOpen]);

  return (
    <div className="home-container">
      {/* Header */}
      <header className="header">
        <div className="header-content">
          <div className="header-logo">
            <img src="/sda-logo.png" alt="SDA" className="logo-img" />
          </div>
          <button
            className={`hamburger ${menuOpen ? 'active' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="mobile-menu">
          <Link href="/work" className="menu-link" onClick={() => setMenuOpen(false)}>
            Work
          </Link>
          <Link href="/about" className="menu-link" onClick={() => setMenuOpen(false)}>
            About
          </Link>
          <Link href="/contact" className="menu-link" onClick={() => setMenuOpen(false)}>
            Contact
          </Link>
        </nav>
      )}

      {/* Full-Screen Hero */}
      <section
        className="hero"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&h=1080&fit=crop)',
        }}
      >
        {/* Centered Content Block */}
        <div className="hero-content-block">
          {/* SDA Logo */}
          <div className="content-logo">
            <img src="/sda-logo.png" alt="Sullivan Design Architects" className="content-logo-img" />
          </div>

          {/* Start Now Button */}
          <button onClick={handleStartNow} className="start-button">
            Start Now
          </button>
        </div>
      </section>
    </div>
  );
}
