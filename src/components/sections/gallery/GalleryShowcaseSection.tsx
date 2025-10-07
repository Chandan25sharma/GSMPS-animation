"use client";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const GalleryShowcaseSection = () => {
  const pinElement = useRef<HTMLDivElement>(null!);
  const containerRef = useRef<HTMLDivElement>(null!);

  const showcaseItems = [
    {
      title: "Digital Art Collection",
      count: "50+ Artworks",
      color: "bg-gradient-to-br from-pink-500 to-purple-600",
    },
    {
      title: "Photography Series",
      count: "100+ Photos",
      color: "bg-gradient-to-br from-blue-500 to-cyan-600",
    },
    {
      title: "3D Renderings",
      count: "25+ Models",
      color: "bg-gradient-to-br from-green-500 to-teal-600",
    },
    {
      title: "Video Projects",
      count: "15+ Videos",
      color: "bg-gradient-to-br from-orange-500 to-red-600",
    },
  ];

  useGSAP(
    () => {
      // Get all elements that need animation
      const elements = containerRef.current.querySelectorAll("[data-fade]");

      // Pre-set elements for instant availability
      gsap.set(elements, {
        opacity: 0,
        y: 30,
        willChange: "transform, opacity",
        force3D: true, // Hardware acceleration
      });

      // Create timeline for immediate execution when needed
      const tl = gsap.timeline({ paused: true });

      tl.to(elements, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
        clearProps: "willChange",
      });

      // Optimized ScrollTrigger with immediate response
      ScrollTrigger.create({
        trigger: pinElement.current,
        start: "top 90%", // Start earlier
        end: "bottom 10%",
        onEnter: () => {
          tl.play();
        },
        onLeave: () => {
          tl.reverse();
        },
        onEnterBack: () => {
          tl.play();
        },
      });
    },
    { scope: containerRef, dependencies: [] }
  );

  return (
    <section
      ref={pinElement}
      className="gallery-next-section min-h-[120vh] flex items-center justify-center bg-gradient-to-br from-emerald-900 to-teal-900 text-white relative overflow-hidden py-20"
    >
      {/* Background flourishes */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-24 right-1/3 w-40 h-40 bg-emerald-300 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 left-1/3 w-48 h-48 bg-teal-300 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-20 w-32 h-32 bg-green-300 rounded-full blur-lg"></div>
      </div>

      <div ref={containerRef} className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 data-fade className="text-5xl md:text-6xl font-bold mb-6">
            Creative Showcase
          </h2>
          <p data-fade className="text-xl max-w-2xl mx-auto">
            Discover our diverse collection of creative works across different
            mediums
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {showcaseItems.map((item, index) => (
            <div
              key={index}
              data-fade
              className={`${item.color} p-8 rounded-2xl relative overflow-hidden group cursor-pointer`}
            >
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-lg opacity-90 mb-6">{item.count}</p>
                <button className="bg-white/20 px-6 py-3 rounded-full backdrop-blur-sm hover:bg-white/30 transition-all duration-300">
                  Explore Collection
                </button>
              </div>
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
        <div data-fade className="text-center mt-16">
          <p className="text-lg mb-6">Want to see more of our work?</p>
          <button className="bg-white text-emerald-900 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors">
            View Full Portfolio
          </button>
        </div>
      </div>
    </section>
  );
};

export default GalleryShowcaseSection;
