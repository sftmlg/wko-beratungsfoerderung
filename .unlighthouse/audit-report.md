# SEO Audit Report

**Site**: https://wko-beratungsfoerderung.kiautomatisierung.info
**Date**: 1/22/2026
**Pages Analyzed**: 14

## Overall Scores

| Category | Score |
|----------|-------|
| Performance | ✅ 90% |
| Accessibility | ✅ 95% |
| Best Practices | ✅ 100% |
| SEO | ✅ 100% |

## Critical Issues (11)

### Largest Contentful Paint element

**Category**: performance
**Severity**: CRITICAL
**Score**: 0%
**Affected Pages**: 14

This is the largest contentful element painted within the viewport. [Learn more about the Largest Contentful Paint element](https://developer.chrome.com/docs/lighthouse/performance/lighthouse-largest-contentful-paint/)

Pages (first 5):
- /
- /wiki
- /wiki/wiki/04-deliverables
- /wiki/wiki/03-requirements
- /wiki/wiki/02-process
- ... and 9 more

### Background and foreground colors do not have a sufficient contrast ratio.

**Category**: accessibility
**Severity**: CRITICAL
**Score**: 0%
**Affected Pages**: 14

Low-contrast text is difficult or impossible for many users to read. [Learn how to provide sufficient color contrast](https://dequeuniversity.com/rules/axe/4.10/color-contrast).

Pages (first 5):
- /
- /wiki
- /wiki/wiki/04-deliverables
- /wiki/wiki/03-requirements
- /wiki/wiki/02-process
- ... and 9 more

### Heading elements are not in a sequentially-descending order

**Category**: accessibility
**Severity**: CRITICAL
**Score**: 0%
**Affected Pages**: 1

Properly ordered headings that do not skip levels convey the semantic structure of the page, making it easier to navigate and understand when using assistive technologies. [Learn more about heading order](https://dequeuniversity.com/rules/axe/4.10/heading-order).

Pages:
- /

### Reduce unused JavaScript

**Category**: performance
**Severity**: CRITICAL
**Score**: 0%
**Affected Pages**: 14

Reduce unused JavaScript and defer loading scripts until they are required to decrease bytes consumed by network activity. [Learn how to reduce unused JavaScript](https://developer.chrome.com/docs/lighthouse/performance/unused-javascript/).

Pages (first 5):
- /
- /wiki
- /wiki/wiki/04-deliverables
- /wiki/wiki/03-requirements
- /wiki/wiki/02-process
- ... and 9 more

### Avoid serving legacy JavaScript to modern browsers

**Category**: performance
**Severity**: CRITICAL
**Score**: 0%
**Affected Pages**: 14

Polyfills and transforms enable legacy browsers to use new JavaScript features. However, many aren't necessary for modern browsers. Consider modifying your JavaScript build process to not transpile [Baseline](https://web.dev/baseline) features, unless you know you must support legacy browsers. [Learn why most sites can deploy ES6+ code without transpiling](https://philipwalton.com/articles/the-state-of-es5-on-the-web/)

Pages (first 5):
- /
- /wiki
- /wiki/wiki/04-deliverables
- /wiki/wiki/03-requirements
- /wiki/wiki/02-process
- ... and 9 more

### Forced reflow

**Category**: performance
**Severity**: CRITICAL
**Score**: 0%
**Affected Pages**: 8

A forced reflow occurs when JavaScript queries geometric properties (such as offsetWidth) after styles have been invalidated by a change to the DOM state. This can result in poor performance. Learn more about [forced reflows](https://developers.google.com/web/fundamentals/performance/rendering/avoid-large-complex-layouts-and-layout-thrashing#avoid-forced-synchronous-layouts) and possible mitigations.

Pages (first 5):
- /
- /wiki
- /wiki/wiki/04-deliverables
- /wiki/raw/honorarrichtlinien
- /wiki/raw/checkliste-digitalisierung
- ... and 3 more

### Legacy JavaScript

**Category**: performance
**Severity**: CRITICAL
**Score**: 0%
**Affected Pages**: 14

Polyfills and transforms enable older browsers to use new JavaScript features. However, many aren't necessary for modern browsers. Consider modifying your JavaScript build process to not transpile [Baseline](https://web.dev/articles/baseline-and-polyfills) features, unless you know you must support older browsers. [Learn why most sites can deploy ES6+ code without transpiling](https://philipwalton.com/articles/the-state-of-es5-on-the-web/)

Pages (first 5):
- /
- /wiki
- /wiki/wiki/04-deliverables
- /wiki/wiki/03-requirements
- /wiki/wiki/02-process
- ... and 9 more

### Network dependency tree

**Category**: performance
**Severity**: CRITICAL
**Score**: 0%
**Affected Pages**: 14

[Avoid chaining critical requests](https://developer.chrome.com/docs/lighthouse/performance/critical-request-chains) by reducing the length of chains, reducing the download size of resources, or deferring the download of unnecessary resources to improve page load.

Pages (first 5):
- /
- /wiki
- /wiki/wiki/04-deliverables
- /wiki/wiki/03-requirements
- /wiki/wiki/02-process
- ... and 9 more

### Render blocking requests

**Category**: performance
**Severity**: CRITICAL
**Score**: 0%
**Affected Pages**: 14

Requests are blocking the page's initial render, which may delay LCP. [Deferring or inlining](https://web.dev/learn/performance/understanding-the-critical-path#render-blocking_resources) can move these network requests out of the critical path.

Pages (first 5):
- /
- /wiki
- /wiki/wiki/04-deliverables
- /wiki/wiki/03-requirements
- /wiki/wiki/02-process
- ... and 9 more

### Form elements do not have associated labels

**Category**: accessibility
**Severity**: CRITICAL
**Score**: 0%
**Affected Pages**: 3

Labels ensure that form controls are announced properly by assistive technologies, like screen readers. [Learn more about form element labels](https://dequeuniversity.com/rules/axe/4.10/label).

Pages:
- /wiki/wiki/04-deliverables
- /wiki/wiki/02-process
- /wiki/raw/checkliste-digitalisierung

### Buttons do not have an accessible name

**Category**: accessibility
**Severity**: CRITICAL
**Score**: 0%
**Affected Pages**: 1

When a button doesn't have an accessible name, screen readers announce it as "button", making it unusable for users who rely on screen readers. [Learn how to make buttons more accessible](https://dequeuniversity.com/rules/axe/4.10/button-name).

Pages:
- /chat

## High Priority Issues (3)

### Largest Contentful Paint

**Category**: performance
**Severity**: HIGH
**Score**: 59%
**Affected Pages**: 14

Largest Contentful Paint marks the time at which the largest text or image is painted. [Learn more about the Largest Contentful Paint metric](https://developer.chrome.com/docs/lighthouse/performance/lighthouse-largest-contentful-paint/)

Pages (first 5):
- /
- /wiki
- /wiki/wiki/04-deliverables
- /wiki/wiki/03-requirements
- /wiki/wiki/02-process
- ... and 9 more

### Max Potential First Input Delay

**Category**: performance
**Severity**: HIGH
**Score**: 50%
**Affected Pages**: 8

The maximum potential First Input Delay that your users could experience is the duration of the longest task. [Learn more about the Maximum Potential First Input Delay metric](https://developer.chrome.com/docs/lighthouse/performance/lighthouse-max-potential-fid/).

Pages (first 5):
- /
- /wiki
- /wiki/raw/richtlinien-beratungsauftraege
- /wiki/raw/richtlinie-beratungsfoerderung
- /wiki/raw/honorarrichtlinien
- ... and 3 more

### Eliminate render-blocking resources

**Category**: performance
**Severity**: HIGH
**Score**: 50%
**Affected Pages**: 13

Resources are blocking the first paint of your page. Consider delivering critical JS/CSS inline and deferring all non-critical JS/styles. [Learn how to eliminate render-blocking resources](https://developer.chrome.com/docs/lighthouse/performance/render-blocking-resources/).

Pages (first 5):
- /
- /wiki
- /wiki/wiki/04-deliverables
- /wiki/wiki/03-requirements
- /wiki/wiki/02-process
- ... and 8 more

## Recommendations

- Address 11 critical issues immediately to prevent significant negative impact.
- Reduce JavaScript execution time and eliminate render-blocking scripts.

## Page Details

### /

| Category | Score |
|----------|-------|
| Performance | ⚠️ 80% |
| Accessibility | ✅ 94% |
| Best Practices | ✅ 100% |
| SEO | ✅ 100% |

**Core Web Vitals**:
- LCP: 2120ms
- CLS: 0.000
- TBT: 200ms

### /wiki

| Category | Score |
|----------|-------|
| Performance | ⚠️ 89% |
| Accessibility | ✅ 96% |
| Best Practices | ✅ 100% |
| SEO | ✅ 100% |

**Core Web Vitals**:
- LCP: 1981ms
- CLS: 0.000
- TBT: 24ms

### /wiki/wiki/04-deliverables

| Category | Score |
|----------|-------|
| Performance | ✅ 93% |
| Accessibility | ✅ 92% |
| Best Practices | ✅ 100% |
| SEO | ✅ 100% |

**Core Web Vitals**:
- LCP: 1568ms
- CLS: 0.000

### /wiki/wiki/03-requirements

| Category | Score |
|----------|-------|
| Performance | ✅ 93% |
| Accessibility | ✅ 96% |
| Best Practices | ✅ 100% |
| SEO | ✅ 100% |

**Core Web Vitals**:
- LCP: 1583ms
- CLS: 0.000
- TBT: 3ms

### /wiki/wiki/02-process

| Category | Score |
|----------|-------|
| Performance | ✅ 93% |
| Accessibility | ✅ 92% |
| Best Practices | ✅ 100% |
| SEO | ✅ 100% |

**Core Web Vitals**:
- LCP: 1589ms
- CLS: 0.000
- TBT: 12ms

### /wiki/wiki/01-funding-areas

| Category | Score |
|----------|-------|
| Performance | ✅ 92% |
| Accessibility | ✅ 96% |
| Best Practices | ✅ 100% |
| SEO | ✅ 100% |

**Core Web Vitals**:
- LCP: 1710ms
- CLS: 0.000

### /wiki/wiki/00-overview

| Category | Score |
|----------|-------|
| Performance | ✅ 93% |
| Accessibility | ✅ 96% |
| Best Practices | ✅ 100% |
| SEO | ✅ 100% |

**Core Web Vitals**:
- LCP: 1587ms
- CLS: 0.000

### /wiki/raw/richtlinien-beratungsauftraege

| Category | Score |
|----------|-------|
| Performance | ✅ 92% |
| Accessibility | ✅ 96% |
| Best Practices | ✅ 100% |
| SEO | ✅ 100% |

**Core Web Vitals**:
- LCP: 1683ms
- CLS: 0.000
- TBT: 43ms

### /wiki/raw/richtlinie-beratungsfoerderung

| Category | Score |
|----------|-------|
| Performance | ✅ 92% |
| Accessibility | ✅ 96% |
| Best Practices | ✅ 100% |
| SEO | ✅ 100% |

**Core Web Vitals**:
- LCP: 1704ms
- CLS: 0.000
- TBT: 33ms

### /wiki/raw/honorarrichtlinien

| Category | Score |
|----------|-------|
| Performance | ✅ 90% |
| Accessibility | ✅ 96% |
| Best Practices | ✅ 100% |
| SEO | ✅ 100% |

**Core Web Vitals**:
- LCP: 1982ms
- CLS: 0.000
- TBT: 21ms

### /wiki/raw/checkliste-digitalisierung

| Category | Score |
|----------|-------|
| Performance | ✅ 90% |
| Accessibility | ✅ 92% |
| Best Practices | ✅ 100% |
| SEO | ✅ 100% |

**Core Web Vitals**:
- LCP: 1983ms
- CLS: 0.000

### /wiki/raw/beratungsablauf

| Category | Score |
|----------|-------|
| Performance | ⚠️ 89% |
| Accessibility | ✅ 96% |
| Best Practices | ✅ 100% |
| SEO | ✅ 100% |

**Core Web Vitals**:
- LCP: 1966ms
- CLS: 0.000
- TBT: 27ms

### /wiki/downloads

| Category | Score |
|----------|-------|
| Performance | ⚠️ 89% |
| Accessibility | ✅ 96% |
| Best Practices | ✅ 100% |
| SEO | ✅ 100% |

**Core Web Vitals**:
- LCP: 1965ms
- CLS: 0.001
- TBT: 27ms

### /chat

| Category | Score |
|----------|-------|
| Performance | ⚠️ 85% |
| Accessibility | ✅ 90% |
| Best Practices | ✅ 100% |
| SEO | ✅ 100% |

**Core Web Vitals**:
- LCP: 2313ms
- CLS: 0.000
- TBT: 36ms

