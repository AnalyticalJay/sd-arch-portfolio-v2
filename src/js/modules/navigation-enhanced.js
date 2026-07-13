/**
 * Enhanced Navigation Module
 * Premium header animations, smooth anchor navigation, and micro-interactions
 * Provides sophisticated navigation experience
 */

import gsap from 'gsap';
import { scrollToElement } from './scroll-enhanced';

/**
 * Initialize Enhanced Navigation
 * Sets up header effects, smooth scrolling, and micro-interactions
 */
export const initEnhancedNavigation = () => {
  const header = document.querySelector('#main-header');
  const logo = header?.querySelector('img');
  
  if (!header) {
    console.warn('[EnhancedNav] Header element not found');
    return;
  }

  // Initialize header scroll effect with GSAP
  initHeaderScrollEffectGSAP(header, logo);
  
  // Initialize smooth anchor navigation
  initSmoothAnchorNavigation();
  
  // Initialize navigation link hover effects
  initNavigationLinkEffects();
  
  // Initialize button interactions
  initButtonInteractions();
  
  // Initialize Mobile Menu
  initMobileMenuEnhanced();
  
  // Initialize Scroll Spy
  initScrollSpy();
  
  console.log('[EnhancedNav] ✓ Premium navigation initialized');
};

/**
 * Header Scroll Effect with GSAP
 * Smooth background, backdrop blur, and logo resize transition
 * @param {HTMLElement} header - Header element
 * @param {HTMLElement} logo - Logo element
 */
const initHeaderScrollEffectGSAP = (header, logo) => {
  let lastScrollY = 0;
  let ticking = false;
  const scrollThreshold = 50;

  const updateHeaderOnScroll = () => {
    const scrollY = window.scrollY;
    const isScrolled = scrollY > scrollThreshold;
    const wasScrolled = lastScrollY > scrollThreshold;

    // Only animate when state changes
    if (isScrolled !== wasScrolled) {
      if (isScrolled) {
        // Scroll down - add background and resize logo
        gsap.to(header, {
          backgroundColor: 'rgba(7, 17, 28, 0.85)',
          backdropFilter: 'blur(16px)',
          borderBottomColor: 'rgba(255, 255, 255, 0.08)',
          paddingTop: '1rem',
          paddingBottom: '1rem',
          duration: 0.5,
          ease: 'power2.out',
        });
        
        if (logo) {
          gsap.to(logo, {
            height: '1.75rem',
            duration: 0.5,
            ease: 'power2.out',
          });
        }
        
        header.classList.add('header-scrolled');
      } else {
        // Scroll up - remove background and reset logo
        gsap.to(header, {
          backgroundColor: 'rgba(7, 17, 28, 0)',
          backdropFilter: 'blur(0px)',
          borderBottomColor: 'rgba(255, 255, 255, 0)',
          paddingTop: '1.5rem',
          paddingBottom: '1.5rem',
          duration: 0.5,
          ease: 'power2.out',
        });
        
        if (logo) {
          gsap.to(logo, {
            height: '2rem',
            duration: 0.5,
            ease: 'power2.out',
          });
        }
        
        header.classList.remove('header-scrolled');
      }
    }

    lastScrollY = scrollY;
    ticking = false;
  };

  const onScroll = () => {
    if (!ticking) {
      window.requestAnimationFrame(updateHeaderOnScroll);
      ticking = true;
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });
};

/**
 * Smooth Anchor Navigation
 * Smooth scroll to anchor links with GSAP
 */
const initSmoothAnchorNavigation = () => {
  const anchorLinks = document.querySelectorAll('a[href^="#"]');

  anchorLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href === '#') return;
      
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        
        const headerHeight = document.querySelector('#main-header')?.offsetHeight || 80;
        const offset = headerHeight;
        
        scrollToElement(target, offset, {
          duration: 1.2,
          ease: 'power4.inOut'
        });
      }
    });
  });
};

/**
 * Navigation Link Hover Effects
 * Premium hover state animations with underline
 */
const initNavigationLinkEffects = () => {
  const navLinks = document.querySelectorAll('nav:not(#mobile-menu) a');

  navLinks.forEach(link => {
    // Skip CTA buttons
    if (link.classList.contains('btn')) return;

    // Create underline element
    const underline = document.createElement('span');
    underline.className = 'nav-link-underline';
    link.style.position = 'relative';
    link.appendChild(underline);

    // Initial styles for underline
    gsap.set(underline, {
      position: 'absolute',
      bottom: '-4px',
      left: 0,
      width: '0%',
      height: '2px',
      backgroundColor: '#13C46B',
      transformOrigin: 'left',
    });

    // Hover timeline
    const hoverTimeline = gsap.timeline({ paused: true });
    hoverTimeline.to(underline, {
      width: '100%',
      duration: 0.4,
      ease: 'power2.out',
    });

    link.addEventListener('mouseenter', () => hoverTimeline.play());
    link.addEventListener('mouseleave', () => {
      if (!link.classList.contains('active')) {
        hoverTimeline.reverse();
      }
    });
  });
};

/**
 * Button Interactions
 * Premium CTA hover animations
 */
const initButtonInteractions = () => {
  const buttons = document.querySelectorAll('.btn');

  buttons.forEach(button => {
    button.addEventListener('mouseenter', () => {
      gsap.to(button, {
        y: -2,
        boxShadow: '0 10px 20px -5px rgba(19, 196, 107, 0.3)',
        duration: 0.3,
        ease: 'power2.out',
      });
    });

    button.addEventListener('mouseleave', () => {
      gsap.to(button, {
        y: 0,
        boxShadow: '0 0px 0px 0px rgba(19, 196, 107, 0)',
        duration: 0.3,
        ease: 'power2.out',
      });
    });
  });
};

/**
 * Scroll Spy
 * Update active nav link based on scroll position
 */
export const initScrollSpy = () => {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('nav:not(#mobile-menu) a[href^="#"]');

  const handleScroll = () => {
    let current = '';
    const scrollPosition = window.scrollY + 150;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      const href = link.getAttribute('href');
      const underline = link.querySelector('.nav-link-underline');
      
      if (href === `#${current}`) {
        link.classList.add('active');
        gsap.to(link, { color: '#FFFFFF', duration: 0.3 });
        if (underline) gsap.to(underline, { width: '100%', duration: 0.3 });
      } else {
        link.classList.remove('active');
        gsap.to(link, { color: 'rgba(255, 255, 255, 0.7)', duration: 0.3 });
        if (underline) gsap.to(underline, { width: '0%', duration: 0.3 });
      }
    });
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
};

/**
 * Mobile Menu Enhancement
 * Premium drawer animation
 */
export const initMobileMenuEnhanced = () => {
  const mobileMenuBtn = document.querySelector('#mobile-menu-btn');
  const mobileMenu = document.querySelector('#mobile-menu');
  
  if (!mobileMenuBtn || !mobileMenu) return;

  let isMenuOpen = false;
  
  // Set initial state
  gsap.set(mobileMenu, { 
    height: 0, 
    opacity: 0,
    display: 'none'
  });

  const toggleMenu = () => {
    isMenuOpen = !isMenuOpen;
    
    if (isMenuOpen) {
      mobileMenu.style.display = 'block';
      gsap.to(mobileMenu, {
        height: 'auto',
        opacity: 1,
        duration: 0.5,
        ease: 'power3.out',
      });
      
      // Animate menu links staggered
      gsap.fromTo(mobileMenu.querySelectorAll('a'), 
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4, stagger: 0.05, ease: 'power2.out', delay: 0.2 }
      );
      
      mobileMenuBtn.setAttribute('aria-expanded', 'true');
      // Change icon to X (optional, but good for UX)
    } else {
      gsap.to(mobileMenu, {
        height: 0,
        opacity: 0,
        duration: 0.4,
        ease: 'power3.in',
        onComplete: () => {
          mobileMenu.style.display = 'none';
        }
      });
      mobileMenuBtn.setAttribute('aria-expanded', 'false');
    }
  };

  mobileMenuBtn.addEventListener('click', toggleMenu);

  // Close menu on link click
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      if (isMenuOpen) toggleMenu();
    });
  });
};

export default {
  initEnhancedNavigation,
  initScrollSpy,
  initMobileMenuEnhanced,
};
