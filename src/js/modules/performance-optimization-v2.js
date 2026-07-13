/**
 * Performance Optimization Module v2
 * Enhanced reduced-motion support and performance tuning
 * Respects user motion preferences and provides graceful degradation
 */

import gsap from 'gsap';

/**
 * Check if user prefers reduced motion
 * @returns {boolean} True if user has prefers-reduced-motion enabled
 */
export const prefersReducedMotion = () => {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

/**
 * Check if user is on a low-end device
 * @returns {boolean} True if device has limited resources
 */
const isLowEndDevice = () => {
  try {
    // Check for low memory
    if (navigator.deviceMemory && navigator.deviceMemory < 4) {
      return true;
    }
    
    // Check for slow connection
    const connection = navigator.connection;
    if (connection && connection.effectiveType === '4g' === false) {
      return true;
    }
    
    return false;
  } catch (error) {
    return false;
  }
};

/**
 * Optimize for Reduced Motion
 * Disable animations entirely for users who prefer reduced motion
 * This is the CORRECT approach: respect user intent, not just slow down
 */
const optimizeForReducedMotion = () => {
  try {
    const hasReducedMotion = prefersReducedMotion();

    if (hasReducedMotion) {
      // Add class to body for CSS-based animation adjustments
      document.body.classList.add('reduce-motion');
      
      // Disable GSAP animations globally
      // Instead of slowing down, we disable them entirely
      gsap.globalTimeline.timeScale(0);
      
      // Store preference for later use
      window.REDUCE_MOTION = true;

      console.log('[Performance] ✓ Reduced motion preferences applied');
    } else {
      window.REDUCE_MOTION = false;
    }

    // Listen for changes in motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    const handleMotionChange = (e) => {
      if (e.matches) {
        // User enabled reduced motion
        document.body.classList.add('reduce-motion');
        gsap.globalTimeline.timeScale(0);
        window.REDUCE_MOTION = true;
        console.log('[Performance] ✓ Reduced motion enabled');
      } else {
        // User disabled reduced motion
        document.body.classList.remove('reduce-motion');
        gsap.globalTimeline.timeScale(1);
        window.REDUCE_MOTION = false;
        console.log('[Performance] ✓ Reduced motion disabled');
      }
    };

    // Modern browsers use addEventListener
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleMotionChange);
    } else if (mediaQuery.addListener) {
      // Fallback for older browsers
      mediaQuery.addListener(handleMotionChange);
    }
  } catch (error) {
    console.error('[Performance] Error optimizing for reduced motion:', error);
  }
};

/**
 * Optimize for Low-End Devices
 * Disable non-essential animations on devices with limited resources
 */
const optimizeForLowEndDevices = () => {
  try {
    if (isLowEndDevice()) {
      document.body.classList.add('low-end-device');
      
      // Pause all animations on low-end devices
      gsap.globalTimeline.pause();
      
      console.log('[Performance] ✓ Low-end device optimizations applied');
    }
  } catch (error) {
    console.error('[Performance] Error optimizing for low-end devices:', error);
  }
};

/**
 * Optimize Images
 * Lazy load images and use appropriate formats
 */
const optimizeImages = () => {
  try {
    // Add loading="lazy" to images without it
    const images = document.querySelectorAll('img:not([loading])');
    images.forEach(img => {
      // Skip hero images and critical above-the-fold content
      if (!img.classList.contains('hero-image') && !img.closest('[data-critical]')) {
        img.loading = 'lazy';
      }
    });

    console.log('[Performance] ✓ Image optimization applied');
  } catch (error) {
    console.error('[Performance] Error optimizing images:', error);
  }
};

/**
 * Optimize Fonts
 * Improve font loading performance
 */
const optimizeFonts = () => {
  try {
    // Add font-display: swap to prevent FOUT
    const fontLinks = document.querySelectorAll('link[rel="stylesheet"][href*="fonts"]');
    fontLinks.forEach(link => {
      if (!link.href.includes('display=swap')) {
        link.href += (link.href.includes('?') ? '&' : '?') + 'display=swap';
      }
    });

    console.log('[Performance] ✓ Font optimization applied');
  } catch (error) {
    console.error('[Performance] Error optimizing fonts:', error);
  }
};

/**
 * Lazy Load Non-Critical Scripts
 * Defer non-essential script loading
 */
const lazyLoadScripts = () => {
  try {
    // Identify non-critical scripts and defer them
    const scripts = document.querySelectorAll('script[data-defer]');
    scripts.forEach(script => {
      script.defer = true;
    });

    console.log('[Performance] ✓ Script lazy loading applied');
  } catch (error) {
    console.error('[Performance] Error lazy loading scripts:', error);
  }
};

/**
 * Initialize All Performance Optimizations
 * Should be called early in the application lifecycle
 */
export const initPerformanceOptimizations = () => {
  try {
    // Apply motion preferences first (most critical)
    optimizeForReducedMotion();
    
    // Apply device-specific optimizations
    optimizeForLowEndDevices();
    
    // Apply resource optimizations
    optimizeImages();
    optimizeFonts();
    lazyLoadScripts();

    console.log('[Performance] ✓ All performance optimizations initialized');
  } catch (error) {
    console.error('[Performance] Error initializing performance optimizations:', error);
  }
};

/**
 * Get Animation Duration Based on User Preferences
 * Use this function to get appropriate animation durations
 * @param {number} normalDuration - Duration in milliseconds for normal motion
 * @param {number} reducedDuration - Duration in milliseconds for reduced motion (optional)
 * @returns {number} Appropriate duration based on user preferences
 */
export const getAnimationDuration = (normalDuration, reducedDuration = 0) => {
  if (prefersReducedMotion()) {
    return reducedDuration;
  }
  return normalDuration;
};

/**
 * Should Animation Run
 * Check if animation should run based on user preferences
 * @returns {boolean} True if animation should run
 */
export const shouldAnimationRun = () => {
  return !prefersReducedMotion();
};

/**
 * Disable All Animations
 * Useful for testing or emergency situations
 */
export const disableAllAnimations = () => {
  document.body.classList.add('reduce-motion');
  gsap.globalTimeline.timeScale(0);
  window.REDUCE_MOTION = true;
};

/**
 * Enable All Animations
 * Re-enable animations after being disabled
 */
export const enableAllAnimations = () => {
  document.body.classList.remove('reduce-motion');
  gsap.globalTimeline.timeScale(1);
  window.REDUCE_MOTION = false;
};

export const performanceOptimization = {
  prefersReducedMotion,
  isLowEndDevice,
  initPerformanceOptimizations,
  getAnimationDuration,
  shouldAnimationRun,
  disableAllAnimations,
  enableAllAnimations,
};

export default performanceOptimization;
