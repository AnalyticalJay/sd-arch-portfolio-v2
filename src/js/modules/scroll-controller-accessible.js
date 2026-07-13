/**
 * Accessible Scroll Controller
 * Manages Lenis smooth scroll while respecting prefers-reduced-motion
 */

import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { prefersReducedMotion } from './performance-optimization-v2';

gsap.registerPlugin(ScrollTrigger);

class AccessibleScrollController {
  constructor() {
    this.lenis = null;
    this.isInitialized = false;
    this.scrollCallbacks = [];
  }

  /**
   * Initialize smooth scroll
   */
  init() {
    if (this.isInitialized) return this.lenis;

    // Check for reduced motion
    const isReducedMotion = prefersReducedMotion();

    try {
      this.lenis = new Lenis({
        duration: isReducedMotion ? 0.01 : 1.5,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: !isReducedMotion,
        wheelMultiplier: isReducedMotion ? 1 : 1.1,
        smoothTouch: false,
        touchMultiplier: 1.5,
        infinite: false,
        lerp: isReducedMotion ? 1 : 0.1,
      });

      // Sync ScrollTrigger with Lenis
      this.lenis.on('scroll', (e) => {
        ScrollTrigger.update();
        this.scrollCallbacks.forEach(callback => callback(e));
      });

      // Add Lenis to GSAP ticker
      gsap.ticker.add((time) => {
        this.lenis.raf(time * 1000);
      });

      gsap.ticker.lagSmoothing(0);

      this.isInitialized = true;
      console.log(`[ScrollController] ✓ ${isReducedMotion ? 'Standard' : 'Premium'} scroll initialized`);
      return this.lenis;
    } catch (error) {
      console.error('[ScrollController] Initialization failed:', error);
      return null;
    }
  }

  onScroll(callback) {
    if (typeof callback === 'function') {
      this.scrollCallbacks.push(callback);
    }
  }

  scrollTo(target, options = {}) {
    if (!this.lenis) return;
    
    const isReducedMotion = prefersReducedMotion();
    const defaultOptions = {
      offset: 0,
      duration: isReducedMotion ? 0 : 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      immediate: isReducedMotion,
      ...options
    };

    this.lenis.scrollTo(target, defaultOptions);
  }

  scrollToTop(options = {}) {
    this.scrollTo(0, options);
  }

  pause() {
    if (!this.lenis) return;
    this.lenis.stop();
  }

  resume() {
    if (!this.lenis) return;
    this.lenis.start();
  }

  refresh() {
    if (!this.lenis) return;
    this.lenis.resize();
    ScrollTrigger.refresh();
  }

  destroy() {
    if (!this.lenis) return;
    this.lenis.destroy();
    this.lenis = null;
    this.isInitialized = false;
    this.scrollCallbacks = [];
  }
}

export const scrollController = new AccessibleScrollController();
export default scrollController;
