"use client";

import PageLayout from "@/components/layout/PageLayout";
import FloatingElementsSection from "@/components/sections/showcase/FloatingElementsSection";
import MorphingSection from "@/components/sections/showcase/MorphingSection";
import ParallaxSection from "@/components/sections/showcase/ParallaxSection";
import ShowcaseHeroSection from "@/components/sections/showcase/ShowcaseHeroSection";
import TextRevealSection from "@/components/sections/showcase/TextRevealSection";
import ScrollSmootherComponent from "@/components/tools/ScrollSmoother";
import { optimizeScrollPerformance } from "@/lib/animation/scrollOptimization";
import { useEffect } from "react";

export default function Showcase() {
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
          <ShowcaseHeroSection />
          <ParallaxSection />
          <MorphingSection />
          <TextRevealSection />
          <FloatingElementsSection />
        </div>
      </div>
    </PageLayout>
  );
}
