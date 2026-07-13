/**
 * Partner Marquee Module
 * Infinite scrolling marquee for technology partner logos
 * Optimized for performance and smooth motion
 */

import gsap from 'gsap';

/**
 * Initialize Partner Marquee
 */
export const initPartnerMarquee = () => {
  try {
    const marqueeContainer = document.querySelector('.partner-marquee-container');
    const marqueeContent = document.querySelector('.partner-marquee-content');
    
    if (!marqueeContainer || !marqueeContent) return;

    // Duplicate content for seamless loop
    // Clear any existing clones first (in case of re-init)
    const existingClones = marqueeContainer.querySelectorAll('.partner-marquee-content.is-clone');
    existingClones.forEach(c => c.remove());

    const clone = marqueeContent.cloneNode(true);
    clone.classList.add('is-clone');
    marqueeContainer.appendChild(clone);

    const updateMarquee = () => {
      const contentWidth = marqueeContent.offsetWidth;
      const gap = parseInt(window.getComputedStyle(marqueeContent).gap) || 0;
      const totalDistance = contentWidth + gap;
      
      // Reset positions
      gsap.set([marqueeContent, clone], { x: 0 });

      return gsap.to([marqueeContent, clone], {
        x: `-=${totalDistance}`,
        duration: 40, // Slower for premium feel
        ease: 'none',
        repeat: -1,
        paused: false
      });
    };

    let marqueeTween = updateMarquee();

    // Handle resize
    window.addEventListener('resize', () => {
      marqueeTween.kill();
      gsap.set([marqueeContent, clone], { x: 0 });
      marqueeTween = updateMarquee();
    });

    // Pause on hover for better readability/interaction
    marqueeContainer.addEventListener('mouseenter', () => {
      gsap.to(marqueeTween, { timeScale: 0, duration: 0.5, ease: 'power2.out' });
    });

    marqueeContainer.addEventListener('mouseleave', () => {
      gsap.to(marqueeTween, { timeScale: 1, duration: 0.5, ease: 'power2.in' });
    });

    console.log('[PartnerMarquee] ✓ Partner marquee initialized');
  } catch (error) {
    console.error('[PartnerMarquee] Error initializing partner marquee:', error);
  }
};

export default initPartnerMarquee;
