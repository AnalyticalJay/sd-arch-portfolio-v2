/**
 * Optimized Scroll Controller
 * Manages Lenis smooth scroll with proper cleanup, batching, and performance optimizations
 * Respects prefers-reduced-motion
 */

import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { prefersReducedMotion } from './performance-optimization-v2';

gsap.registerPlugin(ScrollTrigger);

class OptimizedScrollController {
  constructor() {
    this.lenis = null;
    this.isInitialized = false;
    this.scrollCallbacks = [];
    this.tickerCallback = null;
    this.scrollListener = null;
    this.resizeObserver = null;
    this.lastScrollTime = 0;
    this.scrollBatchDelay = 16; // ~60fps
  }

  /**
   * Initialize smooth scroll with optimizations
   */
  init() {
    if (this.isInitialized) return this.lenis;

    const isReducedMotion = prefersReducedMotion();

    try {
      // Create Lenis instance with optimized settings
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

      // Optimized scroll listener with batching
      this.scrollListener = (e) => {
        const now = performance.now();
        
        // Batch updates to avoid excessive reflows
        if (now - this.lastScrollTime >= this.scrollBatchDelay) {
          ScrollTrigger.update();
          this.lastScrollTime = now;
        }
        
        // Execute callbacks
        this.scrollCallbacks.forEach(callback => {
          try {
            callback(e);
          } catch (error) {
            console.error('[ScrollController] Callback error:', error);
          }
        });
      };

      this.lenis.on('scroll', this.scrollListener);

      // Add Lenis to GSAP ticker with proper reference
      this.tickerCallback = (time) => {
        this.lenis.raf(time * 1000);
      };

      gsap.ticker.add(this.tickerCallback);
      gsap.ticker.lagSmoothing(0);

      // Setup resize observer for dynamic content
      this.setupResizeObserver();

      this.isInitialized = true;
      console.log(`[ScrollController] ✓ ${isReducedMotion ? 'Standard' : 'Premium'} scroll initialized with optimizations`);
      return this.lenis;
    } catch (error) {
      console.error('[ScrollController] Initialization failed:', error);
      return null;
    }
  }

  /**
   * Setup ResizeObserver for dynamic content changes
   */
  setupResizeObserver() {
    try {
      if (!window.ResizeObserver) return;

      this.resizeObserver = new ResizeObserver(() => {
        // Debounce refresh calls
        if (this.refreshTimeout) clearTimeout(this.refreshTimeout);
        this.refreshTimeout = setTimeout(() => {
          this.refresh();
        }, 150);
      });

      this.resizeObserver.observe(document.body);
    } catch (error) {
      console.error('[ScrollController] ResizeObserver setup failed:', error);
    }
  }

  /**
   * Register scroll callback
   */
  onScroll(callback) {
    if (typeof callback === 'function') {
      this.scrollCallbacks.push(callback);
    }
  }

  /**
   * Remove scroll callback
   */
  offScroll(callback) {
    const index = this.scrollCallbacks.indexOf(callback);
    if (index > -1) {
      this.scrollCallbacks.splice(index, 1);
    }
  }

  /**
   * Scroll to target with optimizations
   */
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

  /**
   * Scroll to top
   */
  scrollToTop(options = {}) {
    this.scrollTo(0, options);
  }

  /**
   * Pause scrolling
   */
  pause() {
    if (!this.lenis) return;
    this.lenis.stop();
  }

  /**
   * Resume scrolling
   */
  resume() {
    if (!this.lenis) return;
    this.lenis.start();
  }

  /**
   * Refresh scroll calculations
   */
  refresh() {
    if (!this.lenis) return;
    this.lenis.resize();
    ScrollTrigger.refresh();
  }

  /**
   * Complete cleanup of all resources
   */
  destroy() {
    try {
      // Clear refresh timeout
      if (this.refreshTimeout) {
        clearTimeout(this.refreshTimeout);
        this.refreshTimeout = null;
      }

      // Remove ResizeObserver
      if (this.resizeObserver) {
        this.resizeObserver.disconnect();
        this.resizeObserver = null;
      }

      // Remove scroll listener
      if (this.lenis && this.scrollListener) {
        this.lenis.off('scroll', this.scrollListener);
        this.scrollListener = null;
      }

      // Remove ticker callback
      if (this.tickerCallback) {
        gsap.ticker.remove(this.tickerCallback);
        this.tickerCallback = null;
      }

      // Destroy Lenis
      if (this.lenis) {
        this.lenis.destroy();
        this.lenis = null;
      }

      // Clear callbacks
      this.scrollCallbacks = [];
      this.isInitialized = false;

      console.log('[ScrollController] ✓ Cleanup complete');
    } catch (error) {
      console.error('[ScrollController] Error during cleanup:', error);
    }
  }

  /**
   * Get current scroll position
   */
  getScrollPosition() {
    return this.lenis ? this.lenis.scroll : window.scrollY;
  }

  /**
   * Check if scrolling is active
   */
  isScrolling() {
    return this.lenis ? this.lenis.isScrolling : false;
  }
}

export const scrollControllerOptimized = new OptimizedScrollController();
export default scrollControllerOptimized;
