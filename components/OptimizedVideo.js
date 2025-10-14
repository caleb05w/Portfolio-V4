
"use client";

import React, { useEffect, useRef, useState, useCallback, useMemo } from "react";

function OptimizedVideo({ placeholder, styles, priority = false, thumbnail = null, title = "Video" }) {
    const iframeRef = useRef(null);
    const containerRef = useRef(null);
    const [scale, setScale] = useState(1);
    const [isLoaded, setIsLoaded] = useState(false);
    const [isInView, setIsInView] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const [showThumbnail, setShowThumbnail] = useState(true);
    const [thumbnailError, setThumbnailError] = useState(false);
    const observerRef = useRef(null);
    const loadTimeoutRef = useRef(null);

    // Extract video ID from YouTube URL for thumbnail generation
    const videoId = useMemo(() => {
        if (!placeholder) return null;
        const match = placeholder.match(/(?:youtube\.com\/embed\/|youtu\.be\/|youtube\.com\/watch\?v=)([^&\n?#]+)/);
        return match ? match[1] : null;
    }, [placeholder]);

    // Generate optimized YouTube thumbnail URL with fallbacks
    const thumbnailUrl = useMemo(() => {
        if (thumbnail) return thumbnail;
        if (videoId) {
            // Try different thumbnail qualities with fallbacks
            if (thumbnailError) {
                return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
            }
            return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
        }
        return null;
    }, [videoId, thumbnail, thumbnailError]);

    // Optimized YouTube URL with performance parameters
    const optimizedUrl = useMemo(() => {
        if (!placeholder) return '';

        try {
            const url = new URL(placeholder);

            // Add performance optimizations
            url.searchParams.set('enablejsapi', '1');
            url.searchParams.set('origin', typeof window !== 'undefined' ? window.location.origin : '');
            url.searchParams.set('widget_referrer', typeof window !== 'undefined' ? window.location.origin : '');

            // Mobile optimizations
            url.searchParams.set('playsinline', '1');
            url.searchParams.set('iv_load_policy', '3'); // Hide annotations
            url.searchParams.set('cc_load_policy', '0'); // Hide captions by default

            // Performance optimizations
            url.searchParams.set('rel', '0'); // Don't show related videos
            url.searchParams.set('modestbranding', '1'); // Minimal YouTube branding
            url.searchParams.set('fs', '1'); // Allow fullscreen

            // Preload optimizations
            if (priority) {
                url.searchParams.set('preload', 'auto');
            }

            return url.toString();
        } catch (error) {
            console.warn('Error optimizing YouTube URL:', error);
            return placeholder;
        }
    }, [placeholder, priority]);

    // Intersection Observer with enhanced lazy loading
    useEffect(() => {
        if (priority) {
            setIsInView(true);
            return;
        }

        observerRef.current = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                    observerRef.current?.disconnect();
                }
            },
            {
                rootMargin: priority ? '200px' : '100px', // Larger margin for priority content
                threshold: 0.1
            }
        );

        if (containerRef.current) {
            observerRef.current.observe(containerRef.current);
        }

        return () => {
            observerRef.current?.disconnect();
        };
    }, [priority]);

    const updateScale = useCallback(() => {
        if (iframeRef.current && containerRef.current) {
            const containerWidth = containerRef.current.offsetWidth;
            const containerHeight = containerRef.current.offsetHeight;

            // Calculate aspect ratio of the YouTube video (16:9)
            const iframeAspectRatio = 16 / 9;

            // Calculate the scale factor to cover the container
            const widthScale =
                containerWidth / (containerHeight * iframeAspectRatio);
            const heightScale =
                containerHeight / (containerWidth / iframeAspectRatio);

            // The scale factor is the maximum of the two, ensuring the iframe fills the container
            const newScale = Math.max(widthScale, heightScale);

            setScale(newScale);
        }
    }, []);

    useEffect(() => {
        if (!isInView) return;

        // Throttled resize handler with better performance
        let timeoutId;
        const handleResize = () => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(updateScale, 150); // Slightly longer delay for better performance
        };

        window.addEventListener("resize", handleResize, { passive: true });
        updateScale();

        return () => {
            window.removeEventListener("resize", handleResize);
            clearTimeout(timeoutId);
        };
    }, [isInView, updateScale]);

    const handleIframeLoad = useCallback(() => {
        // Add a small delay to ensure smooth transition
        loadTimeoutRef.current = setTimeout(() => {
            setIsLoaded(true);
            setIsPlaying(true);
        }, 300);
    }, []);

    const handleThumbnailClick = useCallback(() => {
        setShowThumbnail(false);
        setIsInView(true);
    }, []);

    const handleThumbnailError = useCallback(() => {
        setThumbnailError(true);
    }, []);

    // Cleanup timeouts
    useEffect(() => {
        return () => {
            if (loadTimeoutRef.current) {
                clearTimeout(loadTimeoutRef.current);
            }
        };
    }, []);

    return (
        <div
            ref={containerRef}
            className="relative w-full h-full min-h-[40vh] overflow-hidden hover:cursor-pointer group"
        >
            {/* YouTube Thumbnail with Play Button */}
            {showThumbnail && thumbnailUrl && !isInView && (
                <div
                    className="absolute inset-0 w-full h-full bg-gray-900 flex items-center justify-center cursor-pointer"
                    onClick={handleThumbnailClick}
                >
                    <div className="relative w-full h-full">
                        <img
                            src={thumbnailUrl}
                            alt={`${title} thumbnail`}
                            className="w-full h-full object-cover opacity-80 transition-opacity duration-300"
                            onError={handleThumbnailError}
                            loading="lazy"
                        />
                        {/* Play Button Overlay */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center shadow-2xl transform transition-all duration-200 group-hover:scale-110 group-hover:bg-red-700">
                                <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M8 5v14l11-7z" />
                                </svg>
                            </div>
                        </div>
                        {/* Loading indicator */}
                        <div className="absolute top-4 right-4 bg-black bg-opacity-50 text-white px-2 py-1 rounded text-sm">
                            Click to load video
                        </div>
                        {/* Video title overlay */}
                        {title && (
                            <div className="absolute bottom-4 left-4 right-4 bg-black bg-opacity-50 text-white p-2 rounded text-sm">
                                {title}
                            </div>
                        )}
                    </div>
                </div>
            )}

            {/* Loading Placeholder */}
            {!isLoaded && isInView && !showThumbnail && (
                <div className="absolute inset-0 bg-gray-900 flex items-center justify-center">
                    <div className="flex flex-col items-center gap-4">
                        <div className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
                        <p className="text-white text-sm opacity-75">Loading video...</p>
                    </div>
                </div>
            )}

            {/* YouTube iframe with advanced lazy loading */}
            {isInView && !showThumbnail && (
                <iframe
                    ref={iframeRef}
                    src={optimizedUrl}
                    title={`${title} - YouTube video player`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    loading={priority ? "eager" : "lazy"}
                    className={`absolute inset-0 w-full h-full transition-all duration-500 ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                        }`}
                    style={{
                        transform: `scale(${scale})`,
                        transformOrigin: "center center",
                    }}
                    onLoad={handleIframeLoad}
                />
            )}

            {/* Overlay div to prevent any unwanted UI or popup effects on hover */}
            <div
                className={`w-full h-full min-h-[80vh] absolute top-0 left-0 z-[1] brightness-[100%] transition-opacity duration-300 ${isPlaying ? 'opacity-0' : 'opacity-100'
                    } ${styles}`}
            ></div>
        </div>
    );
}

export default OptimizedVideo;
