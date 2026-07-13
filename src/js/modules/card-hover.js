/**
 * Card Hover Effects Module
 * Premium interactive effects for all card types
 * Includes: lift, shadow, border highlight, icon movement, arrow animation, glow
 */

import gsap from 'gsap';

/**
 * Initialize All Card Hover Effects
 */
export const initCardHoverEffects = () => {
  try {
    // Company cards
    initCompanyCardHovers();
    
    // Service cards
    initServiceCardHovers();
    
    // Partner cards
    initPartnerCardHovers();
    
    // Industry cards
    initIndustryCardHovers();
    
    // Update cursor feedback for all interactive cards
    updateCursorFeedback();

    console.log('[CardHover] ✓ All card hover effects initialized');
  } catch (error) {
    console.error('[CardHover] Error initializing card hover effects:', error);
  }
};

/**
 * Company Card Hovers (.card-premium)
 * Premium brand cards with full effects
 */
const initCompanyCardHovers = () => {
  try {
    const cards = document.querySelectorAll('.card-premium');

    cards.forEach(card => {
      const link = card.querySelector('a');
      const icon = card.querySelector('img');
      
      // Create hover timeline
      const hoverTimeline = gsap.timeline({ paused: true });

      // Lift effect
      hoverTimeline.to(card, {
        y: -16,
        duration: 0.4,
        ease: 'power2.out',
      }, 0);

      // Shadow transition
      hoverTimeline.to(card, {
        boxShadow: '0 24px 48px rgba(19, 196, 107, 0.2), 0 0 20px rgba(19, 196, 107, 0.1)',
        duration: 0.4,
        ease: 'power2.out',
      }, 0);

      // Border highlight
      hoverTimeline.to(card, {
        borderColor: 'rgba(19, 196, 107, 0.5)',
        duration: 0.4,
        ease: 'power2.out',
      }, 0);

      // Background enhancement
      hoverTimeline.to(card, {
        backgroundColor: 'rgba(15, 30, 51, 0.9)',
        duration: 0.4,
        ease: 'power2.out',
      }, 0);

      // Icon movement
      if (icon) {
        hoverTimeline.to(icon, {
          y: -4,
          scale: 1.05,
          duration: 0.4,
          ease: 'power2.out',
        }, 0);
      }

      // Arrow animation
      if (link) {
        const arrow = link.querySelector('svg');
        if (arrow) {
          hoverTimeline.to(arrow, {
            x: 4,
            duration: 0.4,
            ease: 'power2.out',
          }, 0);
        }
      }

      // Glow effect on ::before pseudo-element
      hoverTimeline.to(card, {
        '--glow-opacity': 1,
        duration: 0.4,
        ease: 'power2.out',
      }, 0);

      // Mouse enter
      card.addEventListener('mouseenter', () => {
        hoverTimeline.play();
      });

      // Mouse leave
      card.addEventListener('mouseleave', () => {
        hoverTimeline.reverse();
      });
    });

    console.log('[CardHover] ✓ Company card hovers initialized');
  } catch (error) {
    console.error('[CardHover] Error initializing company card hovers:', error);
  }
};

/**
 * Service Card Hovers (.bg-white.p-10)
 * Solution grid cards with interactive effects
 */
const initServiceCardHovers = () => {
  try {
    const cards = document.querySelectorAll('#solutions .bg-white.p-10');

    cards.forEach(card => {
      const icon = card.querySelector('svg');
      
      // Create hover timeline
      const hoverTimeline = gsap.timeline({ paused: true });

      // Lift effect
      hoverTimeline.to(card, {
        y: -12,
        duration: 0.4,
        ease: 'power2.out',
      }, 0);

      // Shadow transition
      hoverTimeline.to(card, {
        boxShadow: '0 20px 40px rgba(19, 196, 107, 0.12), 0 0 15px rgba(19, 196, 107, 0.08)',
        duration: 0.4,
        ease: 'power2.out',
      }, 0);

      // Background enhancement
      hoverTimeline.to(card, {
        backgroundColor: '#F0FFFE',
        duration: 0.4,
        ease: 'power2.out',
      }, 0);

      // Icon movement and scale
      if (icon) {
        hoverTimeline.to(icon, {
          y: -6,
          scale: 1.12,
          duration: 0.4,
          ease: 'power2.out',
        }, 0);
      }

      // Border effect (add subtle border on hover)
      hoverTimeline.to(card, {
        borderColor: 'rgba(19, 196, 107, 0.15)',
        borderWidth: '1px',
        duration: 0.4,
        ease: 'power2.out',
      }, 0);

      // Mouse enter
      card.addEventListener('mouseenter', () => {
        hoverTimeline.play();
      });

      // Mouse leave
      card.addEventListener('mouseleave', () => {
        hoverTimeline.reverse();
      });
    });

    console.log('[CardHover] ✓ Service card hovers initialized');
  } catch (error) {
    console.error('[CardHover] Error initializing service card hovers:', error);
  }
};

/**
 * Partner Card Hovers (.bg-white.p-6)
 * Partner logo cards with interactive effects
 */
const initPartnerCardHovers = () => {
  try {
    const cards = document.querySelectorAll('.partner-card');

    cards.forEach(card => {
      const img = card.querySelector('img');
      
      // Create hover timeline
      const hoverTimeline = gsap.timeline({ paused: true });

      // Lift effect
      hoverTimeline.to(card, {
        y: -12,
        duration: 0.4,
        ease: 'power2.out',
      }, 0);

      // Shadow & Glow transition
      hoverTimeline.to(card, {
        boxShadow: '0 20px 40px rgba(19, 196, 107, 0.2), 0 0 25px rgba(19, 196, 107, 0.15)',
        duration: 0.4,
        ease: 'power2.out',
      }, 0);

      // Border highlight
      hoverTimeline.to(card, {
        borderColor: 'rgba(19, 196, 107, 0.4)',
        borderWidth: '1px',
        duration: 0.4,
        ease: 'power2.out',
      }, 0);

      // Image scale and grayscale removal
      if (img) {
        hoverTimeline.to(img, {
          scale: 1.1,
          filter: 'grayscale(0%)',
          duration: 0.4,
          ease: 'power2.out',
        }, 0);
      }

      // Mouse enter
      card.addEventListener('mouseenter', () => {
        hoverTimeline.play();
      });

      // Mouse leave
      card.addEventListener('mouseleave', () => {
        hoverTimeline.reverse();
      });
    });

    console.log('[CardHover] ✓ Partner card hovers initialized');
  } catch (error) {
    console.error('[CardHover] Error initializing partner card hovers:', error);
  }
};

/**
 * Industry Card Hovers (.text-center.group)
 * Industry cards with interactive effects
 */
const initIndustryCardHovers = () => {
  try {
    const cards = document.querySelectorAll('#industries .text-center.group');

    cards.forEach(card => {
      const iconWrapper = card.querySelector('.mb-6.flex');
      const icon = card.querySelector('svg');
      const heading = card.querySelector('h4');
      
      // Create hover timeline
      const hoverTimeline = gsap.timeline({ paused: true });

      // Lift effect
      hoverTimeline.to(card, {
        y: -14,
        duration: 0.4,
        ease: 'power2.out',
      }, 0);

      // Icon wrapper scale and movement
      if (iconWrapper) {
        hoverTimeline.to(iconWrapper, {
          scale: 1.15,
          duration: 0.4,
          ease: 'power2.out',
        }, 0);
      }

      // Icon rotation and color
      if (icon) {
        hoverTimeline.to(icon, {
          rotate: 8,
          scale: 1.2,
          duration: 0.4,
          ease: 'power2.out',
        }, 0);
      }

      // Heading color enhancement
      if (heading) {
        hoverTimeline.to(heading, {
          color: '#13C46B',
          duration: 0.4,
          ease: 'power2.out',
        }, 0);
      }

      // Add subtle background glow effect
      hoverTimeline.to(card, {
        boxShadow: 'inset 0 0 20px rgba(19, 196, 107, 0.08), 0 0 20px rgba(19, 196, 107, 0.1)',
        duration: 0.4,
        ease: 'power2.out',
      }, 0);

      // Mouse enter
      card.addEventListener('mouseenter', () => {
        hoverTimeline.play();
      });

      // Mouse leave
      card.addEventListener('mouseleave', () => {
        hoverTimeline.reverse();
      });
    });

    console.log('[CardHover] ✓ Industry card hovers initialized');
  } catch (error) {
    console.error('[CardHover] Error initializing industry card hovers:', error);
  }
};

/**
 * Update Cursor Feedback
 * Expand cursor hover effects to all card types
 */
const updateCursorFeedback = () => {
  try {
    const cursor = document.querySelector('#custom-cursor');
    
    if (!cursor) return;

    // All interactive card selectors
    const allCards = document.querySelectorAll(
      '.card-premium, ' +
      '#solutions .bg-white.p-10, ' +
      '#partners .bg-white.p-6, ' +
      '#industries .text-center.group'
    );

    allCards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        gsap.to(cursor, {
          width: '32px',
          height: '32px',
          borderWidth: '2px',
          boxShadow: '0 0 15px rgba(19, 196, 107, 0.6)',
          duration: 0.2,
          ease: 'power2.out',
        });
      });

      card.addEventListener('mouseleave', () => {
        gsap.to(cursor, {
          width: '20px',
          height: '20px',
          borderWidth: '2px',
          boxShadow: '0 0 10px rgba(19, 196, 107, 0.5)',
          duration: 0.2,
          ease: 'power2.out',
        });
      });
    });

    console.log('[CardHover] ✓ Cursor feedback updated for all cards');
  } catch (error) {
    console.error('[CardHover] Error updating cursor feedback:', error);
  }
};

/**
 * Export Card Hover Module
 */
export const cardHover = {
  initCardHoverEffects,
};

export default cardHover;
