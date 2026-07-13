/**
 * Main Application Entry Point
 * Initializes all core modules and premium animations
 * Premium Motion & User Experience - Phase 3
 */

import '../css/main.css';
import gsap from 'gsap';

// Core modules
import { pageAnimationController } from './modules/page-animation-controller';
import { initEnhancedNavigation, initScrollSpy } from './modules/navigation-enhanced';

// Premium animation modules
import { initHeroAnimations, animateHeroStats, animateCtaButtonHover } from './modules/hero-animations';
import { initSectionAnimations, addCardHoverEffects } from './modules/section-animations';
import { initAdvancedScrollAnimations } from './modules/scroll-animations';
import { initMicroInteractions, initInputFocusEffects } from './modules/micro-interactions';
import { initPagePolish, createPreloader, addPageFadeTransition, initScrollToTopButton } from './modules/page-polish';
import { initCursorEffects } from './modules/cursor-effects';
import { initPerformanceOptimizations } from './modules/performance-optimization';

/**
 * Initialize Application
 * Runs when DOM is fully loaded
 */
const initializeApp = () => {
  try {
    console.log('[Main] 🚀 Initializing OpenV Group Premium Experience...');

    // Phase 1: Initialize Animation Framework & Smooth Scroll
    console.log('[Main] → Initializing animation framework...');
    pageAnimationController.init();

    // Phase 2: Initialize enhanced navigation
    console.log('[Main] → Initializing enhanced navigation...');
    initEnhancedNavigation();

    // Phase 3: Initialize page polish
    console.log('[Main] → Initializing page polish...');
    initPagePolish();
    addPageFadeTransition();
    initScrollToTopButton();

    // Phase 4: Initialize hero animations
    console.log('[Main] → Initializing hero section animations...');
    initHeroAnimations();
    animateHeroStats();
    animateCtaButtonHover();

    // Phase 5: Initialize advanced scroll animations (data-attribute based)
    console.log('[Main] → Initializing advanced scroll animations...');
    initAdvancedScrollAnimations();
    
    // Phase 5b: Initialize section-specific animations
    console.log('[Main] → Initializing section animations...');
    initSectionAnimations();
    addCardHoverEffects();

    // Phase 6: Initialize micro-interactions
    console.log('[Main] → Initializing micro-interactions...');
    initMicroInteractions();
    initInputFocusEffects();

    // Phase 7: Initialize cursor effects
    console.log('[Main] → Initializing cursor effects...');
    initCursorEffects();

    // Phase 8: Initialize performance optimizations
    console.log('[Main] → Initializing performance optimizations...');
    initPerformanceOptimizations();

    // Final: Log success
    console.log('[Main] ✅ OpenV Group Premium Experience Ready');
    console.log('[Main] 🎨 Premium Motion & User Experience - Phase 4 Complete');
    console.log('[Main] 📊 All modules initialized and optimized for peak performance');
  } catch (error) {
    console.error('[Main] ❌ Error during initialization:', error);
  }
};

/**
 * Cleanup on Page Unload
 */
const cleanupOnUnload = () => {
  try {
    console.log('[Main] 🧹 Cleaning up resources...');
    // Kill all animations
    gsap.killTweensOf('*');
    // Cleanup will be handled by individual modules
  } catch (error) {
    console.error('[Main] Error during cleanup:', error);
  }
};

/**
 * Wait for DOM to be ready
 */
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeApp);
} else {
  initializeApp();
}

/**
 * Cleanup on unload
 */
window.addEventListener('beforeunload', cleanupOnUnload);

/**
 * Export for external use
 */
export { initializeApp, cleanupOnUnload };
