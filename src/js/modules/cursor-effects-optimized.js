/**
 * Optimized Cursor Effects Module
 * High-performance custom cursor with debounced events and proper cleanup
 * Respects motion preferences and touch devices
 */

import gsap from 'gsap';
import { prefersReducedMotion } from './performance-optimization-v2';

class OptimizedCursorEffects {
  constructor() {
    this.cursor = null;
    this.cursorTrail = null;
    this.isInitialized = false;
    this.mouseX = 0;
    this.mouseY = 0;
    this.trailX = 0;
    this.trailY = 0;
    this.isVisible = false;
    this.animationFrameId = null;
    this.mouseMoveBound = null;
    this.mouseEnterBound = null;
    this.mouseLeaveBound = null;
  }

  /**
   * Initialize optimized cursor effects
   */
  init() {
    if (this.isInitialized) return;

    // Skip for reduced motion, touch devices
    if (prefersReducedMotion() || 'ontouchstart' in window || navigator.maxTouchPoints > 0) {
      console.log('[CursorEffects] ✓ Custom cursor skipped (reduced motion or touch device)');
      document.body.style.cursor = 'auto';
      return;
    }

    try {
      this.createCursorElements();
      this.setupEventListeners();
      this.startAnimationLoop();
      this.isInitialized = true;
      console.log('[CursorEffects] ✓ Optimized cursor effects initialized');
    } catch (error) {
      console.error('[CursorEffects] Error initializing:', error);
    }
  }

  /**
   * Create cursor DOM elements with optimized styles
   */
  createCursorElements() {
    // Create cursor element
    this.cursor = document.createElement('div');
    this.cursor.id = 'custom-cursor';
    this.cursor.style.cssText = `
      position: fixed;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      border: 2px solid #13C46B;
      pointer-events: none;
      z-index: 9999;
      opacity: 0;
      transform: translate(-50%, -50%) translateZ(0);
      will-change: transform;
      backface-visibility: hidden;
    `;

    // Create cursor trail
    this.cursorTrail = document.createElement('div');
    this.cursorTrail.id = 'custom-cursor-trail';
    this.cursorTrail.style.cssText = `
      position: fixed;
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background-color: rgba(19, 196, 107, 0.3);
      pointer-events: none;
      z-index: 9998;
      opacity: 0;
      transform: translate(-50%, -50%) translateZ(0);
      will-change: transform;
      backface-visibility: hidden;
    `;

    document.body.appendChild(this.cursor);
    document.body.appendChild(this.cursorTrail);
    document.body.style.cursor = 'none';
  }

  /**
   * Setup event listeners with proper binding
   */
  setupEventListeners() {
    // Bind methods to preserve context
    this.mouseMoveBound = this.onMouseMove.bind(this);
    this.mouseEnterBound = this.onMouseEnter.bind(this);
    this.mouseLeaveBound = this.onMouseLeave.bind(this);

    // Use passive listeners for better scroll performance
    document.addEventListener('mousemove', this.mouseMoveBound, { passive: true });
    document.addEventListener('mouseenter', this.mouseEnterBound, { passive: true });
    document.addEventListener('mouseleave', this.mouseLeaveBound, { passive: true });
  }

  /**
   * Handle mouse move with optimized updates
   */
  onMouseMove(e) {
    this.mouseX = e.clientX;
    this.mouseY = e.clientY;

    // Show cursor on first move
    if (!this.isVisible) {
      this.isVisible = true;
      gsap.to(this.cursor, { opacity: 0.8, duration: 0.2, overwrite: 'auto' });
      gsap.to(this.cursorTrail, { opacity: 0.3, duration: 0.2, overwrite: 'auto' });
    }
  }

  /**
   * Handle mouse enter
   */
  onMouseEnter() {
    if (!this.isVisible) {
      this.isVisible = true;
      gsap.to(this.cursor, { opacity: 0.8, duration: 0.2, overwrite: 'auto' });
      gsap.to(this.cursorTrail, { opacity: 0.3, duration: 0.2, overwrite: 'auto' });
    }
  }

  /**
   * Handle mouse leave
   */
  onMouseLeave() {
    this.isVisible = false;
    gsap.to(this.cursor, { opacity: 0, duration: 0.2, overwrite: 'auto' });
    gsap.to(this.cursorTrail, { opacity: 0, duration: 0.2, overwrite: 'auto' });
  }

  /**
   * Animation loop using requestAnimationFrame
   * Updates cursor position smoothly without excessive reflows
   */
  startAnimationLoop() {
    const animate = () => {
      // Update cursor position using transforms only (GPU accelerated)
      this.cursor.style.transform = `translate(${this.mouseX}px, ${this.mouseY}px) translate(-50%, -50%) translateZ(0)`;

      // Update trail with easing
      this.trailX += (this.mouseX - this.trailX) * 0.3;
      this.trailY += (this.mouseY - this.trailY) * 0.3;
      this.cursorTrail.style.transform = `translate(${this.trailX}px, ${this.trailY}px) translate(-50%, -50%) translateZ(0)`;

      this.animationFrameId = requestAnimationFrame(animate);
    };

    this.animationFrameId = requestAnimationFrame(animate);
  }

  /**
   * Cleanup all resources
   */
  destroy() {
    try {
      // Cancel animation frame
      if (this.animationFrameId) {
        cancelAnimationFrame(this.animationFrameId);
        this.animationFrameId = null;
      }

      // Remove event listeners
      if (this.mouseMoveBound) {
        document.removeEventListener('mousemove', this.mouseMoveBound);
        this.mouseMoveBound = null;
      }
      if (this.mouseEnterBound) {
        document.removeEventListener('mouseenter', this.mouseEnterBound);
        this.mouseEnterBound = null;
      }
      if (this.mouseLeaveBound) {
        document.removeEventListener('mouseleave', this.mouseLeaveBound);
        this.mouseLeaveBound = null;
      }

      // Remove DOM elements
      if (this.cursor && this.cursor.parentNode) {
        this.cursor.parentNode.removeChild(this.cursor);
        this.cursor = null;
      }
      if (this.cursorTrail && this.cursorTrail.parentNode) {
        this.cursorTrail.parentNode.removeChild(this.cursorTrail);
        this.cursorTrail = null;
      }

      // Restore cursor
      document.body.style.cursor = 'auto';

      this.isInitialized = false;
      console.log('[CursorEffects] ✓ Cleanup complete');
    } catch (error) {
      console.error('[CursorEffects] Error during cleanup:', error);
    }
  }
}

export const cursorEffectsOptimized = new OptimizedCursorEffects();

/**
 * Initialize optimized cursor effects
 */
export const initOptimizedCursorEffects = () => {
  cursorEffectsOptimized.init();
};

export default cursorEffectsOptimized;
