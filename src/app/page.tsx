"use client";

import PageLayout from "@/components/layout/PageLayout";
import AboutSection from "@/components/sections/AboutSection";
import ContactSection from "@/components/sections/ContactSection";
import FinalSection from "@/components/sections/FinalSection";
import HeroSection from "@/components/sections/HeroSection";
import PortfolioSection from "@/components/sections/PortfolioSection";
import ServicesSection from "@/components/sections/ServicesSection";
import TeamSection from "@/components/sections/TeamSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import ScrollSmootherComponent from "@/components/tools/ScrollSmoother";
import { optimizeScrollPerformance } from "@/lib/animation/scrollOptimization";
import { useEffect } from "react";

export default function Home() {
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
          <HeroSection />
          <AboutSection />
          <ServicesSection />
          <PortfolioSection />
          <TeamSection />
          <TestimonialsSection />
          <ContactSection />
          <FinalSection />
        </div>
      </div>
    </PageLayout>
  );
}
