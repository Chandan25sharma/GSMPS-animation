"use client";

import { hasFadeAnim } from "@/lib/animation/hasFadeAnim";
import hasPinContent from "@/lib/animation/hasPinContent";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { useRef } from "react";

const AboutSection = () => {
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
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-800 to-blue-800 text-white"
    >
      <div ref={containerRef} className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 data-fade className="text-5xl md:text-6xl font-bold mb-6">
              About Us
            </h2>
            <p data-fade className="text-lg mb-6 leading-relaxed">
              We create exceptional digital experiences using cutting-edge
              technologies and innovative design approaches. Our team
              specializes in smooth animations and user-centered design.
            </p>
            <div data-fade className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                <h3 className="font-semibold mb-2">Innovation</h3>
                <p className="text-sm">
                  Pushing boundaries with creative solutions
                </p>
              </div>
              <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                <h3 className="font-semibold mb-2">Excellence</h3>
                <p className="text-sm">Delivering quality in every project</p>
              </div>
            </div>
          </div>
          <div data-fade className="relative">
            <div className="relative">
              <Image
                src="/images/13.webp"
                alt="About us - our creative workspace"
                width={500}
                height={400}
                className="rounded-2xl shadow-2xl object-cover w-full h-96"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute top-1/2 -right-8 w-16 h-16 bg-white/20 rounded-full blur-xl"></div>
            <div className="absolute -top-8 left-1/2 w-12 h-12 bg-purple-300/30 rounded-full blur-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
