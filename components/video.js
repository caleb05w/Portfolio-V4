'use client'

import React, { useEffect, useRef, useState } from 'react';

function Video({placeholder, brightness}) {
  const iframeRef = useRef(null);
  const containerRef = useRef(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const updateScale = () => {
      if (iframeRef.current && containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const containerHeight = containerRef.current.offsetHeight;

        // Calculate aspect ratio of the YouTube video (16:9)
        const iframeAspectRatio = 16 / 9;

        // Calculate the scale factor to cover the container
        const widthScale = containerWidth / (containerHeight * iframeAspectRatio);
        const heightScale = containerHeight / (containerWidth / iframeAspectRatio);

        // The scale factor is the maximum of the two, ensuring the iframe fills the container
        const newScale = Math.max(widthScale, heightScale);

        setScale(newScale);
      }
    };

    // Update the scale when the window is resized
    window.addEventListener('resize', updateScale);

    // Initial scale calculation
    updateScale();

    // Cleanup the event listener when the component is unmounted
    return () => window.removeEventListener('resize', updateScale);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full  overflow-hidden hover:cursor-pointer"
    >
      {/* YouTube iframe with dynamic scaling */}
      <iframe
        ref={iframeRef}
        src={placeholder}

        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        className="absolute top-0 left-0 w-full h-full"
        style={{
          transform: `scale(${scale})`,
          transformOrigin: 'center center', // Ensure scaling happens from the center
        }}
      ></iframe>

      {/* Overlay div to prevent any unwanted UI or popup effects on hover */}
      <div className="w-full h-full min-h-[80vh] absolute top-0 left-0 z-10 brightness-[75%] bg-black opacity-[20%]"></div>
    </div>
  );
}

export default Video;
