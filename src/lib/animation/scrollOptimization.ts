import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const optimizeScrollPerformance = () => {
  // Configure ScrollTrigger for optimal section transitions
  ScrollTrigger.config({
    autoRefreshEvents: "visibilitychange,DOMContentLoaded,load",
    ignoreMobileResize: true,
    limitCallbacks: true,
  });

  // Batch ScrollTrigger refreshes for better performance
  ScrollTrigger.batch('[data-fade]', {
    onEnter: (elements) => {
      gsap.from(elements, {
        opacity: 0,
        y: 30,
        stagger: 0.08,
        duration: 0.5,
        ease: "power2.out",
        force3D: true
      });
    },
    onLeave: (elements) => {
      gsap.to(elements, {
        opacity: 0.8,
        y: -20,
        stagger: 0.05,
        duration: 0.2,
        ease: "power2.in"
      });
    },
    onEnterBack: (elements) => {
      gsap.to(elements, {
        opacity: 1,
        y: 0,
        stagger: 0.08,
        duration: 0.4,
        ease: "power2.out"
      });
    },
    onLeaveBack: (elements) => {
      gsap.to(elements, {
        opacity: 0,
        y: 50,
        stagger: 0.1,
        duration: 0.3,
        ease: "power2.in"
      });
    },
    start: "top 85%",
    end: "bottom 15%",
  });

  // Optimize ScrollTrigger performance
  ScrollTrigger.config({
    autoRefreshEvents: "visibilitychange,DOMContentLoaded,load,resize",
    ignoreMobileResize: true
  });
};