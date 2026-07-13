# OpenV Group Homepage - Pixel-Perfect Visual Audit

## 1. Global Inconsistencies
- **Typography:** The mockup uses `Manrope` for headings and `Inter` for body. The current implementation uses `Inter` for the `body` tag, but needs a more robust hierarchy for `text-xs` and `text-sm` labels which should be bold and tracking-widest.
- **Colors:** The background color `#07111C` is correct, but the gradients in cards and sections need to be more pronounced to match the mockup's depth.
- **Container:** The mockup uses a `1440px` container. Current implementation uses `container-custom` which is set to `1440px`, but padding needs verification.

## 2. Section-by-Section Audit

### Navigation
- **Logo:** Logo is present but needs to ensure it's vertically centered with nav items.
- **Nav Links:** Mockup links are `uppercase`, `text-xs`, `font-bold`, `tracking-widest`. Current implementation is close but needs `text-white/70` by default.
- **CTA Button:** "BOOK A CONSULTATION" in mockup has a specific green gradient/glow. Current button is solid green.

### Hero Section
- **Heading:** "Smart technology. Seamless solutions. Stronger business." - The font weight needs to be `800` (extrabold) and size should be `text-7xl` on desktop.
- **Subtext:** "Three expert brands..." - Needs to be `text-white/60` and `text-lg`.
- **Buttons:** "EXPLORE THE GROUP" (Primary) and "WATCH VIDEO" (Ghost with play icon). The play icon in mockup is a specific circular button.
- **Background:** The digital globe needs to be positioned slightly to the right, partially cut off, as seen in the mockup.

### Statistics Bar
- **Numbers:** Mockup uses large, bold numbers. Current implementation is close but needs to ensure the `20+` has the plus sign correctly styled.
- **Labels:** "Years in South Africa", etc. - Needs to be `text-[10px]`, `font-bold`, `tracking-widest`, `uppercase`, `text-white/40`.

### Specialist Brands
- **Header:** "THREE SPECIALIST BRANDS. ONE POWERFUL GROUP." - Needs `text-gradient-green`.
- **Cards:** Mockup cards have a subtle border glow (Green for OpenV and ShiftBridge, Blue for NextFour). Current implementation uses a generic glow.
- **Icons:** Brand logos need to be sized correctly (h-8 for OpenV, h-6 for others).

### Solutions Section
- **Grid:** 6-column grid in mockup. Current implementation uses a grid but needs to ensure the icons are Lucide and the labels are `text-[10px]`, `font-bold`, `tracking-widest`.
- **View All Button:** Needs to be `btn-outline` with specific navy border.

### Business Ecosystem
- **Connection Line:** The horizontal line connecting the 5 steps needs to be more visible with glowing dots.
- **Icons:** Circular borders around icons with subtle shadows.

### Technology Partners
- **Marquee:** Needs to be a seamless loop with grayscale-to-color hover effect.
- **Logos:** Ensure all 8 logos from mockup are present.

### Industries Section
- **Icons:** 8 industry icons. Current implementation uses SVG, needs to verify Lucide equivalents.
- **Labels:** `text-[10px]`, `font-bold`, `tracking-widest`.

### CTA Banner
- **Background:** The green energy wave background needs to be more vibrant.
- **Layout:** Text on left, Button and Phone on right.

### Footer
- **Logo:** Repeated in footer.
- **Columns:** 4 columns: About/Social, Quick Links, Our Companies, Contact.
- **Bottom Bar:** Copyright and Legal links with `text-[10px]`, `font-bold`, `tracking-widest`.

## 3. Specific Fixes to Implement
1. Update `tailwind.config.js` with precise `tracking-widest` and `text-[10px]` values.
2. Refine `card-premium` in `main.css` to support multi-color glows.
3. Adjust `hero` section layout and globe positioning.
4. Fix `stats-bar` alignment and typography.
5. Implement the ecosystem connection line with CSS/SVG.
6. Standardize all `section-header` spacing.
