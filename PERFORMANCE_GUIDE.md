# Performance Optimization Guide

## Overview
This guide outlines best practices for maintaining excellent performance across the OpenV Group website.

## Build Optimization

### Vite Configuration
The project uses Vite for optimized builds with:
- **Terser minification** for JavaScript
- **CSS code splitting** for better caching
- **Asset optimization** with proper file naming
- **Chunk size warnings** at 500KB threshold

### Build Output
```bash
npm run build
```

Optimized assets are generated in the `dist/` directory with:
- Minified CSS and JavaScript
- Optimized images in `assets/images/`
- Fonts in `assets/fonts/`
- Source maps disabled in production

## Performance Best Practices

### Image Optimization
1. **Use lazy loading** for images below the fold:
   ```html
   <img src="image.jpg" loading="lazy" alt="Description">
   ```

2. **Optimize image formats**:
   - Use WebP for modern browsers
   - Provide fallbacks for older browsers
   - Compress all images before deployment

3. **Responsive images**:
   ```html
   <img 
     srcset="image-sm.jpg 640w, image-md.jpg 1024w, image-lg.jpg 1440w"
     sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 1440px"
     src="image-lg.jpg"
     alt="Description"
   >
   ```

### JavaScript Optimization
1. **Code Splitting**: Vite automatically splits code into chunks
2. **Tree Shaking**: Unused code is removed during build
3. **Module Preloading**: Critical modules are preloaded
4. **Lazy Loading**: Use dynamic imports for non-critical features

### CSS Optimization
1. **CSS Code Splitting**: Enabled by default in Vite
2. **Unused CSS Removal**: Tailwind purges unused styles
3. **Critical CSS**: Inline critical styles for faster FCP

### Animation Performance
1. **Use `transform` and `opacity`** for animations (GPU-accelerated)
2. **Avoid animating `width`, `height`, or `position`**
3. **Use `will-change` sparingly**:
   ```css
   .animated-element {
     will-change: transform, opacity;
   }
   ```

### Scroll Performance
1. **Lenis smooth scroll** uses `requestAnimationFrame` for optimal performance
2. **ScrollTrigger** uses passive event listeners
3. **Debounced scroll handlers** prevent excessive recalculations

## Lighthouse Optimization

### Target Scores
- **Performance**: 95+
- **Accessibility**: 95+
- **Best Practices**: 95+
- **SEO**: 95+

### Key Metrics
1. **Largest Contentful Paint (LCP)**: < 2.5s
2. **First Input Delay (FID)**: < 100ms
3. **Cumulative Layout Shift (CLS)**: < 0.1

### Optimization Checklist
- [ ] All images have proper dimensions
- [ ] No layout shifts on page load
- [ ] Critical resources preloaded
- [ ] Fonts preconnected
- [ ] No render-blocking resources
- [ ] Proper cache headers set
- [ ] Gzip compression enabled
- [ ] Minified CSS and JavaScript
- [ ] No unused JavaScript
- [ ] Semantic HTML used throughout

## Monitoring Performance

### Development
```bash
npm run dev
```

Use browser DevTools to:
- Monitor network requests
- Check performance timeline
- Audit with Lighthouse
- Test on slow 3G network

### Production
1. Use Lighthouse CI for continuous monitoring
2. Monitor Core Web Vitals
3. Set up performance budgets
4. Track metrics over time

## Accessibility Performance

### Semantic HTML
- Use proper heading hierarchy
- Use semantic elements (`<nav>`, `<main>`, `<footer>`, etc.)
- Provide alt text for all images
- Use ARIA attributes where needed

### Keyboard Navigation
- All interactive elements must be keyboard accessible
- Proper tab order maintained
- Focus indicators visible
- Skip links provided

### Screen Reader Support
- Use semantic HTML
- Provide descriptive link text
- Use ARIA labels for complex components
- Test with screen readers

## Caching Strategy

### Browser Caching
```
# Set cache headers for different asset types
Images: 1 year
CSS/JS: 1 month
HTML: No cache
Fonts: 1 year
```

### Service Worker (Optional)
For offline support and advanced caching:
1. Cache critical assets on install
2. Use network-first or cache-first strategies
3. Update cache on new deployments

## Deployment Optimization

### Recommended Hosting
- CDN for static assets
- Gzip compression enabled
- HTTP/2 support
- Brotli compression support

### Pre-deployment Checklist
- [ ] Run `npm run build` successfully
- [ ] Test production build locally
- [ ] Run Lighthouse audit
- [ ] Check all links work
- [ ] Test on multiple devices
- [ ] Test on slow network
- [ ] Verify analytics tracking
- [ ] Check error logging

## Performance Monitoring Tools

1. **Google Lighthouse**: Built into Chrome DevTools
2. **WebPageTest**: https://www.webpagetest.org/
3. **GTmetrix**: https://gtmetrix.com/
4. **Pingdom**: https://tools.pingdom.com/
5. **Google PageSpeed Insights**: https://pagespeed.web.dev/

## Continuous Improvement

1. **Monitor metrics regularly** using tools above
2. **Set performance budgets** for assets
3. **Profile regularly** with DevTools
4. **Test on real devices** and networks
5. **Gather user feedback** on performance
6. **Update dependencies** regularly
7. **Review and optimize** based on metrics

## Resources

- [Web.dev Performance Guide](https://web.dev/performance/)
- [MDN Performance Guide](https://developer.mozilla.org/en-US/docs/Web/Performance)
- [Vite Optimization Guide](https://vitejs.dev/guide/features.html#async-chunk-loading-optimization)
- [GSAP Performance Tips](https://gsap.com/docs/v3/Plugins/ScrollTrigger/)
