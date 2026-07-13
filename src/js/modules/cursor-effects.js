/**
 * Cursor Effects Module
 * Premium custom cursor interactions and visual feedback
 * Provides sophisticated cursor-based animations
 */

import gsap from 'gsap';

/**
 * Initialize Cursor Effects
 * Sets up custom cursor and interaction effects
 */
export const initCursorEffects = () => {
  try {
    // Create custom cursor
    createCustomCursor();
    
    // Initialize cursor hover effects
    initCursorHoverEffects();
    
    // Initialize cursor click effects
    initCursorClickEffects();

    console.log('[CursorEffects] ✓ Cursor effects initialized');
  } catch (error) {
    console.error('[CursorEffects] Error initializing cursor effects:', error);
  }
};

/**
 * Create Custom Cursor
 * Create and animate custom cursor element
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
    cursor.style.opacity = '0.8';
    cursor.style.boxShadow = '0 0 10px rgba(19, 196, 107, 0.5)';
    cursor.style.display = 'none';
    cursor.style.transform = 'translate(-50%, -50%)';

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
    cursorTrail.style.display = 'none';
    cursorTrail.style.transform = 'translate(-50%, -50%)';

    document.body.appendChild(cursor);
    document.body.appendChild(cursorTrail);

    // Hide default cursor
    document.body.style.cursor = 'none';

    // Track cursor position
    let mouseX = 0;
    let mouseY = 0;
    let trailX = 0;
    let trailY = 0;

    document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

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
    });

    // Show cursor on mouse enter
    document.addEventListener('mouseenter', () => {
      gsap.to(cursor, {
        opacity: 0.8,
        duration: 0.2,
      });
      gsap.to(cursorTrail, {
        opacity: 0.3,
        duration: 0.2,
      });
    });

    // Hide cursor on mouse leave
    document.addEventListener('mouseleave', () => {
      gsap.to(cursor, {
        opacity: 0,
        duration: 0.2,
      });
      gsap.to(cursorTrail, {
        opacity: 0,
        duration: 0.2,
      });
    });

    console.log('[CursorEffects] ✓ Custom cursor created');
  } catch (error) {
    console.error('[CursorEffects] Error creating custom cursor:', error);
  }
};

/**
 * Initialize Cursor Hover Effects
 * Change cursor appearance on interactive elements
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
          width: '30px',
          height: '30px',
          borderWidth: '2px',
          duration: 0.2,
          ease: 'power2.out',
        });
      });

      element.addEventListener('mouseleave', () => {
        gsap.to(cursor, {
          width: '20px',
          height: '20px',
          borderWidth: '2px',
          duration: 0.2,
          ease: 'power2.out',
        });
      });
    });

    console.log('[CursorEffects] ✓ Cursor hover effects initialized');
  } catch (error) {
    console.error('[CursorEffects] Error initializing cursor hover effects:', error);
  }
};

/**
 * Initialize Cursor Click Effects
 * Create visual feedback on click
 */
const initCursorClickEffects = () => {
  try {
    const cursor = document.querySelector('#custom-cursor');
    
    if (!cursor) return;

    document.addEventListener('mousedown', () => {
      gsap.to(cursor, {
        scale: 0.8,
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

    console.log('[CursorEffects] ✓ Cursor click effects initialized');
  } catch (error) {
    console.error('[CursorEffects] Error initializing cursor click effects:', error);
  }
};

/**
 * Add Cursor Glow Effect
 * Add glow effect to cursor
 */
export const addCursorGlowEffect = () => {
  try {
    const cursor = document.querySelector('#custom-cursor');
    
    if (!cursor) return;

    // Create glow animation
    gsap.to(cursor, {
      boxShadow: [
        '0 0 10px rgba(19, 196, 107, 0.5)',
        '0 0 20px rgba(19, 196, 107, 0.8)',
        '0 0 10px rgba(19, 196, 107, 0.5)',
      ],
      duration: 1.5,
      repeat: -1,
      ease: 'sine.inOut',
    });

    console.log('[CursorEffects] ✓ Cursor glow effect added');
  } catch (error) {
    console.error('[CursorEffects] Error adding cursor glow effect:', error);
  }
};

/**
 * Disable Custom Cursor
 * Revert to default cursor
 */
export const disableCustomCursor = () => {
  try {
    const cursor = document.querySelector('#custom-cursor');
    const cursorTrail = document.querySelector('#custom-cursor-trail');
    
    if (cursor) cursor.remove();
    if (cursorTrail) cursorTrail.remove();
    
    document.body.style.cursor = 'auto';

    console.log('[CursorEffects] ✓ Custom cursor disabled');
  } catch (error) {
    console.error('[CursorEffects] Error disabling custom cursor:', error);
  }
};

/**
 * Cursor Effects Export Object
 */
export const cursorEffects = {
  initCursorEffects,
  addCursorGlowEffect,
  disableCustomCursor,
};

export default cursorEffects;
