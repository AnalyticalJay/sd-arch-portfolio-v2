/**
 * Section Animations
 * Scroll-triggered animations for all page sections
 * Cards, stats, logos, services, and other section elements
 */

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { animationFramework } from './animation-framework';
import { AnimationConfig } from './animation-config';

gsap.registerPlugin(ScrollTrigger);

/**
 * Initialize All Section Animations
 * Sets up scroll-triggered animations for entire page
 */
export const initSectionAnimations = () => {
  try {
    // Statistics section (Stats bar in Hero)
    animateStatsBar();

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

    // Footer section
    animateFooterSection();

    console.log('[SectionAnimations] ✓ All section animations initialized');
  } catch (error) {
    console.error('[SectionAnimations] Error initializing section animations:', error);
  }
};

/**
 * Animate Stats Bar
 * Entrance animation for the stats bar at the bottom of hero
 */
const animateStatsBar = () => {
  try {
    const statsBar = document.querySelector('.absolute.bottom-0.left-0.w-full.bg-navy-medium\\/80');
    const statItems = statsBar?.querySelectorAll('.flex.items-center.space-x-4');

    if (!statsBar || !statItems) return;

    animationFramework.stagger(statItems, {
      trigger: statsBar,
      scrollTrigger: {
        start: 'top 95%',
      },
      y: 20,
      stagger: AnimationConfig.stagger.normal,
    });
  } catch (error) {
    console.error('[SectionAnimations] Error animating stats bar:', error);
  }
};

/**
 * Animate Brands Section
 * Staggered card animations for brand cards
 */
const animateBrandsSection = () => {
  try {
    const section = document.querySelector('#companies');
    const header = section?.querySelector('.section-header');
    const brandCards = section?.querySelectorAll('.card-premium');
    
    if (!section) return;

    // Animate header
    if (header) {
      animationFramework.fadeUp(header, {
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
        },
      });
    }

    // Animate cards
    if (brandCards && brandCards.length > 0) {
      animationFramework.stagger(brandCards, {
        trigger: section,
        scrollTrigger: {
          start: 'top 70%',
        },
        y: 50,
        stagger: AnimationConfig.stagger.medium,
      });
    }
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
    const section = document.querySelector('#solutions');
    const header = section?.querySelector('.section-header');
    const solutionItems = section?.querySelectorAll('.bg-white.p-10');
    const cta = section?.querySelector('.mt-16.text-center');
    
    if (!section) return;

    // Animate header
    if (header) {
      animationFramework.fadeUp(header, {
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
        },
      });
    }

    // Animate solution items with stagger
    if (solutionItems && solutionItems.length > 0) {
      animationFramework.stagger(solutionItems, {
        trigger: section,
        scrollTrigger: {
          start: 'top 70%',
        },
        scale: 0.95,
        y: 30,
        stagger: AnimationConfig.stagger.small,
      });
    }

    // Animate CTA button
    if (cta) {
      animationFramework.fadeUp(cta, {
        scrollTrigger: {
          trigger: cta,
          start: 'top 90%',
        },
        y: 20,
      });
    }
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
    const section = document.querySelector('#ecosystem');
    const header = section?.querySelector('.section-header');
    const ecosystemSteps = section?.querySelectorAll('.grid.grid-cols-1.md\\:grid-cols-5 > div');
    const connectionLine = section?.querySelector('.absolute.top-1\\/2.left-0.w-full');
    
    if (!section) return;

    // Animate header
    if (header) {
      animationFramework.fadeUp(header, {
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
        },
      });
    }

    // Animate connection line
    if (connectionLine) {
      gsap.from(connectionLine, {
        scrollTrigger: {
          trigger: section,
          start: 'top 60%',
        },
        scaleX: 0,
        transformOrigin: 'left center',
        duration: AnimationConfig.duration.slow,
        ease: AnimationConfig.ease.inOut,
      });
    }

    // Animate steps
    if (ecosystemSteps && ecosystemSteps.length > 0) {
      animationFramework.stagger(ecosystemSteps, {
        trigger: section,
        scrollTrigger: {
          start: 'top 60%',
        },
        y: 40,
        stagger: AnimationConfig.stagger.medium,
      });
    }
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
    const section = document.querySelector('#partners');
    const header = section?.querySelector('.section-header');
    const partnerLogos = section?.querySelectorAll('.bg-white.p-6');
    const viewAll = section?.querySelector('.text-center:last-child');
    
    if (!section) return;

    // Animate header
    if (header) {
      animationFramework.fadeUp(header, {
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
        },
      });
    }

    // Animate partner logos
    if (partnerLogos && partnerLogos.length > 0) {
      animationFramework.stagger(partnerLogos, {
        trigger: section,
        scrollTrigger: {
          start: 'top 70%',
        },
        scale: 0.8,
        y: 20,
        ease: 'back.out(1.7)',
        stagger: AnimationConfig.stagger.small,
      });
    }

    // Animate "View All" link
    if (viewAll) {
      animationFramework.fadeUp(viewAll, {
        scrollTrigger: {
          trigger: viewAll,
          start: 'top 95%',
        },
        y: 10,
      });
    }
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
    const section = document.querySelector('#industries');
    const header = section?.querySelector('.section-header');
    const industryCards = section?.querySelectorAll('.text-center.group');
    const viewAll = section?.querySelector('.text-center:last-child');
    
    if (!section) return;

    // Animate header
    if (header) {
      animationFramework.fadeUp(header, {
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
        },
      });
    }

    // Animate industry cards
    if (industryCards && industryCards.length > 0) {
      animationFramework.stagger(industryCards, {
        trigger: section,
        scrollTrigger: {
          start: 'top 70%',
        },
        y: 40,
        stagger: AnimationConfig.stagger.normal,
      });
    }

    // Animate "View All" link
    if (viewAll) {
      animationFramework.fadeUp(viewAll, {
        scrollTrigger: {
          trigger: viewAll,
          start: 'top 95%',
        },
        y: 10,
      });
    }
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
    const section = document.querySelector('#cta');
    const content = section?.querySelector('.container-custom > .flex');
    const text = content?.querySelector('div:first-child');
    const actions = content?.querySelector('div:last-child');
    
    if (!section) return;

    // Animate text from left
    if (text) {
      animationFramework.fadeLeft(text, {
        scrollTrigger: {
          trigger: section,
          start: 'top 75%',
        },
        x: -50,
        duration: AnimationConfig.duration.slow,
      });
    }

    // Animate actions from right
    if (actions) {
      animationFramework.fadeRight(actions, {
        scrollTrigger: {
          trigger: section,
          start: 'top 75%',
        },
        x: 50,
        duration: AnimationConfig.duration.slow,
      });
    }
  } catch (error) {
    console.error('[SectionAnimations] Error animating CTA section:', error);
  }
};

/**
 * Animate Footer Section
 * Entrance animations for footer content
 */
const animateFooterSection = () => {
  try {
    const footer = document.querySelector('footer');
    const footerGrid = footer?.querySelector('.grid');
    const footerBottom = footer?.querySelector('.pt-12.border-t');
    
    if (!footer) return;

    // Animate grid columns
    if (footerGrid) {
      animationFramework.stagger(footerGrid.children, {
        trigger: footer,
        scrollTrigger: {
          start: 'top 85%',
        },
        y: 30,
        stagger: AnimationConfig.stagger.normal,
      });
    }

    // Animate footer bottom bar
    if (footerBottom) {
      animationFramework.fadeUp(footerBottom, {
        scrollTrigger: {
          trigger: footerBottom,
          start: 'top 95%',
        },
        y: 0,
        duration: AnimationConfig.duration.slow,
      });
    }
  } catch (error) {
    console.error('[SectionAnimations] Error animating footer section:', error);
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
          borderColor: 'rgba(19, 196, 107, 0.3)',
          backgroundColor: 'rgba(15, 30, 51, 0.8)',
          duration: 0.4,
          ease: 'power2.out',
        });
      });

      card.addEventListener('mouseleave', () => {
        gsap.to(card, {
          y: 0,
          borderColor: 'rgba(255, 255, 255, 0.05)',
          backgroundColor: 'rgba(15, 30, 51, 0.4)',
          duration: 0.4,
          ease: 'power2.out',
        });
      });
    });
  } catch (error) {
    console.error('[SectionAnimations] Error adding card hover effects:', error);
  }
};

/**
 * Section Animations Export Object
 */
export const sectionAnimations = {
  initSectionAnimations,
  addCardHoverEffects,
};

export default sectionAnimations;
