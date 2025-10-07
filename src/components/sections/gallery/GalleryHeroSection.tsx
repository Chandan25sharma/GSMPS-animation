"use client";

import { hasFadeAnim } from "@/lib/animation/hasFadeAnim";
import hasPinContent from "@/lib/animation/hasPinContent";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const GalleryHeroSection = () => {
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
      className="min-h-[120vh] flex items-center justify-center bg-gradient-to-br from-amber-900 to-red-900 text-white relative overflow-hidden py-20"
    >
      {/* Background flourishes */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-1/4 w-44 h-44 bg-amber-300 rounded-full blur-2xl"></div>
        <div className="absolute bottom-24 right-1/4 w-36 h-36 bg-red-300 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 right-16 w-28 h-28 bg-orange-300 rounded-full blur-lg"></div>
      </div>

      {/* Floating images */}
      <div className="absolute top-16 right-16 opacity-15" data-fade>
        <Image
          src="/images/15.webp"
          alt="Gallery decoration"
          width={120}
          height={120}
          className="rounded-xl rotate-12 blur-sm"
        />
      </div>
      <div className="absolute bottom-16 left-16 opacity-15" data-fade>
        <Image
          src="/images/16.jpg"
          alt="Gallery decoration"
          width={100}
          height={100}
          className="rounded-xl -rotate-12 blur-sm"
        />
      </div>

      <div ref={containerRef} className="text-center px-6 relative z-10">
        <div data-fade className="mb-8">
          <Link
            href="/"
            className="inline-block bg-white/10 px-6 py-2 rounded-full backdrop-blur-sm hover:bg-white/20 transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
        <h1 data-fade className="text-6xl md:text-8xl font-bold mb-6">
          Gallery
        </h1>
        <p data-fade className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
          Explore our visual light world arts and natures
        </p>
        <div data-fade className="text-lg opacity-80">
          <p>Scroll down to experience interactive</p>
        </div>
      </div>
    </section>
  );
};

export default GalleryHeroSection;
