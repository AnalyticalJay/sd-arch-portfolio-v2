/**
 * Scroll Controller
 * Manages Lenis smooth scroll and its integration with GSAP ScrollTrigger.
 * Premium enterprise-grade scrolling experience.
 */

import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { AnimationConfig } from './animation-config';

gsap.registerPlugin(ScrollTrigger);

class ScrollController {
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

    try {
      this.lenis = new Lenis({
        duration: 1.5, // Slightly longer for more premium feel
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Premium exponential easing
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 1.1, // Subtle boost for responsiveness
        smoothTouch: false,
        touchMultiplier: 1.5,
        infinite: false,
        lerp: 0.1, // Added lerp for extra smoothness
      });

      // Sync ScrollTrigger with Lenis
      this.lenis.on('scroll', (e) => {
        ScrollTrigger.update();
        // Execute registered callbacks
        this.scrollCallbacks.forEach(callback => callback(e));
      });

      // Add Lenis to GSAP ticker for high-performance RAF management
      gsap.ticker.add((time) => {
        this.lenis.raf(time * 1000);
      });

      // Disable GSAP lag smoothing to keep in sync with Lenis
      gsap.ticker.lagSmoothing(0);

      this.isInitialized = true;
      console.log('[ScrollController] ✓ Premium Lenis initialized');
      return this.lenis;
    } catch (error) {
      console.error('[ScrollController] Initialization failed:', error);
      return null;
    }
  }

  /**
   * Register a scroll callback
   * Use this instead of window.addEventListener('scroll') for better sync
   * @param {Function} callback 
   */
  onScroll(callback) {
    if (typeof callback === 'function') {
      this.scrollCallbacks.push(callback);
    }
  }

  /**
   * Scroll to a specific target
   * @param {string|Element|number} target 
   * @param {Object} options 
   */
  scrollTo(target, options = {}) {
    if (!this.lenis) return;
    
    const defaultOptions = {
      offset: 0,
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      immediate: false,
      ...options
    };

    this.lenis.scrollTo(target, defaultOptions);
  }

  /**
   * Scroll to top of the page
   */
  scrollToTop(options = {}) {
    this.scrollTo(0, options);
  }

  /**
   * Pause scroll
   */
  pause() {
    if (!this.lenis) return;
    this.lenis.stop();
  }

  /**
   * Resume scroll
   */
  resume() {
    if (!this.lenis) return;
    this.lenis.start();
  }

  /**
   * Refresh scroll dimensions
   */
  refresh() {
    if (!this.lenis) return;
    this.lenis.resize();
    ScrollTrigger.refresh();
  }

  /**
   * Destroy instance
   */
  destroy() {
    if (!this.lenis) return;
    this.lenis.destroy();
    this.lenis = null;
    this.isInitialized = false;
    this.scrollCallbacks = [];
    
    // Cleanup ticker is handled by GSAP automatically if needed, 
    // but we can be explicit if we tracked the listener
  }
}

// Export as singleton
export const scrollController = new ScrollController();
export default scrollController;
