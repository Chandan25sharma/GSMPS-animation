"use client";

import { hasFadeAnim } from "@/lib/animation/hasFadeAnim";
import hasPinContent from "@/lib/animation/hasPinContent";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { useRef } from "react";

const PortfolioSection = () => {
  const pinElement = useRef<HTMLDivElement>(null!);
  const containerRef = useRef<HTMLDivElement>(null!);

  const projects = [
    {
      title: "E-commerce Platform",
      category: "Web Development",
      image: "/images/14.webp",
    },
    {
      title: "Mobile Banking App",
      category: "Mobile Development",
      image: "/images/15.webp",
    },
    {
      title: "Brand Identity",
      category: "Design",
      image: "/images/16.jpg",
    },
    {
      title: "Portfolio Website",
      category: "Web Development",
      image: "/images/11.webp",
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
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 to-cyan-800 text-white relative overflow-hidden"
    >
      {/* Background flourishes */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-1/4 w-36 h-36 bg-cyan-300 rounded-full blur-2xl"></div>
        <div className="absolute bottom-32 left-1/4 w-44 h-44 bg-indigo-300 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 right-10 w-24 h-24 bg-white rounded-full blur-lg"></div>
      </div>

      <div ref={containerRef} className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 data-fade className="text-5xl md:text-6xl font-bold mb-6">
            Portfolio
          </h2>
          <p data-fade className="text-xl max-w-2xl mx-auto">
            Showcase of our recent work and successful projects
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} data-fade className="group cursor-pointer">
              <div className="h-64 rounded-2xl mb-4 relative overflow-hidden shadow-2xl">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent group-hover:from-black/80 transition-all duration-300 flex items-center justify-center">
                  <span className="text-2xl font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white">
                    View Project
                  </span>
                </div>
                {/* Project number badge */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-sm font-bold text-white">
                  {index + 1}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-sm opacity-75">{project.category}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
