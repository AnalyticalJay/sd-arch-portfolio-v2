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
      animations.fadeIn(el);
    });

    // Fade In Up animations
    const fadeUpElements = document.querySelectorAll('[data-animation="fade-in-up"]');
    fadeUpElements.forEach((el) => {
      animations.fadeInUp(el);
    });

    // Slide In Left animations
    const slideLeftElements = document.querySelectorAll('[data-animation="slide-in-left"]');
    slideLeftElements.forEach((el) => {
      animations.slideInLeft(el);
    });

    // Slide In Right animations
    const slideRightElements = document.querySelectorAll('[data-animation="slide-in-right"]');
    slideRightElements.forEach((el) => {
      animations.slideInRight(el);
    });

    // Scale In animations
    const scaleElements = document.querySelectorAll('[data-animation="scale-in"]');
    scaleElements.forEach((el) => {
      animations.scaleIn(el);
    });
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
    if (!lenis) {
      console.warn('[Main] Lenis initialization failed, continuing without smooth scroll');
    }

    // Initialize Navigation
    initNavigation();

    // Initialize Global Animations
    initGlobalAnimations();

    // Refresh ScrollTriggers after all elements are initialized
    refreshScrollTriggers();

    // Log successful initialization
    console.log('[Main] ✓ OpenV Group Foundation Initialized');
  } catch (error) {
    console.error('[Main] Error during initialization:', error);
  }
};

/**
 * Cleanup on Page Unload
 * Ensures proper cleanup of resources
 */
const cleanupOnUnload = () => {
  try {
    destroyScroll();
    animations.killAllAnimations();
  } catch (error) {
    console.error('[Main] Error during cleanup:', error);
  }
};

/**
 * Handle DOM Content Loaded
 */
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeApp);
} else {
  // DOM is already loaded
  initializeApp();
}

/**
 * Handle Page Unload
 */
window.addEventListener('beforeunload', cleanupOnUnload);

/**
 * Handle Visibility Change
 * Pause animations when tab is hidden
 */
document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    // Pause animations when tab is hidden
    animations.killAllAnimations();
  } else {
    // Resume when tab is visible
    refreshScrollTriggers();
  }
});

// Export for external use if needed
export { initializeApp, cleanupOnUnload };
