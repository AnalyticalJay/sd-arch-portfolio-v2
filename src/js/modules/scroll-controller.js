/**
 * Scroll Controller
 * Manages Lenis smooth scroll and its integration with GSAP ScrollTrigger.
 */

import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { AnimationConfig } from './animation-config';

gsap.registerPlugin(ScrollTrigger);

class ScrollController {
  constructor() {
    this.lenis = null;
    this.rafId = null;
    this.isInitialized = false;
  }

  /**
   * Initialize smooth scroll
   */
  init() {
    if (this.isInitialized) return this.lenis;

    try {
      this.lenis = new Lenis({
        duration: 1.2,
        easing: AnimationConfig.ease.lenis,
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 1,
        smoothTouch: false,
        touchMultiplier: 2,
        infinite: false,
      });

      // Sync ScrollTrigger with Lenis
      this.lenis.on('scroll', ScrollTrigger.update);

      // Add Lenis to GSAP ticker
      gsap.ticker.add((time) => {
        this.lenis.raf(time * 1000);
      });

      // Disable GSAP lag smoothing to keep in sync with Lenis
      gsap.ticker.lagSmoothing(0);

      this.isInitialized = true;
      console.log('[ScrollController] initialized successfully');
      return this.lenis;
    } catch (error) {
      console.error('[ScrollController] Initialization failed:', error);
      return null;
    }
  }

  /**
   * Scroll to a specific target
   * @param {string|Element|number} target 
   * @param {Object} options 
   */
  scrollTo(target, options = {}) {
    if (!this.lenis) return;
    this.lenis.scrollTo(target, options);
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
    
    // Remove from ticker
    gsap.ticker.remove(this.rafId);
  }
}

// Export as singleton
export const scrollController = new ScrollController();
export default scrollController;
