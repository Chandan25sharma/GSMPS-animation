"use client";

import { hasFadeAnim } from "@/lib/animation/hasFadeAnim";
import hasPinContent from "@/lib/animation/hasPinContent";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

const TeamSection = () => {
  const pinElement = useRef<HTMLDivElement>(null!);
  const containerRef = useRef<HTMLDivElement>(null!);

  const team = [
    { name: "lk", role: "CEO & Founder", image: "👨" },
    { name: "sharma", role: "Lead Designer", image: "👩" },
    { name: "Mike", role: "Developer", image: "👨" },
    { name: "Sarah", role: "Project Manager", image: "👩" },
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
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-800 to-blue-900 text-white relative overflow-hidden"
    >
      {/* Background flourishes */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-16 left-1/3 w-40 h-40 bg-teal-300 rounded-full blur-2xl"></div>
        <div className="absolute bottom-24 right-1/3 w-32 h-32 bg-blue-300 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-16 w-28 h-28 bg-white rounded-full blur-lg"></div>
      </div>

      <div
        className="absolute top-1/3 left-1/4 text-3xl opacity-20 animate-pulse"
        style={{ animationDelay: "2s" }}
      ></div>

      <div ref={containerRef} className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 data-fade className="text-5xl md:text-6xl font-bold mb-6">
            Our Team
          </h2>
          <p data-fade className="text-xl max-w-2xl mx-auto">
            Meet the talented individuals behind our success
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div key={index} data-fade className="text-center group">
              <div className="w-32 h-32 mx-auto mb-4 bg-white/10 rounded-full flex items-center justify-center text-4xl backdrop-blur-sm group-hover:bg-white/20 transition-all duration-300">
                {member.image}
              </div>
              <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
              <p className="text-sm opacity-75">{member.role}</p>
            </div>
          ))}
        </div>
        <div data-fade className="text-center mt-16">
          <p className="text-lg mb-6">
            We&apos;re always looking for talented individuals to join our team
          </p>
          <button className="bg-white text-teal-800 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
            Join Our Team
          </button>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
