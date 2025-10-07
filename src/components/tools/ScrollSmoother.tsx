"use client";

import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
}

const ScrollSmootherComponent = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const device_width = window.innerWidth;

      const smoother = ScrollSmoother.create({
        smooth: 1.2,
        effects: device_width < 1025 ? false : true,
        smoothTouch: false,
        normalizeScroll: true,
        ignoreMobileResize: true,
      });

      // Refresh ScrollTrigger on resize for better responsiveness
      const handleResize = () => {
        ScrollTrigger.refresh();
      };

      window.addEventListener("resize", handleResize);

      return () => {
        smoother?.kill();
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  return null;
};

export default ScrollSmootherComponent;
