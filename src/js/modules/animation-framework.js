/**
 * Animation Framework
 * Core utility functions for consistent, premium animations across the site.
 */

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { AnimationConfig } from './animation-config';

gsap.registerPlugin(ScrollTrigger);

/**
 * Check if user prefers reduced motion
 */
export const prefersReducedMotion = () => {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

/**
 * Helper to get default animation settings
 */
const getDefaults = (options = {}) => {
  return {
    duration: AnimationConfig.duration.normal,
    ease: AnimationConfig.ease.out,
    force3D: true, // GPU acceleration
    overwrite: 'auto', // Prevent animation conflicts
    ...options,
  };
};

/**
 * Helper to create a ScrollTrigger object
 */
const createScrollTrigger = (target, options = {}) => {
  if (prefersReducedMotion()) return null;
  
  return {
    trigger: target,
    ...AnimationConfig.scrollTrigger,
    ...options,
  };
};

/**
 * Fade Up Animation
 */
export const fadeUp = (target, options = {}) => {
  const config = getDefaults(options);
  const trigger = options.scrollTrigger !== false ? createScrollTrigger(target, options.scrollTrigger) : null;

  return gsap.from(target, {
    ...config,
    opacity: 0,
    y: prefersReducedMotion() ? 0 : (options.y || 30),
    scrollTrigger: trigger,
  });
};

/**
 * Fade Down Animation
 */
export const fadeDown = (target, options = {}) => {
  const config = getDefaults(options);
  const trigger = options.scrollTrigger !== false ? createScrollTrigger(target, options.scrollTrigger) : null;

  return gsap.from(target, {
    ...config,
    opacity: 0,
    y: prefersReducedMotion() ? 0 : (options.y || -30),
    scrollTrigger: trigger,
  });
};

/**
 * Fade Left Animation
 */
export const fadeLeft = (target, options = {}) => {
  const config = getDefaults(options);
  const trigger = options.scrollTrigger !== false ? createScrollTrigger(target, options.scrollTrigger) : null;

  return gsap.from(target, {
    ...config,
    opacity: 0,
    x: prefersReducedMotion() ? 0 : (options.x || -30),
    scrollTrigger: trigger,
  });
};

/**
 * Fade Right Animation
 */
export const fadeRight = (target, options = {}) => {
  const config = getDefaults(options);
  const trigger = options.scrollTrigger !== false ? createScrollTrigger(target, options.scrollTrigger) : null;

  return gsap.from(target, {
    ...config,
    opacity: 0,
    x: prefersReducedMotion() ? 0 : (options.x || 30),
    scrollTrigger: trigger,
  });
};

/**
 * Scale Animation
 */
export const scale = (target, options = {}) => {
  const config = getDefaults(options);
  const trigger = options.scrollTrigger !== false ? createScrollTrigger(target, options.scrollTrigger) : null;

  return gsap.from(target, {
    ...config,
    opacity: 0,
    scale: prefersReducedMotion() ? 1 : (options.scale || 0.9),
    scrollTrigger: trigger,
  });
};

/**
 * Stagger Animation
 */
export const stagger = (targets, options = {}) => {
  const config = getDefaults(options);
  const trigger = options.scrollTrigger !== false ? createScrollTrigger(options.trigger || targets, options.scrollTrigger) : null;

  return gsap.from(targets, {
    ...config,
    opacity: 0,
    y: prefersReducedMotion() ? 0 : (options.y || 20),
    stagger: options.stagger || AnimationConfig.stagger.normal,
    scrollTrigger: trigger,
  });
};

/**
 * Counter Animation
 */
export const counter = (target, endValue, options = {}) => {
  const element = typeof target === 'string' ? document.querySelector(target) : target;
  if (!element) return;

  const config = {
    duration: AnimationConfig.duration.slow,
    ease: AnimationConfig.ease.out,
    ...options,
  };

  const trigger = options.scrollTrigger !== false ? createScrollTrigger(element, options.scrollTrigger) : null;

  const obj = { value: 0 };
  return gsap.to(obj, {
    value: endValue,
    ...config,
    scrollTrigger: trigger,
    onUpdate: () => {
      element.textContent = Math.floor(obj.value).toLocaleString();
    },
  });
};

/**
 * Timeline Creation
 */
export const createTimeline = (options = {}) => {
  return gsap.timeline({
    defaults: {
      duration: AnimationConfig.duration.normal,
      ease: AnimationConfig.ease.out,
    },
    ...options,
  });
};

/**
 * Hover Animation
 */
export const hover = (target, hoverProps = {}, leaveProps = {}) => {
  const elements = typeof target === 'string' ? document.querySelectorAll(target) : [target];
  
  elements.forEach(el => {
    el.addEventListener('mouseenter', () => {
      gsap.to(el, {
        duration: AnimationConfig.duration.fast,
        ease: AnimationConfig.ease.out,
        ...hoverProps,
      });
    });
    
    el.addEventListener('mouseleave', () => {
      gsap.to(el, {
        duration: AnimationConfig.duration.fast,
        ease: AnimationConfig.ease.out,
        ...leaveProps,
      });
    });
  });
};

/**
 * Text Reveal Animation
 */
export const revealText = (target, options = {}) => {
  const element = typeof target === 'string' ? document.querySelector(target) : target;
  if (!element) return;

  const config = getDefaults(options);
  const trigger = options.scrollTrigger !== false ? createScrollTrigger(element, options.scrollTrigger) : null;

  // Simple character/word wrap if not already done
  // For a truly premium feel, this usually involves Splitting.js or custom logic
  // Here we'll do a simple line-by-line reveal if possible or just fade/up
  return gsap.from(element, {
    ...config,
    opacity: 0,
    y: 20,
    skewY: 2,
    transformOrigin: "left top",
    scrollTrigger: trigger,
  });
};

/**
 * Parallax Animation
 */
export const parallax = (target, options = {}) => {
  const config = {
    speed: 0.1,
    ...options,
  };

  return gsap.to(target, {
    y: (i, el) => -ScrollTrigger.maxScroll(window) * config.speed,
    ease: "none",
    scrollTrigger: {
      trigger: target,
      start: "top bottom",
      end: "bottom top",
      scrub: true,
      ...options.scrollTrigger,
    },
  });
};

export const animationFramework = {
  fadeUp,
  fadeDown,
  fadeLeft,
  fadeRight,
  scale,
  stagger,
  counter,
  revealText,
  parallax,
  createTimeline,
  hover,
  prefersReducedMotion,
};

export default animationFramework;
