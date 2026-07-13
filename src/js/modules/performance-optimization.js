/**
 * Performance Optimization Module
 * Handles animation performance, lazy loading, and resource optimization
 * Ensures smooth 60fps animations and optimal page performance
 */

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Initialize Performance Optimizations
 * Sets up all performance-related features
 */
export const initPerformanceOptimizations = () => {
  try {
    // Enable GPU acceleration
    enableGPUAcceleration();
    
    // Initialize lazy loading
    initLazyLoading();
    
    // Optimize animations for reduced motion
    optimizeForReducedMotion();
    
    // Monitor performance
    monitorPerformance();

    console.log('[Performance] ✓ Performance optimizations initialized');
  } catch (error) {
    console.error('[Performance] Error initializing performance optimizations:', error);
  }
};

/**
 * Enable GPU Acceleration
 * Apply GPU acceleration to animated elements
 */
const enableGPUAcceleration = () => {
  try {
    // Add will-change to frequently animated elements
    const animatedElements = document.querySelectorAll(
      '[data-animation], .card-premium, .btn, a, svg'
    );

    animatedElements.forEach(element => {
      element.style.willChange = 'transform, opacity';
    });

    // Remove will-change after animations complete
    gsap.delayedCall(5, () => {
      animatedElements.forEach(element => {
        element.style.willChange = 'auto';
      });
    });

    console.log('[Performance] ✓ GPU acceleration enabled');
  } catch (error) {
    console.error('[Performance] Error enabling GPU acceleration:', error);
  }
};

/**
 * Initialize Lazy Loading
 * Lazy load images and optimize image loading
 */
const initLazyLoading = () => {
  try {
    // Check if IntersectionObserver is supported
    if (!('IntersectionObserver' in window)) {
      console.warn('[Performance] IntersectionObserver not supported');
      return;
    }

    // Get all images with lazy load attribute
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');

    if (lazyImages.length === 0) return;

    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          
          // Fade in image
          gsap.to(img, {
            opacity: 1,
            duration: 0.4,
            ease: 'power2.out',
          });

          // Stop observing
          observer.unobserve(img);
        }
      });
    }, {
      rootMargin: '50px',
    });

    lazyImages.forEach(img => {
      img.style.opacity = '0';
      imageObserver.observe(img);
    });

    console.log('[Performance] ✓ Lazy loading initialized');
  } catch (error) {
    console.error('[Performance] Error initializing lazy loading:', error);
  }
};

/**
 * Optimize for Reduced Motion
 * Respect user's motion preferences
 */
const optimizeForReducedMotion = () => {
  try {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      // Disable animations for users who prefer reduced motion
      gsap.globalTimeline.timeScale(0.5);
      
      // Add class to body for CSS-based animation adjustments
      document.body.classList.add('reduce-motion');

      console.log('[Performance] ✓ Reduced motion preferences applied');
    }

    // Listen for changes in motion preference
    window.matchMedia('(prefers-reduced-motion: reduce)').addEventListener('change', (e) => {
      if (e.matches) {
        gsap.globalTimeline.timeScale(0.5);
        document.body.classList.add('reduce-motion');
      } else {
        gsap.globalTimeline.timeScale(1);
        document.body.classList.remove('reduce-motion');
      }
    });
  } catch (error) {
    console.error('[Performance] Error optimizing for reduced motion:', error);
  }
};

/**
 * Monitor Performance
 * Track animation performance and FPS
 */
const monitorPerformance = () => {
  try {
    // Only log in development
    if (process.env.NODE_ENV === 'development') {
      let frameCount = 0;
      let lastTime = performance.now();

      const measureFPS = () => {
        frameCount++;
        const currentTime = performance.now();

        if (currentTime >= lastTime + 1000) {
          const fps = Math.round((frameCount * 1000) / (currentTime - lastTime));
          console.log(`[Performance] FPS: ${fps}`);
          frameCount = 0;
          lastTime = currentTime;
        }

        requestAnimationFrame(measureFPS);
      };

      // Start measuring after 2 seconds
      gsap.delayedCall(2, () => {
        measureFPS();
      });
    }

    console.log('[Performance] ✓ Performance monitoring initialized');
  } catch (error) {
    console.error('[Performance] Error monitoring performance:', error);
  }
};

/**
 * Batch Animations
 * Batch multiple animations for better performance
 * @param {string|NodeList} selector - Elements to animate
 * @param {Function} animationFn - Animation function
 */
export const batchAnimations = (selector, animationFn) => {
  try {
    const elements = typeof selector === 'string' 
      ? document.querySelectorAll(selector) 
      : selector;

    if (elements.length === 0) return null;

    // Use GSAP batch for optimal performance
    return gsap.utils.toArray(elements).map((element, index) => {
      return animationFn(element, index);
    });
  } catch (error) {
    console.error('[Performance] Error batching animations:', error);
    return null;
  }
};

/**
 * Throttle Animation
 * Throttle animation updates for better performance
 * @param {Function} fn - Function to throttle
 * @param {number} delay - Throttle delay in ms
 */
export const throttleAnimation = (fn, delay = 16) => {
  let lastCall = 0;

  return function(...args) {
    const now = Date.now();

    if (now - lastCall >= delay) {
      lastCall = now;
      return fn(...args);
    }
  };
};

/**
 * Debounce Animation
 * Debounce animation updates for better performance
 * @param {Function} fn - Function to debounce
 * @param {number} delay - Debounce delay in ms
 */
export const debounceAnimation = (fn, delay = 300) => {
  let timeoutId;

  return function(...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      fn(...args);
    }, delay);
  };
};

/**
 * Optimize ScrollTrigger
 * Optimize ScrollTrigger for better performance
 */
export const optimizeScrollTrigger = () => {
  try {
    // Batch ScrollTrigger refreshes
    ScrollTrigger.batch('[data-animation]', {
      onEnter: (batch) => {
        gsap.to(batch, { opacity: 1, duration: 0.8 });
      },
    });

    console.log('[Performance] ✓ ScrollTrigger optimized');
  } catch (error) {
    console.error('[Performance] Error optimizing ScrollTrigger:', error);
  }
};

/**
 * Disable Animations on Low-End Devices
 * Detect and disable animations on low-end devices
 */
export const disableAnimationsOnLowEndDevices = () => {
  try {
    // Check device memory if available
    if (navigator.deviceMemory && navigator.deviceMemory <= 4) {
      console.log('[Performance] Low-end device detected, disabling animations');
      
      // Disable all animations
      document.body.classList.add('no-animations');
      gsap.globalTimeline.timeScale(0);
      
      return true;
    }

    return false;
  } catch (error) {
    console.error('[Performance] Error checking device memory:', error);
    return false;
  }
};

/**
 * Performance Optimization Export Object
 */
export const performanceOptimization = {
  initPerformanceOptimizations,
  batchAnimations,
  throttleAnimation,
  debounceAnimation,
  optimizeScrollTrigger,
  disableAnimationsOnLowEndDevices,
};

export default performanceOptimization;
