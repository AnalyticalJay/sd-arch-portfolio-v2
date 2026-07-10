import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const animations = {
  fadeIn: (element, options = {}) => {
    return gsap.from(element, {
      opacity: 0,
      y: 20,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 85%',
        ...options.scrollTrigger
      },
      ...options
    });
  },

  staggerFadeIn: (elements, options = {}) => {
    return gsap.from(elements, {
      opacity: 0,
      y: 30,
      duration: 1,
      stagger: 0.2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: elements[0],
        start: 'top 85%',
        ...options.scrollTrigger
      },
      ...options
    });
  },

  revealText: (element, options = {}) => {
    return gsap.from(element, {
      clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)',
      y: 50,
      duration: 1.2,
      ease: 'power4.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 90%',
        ...options.scrollTrigger
      },
      ...options
    });
  }
};
