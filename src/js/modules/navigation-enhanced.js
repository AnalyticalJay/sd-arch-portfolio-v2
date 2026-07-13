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
  const header = document.querySelector('header');
  
  if (!header) {
    console.warn('[EnhancedNav] Header element not found');
    return;
  }

  // Initialize header scroll effect with GSAP
  initHeaderScrollEffectGSAP(header);
  
  // Initialize smooth anchor navigation
  initSmoothAnchorNavigation();
  
  // Initialize navigation link hover effects
  initNavigationLinkEffects();
  
  // Initialize button interactions
  initButtonInteractions();
  
  console.log('[EnhancedNav] ✓ Premium navigation initialized');
};

/**
 * Header Scroll Effect with GSAP
 * Smooth background and backdrop blur transition
 * @param {HTMLElement} header - Header element
 */
const initHeaderScrollEffectGSAP = (header) => {
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
        // Scroll down - add background
        gsap.to(header, {
          backgroundColor: 'rgba(7, 17, 28, 0.8)',
          backdropFilter: 'blur(12px)',
          borderBottomColor: 'rgba(255, 255, 255, 0.05)',
          duration: 0.4,
          ease: 'power2.out',
        });
        
        header.classList.add('header-scrolled');
      } else {
        // Scroll up - remove background
        gsap.to(header, {
          backgroundColor: 'rgba(7, 17, 28, 0)',
          backdropFilter: 'blur(0px)',
          borderBottomColor: 'rgba(255, 255, 255, 0)',
          duration: 0.4,
          ease: 'power2.out',
        });
        
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

  // Use passive event listener for better performance
  window.addEventListener('scroll', onScroll, { passive: true });
};

/**
 * Smooth Anchor Navigation
 * Smooth scroll to anchor links with GSAP
 */
const initSmoothAnchorNavigation = () => {
  // Get all anchor links
  const anchorLinks = document.querySelectorAll('a[href^="#"]');

  anchorLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      
      // Skip if href is just "#"
      if (href === '#') return;
      
      const target = document.querySelector(href);
      
      if (target) {
        e.preventDefault();
        
        // Calculate offset (header height + padding)
        const headerHeight = document.querySelector('header')?.offsetHeight || 80;
        const offset = headerHeight + 20;
        
        // Use enhanced scroll
        scrollToElement(target, offset, {
          duration: 1.2,
        });
        
        // Update active state
        updateActiveNavLink(href);
      }
    });
  });
};

/**
 * Update Active Navigation Link
 * Highlight current section in navigation
 * @param {string} activeHref - Active link href
 */
const updateActiveNavLink = (activeHref) => {
  const navLinks = document.querySelectorAll('nav a[href^="#"]');
  
  navLinks.forEach(link => {
    const isActive = link.getAttribute('href') === activeHref;
    
    if (isActive) {
      gsap.to(link, {
        color: '#13C46B',
        duration: 0.3,
        ease: 'power2.out',
      });
      link.classList.add('active');
    } else {
      gsap.to(link, {
        color: 'rgba(255, 255, 255, 0.7)',
        duration: 0.3,
        ease: 'power2.out',
      });
      link.classList.remove('active');
    }
  });
};

/**
 * Navigation Link Hover Effects
 * Premium hover state animations
 */
const initNavigationLinkEffects = () => {
  const navLinks = document.querySelectorAll('nav a');

  navLinks.forEach(link => {
    // Create hover timeline
    const hoverTimeline = gsap.timeline({ paused: true });

    hoverTimeline.to(link, {
      color: '#13C46B',
      duration: 0.3,
      ease: 'power2.out',
    }, 0);

    // Mouse enter
    link.addEventListener('mouseenter', () => {
      hoverTimeline.play();
    });

    // Mouse leave
    link.addEventListener('mouseleave', () => {
      hoverTimeline.reverse();
    });
  });
};

/**
 * Button Interactions
 * Premium button hover and click effects
 */
const initButtonInteractions = () => {
  const buttons = document.querySelectorAll('.btn');

  buttons.forEach(button => {
    // Hover effect
    button.addEventListener('mouseenter', () => {
      gsap.to(button, {
        scale: 1.05,
        duration: 0.3,
        ease: 'power2.out',
      });
    });

    button.addEventListener('mouseleave', () => {
      gsap.to(button, {
        scale: 1,
        duration: 0.3,
        ease: 'power2.out',
      });
    });

    // Click effect
    button.addEventListener('mousedown', () => {
      gsap.to(button, {
        scale: 0.95,
        duration: 0.1,
        ease: 'power2.out',
      });
    });

    button.addEventListener('mouseup', () => {
      gsap.to(button, {
        scale: 1.05,
        duration: 0.2,
        ease: 'power2.out',
      });
    });
  });
};

/**
 * Add Scroll Spy
 * Update active nav link based on scroll position
 */
export const initScrollSpy = () => {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('nav a[href^="#"]');

  const handleScroll = () => {
    let current = '';

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      
      if (window.scrollY >= sectionTop - 200) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      const href = link.getAttribute('href');
      
      if (href === `#${current}`) {
        link.classList.add('active');
        gsap.to(link, {
          color: '#13C46B',
          duration: 0.3,
        });
      } else {
        link.classList.remove('active');
        gsap.to(link, {
          color: 'rgba(255, 255, 255, 0.7)',
          duration: 0.3,
        });
      }
    });
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
};

/**
 * Mobile Menu Enhancement
 * Create mobile menu with premium animations if it exists
 */
export const initMobileMenuEnhanced = () => {
  const mobileMenuBtn = document.querySelector('#mobile-menu-btn');
  const mobileMenu = document.querySelector('#mobile-menu');

  if (!mobileMenuBtn || !mobileMenu) {
    console.warn('[EnhancedNav] Mobile menu elements not found');
    return;
  }

  let isMenuOpen = false;
  const menuTimeline = gsap.timeline({ paused: true });

  // Create menu animation
  menuTimeline.to(mobileMenu, {
    opacity: 1,
    y: 0,
    duration: 0.4,
    ease: 'power2.out',
  }, 0);

  // Menu button click
  mobileMenuBtn.addEventListener('click', () => {
    isMenuOpen = !isMenuOpen;
    
    if (isMenuOpen) {
      mobileMenu.classList.remove('hidden');
      menuTimeline.play();
      document.body.classList.add('overflow-hidden');
      mobileMenuBtn.setAttribute('aria-expanded', 'true');
    } else {
      menuTimeline.reverse();
      setTimeout(() => {
        mobileMenu.classList.add('hidden');
      }, 400);
      document.body.classList.remove('overflow-hidden');
      mobileMenuBtn.setAttribute('aria-expanded', 'false');
    }
  });

  // Close menu on link click
  const menuLinks = mobileMenu.querySelectorAll('a');
  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (isMenuOpen) {
        menuTimeline.reverse();
        setTimeout(() => {
          mobileMenu.classList.add('hidden');
        }, 400);
        document.body.classList.remove('overflow-hidden');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
        isMenuOpen = false;
      }
    });
  });

  // Close on escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isMenuOpen) {
      menuTimeline.reverse();
      setTimeout(() => {
        mobileMenu.classList.add('hidden');
      }, 400);
      document.body.classList.remove('overflow-hidden');
      mobileMenuBtn.setAttribute('aria-expanded', 'false');
      isMenuOpen = false;
    }
  });

  // Close on outside click
  document.addEventListener('click', (e) => {
    if (
      isMenuOpen &&
      !mobileMenu.contains(e.target) &&
      !mobileMenuBtn.contains(e.target)
    ) {
      menuTimeline.reverse();
      setTimeout(() => {
        mobileMenu.classList.add('hidden');
      }, 400);
      document.body.classList.remove('overflow-hidden');
      mobileMenuBtn.setAttribute('aria-expanded', 'false');
      isMenuOpen = false;
    }
  });
};

/**
 * Enhanced Navigation Export Object
 */
export const enhancedNavigation = {
  initEnhancedNavigation,
  initScrollSpy,
  initMobileMenuEnhanced,
};

export default enhancedNavigation;
