"use client";

import { useEffect, useRef, useState, useCallback } from 'react';

/**
 * Universal lazy loading hook with Intersection Observer
 * Provides optimized lazy loading for any element
 */
export function useLazyLoading(options = {}) {
    const {
        rootMargin = '50px',
        threshold = 0.1,
        triggerOnce = true,
        priority = false,
        delay = 0
    } = options;

    const [isInView, setIsInView] = useState(priority);
    const [hasTriggered, setHasTriggered] = useState(false);
    const elementRef = useRef(null);
    const observerRef = useRef(null);
    const timeoutRef = useRef(null);

    const handleIntersection = useCallback(([entry]) => {
        if (entry.isIntersecting) {
            if (delay > 0) {
                timeoutRef.current = setTimeout(() => {
                    setIsInView(true);
                    if (triggerOnce) {
                        setHasTriggered(true);
                        observerRef.current?.disconnect();
                    }
                }, delay);
            } else {
                setIsInView(true);
                if (triggerOnce) {
                    setHasTriggered(true);
                    observerRef.current?.disconnect();
                }
            }
        } else if (!triggerOnce) {
            setIsInView(false);
        }
    }, [delay, triggerOnce]);

    useEffect(() => {
        if (priority || hasTriggered) return;

        observerRef.current = new IntersectionObserver(handleIntersection, {
            rootMargin,
            threshold
        });

        if (elementRef.current) {
            observerRef.current.observe(elementRef.current);
        }

        return () => {
            observerRef.current?.disconnect();
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, [handleIntersection, rootMargin, threshold, priority, hasTriggered]);

    return [elementRef, isInView];
}

/**
 * Hook for lazy loading images with placeholder support
 */
export function useLazyImage(src, options = {}) {
    const {
        placeholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMSIgaGVpZ2h0PSIxIiB2aWV3Qm94PSIwIDAgMSAxIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiNmM2Y0ZjYiLz48L3N2Zz4=',
        ...lazyOptions
    } = options;

    const [elementRef, isInView] = useLazyLoading(lazyOptions);
    const [isLoaded, setIsLoaded] = useState(false);
    const [hasError, setHasError] = useState(false);

    const handleLoad = useCallback(() => {
        setIsLoaded(true);
    }, []);

    const handleError = useCallback(() => {
        setHasError(true);
    }, []);

    return {
        ref: elementRef,
        isInView,
        isLoaded,
        hasError,
        src: isInView ? src : placeholder,
        onLoad: handleLoad,
        onError: handleError
    };
}

/**
 * Hook for lazy loading components with loading states
 */
export function useLazyComponent(options = {}) {
    const {
        loadingComponent = null,
        errorComponent = null,
        ...lazyOptions
    } = options;

    const [elementRef, isInView] = useLazyLoading(lazyOptions);
    const [isLoaded, setIsLoaded] = useState(false);
    const [hasError, setHasError] = useState(false);

    const handleLoad = useCallback(() => {
        setIsLoaded(true);
    }, []);

    const handleError = useCallback(() => {
        setHasError(true);
    }, []);

    return {
        ref: elementRef,
        isInView,
        isLoaded,
        hasError,
        loadingComponent,
        errorComponent,
        onLoad: handleLoad,
        onError: handleError
    };
}

/**
 * Hook for preloading resources when they come into view
 */
export function usePreloadOnView(options = {}) {
    const {
        preloadDistance = '200px',
        ...lazyOptions
    } = options;

    const [elementRef, isInView] = useLazyLoading({
        ...lazyOptions,
        rootMargin: preloadDistance
    });

    const preloadResource = useCallback((url, type = 'image') => {
        if (isInView && url) {
            const link = document.createElement('link');
            link.rel = 'preload';
            link.href = url;
            link.as = type;
            document.head.appendChild(link);
        }
    }, [isInView]);

    return [elementRef, isInView, preloadResource];
}

export default useLazyLoading;
