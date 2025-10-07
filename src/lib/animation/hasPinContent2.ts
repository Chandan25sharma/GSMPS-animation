import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function hasPinContent2(element: HTMLElement, area: HTMLElement, start = "top top", dWidth = 991) {
  const device_width = window.innerWidth;
  if (element && device_width > dWidth) {
    return gsap.to(element, {
      scrollTrigger: {
        trigger: area,
        pin: element,
        start: start,
        end: "bottom bottom",
        pinSpacing: false,
      },
    });
  }
}

export default hasPinContent2;