/**
 * Optimized Micro-Interactions Module
 * Consolidated hover/focus effects with event delegation and GPU acceleration
 * Eliminates duplicate animations and improves performance
 */

import gsap from 'gsap';
import { prefersReducedMotion } from './performance-optimization-v2';

class OptimizedMicroInteractions {
  constructor() {
    this.isInitialized = false;
    this.activeElements = new Map();
    this.delegatedListeners = [];
  }

  /**
   * Initialize all optimized micro-interactions
   */
  init() {
    if (this.isInitialized) return;

    try {
      // Use event delegation for better performance
      this.setupEventDelegation();
      this.isInitialized = true;
      console.log('[MicroInteractions] ✓ Optimized micro-interactions initialized');
    } catch (error) {
      console.error('[MicroInteractions] Error initializing:', error);
    }
  }

  /**
   * Setup event delegation to reduce listener count
   */
  setupEventDelegation() {
    // Single delegated listener for all interactive elements
    const handleMouseEnter = (e) => {
      const target = e.target.closest('.btn, .card-premium, a, .badge, svg, input, textarea, select');
      if (!target || prefersReducedMotion()) return;

      this.animateElementEnter(target);
    };

    const handleMouseLeave = (e) => {
      const target = e.target.closest('.btn, .card-premium, a, .badge, svg, input, textarea, select');
      if (!target || prefersReducedMotion()) return;

      this.animateElementLeave(target);
    };

    const handleFocus = (e) => {
      const target = e.target;
      if (!target.matches('.btn, a, input, textarea, select') || prefersReducedMotion()) return;

      this.animateElementFocus(target);
    };

    const handleBlur = (e) => {
      const target = e.target;
      if (!target.matches('.btn, a, input, textarea, select') || prefersReducedMotion()) return;

      this.animateElementBlur(target);
    };

    // Use capture phase for better event handling
    document.addEventListener('mouseenter', handleMouseEnter, { capture: true, passive: true });
    document.addEventListener('mouseleave', handleMouseLeave, { capture: true, passive: true });
    document.addEventListener('focus', handleFocus, { capture: true, passive: true });
    document.addEventListener('blur', handleBlur, { capture: true, passive: true });

    // Store listeners for cleanup
    this.delegatedListeners = [
      { type: 'mouseenter', handler: handleMouseEnter },
      { type: 'mouseleave', handler: handleMouseLeave },
      { type: 'focus', handler: handleFocus },
      { type: 'blur', handler: handleBlur }
    ];
  }

  /**
   * Animate element on enter with GPU acceleration
   */
  animateElementEnter(element) {
    // Prevent duplicate animations
    if (this.activeElements.has(element)) {
      gsap.killTweensOf(element);
    }

    const animConfig = this.getAnimationConfig(element);

    gsap.to(element, {
      ...animConfig.enter,
      overwrite: 'auto',
      onStart: () => this.activeElements.set(element, true),
    });
  }

  /**
   * Animate element on leave
   */
  animateElementLeave(element) {
    const animConfig = this.getAnimationConfig(element);

    gsap.to(element, {
      ...animConfig.leave,
      overwrite: 'auto',
      onComplete: () => this.activeElements.delete(element),
    });
  }

  /**
   * Animate element on focus
   */
  animateElementFocus(element) {
    if (this.activeElements.has(element)) {
      gsap.killTweensOf(element);
    }

    gsap.to(element, {
      y: -2,
      duration: 0.2,
      ease: 'power2.out',
      overwrite: 'auto',
      onStart: () => this.activeElements.set(element, true),
    });
  }

  /**
   * Animate element on blur
   */
  animateElementBlur(element) {
    gsap.to(element, {
      y: 0,
      duration: 0.2,
      ease: 'power2.out',
      overwrite: 'auto',
      onComplete: () => this.activeElements.delete(element),
    });
  }

  /**
   * Get animation configuration based on element type
   */
  getAnimationConfig(element) {
    // Use transform-based animations only (GPU accelerated)
    // Avoid expensive properties like boxShadow, backgroundColor, etc.

    if (element.classList.contains('btn')) {
      return {
        enter: {
          scale: 1.05,
          duration: 0.3,
          ease: 'power2.out',
        },
        leave: {
          scale: 1,
          duration: 0.3,
          ease: 'power2.out',
        }
      };
    }

    if (element.classList.contains('card-premium')) {
      return {
        enter: {
          y: -8,
          duration: 0.3,
          ease: 'power2.out',
        },
        leave: {
          y: 0,
          duration: 0.3,
          ease: 'power2.out',
        }
      };
    }

    if (element.tagName === 'A') {
      return {
        enter: {
          scale: 1.02,
          duration: 0.2,
          ease: 'power2.out',
        },
        leave: {
          scale: 1,
          duration: 0.2,
          ease: 'power2.out',
        }
      };
    }

    if (element.classList.contains('badge')) {
      return {
        enter: {
          scale: 1.05,
          duration: 0.2,
          ease: 'power2.out',
        },
        leave: {
          scale: 1,
          duration: 0.2,
          ease: 'power2.out',
        }
      };
    }

    // Default for other elements
    return {
      enter: {
        scale: 1.02,
        duration: 0.2,
        ease: 'power2.out',
      },
      leave: {
        scale: 1,
        duration: 0.2,
        ease: 'power2.out',
      }
    };
  }

  /**
   * Cleanup all event listeners
   */
  destroy() {
    try {
      // Remove delegated listeners
      this.delegatedListeners.forEach(({ type, handler }) => {
        document.removeEventListener(type, handler, { capture: true });
      });

      this.delegatedListeners = [];

      // Kill all active tweens
      this.activeElements.forEach((_, element) => {
        gsap.killTweensOf(element);
      });

      this.activeElements.clear();
      this.isInitialized = false;

      console.log('[MicroInteractions] ✓ Cleanup complete');
    } catch (error) {
      console.error('[MicroInteractions] Error during cleanup:', error);
    }
  }
}

export const microInteractionsOptimized = new OptimizedMicroInteractions();

/**
 * Initialize optimized micro-interactions
 */
export const initOptimizedMicroInteractions = () => {
  microInteractionsOptimized.init();
};

export default microInteractionsOptimized;
