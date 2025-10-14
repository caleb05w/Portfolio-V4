"use client";

import { useEffect } from 'react';

export default function PerformanceMonitor() {
    useEffect(() => {
        // Only run in production
        if (process.env.NODE_ENV !== 'production') return;

        // Web Vitals monitoring
        const reportWebVitals = (metric) => {
            // Send to analytics service
            if (typeof window !== 'undefined' && window.gtag) {
                window.gtag('event', metric.name, {
                    event_category: 'Web Vitals',
                    event_label: metric.id,
                    value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
                    non_interaction: true,
                });
            }

            // Log to console for debugging
            console.log('Web Vital:', metric);
        };

        // Import and initialize web-vitals
        import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
            getCLS(reportWebVitals);
            getFID(reportWebVitals);
            getFCP(reportWebVitals);
            getLCP(reportWebVitals);
            getTTFB(reportWebVitals);
        });

        // Resource timing monitoring
        const monitorResources = () => {
            if (typeof window === 'undefined') return;

            const observer = new PerformanceObserver((list) => {
                for (const entry of list.getEntries()) {
                    if (entry.entryType === 'resource') {
                        const resource = entry;
                        const size = resource.transferSize || 0;
                        const duration = resource.duration || 0;

                        // Log large resources
                        if (size > 1024 * 1024) { // > 1MB
                            console.warn(`Large resource detected: ${resource.name} (${(size / 1024 / 1024).toFixed(2)}MB, ${duration.toFixed(2)}ms)`);
                        }

                        // Log slow resources
                        if (duration > 3000) { // > 3s
                            console.warn(`Slow resource detected: ${resource.name} (${duration.toFixed(2)}ms)`);
                        }
                    }
                }
            });

            observer.observe({ entryTypes: ['resource'] });
        };

        // Navigation timing monitoring
        const monitorNavigation = () => {
            if (typeof window === 'undefined') return;

            window.addEventListener('load', () => {
                const navigation = performance.getEntriesByType('navigation')[0];
                if (navigation) {
                    const metrics = {
                        'DNS Lookup': navigation.domainLookupEnd - navigation.domainLookupStart,
                        'TCP Connection': navigation.connectEnd - navigation.connectStart,
                        'TLS Handshake': navigation.secureConnectionStart > 0 ? navigation.connectEnd - navigation.secureConnectionStart : 0,
                        'Request': navigation.responseStart - navigation.requestStart,
                        'Response': navigation.responseEnd - navigation.responseStart,
                        'DOM Processing': navigation.domContentLoadedEventEnd - navigation.responseEnd,
                        'Total Load Time': navigation.loadEventEnd - navigation.navigationStart,
                    };

                    console.log('Navigation Timing:', metrics);

                    // Alert on slow metrics
                    Object.entries(metrics).forEach(([name, value]) => {
                        if (value > 1000) { // > 1s
                            console.warn(`Slow ${name}: ${value.toFixed(2)}ms`);
                        }
                    });
                }
            });
        };

        // Memory usage monitoring (if available)
        const monitorMemory = () => {
            if (typeof window !== 'undefined' && 'memory' in performance) {
                const memory = performance.memory;
                console.log('Memory Usage:', {
                    used: `${(memory.usedJSHeapSize / 1024 / 1024).toFixed(2)}MB`,
                    total: `${(memory.totalJSHeapSize / 1024 / 1024).toFixed(2)}MB`,
                    limit: `${(memory.jsHeapSizeLimit / 1024 / 1024).toFixed(2)}MB`,
                });
            }
        };

        // Initialize monitoring
        monitorResources();
        monitorNavigation();
        monitorMemory();

        // Monitor memory usage periodically
        const memoryInterval = setInterval(monitorMemory, 30000); // Every 30 seconds

        return () => {
            clearInterval(memoryInterval);
        };
    }, []);

    return null; // This component doesn't render anything
}
