# SEO Audit Report

**Site**: http://localhost:3000
**Date**: 1/22/2026
**Pages Analyzed**: 1

## Overall Scores

| Category | Score |
|----------|-------|
| Performance | ❌ 42% |
| Accessibility | ✅ 93% |
| Best Practices | ⚠️ 78% |
| SEO | ✅ 92% |

## Critical Issues (18)

### First Contentful Paint

**Category**: performance
**Severity**: CRITICAL
**Score**: 0%
**Affected Pages**: 1

First Contentful Paint marks the time at which the first text or image is painted. [Learn more about the First Contentful Paint metric](https://developer.chrome.com/docs/lighthouse/performance/first-contentful-paint/).

Pages:
- /

### Largest Contentful Paint

**Category**: performance
**Severity**: CRITICAL
**Score**: 0%
**Affected Pages**: 1

Largest Contentful Paint marks the time at which the largest text or image is painted. [Learn more about the Largest Contentful Paint metric](https://developer.chrome.com/docs/lighthouse/performance/lighthouse-largest-contentful-paint/)

Pages:
- /

### Speed Index

**Category**: performance
**Severity**: CRITICAL
**Score**: 0%
**Affected Pages**: 1

Speed Index shows how quickly the contents of a page are visibly populated. [Learn more about the Speed Index metric](https://developer.chrome.com/docs/lighthouse/performance/speed-index/).

Pages:
- /

### Max Potential First Input Delay

**Category**: performance
**Severity**: CRITICAL
**Score**: 25%
**Affected Pages**: 1

The maximum potential First Input Delay that your users could experience is the duration of the longest task. [Learn more about the Maximum Potential First Input Delay metric](https://developer.chrome.com/docs/lighthouse/performance/lighthouse-max-potential-fid/).

Pages:
- /

### Time to Interactive

**Category**: performance
**Severity**: CRITICAL
**Score**: 0%
**Affected Pages**: 1

Time to Interactive is the amount of time it takes for the page to become fully interactive. [Learn more about the Time to Interactive metric](https://developer.chrome.com/docs/lighthouse/performance/interactive/).

Pages:
- /

### Uses third-party cookies

**Category**: best-practices
**Severity**: CRITICAL
**Score**: 0%
**Affected Pages**: 1

Third-party cookies may be blocked in some contexts. [Learn more about preparing for third-party cookie restrictions](https://privacysandbox.google.com/cookies/prepare/overview).

Pages:
- /

### Preconnect to required origins

**Category**: performance
**Severity**: CRITICAL
**Score**: 0%
**Affected Pages**: 1

Consider adding `preconnect` or `dns-prefetch` resource hints to establish early connections to important third-party origins. [Learn how to preconnect to required origins](https://developer.chrome.com/docs/lighthouse/performance/uses-rel-preconnect/).

Pages:
- /

### Largest Contentful Paint element

**Category**: performance
**Severity**: CRITICAL
**Score**: 0%
**Affected Pages**: 1

This is the largest contentful element painted within the viewport. [Learn more about the Largest Contentful Paint element](https://developer.chrome.com/docs/lighthouse/performance/lighthouse-largest-contentful-paint/)

Pages:
- /

### `[user-scalable="no"]` is used in the `<meta name="viewport">` element or the `[maximum-scale]` attribute is less than 5.

**Category**: accessibility
**Severity**: CRITICAL
**Score**: 0%
**Affected Pages**: 1

Disabling zooming is problematic for users with low vision who rely on screen magnification to properly see the contents of a web page. [Learn more about the viewport meta tag](https://dequeuniversity.com/rules/axe/4.10/meta-viewport).

Pages:
- /

### Minify JavaScript

**Category**: performance
**Severity**: CRITICAL
**Score**: 0%
**Affected Pages**: 1

Minifying JavaScript files can reduce payload sizes and script parse time. [Learn how to minify JavaScript](https://developer.chrome.com/docs/lighthouse/performance/unminified-javascript/).

Pages:
- /

### Reduce unused JavaScript

**Category**: performance
**Severity**: CRITICAL
**Score**: 0%
**Affected Pages**: 1

Reduce unused JavaScript and defer loading scripts until they are required to decrease bytes consumed by network activity. [Learn how to reduce unused JavaScript](https://developer.chrome.com/docs/lighthouse/performance/unused-javascript/).

Pages:
- /

### Enable text compression

**Category**: performance
**Severity**: CRITICAL
**Score**: 0%
**Affected Pages**: 1

Text-based resources should be served with compression (gzip, deflate or brotli) to minimize total network bytes. [Learn more about text compression](https://developer.chrome.com/docs/lighthouse/performance/uses-text-compression/).

Pages:
- /

### Remove duplicate modules in JavaScript bundles

**Category**: performance
**Severity**: CRITICAL
**Score**: 0%
**Affected Pages**: 1

Remove large, duplicate JavaScript modules from bundles to reduce unnecessary bytes consumed by network activity. 

Pages:
- /

### Avoid serving legacy JavaScript to modern browsers

**Category**: performance
**Severity**: CRITICAL
**Score**: 0%
**Affected Pages**: 1

Polyfills and transforms enable legacy browsers to use new JavaScript features. However, many aren't necessary for modern browsers. Consider modifying your JavaScript build process to not transpile [Baseline](https://web.dev/baseline) features, unless you know you must support legacy browsers. [Learn why most sites can deploy ES6+ code without transpiling](https://philipwalton.com/articles/the-state-of-es5-on-the-web/)

Pages:
- /

### Issues were logged in the `Issues` panel in Chrome Devtools

**Category**: best-practices
**Severity**: CRITICAL
**Score**: 0%
**Affected Pages**: 1

Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems. They can come from network request failures, insufficient security controls, and other browser concerns. Open up the Issues panel in Chrome DevTools for more details on each issue.

Pages:
- /

### robots.txt is not valid

**Category**: seo
**Severity**: CRITICAL
**Score**: 0%
**Affected Pages**: 1

If your robots.txt file is malformed, crawlers may not be able to understand how you want your website to be crawled or indexed. [Learn more about robots.txt](https://developer.chrome.com/docs/lighthouse/seo/invalid-robots-txt/).

Pages:
- /

### Page prevented back/forward cache restoration

**Category**: performance
**Severity**: CRITICAL
**Score**: 0%
**Affected Pages**: 1

Many navigations are performed by going back to a previous page, or forwards again. The back/forward cache (bfcache) can speed up these return navigations. [Learn more about the bfcache](https://developer.chrome.com/docs/lighthouse/performance/bf-cache/)

Pages:
- /

### Network dependency tree

**Category**: performance
**Severity**: CRITICAL
**Score**: 0%
**Affected Pages**: 1

[Avoid chaining critical requests](https://developer.chrome.com/docs/lighthouse/performance/critical-request-chains) by reducing the length of chains, reducing the download size of resources, or deferring the download of unnecessary resources to improve page load.

Pages:
- /

## High Priority Issues (4)

### Total Blocking Time

**Category**: performance
**Severity**: HIGH
**Score**: 56%
**Affected Pages**: 1

Sum of all time periods between FCP and Time to Interactive, when task length exceeded 50ms, expressed in milliseconds. [Learn more about the Total Blocking Time metric](https://developer.chrome.com/docs/lighthouse/performance/lighthouse-total-blocking-time/).

Pages:
- /

### Image elements do not have explicit `width` and `height`

**Category**: performance
**Severity**: HIGH
**Score**: 50%
**Affected Pages**: 1

Set an explicit width and height on image elements to reduce layout shifts and improve CLS. [Learn how to set image dimensions](https://web.dev/articles/optimize-cls#images_without_dimensions)

Pages:
- /

### Avoid enormous network payloads

**Category**: performance
**Severity**: HIGH
**Score**: 50%
**Affected Pages**: 1

Large network payloads cost users real money and are highly correlated with long load times. [Learn how to reduce payload sizes](https://developer.chrome.com/docs/lighthouse/performance/total-byte-weight/).

Pages:
- /

### Reduce unused CSS

**Category**: performance
**Severity**: HIGH
**Score**: 50%
**Affected Pages**: 1

Reduce unused rules from stylesheets and defer CSS not used for above-the-fold content to decrease bytes consumed by network activity. [Learn how to reduce unused CSS](https://developer.chrome.com/docs/lighthouse/performance/unused-css-rules/).

Pages:
- /

## Recommendations

- Critical: Performance score is below 50%. Focus on optimizing images, reducing JavaScript, and improving server response times.
- Address 18 critical issues immediately to prevent significant negative impact.
- Optimize images by using modern formats (WebP, AVIF), proper sizing, and lazy loading.
- Reduce JavaScript execution time and eliminate render-blocking scripts.

## Page Details

### /

| Category | Score |
|----------|-------|
| Performance | ❌ 42% |
| Accessibility | ✅ 93% |
| Best Practices | ⚠️ 78% |
| SEO | ✅ 92% |

**Core Web Vitals**:
- LCP: 105612ms
- CLS: 0.000
- TBT: 315ms

