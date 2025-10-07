"use client";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { useRef } from "react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const GalleryContactSection = () => {
  const pinElement = useRef<HTMLDivElement>(null!);
  const containerRef = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      // Optimized animation with better performance
      const elements = containerRef.current.querySelectorAll("[data-fade]");

      // Pre-set elements for faster loading
      gsap.set(elements, {
        opacity: 0,
        y: 30,
        willChange: "transform, opacity",
      });

      // Batch animation for better performance
      ScrollTrigger.batch(elements, {
        onEnter: (batch) => {
          gsap.to(batch, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: "power2.out",
            clearProps: "willChange",
          });
        },
        start: "top 85%",
        end: "bottom 15%",
      });
    },
    { scope: containerRef, dependencies: [] }
  );

  return (
    <section
      ref={pinElement}
      className="min-h-[120vh] flex items-center justify-center bg-gradient-to-br from-gray-900 to-black text-white relative overflow-hidden py-20"
    >
      {/* Background flourishes */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-1/4 w-44 h-44 bg-gray-300 rounded-full blur-2xl"></div>
        <div className="absolute bottom-28 right-1/4 w-36 h-36 bg-white rounded-full blur-xl"></div>
        <div className="absolute top-1/2 right-16 w-28 h-28 bg-gray-400 rounded-full blur-lg"></div>
      </div>

      <div
        ref={containerRef}
        className="max-w-4xl mx-auto px-6 text-center relative z-10"
      >
        <h2 data-fade className="text-5xl md:text-7xl font-bold mb-8">
          Let&apos;s Create Together
        </h2>
        <p
          data-fade
          className="text-xl mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Ready to bring your creative vision to life? Whether it&apos;s web
          development, design, or animation, we&apos;re here to help you achieve
          your goals.
        </p>
        <div data-fade className="space-y-6">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-gray-900 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors">
              Start a Project
            </button>
            <Link
              href="/"
              className="bg-white/10 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-colors backdrop-blur-sm"
            >
              Back to Home
            </Link>
          </div>
        </div>
        <div data-fade className="mt-16 grid md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-2xl font-semibold mb-2">Fast Delivery</h3>
            <p className="text-sm opacity-75">Quick turnaround times</p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-2">Quality Work</h3>
            <p className="text-sm opacity-75">Professional standards</p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-2">24/7 Support</h3>
            <p className="text-sm opacity-75">Always here to help</p>
          </div>
        </div>
        <div data-fade className="mt-16 pt-8 border-t border-white/20">
          <p className="text-sm opacity-60">test o1 bbbggffgdfdf</p>
        </div>
      </div>
    </section>
  );
};

export default GalleryContactSection;
