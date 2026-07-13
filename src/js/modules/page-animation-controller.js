/**
 * Page Animation Controller
 * Orchestrates the initialization and lifecycle of animations on a page.
 */

import { scrollController } from './scroll-controller';
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
   * e.g. looking for data-animation attributes
   */
  initGlobalAnimations() {
    // Entrance animations via data attributes
    const animatedElements = document.querySelectorAll('[data-animation]');
    
    animatedElements.forEach(el => {
      const type = el.dataset.animation;
      const delay = parseFloat(el.dataset.animationDelay) || 0;
      
      switch (type) {
        case 'fade-up':
          animationFramework.fadeUp(el, { delay });
          break;
        case 'fade-in':
          animationFramework.fadeUp(el, { y: 0, delay });
          break;
        case 'scale-in':
          animationFramework.scale(el, { delay });
          break;
        case 'stagger-in':
          const children = el.children;
          if (children.length > 0) {
            animationFramework.stagger(children, { delay });
          }
          break;
      }
    });
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
