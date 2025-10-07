import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const hasPinContent = (element: HTMLElement, start = "bottom bottom", dWidth = 1023) => {
  const device_width = window.innerWidth;
  if (element && device_width > dWidth) {
    return gsap.to(element, {
      scrollTrigger: {
        trigger: element,
        pin: true,
        scrub: 0.5,
        pinSpacing: false,
        start: start || "bottom bottom",
        end: "bottom -=500",
        anticipatePin: 1,
        refreshPriority: 0
      },
    });
  }
};

export default hasPinContent;