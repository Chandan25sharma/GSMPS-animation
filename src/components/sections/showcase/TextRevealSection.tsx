"use client";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { useRef } from "react";

const TextRevealSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null!);
  const textRef = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      // Split text into individual characters for animation
      const text = textRef.current;
      const textContent = text.textContent;
      text.innerHTML = "";

      if (textContent) {
        textContent.split("").forEach((char) => {
          const span = document.createElement("span");
          span.textContent = char === " " ? "\u00A0" : char;
          span.className = "text-char";
          text.appendChild(span);
        });
      }

      // Animate characters with wave effect
      gsap.from(".text-char", {
        y: 100,
        opacity: 0,
        duration: 0.8,
        ease: "back.out(1.7)",
        stagger: {
          amount: 2,
          from: "start",
        },
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play reverse play reverse",
        },
      });

      // Reveal animation for content cards
      gsap.from(".reveal-card", {
        y: 80,
        opacity: 0,
        rotation: 5,
        duration: 1,
        ease: "power2.out",
        stagger: 0.3,
        scrollTrigger: {
          trigger: ".reveal-container",
          start: "top 75%",
          end: "bottom 25%",
          toggleActions: "play reverse play reverse",
        },
      });

      // Continuous floating animation
      gsap.to(".float-element", {
        y: -20,
        duration: 3,
        ease: "power1.inOut",
        repeat: -1,
        yoyo: true,
        stagger: 0.5,
      });
    },
    { scope: sectionRef }
  );

  const features = [
    {
      title: "Text Masking",
      description: "Advanced typography animations with mask effects",
      icon: "",
      color: "from-orange-500 to-red-600",
    },
    {
      title: "Scroll-Triggered",
      description: "Animations that respond to user scroll behavior",
      icon: "",
      color: "from-green-500 to-teal-600",
    },
    {
      title: "Performance",
      description: "Optimized for smooth 60fps animations",
      icon: "",
      color: "from-blue-500 to-purple-600",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-orange-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-400 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 min-h-screen flex flex-col justify-center">
        <div className="max-w-7xl mx-auto px-6 py-20">
          {/* Animated text reveal */}
          <div className="text-center mb-20">
            <div
              ref={textRef}
              className="text-7xl md:text-9xl font-black mb-8 leading-none"
            >
              TEXT REVEAL
            </div>
            <p className="text-2xl text-white/70 max-w-2xl mx-auto">
              Experience the power of character-by-character text animations
            </p>
          </div>

          {/* Feature cards */}
          <div className="reveal-container grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="reveal-card float-element group cursor-pointer"
              >
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:border-white/30 transition-all duration-500 transform hover:scale-105">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    {feature.icon}
                  </div>

                  <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-white/70 leading-relaxed">
                    {feature.description}
                  </p>

                  <div className="mt-6 flex items-center text-orange-400 group-hover:text-orange-300 transition-colors">
                    <span className="text-sm font-medium">Explore Feature</span>
                    <span className="ml-2 transform group-hover:translate-x-2 transition-transform duration-300">
                      →
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to action */}
          <div className="text-center mt-20">
            <button className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 px-12 py-6 rounded-full font-bold text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-orange-500/25">
              <span className="flex items-center space-x-3">
                <span>See More Effects</span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TextRevealSection;
