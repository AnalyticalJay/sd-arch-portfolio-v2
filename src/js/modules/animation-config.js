/**
 * Animation Configuration
 * Centralized settings for the OpenV Group animation framework.
 * Defined by the premium enterprise design system.
 */

export const AnimationConfig = {
  // Premium Easing Curves
  ease: {
    base: 'power2.out',
    in: 'power2.in',
    out: 'power2.out',
    inOut: 'power2.inOut',
    expo: 'expo.out',
    premium: 'cubic-bezier(0.23, 1, 0.32, 1)', // Custom premium ease
    lenis: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  },

  // Duration Presets (in seconds)
  duration: {
    fast: 0.4,
    normal: 0.8,
    slow: 1.2,
    verySlow: 1.8,
  },

  // Stagger Presets
  stagger: {
    small: 0.05,
    normal: 0.1,
    medium: 0.15,
    large: 0.2,
  },

  // ScrollTrigger Default Settings
  scrollTrigger: {
    start: 'top 85%',
    end: 'bottom 20%',
    toggleActions: 'play none none none', // Default: play once when entering
    markers: false,
  },

  // Threshold for reduced motion
  reducedMotion: {
    timeScale: 0, // Set to 0 to effectively "disable" animations if preferred
    opacityOnly: true, // Fallback to opacity only if motion is reduced
  }
};

export default AnimationConfig;
