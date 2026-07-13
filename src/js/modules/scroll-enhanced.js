/**
 * Enhanced Scroll Module
 * Premium Lenis smooth scroll configuration with GSAP integration
 * Provides high-performance, accessible scroll experience
 */

import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

let lenisInstance = null;
let rafId = null;
let isScrolling = false;
let scrollTimeout = null;

/**
 * Initialize Enhanced Lenis Smooth Scroll
 * Premium configuration for enterprise feel
 * @returns {Lenis} Lenis instance
 */
export const initEnhancedScroll = () => {
  // Prevent multiple instances
  if (lenisInstance) {
    console.warn('[EnhancedScroll] Lenis already initialized');
    return lenisInstance;
  }

  try {
    lenisInstance = new Lenis({
      // Premium easing curve for smooth, elegant feel
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      
      // Scroll behavior
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      
      // Smooth scrolling
      smoothWheel: true,
      wheelMultiplier: 1,
      
      // Touch behavior
      smoothTouch: false,
      touchMultiplier: 2,
      
      // Infinite scroll
      infinite: false,
    });

    // Start animation loop
    startEnhancedAnimationLoop();
    
    // Sync with GSAP ScrollTrigger
    lenisInstance.on('scroll', ScrollTrigger.update);
    
    // Track scroll state
    lenisInstance.on('scroll', () => {
      isScrolling = true;
      
      // Clear existing timeout
      if (scrollTimeout) clearTimeout(scrollTimeout);
      
      // Set timeout to detect scroll end
      scrollTimeout = setTimeout(() => {
        isScrolling = false;
      }, 150);
    });

    console.log('[EnhancedScroll] ✓ Premium Lenis initialized');
    return lenisInstance;
  } catch (error) {
    console.error('[EnhancedScroll] Failed to initialize Lenis:', error);
    return null;
  }
};

/**
 * Start Enhanced Animation Loop
 * Manages requestAnimationFrame loop with GSAP sync
 */
const startEnhancedAnimationLoop = () => {
  const raf = (time) => {
    if (lenisInstance) {
      lenisInstance.raf(time);
      ScrollTrigger.update();
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
 * Is Currently Scrolling
 * Check if page is actively scrolling
 * @returns {boolean} True if scrolling
 */
export const isCurrentlyScrolling = () => {
  return isScrolling;
};

/**
 * Smooth Scroll To
 * Smooth scroll to a specific target with GSAP
 * @param {string|Element|number} target - CSS selector, DOM element, or pixel value
 * @param {Object} options - Scroll options
 */
export const smoothScrollTo = (target, options = {}) => {
  if (!lenisInstance) {
    console.warn('[EnhancedScroll] Lenis not initialized');
    return;
  }

  try {
    const defaultOptions = {
      duration: 1.2,
      ...options,
    };

    lenisInstance.scrollTo(target, defaultOptions);
  } catch (error) {
    console.error('[EnhancedScroll] Error scrolling to target:', error);
  }
};

/**
 * Scroll To Top
 * Smooth scroll to top of page
 * @param {Object} options - Scroll options
 */
export const scrollToTop = (options = {}) => {
  smoothScrollTo(0, {
    duration: 1.5,
    ...options,
  });
};

/**
 * Scroll To Element
 * Smooth scroll to specific element with offset
 * @param {Element|string} element - DOM element or selector
 * @param {number} offset - Offset from top in pixels
 * @param {Object} options - Scroll options
 */
export const scrollToElement = (element, offset = 80, options = {}) => {
  const target = typeof element === 'string' 
    ? document.querySelector(element) 
    : element;

  if (!target) {
    console.warn('[EnhancedScroll] Target element not found');
    return;
  }

  const targetPosition = target.getBoundingClientRect().top + window.scrollY - offset;
  
  smoothScrollTo(targetPosition, {
    duration: 1.2,
    ...options,
  });
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
export const destroyEnhancedScroll = () => {
  if (lenisInstance) {
    lenisInstance.destroy();
    lenisInstance = null;
  }

  stopAnimationLoop();
  
  if (scrollTimeout) {
    clearTimeout(scrollTimeout);
    scrollTimeout = null;
  }
};

/**
 * Refresh Scroll
 * Recalculate scroll dimensions (call after DOM changes)
 */
export const refreshEnhancedScroll = () => {
  if (lenisInstance) {
    lenisInstance.resize();
  }
  
  ScrollTrigger.refresh();
};

/**
 * Get Scroll Position
 * Get current scroll position
 * @returns {number} Current scroll Y position
 */
export const getScrollPosition = () => {
  return window.scrollY || window.pageYOffset;
};

/**
 * Get Scroll Progress
 * Get scroll progress as percentage (0-1)
 * @returns {number} Scroll progress percentage
 */
export const getScrollProgress = () => {
  const scrollTop = getScrollPosition();
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  return docHeight > 0 ? scrollTop / docHeight : 0;
};

/**
 * On Scroll End
 * Execute callback when scroll ends
 * @param {Function} callback - Callback function
 * @param {number} delay - Delay before considering scroll ended (ms)
 */
export const onScrollEnd = (callback, delay = 150) => {
  let scrollTimeout;

  const handleScroll = () => {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
      callback();
    }, delay);
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  
  return () => {
    window.removeEventListener('scroll', handleScroll);
    clearTimeout(scrollTimeout);
  };
};

/**
 * Disable Scroll
 * Temporarily disable scrolling
 */
export const disableScroll = () => {
  if (lenisInstance) {
    lenisInstance.stop();
  }
  document.body.style.overflow = 'hidden';
};

/**
 * Enable Scroll
 * Re-enable scrolling
 */
export const enableScroll = () => {
  if (lenisInstance) {
    lenisInstance.start();
  }
  document.body.style.overflow = '';
};

/**
 * Enhanced Scroll Export Object
 */
export const enhancedScroll = {
  initEnhancedScroll,
  getLenisInstance,
  isCurrentlyScrolling,
  smoothScrollTo,
  scrollToTop,
  scrollToElement,
  pauseScroll,
  resumeScroll,
  destroyEnhancedScroll,
  refreshEnhancedScroll,
  getScrollPosition,
  getScrollProgress,
  onScrollEnd,
  disableScroll,
  enableScroll,
};

export default enhancedScroll;
