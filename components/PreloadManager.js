"use client";

import { useEffect, useRef } from 'react';

/**
 * PreloadManager - Intelligently preloads critical resources
 * Based on user behavior and viewport proximity
 */
export default function PreloadManager() {
    const preloadedResources = useRef(new Set());

    useEffect(() => {
        // Critical YouTube videos to preload (above-the-fold content)
        const criticalVideos = [
            'https://www.youtube.com/embed/Hm-B_KlY6bw', // RevisionDojo main video
            'https://www.youtube.com/embed/w8R3G3Anpjo', // Innota main video
        ];

        // Critical images to preload
        const criticalImages = [
            '/images/RD15.png',
            '/images/Img1.png',
        ];

        // Preload critical resources after initial page load
        const preloadCriticalResources = () => {
            // Preload critical YouTube thumbnails
            criticalVideos.forEach(videoUrl => {
                const videoId = videoUrl.match(/embed\/([^?]+)/)?.[1];
                if (videoId && !preloadedResources.current.has(videoId)) {
                    const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
                    preloadImage(thumbnailUrl);
                    preloadedResources.current.add(videoId);
                }
            });

            // Preload critical images
            criticalImages.forEach(imageUrl => {
                if (!preloadedResources.current.has(imageUrl)) {
                    preloadImage(imageUrl);
                    preloadedResources.current.add(imageUrl);
                }
            });
        };

        // Preload image function
        const preloadImage = (url) => {
            const link = document.createElement('link');
            link.rel = 'preload';
            link.href = url;
            link.as = 'image';
            link.crossOrigin = 'anonymous';
            document.head.appendChild(link);
        };

        // Preload video function
        const preloadVideo = (url) => {
            const link = document.createElement('link');
            link.rel = 'preload';
            link.href = url;
            link.as = 'video';
            link.crossOrigin = 'anonymous';
            document.head.appendChild(link);
        };

        // DNS prefetch for external domains
        const prefetchDomains = [
            'https://www.youtube.com',
            'https://img.youtube.com',
        ];

        prefetchDomains.forEach(domain => {
            const link = document.createElement('link');
            link.rel = 'dns-prefetch';
            link.href = domain;
            document.head.appendChild(link);
        });

        // Preconnect to YouTube for faster loading
        const preconnectLink = document.createElement('link');
        preconnectLink.rel = 'preconnect';
        preconnectLink.href = 'https://www.youtube.com';
        preconnectLink.crossOrigin = 'anonymous';
        document.head.appendChild(preconnectLink);

        // Delay preloading to not interfere with critical resources
        const preloadTimer = setTimeout(preloadCriticalResources, 2000);

        // Preload on user interaction (hover, scroll)
        const handleUserInteraction = () => {
            preloadCriticalResources();
            // Remove listeners after first interaction
            document.removeEventListener('mouseover', handleUserInteraction);
            document.removeEventListener('scroll', handleUserInteraction);
        };

        document.addEventListener('mouseover', handleUserInteraction, { passive: true });
        document.addEventListener('scroll', handleUserInteraction, { passive: true });

        return () => {
            clearTimeout(preloadTimer);
            document.removeEventListener('mouseover', handleUserInteraction);
            document.removeEventListener('scroll', handleUserInteraction);
        };
    }, []);

    return null; // This component doesn't render anything
}

/**
 * Hook for intelligent preloading based on viewport proximity
 */
export function useIntelligentPreload(resources, options = {}) {
    const {
        preloadDistance = '300px',
        maxConcurrent = 3,
        delay = 1000
    } = options;

    const preloadedCount = useRef(0);
    const preloadedResources = useRef(new Set());

    useEffect(() => {
        if (!resources || resources.length === 0) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting && preloadedCount.current < maxConcurrent) {
                        const resource = entry.target.dataset.resource;
                        if (resource && !preloadedResources.current.has(resource)) {
                            preloadResource(resource);
                            preloadedResources.current.add(resource);
                            preloadedCount.current++;
                        }
                    }
                });
            },
            {
                rootMargin: preloadDistance,
                threshold: 0.1
            }
        );

        const preloadResource = (url) => {
            const link = document.createElement('link');
            link.rel = 'preload';
            link.href = url;

            // Determine resource type
            if (url.includes('youtube.com') || url.includes('.mp4') || url.includes('.webm')) {
                link.as = 'video';
            } else if (url.match(/\.(jpg|jpeg|png|gif|webp|avif)$/i)) {
                link.as = 'image';
            } else {
                link.as = 'fetch';
            }

            link.crossOrigin = 'anonymous';
            document.head.appendChild(link);
        };

        // Observe elements with resource data attributes
        const elements = document.querySelectorAll('[data-resource]');
        elements.forEach(el => observer.observe(el));

        return () => observer.disconnect();
    }, [resources, preloadDistance, maxConcurrent, delay]);
}
