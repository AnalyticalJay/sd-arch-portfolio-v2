/**
 * Hero Section Animations
 * Premium entrance animations for hero section elements
 * Headline reveal, badge entrance, CTA stagger, background parallax
 */

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { prefersReducedMotion, getAnimationDuration } from './performance-optimization-v2';

gsap.registerPlugin(ScrollTrigger);

/**
 * Initialize Hero Animations
 * Orchestrates all hero section animations on page load
 */
export const initHeroAnimations = () => {
  try {
    // Skip animations if user prefers reduced motion
    if (prefersReducedMotion()) {
      console.log('[HeroAnimations] ✓ Hero animations skipped (reduced motion)');
      return;
    }

    // Create master timeline for hero animations
    const heroTimeline = gsap.timeline({
      delay: 0.2,
    });

    // Animate badge
    const badge = document.querySelector('[data-animation="fade-in"]');
    if (badge) {
      heroTimeline.from(badge, {
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: 'power2.out',
      }, 0);
    }

    // Animate headline with split effect
    const headline = document.querySelector('h1');
    if (headline) {
      animateHeadlineReveal(headline, heroTimeline);
    }

    // Animate subheading
    const subheading = document.querySelector('p.text-lg');
    if (subheading) {
      heroTimeline.from(subheading, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power2.out',
      }, 0.2);
    }

    // Animate CTA buttons
    const ctaContainer = document.querySelector('.flex.flex-wrap.gap-6');
    if (ctaContainer) {
      const buttons = ctaContainer.querySelectorAll('a, button');
      heroTimeline.from(buttons, {
        opacity: 0,
        y: 30,
        duration: 0.6,
        ease: 'power2.out',
        stagger: 0.15,
      }, 0.4);
    }

    // Stats bar animation is now handled by section-animations.js for scroll trigger consistency

    // Background parallax on scroll (skip for reduced motion)
    const heroBg = document.querySelector('.absolute.inset-0 img');
    if (heroBg && !prefersReducedMotion()) {
      animateHeroBackgroundParallax(heroBg);
    }

    console.log('[HeroAnimations] ✓ Hero animations initialized');
  } catch (error) {
    console.error('[HeroAnimations] Error initializing hero animations:', error);
  }
};

/**
 * Animate Headline Reveal
 * Split headline into lines and animate each with stagger
 * @param {Element} headline - Headline element
 * @param {gsap.core.Timeline} timeline - GSAP timeline to add to
 */
const animateHeadlineReveal = (headline, timeline) => {
  // Get headline text
  const text = headline.innerHTML;
  
  // Split by <br> tags and create spans for each line
  const lines = text.split('<br>');
  
  headline.innerHTML = lines
    .map(line => `<div class="overflow-hidden"><span class="inline-block">${line}</span></div>`)
    .join('');

  const lineSpans = headline.querySelectorAll('span');

  // Animate each line
  timeline.from(lineSpans, {
    opacity: 0,
    y: 60,
    duration: 0.8,
    ease: 'power2.out',
    stagger: 0.12,
  }, 0);
};

/**
 * Animate Hero Background Parallax
 * Create parallax effect on hero background image
 * @param {Element} bgElement - Background image element
 */
const animateHeroBackgroundParallax = (bgElement) => {
  gsap.to(bgElement, {
    y: 80,
    scrollTrigger: {
      trigger: bgElement.closest('section'),
      start: 'top top',
      end: 'bottom top',
      scrub: 1,
      markers: false,
    },
  });
};

/**
 * Animate Hero Stats
 * Counter animation for stats in hero section
 */
export const animateHeroStats = () => {
  try {
    const stats = document.querySelectorAll('.text-3xl.font-manrope');

    stats.forEach((stat, index) => {
      const targetValue = parseInt(stat.textContent);
      
      if (!isNaN(targetValue)) {
        // Skip counter animation for reduced motion
        if (prefersReducedMotion()) {
          stat.textContent = targetValue;
          return;
        }

        const counter = { value: 0 };

        gsap.to(counter, {
          value: targetValue,
          duration: 2.5,
          ease: 'power2.out',
          delay: 0.8 + (index * 0.1),
          onUpdate: () => {
            stat.textContent = Math.floor(counter.value);
          },
        });
      }
    });

    console.log('[HeroAnimations] ✓ Hero stats animation initialized');
  } catch (error) {
    console.error('[HeroAnimations] Error animating stats:', error);
  }
};

/**
 * Animate CTA Button Hover
 * Premium hover effect for CTA buttons
 */
export const animateCtaButtonHover = () => {
  try {
    const ctaButtons = document.querySelectorAll('.flex.flex-wrap.gap-6 a, .flex.flex-wrap.gap-6 button');

    ctaButtons.forEach(button => {
      // Hover enter
      button.addEventListener('mouseenter', () => {
        if (prefersReducedMotion()) return;
        gsap.to(button, {
          scale: 1.08,
          duration: 0.3,
          ease: 'power2.out',
        });

        // Animate arrow if present
        const arrow = button.querySelector('svg');
        if (arrow) {
          gsap.to(arrow, {
            x: 4,
            duration: 0.3,
            ease: 'power2.out',
          });
        }
      });

      // Hover leave
      button.addEventListener('mouseleave', () => {
        gsap.to(button, {
          scale: 1,
          duration: 0.3,
          ease: 'power2.out',
        });

        // Reset arrow
        const arrow = button.querySelector('svg');
        if (arrow) {
          gsap.to(arrow, {
            x: 0,
            duration: 0.3,
            ease: 'power2.out',
          });
        }
      });
    });

    console.log('[HeroAnimations] ✓ CTA button hover effects initialized');
  } catch (error) {
    console.error('[HeroAnimations] Error setting up CTA button hover:', error);
  }
};

/**
 * Animate Video Play Button
 * Premium animation for video play button
 */
export const animateVideoPlayButton = () => {
  try {
    const playButton = document.querySelector('button:has(svg[class*="play"])');
    
    if (!playButton) return;

    // Create animation timeline
    const playTimeline = gsap.timeline({ paused: true });

    // Pulse animation
    playTimeline.to(playButton.querySelector('span'), {
      scale: 1.15,
      duration: 0.4,
      ease: 'power2.out',
    }, 0);

    playTimeline.to(playButton.querySelector('span'), {
      borderColor: '#13C46B',
      duration: 0.4,
      ease: 'power2.out',
    }, 0);

    // Hover effect
    playButton.addEventListener('mouseenter', () => {
      if (!prefersReducedMotion()) playTimeline.play();
    });

    playButton.addEventListener('mouseleave', () => {
      if (!prefersReducedMotion()) playTimeline.reverse();
    });

    console.log('[HeroAnimations] ✓ Video play button animation initialized');
  } catch (error) {
    console.error('[HeroAnimations] Error animating video play button:', error);
  }
};

/**
 * Create Hero Entrance Timeline
 * Master timeline for all hero animations
 * @returns {gsap.core.Timeline} Hero animation timeline
 */
export const createHeroEntranceTimeline = () => {
  const timeline = gsap.timeline();
  
  // Badge entrance
  timeline.from('[data-animation="fade-in"]', {
    opacity: 0,
    y: 20,
    duration: 0.6,
    ease: 'power2.out',
  }, 0);

  // Headline entrance
  timeline.from('h1', {
    opacity: 0,
    y: 60,
    duration: 0.8,
    ease: 'power2.out',
  }, 0.1);

  // Subheading entrance
  timeline.from('p.text-lg', {
    opacity: 0,
    y: 30,
    duration: 0.8,
    ease: 'power2.out',
  }, 0.2);

  // CTA buttons entrance
  timeline.from('.flex.flex-wrap.gap-6 a, .flex.flex-wrap.gap-6 button', {
    opacity: 0,
    y: 30,
    duration: 0.6,
    ease: 'power2.out',
    stagger: 0.15,
  }, 0.4);

  // Stats bar entrance handled by section-animations.js

  return timeline;
};

/**
 * Hero Animations Export Object
 */
export const heroAnimations = {
  initHeroAnimations,
  animateHeroStats,
  animateCtaButtonHover,
  animateVideoPlayButton,
  createHeroEntranceTimeline,
};

export default heroAnimations;
