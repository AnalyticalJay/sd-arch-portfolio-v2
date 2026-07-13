/**
 * Micro-Interactions Module
 * Premium button, card, and cursor interactions
 * Provides sophisticated visual feedback and polish
 */

import gsap from 'gsap';

/**
 * Initialize All Micro-Interactions
 * Sets up button, card, and other interactive elements
 */
export const initMicroInteractions = () => {
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

    console.log('[MicroInteractions] ✓ All micro-interactions initialized');
  } catch (error) {
    console.error('[MicroInteractions] Error initializing micro-interactions:', error);
  }
};

/**
 * Button Interactions
 * Premium hover, click, and focus effects for buttons
 */
const initButtonInteractions = () => {
  try {
    const buttons = document.querySelectorAll('.btn');

    buttons.forEach(button => {
      // Create button animation timeline
      const buttonTimeline = gsap.timeline({ paused: true });

      // Hover scale animation
      buttonTimeline.to(button, {
        scale: 1.05,
        duration: 0.3,
        ease: 'power2.out',
      }, 0);

      // Hover shadow animation
      buttonTimeline.to(button, {
        boxShadow: '0 12px 24px rgba(19, 196, 107, 0.2)',
        duration: 0.3,
        ease: 'power2.out',
      }, 0);

      // Mouse enter
      button.addEventListener('mouseenter', () => {
        buttonTimeline.play();
      });

      // Mouse leave
      button.addEventListener('mouseleave', () => {
        buttonTimeline.reverse();
      });

      // Mouse down (press effect)
      button.addEventListener('mousedown', () => {
        gsap.to(button, {
          scale: 0.98,
          duration: 0.1,
          ease: 'power2.out',
        });
      });

      // Mouse up (release effect)
      button.addEventListener('mouseup', () => {
        gsap.to(button, {
          scale: 1.05,
          duration: 0.2,
          ease: 'power2.out',
        });
      });

      // Focus effect
      button.addEventListener('focus', () => {
        gsap.to(button, {
          outline: '2px solid #13C46B',
          outlineOffset: '2px',
          duration: 0.2,
          ease: 'power2.out',
        });
      });

      // Blur effect
      button.addEventListener('blur', () => {
        gsap.to(button, {
          outline: 'none',
          outlineOffset: '0px',
          duration: 0.2,
          ease: 'power2.out',
        });
      });
    });

    console.log('[MicroInteractions] ✓ Button interactions initialized');
  } catch (error) {
    console.error('[MicroInteractions] Error initializing button interactions:', error);
  }
};

/**
 * Card Interactions
 * Premium hover effects for card elements
 */
const initCardInteractions = () => {
  try {
    const cards = document.querySelectorAll('.card-premium, [class*="card"]');

    cards.forEach(card => {
      // Create card animation timeline
      const cardTimeline = gsap.timeline({ paused: true });

      // Hover lift effect
      cardTimeline.to(card, {
        y: -12,
        duration: 0.4,
        ease: 'power2.out',
      }, 0);

      // Hover shadow effect
      cardTimeline.to(card, {
        boxShadow: '0 20px 40px rgba(19, 196, 107, 0.15)',
        duration: 0.4,
        ease: 'power2.out',
      }, 0);

      // Hover border effect
      if (card.classList.contains('card-premium')) {
        cardTimeline.to(card, {
          borderColor: 'rgba(19, 196, 107, 0.3)',
          duration: 0.4,
          ease: 'power2.out',
        }, 0);
      }

      // Mouse enter
      card.addEventListener('mouseenter', () => {
        cardTimeline.play();
      });

      // Mouse leave
      card.addEventListener('mouseleave', () => {
        cardTimeline.reverse();
      });

      // Animate child elements on hover
      const childElements = card.querySelectorAll('h3, p, a');
      card.addEventListener('mouseenter', () => {
        childElements.forEach((child, index) => {
          gsap.to(child, {
            color: '#13C46B',
            duration: 0.3,
            ease: 'power2.out',
            delay: index * 0.05,
          });
        });
      });

      card.addEventListener('mouseleave', () => {
        childElements.forEach((child) => {
          gsap.to(child, {
            color: 'inherit',
            duration: 0.3,
            ease: 'power2.out',
          });
        });
      });
    });

    console.log('[MicroInteractions] ✓ Card interactions initialized');
  } catch (error) {
    console.error('[MicroInteractions] Error initializing card interactions:', error);
  }
};

/**
 * Link Interactions
 * Premium hover effects for text links
 */
const initLinkInteractions = () => {
  try {
    const links = document.querySelectorAll('a:not(.btn)');

    links.forEach(link => {
      // Skip anchor links with no text
      if (!link.textContent.trim()) return;

      link.addEventListener('mouseenter', () => {
        gsap.to(link, {
          color: '#13C46B',
          duration: 0.2,
          ease: 'power2.out',
        });
      });

      link.addEventListener('mouseleave', () => {
        gsap.to(link, {
          color: 'inherit',
          duration: 0.2,
          ease: 'power2.out',
        });
      });
    });

    console.log('[MicroInteractions] ✓ Link interactions initialized');
  } catch (error) {
    console.error('[MicroInteractions] Error initializing link interactions:', error);
  }
};

/**
 * Badge Interactions
 * Premium hover effects for badge elements
 */
const initBadgeInteractions = () => {
  try {
    const badges = document.querySelectorAll('.badge');

    badges.forEach(badge => {
      // Create badge animation timeline
      const badgeTimeline = gsap.timeline({ paused: true });

      // Hover scale
      badgeTimeline.to(badge, {
        scale: 1.08,
        duration: 0.3,
        ease: 'power2.out',
      }, 0);

      // Hover color
      badgeTimeline.to(badge, {
        borderColor: '#13C46B',
        backgroundColor: 'rgba(19, 196, 107, 0.1)',
        color: '#13C46B',
        duration: 0.3,
        ease: 'power2.out',
      }, 0);

      // Mouse enter
      badge.addEventListener('mouseenter', () => {
        badgeTimeline.play();
      });

      // Mouse leave
      badge.addEventListener('mouseleave', () => {
        badgeTimeline.reverse();
      });
    });

    console.log('[MicroInteractions] ✓ Badge interactions initialized');
  } catch (error) {
    console.error('[MicroInteractions] Error initializing badge interactions:', error);
  }
};

/**
 * Icon Interactions
 * Premium hover effects for icon elements
 */
const initIconInteractions = () => {
  try {
    const icons = document.querySelectorAll('svg[class*="text-navy"], svg[class*="text-white"]');

    icons.forEach(icon => {
      const parent = icon.closest('.group, .text-center, a, button');
      
      if (!parent) return;

      // Create icon animation timeline
      const iconTimeline = gsap.timeline({ paused: true });

      // Hover scale
      iconTimeline.to(icon, {
        scale: 1.15,
        duration: 0.3,
        ease: 'power2.out',
      }, 0);

      // Hover color
      iconTimeline.to(icon, {
        color: '#13C46B',
        duration: 0.3,
        ease: 'power2.out',
      }, 0);

      // Parent mouse enter
      parent.addEventListener('mouseenter', () => {
        iconTimeline.play();
      });

      // Parent mouse leave
      parent.addEventListener('mouseleave', () => {
        iconTimeline.reverse();
      });
    });

    console.log('[MicroInteractions] ✓ Icon interactions initialized');
  } catch (error) {
    console.error('[MicroInteractions] Error initializing icon interactions:', error);
  }
};

/**
 * Text Input Focus Effect
 * Premium focus effects for form inputs
 */
export const initInputFocusEffects = () => {
  try {
    const inputs = document.querySelectorAll('input, textarea, select');

    inputs.forEach(input => {
      // Focus effect
      input.addEventListener('focus', () => {
        gsap.to(input, {
          borderColor: '#13C46B',
          boxShadow: '0 0 0 3px rgba(19, 196, 107, 0.1)',
          duration: 0.2,
          ease: 'power2.out',
        });
      });

      // Blur effect
      input.addEventListener('blur', () => {
        gsap.to(input, {
          borderColor: 'rgba(255, 255, 255, 0.1)',
          boxShadow: 'none',
          duration: 0.2,
          ease: 'power2.out',
        });
      });
    });

    console.log('[MicroInteractions] ✓ Input focus effects initialized');
  } catch (error) {
    console.error('[MicroInteractions] Error initializing input focus effects:', error);
  }
};

/**
 * Ripple Effect
 * Create ripple effect on click
 * @param {Element} element - Element to add ripple to
 */
export const addRippleEffect = (element) => {
  element.addEventListener('click', (e) => {
    const rect = element.getBoundingClientRect();
    const ripple = document.createElement('span');
    
    ripple.style.position = 'absolute';
    ripple.style.left = `${e.clientX - rect.left}px`;
    ripple.style.top = `${e.clientY - rect.top}px`;
    ripple.style.width = '0';
    ripple.style.height = '0';
    ripple.style.borderRadius = '50%';
    ripple.style.backgroundColor = 'rgba(19, 196, 107, 0.5)';
    ripple.style.pointerEvents = 'none';
    
    element.style.position = 'relative';
    element.style.overflow = 'hidden';
    element.appendChild(ripple);

    gsap.to(ripple, {
      width: 300,
      height: 300,
      opacity: 0,
      duration: 0.6,
      ease: 'power2.out',
      onComplete: () => {
        ripple.remove();
      },
    });
  });
};

/**
 * Tooltip Hover Effect
 * Premium tooltip animations
 */
export const initTooltipEffects = () => {
  try {
    const tooltips = document.querySelectorAll('[title], [data-tooltip]');

    tooltips.forEach(element => {
      element.addEventListener('mouseenter', () => {
        const tooltip = element.getAttribute('title') || element.getAttribute('data-tooltip');
        
        if (!tooltip) return;

        const tooltipEl = document.createElement('div');
        tooltipEl.textContent = tooltip;
        tooltipEl.style.position = 'absolute';
        tooltipEl.style.backgroundColor = '#13C46B';
        tooltipEl.style.color = '#07111C';
        tooltipEl.style.padding = '8px 12px';
        tooltipEl.style.borderRadius = '6px';
        tooltipEl.style.fontSize = '12px';
        tooltipEl.style.fontWeight = 'bold';
        tooltipEl.style.pointerEvents = 'none';
        tooltipEl.style.zIndex = '1000';
        tooltipEl.style.opacity = '0';
        tooltipEl.style.whiteSpace = 'nowrap';

        document.body.appendChild(tooltipEl);

        const rect = element.getBoundingClientRect();
        tooltipEl.style.left = `${rect.left + rect.width / 2 - tooltipEl.offsetWidth / 2}px`;
        tooltipEl.style.top = `${rect.top - tooltipEl.offsetHeight - 8}px`;

        gsap.to(tooltipEl, {
          opacity: 1,
          y: -5,
          duration: 0.2,
          ease: 'power2.out',
        });

        element.addEventListener('mouseleave', () => {
          gsap.to(tooltipEl, {
            opacity: 0,
            y: 0,
            duration: 0.2,
            ease: 'power2.out',
            onComplete: () => {
              tooltipEl.remove();
            },
          });
        });
      });
    });

    console.log('[MicroInteractions] ✓ Tooltip effects initialized');
  } catch (error) {
    console.error('[MicroInteractions] Error initializing tooltip effects:', error);
  }
};

/**
 * Micro-Interactions Export Object
 */
export const microInteractions = {
  initMicroInteractions,
  initInputFocusEffects,
  addRippleEffect,
  initTooltipEffects,
};

export default microInteractions;
