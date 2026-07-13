/**
 * Optimized Scroll Animations Module
 * High-performance scroll-triggered animations with batching and cleanup
 * Eliminates expensive properties and uses transform-based animations only
 */

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { prefersReducedMotion } from './performance-optimization-v2';

gsap.registerPlugin(ScrollTrigger);

class OptimizedScrollAnimations {
  constructor() {
    this.isInitialized = false;
    this.triggers = [];
    this.batchQueue = [];
    this.batchTimeout = null;
  }

  /**
   * Initialize optimized scroll animations
   */
  init() {
    if (this.isInitialized) return;

    try {
      if (prefersReducedMotion()) {
        console.log('[ScrollAnimations] ✓ Scroll animations skipped (reduced motion)');
        return;
      }

      // Batch all animations for better performance
      this.batchAnimations();
      this.isInitialized = true;

      console.log('[ScrollAnimations] ✓ Optimized scroll animations initialized');
    } catch (error) {
      console.error('[ScrollAnimations] Error initializing:', error);
    }
  }

  /**
   * Batch animations for optimal performance
   */
  batchAnimations() {
    // Get all elements with data-animation attribute
    const elements = document.querySelectorAll('[data-animation]');

    // Group animations by type for batching
    const animationGroups = {
      'fade-in': [],
      'fade-in-up': [],
      'slide-in-left': [],
      'slide-in-right': [],
      'scale-in': []
    };

    elements.forEach(element => {
      const type = element.dataset.animation;
      if (animationGroups[type]) {
        animationGroups[type].push(element);
      }
    });

    // Create batched animations
    Object.entries(animationGroups).forEach(([type, elements]) => {
      if (elements.length > 0) {
        this.createBatchedAnimation(type, elements);
      }
    });
  }

  /**
   * Create batched animation for multiple elements
   */
  createBatchedAnimation(type, elements) {
    elements.forEach((element, index) => {
      const delay = parseFloat(element.dataset.delay) || (index * 0.05);

      switch (type) {
        case 'fade-in':
          this.createFadeInAnimation(element, delay);
          break;
        case 'fade-in-up':
          this.createFadeInUpAnimation(element, delay);
          break;
        case 'slide-in-left':
          this.createSlideInLeftAnimation(element, delay);
          break;
        case 'slide-in-right':
          this.createSlideInRightAnimation(element, delay);
          break;
        case 'scale-in':
          this.createScaleInAnimation(element, delay);
          break;
      }
    });
  }

  /**
   * Create fade in animation (transform-based)
   */
  createFadeInAnimation(element, delay = 0) {
    const trigger = gsap.from(element, {
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
      overwrite: 'auto',
    });

    this.triggers.push(trigger.scrollTrigger);
  }

  /**
   * Create fade in up animation (transform-based)
   */
  createFadeInUpAnimation(element, delay = 0) {
    const trigger = gsap.from(element, {
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
      overwrite: 'auto',
    });

    this.triggers.push(trigger.scrollTrigger);
  }

  /**
   * Create slide in left animation (transform-based)
   */
  createSlideInLeftAnimation(element, delay = 0) {
    const trigger = gsap.from(element, {
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
      overwrite: 'auto',
    });

    this.triggers.push(trigger.scrollTrigger);
  }

  /**
   * Create slide in right animation (transform-based)
   */
  createSlideInRightAnimation(element, delay = 0) {
    const trigger = gsap.from(element, {
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
      overwrite: 'auto',
    });

    this.triggers.push(trigger.scrollTrigger);
  }

  /**
   * Create scale in animation (transform-based)
   */
  createScaleInAnimation(element, delay = 0) {
    const trigger = gsap.from(element, {
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
      overwrite: 'auto',
    });

    this.triggers.push(trigger.scrollTrigger);
  }

  /**
   * Create parallax animation (GPU accelerated)
   */
  createParallaxAnimation(element, speed = 0.5, options = {}) {
    if (!element) return null;

    const trigger = gsap.to(element, {
      y: `${speed * 100}px`,
      scrollTrigger: {
        trigger: element,
        start: 'top center',
        end: 'bottom center',
        scrub: 1,
        markers: false,
        ...options,
      },
      overwrite: 'auto',
    });

    this.triggers.push(trigger.scrollTrigger);
    return trigger;
  }

  /**
   * Create counter animation
   */
  createCounterAnimation(element, target, options = {}) {
    if (!element || isNaN(target)) return null;

    const config = {
      duration: 2,
      ease: 'power2.out',
      ...options,
    };

    const counter = { value: 0 };

    const trigger = gsap.to(counter, {
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
      overwrite: 'auto',
    });

    this.triggers.push(trigger.scrollTrigger);
    return trigger;
  }

  /**
   * Refresh all scroll animations
   */
  refresh() {
    ScrollTrigger.refresh();
  }

  /**
   * Cleanup all scroll animations and triggers
   */
  destroy() {
    try {
      // Clear batch timeout
      if (this.batchTimeout) {
        clearTimeout(this.batchTimeout);
        this.batchTimeout = null;
      }

      // Kill all triggers
      this.triggers.forEach(trigger => {
        if (trigger) {
          trigger.kill();
        }
      });

      this.triggers = [];
      this.batchQueue = [];
      this.isInitialized = false;

      console.log('[ScrollAnimations] ✓ Cleanup complete');
    } catch (error) {
      console.error('[ScrollAnimations] Error during cleanup:', error);
    }
  }
}

export const scrollAnimationsOptimized = new OptimizedScrollAnimations();

/**
 * Initialize optimized scroll animations
 */
export const initOptimizedScrollAnimations = () => {
  scrollAnimationsOptimized.init();
};

export default scrollAnimationsOptimized;
