"use client";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useRef } from "react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const HorizontalScrollSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null!);
  const containerRef = useRef<HTMLDivElement>(null!);

  const galleryImages = [
    {
      id: 1,
      title: "Creative Workspace",
      image: "/images/11.webp",
      category: "Design",
    },
    {
      id: 2,
      title: "Modern Architecture",
      image: "/images/12.webp",
      category: "Architecture",
    },
    {
      id: 3,
      title: "Digital Art",
      image: "/images/13.webp",
      category: "Art",
    },
    {
      id: 4,
      title: "Urban Photography",
      image: "/images/14.webp",
      category: "Photography",
    },
    {
      id: 5,
      title: "Brand Identity",
      image: "/images/15.webp",
      category: "Branding",
    },
    {
      id: 6,
      title: "Web Development",
      image: "/images/16.jpg",
      category: "Development",
    },
    {
      id: 7,
      title: "UI/UX Design",
      image: "/images/11.webp",
      category: "Design",
    },
    {
      id: 8,
      title: "Mobile App",
      image: "/images/12.webp",
      category: "Mobile",
    },
    {
      id: 9,
      title: "E-commerce",
      image: "/images/13.webp",
      category: "Commerce",
    },
    {
      id: 10,
      title: "Portfolio Site",
      image: "/images/14.webp",
      category: "Portfolio",
    },
  ];

  useGSAP(
    () => {
      const container = containerRef.current;
      const section = sectionRef.current;

      if (container && section) {
        const totalWidth = container.scrollWidth;
        const viewportWidth = window.innerWidth;
        const scrollDistance = totalWidth - viewportWidth;

        // Create the main horizontal scroll animation with proper cleanup
        const horizontalTween = gsap.to(container, {
          x: -scrollDistance,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            pin: true,
            scrub: 0.3, // Even smoother scrub
            start: "top top",
            end: () => `+=${scrollDistance}`, // Back to normal end for faster transition
            pinSpacing: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            refreshPriority: -1,
            onUpdate: (self) => {
              // Pre-load next section when we're 80% through
              if (self.progress > 0.8) {
                const nextSection = document.querySelector(
                  ".gallery-next-section"
                );
                if (nextSection) {
                  gsap.set(nextSection, {
                    opacity: 1,
                    y: 0,
                    visibility: "visible",
                  });
                }
              }
              // Ensure smooth transition at the end
              if (self.progress > 0.95) {
                gsap.set(section, {
                  zIndex: 1,
                });
              }
            },
          },
        });

        // Simplified and optimized individual image animations
        const images = container.querySelectorAll(".gallery-item");

        // Batch process images for better performance
        gsap.set(images, {
          scale: 0.95,
          opacity: 0.9,
        });

        gsap.to(images, {
          scale: 1,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: container,
            start: "left right",
            end: "right left",
            scrub: 0.2,
            containerAnimation: horizontalTween,
            toggleActions: "play reverse play reverse",
          },
        });

        return () => {
          horizontalTween.kill();
        };
      }
    },
    { scope: sectionRef, dependencies: [] }
  );

  return (
    <section
      ref={sectionRef}
      className="h-[120vh] bg-gradient-to-br from-slate-900 to-black overflow-hidden"
    >
      <div className="h-full flex items-center">
        <div
          ref={containerRef}
          className="flex gap-8 px-8"
          style={{ width: "max-content" }}
        >
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              className="gallery-item flex-shrink-0 w-80 h-[500px] rounded-2xl relative overflow-hidden group cursor-pointer shadow-2xl"
            >
              <Image
                src={image.image}
                alt={image.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent group-hover:from-black/80 transition-all duration-300 flex flex-col justify-end p-6">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-sm bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm text-white mb-2 inline-block">
                    {image.category}
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {image.title}
                  </h3>
                  <p className="text-white/80 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Image {index + 1} of {galleryImages.length}
                  </p>
                </div>
              </div>
              <div className="absolute top-4 right-4 text-white/60 text-sm">
                #{String(index + 1).padStart(2, "0")}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 text-sm text-center">
        <p>← Scroll horizontally to explore the gallery →</p>
      </div>

      {/* Transition buffer for smoother section handoff */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-emerald-900/20 to-transparent pointer-events-none"></div>
    </section>
  );
};

export default HorizontalScrollSection;
