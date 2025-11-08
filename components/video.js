"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";

function Video({ placeholder, styles, priority = false }) {
  const iframeRef = useRef(null);
  const containerRef = useRef(null);
  const [scale, setScale] = useState(1);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const observerRef = useRef(null);

  // Add autoplay parameters for mobile compatibility
  const getAutoplayUrl = (url) => {
    if (!url) return url;
    const urlObj = new URL(url);
    urlObj.searchParams.set('autoplay', '1');
    urlObj.searchParams.set('mute', '1');
    urlObj.searchParams.set('playsinline', '1');
    urlObj.searchParams.set('loop', '1');
    return urlObj.toString();
  };

  // Intersection Observer for lazy loading
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
        rootMargin: '50px', // Start loading 50px before entering viewport
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
      const containerRatio = containerWidth / containerHeight;

      // YouTube video aspect ratio (16:9)
      const videoRatio = 16 / 9;

      // Calculate scale to cover the container (like object-fit: cover)
      // If container is wider than video, scale by width; if taller, scale by height
      const newScale = containerRatio > videoRatio
        ? containerWidth / (containerHeight * videoRatio)
        : containerHeight / (containerWidth / videoRatio);

      setScale(newScale);
    }
  }, []);

  useEffect(() => {
    if (!isInView) return;

    // Throttled resize handler
    let timeoutId;
    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(updateScale, 100);
    };

    window.addEventListener("resize", handleResize);
    updateScale();

    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(timeoutId);
    };
  }, [isInView, updateScale]);

  const handleIframeLoad = () => {
    setIsLoaded(true);
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full min-h-[40vh] overflow-hidden hover:cursor-pointer border-2 border-orange-500"
    >
      {/* Placeholder while loading */}
      {!isLoaded && isInView && (
        <div className="absolute inset-0 bg-gray-900 animate-pulse flex items-center justify-center">
          <div className="w-16 h-16  border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}

      {/* YouTube iframe with lazy loading */}
      {isInView && (
        <iframe
          ref={iframeRef}
          src={getAutoplayUrl(placeholder)}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          playsInline
          loading={priority ? "eager" : "lazy"}
          className={`absolute inset-0 w-full h-full transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'
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
        className={`w-full h-full min-h-[80vh] absolute top-0 left-0 z-[1] brightness-[100%]
          ${styles}`}
      ></div>
    </div>
  );
}

export default Video;
