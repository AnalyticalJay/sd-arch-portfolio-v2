import { Link, useLocation } from 'wouter';
import { useState, useEffect } from 'react';
import { usePageTransition } from '@/contexts/PageTransitionContext';

/**
 * Design Philosophy: Premium Minimal Architecture (JLN Architects Inspired)
 * - Full-screen photography-first hero (100vh, edge-to-edge)
 * - White header with logo and hamburger navigation
 * - Centered white block with SDA logo and "Start Now" CTA
 * - Hero image rotation cycles through architectural images
 * - Minimal animations, photography dominates
 * - No other sections on homepage
 * - Page transitions with smooth effects
 */

// Array of high-quality architectural images
const HERO_IMAGES = [
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&h=1080&fit=crop',
  'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1920&h=1080&fit=crop',
  'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1920&h=1080&fit=crop',
  'https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1920&h=1080&fit=crop',
  'https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=1920&h=1080&fit=crop',
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [, setLocation] = useLocation();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [nextImageIndex, setNextImageIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const { triggerTransition } = usePageTransition();

  const handleStartNow = () => {
    triggerTransition(() => setLocation('/work'), 600);
  };

  // Image rotation effect
  useEffect(() => {
    const imageRotationInterval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentImageIndex((prev) => (prev + 1) % HERO_IMAGES.length);
        setNextImageIndex((prev) => (prev + 1) % HERO_IMAGES.length);
        setIsTransitioning(false);
      }, 800);
    }, 8000); // Change image every 8 seconds

    return () => clearInterval(imageRotationInterval);
  }, []);

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

      {/* Full-Screen Hero with Image Rotation */}
      <section className="hero-wrapper">
        {/* Background image layer with rotation */}
        <div className="hero-background-layer">
          <div
            className={`hero-image hero-image-current ${isTransitioning ? 'fade-out' : 'fade-in'}`}
            style={{
              backgroundImage: `url(${HERO_IMAGES[currentImageIndex]})`,
            }}
          />
          <div
            className={`hero-image hero-image-next ${isTransitioning ? 'fade-in' : 'fade-out'}`}
            style={{
              backgroundImage: `url(${HERO_IMAGES[nextImageIndex]})`,
            }}
          />
        </div>

        {/* Hero section with content block on top */}
        <section className="hero">
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
      </section>
    </div>
  );
}
