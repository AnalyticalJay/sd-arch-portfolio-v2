/**
 * Section Animations
 * Scroll-triggered animations for all page sections
 * Cards, stats, logos, services, and other section elements
 */

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Initialize All Section Animations
 * Sets up scroll-triggered animations for entire page
 */
export const initSectionAnimations = () => {
  try {
    // Brands section
    animateBrandsSection();
    
    // Solutions section
    animateSolutionsSection();
    
    // Ecosystem section
    animateEcosystemSection();
    
    // Partners section
    animatePartnersSection();
    
    // Industries section
    animateIndustriesSection();
    
    // CTA section
    animateCtaSection();

    console.log('[SectionAnimations] ✓ All section animations initialized');
  } catch (error) {
    console.error('[SectionAnimations] Error initializing section animations:', error);
  }
};

/**
 * Animate Brands Section
 * Staggered card animations for brand cards
 */
const animateBrandsSection = () => {
  try {
    const brandCards = document.querySelectorAll('#companies .card-premium');
    
    if (brandCards.length === 0) return;

    gsap.from(brandCards, {
      scrollTrigger: {
        trigger: '#companies',
        start: 'top 80%',
        end: 'top 50%',
        toggleActions: 'play none none none',
        markers: false,
      },
      opacity: 0,
      y: 50,
      duration: 0.8,
      ease: 'power2.out',
      stagger: 0.15,
    });

    console.log('[SectionAnimations] ✓ Brands section animations set');
  } catch (error) {
    console.error('[SectionAnimations] Error animating brands section:', error);
  }
};

/**
 * Animate Solutions Section
 * Grid animation for solution items
 */
const animateSolutionsSection = () => {
  try {
    const solutionItems = document.querySelectorAll('#solutions .bg-white.p-10');
    
    if (solutionItems.length === 0) return;

    // Animate section header
    const sectionHeader = document.querySelector('#solutions .section-header');
    if (sectionHeader) {
      gsap.from(sectionHeader, {
        scrollTrigger: {
          trigger: '#solutions',
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power2.out',
      });
    }

    // Animate solution items with stagger
    gsap.from(solutionItems, {
      scrollTrigger: {
        trigger: '#solutions',
        start: 'top 75%',
        toggleActions: 'play none none none',
      },
      opacity: 0,
      y: 40,
      duration: 0.6,
      ease: 'power2.out',
      stagger: 0.08,
    });

    console.log('[SectionAnimations] ✓ Solutions section animations set');
  } catch (error) {
    console.error('[SectionAnimations] Error animating solutions section:', error);
  }
};

/**
 * Animate Ecosystem Section
 * Sequential animation for ecosystem process steps
 */
const animateEcosystemSection = () => {
  try {
    const ecosystemSteps = document.querySelectorAll('.grid.grid-cols-1.md\\:grid-cols-5 > div');
    
    if (ecosystemSteps.length === 0) return;

    // Animate connection line
    const connectionLine = document.querySelector('.absolute.top-1\\/2.left-0.w-full');
    if (connectionLine) {
      gsap.from(connectionLine, {
        scrollTrigger: {
          trigger: connectionLine.closest('section'),
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
        scaleX: 0,
        transformOrigin: 'left center',
        duration: 1,
        ease: 'power2.out',
      });
    }

    // Animate steps
    gsap.from(ecosystemSteps, {
      scrollTrigger: {
        trigger: ecosystemSteps[0].closest('section'),
        start: 'top 75%',
        toggleActions: 'play none none none',
      },
      opacity: 0,
      y: 40,
      duration: 0.8,
      ease: 'power2.out',
      stagger: 0.12,
    });

    console.log('[SectionAnimations] ✓ Ecosystem section animations set');
  } catch (error) {
    console.error('[SectionAnimations] Error animating ecosystem section:', error);
  }
};

/**
 * Animate Partners Section
 * Staggered partner logo animations
 */
const animatePartnersSection = () => {
  try {
    const partnerLogos = document.querySelectorAll('#partners .bg-white.p-6');
    
    if (partnerLogos.length === 0) return;

    // Animate section header
    const sectionHeader = document.querySelector('#partners .section-header');
    if (sectionHeader) {
      gsap.from(sectionHeader, {
        scrollTrigger: {
          trigger: '#partners',
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power2.out',
      });
    }

    // Animate partner logos
    gsap.from(partnerLogos, {
      scrollTrigger: {
        trigger: '#partners',
        start: 'top 75%',
        toggleActions: 'play none none none',
      },
      opacity: 0,
      scale: 0.8,
      duration: 0.6,
      ease: 'power2.out',
      stagger: 0.08,
    });

    // Add hover effect to partner logos
    partnerLogos.forEach(logo => {
      logo.addEventListener('mouseenter', () => {
        gsap.to(logo, {
          scale: 1.1,
          duration: 0.3,
          ease: 'power2.out',
        });
      });

      logo.addEventListener('mouseleave', () => {
        gsap.to(logo, {
          scale: 1,
          duration: 0.3,
          ease: 'power2.out',
        });
      });
    });

    console.log('[SectionAnimations] ✓ Partners section animations set');
  } catch (error) {
    console.error('[SectionAnimations] Error animating partners section:', error);
  }
};

/**
 * Animate Industries Section
 * Icon and text animations for industry cards
 */
const animateIndustriesSection = () => {
  try {
    const industryCards = document.querySelectorAll('#industries .text-center.group');
    
    if (industryCards.length === 0) return;

    // Animate section header
    const sectionHeader = document.querySelector('#industries .section-header');
    if (sectionHeader) {
      gsap.from(sectionHeader, {
        scrollTrigger: {
          trigger: '#industries',
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power2.out',
      });
    }

    // Animate industry cards
    gsap.from(industryCards, {
      scrollTrigger: {
        trigger: '#industries',
        start: 'top 75%',
        toggleActions: 'play none none none',
      },
      opacity: 0,
      y: 40,
      duration: 0.6,
      ease: 'power2.out',
      stagger: 0.08,
    });

    // Add icon hover effect
    industryCards.forEach(card => {
      const icon = card.querySelector('svg');
      
      card.addEventListener('mouseenter', () => {
        if (icon) {
          gsap.to(icon, {
            scale: 1.2,
            color: '#13C46B',
            duration: 0.3,
            ease: 'power2.out',
          });
        }
      });

      card.addEventListener('mouseleave', () => {
        if (icon) {
          gsap.to(icon, {
            scale: 1,
            color: 'rgba(15, 30, 51, 0.2)',
            duration: 0.3,
            ease: 'power2.out',
          });
        }
      });
    });

    console.log('[SectionAnimations] ✓ Industries section animations set');
  } catch (error) {
    console.error('[SectionAnimations] Error animating industries section:', error);
  }
};

/**
 * Animate CTA Section
 * Entrance animations for call-to-action section
 */
const animateCtaSection = () => {
  try {
    const ctaSection = document.querySelector('.relative.py-32.bg-navy');
    
    if (!ctaSection) return;

    const ctaContent = ctaSection.querySelector('.flex.flex-col');
    const ctaText = ctaContent?.querySelector('div:first-child');
    const ctaButtons = ctaContent?.querySelector('div:last-child');

    // Animate CTA text
    if (ctaText) {
      gsap.from(ctaText, {
        scrollTrigger: {
          trigger: ctaSection,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
        opacity: 0,
        x: -50,
        duration: 0.8,
        ease: 'power2.out',
      });
    }

    // Animate CTA buttons
    if (ctaButtons) {
      gsap.from(ctaButtons, {
        scrollTrigger: {
          trigger: ctaSection,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
        opacity: 0,
        x: 50,
        duration: 0.8,
        ease: 'power2.out',
      });
    }

    console.log('[SectionAnimations] ✓ CTA section animations set');
  } catch (error) {
    console.error('[SectionAnimations] Error animating CTA section:', error);
  }
};

/**
 * Animate Section Headers
 * Generic section header animations
 */
export const animateSectionHeaders = () => {
  try {
    const sectionHeaders = document.querySelectorAll('.section-header');

    sectionHeaders.forEach(header => {
      gsap.from(header, {
        scrollTrigger: {
          trigger: header,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power2.out',
      });
    });

    console.log('[SectionAnimations] ✓ Section headers animations set');
  } catch (error) {
    console.error('[SectionAnimations] Error animating section headers:', error);
  }
};

/**
 * Add Card Hover Effects
 * Premium hover effects for all card elements
 */
export const addCardHoverEffects = () => {
  try {
    const cards = document.querySelectorAll('.card-premium');

    cards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        gsap.to(card, {
          y: -12,
          boxShadow: '0 20px 40px rgba(19, 196, 107, 0.2)',
          duration: 0.4,
          ease: 'power2.out',
        });
      });

      card.addEventListener('mouseleave', () => {
        gsap.to(card, {
          y: 0,
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          duration: 0.4,
          ease: 'power2.out',
        });
      });
    });

    console.log('[SectionAnimations] ✓ Card hover effects added');
  } catch (error) {
    console.error('[SectionAnimations] Error adding card hover effects:', error);
  }
};

/**
 * Section Animations Export Object
 */
export const sectionAnimations = {
  initSectionAnimations,
  animateSectionHeaders,
  addCardHoverEffects,
};

export default sectionAnimations;
