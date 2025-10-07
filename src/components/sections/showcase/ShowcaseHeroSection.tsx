"use client";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import Image from "next/image";
import { useRef } from "react";

const ShowcaseHeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null!);
  const titleRef = useRef<HTMLHeadingElement>(null!);
  const subtitleRef = useRef<HTMLParagraphElement>(null!);
  const buttonRef = useRef<HTMLButtonElement>(null!);

  useGSAP(
    () => {
      const tl = gsap.timeline();

      // Advanced entrance animation
      tl.from(titleRef.current, {
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: "back.out(1.7)",
      })
        .from(
          subtitleRef.current,
          {
            y: 50,
            opacity: 0,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.6"
        )
        .from(
          buttonRef.current,
          {
            scale: 0,
            opacity: 0,
            duration: 0.6,
            ease: "elastic.out(1, 0.5)",
          },
          "-=0.3"
        );

      // Floating animation for background elements
      gsap.to(".floating-1", {
        y: -20,
        duration: 3,
        ease: "power1.inOut",
        repeat: -1,
        yoyo: true,
      });

      gsap.to(".floating-2", {
        y: 15,
        x: 10,
        duration: 4,
        ease: "power1.inOut",
        repeat: -1,
        yoyo: true,
        delay: 1,
      });

      gsap.to(".floating-3", {
        rotation: 360,
        duration: 20,
        ease: "none",
        repeat: -1,
      });
    },
    { scope: containerRef }
  );

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white relative overflow-hidden">
      <div ref={containerRef} className="relative z-10 text-center px-6">
        {/* Floating background elements */}
        <div className="absolute -top-20 -left-20 w-40 h-40 floating-1">
          <Image
            src="/images/11.webp"
            alt="Floating decoration"
            width={160}
            height={160}
            className="rounded-3xl opacity-20 blur-sm"
          />
        </div>

        <div className="absolute top-10 -right-16 w-32 h-32 floating-2">
          <Image
            src="/images/12.webp"
            alt="Floating decoration"
            width={128}
            height={128}
            className="rounded-2xl opacity-30"
          />
        </div>

        <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 w-24 h-24 floating-3 opacity-25">
          <div className="w-full h-full bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full"></div>
        </div>

        {/* Main content */}
        <div className="mb-12">
          <div className="inline-block p-3 bg-white/10 rounded-full backdrop-blur-sm mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center"></div>
          </div>
        </div>

        <h1
          ref={titleRef}
          className="text-7xl md:text-9xl font-black mb-8 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
        >
          Showcase
        </h1>

        <p
          ref={subtitleRef}
          className="text-2xl md:text-3xl mb-12 max-w-3xl mx-auto leading-relaxed text-white/90"
        >
          Experience next-level animations and interactive design concepts
        </p>

        <button
          ref={buttonRef}
          className="group bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 px-12 py-6 rounded-full font-bold text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-cyan-500/25"
        >
          <span className="flex items-center space-x-3">
            <span>Explore Magic</span>
          </span>
        </button>

        {/* Animated particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-2 h-2 bg-white rounded-full opacity-20 animate-pulse`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
              }}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShowcaseHeroSection;
