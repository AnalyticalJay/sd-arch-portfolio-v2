/**
 * Page Animation Controller
 * Orchestrates the initialization and lifecycle of animations on a page.
 */

import { scrollController } from './scroll-controller-accessible';
import { animationFramework } from './animation-framework';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

class PageAnimationController {
  constructor() {
    this.isInitialized = false;
  }

  /**
   * Initialize all animations for the current page
   */
  init() {
    if (this.isInitialized) return;

    console.log('[PageAnimationController] Initializing...');

    // 1. Initialize Smooth Scroll
    scrollController.init();

    // 2. Handle Reduced Motion
    this.handleReducedMotion();

    // 3. Global Refresh on resize
    window.addEventListener('resize', () => {
      scrollController.refresh();
    });

    // 4. Set up global observers if needed
    this.initGlobalAnimations();

    this.isInitialized = true;
    console.log('[PageAnimationController] Ready');
  }

  /**
   * Global reduced motion handling
   */
  handleReducedMotion() {
    if (animationFramework.prefersReducedMotion()) {
      document.documentElement.classList.add('reduce-motion');
      console.log('[PageAnimationController] Reduced motion enabled');
      
      // Optionally adjust global GSAP timeScale
      // gsap.globalTimeline.timeScale(0); // If we want to kill all motion
    }
  }

  /**
   * Initialize generic animations that apply to all pages
   * NOTE: Global [data-animation] processing is now handled by scroll-animations.js
   * This method is kept for backwards compatibility but does nothing.
   * Section-specific animations are handled by their respective modules.
   */
  initGlobalAnimations() {
    // Global animations are now handled by scroll-animations.js
    // to avoid duplicate ScrollTriggers and conflicting animations
    console.log('[PageAnimationController] Global animations delegated to scroll-animations.js');
  }

  /**
   * Refresh all ScrollTriggers (useful after dynamic content loading)
   */
  refresh() {
    scrollController.refresh();
  }

  /**
   * Cleanup animations and controllers
   */
  destroy() {
    scrollController.destroy();
    ScrollTrigger.getAll().forEach(t => t.kill());
    gsap.killTweensOf('*');
    this.isInitialized = false;
  }
}

export const pageAnimationController = new PageAnimationController();
export default pageAnimationController;
