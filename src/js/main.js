/**
 * Main Application Entry Point
 * Initializes all core modules and global animations
 */

import '../css/main.css';
import { initScroll, destroyScroll } from './modules/scroll';
import { initNavigation } from './modules/navigation';
import { animations, refreshScrollTriggers } from './modules/animations';

/**
 * Initialize Global Animations
 * Applies animations to elements with data-animation attributes
 */
const initGlobalAnimations = () => {
  try {
    // Fade In animations
    const fadeElements = document.querySelectorAll('[data-animation="fade-in"]');
    fadeElements.forEach((el) => {
      animations.fadeIn(el, {
        delay: parseFloat(el.dataset.delay) || 0
      });
    });

    // Fade In Up animations
    const fadeUpElements = document.querySelectorAll('[data-animation="fade-in-up"]');
    fadeUpElements.forEach((el) => {
      animations.fadeInUp(el, {
        delay: parseFloat(el.dataset.delay) || 0
      });
    });

    // Stats Counter Animation
    const statsNumbers = document.querySelectorAll('.text-3xl.font-manrope');
    statsNumbers.forEach((stat) => {
      const targetValue = parseInt(stat.textContent);
      if (!isNaN(targetValue)) {
        animations.animateCounter(stat, targetValue);
      }
    });

    // Add Hover Effects to Premium Cards
    animations.addHoverScale('.card-premium', 1.02);
    
  } catch (error) {
    console.error('[Main] Error initializing global animations:', error);
  }
};

/**
 * Initialize Application
 * Runs when DOM is fully loaded
 */
const initializeApp = () => {
  try {
    // Initialize Smooth Scroll
    const lenis = initScroll();
    
    // Initialize Navigation
    initNavigation();

    // Initialize Global Animations
    initGlobalAnimations();

    // Refresh ScrollTriggers after all elements are initialized
    refreshScrollTriggers();

    console.log('[Main] ✓ OpenV Group Production Ready');
  } catch (error) {
    console.error('[Main] Error during initialization:', error);
  }
};

/**
 * Cleanup on Page Unload
 */
const cleanupOnUnload = () => {
  try {
    destroyScroll();
    animations.killAllAnimations();
  } catch (error) {
    console.error('[Main] Error during cleanup:', error);
  }
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeApp);
} else {
  initializeApp();
}

window.addEventListener('beforeunload', cleanupOnUnload);

export { initializeApp, cleanupOnUnload };
