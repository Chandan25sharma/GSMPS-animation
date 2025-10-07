"use client";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import Image from "next/image";
import { useRef } from "react";

const ParallaxSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null!);
  const bgRef = useRef<HTMLDivElement>(null!);
  const contentRef = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      // Parallax background effect
      gsap.to(bgRef.current, {
        yPercent: -50,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      // Content reveal with stagger
      gsap.from(".parallax-item", {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play reverse play reverse",
        },
      });

      // Floating elements
      gsap.to(".parallax-float", {
        y: -30,
        duration: 3,
        ease: "power1.inOut",
        repeat: -1,
        yoyo: true,
        stagger: 0.5,
      });
    },
    { scope: sectionRef }
  );

  const parallaxCards = [
    {
      title: "3D Transformations",
      description: "Advanced CSS 3D effects",

      image: "/images/13.webp",
    },
    {
      title: "Morphing Shapes",
      description: "Dynamic shape animations",

      image: "/images/14.webp",
    },
    {
      title: "Particle Systems",
      description: "Interactive particle effects",

      image: "/images/15.webp",
    },
  ];

  return (
    <section ref={sectionRef} className="min-h-screen relative overflow-hidden">
      {/* Parallax Background */}
      <div
        ref={bgRef}
        className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-teal-800 to-cyan-900"
        style={{ height: "120%", top: "-10%" }}
      >
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-emerald-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-400 rounded-full blur-3xl"></div>
        </div>
      </div>

      {/* Content */}
      <div
        ref={contentRef}
        className="relative z-10 min-h-screen flex items-center"
      >
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="text-center mb-16">
            <h2 className="parallax-item text-6xl md:text-8xl font-black text-white mb-6">
              Parallax Magic
            </h2>
            <p className="parallax-item text-2xl text-white/80 max-w-2xl mx-auto">
              Experience depth and dimension through advanced parallax scrolling
              effects
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {parallaxCards.map((card, index) => (
              <div
                key={index}
                className="parallax-item parallax-float group cursor-pointer"
              >
                <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 hover:border-white/40 transition-all duration-500 transform hover:scale-105 hover:rotate-1">
                  <div className="relative mb-6 overflow-hidden rounded-2xl">
                    <Image
                      src={card.image}
                      alt={card.title}
                      width={300}
                      height={200}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute top-4 right-4 text-3xl bg-white/20 backdrop-blur-sm rounded-full w-12 h-12 flex items-center justify-center">
                      {card.icon}
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3">
                    {card.title}
                  </h3>
                  <p className="text-white/70">{card.description}</p>

                  <div className="mt-6 flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors">
                    <span className="text-sm font-medium">Learn More</span>
                    <span className="ml-2 text-lg transform group-hover:translate-x-2 transition-transform duration-300">
                      →
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ParallaxSection;
