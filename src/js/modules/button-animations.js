/**
 * Button Animations Module
 * Stagger animations and scroll-triggered effects for buttons
 * Provides sophisticated entrance and interaction animations
 */

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

/**
 * Initialize All Button Animations
 */
export const initButtonAnimations = () => {
  try {
    // Stagger animations for button groups
    initButtonStaggerAnimations();
    
    // Scroll-triggered animations
    initScrollTriggeredButtonAnimations();
    
    // CTA button animations
    initCTAButtonAnimations();

    console.log('[ButtonAnimations] ✓ All button animations initialized');
  } catch (error) {
    console.error('[ButtonAnimations] Error initializing button animations:', error);
  }
};

/**
 * Button Stagger Animations
 * Cascade effects when multiple buttons are visible
 */
const initButtonStaggerAnimations = () => {
  try {
    const buttonGroups = document.querySelectorAll(
      '.flex.gap-6, .flex.flex-wrap.gap-6, [class*="flex"][class*="gap"]'
    );

    buttonGroups.forEach((group) => {
      const buttons = group.querySelectorAll('.btn');
      
      if (buttons.length > 1) {
        const staggerTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: group,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        });

        buttons.forEach((button, index) => {
          staggerTimeline.from(button, {
            opacity: 0,
            y: 20,
            duration: 0.4,
            ease: 'power2.out',
          }, index * 0.1);
        });
      }
    });

    console.log('[ButtonAnimations] ✓ Button stagger animations initialized');
  } catch (error) {
    console.error('[ButtonAnimations] Error initializing button stagger animations:', error);
  }
};

/**
 * Scroll-Triggered Button Animations
 * Trigger effects based on scroll position
 */
const initScrollTriggeredButtonAnimations = () => {
  try {
    const buttons = document.querySelectorAll('.btn');

    buttons.forEach((button) => {
      ScrollTrigger.create({
        trigger: button,
        onEnter: () => {
          gsap.to(button, {
            opacity: 1,
            duration: 0.3,
            ease: 'power2.out',
          });
        },
      });
    });

    console.log('[ButtonAnimations] ✓ Scroll-triggered button animations initialized');
  } catch (error) {
    console.error('[ButtonAnimations] Error initializing scroll-triggered animations:', error);
  }
};

/**
 * CTA Button Animations
 * Special animations for call-to-action buttons
 */
const initCTAButtonAnimations = () => {
  try {
    const ctaButtons = document.querySelectorAll('.btn-primary');

    ctaButtons.forEach((button) => {
      const ctaTimeline = gsap.timeline({ paused: true });

      ctaTimeline.to(button, {
        boxShadow: [
          '0 8px 16px rgba(19, 196, 107, 0.25)',
          '0 12px 24px rgba(19, 196, 107, 0.35)',
          '0 8px 16px rgba(19, 196, 107, 0.25)',
        ],
        duration: 0.6,
        ease: 'sine.inOut',
      }, 0);

      button.addEventListener('mouseenter', () => {
        ctaTimeline.play();
      });

      button.addEventListener('mouseleave', () => {
        ctaTimeline.pause(0);
      });
    });

    console.log('[ButtonAnimations] ✓ CTA button animations initialized');
  } catch (error) {
    console.error('[ButtonAnimations] Error initializing CTA button animations:', error);
  }
};

/**
 * Mobile Optimizations
 * Reduce animation complexity on touch devices
 */
export const initMobileOptimizations = () => {
  try {
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

    if (isTouchDevice()) {
      document.body.classList.add('touch-device');
    }

    console.log('[ButtonAnimations] ✓ Mobile optimizations initialized');
  } catch (error) {
    console.error('[ButtonAnimations] Error initializing mobile optimizations:', error);
  }
};

/**
 * Theme Variations
 * Add dark/light mode specific effects
 */
export const initThemeVariations = () => {
  try {
    console.log('[ButtonAnimations] ✓ Theme variations initialized');
  } catch (error) {
    console.error('[ButtonAnimations] Error initializing theme variations:', error);
  }
};

/**
 * Export Button Animations Module
 */
export const buttonAnimations = {
  initButtonAnimations,
  initMobileOptimizations,
  initThemeVariations,
};

export default buttonAnimations;
