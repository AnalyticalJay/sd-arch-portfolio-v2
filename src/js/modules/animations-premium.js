/**
 * Premium Animations Module
 * Advanced GSAP animation utilities for enterprise-grade motion
 * Builds on core animations with sophisticated scroll-triggered patterns
 */

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Premium Animation Configuration
 * Tuned for high-end enterprise feel
 */
const premiumConfig = {
  // Easing functions for premium feel
  easeIn: 'power2.inOut',
  easeOut: 'power2.out',
  easeInOut: 'power2.inOut',
  easeExpo: 'expo.out',
  
  // Duration presets
  duration: {
    fast: 0.6,
    normal: 0.8,
    slow: 1.2,
    verySlow: 1.6,
  },
  
  // Stagger presets
  stagger: {
    small: 0.05,
    medium: 0.1,
    large: 0.15,
    extraLarge: 0.2,
  },
  
  // ScrollTrigger defaults
  scrollTrigger: {
    start: 'top 85%',
    end: 'top 50%',
    toggleActions: 'play none none none',
    markers: false,
  },
};

/**
 * Headline Split Animation
 * Animate each word or line separately for dramatic effect
 * @param {Element} element - Target headline element
 * @param {Object} options - Animation options
 */
export const animateHeadlineSplit = (element, options = {}) => {
  if (!element) return null;
  
  const config = {
    duration: premiumConfig.duration.slow,
    ease: premiumConfig.easeOut,
    stagger: premiumConfig.stagger.medium,
    ...options,
  };

  // Split by line breaks or use as-is
  const text = element.textContent;
  const words = text.split(/\s+/);
  
  element.innerHTML = words
    .map(word => `<span class="inline-block overflow-hidden"><span class="inline-block">${word}</span></span>`)
    .join(' ');

  const spans = element.querySelectorAll('span > span');
  
  return gsap.from(spans, {
    ...config,
    opacity: 0,
    y: 40,
    scrollTrigger: {
      trigger: element,
      ...premiumConfig.scrollTrigger,
    },
  });
};

/**
 * Staggered Card Animation
 * Animate multiple cards with premium stagger effect
 * @param {string|Element} container - Container with card elements
 * @param {Object} options - Animation options
 */
export const animateCardGrid = (container, options = {}) => {
  const config = {
    duration: premiumConfig.duration.normal,
    ease: premiumConfig.easeOut,
    stagger: premiumConfig.stagger.medium,
    ...options,
  };

  const cards = typeof container === 'string' 
    ? document.querySelectorAll(container) 
    : container.querySelectorAll('[class*="card"]');

  if (cards.length === 0) return null;

  return gsap.from(cards, {
    ...config,
    opacity: 0,
    y: 50,
    scrollTrigger: {
      trigger: container,
      ...premiumConfig.scrollTrigger,
    },
  });
};

/**
 * Number Counter with Scroll Trigger
 * Animate numbers from 0 to target value on scroll
 * @param {Element} element - Element containing the number
 * @param {number} target - Target number value
 * @param {Object} options - Animation options
 */
export const animateNumberCounter = (element, target, options = {}) => {
  if (!element || isNaN(target)) return null;

  const config = {
    duration: premiumConfig.duration.slow,
    ease: premiumConfig.easeOut,
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
      ...premiumConfig.scrollTrigger,
    },
  });
};

/**
 * Parallax Scroll Effect
 * Create depth with parallax movement on scroll
 * @param {Element} element - Target element
 * @param {number} speed - Parallax speed (0.5 = half speed)
 * @param {Object} options - Animation options
 */
export const parallaxEffect = (element, speed = 0.5, options = {}) => {
  if (!element) return null;

  const config = {
    ...options,
  };

  return gsap.to(element, {
    y: `${speed * 100}px`,
    scrollTrigger: {
      trigger: element,
      start: 'top center',
      end: 'bottom center',
      scrub: 1,
      markers: false,
    },
    ...config,
  });
};

/**
 * Reveal Text Animation
 * Smooth text reveal with fade and slide
 * @param {Element} element - Target text element
 * @param {Object} options - Animation options
 */
export const revealTextPremium = (element, options = {}) => {
  if (!element) return null;

  const config = {
    duration: premiumConfig.duration.normal,
    ease: premiumConfig.easeOut,
    ...options,
  };

  return gsap.from(element, {
    ...config,
    opacity: 0,
    y: 20,
    scrollTrigger: {
      trigger: element,
      ...premiumConfig.scrollTrigger,
    },
  });
};

/**
 * Scale In Animation with Rotation
 * Sophisticated scale and rotation entrance
 * @param {Element} element - Target element
 * @param {Object} options - Animation options
 */
export const scaleInRotate = (element, options = {}) => {
  if (!element) return null;

  const config = {
    duration: premiumConfig.duration.normal,
    ease: premiumConfig.easeOut,
    ...options,
  };

  return gsap.from(element, {
    ...config,
    opacity: 0,
    scale: 0.85,
    rotation: -5,
    scrollTrigger: {
      trigger: element,
      ...premiumConfig.scrollTrigger,
    },
  });
};

/**
 * Slide In with Fade
 * Directional slide with smooth fade
 * @param {Element} element - Target element
 * @param {string} direction - 'left', 'right', 'up', 'down'
 * @param {Object} options - Animation options
 */
export const slideInWithFade = (element, direction = 'up', options = {}) => {
  if (!element) return null;

  const config = {
    duration: premiumConfig.duration.normal,
    ease: premiumConfig.easeOut,
    ...options,
  };

  const directionMap = {
    left: { x: -60, y: 0 },
    right: { x: 60, y: 0 },
    up: { x: 0, y: 40 },
    down: { x: 0, y: -40 },
  };

  const movement = directionMap[direction] || directionMap.up;

  return gsap.from(element, {
    ...config,
    opacity: 0,
    ...movement,
    scrollTrigger: {
      trigger: element,
      ...premiumConfig.scrollTrigger,
    },
  });
};

/**
 * Stagger Fade In with Delay
 * Multiple elements fade in with premium stagger
 * @param {string|NodeList} elements - Elements to animate
 * @param {Object} options - Animation options
 */
export const staggerFadeInPremium = (elements, options = {}) => {
  const config = {
    duration: premiumConfig.duration.normal,
    ease: premiumConfig.easeOut,
    stagger: premiumConfig.stagger.medium,
    ...options,
  };

  const nodeList = typeof elements === 'string' 
    ? document.querySelectorAll(elements) 
    : elements;

  if (nodeList.length === 0) return null;

  return gsap.from(nodeList, {
    ...config,
    opacity: 0,
    scrollTrigger: {
      trigger: nodeList[0],
      ...premiumConfig.scrollTrigger,
    },
  });
};

/**
 * Hover Lift Effect
 * Smooth lift and shadow on hover
 * @param {string|Element} selector - CSS selector or element
 * @param {number} liftAmount - How much to lift (default: 12px)
 */
export const hoverLiftEffect = (selector, liftAmount = 12) => {
  const elements = typeof selector === 'string' 
    ? document.querySelectorAll(selector) 
    : [selector];

  elements.forEach(element => {
    element.addEventListener('mouseenter', () => {
      gsap.to(element, {
        y: -liftAmount,
        boxShadow: '0 20px 40px rgba(19, 196, 107, 0.15)',
        duration: 0.4,
        ease: premiumConfig.easeOut,
      });
    });

    element.addEventListener('mouseleave', () => {
      gsap.to(element, {
        y: 0,
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        duration: 0.4,
        ease: premiumConfig.easeOut,
      });
    });
  });
};

/**
 * Button Press Animation
 * Sophisticated button interaction
 * @param {string|Element} selector - CSS selector or element
 */
export const buttonPressAnimation = (selector) => {
  const buttons = typeof selector === 'string' 
    ? document.querySelectorAll(selector) 
    : [selector];

  buttons.forEach(button => {
    button.addEventListener('mousedown', () => {
      gsap.to(button, {
        scale: 0.95,
        duration: 0.1,
        ease: premiumConfig.easeOut,
      });
    });

    button.addEventListener('mouseup', () => {
      gsap.to(button, {
        scale: 1,
        duration: 0.2,
        ease: premiumConfig.easeOut,
      });
    });

    button.addEventListener('mouseleave', () => {
      gsap.to(button, {
        scale: 1,
        duration: 0.2,
        ease: premiumConfig.easeOut,
      });
    });
  });
};

/**
 * Scroll Progress Indicator
 * Animated progress bar based on scroll position
 * @param {Element} element - Progress bar element
 */
export const scrollProgressIndicator = (element) => {
  if (!element) return null;

  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;

    gsap.to(element, {
      width: `${scrollPercent}%`,
      duration: 0.1,
      ease: 'none',
    });
  });
};

/**
 * Smooth Anchor Link Navigation
 * Enhanced smooth scroll with GSAP
 * @param {Element} linkElement - Anchor link element
 */
export const smoothAnchorNavigation = (linkElement) => {
  if (!linkElement) return;

  linkElement.addEventListener('click', (e) => {
    const href = linkElement.getAttribute('href');
    
    if (href && href.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(href);
      
      if (target) {
        gsap.to(window, {
          scrollTo: {
            y: target,
            autoKill: false,
          },
          duration: 1,
          ease: premiumConfig.easeOut,
        });
      }
    }
  });
};

/**
 * Timeline Factory
 * Create complex animation sequences
 * @returns {gsap.core.Timeline} GSAP timeline
 */
export const createAnimationTimeline = () => {
  return gsap.timeline();
};

/**
 * Batch Animation
 * Animate multiple elements with batch processing
 * @param {string|NodeList} selector - Elements to animate
 * @param {Function} animationFn - Animation function to apply
 */
export const batchAnimate = (selector, animationFn) => {
  const elements = typeof selector === 'string' 
    ? document.querySelectorAll(selector) 
    : selector;

  const timelines = [];
  
  elements.forEach((element, index) => {
    const tl = animationFn(element, index);
    if (tl) timelines.push(tl);
  });

  return timelines;
};

/**
 * Kill All Premium Animations
 * Stop all active GSAP animations
 */
export const killAllPremiumAnimations = () => {
  gsap.killTweensOf('*');
};

/**
 * Refresh All ScrollTriggers
 * Recalculate scroll positions
 */
export const refreshAllScrollTriggers = () => {
  ScrollTrigger.getAll().forEach(trigger => trigger.refresh());
};

/**
 * Premium Animations Export Object
 */
export const premiumAnimations = {
  animateHeadlineSplit,
  animateCardGrid,
  animateNumberCounter,
  parallaxEffect,
  revealTextPremium,
  scaleInRotate,
  slideInWithFade,
  staggerFadeInPremium,
  hoverLiftEffect,
  buttonPressAnimation,
  scrollProgressIndicator,
  smoothAnchorNavigation,
  createAnimationTimeline,
  batchAnimate,
  killAllPremiumAnimations,
  refreshAllScrollTriggers,
};

export default premiumAnimations;
