import { gsap } from 'gsap';

export const hasFadeAnim = () => {
  const fadeElements = document.querySelectorAll('[data-fade]');
  
  fadeElements.forEach((element) => {
    gsap.fromTo(element, 
      { 
        opacity: 0, 
        y: 50 
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: element,
          start: "top 85%",
          end: "bottom 15%",
          toggleActions: "play reverse play reverse",
          scrub: false,
          refreshPriority: 1
        }
      }
    );
  });
};