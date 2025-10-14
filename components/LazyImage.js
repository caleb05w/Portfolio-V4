"use client";

import React, { useState, useCallback } from 'react';
import Image from 'next/image';
import { useLazyImage } from '../hooks/useLazyLoading';

function LazyImage({
    src,
    alt,
    width,
    height,
    className = '',
    priority = false,
    placeholder = 'blur',
    blurDataURL,
    sizes,
    quality = 75,
    ...props
}) {
    const [imageError, setImageError] = useState(false);

    const {
        ref,
        isInView,
        isLoaded,
        hasError,
        onLoad,
        onError
    } = useLazyImage(src, {
        priority,
        rootMargin: priority ? '200px' : '100px',
        threshold: 0.1
    });

    const handleLoad = useCallback(() => {
        onLoad();
    }, [onLoad]);

    const handleError = useCallback(() => {
        onError();
        setImageError(true);
    }, [onError]);

    // Generate a simple blur placeholder if none provided
    const defaultBlurDataURL = blurDataURL || 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q==';

    if (hasError || imageError) {
        return (
            <div
                ref={ref}
                className={`bg-gray-200 flex items-center justify-center ${className}`}
                style={{ width, height }}
            >
                <div className="text-gray-500 text-sm text-center p-4">
                    <svg className="w-8 h-8 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                    </svg>
                    <p>Image failed to load</p>
                </div>
            </div>
        );
    }

    return (
        <div ref={ref} className={`relative ${className}`}>
            {isInView ? (
                <Image
                    src={src}
                    alt={alt}
                    width={width}
                    height={height}
                    className={`transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'
                        }`}
                    loading={priority ? "eager" : "lazy"}
                    placeholder={placeholder}
                    blurDataURL={defaultBlurDataURL}
                    sizes={sizes}
                    quality={quality}
                    onLoad={handleLoad}
                    onError={handleError}
                    {...props}
                />
            ) : (
                // Placeholder while not in view
                <div
                    className="bg-gray-200 animate-pulse flex items-center justify-center"
                    style={{ width, height }}
                >
                    <div className="w-8 h-8 bg-gray-300 rounded"></div>
                </div>
            )}

            {/* Loading indicator */}
            {isInView && !isLoaded && (
                <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                    <div className="w-6 h-6 border-2 border-gray-400 border-t-transparent rounded-full animate-spin"></div>
                </div>
            )}
        </div>
    );
}

export default LazyImage;
