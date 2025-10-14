"use client";

import React, { useState, useCallback } from 'react';
import { useLazyLoading } from '../hooks/useLazyLoading';

function LazyContainer({
    children,
    className = '',
    priority = false,
    rootMargin = '100px',
    threshold = 0.1,
    delay = 0,
    loadingComponent = null,
    errorComponent = null,
    onLoad = null,
    onError = null,
    ...props
}) {
    const [isLoaded, setIsLoaded] = useState(false);
    const [hasError, setHasError] = useState(false);

    const [ref, isInView] = useLazyLoading({
        rootMargin,
        threshold,
        priority,
        delay
    });

    const handleLoad = useCallback(() => {
        setIsLoaded(true);
        onLoad?.();
    }, [onLoad]);

    const handleError = useCallback(() => {
        setHasError(true);
        onError?.();
    }, [onError]);

    // Default loading component
    const defaultLoadingComponent = loadingComponent || (
        <div className="flex items-center justify-center p-8">
            <div className="w-8 h-8 border-2 border-gray-300 border-t-transparent rounded-full animate-spin"></div>
        </div>
    );

    // Default error component
    const defaultErrorComponent = errorComponent || (
        <div className="flex items-center justify-center p-8 text-gray-500">
            <div className="text-center">
                <svg className="w-12 h-12 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                <p>Failed to load content</p>
            </div>
        </div>
    );

    return (
        <div ref={ref} className={className} {...props}>
            {hasError ? (
                defaultErrorComponent
            ) : isInView ? (
                <div onLoad={handleLoad} onError={handleError} className="w-full h-full">
                    {children}
                </div>
            ) : (
                defaultLoadingComponent
            )}
        </div>
    );
}

export default LazyContainer;
