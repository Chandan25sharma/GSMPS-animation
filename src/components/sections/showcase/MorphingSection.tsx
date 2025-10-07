"use client";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { useRef } from "react";

const MorphingSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null!);
  const morphRef = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      // Morphing shape animation
      const tl = gsap.timeline({ repeat: -1 });

      tl.to(morphRef.current, {
        borderRadius: "50%",
        duration: 2,
        ease: "power2.inOut",
      })
        .to(morphRef.current, {
          borderRadius: "20px",
          rotation: 45,
          duration: 2,
          ease: "power2.inOut",
        })
        .to(morphRef.current, {
          borderRadius: "0%",
          rotation: 90,
          duration: 2,
          ease: "power2.inOut",
        })
        .to(morphRef.current, {
          borderRadius: "30px",
          rotation: 0,
          duration: 2,
          ease: "power2.inOut",
        });

      // Content animation on scroll
      gsap.from(".morph-content", {
        x: -100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          end: "bottom 30%",
          toggleActions: "play reverse play reverse",
        },
      });

      // Background particles
      gsap.to(".morph-particle", {
        y: "random(-50, 50)",
        x: "random(-30, 30)",
        rotation: "random(0, 360)",
        duration: "random(3, 6)",
        ease: "none",
        repeat: -1,
        yoyo: true,
        stagger: {
          amount: 2,
          from: "random",
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white relative overflow-hidden"
    >
      {/* Background particles */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="morph-particle absolute w-4 h-4 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          ></div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center relative z-10">
        {/* Morphing Shape */}
        <div className="flex justify-center">
          <div
            ref={morphRef}
            className="w-80 h-80 bg-gradient-to-br from-pink-500 via-purple-500 to-cyan-500 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute inset-4 bg-gradient-to-br from-white/20 to-transparent rounded-lg"></div>
            <div className="absolute bottom-4 left-4 right-4 text-center">
              <span className="text-sm font-bold text-white/80">
                Morphing Shape
              </span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-8">
          <h2 className="morph-content text-6xl md:text-7xl font-black mb-6">
            Dynamic
            <br />
            <span className="bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Morphing
            </span>
          </h2>

          <p className="morph-content text-xl text-white/80 leading-relaxed">
            Watch shapes transform and evolve in real-time. Our morphing
            animations create fluid transitions that captivate and engage users.
          </p>

          <div className="morph-content space-y-4">
            <div className="flex items-center space-x-4 p-4 bg-white/10 rounded-2xl backdrop-blur-sm">
              <div>
                <h3 className="font-bold">Fluid Animations</h3>
                <p className="text-sm text-white/70">
                  Smooth shape transformations
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4 p-4 bg-white/10 rounded-2xl backdrop-blur-sm">
              <div>
                <h3 className="font-bold">Performance Optimized</h3>
                <p className="text-sm text-white/70">Smooth 60fps animations</p>
              </div>
            </div>
          </div>

          <button className="morph-content group bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 px-8 py-4 rounded-full font-bold transition-all duration-300 transform hover:scale-105">
            <span className="flex items-center space-x-2">
              <span>Try Interactive Demo</span>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default MorphingSection;
