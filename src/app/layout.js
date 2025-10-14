"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import { Analytics } from "@vercel/analytics/react";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css"; // Ensure the path to your globals.css is correct
import { CaseProvider } from "../app/caseContext";
import PerformanceMonitor from "../../components/PerformanceMonitor";
import PreloadManager from "../../components/PreloadManager";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  // useEffect(() => {
  //   // Initialize Lenis for smooth scrolling
  //   const lenis = new Lenis({
  //     smooth: true,
  //     lerp: 0.08, // Smoothness factor
  //     wheelMultiplier: 1.2, // Scroll speed multiplier
  //     infinite: false,
  //   });

  //   // Handle animation frame for smooth scrolling
  //   function raf(time) {
  //     lenis.raf(time);
  //     requestAnimationFrame(raf);
  //   }
  //   requestAnimationFrame(raf);

  //   // Add a custom scroll behavior to scrollable containers
  //   const scrollableContainers = document.querySelectorAll(".scrollable");

  //   scrollableContainers.forEach((container) => {
  //     container.addEventListener("wheel", (event) => {
  //       // Prevent the default scroll
  //       event.preventDefault();

  //       // Manually update the scroll position of the container
  //       const delta = event.deltaY;

  //       // Adjust the scroll position using Lenis
  //       lenis.scrollTo(container.scrollTop + delta);
  //     });
  //   });

  //   return () => {
  //     lenis.destroy();
  //   };
  // }, []);

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Analytics />
        <PerformanceMonitor />
        <PreloadManager />
        <CaseProvider>
          {children}
        </CaseProvider>
      </body>
    </html>
  );
}
