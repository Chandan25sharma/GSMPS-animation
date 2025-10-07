"use client";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import Link from "next/link";
import { useRef } from "react";

const FloatingElementsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null!);
  const containerRef = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      // Create floating elements animation
      const floatingElements = gsap.utils.toArray(".floating-orb");

      floatingElements.forEach((element, index) => {
        gsap.to(element as HTMLElement, {
          y: `random(-100, 100)`,
          x: `random(-50, 50)`,
          rotation: 360,
          duration: `random(8, 15)`,
          ease: "none",
          repeat: -1,
          delay: index * 0.5,
        });
      });

      // Content entrance animation
      gsap.from(".float-content", {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.3,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
          end: "bottom 30%",
          toggleActions: "play reverse play reverse",
        },
      });

      // Interactive hover effects
      const interactiveElements = gsap.utils.toArray(".interactive-element");
      interactiveElements.forEach((element) => {
        const htmlElement = element as HTMLElement;
        htmlElement.addEventListener("mouseenter", () => {
          gsap.to(htmlElement, {
            scale: 1.1,
            rotation: 5,
            duration: 0.3,
            ease: "back.out(1.7)",
          });
        });

        htmlElement.addEventListener("mouseleave", () => {
          gsap.to(htmlElement, {
            scale: 1,
            rotation: 0,
            duration: 0.3,
            ease: "back.out(1.7)",
          });
        });
      });

      // Magnetic effect for main CTA
      const magneticBtn = sectionRef.current.querySelector(".magnetic-btn");
      if (magneticBtn) {
        magneticBtn.addEventListener("mousemove", (e: Event) => {
          const mouseEvent = e as MouseEvent;
          const rect = magneticBtn.getBoundingClientRect();
          const x = mouseEvent.clientX - rect.left - rect.width / 2;
          const y = mouseEvent.clientY - rect.top - rect.height / 2;

          gsap.to(magneticBtn, {
            x: x * 0.3,
            y: y * 0.3,
            duration: 0.3,
            ease: "power2.out",
          });
        });

        magneticBtn.addEventListener("mouseleave", () => {
          gsap.to(magneticBtn, {
            x: 0,
            y: 0,
            duration: 0.5,
            ease: "elastic.out(1, 0.3)",
          });
        });
      }
    },
    { scope: sectionRef }
  );

  const achievements = [
    { number: "100+", label: "Projects Completed", icon: "" },
    { number: "50+", label: "Happy Clients", icon: "" },
    { number: "5+", label: "Years Experience", icon: "" },
    { number: "24/7", label: "Support Available", icon: "" },
  ];

  return (
    <section
      ref={sectionRef}
      className="min-h-screen bg-gradient-to-br from-violet-900 via-purple-900 to-indigo-900 text-white relative overflow-hidden"
    >
      {/* Floating orbs */}
      <div className="absolute inset-0">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="floating-orb absolute rounded-full opacity-20"
            style={{
              width: `${Math.random() * 60 + 20}px`,
              height: `${Math.random() * 60 + 20}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `linear-gradient(45deg, ${
                [
                  "#ff6b6b",
                  "#4ecdc4",
                  "#45b7d1",
                  "#f39c12",
                  "#e74c3c",
                  "#9b59b6",
                ][Math.floor(Math.random() * 6)]
              }, ${
                [
                  "#ff8e53",
                  "#26de81",
                  "#5f27cd",
                  "#00d2d3",
                  "#ff3742",
                  "#a55eea",
                ][Math.floor(Math.random() * 6)]
              })`,
            }}
          ></div>
        ))}
      </div>

      <div
        ref={containerRef}
        className="relative z-10 min-h-screen flex flex-col justify-center"
      >
        <div className="max-w-7xl mx-auto px-6 py-20">
          {/* Header */}
          <div className="text-center mb-20">
            <h2 className="float-content text-6xl md:text-8xl font-black mb-8">
              Ready to
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Get Started?
              </span>
            </h2>
            <p className="float-content text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Join us on this incredible journey of creating amazing digital
              experiences with cutting-edge animations and interactions.
            </p>
          </div>

          {/* Achievement stats */}
          <div className="float-content grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="interactive-element text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-white/30 transition-all duration-300"
              >
                <div className="text-3xl mb-2">{achievement.icon}</div>
                <div className="text-3xl md:text-4xl font-black mb-2 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  {achievement.number}
                </div>
                <div className="text-sm text-white/70 font-medium">
                  {achievement.label}
                </div>
              </div>
            ))}
          </div>

          {/* Call to action */}
          <div className="float-content text-center space-y-8">
            <button className="magnetic-btn bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 hover:from-purple-700 hover:via-pink-700 hover:to-red-700 px-16 py-8 rounded-full font-bold text-2xl transition-all duration-300 shadow-2xl hover:shadow-purple-500/25 mb-8">
              <span className="flex items-center space-x-4">
                <span>Start Your Project</span>
              </span>
            </button>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/"
                className="interactive-element flex items-center space-x-2 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300"
              >
                <span>← Back to Home</span>
              </Link>

              <Link
                href="/gallery"
                className="interactive-element flex items-center space-x-2 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300"
              >
                <span>View Gallery →</span>
              </Link>
            </div>
          </div>

          {/* Footer info */}
          <div className="float-content text-center mt-20 pt-8 border-t border-white/20">
            <p className="text-white/60">test 1 ssss. qqwwqqwqwqwqw</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FloatingElementsSection;
