---
name: Performance Issue
about: Report a performance problem or optimization opportunity
title: "[PERFORMANCE] "
labels: ["performance", "triage"]
assignees: ""
---

## Performance Issue

### Type of Performance Issue

- [ ] 🐌 Slow page load times
- [ ] 🔄 Slow interactions/responses
- [ ] 💾 High memory usage
- [ ] 🔋 High CPU usage
- [ ] 📦 Large bundle size
- [ ] 🌐 Network performance
- [ ] 📱 Mobile performance
- [ ] ♿ Accessibility performance

### Affected Component

- [ ] IOTricity App
- [ ] Links App
- [ ] Web App
- [ ] UI Package
- [ ] Build process
- [ ] Entire application

## Current Performance

### Measurements

**Page/Feature:**

<!-- Specify which page or feature is affected -->

**Current Metrics:**

- **Load Time**: [e.g., 5.2 seconds]
- **First Contentful Paint**: [e.g., 2.1 seconds]
- **Time to Interactive**: [e.g., 4.8 seconds]
- **Bundle Size**: [e.g., 2.5 MB]
- **Memory Usage**: [e.g., 150 MB]

### Testing Environment

- **Device**: [e.g., MacBook Pro, iPhone 12, Desktop]
- **Browser**: [e.g., Chrome 96, Safari 15]
- **Connection**: [e.g., WiFi, 4G, 3G]
- **Location**: [e.g., Development, Production]

## Expected Performance

### Target Metrics

- **Target Load Time**: [e.g., < 2 seconds]
- **Target FCP**: [e.g., < 1 second]
- **Target TTI**: [e.g., < 2.5 seconds]
- **Target Bundle Size**: [e.g., < 1 MB]

## Steps to Reproduce

1. Go to [URL]
2. Perform [action]
3. Measure [metric]
4. Observe [result]

## Performance Analysis

### Suspected Causes

- [ ] Large JavaScript bundles
- [ ] Unoptimized images
- [ ] Inefficient database queries
- [ ] Memory leaks
- [ ] Unnecessary re-renders
- [ ] Blocking resources
- [ ] Third-party dependencies

### Browser DevTools Data

<!-- Include screenshots or data from Chrome DevTools Performance tab -->

## Impact Assessment

### User Impact

- [ ] Critical (Users unable to complete tasks)
- [ ] High (Significantly affects user experience)
- [ ] Medium (Noticeable but manageable)
- [ ] Low (Minor impact)

### Business Impact

- [ ] Affects conversion rates
- [ ] Affects user retention
- [ ] Affects SEO rankings
- [ ] Affects mobile users primarily
- [ ] Affects all users

## Proposed Solutions

### Potential Optimizations

- [ ] Code splitting
- [ ] Lazy loading
- [ ] Image optimization
- [ ] Bundle optimization
- [ ] Caching improvements
- [ ] Database optimization
- [ ] Component optimization

### Implementation Ideas

<!-- Describe specific optimization strategies -->

## Testing and Validation

### Performance Testing Tools

- [ ] Chrome DevTools
- [ ] Lighthouse
- [ ] WebPageTest
- [ ] Bundle Analyzer
- [ ] Performance monitoring tools

### Success Criteria

- [ ] Meet target load times
- [ ] Improve Lighthouse scores
- [ ] Reduce bounce rates
- [ ] Improve user satisfaction metrics

## Additional Context

<!-- Add any other context, screenshots, or performance data -->

## Related Issues

<!-- Link any related performance issues or discussions -->

---

**For Maintainers:**

### Investigation Checklist

- [ ] Performance baseline established
- [ ] Root cause identified
- [ ] Solution approach agreed upon
- [ ] Performance impact estimated
- [ ] Testing strategy defined
