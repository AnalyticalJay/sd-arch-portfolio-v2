/**
 * Accessible Cursor Effects Module
 * Premium custom cursor interactions that respect motion preferences
 * Automatically disables for reduced motion or touch devices
 */

import gsap from 'gsap';
import { prefersReducedMotion } from './performance-optimization-v2';

/**
 * Initialize Accessible Cursor Effects
 */
export const initAccessibleCursorEffects = () => {
  try {
    // Disable for reduced motion, touch devices, or if explicitly requested
    if (prefersReducedMotion() || 'ontouchstart' in window || navigator.maxTouchPoints > 0) {
      console.log('[CursorEffects] ✓ Custom cursor skipped (reduced motion or touch device)');
      document.body.style.cursor = 'auto';
      return;
    }

    // Create custom cursor
    createCustomCursor();
    
    // Initialize cursor hover effects
    initCursorHoverEffects();
    
    // Initialize cursor click effects
    initCursorClickEffects();

    console.log('[CursorEffects] ✓ Accessible cursor effects initialized');
  } catch (error) {
    console.error('[CursorEffects] Error initializing cursor effects:', error);
  }
};

/**
 * Create Custom Cursor
 */
const createCustomCursor = () => {
  try {
    // Create cursor element
    const cursor = document.createElement('div');
    cursor.id = 'custom-cursor';
    cursor.style.position = 'fixed';
    cursor.style.width = '20px';
    cursor.style.height = '20px';
    cursor.style.borderRadius = '50%';
    cursor.style.border = '2px solid #13C46B';
    cursor.style.pointerEvents = 'none';
    cursor.style.zIndex = '9999';
    cursor.style.opacity = '0';
    cursor.style.boxShadow = '0 0 10px rgba(19, 196, 107, 0.5)';
    cursor.style.transform = 'translate(-50%, -50%)';
    cursor.style.transition = 'opacity 0.3s ease';

    // Create cursor trail
    const cursorTrail = document.createElement('div');
    cursorTrail.id = 'custom-cursor-trail';
    cursorTrail.style.position = 'fixed';
    cursorTrail.style.width = '12px';
    cursorTrail.style.height = '12px';
    cursorTrail.style.borderRadius = '50%';
    cursorTrail.style.backgroundColor = 'rgba(19, 196, 107, 0.3)';
    cursorTrail.style.pointerEvents = 'none';
    cursorTrail.style.zIndex = '9998';
    cursorTrail.style.opacity = '0';
    cursorTrail.style.transform = 'translate(-50%, -50%)';
    cursorTrail.style.transition = 'opacity 0.3s ease';

    document.body.appendChild(cursor);
    document.body.appendChild(cursorTrail);

    // Hide default cursor
    document.body.style.cursor = 'none';

    // Track cursor position
    document.addEventListener('mousemove', (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      // Update cursor position
      gsap.to(cursor, {
        left: mouseX,
        top: mouseY,
        duration: 0.1,
        ease: 'none',
      });

      // Update trail position with delay
      gsap.to(cursorTrail, {
        left: mouseX,
        top: mouseY,
        duration: 0.3,
        ease: 'none',
      });
      
      // Ensure visible on move
      if (cursor.style.opacity === '0') {
        cursor.style.opacity = '0.8';
        cursorTrail.style.opacity = '0.3';
      }
    });

    // Hide cursor on mouse leave window
    document.addEventListener('mouseleave', () => {
      cursor.style.opacity = '0';
      cursorTrail.style.opacity = '0';
    });

    // Show cursor on mouse enter window
    document.addEventListener('mouseenter', () => {
      cursor.style.opacity = '0.8';
      cursorTrail.style.opacity = '0.3';
    });

  } catch (error) {
    console.error('[CursorEffects] Error creating custom cursor:', error);
  }
};

/**
 * Initialize Cursor Hover Effects
 */
const initCursorHoverEffects = () => {
  try {
    const cursor = document.querySelector('#custom-cursor');
    if (!cursor) return;

    // Interactive elements
    const interactiveElements = document.querySelectorAll(
      'a, button, .btn, .card-premium, input, textarea, select'
    );

    interactiveElements.forEach(element => {
      element.addEventListener('mouseenter', () => {
        gsap.to(cursor, {
          width: '40px',
          height: '40px',
          backgroundColor: 'rgba(19, 196, 107, 0.1)',
          duration: 0.2,
          ease: 'power2.out',
        });
      });

      element.addEventListener('mouseleave', () => {
        gsap.to(cursor, {
          width: '20px',
          height: '20px',
          backgroundColor: 'transparent',
          duration: 0.2,
          ease: 'power2.out',
        });
      });
    });
  } catch (error) {
    console.error('[CursorEffects] Error initializing cursor hover effects:', error);
  }
};

/**
 * Initialize Cursor Click Effects
 */
const initCursorClickEffects = () => {
  try {
    const cursor = document.querySelector('#custom-cursor');
    if (!cursor) return;

    document.addEventListener('mousedown', () => {
      gsap.to(cursor, {
        scale: 0.7,
        duration: 0.1,
        ease: 'power2.out',
      });
    });

    document.addEventListener('mouseup', () => {
      gsap.to(cursor, {
        scale: 1,
        duration: 0.2,
        ease: 'power2.out',
      });
    });
  } catch (error) {
    console.error('[CursorEffects] Error initializing cursor click effects:', error);
  }
};

/**
 * Disable Custom Cursor
 */
export const disableCustomCursor = () => {
  const cursor = document.querySelector('#custom-cursor');
  const cursorTrail = document.querySelector('#custom-cursor-trail');
  if (cursor) cursor.remove();
  if (cursorTrail) cursorTrail.remove();
  document.body.style.cursor = 'auto';
};

export default {
  initAccessibleCursorEffects,
  disableCustomCursor,
};
