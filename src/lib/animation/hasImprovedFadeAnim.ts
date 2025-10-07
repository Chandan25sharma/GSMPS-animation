import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const hasImprovedFadeAnim = () => {
  const fadeElements = document.querySelectorAll('[data-fade]');
  
  fadeElements.forEach((element) => {
    // Kill any existing animations on this element
    ScrollTrigger.getAll().forEach(trigger => {
      if (trigger.trigger === element) {
        trigger.kill();
      }
    });

    gsap.set(element, { opacity: 0, y: 30 });
    
    gsap.to(element, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: "power2.out",
      scrollTrigger: {
        trigger: element,
        start: "top 90%",
        end: "bottom 10%",
        toggleActions: "play reverse play reverse",
        fastScrollEnd: true,
        preventOverlaps: true,
        refreshPriority: 1
      }
    });
  });
};

export { hasFadeAnim } from './hasFadeAnim';
