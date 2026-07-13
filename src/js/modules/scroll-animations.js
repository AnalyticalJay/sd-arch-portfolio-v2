/**
 * Advanced Scroll Animations Module
 * Sophisticated scroll-triggered animations with parallax, reveal, and stagger effects
 * Optimized for performance with ScrollTrigger batching
 */

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Initialize Advanced Scroll Animations
 * Sets up all scroll-triggered animations with performance optimization
 */
export const initAdvancedScrollAnimations = () => {
  try {
    // Batch animations for better performance
    gsap.utils.toArray('[data-animation]').forEach((element) => {
      const animationType = element.dataset.animation;
      const delay = parseFloat(element.dataset.delay) || 0;

      switch (animationType) {
        case 'fade-in':
          createFadeInAnimation(element, delay);
          break;
        case 'fade-in-up':
          createFadeInUpAnimation(element, delay);
          break;
        case 'slide-in-left':
          createSlideInLeftAnimation(element, delay);
          break;
        case 'slide-in-right':
          createSlideInRightAnimation(element, delay);
          break;
        case 'scale-in':
          createScaleInAnimation(element, delay);
          break;
        default:
          break;
      }
    });

    console.log('[ScrollAnimations] ✓ Advanced scroll animations initialized');
  } catch (error) {
    console.error('[ScrollAnimations] Error initializing advanced scroll animations:', error);
  }
};

/**
 * Create Fade In Animation
 * @param {Element} element - Target element
 * @param {number} delay - Animation delay
 */
const createFadeInAnimation = (element, delay = 0) => {
  gsap.from(element, {
    scrollTrigger: {
      trigger: element,
      start: 'top 85%',
      end: 'top 50%',
      toggleActions: 'play none none none',
      markers: false,
    },
    opacity: 0,
    duration: 0.8,
    delay: delay,
    ease: 'power2.out',
  });
};

/**
 * Create Fade In Up Animation
 * @param {Element} element - Target element
 * @param {number} delay - Animation delay
 */
const createFadeInUpAnimation = (element, delay = 0) => {
  gsap.from(element, {
    scrollTrigger: {
      trigger: element,
      start: 'top 85%',
      end: 'top 50%',
      toggleActions: 'play none none none',
      markers: false,
    },
    opacity: 0,
    y: 30,
    duration: 0.8,
    delay: delay,
    ease: 'power2.out',
  });
};

/**
 * Create Slide In Left Animation
 * @param {Element} element - Target element
 * @param {number} delay - Animation delay
 */
const createSlideInLeftAnimation = (element, delay = 0) => {
  gsap.from(element, {
    scrollTrigger: {
      trigger: element,
      start: 'top 85%',
      end: 'top 50%',
      toggleActions: 'play none none none',
      markers: false,
    },
    opacity: 0,
    x: -50,
    duration: 0.8,
    delay: delay,
    ease: 'power2.out',
  });
};

/**
 * Create Slide In Right Animation
 * @param {Element} element - Target element
 * @param {number} delay - Animation delay
 */
const createSlideInRightAnimation = (element, delay = 0) => {
  gsap.from(element, {
    scrollTrigger: {
      trigger: element,
      start: 'top 85%',
      end: 'top 50%',
      toggleActions: 'play none none none',
      markers: false,
    },
    opacity: 0,
    x: 50,
    duration: 0.8,
    delay: delay,
    ease: 'power2.out',
  });
};

/**
 * Create Scale In Animation
 * @param {Element} element - Target element
 * @param {number} delay - Animation delay
 */
const createScaleInAnimation = (element, delay = 0) => {
  gsap.from(element, {
    scrollTrigger: {
      trigger: element,
      start: 'top 85%',
      end: 'top 50%',
      toggleActions: 'play none none none',
      markers: false,
    },
    opacity: 0,
    scale: 0.9,
    duration: 0.8,
    delay: delay,
    ease: 'power2.out',
  });
};

/**
 * Create Text Reveal Animation
 * Reveals text character by character on scroll
 * @param {Element} element - Target element
 * @param {Object} options - Animation options
 */
export const createTextRevealAnimation = (element, options = {}) => {
  if (!element) return null;

  const config = {
    duration: 1,
    ease: 'power2.out',
    ...options,
  };

  return gsap.from(element, {
    ...config,
    opacity: 0,
    y: 20,
    scrollTrigger: {
      trigger: element,
      start: 'top 85%',
      end: 'top 50%',
      toggleActions: 'play none none none',
      markers: false,
    },
  });
};

/**
 * Create Stagger Animation
 * Animate multiple elements with stagger on scroll
 * @param {string|NodeList} selector - Elements selector or NodeList
 * @param {Object} options - Animation options
 */
export const createStaggerAnimation = (selector, options = {}) => {
  const elements = typeof selector === 'string' 
    ? document.querySelectorAll(selector) 
    : selector;

  if (elements.length === 0) return null;

  const config = {
    duration: 0.8,
    ease: 'power2.out',
    stagger: 0.1,
    ...options,
  };

  return gsap.from(elements, {
    ...config,
    opacity: 0,
    y: 30,
    scrollTrigger: {
      trigger: elements[0],
      start: 'top 85%',
      end: 'top 50%',
      toggleActions: 'play none none none',
      markers: false,
    },
  });
};

/**
 * Create Parallax Animation
 * Create depth effect with parallax on scroll
 * @param {Element} element - Target element
 * @param {number} speed - Parallax speed (0.5 = half speed)
 * @param {Object} options - Animation options
 */
export const createParallaxAnimation = (element, speed = 0.5, options = {}) => {
  if (!element) return null;

  return gsap.to(element, {
    y: `${speed * 100}px`,
    scrollTrigger: {
      trigger: element,
      start: 'top center',
      end: 'bottom center',
      scrub: 1,
      markers: false,
      ...options,
    },
  });
};

/**
 * Create Pin Animation
 * Pin element to viewport while scrolling
 * @param {Element} element - Target element
 * @param {number} duration - Duration in viewport (pixels)
 * @param {Object} options - Animation options
 */
export const createPinAnimation = (element, duration = 500, options = {}) => {
  if (!element) return null;

  return ScrollTrigger.create({
    trigger: element,
    pin: true,
    start: 'top center',
    end: `+=${duration}`,
    markers: false,
    ...options,
  });
};

/**
 * Create Progress Bar Animation
 * Animate progress bar based on scroll position
 * @param {Element} element - Progress bar element
 * @param {Element} trigger - Trigger element
 * @param {Object} options - Animation options
 */
export const createProgressBarAnimation = (element, trigger, options = {}) => {
  if (!element || !trigger) return null;

  return gsap.to(element, {
    width: '100%',
    scrollTrigger: {
      trigger: trigger,
      start: 'top center',
      end: 'bottom center',
      scrub: 1,
      markers: false,
      ...options,
    },
  });
};

/**
 * Create Counter Animation
 * Animate number counter on scroll
 * @param {Element} element - Target element
 * @param {number} target - Target number
 * @param {Object} options - Animation options
 */
export const createCounterAnimation = (element, target, options = {}) => {
  if (!element || isNaN(target)) return null;

  const config = {
    duration: 2,
    ease: 'power2.out',
    ...options,
  };

  const counter = { value: 0 };

  return gsap.to(counter, {
    ...config,
    value: target,
    onUpdate: () => {
      element.textContent = Math.floor(counter.value);
    },
    scrollTrigger: {
      trigger: element,
      start: 'top 85%',
      end: 'top 50%',
      toggleActions: 'play none none none',
      markers: false,
    },
  });
};

/**
 * Create Clip Path Animation
 * Reveal element with clip-path animation
 * @param {Element} element - Target element
 * @param {Object} options - Animation options
 */
export const createClipPathAnimation = (element, options = {}) => {
  if (!element) return null;

  const config = {
    duration: 1,
    ease: 'power2.out',
    ...options,
  };

  return gsap.from(element, {
    ...config,
    clipPath: 'inset(0 100% 0 0)',
    scrollTrigger: {
      trigger: element,
      start: 'top 85%',
      end: 'top 50%',
      toggleActions: 'play none none none',
      markers: false,
    },
  });
};

/**
 * Create Blur Reveal Animation
 * Reveal element with blur effect
 * @param {Element} element - Target element
 * @param {Object} options - Animation options
 */
export const createBlurRevealAnimation = (element, options = {}) => {
  if (!element) return null;

  const config = {
    duration: 1,
    ease: 'power2.out',
    ...options,
  };

  return gsap.from(element, {
    ...config,
    opacity: 0,
    filter: 'blur(10px)',
    scrollTrigger: {
      trigger: element,
      start: 'top 85%',
      end: 'top 50%',
      toggleActions: 'play none none none',
      markers: false,
    },
  });
};

/**
 * Create Rotation Animation
 * Rotate element on scroll
 * @param {Element} element - Target element
 * @param {number} rotation - Rotation amount in degrees
 * @param {Object} options - Animation options
 */
export const createRotationAnimation = (element, rotation = 360, options = {}) => {
  if (!element) return null;

  return gsap.to(element, {
    rotation: rotation,
    scrollTrigger: {
      trigger: element,
      start: 'top center',
      end: 'bottom center',
      scrub: 1,
      markers: false,
      ...options,
    },
  });
};

/**
 * Create Skew Animation
 * Skew element on scroll
 * @param {Element} element - Target element
 * @param {number} skew - Skew amount
 * @param {Object} options - Animation options
 */
export const createSkewAnimation = (element, skew = 10, options = {}) => {
  if (!element) return null;

  return gsap.to(element, {
    skewY: skew,
    y: 500,
    scrollTrigger: {
      trigger: element,
      start: 'top center',
      end: 'bottom center',
      scrub: 1,
      markers: false,
      ...options,
    },
  });
};

/**
 * Refresh All Scroll Animations
 * Recalculate all ScrollTrigger positions
 */
export const refreshScrollAnimations = () => {
  ScrollTrigger.refresh();
};

/**
 * Kill All Scroll Animations
 * Stop all active scroll animations
 */
export const killAllScrollAnimations = () => {
  ScrollTrigger.getAll().forEach(trigger => trigger.kill());
};

/**
 * Scroll Animations Export Object
 */
export const scrollAnimations = {
  initAdvancedScrollAnimations,
  createTextRevealAnimation,
  createStaggerAnimation,
  createParallaxAnimation,
  createPinAnimation,
  createProgressBarAnimation,
  createCounterAnimation,
  createClipPathAnimation,
  createBlurRevealAnimation,
  createRotationAnimation,
  createSkewAnimation,
  refreshScrollAnimations,
  killAllScrollAnimations,
};

export default scrollAnimations;
