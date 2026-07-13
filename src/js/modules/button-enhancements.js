/**
 * Button Enhancements Module
 * Premium tactile button interactions with ripple, icon slide, and shadow transitions
 * Provides sophisticated visual feedback for all button types
 */

import gsap from 'gsap';

/**
 * Initialize All Button Enhancements
 */
export const initButtonEnhancements = () => {
  try {
    // Enhanced button hover and active states
    initEnhancedButtonInteractions();
    
    // Ripple effect on click
    initRippleEffects();
    
    // Icon sliding animations
    initIconSliding();
    
    // Shadow transitions
    initShadowTransitions();
    
    // Accessibility improvements
    initAccessibilityEnhancements();

    console.log('[ButtonEnhancements] ✓ All button enhancements initialized');
  } catch (error) {
    console.error('[ButtonEnhancements] Error initializing button enhancements:', error);
  }
};

/**
 * Enhanced Button Interactions
 * Premium hover, active, and focus states
 */
const initEnhancedButtonInteractions = () => {
  try {
    const buttons = document.querySelectorAll('.btn');

    buttons.forEach(button => {
      // Create button animation timeline
      const hoverTimeline = gsap.timeline({ paused: true });

      // Get button type for color-specific effects
      const isPrimary = button.classList.contains('btn-primary');
      const isSecondary = button.classList.contains('btn-secondary');
      const isOutline = button.classList.contains('btn-outline');

      // Determine shadow color based on button type
      let shadowColor = 'rgba(0, 0, 0, 0.15)';
      if (isPrimary) shadowColor = 'rgba(19, 196, 107, 0.35)';
      if (isSecondary) shadowColor = 'rgba(27, 142, 255, 0.35)';
      if (isOutline) shadowColor = 'rgba(19, 196, 107, 0.2)';

      // Hover lift effect
      hoverTimeline.to(button, {
        y: -2,
        duration: 0.3,
        ease: 'power2.out',
      }, 0);

      // Hover shadow transition
      hoverTimeline.to(button, {
        boxShadow: `0 12px 24px ${shadowColor}`,
        duration: 0.3,
        ease: 'power2.out',
      }, 0);

      // Mouse enter
      button.addEventListener('mouseenter', () => {
        if (!button.disabled) {
          hoverTimeline.play();
        }
      });

      // Mouse leave
      button.addEventListener('mouseleave', () => {
        hoverTimeline.reverse();
      });

      // Mouse down (press effect)
      button.addEventListener('mousedown', (e) => {
        if (!button.disabled) {
          gsap.to(button, {
            scale: 0.98,
            y: 0,
            duration: 0.1,
            ease: 'power2.out',
          });
          
          // Trigger ripple
          createRipple(button, e);
        }
      });

      // Mouse up (release effect)
      button.addEventListener('mouseup', () => {
        if (!button.disabled) {
          gsap.to(button, {
            scale: 1,
            y: -2,
            duration: 0.2,
            ease: 'power2.out',
          });
        }
      });
    });

    console.log('[ButtonEnhancements] ✓ Enhanced button interactions initialized');
  } catch (error) {
    console.error('[ButtonEnhancements] Error initializing enhanced button interactions:', error);
  }
};

/**
 * Create Ripple Effect
 * Animated ripple on button click
 */
const createRipple = (button, event) => {
  try {
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;

    const ripple = document.createElement('span');
    ripple.style.position = 'absolute';
    ripple.style.width = '0';
    ripple.style.height = '0';
    ripple.style.borderRadius = '50%';
    ripple.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
    ripple.style.pointerEvents = 'none';
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    ripple.style.transform = 'translate(-50%, -50%)';

    button.appendChild(ripple);

    // Animate ripple
    gsap.to(ripple, {
      width: size * 2,
      height: size * 2,
      opacity: 0,
      duration: 0.6,
      ease: 'power2.out',
      onComplete: () => {
        ripple.remove();
      },
    });
  } catch (error) {
    console.error('[ButtonEnhancements] Error creating ripple:', error);
  }
};

/**
 * Initialize Ripple Effects
 * Add ripple effect to all buttons
 */
const initRippleEffects = () => {
  try {
    const buttons = document.querySelectorAll('.btn');

    buttons.forEach(button => {
      button.addEventListener('click', (e) => {
        if (e.clientX === 0 && e.clientY === 0) {
          const rect = button.getBoundingClientRect();
          const centerEvent = {
            clientX: rect.left + rect.width / 2,
            clientY: rect.top + rect.height / 2,
          };
          createRipple(button, centerEvent);
        }
      });
    });

    console.log('[ButtonEnhancements] ✓ Ripple effects initialized');
  } catch (error) {
    console.error('[ButtonEnhancements] Error initializing ripple effects:', error);
  }
};

/**
 * Icon Sliding Animations
 * Animate icons inside buttons on hover
 */
const initIconSliding = () => {
  try {
    const buttons = document.querySelectorAll('.btn');

    buttons.forEach(button => {
      const icons = button.querySelectorAll('svg');
      
      if (icons.length === 0) return;

      icons.forEach(icon => {
        const iconTimeline = gsap.timeline({ paused: true });

        iconTimeline.to(icon, {
          x: 4,
          duration: 0.3,
          ease: 'power2.out',
        }, 0);

        button.addEventListener('mouseenter', () => {
          iconTimeline.play();
        });

        button.addEventListener('mouseleave', () => {
          iconTimeline.reverse();
        });
      });
    });

    console.log('[ButtonEnhancements] ✓ Icon sliding animations initialized');
  } catch (error) {
    console.error('[ButtonEnhancements] Error initializing icon sliding:', error);
  }
};

/**
 * Shadow Transitions
 * Smooth shadow transitions on button states
 */
const initShadowTransitions = () => {
  try {
    const buttons = document.querySelectorAll('.btn');

    buttons.forEach(button => {
      // Handled in enhanced interactions
    });

    console.log('[ButtonEnhancements] ✓ Shadow transitions initialized');
  } catch (error) {
    console.error('[ButtonEnhancements] Error initializing shadow transitions:', error);
  }
};

/**
 * Accessibility Enhancements
 * Improve keyboard navigation and screen reader support
 */
const initAccessibilityEnhancements = () => {
  try {
    const buttons = document.querySelectorAll('.btn');

    buttons.forEach(button => {
      if (!button.hasAttribute('role') && button.tagName !== 'BUTTON') {
        button.setAttribute('role', 'button');
      }

      if (button.tagName === 'A') {
        button.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            button.click();
          }
        });
      }
    });

    console.log('[ButtonEnhancements] ✓ Accessibility enhancements initialized');
  } catch (error) {
    console.error('[ButtonEnhancements] Error initializing accessibility enhancements:', error);
  }
};

/**
 * Disable Animations for Reduced Motion
 * Respect user's motion preferences
 */
export const handleReducedMotion = () => {
  try {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      document.body.classList.add('reduce-motion');
    }
  } catch (error) {
    console.error('[ButtonEnhancements] Error handling reduced motion:', error);
  }
};

/**
 * Export Button Enhancements Module
 */
export const buttonEnhancements = {
  initButtonEnhancements,
  handleReducedMotion,
};

export default buttonEnhancements;
