/**
 * Scroll Module
 * Manages smooth scrolling with Lenis
 * Provides high-performance, accessible scroll experience
 */

import Lenis from 'lenis';

let lenisInstance = null;
let rafId = null;

/**
 * Initialize Lenis Smooth Scroll
 * Creates and starts the Lenis smooth scroll instance
 * @returns {Lenis} Lenis instance
 */
export const initScroll = () => {
  // Prevent multiple instances
  if (lenisInstance) {
    console.warn('[Scroll] Lenis already initialized');
    return lenisInstance;
  }

  try {
    lenisInstance = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    // Start the animation loop
    startAnimationLoop();

    return lenisInstance;
  } catch (error) {
    console.error('[Scroll] Failed to initialize Lenis:', error);
    return null;
  }
};

/**
 * Start Animation Loop
 * Manages the requestAnimationFrame loop for Lenis
 */
const startAnimationLoop = () => {
  const raf = (time) => {
    if (lenisInstance) {
      lenisInstance.raf(time);
    }
    rafId = requestAnimationFrame(raf);
  };

  rafId = requestAnimationFrame(raf);
};

/**
 * Stop Animation Loop
 * Cancels the requestAnimationFrame loop
 */
const stopAnimationLoop = () => {
  if (rafId) {
    cancelAnimationFrame(rafId);
    rafId = null;
  }
};

/**
 * Get Lenis Instance
 * Returns the current Lenis instance
 * @returns {Lenis|null} Lenis instance or null
 */
export const getLenisInstance = () => {
  return lenisInstance;
};

/**
 * Scroll To
 * Smooth scroll to a specific target
 * @param {string|Element|number} target - CSS selector, DOM element, or pixel value
 * @param {Object} options - Scroll options
 */
export const scrollTo = (target, options = {}) => {
  if (!lenisInstance) {
    console.warn('[Scroll] Lenis not initialized');
    return;
  }

  try {
    lenisInstance.scrollTo(target, options);
  } catch (error) {
    console.error('[Scroll] Error scrolling to target:', error);
  }
};

/**
 * Scroll To Top
 * Smooth scroll to top of page
 */
export const scrollToTop = () => {
  scrollTo(0, { duration: 1.5 });
};

/**
 * Pause Scroll
 * Temporarily pause smooth scrolling
 */
export const pauseScroll = () => {
  if (lenisInstance) {
    lenisInstance.stop();
  }
};

/**
 * Resume Scroll
 * Resume smooth scrolling after pause
 */
export const resumeScroll = () => {
  if (lenisInstance) {
    lenisInstance.start();
  }
};

/**
 * Destroy Scroll
 * Clean up Lenis instance and animation loop
 */
export const destroyScroll = () => {
  if (lenisInstance) {
    lenisInstance.destroy();
    lenisInstance = null;
  }

  stopAnimationLoop();
};

/**
 * Refresh Scroll
 * Recalculate scroll dimensions (call after DOM changes)
 */
export const refreshScroll = () => {
  if (lenisInstance) {
    lenisInstance.resize();
  }
};

export default {
  initScroll,
  getLenisInstance,
  scrollTo,
  scrollToTop,
  pauseScroll,
  resumeScroll,
  destroyScroll,
  refreshScroll,
};
