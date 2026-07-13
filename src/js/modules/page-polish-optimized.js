/**
 * Optimized Page Polish Module
 * High-performance scroll progress indicator using transforms
 * Eliminates layout thrashing and expensive property animations
 */

import gsap from 'gsap';
import { prefersReducedMotion } from './performance-optimization-v2';

class OptimizedPagePolish {
  constructor() {
    this.progressBar = null;
    this.isInitialized = false;
    this.scrollCallback = null;
    this.lastScrollPercent = 0;
  }

  /**
   * Initialize optimized page polish
   */
  init() {
    if (this.isInitialized) return;

    try {
      this.initScrollProgressIndicator();
      this.isInitialized = true;
      console.log('[PagePolish] ✓ Optimized page polish initialized');
    } catch (error) {
      console.error('[PagePolish] Error initializing:', error);
    }
  }

  /**
   * Initialize scroll progress indicator with transform-based animation
   */
  initScrollProgressIndicator() {
    try {
      // Create progress bar if it doesn't exist
      this.progressBar = document.querySelector('.scroll-progress-bar');
      
      if (!this.progressBar) {
        this.progressBar = document.createElement('div');
        this.progressBar.className = 'scroll-progress-bar';
        this.progressBar.setAttribute('aria-hidden', 'true');
        this.progressBar.style.cssText = `
          position: fixed;
          top: 0;
          left: 0;
          height: 3px;
          background: linear-gradient(to right, #13C46B, #1B8EFF);
          width: 0%;
          z-index: 9999;
          transform: translateZ(0);
          will-change: width;
          backface-visibility: hidden;
        `;
        document.body.appendChild(this.progressBar);
      }

      // Setup scroll listener with optimized updates
      this.scrollCallback = this.updateProgressBar.bind(this);
      window.addEventListener('scroll', this.scrollCallback, { passive: true });

      console.log('[PagePolish] ✓ Scroll progress indicator initialized');
    } catch (error) {
      console.error('[PagePolish] Error initializing scroll progress:', error);
    }
  }

  /**
   * Update progress bar with optimized calculations
   */
  updateProgressBar() {
    if (!this.progressBar) return;

    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

    // Only update if change is significant (avoid excessive reflows)
    if (Math.abs(scrollPercent - this.lastScrollPercent) < 0.5) {
      return;
    }

    this.lastScrollPercent = scrollPercent;

    if (prefersReducedMotion()) {
      // Direct update for reduced motion users
      this.progressBar.style.width = `${scrollPercent}%`;
    } else {
      // Use requestAnimationFrame for smooth updates
      requestAnimationFrame(() => {
        this.progressBar.style.width = `${scrollPercent}%`;
      });
    }
  }

  /**
   * Cleanup all resources
   */
  destroy() {
    try {
      // Remove scroll listener
      if (this.scrollCallback) {
        window.removeEventListener('scroll', this.scrollCallback);
        this.scrollCallback = null;
      }

      // Remove progress bar
      if (this.progressBar && this.progressBar.parentNode) {
        this.progressBar.parentNode.removeChild(this.progressBar);
        this.progressBar = null;
      }

      this.isInitialized = false;
      console.log('[PagePolish] ✓ Cleanup complete');
    } catch (error) {
      console.error('[PagePolish] Error during cleanup:', error);
    }
  }
}

export const pagePolishOptimized = new OptimizedPagePolish();

/**
 * Initialize optimized page polish
 */
export const initOptimizedPagePolish = () => {
  pagePolishOptimized.init();
};

export default pagePolishOptimized;
