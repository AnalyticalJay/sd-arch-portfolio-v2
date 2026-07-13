/**
 * Accessible Navigation Module
 * Enhanced keyboard navigation, focus management, and motion accessibility
 * Provides sophisticated navigation experience while respecting user preferences
 */

import gsap from 'gsap';
import { scrollController } from './scroll-controller';
import { prefersReducedMotion, getAnimationDuration } from './performance-optimization-v2';

/**
 * Initialize Accessible Navigation
 * Sets up header effects, smooth scrolling, and keyboard accessibility
 */
export const initAccessibleNavigation = () => {
  const header = document.querySelector('#main-header');
  const logo = header?.querySelector('img');
  
  if (!header) {
    console.warn('[AccessibleNav] Header element not found');
    return;
  }

  // Initialize header scroll effect with motion support
  initHeaderScrollEffectGSAP(header, logo);
  
  // Initialize smooth anchor navigation with motion support
  initSmoothAnchorNavigation();
  
  // Initialize navigation link hover and focus effects
  initNavigationLinkEffects();
  
  // Initialize button interactions
  initButtonInteractions();
  
  // Initialize Mobile Menu with keyboard accessibility
  initMobileMenuAccessible();
  
  // Initialize Scroll Spy
  initScrollSpy();
  
  console.log('[AccessibleNav] ✓ Accessible navigation initialized');
};

/**
 * Header Scroll Effect with Motion Support
 * Smooth background, backdrop blur, and logo resize transition
 * Respects prefers-reduced-motion
 * @param {HTMLElement} header - Header element
 * @param {HTMLElement} logo - Logo element
 */
const initHeaderScrollEffectGSAP = (header, logo) => {
  let lastScrollY = 0;
  const scrollThreshold = 50;
  const animationDuration = getAnimationDuration(0.5, 0);

  const updateHeaderOnScroll = (e) => {
    const scrollY = e.scroll || window.scrollY;
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
          duration: animationDuration,
          ease: 'power2.out',
        });
        
        if (logo) {
          gsap.to(logo, {
            height: '1.75rem',
            duration: animationDuration,
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
          duration: animationDuration,
          ease: 'power2.out',
        });
        
        if (logo) {
          gsap.to(logo, {
            height: '2rem',
            duration: animationDuration,
            ease: 'power2.out',
          });
        }
        
        header.classList.remove('header-scrolled');
      }
    }

    lastScrollY = scrollY;
  };

  scrollController.onScroll(updateHeaderOnScroll);
};

/**
 * Smooth Anchor Navigation with Motion Support
 * Smooth scroll to anchor links with GSAP
 * Respects prefers-reduced-motion
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
        
        // Use appropriate duration based on motion preferences
        const scrollDuration = prefersReducedMotion() ? 0 : 1.5;
        
        scrollController.scrollTo(target, {
          offset: -offset,
          duration: scrollDuration,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
        });
      }
    });
  });
};

/**
 * Navigation Link Hover and Focus Effects
 * Premium hover and focus state animations with underline
 * Respects prefers-reduced-motion
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
    const underlineDuration = getAnimationDuration(0.4, 0);
    
    hoverTimeline.to(underline, {
      width: '100%',
      duration: underlineDuration,
      ease: 'power2.out',
    });

    // Mouse events
    link.addEventListener('mouseenter', () => {
      if (!prefersReducedMotion()) {
        hoverTimeline.play();
      }
    });
    
    link.addEventListener('mouseleave', () => {
      if (!prefersReducedMotion() && !link.classList.contains('active')) {
        hoverTimeline.reverse();
      }
    });

    // Focus events for keyboard navigation
    link.addEventListener('focus', () => {
      if (!prefersReducedMotion()) {
        hoverTimeline.play();
      }
      // Focus outline is handled by CSS
    });

    link.addEventListener('blur', () => {
      if (!prefersReducedMotion() && !link.classList.contains('active')) {
        hoverTimeline.reverse();
      }
    });
  });
};

/**
 * Button Interactions with Motion Support
 * Premium CTA hover animations
 * Respects prefers-reduced-motion
 */
const initButtonInteractions = () => {
  const buttons = document.querySelectorAll('.btn');
  const buttonDuration = getAnimationDuration(0.3, 0);

  buttons.forEach(button => {
    button.addEventListener('mouseenter', () => {
      if (!prefersReducedMotion()) {
        gsap.to(button, {
          y: -2,
          boxShadow: '0 10px 20px -5px rgba(19, 196, 107, 0.3)',
          duration: buttonDuration,
          ease: 'power2.out',
        });
      }
    });

    button.addEventListener('mouseleave', () => {
      if (!prefersReducedMotion()) {
        gsap.to(button, {
          y: 0,
          boxShadow: '0 0px 0px 0px rgba(19, 196, 107, 0)',
          duration: buttonDuration,
          ease: 'power2.out',
        });
      }
    });
  });
};

/**
 * Scroll Spy with Motion Support
 * Update active nav link based on scroll position
 * Respects prefers-reduced-motion
 */
export const initScrollSpy = () => {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('nav:not(#mobile-menu) a[href^="#"]');
  const colorDuration = getAnimationDuration(0.3, 0);

  const handleScroll = (e) => {
    let current = '';
    const scrollPosition = (e.scroll || window.scrollY) + 150;

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
        gsap.to(link, { color: '#FFFFFF', duration: colorDuration });
        if (underline) gsap.to(underline, { width: '100%', duration: colorDuration });
      } else {
        link.classList.remove('active');
        gsap.to(link, { color: 'rgba(255, 255, 255, 0.7)', duration: colorDuration });
        if (underline) gsap.to(underline, { width: '0%', duration: colorDuration });
      }
    });
  };

  scrollController.onScroll(handleScroll);
};

/**
 * Mobile Menu with Full Keyboard Accessibility
 * Premium drawer animation with keyboard support
 * - Escape key closes menu
 * - Focus trap within menu
 * - Outside click closes menu
 * - Respects prefers-reduced-motion
 */
export const initMobileMenuAccessible = () => {
  const mobileMenuBtn = document.querySelector('#mobile-menu-btn');
  const mobileMenu = document.querySelector('#mobile-menu');
  
  if (!mobileMenuBtn || !mobileMenu) return;

  let isMenuOpen = false;
  const menuDuration = getAnimationDuration(0.4, 0);
  const linkDuration = getAnimationDuration(0.4, 0);
  const staggerDelay = getAnimationDuration(0.1, 0);
  
  // Set initial state
  gsap.set(mobileMenu, { 
    height: 0, 
    opacity: 0,
    display: 'none'
  });

  /**
   * Toggle menu open/close
   */
  const toggleMenu = (open) => {
    isMenuOpen = open !== undefined ? open : !isMenuOpen;
    
    if (isMenuOpen) {
      openMenu();
    } else {
      closeMenu();
    }
  };

  /**
   * Open menu
   */
  const openMenu = () => {
    mobileMenu.style.display = 'block';
    
    if (prefersReducedMotion()) {
      mobileMenu.style.height = 'auto';
      mobileMenu.style.opacity = '1';
    } else {
      gsap.to(mobileMenu, {
        height: 'auto',
        opacity: 1,
        duration: menuDuration,
        ease: 'power3.out',
      });
      
      // Animate menu links staggered
      gsap.fromTo(mobileMenu.querySelectorAll('a'), 
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: linkDuration, stagger: staggerDelay, ease: 'power2.out', delay: 0.2 }
      );
    }
    
    mobileMenuBtn.setAttribute('aria-expanded', 'true');
    
    // Move focus to first menu item
    const firstMenuItem = mobileMenu.querySelector('a');
    if (firstMenuItem) {
      setTimeout(() => firstMenuItem.focus(), 100);
    }
    
    // Prevent body scroll
    document.body.style.overflow = 'hidden';
  };

  /**
   * Close menu
   */
  const closeMenu = () => {
    if (prefersReducedMotion()) {
      mobileMenu.style.display = 'none';
      mobileMenu.style.height = '0';
      mobileMenu.style.opacity = '0';
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
    }
    
    mobileMenuBtn.setAttribute('aria-expanded', 'false');
    
    // Return focus to menu button
    mobileMenuBtn.focus();
    
    // Restore body scroll
    document.body.style.overflow = '';
  };

  // Button click handler
  mobileMenuBtn.addEventListener('click', () => toggleMenu());

  // Close menu on link click
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      if (isMenuOpen) toggleMenu(false);
    });
  });

  // Keyboard handlers
  document.addEventListener('keydown', (e) => {
    // Escape key closes menu
    if (e.key === 'Escape' && isMenuOpen) {
      e.preventDefault();
      toggleMenu(false);
    }

    // Tab key management for focus trap
    if (e.key === 'Tab' && isMenuOpen) {
      const menuItems = Array.from(mobileMenu.querySelectorAll('a, button, [tabindex]:not([tabindex="-1"])'));
      const firstFocusable = menuItems[0];
      const lastFocusable = menuItems[menuItems.length - 1];
      
      if (e.shiftKey) {
        // Shift+Tab - move focus backward
        if (document.activeElement === firstFocusable || document.activeElement === mobileMenuBtn) {
          e.preventDefault();
          lastFocusable.focus();
        }
      } else {
        // Tab - move focus forward
        if (document.activeElement === lastFocusable) {
          e.preventDefault();
          firstFocusable.focus();
        }
      }
    }
  });

  // Outside click handler
  document.addEventListener('click', (e) => {
    if (isMenuOpen && !mobileMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
      toggleMenu(false);
    }
  });

  // Expose toggle function globally if needed
  window.toggleMobileMenu = toggleMenu;
};

export default {
  initAccessibleNavigation,
  initScrollSpy,
  initMobileMenuAccessible,
};
