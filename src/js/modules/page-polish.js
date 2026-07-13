/**
 * Page Polish Module
 * Preloader, scroll progress indicator, page transitions
 * Provides premium page-level visual polish
 */

import gsap from 'gsap';

/**
 * Initialize Page Polish
 * Sets up all page-level polish effects
 */
export const initPagePolish = () => {
  try {
    // Initialize scroll progress indicator
    initScrollProgressIndicator();
    
    // Initialize page transitions
    initPageTransitions();
    
    // Initialize loading states
    initLoadingStates();

    console.log('[PagePolish] ✓ Page polish initialized');
  } catch (error) {
    console.error('[PagePolish] Error initializing page polish:', error);
  }
};

/**
 * Initialize Scroll Progress Indicator
 * Animated progress bar based on scroll position
 */
const initScrollProgressIndicator = () => {
  try {
    // Create progress bar if it doesn't exist
    let progressBar = document.querySelector('.scroll-progress-bar');
    
    if (!progressBar) {
      progressBar = document.createElement('div');
      progressBar.className = 'scroll-progress-bar';
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

    // Update progress on scroll
    window.addEventListener('scroll', () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;

      gsap.to(progressBar, {
        width: `${scrollPercent}%`,
        duration: 0.1,
        ease: 'none',
      });
    }, { passive: true });

    console.log('[PagePolish] ✓ Scroll progress indicator initialized');
  } catch (error) {
    console.error('[PagePolish] Error initializing scroll progress indicator:', error);
  }
};

/**
 * Initialize Page Transitions
 * Smooth transitions between page states
 */
const initPageTransitions = () => {
  try {
    // Fade in page on load
    gsap.from('body', {
      opacity: 0,
      duration: 0.4,
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

        // Fade out
        gsap.to('body', {
          opacity: 0,
          duration: 0.3,
          ease: 'power2.in',
          onComplete: () => {
            window.location.href = href;
          },
        });
      });
    });

    console.log('[PagePolish] ✓ Page transitions initialized');
  } catch (error) {
    console.error('[PagePolish] Error initializing page transitions:', error);
  }
};

/**
 * Initialize Loading States
 * Premium loading indicators for async operations
 */
const initLoadingStates = () => {
  try {
    // Create loading overlay
    const loadingOverlay = document.createElement('div');
    loadingOverlay.id = 'loading-overlay';
    loadingOverlay.style.position = 'fixed';
    loadingOverlay.style.top = '0';
    loadingOverlay.style.left = '0';
    loadingOverlay.style.width = '100%';
    loadingOverlay.style.height = '100%';
    loadingOverlay.style.backgroundColor = 'rgba(7, 17, 28, 0.8)';
    loadingOverlay.style.display = 'none';
    loadingOverlay.style.zIndex = '9998';
    loadingOverlay.style.backdropFilter = 'blur(4px)';
    
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
    
    loadingOverlay.appendChild(spinner);
    document.body.appendChild(loadingOverlay);

    // Animate spinner
    gsap.to(spinner, {
      rotation: 360,
      duration: 1,
      repeat: -1,
      ease: 'none',
    });

    // Export functions to show/hide loading
    window.showLoading = () => {
      gsap.to(loadingOverlay, {
        display: 'flex',
        opacity: 1,
        duration: 0.2,
        ease: 'power2.out',
      });
    };

    window.hideLoading = () => {
      gsap.to(loadingOverlay, {
        opacity: 0,
        duration: 0.2,
        ease: 'power2.out',
        onComplete: () => {
          loadingOverlay.style.display = 'none';
        },
      });
    };

    console.log('[PagePolish] ✓ Loading states initialized');
  } catch (error) {
    console.error('[PagePolish] Error initializing loading states:', error);
  }
};

/**
 * Create Preloader
 * Premium preloader animation on page load
 */
export const createPreloader = () => {
  try {
    // Create preloader element
    const preloader = document.createElement('div');
    preloader.id = 'preloader';
    preloader.style.position = 'fixed';
    preloader.style.top = '0';
    preloader.style.left = '0';
    preloader.style.width = '100%';
    preloader.style.height = '100%';
    preloader.style.backgroundColor = '#07111C';
    preloader.style.display = 'flex';
    preloader.style.alignItems = 'center';
    preloader.style.justifyContent = 'center';
    preloader.style.zIndex = '9999';

    // Create preloader content
    const preloaderContent = document.createElement('div');
    preloaderContent.style.textAlign = 'center';

    // Create logo
    const logo = document.createElement('img');
    logo.src = '/assets/images/logo.svg';
    logo.style.height = '40px';
    logo.style.marginBottom = '24px';
    logo.style.opacity = '0';

    // Create loading bar
    const loadingBar = document.createElement('div');
    loadingBar.style.width = '100px';
    loadingBar.style.height = '3px';
    loadingBar.style.backgroundColor = 'rgba(19, 196, 107, 0.2)';
    loadingBar.style.borderRadius = '2px';
    loadingBar.style.overflow = 'hidden';

    const loadingBarFill = document.createElement('div');
    loadingBarFill.style.height = '100%';
    loadingBarFill.style.backgroundColor = '#13C46B';
    loadingBarFill.style.width = '0%';
    loadingBarFill.style.boxShadow = '0 0 10px rgba(19, 196, 107, 0.5)';

    loadingBar.appendChild(loadingBarFill);
    preloaderContent.appendChild(logo);
    preloaderContent.appendChild(loadingBar);
    preloader.appendChild(preloaderContent);
    document.body.appendChild(preloader);

    // Preloader timeline
    const preloaderTimeline = gsap.timeline();

    // Fade in logo
    preloaderTimeline.to(logo, {
      opacity: 1,
      duration: 0.4,
      ease: 'power2.out',
    }, 0);

    // Animate loading bar
    preloaderTimeline.to(loadingBarFill, {
      width: '100%',
      duration: 1.5,
      ease: 'power2.inOut',
    }, 0.2);

    // Fade out preloader
    preloaderTimeline.to(preloader, {
      opacity: 0,
      duration: 0.6,
      ease: 'power2.out',
      delay: 0.3,
      onComplete: () => {
        preloader.remove();
      },
    }, 1.7);

    console.log('[PagePolish] ✓ Preloader created');
  } catch (error) {
    console.error('[PagePolish] Error creating preloader:', error);
  }
};

/**
 * Add Page Fade Transition
 * Fade effect for page visibility changes
 */
export const addPageFadeTransition = () => {
  try {
    // Fade in on page visibility
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        gsap.to('body', {
          opacity: 0.5,
          duration: 0.3,
          ease: 'power2.out',
        });
      } else {
        gsap.to('body', {
          opacity: 1,
          duration: 0.3,
          ease: 'power2.out',
        });
      }
    });

    console.log('[PagePolish] ✓ Page fade transition added');
  } catch (error) {
    console.error('[PagePolish] Error adding page fade transition:', error);
  }
};

/**
 * Scroll to Top Button
 * Create and animate scroll to top button
 */
export const initScrollToTopButton = () => {
  try {
    // Create button
    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.id = 'scroll-to-top';
    scrollToTopBtn.innerHTML = '↑';
    scrollToTopBtn.style.position = 'fixed';
    scrollToTopBtn.style.bottom = '24px';
    scrollToTopBtn.style.right = '24px';
    scrollToTopBtn.style.width = '48px';
    scrollToTopBtn.style.height = '48px';
    scrollToTopBtn.style.borderRadius = '50%';
    scrollToTopBtn.style.backgroundColor = '#13C46B';
    scrollToTopBtn.style.color = '#07111C';
    scrollToTopBtn.style.border = 'none';
    scrollToTopBtn.style.cursor = 'pointer';
    scrollToTopBtn.style.fontSize = '20px';
    scrollToTopBtn.style.fontWeight = 'bold';
    scrollToTopBtn.style.display = 'none';
    scrollToTopBtn.style.zIndex = '1000';
    scrollToTopBtn.style.opacity = '0';
    scrollToTopBtn.style.transition = 'opacity 0.3s ease';

    document.body.appendChild(scrollToTopBtn);

    // Show/hide button on scroll
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        gsap.to(scrollToTopBtn, {
          display: 'flex',
          opacity: 1,
          duration: 0.3,
          ease: 'power2.out',
        });
      } else {
        gsap.to(scrollToTopBtn, {
          opacity: 0,
          duration: 0.3,
          ease: 'power2.out',
          onComplete: () => {
            scrollToTopBtn.style.display = 'none';
          },
        });
      }
    }, { passive: true });

    // Scroll to top on click
    scrollToTopBtn.addEventListener('click', () => {
      gsap.to(window, {
        scrollTo: {
          y: 0,
          autoKill: false,
        },
        duration: 1,
        ease: 'power2.out',
      });
    });

    console.log('[PagePolish] ✓ Scroll to top button initialized');
  } catch (error) {
    console.error('[PagePolish] Error initializing scroll to top button:', error);
  }
};

/**
 * Page Polish Export Object
 */
export const pagePolish = {
  initPagePolish,
  createPreloader,
  addPageFadeTransition,
  initScrollToTopButton,
};

export default pagePolish;
