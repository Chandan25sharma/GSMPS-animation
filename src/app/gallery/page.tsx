"use client";

import PageLayout from "@/components/layout/PageLayout";
import GalleryContactSection from "@/components/sections/gallery/GalleryContactSection";
import GalleryHeroSection from "@/components/sections/gallery/GalleryHeroSection";
import GalleryShowcaseSection from "@/components/sections/gallery/GalleryShowcaseSection";
import HorizontalScrollSection from "@/components/sections/gallery/HorizontalScrollSection";
import ScrollSmootherComponent from "@/components/tools/ScrollSmoother";
import { optimizeScrollPerformance } from "@/lib/animation/scrollOptimization";
import { useEffect } from "react";

export default function Gallery() {
  useEffect(() => {
    // Initialize optimized scroll performance
    const timer = setTimeout(() => {
      optimizeScrollPerformance();
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <PageLayout>
      <ScrollSmootherComponent />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <GalleryHeroSection />
          <HorizontalScrollSection />
          <GalleryShowcaseSection />
          <GalleryContactSection />
        </div>
      </div>
    </PageLayout>
  );
}
