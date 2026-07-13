# Card Hover Effects Implementation

## Overview

This document outlines the comprehensive hover effects implemented for all interactive card types on the OpenV Group website. The implementation uses GSAP for smooth animations and maintains consistency with the premium enterprise design language.

## Implementation Details

### Module: `src/js/modules/card-hover.js`

A dedicated module that handles all card hover effects with the following features:

- **Modular Architecture**: Separate initialization functions for each card type
- **GSAP Timelines**: Smooth, coordinated animations using GSAP timelines
- **Cursor Integration**: Enhanced cursor feedback for all interactive cards
- **Performance Optimized**: GPU-accelerated transforms and will-change properties

### Initialization

The module is imported and initialized in `src/js/main.js`:

```javascript
import { initCardHoverEffects } from './modules/card-hover';

// Phase 5c: Initialize enhanced card hover effects
console.log('[Main] → Initializing enhanced card hover effects...');
initCardHoverEffects();
```

---

## Card Types & Effects

### 1. Company Cards (`.card-premium`)

**Selector**: `.card-premium`  
**Location**: Brands section (#companies)

#### Hover Effects:
- **Lift**: Moves card up 16px (translateY: -16px)
- **Shadow**: Enhanced box-shadow with green glow (0 24px 48px rgba(19, 196, 107, 0.2))
- **Border Highlight**: Border color transitions to rgba(19, 196, 107, 0.5)
- **Background**: Enhanced background opacity
- **Icon Movement**: Brand logo moves up 4px and scales to 1.05
- **Arrow Animation**: CTA arrow moves right 4px
- **Glow Effect**: Pseudo-element opacity increases for gradient glow

#### Animation Duration: 0.4s  
#### Easing: power2.out

---

### 2. Service Cards (`.bg-white.p-10`)

**Selector**: `#solutions .bg-white.p-10`  
**Location**: Solutions section (#solutions)

#### Hover Effects:
- **Lift**: Moves card up 12px (translateY: -12px)
- **Shadow**: Subtle green shadow (0 20px 40px rgba(19, 196, 107, 0.12))
- **Background**: Transitions to #F0FFFE (light cyan)
- **Icon Movement**: Icon moves up 6px and scales to 1.12
- **Border Highlight**: Adds subtle 1px green border (rgba(19, 196, 107, 0.15))

#### Animation Duration: 0.4s  
#### Easing: power2.out

#### CSS Base Styles:
```css
#solutions .bg-white.p-10 {
  @apply relative overflow-hidden border border-transparent rounded-lg transition-all duration-300 cursor-pointer;
}
```

---

### 3. Partner Cards (`.bg-white.p-6`)

**Selector**: `#partners .bg-white.p-6`  
**Location**: Partners section (#partners)

#### Hover Effects:
- **Lift**: Moves card up 10px (translateY: -10px)
- **Shadow**: Green shadow with glow (0 16px 32px rgba(19, 196, 107, 0.15))
- **Border Highlight**: Adds 1px green border (rgba(19, 196, 107, 0.2))
- **Image Scale**: Logo scales to 1.08
- **Grayscale Removal**: Removes grayscale filter for full color
- **Glow Effect**: Enhanced box-shadow with glow

#### Animation Duration: 0.4s  
#### Easing: power2.out

#### CSS Base Styles:
```css
#partners .bg-white.p-6 {
  @apply relative overflow-hidden border border-transparent rounded-lg transition-all duration-300 cursor-pointer;
}
```

---

### 4. Industry Cards (`.text-center.group`)

**Selector**: `#industries .text-center.group`  
**Location**: Industries section (#industries)

#### Hover Effects:
- **Lift**: Moves card up 14px (translateY: -14px)
- **Icon Wrapper Scale**: Scales to 1.15
- **Icon Rotation & Scale**: Rotates 8 degrees and scales to 1.2
- **Heading Color**: Changes to primary green (#13C46B)
- **Glow Effect**: Inset glow + outer glow (inset 0 0 20px rgba(19, 196, 107, 0.08))

#### Animation Duration: 0.4s  
#### Easing: power2.out

#### CSS Base Styles:
```css
#industries .text-center.group {
  @apply relative overflow-hidden rounded-lg transition-all duration-300 cursor-pointer;
}
```

---

## Cursor Feedback Enhancement

### Updated Cursor Behavior

All card types now trigger enhanced cursor feedback:

#### On Card Hover:
- **Size**: Increases from 20px to 32px
- **Border Width**: Maintains 2px
- **Glow**: Increases from `0 0 10px rgba(19, 196, 107, 0.5)` to `0 0 15px rgba(19, 196, 107, 0.6)`

#### On Card Leave:
- **Size**: Returns to 20px
- **Glow**: Returns to `0 0 10px rgba(19, 196, 107, 0.5)`

#### Animation Duration: 0.2s  
#### Easing: power2.out

---

## CSS Variables & Utilities

### New CSS Variables (in `:root`):

```css
/* Card Hover Effects */
--glow-opacity: 0;
--card-lift-distance: 16px;
--card-shadow-color: rgba(19, 196, 107, 0.2);
--card-border-color: rgba(19, 196, 107, 0.3);
```

### GPU Acceleration

All card types are now GPU-accelerated:

```css
#solutions .bg-white.p-10,
#partners .bg-white.p-6,
#industries .text-center.group {
  transform: translateZ(0);
  backface-visibility: hidden;
  perspective: 1000px;
  will-change: transform;
}
```

---

## Animation Consistency

### Shared Properties Across All Cards:

| Property | Value |
|----------|-------|
| Duration | 0.4s |
| Easing | power2.out |
| Trigger | mouseenter/mouseleave |
| GPU Acceleration | Yes |
| Cursor Feedback | Yes |

### Color Palette:

| Element | Color |
|---------|-------|
| Primary Green | #13C46B |
| Shadow Color | rgba(19, 196, 107, 0.2) |
| Border Color | rgba(19, 196, 107, 0.3-0.5) |
| Glow Color | rgba(19, 196, 107, 0.1-0.2) |

---

## Performance Optimizations

### 1. GSAP Timelines
- Paused timelines prevent unnecessary animations
- Efficient play/reverse on hover events
- Minimal DOM queries with caching

### 2. GPU Acceleration
- `transform: translateZ(0)` enables GPU rendering
- `will-change: transform` hints to browser for optimization
- Reduces repaints and reflows

### 3. Selective Animations
- Only animates necessary properties
- Uses GSAP's optimized rendering
- No layout thrashing

### 4. Error Handling
- Try-catch blocks in all functions
- Graceful fallbacks if elements don't exist
- Console logging for debugging

---

## Browser Compatibility

- **Modern Browsers**: Full support (Chrome, Firefox, Safari, Edge)
- **GPU Acceleration**: Supported in all modern browsers
- **GSAP**: Supports all browsers with ES6 support
- **Fallback**: CSS transitions provide basic hover feedback if JS fails

---

## Testing Checklist

- [x] Company cards lift and glow on hover
- [x] Service cards lift with icon animation
- [x] Partner cards lift with grayscale removal
- [x] Industry cards lift with icon rotation
- [x] All cards show border highlight
- [x] Cursor expands on card hover
- [x] All animations are smooth (60fps)
- [x] No console errors
- [x] Accessibility maintained (keyboard navigation)
- [x] Mobile responsive

---

## Future Enhancements

1. **Click Effects**: Add ripple or scale effects on click
2. **Stagger Animations**: Cascade effects when multiple cards are visible
3. **Scroll Animations**: Trigger effects based on scroll position
4. **Mobile Optimizations**: Reduce animation complexity on touch devices
5. **Theme Variations**: Add dark/light mode specific effects

---

## Files Modified

1. **src/js/modules/card-hover.js** (NEW)
   - Complete card hover effects implementation

2. **src/js/main.js**
   - Added import for card-hover module
   - Added initialization call

3. **src/css/main.css**
   - Added CSS variables for card effects
   - Added GPU acceleration selectors
   - Added base styles for service, partner, and industry cards

---

## Maintenance Notes

### Adding New Card Types

To add hover effects to new card types:

1. Create a new initialization function in `card-hover.js`:
```javascript
const initNewCardHovers = () => {
  try {
    const cards = document.querySelectorAll('.new-card-selector');
    // Add GSAP timeline and event listeners
  } catch (error) {
    console.error('[CardHover] Error:', error);
  }
};
```

2. Call the function in `initCardHoverEffects()`:
```javascript
initNewCardHovers();
```

3. Update cursor feedback selector in `updateCursorFeedback()`:
```javascript
const allCards = document.querySelectorAll(
  '.card-premium, ' +
  '#solutions .bg-white.p-10, ' +
  '#partners .bg-white.p-6, ' +
  '#industries .text-center.group, ' +
  '.new-card-selector'  // Add here
);
```

### Adjusting Animation Timing

All durations and easing can be modified in the respective functions. Example:

```javascript
hoverTimeline.to(card, {
  y: -16,
  duration: 0.4,  // Change here
  ease: 'power2.out',  // Or here
}, 0);
```

---

## Conclusion

The card hover effects implementation provides a cohesive, premium interactive experience across all card types on the OpenV Group website. The modular architecture ensures maintainability and scalability for future enhancements.
