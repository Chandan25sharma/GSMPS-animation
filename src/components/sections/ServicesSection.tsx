"use client";

import { hasFadeAnim } from "@/lib/animation/hasFadeAnim";
import hasPinContent from "@/lib/animation/hasPinContent";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

const ServicesSection = () => {
  const pinElement = useRef<HTMLDivElement>(null!);
  const containerRef = useRef<HTMLDivElement>(null!);

  const services = [
    {
      title: "Web Development",
      description: "Modern responsive websites",
      image: "/images/13.webp", // relative to public folder
    },
    {
      title: "UI/UX Design",
      description: "User-centered design solutions",
      image: "/images/logo.jpg",
    },
    {
      title: "Animation",
      description: "Smooth GSAP animations",
      image: "/images/13.webp",
    },
    {
      title: "Mobile Apps",
      description: "Cross-platform applications",
      image: "/images/logo.jpg",
    },
    {
      title: "E-commerce",
      description: "Online store solutions",
      image: "/images/13.webp",
    },
    {
      title: "SEO Optimization",
      description: "Search engine optimization",
      image: "/images/logo.jpg",
    },
  ];

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
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-800 to-pink-800 text-white relative overflow-hidden"
    >
      {/* Background flourishes */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-1/4 w-40 h-40 bg-white rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-1/4 w-32 h-32 bg-pink-300 rounded-full blur-xl"></div>
        <div className="absolute top-1/3 right-10 w-28 h-28 bg-purple-300 rounded-full blur-lg"></div>
      </div>

      <div ref={containerRef} className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 data-fade className="text-5xl md:text-6xl font-bold mb-6">
            Our Services
          </h2>
          <p data-fade className="text-xl max-w-2xl mx-auto">
            We offer comprehensive digital solutions to help your business
            thrive in the modern world
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              data-fade
              className="bg-white/10 p-6 rounded-lg backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
            >
              <div className="mb-4 flex justify-center">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-16 h-16 object-contain rounded-lg"
                />
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-sm opacity-90">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
