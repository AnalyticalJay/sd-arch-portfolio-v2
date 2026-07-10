/**
 * Animation Module
 * Centralized GSAP animation utilities with ScrollTrigger integration
 * Provides reusable animation patterns for consistent, premium animations
 */

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

/**
 * Animation Configuration
 * Default settings for all animations
 */
const animationDefaults = {
  duration: 0.8,
  ease: 'power2.out',
  stagger: 0.1,
};

/**
 * ScrollTrigger Configuration
 * Default settings for scroll-triggered animations
 */
const scrollTriggerDefaults = {
  trigger: null,
  start: 'top 80%',
  end: 'top 50%',
  toggleActions: 'play none none none',
  markers: false,
};

/**
 * Fade In Animation
 * Simple opacity animation from 0 to 1
 * @param {string|Element} target - CSS selector or DOM element
 * @param {Object} options - Animation options (duration, delay, etc.)
 * @returns {gsap.core.Tween} GSAP tween object
 */
export const fadeIn = (target, options = {}) => {
  const config = {
    ...animationDefaults,
    opacity: 1,
    scrollTrigger: {
      ...scrollTriggerDefaults,
      trigger: target,
    },
    ...options,
  };

  return gsap.from(target, config);
};

/**
 * Fade In Up Animation
 * Opacity and Y-axis translation animation
 * @param {string|Element} target - CSS selector or DOM element
 * @param {Object} options - Animation options
 * @returns {gsap.core.Tween} GSAP tween object
 */
export const fadeInUp = (target, options = {}) => {
  const config = {
    ...animationDefaults,
    opacity: 0,
    y: 30,
    scrollTrigger: {
      ...scrollTriggerDefaults,
      trigger: target,
    },
    ...options,
  };

  return gsap.from(target, config);
};

/**
 * Fade In Down Animation
 * Opacity and negative Y-axis translation animation
 * @param {string|Element} target - CSS selector or DOM element
 * @param {Object} options - Animation options
 * @returns {gsap.core.Tween} GSAP tween object
 */
export const fadeInDown = (target, options = {}) => {
  const config = {
    ...animationDefaults,
    opacity: 0,
    y: -30,
    scrollTrigger: {
      ...scrollTriggerDefaults,
      trigger: target,
    },
    ...options,
  };

  return gsap.from(target, config);
};

/**
 * Slide In Left Animation
 * X-axis translation with fade
 * @param {string|Element} target - CSS selector or DOM element
 * @param {Object} options - Animation options
 * @returns {gsap.core.Tween} GSAP tween object
 */
export const slideInLeft = (target, options = {}) => {
  const config = {
    ...animationDefaults,
    opacity: 0,
    x: -50,
    scrollTrigger: {
      ...scrollTriggerDefaults,
      trigger: target,
    },
    ...options,
  };

  return gsap.from(target, config);
};

/**
 * Slide In Right Animation
 * X-axis translation with fade
 * @param {string|Element} target - CSS selector or DOM element
 * @param {Object} options - Animation options
 * @returns {gsap.core.Tween} GSAP tween object
 */
export const slideInRight = (target, options = {}) => {
  const config = {
    ...animationDefaults,
    opacity: 0,
    x: 50,
    scrollTrigger: {
      ...scrollTriggerDefaults,
      trigger: target,
    },
    ...options,
  };

  return gsap.from(target, config);
};

/**
 * Scale In Animation
 * Scale transformation with fade
 * @param {string|Element} target - CSS selector or DOM element
 * @param {Object} options - Animation options
 * @returns {gsap.core.Tween} GSAP tween object
 */
export const scaleIn = (target, options = {}) => {
  const config = {
    ...animationDefaults,
    opacity: 0,
    scale: 0.9,
    scrollTrigger: {
      ...scrollTriggerDefaults,
      trigger: target,
    },
    ...options,
  };

  return gsap.from(target, config);
};

/**
 * Stagger Fade In Animation
 * Multiple elements fade in with stagger delay
 * @param {string|Element} target - CSS selector or DOM element(s)
 * @param {Object} options - Animation options
 * @returns {gsap.core.Tween} GSAP tween object
 */
export const staggerFadeIn = (target, options = {}) => {
  const config = {
    ...animationDefaults,
    opacity: 1,
    stagger: options.stagger || animationDefaults.stagger,
    scrollTrigger: {
      ...scrollTriggerDefaults,
      trigger: options.trigger || target,
    },
    ...options,
  };

  return gsap.from(target, config);
};

/**
 * Stagger Fade In Up Animation
 * Multiple elements fade in and slide up with stagger
 * @param {string|Element} target - CSS selector or DOM element(s)
 * @param {Object} options - Animation options
 * @returns {gsap.core.Tween} GSAP tween object
 */
export const staggerFadeInUp = (target, options = {}) => {
  const config = {
    ...animationDefaults,
    opacity: 0,
    y: 30,
    stagger: options.stagger || animationDefaults.stagger,
    scrollTrigger: {
      ...scrollTriggerDefaults,
      trigger: options.trigger || target,
    },
    ...options,
  };

  return gsap.from(target, config);
};

/**
 * Reveal Text Animation
 * Character-by-character text reveal
 * @param {string|Element} target - CSS selector or DOM element
 * @param {Object} options - Animation options
 * @returns {gsap.core.Tween} GSAP tween object
 */
export const revealText = (target, options = {}) => {
  const config = {
    duration: 1.2,
    ease: 'power2.out',
    scrollTrigger: {
      ...scrollTriggerDefaults,
      trigger: target,
    },
    ...options,
  };

  return gsap.from(target, {
    ...config,
    opacity: 0,
    y: 10,
  });
};

/**
 * Hover Scale Animation
 * Scale element on hover
 * @param {string|Element} target - CSS selector or DOM element
 * @param {number} scale - Scale factor (default: 1.05)
 */
export const addHoverScale = (target, scale = 1.05) => {
  const elements = document.querySelectorAll(target);
  
  elements.forEach((element) => {
    element.addEventListener('mouseenter', () => {
      gsap.to(element, {
        scale: scale,
        duration: 0.3,
        ease: 'power2.out',
      });
    });

    element.addEventListener('mouseleave', () => {
      gsap.to(element, {
        scale: 1,
        duration: 0.3,
        ease: 'power2.out',
      });
    });
  });
};

/**
 * Parallax Scroll Animation
 * Create parallax effect on scroll
 * @param {string|Element} target - CSS selector or DOM element
 * @param {number} speed - Parallax speed multiplier (default: 0.5)
 */
export const parallaxScroll = (target, speed = 0.5) => {
  gsap.to(target, {
    y: `${speed * 100}px`,
    scrollTrigger: {
      trigger: target,
      start: 'top center',
      end: 'bottom center',
      scrub: 1,
      markers: false,
    },
  });
};

/**
 * Counter Animation
 * Animate number from 0 to target value
 * @param {string|Element} target - CSS selector or DOM element
 * @param {number} endValue - Target number value
 * @param {Object} options - Animation options
 */
export const animateCounter = (target, endValue, options = {}) => {
  const config = {
    duration: 2,
    ease: 'power2.out',
    scrollTrigger: {
      ...scrollTriggerDefaults,
      trigger: target,
    },
    ...options,
  };

  const counter = { value: 0 };

  gsap.to(counter, {
    ...config,
    value: endValue,
    onUpdate: () => {
      const element = typeof target === 'string' 
        ? document.querySelector(target) 
        : target;
      if (element) {
        element.textContent = Math.floor(counter.value);
      }
    },
  });
};

/**
 * Timeline Animation
 * Create complex animation sequences with GSAP timeline
 * @returns {gsap.core.Timeline} GSAP timeline object
 */
export const createTimeline = () => {
  return gsap.timeline();
};

/**
 * Refresh ScrollTrigger
 * Recalculate all ScrollTrigger positions (call after DOM changes)
 */
export const refreshScrollTriggers = () => {
  ScrollTrigger.getAll().forEach(trigger => trigger.refresh());
};

/**
 * Kill All Animations
 * Stop all active GSAP animations
 */
export const killAllAnimations = () => {
  gsap.killTweensOf('*');
};

/**
 * Animation Utilities Object
 * Exported for convenience
 */
export const animations = {
  fadeIn,
  fadeInUp,
  fadeInDown,
  slideInLeft,
  slideInRight,
  scaleIn,
  staggerFadeIn,
  staggerFadeInUp,
  revealText,
  addHoverScale,
  parallaxScroll,
  animateCounter,
  createTimeline,
  refreshScrollTriggers,
  killAllAnimations,
};

export default animations;
