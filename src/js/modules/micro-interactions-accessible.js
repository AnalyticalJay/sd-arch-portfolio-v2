/**
 * Accessible Micro-Interactions Module
 * Premium visual feedback that respects motion preferences and enhances focus states
 */

import gsap from 'gsap';
import { prefersReducedMotion } from './performance-optimization-v2';

/**
 * Initialize All Accessible Micro-Interactions
 */
export const initAccessibleMicroInteractions = () => {
  try {
    // Button interactions
    initButtonInteractions();
    
    // Card interactions
    initCardInteractions();
    
    // Link interactions
    initLinkInteractions();
    
    // Badge interactions
    initBadgeInteractions();
    
    // Icon interactions
    initIconInteractions();
    
    // Input focus effects
    initInputFocusEffects();

    console.log('[MicroInteractions] ✓ All accessible micro-interactions initialized');
  } catch (error) {
    console.error('[MicroInteractions] Error initializing micro-interactions:', error);
  }
};

/**
 * Button Interactions
 */
const initButtonInteractions = () => {
  try {
    const buttons = document.querySelectorAll('.btn');

    buttons.forEach(button => {
      // Mouse enter/leave hover
      button.addEventListener('mouseenter', () => {
        if (!prefersReducedMotion()) {
          gsap.to(button, {
            scale: 1.05,
            boxShadow: '0 12px 24px rgba(19, 196, 107, 0.2)',
            duration: 0.3,
            ease: 'power2.out',
          });
        }
      });

      button.addEventListener('mouseleave', () => {
        if (!prefersReducedMotion()) {
          gsap.to(button, {
            scale: 1,
            boxShadow: 'none',
            duration: 0.3,
            ease: 'power2.out',
          });
        }
      });

      // Mouse down/up click
      button.addEventListener('mousedown', () => {
        if (!prefersReducedMotion()) {
          gsap.to(button, { scale: 0.98, duration: 0.1 });
        }
      });

      button.addEventListener('mouseup', () => {
        if (!prefersReducedMotion()) {
          gsap.to(button, { scale: 1.05, duration: 0.2 });
        }
      });

      // Focus/Blur (keyboard)
      button.addEventListener('focus', () => {
        // Outline is handled by CSS, but we can add subtle lift
        if (!prefersReducedMotion()) {
          gsap.to(button, { y: -2, duration: 0.2 });
        }
      });

      button.addEventListener('blur', () => {
        if (!prefersReducedMotion()) {
          gsap.to(button, { y: 0, duration: 0.2 });
        }
      });
    });
  } catch (error) {
    console.error('[MicroInteractions] Error initializing button interactions:', error);
  }
};

/**
 * Card Interactions
 */
const initCardInteractions = () => {
  try {
    const cards = document.querySelectorAll('.card-premium, [class*="card"]');

    cards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        if (!prefersReducedMotion()) {
          gsap.to(card, {
            y: -12,
            boxShadow: '0 20px 40px rgba(19, 196, 107, 0.15)',
            borderColor: 'rgba(19, 196, 107, 0.3)',
            duration: 0.4,
            ease: 'power2.out',
          });
          
          // Animate children
          gsap.to(card.querySelectorAll('h3, p, a'), {
            color: '#13C46B',
            duration: 0.3,
            stagger: 0.05
          });
        }
      });

      card.addEventListener('mouseleave', () => {
        if (!prefersReducedMotion()) {
          gsap.to(card, {
            y: 0,
            boxShadow: 'none',
            borderColor: 'rgba(255, 255, 255, 0.1)',
            duration: 0.4,
            ease: 'power2.out',
          });
          
          gsap.to(card.querySelectorAll('h3, p, a'), {
            color: 'inherit',
            duration: 0.3
          });
        }
      });
      
      // Focus support for cards
      card.addEventListener('focusin', () => {
        if (!prefersReducedMotion()) {
          gsap.to(card, { y: -8, duration: 0.3 });
        }
      });
      
      card.addEventListener('focusout', () => {
        if (!prefersReducedMotion()) {
          gsap.to(card, { y: 0, duration: 0.3 });
        }
      });
    });
  } catch (error) {
    console.error('[MicroInteractions] Error initializing card interactions:', error);
  }
};

/**
 * Link Interactions
 */
const initLinkInteractions = () => {
  try {
    const links = document.querySelectorAll('a:not(.btn)');

    links.forEach(link => {
      link.addEventListener('mouseenter', () => {
        gsap.to(link, { color: '#13C46B', duration: 0.2 });
      });

      link.addEventListener('mouseleave', () => {
        if (!link.classList.contains('active')) {
          gsap.to(link, { color: 'inherit', duration: 0.2 });
        }
      });
      
      link.addEventListener('focus', () => {
        gsap.to(link, { color: '#13C46B', duration: 0.2 });
      });
      
      link.addEventListener('blur', () => {
        if (!link.classList.contains('active')) {
          gsap.to(link, { color: 'inherit', duration: 0.2 });
        }
      });
    });
  } catch (error) {
    console.error('[MicroInteractions] Error initializing link interactions:', error);
  }
};

/**
 * Badge Interactions
 */
const initBadgeInteractions = () => {
  try {
    const badges = document.querySelectorAll('.badge');

    badges.forEach(badge => {
      badge.addEventListener('mouseenter', () => {
        if (!prefersReducedMotion()) {
          gsap.to(badge, {
            scale: 1.08,
            borderColor: '#13C46B',
            backgroundColor: 'rgba(19, 196, 107, 0.1)',
            color: '#13C46B',
            duration: 0.3,
          });
        }
      });

      badge.addEventListener('mouseleave', () => {
        if (!prefersReducedMotion()) {
          gsap.to(badge, {
            scale: 1,
            borderColor: 'rgba(255, 255, 255, 0.1)',
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            color: 'inherit',
            duration: 0.3,
          });
        }
      });
    });
  } catch (error) {
    console.error('[MicroInteractions] Error initializing badge interactions:', error);
  }
};

/**
 * Icon Interactions
 */
const initIconInteractions = () => {
  try {
    const icons = document.querySelectorAll('svg[class*="text-navy"], svg[class*="text-white"]');

    icons.forEach(icon => {
      const parent = icon.closest('.group, .text-center, a, button');
      if (!parent) return;

      parent.addEventListener('mouseenter', () => {
        if (!prefersReducedMotion()) {
          gsap.to(icon, { scale: 1.15, color: '#13C46B', duration: 0.3 });
        }
      });

      parent.addEventListener('mouseleave', () => {
        if (!prefersReducedMotion()) {
          gsap.to(icon, { scale: 1, color: 'inherit', duration: 0.3 });
        }
      });
    });
  } catch (error) {
    console.error('[MicroInteractions] Error initializing icon interactions:', error);
  }
};

/**
 * Input Focus Effects
 */
export const initInputFocusEffects = () => {
  try {
    const inputs = document.querySelectorAll('input, textarea, select');

    inputs.forEach(input => {
      input.addEventListener('focus', () => {
        gsap.to(input, {
          borderColor: '#13C46B',
          boxShadow: '0 0 0 3px rgba(19, 196, 107, 0.1)',
          duration: 0.2,
        });
      });

      input.addEventListener('blur', () => {
        // Detect if input is on a light background (contact form)
        const isLightBg = input.closest('#contact') !== null;
        gsap.to(input, {
          borderColor: isLightBg ? '#E5E7EB' : 'rgba(255, 255, 255, 0.1)',
          boxShadow: 'none',
          duration: 0.2,
        });
      });
    });
  } catch (error) {
    console.error('[MicroInteractions] Error initializing input focus effects:', error);
  }
};

export default {
  initAccessibleMicroInteractions,
};
