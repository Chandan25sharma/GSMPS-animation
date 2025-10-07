"use client";

import { hasFadeAnim } from "@/lib/animation/hasFadeAnim";
import hasPinContent from "@/lib/animation/hasPinContent";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import { useRef } from "react";

const FinalSection = () => {
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
    <section className="bg-gray-50 py-20">
      <div
        ref={pinElement}
        className="relative overflow-hidden max-w-7xl mx-auto px-6 shadow-2xl 
                   bg-gradient-to-br from-violet-900 to-indigo-900 text-white mt-12
                   rounded-t-3xl min-h-[800px]"
      >
        {/* Background flourishes */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-16 right-1/4 w-48 h-48 bg-violet-300 rounded-full blur-2xl"></div>
          <div className="absolute bottom-24 left-1/4 w-40 h-40 bg-indigo-300 rounded-full blur-xl"></div>
          <div className="absolute top-1/2 left-16 w-32 h-32 bg-purple-300 rounded-full blur-lg"></div>
        </div>

        <div
          ref={containerRef}
          className="max-w-4xl mx-auto px-6 text-center relative z-10 py-20"
        >
          <h2 data-fade className="text-5xl md:text-7xl font-bold mb-8">
            Ready to Explore More?
          </h2>
          <p
            data-fade
            className="text-xl mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            This was just the beginning. Discover more amazing content and
            interactive experiences on our gallery page featuring horizontal
            scrolling animations.
          </p>
          <div data-fade className="space-y-6">
            <Link
              href="/gallery"
              className="inline-block bg-white text-violet-900 px-12 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              Visit Gallery Page
            </Link>
            <div className="text-sm opacity-75 mt-4">
              <p>Experience Interactive gallery</p>
            </div>
          </div>
          <div data-fade className="mt-16 pt-8 border-t border-white/20">
            <p className="text-sm opacity-60">© 2025 ssssssawara</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalSection;
