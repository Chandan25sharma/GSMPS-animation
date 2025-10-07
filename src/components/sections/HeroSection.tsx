"use client";

import { hasFadeAnim } from "@/lib/animation/hasFadeAnim";
import hasPinContent from "@/lib/animation/hasPinContent";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { useRef } from "react";

const HeroSection = () => {
  const pinElement = useRef<HTMLDivElement>(null!);
  const containerRef = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      hasPinContent(pinElement.current);
      hasFadeAnim();
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={pinElement}
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 to-purple-900 text-white relative overflow-hidden"
    >
      {/* Background flourishes */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-white rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-white rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-10 w-24 h-24 bg-purple-300 rounded-full blur-lg"></div>
      </div>

      {/* Floating images */}
      <div className="absolute top-10 right-10 opacity-20" data-fade>
        <Image
          src="/images/11.webp"
          alt="Background decoration"
          width={150}
          height={150}
          className="rounded-2xl rotate-12 blur-sm"
        />
      </div>
      <div className="absolute bottom-10 left-10 opacity-20" data-fade>
        <Image
          src="/images/12.webp"
          alt="Background decoration"
          width={120}
          height={120}
          className="rounded-2xl -rotate-12 blur-sm"
        />
      </div>

      <div ref={containerRef} className="text-center px-6 relative z-10">
        <div className="mb-8" data-fade>
          <div className="inline-block p-2 bg-white/10 rounded-full backdrop-blur-sm mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center"></div>
          </div>
        </div>
        <h1
          data-fade
          className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent"
        >
          Welcome
        </h1>
        <p
          data-fade
          className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto leading-relaxed"
        >
          Experience the fantastic world of technology
        </p>
        <div
          data-fade
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button className="bg-white text-blue-900 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-2xl">
            Explore More
          </button>
          <div className="flex items-center space-x-2 text-sm opacity-75"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
