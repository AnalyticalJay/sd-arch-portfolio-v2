import '../css/main.css';
import { initScroll } from './modules/scroll';
import { initNavigation } from './modules/navigation';
import { animations } from './modules/animations';

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Smooth Scroll
  const lenis = initScroll();

  // Initialize Navigation
  initNavigation();

  // Global Animations Initializer
  const fadeElements = document.querySelectorAll('[data-animation="fade-in"]');
  fadeElements.forEach(el => animations.fadeIn(el));

  console.log('OpenV Group Foundation Initialized');
});
