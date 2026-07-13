/**
 * Accessible Page Polish Module
 * Preloader, scroll progress indicator, page transitions
 * Provides premium page-level visual polish while respecting motion preferences
 */

import gsap from 'gsap';
import { scrollController } from './scroll-controller';
import { prefersReducedMotion, getAnimationDuration } from './performance-optimization-v2';

/**
 * Initialize Accessible Page Polish
 * Sets up all page-level polish effects with motion support
 */
export const initAccessiblePagePolish = () => {
  try {
    // Initialize scroll progress indicator
    initScrollProgressIndicator();
    
    // Initialize page transitions
    initPageTransitions();
    
    // Initialize loading states
    initLoadingStates();

    console.log('[AccessiblePagePolish] ✓ Page polish initialized');
  } catch (error) {
    console.error('[AccessiblePagePolish] Error initializing page polish:', error);
  }
};

/**
 * Initialize Scroll Progress Indicator
 * Animated progress bar based on scroll position
 * Respects prefers-reduced-motion
 */
const initScrollProgressIndicator = () => {
  try {
    // Create progress bar if it doesn't exist
    let progressBar = document.querySelector('.scroll-progress-bar');
    
    if (!progressBar) {
      progressBar = document.createElement('div');
      progressBar.className = 'scroll-progress-bar';
      progressBar.setAttribute('aria-hidden', 'true');
      progressBar.style.position = 'fixed';
      progressBar.style.top = '0';
      progressBar.style.left = '0';
      progressBar.style.height = '3px';
      progressBar.style.backgroundColor = '#13C46B';
      progressBar.style.width = '0%';
      progressBar.style.zIndex = '9999';
      progressBar.style.boxShadow = '0 0 10px rgba(19, 196, 107, 0.5)';
      document.body.appendChild(progressBar);
    }

    // Update progress on scroll using Lenis
    scrollController.onScroll((e) => {
      const scrollTop = e.scroll || window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;

      // Use immediate update for reduced motion users
      if (prefersReducedMotion()) {
        progressBar.style.width = `${scrollPercent}%`;
      } else {
        gsap.to(progressBar, {
          width: `${scrollPercent}%`,
          duration: 0.1,
          ease: 'none',
        });
      }
    });

    console.log('[AccessiblePagePolish] ✓ Scroll progress indicator initialized');
  } catch (error) {
    console.error('[AccessiblePagePolish] Error initializing scroll progress indicator:', error);
  }
};

/**
 * Initialize Page Transitions
 * Smooth transitions between page states
 * Respects prefers-reduced-motion
 */
const initPageTransitions = () => {
  try {
    const fadeDuration = getAnimationDuration(0.4, 0);

    // Fade in page on load
    gsap.from('body', {
      opacity: 0,
      duration: fadeDuration,
      ease: 'power2.out',
    });

    // Handle link clicks for page transitions
    const internalLinks = document.querySelectorAll('a[href^="/"]');
    
    internalLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        // Skip if link has target="_blank"
        if (link.target === '_blank') return;
        
        // Skip if it's a hash link
        if (link.href.includes('#')) return;

        e.preventDefault();
        
        const href = link.href;

        // Fade out current page
        gsap.to('body', {
          opacity: 0,
          duration: fadeDuration,
          ease: 'power2.in',
          onComplete: () => {
            // Navigate to new page
            window.location.href = href;
          }
        });
      });
    });

    console.log('[AccessiblePagePolish] ✓ Page transitions initialized');
  } catch (error) {
    console.error('[AccessiblePagePolish] Error initializing page transitions:', error);
  }
};

/**
 * Initialize Loading States
 * Premium loading overlay and spinner
 * Respects prefers-reduced-motion
 */
const initLoadingStates = () => {
  try {
    // Create loading overlay
    const loadingOverlay = document.createElement('div');
    loadingOverlay.id = 'loading-overlay';
    loadingOverlay.setAttribute('aria-hidden', 'true');
    loadingOverlay.setAttribute('role', 'status');
    loadingOverlay.setAttribute('aria-label', 'Loading');
    loadingOverlay.style.position = 'fixed';
    loadingOverlay.style.top = '0';
    loadingOverlay.style.left = '0';
    loadingOverlay.style.width = '100%';
    loadingOverlay.style.height = '100%';
    loadingOverlay.style.backgroundColor = 'rgba(7, 17, 28, 0.8)';
    loadingOverlay.style.display = 'none';
    loadingOverlay.style.zIndex = '9998';
    loadingOverlay.style.backdropFilter = 'blur(4px)';
    loadingOverlay.style.flexDirection = 'column';
    loadingOverlay.style.alignItems = 'center';
    loadingOverlay.style.justifyContent = 'center';
    
    // Create loading spinner
    const spinner = document.createElement('div');
    spinner.style.position = 'absolute';
    spinner.style.top = '50%';
    spinner.style.left = '50%';
    spinner.style.transform = 'translate(-50%, -50%)';
    spinner.style.width = '40px';
    spinner.style.height = '40px';
    spinner.style.border = '3px solid rgba(19, 196, 107, 0.2)';
    spinner.style.borderTop = '3px solid #13C46B';
    spinner.style.borderRadius = '50%';
    
    // Add aria-label for accessibility
    spinner.setAttribute('aria-label', 'Loading spinner');
    
    loadingOverlay.appendChild(spinner);
    document.body.appendChild(loadingOverlay);

    // Animate spinner only if motion is allowed
    if (!prefersReducedMotion()) {
      gsap.to(spinner, {
        rotation: 360,
        duration: 1,
        repeat: -1,
        ease: 'none',
      });
    } else {
      // Show static spinner for reduced motion users
      spinner.style.borderTop = '3px solid rgba(19, 196, 107, 0.5)';
    }

    // Export functions to show/hide loading
    window.showLoading = () => {
      const showDuration = getAnimationDuration(0.2, 0);
      loadingOverlay.style.display = 'flex';
      
      if (prefersReducedMotion()) {
        loadingOverlay.style.opacity = '1';
      } else {
        gsap.to(loadingOverlay, {
          opacity: 1,
          duration: showDuration,
          ease: 'power2.out',
        });
      }
    };

    window.hideLoading = () => {
      const hideDuration = getAnimationDuration(0.2, 0);
      
      if (prefersReducedMotion()) {
        loadingOverlay.style.display = 'none';
        loadingOverlay.style.opacity = '0';
      } else {
        gsap.to(loadingOverlay, {
          opacity: 0,
          duration: hideDuration,
          ease: 'power2.out',
          onComplete: () => {
            loadingOverlay.style.display = 'none';
          },
        });
      }
    };

    console.log('[AccessiblePagePolish] ✓ Loading states initialized');
  } catch (error) {
    console.error('[AccessiblePagePolish] Error initializing loading states:', error);
  }
};

/**
 * Create Preloader
 * Premium preloader animation on page load
 * Respects prefers-reduced-motion
 */
export const createAccessiblePreloader = () => {
  try {
    if (prefersReducedMotion()) {
      // Skip preloader for reduced motion users
      return;
    }

    // Create preloader element
    const preloader = document.createElement('div');
    preloader.id = 'preloader';
    preloader.setAttribute('aria-hidden', 'true');
    preloader.style.position = 'fixed';
    preloader.style.top = '0';
    preloader.style.left = '0';
    preloader.style.width = '100%';
    preloader.style.height = '100%';
    preloader.style.backgroundColor = '#07111C';
    preloader.style.display = 'flex';
    preloader.style.alignItems = 'center';
    preloader.style.justifyContent = 'center';
    preloader.style.zIndex = '99999';

    // Create preloader content
    const preloaderContent = document.createElement('div');
    preloaderContent.style.textAlign = 'center';

    // Add logo or brand element
    const logo = document.createElement('img');
    logo.src = '/assets/images/logo.svg';
    logo.alt = '';
    logo.style.height = '60px';
    logo.style.marginBottom = '40px';
    logo.style.opacity = '0';

    // Add loading text
    const loadingText = document.createElement('p');
    loadingText.textContent = 'Loading...';
    loadingText.style.color = '#13C46B';
    loadingText.style.fontSize = '14px';
    loadingText.style.fontWeight = 'bold';
    loadingText.style.letterSpacing = '2px';
    loadingText.style.opacity = '0';

    preloaderContent.appendChild(logo);
    preloaderContent.appendChild(loadingText);
    preloader.appendChild(preloaderContent);
    document.body.appendChild(preloader);

    // Animate preloader
    const timeline = gsap.timeline();
    
    timeline
      .to(logo, { opacity: 1, duration: 0.4, ease: 'power2.out' }, 0)
      .to(loadingText, { opacity: 1, duration: 0.4, ease: 'power2.out' }, 0.1)
      .to(logo, { y: -20, duration: 0.8, ease: 'sine.inOut', repeat: -1 }, 0.4)
      .to(loadingText, { opacity: 0.5, duration: 0.8, ease: 'sine.inOut', repeat: -1 }, 0.4);

    // Remove preloader on page load
    window.addEventListener('load', () => {
      timeline.kill();
      gsap.to(preloader, {
        opacity: 0,
        duration: 0.6,
        ease: 'power2.in',
        onComplete: () => {
          preloader.remove();
        }
      });
    });

    console.log('[AccessiblePagePolish] ✓ Preloader created');
  } catch (error) {
    console.error('[AccessiblePagePolish] Error creating preloader:', error);
  }
};

/**
 * Announce to Screen Readers
 * Helper function to announce messages to screen reader users
 * @param {string} message - Message to announce
 * @param {string} priority - 'polite' or 'assertive'
 */
export const announceToScreenReaders = (message, priority = 'polite') => {
  try {
    const announcement = document.createElement('div');
    announcement.setAttribute('role', 'status');
    announcement.setAttribute('aria-live', priority);
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = message;
    
    document.body.appendChild(announcement);
    
    // Remove after announcement
    setTimeout(() => {
      announcement.remove();
    }, 1000);
  } catch (error) {
    console.error('[AccessiblePagePolish] Error announcing to screen readers:', error);
  }
};

export const accessiblePagePolish = {
  initAccessiblePagePolish,
  createAccessiblePreloader,
  announceToScreenReaders,
};

export default accessiblePagePolish;
