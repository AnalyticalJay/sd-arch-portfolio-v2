/**
 * Accessible Card Hover Effects Module
 * Premium interactive effects that respect motion preferences
 */

import gsap from 'gsap';
import { prefersReducedMotion } from './performance-optimization-v2';

/**
 * Initialize All Accessible Card Hover Effects
 */
export const initAccessibleCardHoverEffects = () => {
  try {
    // Company cards
    initCompanyCardHovers();
    
    // Service cards
    initServiceCardHovers();
    
    // Partner cards
    initPartnerCardHovers();
    
    // Industry cards
    initIndustryCardHovers();

    console.log('[CardHover] ✓ All accessible card hover effects initialized');
  } catch (error) {
    console.error('[CardHover] Error initializing card hover effects:', error);
  }
};

/**
 * Company Card Hovers (.card-premium)
 */
const initCompanyCardHovers = () => {
  try {
    const cards = document.querySelectorAll('.card-premium');

    cards.forEach(card => {
      const link = card.querySelector('a');
      const icon = card.querySelector('img');
      
      card.addEventListener('mouseenter', () => {
        if (!prefersReducedMotion()) {
          gsap.to(card, {
            y: -16,
            boxShadow: '0 24px 48px rgba(19, 196, 107, 0.2), 0 0 20px rgba(19, 196, 107, 0.1)',
            borderColor: 'rgba(19, 196, 107, 0.5)',
            backgroundColor: 'rgba(15, 30, 51, 0.9)',
            duration: 0.4,
            ease: 'power2.out',
          });
          
          if (icon) gsap.to(icon, { y: -4, scale: 1.05, duration: 0.4 });
          if (link) {
            const arrow = link.querySelector('svg');
            if (arrow) gsap.to(arrow, { x: 4, duration: 0.4 });
          }
        }
      });

      card.addEventListener('mouseleave', () => {
        if (!prefersReducedMotion()) {
          gsap.to(card, {
            y: 0,
            boxShadow: 'none',
            borderColor: 'rgba(255, 255, 255, 0.1)',
            backgroundColor: 'var(--color-navy-medium)',
            duration: 0.4,
            ease: 'power2.out',
          });
          
          if (icon) gsap.to(icon, { y: 0, scale: 1, duration: 0.4 });
          if (link) {
            const arrow = link.querySelector('svg');
            if (arrow) gsap.to(arrow, { x: 0, duration: 0.4 });
          }
        }
      });
      
      // Focus support
      card.addEventListener('focusin', () => {
        if (!prefersReducedMotion()) {
          gsap.to(card, { y: -8, borderColor: 'rgba(19, 196, 107, 0.5)', duration: 0.3 });
        }
      });
      
      card.addEventListener('focusout', () => {
        if (!prefersReducedMotion()) {
          gsap.to(card, { y: 0, borderColor: 'rgba(255, 255, 255, 0.1)', duration: 0.3 });
        }
      });
    });
  } catch (error) {
    console.error('[CardHover] Error initializing company card hovers:', error);
  }
};

/**
 * Service Card Hovers
 */
const initServiceCardHovers = () => {
  try {
    const cards = document.querySelectorAll('#solutions .bg-white.p-8');

    cards.forEach(card => {
      const icon = card.querySelector('svg');
      
      card.addEventListener('mouseenter', () => {
        if (!prefersReducedMotion()) {
          gsap.to(card, {
            y: -12,
            boxShadow: '0 20px 40px rgba(19, 196, 107, 0.12)',
            backgroundColor: '#F0FFFE',
            duration: 0.4,
            ease: 'power2.out',
          });
          if (icon) gsap.to(icon, { y: -6, scale: 1.12, duration: 0.4 });
        }
      });

      card.addEventListener('mouseleave', () => {
        if (!prefersReducedMotion()) {
          gsap.to(card, {
            y: 0,
            boxShadow: 'none',
            backgroundColor: '#FFFFFF',
            duration: 0.4,
            ease: 'power2.out',
          });
          if (icon) gsap.to(icon, { y: 0, scale: 1, duration: 0.4 });
        }
      });
    });
  } catch (error) {
    console.error('[CardHover] Error initializing service card hovers:', error);
  }
};

/**
 * Partner Card Hovers
 */
const initPartnerCardHovers = () => {
  try {
    const cards = document.querySelectorAll('.partner-card');

    cards.forEach(card => {
      const img = card.querySelector('img');
      
      card.addEventListener('mouseenter', () => {
        if (!prefersReducedMotion()) {
          gsap.to(card, {
            y: -12,
            boxShadow: '0 20px 40px rgba(19, 196, 107, 0.2)',
            borderColor: 'rgba(19, 196, 107, 0.4)',
            duration: 0.4,
          });
          if (img) gsap.to(img, { scale: 1.1, filter: 'grayscale(0%)', duration: 0.4 });
        }
      });

      card.addEventListener('mouseleave', () => {
        if (!prefersReducedMotion()) {
          gsap.to(card, {
            y: 0,
            boxShadow: 'none',
            borderColor: 'rgba(255, 255, 255, 0.1)',
            duration: 0.4,
          });
          if (img) gsap.to(img, { scale: 1, filter: 'grayscale(100%)', duration: 0.4 });
        }
      });
    });
  } catch (error) {
    console.error('[CardHover] Error initializing partner card hovers:', error);
  }
};

/**
 * Industry Card Hovers
 */
const initIndustryCardHovers = () => {
  try {
    const cards = document.querySelectorAll('#industries .text-center.group');

    cards.forEach(card => {
      const iconWrapper = card.querySelector('.mb-6.flex');
      const icon = card.querySelector('svg');
      const heading = card.querySelector('h4');
      
      card.addEventListener('mouseenter', () => {
        if (!prefersReducedMotion()) {
          gsap.to(card, { y: -14, duration: 0.4 });
          if (iconWrapper) gsap.to(iconWrapper, { scale: 1.15, duration: 0.4 });
          if (icon) gsap.to(icon, { rotate: 8, scale: 1.2, color: '#13C46B', duration: 0.4 });
          if (heading) gsap.to(heading, { color: '#13C46B', duration: 0.4 });
        }
      });

      card.addEventListener('mouseleave', () => {
        if (!prefersReducedMotion()) {
          gsap.to(card, { y: 0, duration: 0.4 });
          if (iconWrapper) gsap.to(iconWrapper, { scale: 1, duration: 0.4 });
          if (icon) gsap.to(icon, { rotate: 0, scale: 1, color: 'inherit', duration: 0.4 });
          if (heading) gsap.to(heading, { color: 'inherit', duration: 0.4 });
        }
      });
    });
  } catch (error) {
    console.error('[CardHover] Error initializing industry card hovers:', error);
  }
};

export default {
  initAccessibleCardHoverEffects,
};
