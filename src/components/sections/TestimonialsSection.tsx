"use client";

import { hasFadeAnim } from "@/lib/animation/hasFadeAnim";
import hasPinContent from "@/lib/animation/hasPinContent";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

const TestimonialsSection = () => {
  const pinElement = useRef<HTMLDivElement>(null!);
  const containerRef = useRef<HTMLDivElement>(null!);

  const testimonials = [
    {
      name: "Thompson",
      company: "Tech Solutions Inc.",
      text: "Outstanding work! The team delivered exactly what we needed with exceptional quality and attention to detail.",
      rating: 5,
    },
    {
      name: "Sharma",
      company: "Creative Agency",
      text: "Professional, reliable, and creative. They transformed our vision into reality with smooth animations and great UX.",
      rating: 5,
    },
    {
      name: "Emily R.",
      company: "Startup Hub",
      text: "The GSAP animations they implemented were smooth and engaging. Highly recommend their services.",
      rating: 5,
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
      className="min-h-[200vh] flex items-center justify-center bg-gradient-to-br from-rose-800 to-orange-800 text-white relative overflow-hidden"
    >
      {/* Background flourishes */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-1/4 w-44 h-44 bg-orange-300 rounded-full blur-2xl"></div>
        <div className="absolute bottom-16 left-1/4 w-36 h-36 bg-rose-300 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 right-16 w-24 h-24 bg-yellow-300 rounded-full blur-lg"></div>
      </div>

      <div
        ref={containerRef}
        className="max-w-7xl mx-auto px-6 relative z-10 py-24 space-y-24"
      >
        {/* Testimonials Title */}
        <div className="text-center mb-16">
          <h2 data-fade className="text-5xl md:text-6xl font-bold mb-6">
            Testimonials
          </h2>
          <p data-fade className="text-xl max-w-2xl mx-auto">
            What our clients say about working with us
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              data-fade
              className="bg-white/10 p-6 rounded-lg backdrop-blur-sm"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-sm mb-6 leading-relaxed">
                &quot;{testimonial.text}&quot;
              </p>
              <div>
                <h4 className="font-semibold">{testimonial.name}</h4>
                <p className="text-sm opacity-75">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Extra Content Section */}
        <div className="grid md:grid-cols-2 gap-10 items-center mt-24">
          {/* Random Image */}
          <div data-fade>
            <img
              src="/images/13.webp" // make sure file exists in public/images/
              alt="Random showcase"
              className="rounded-2xl shadow-lg object-cover w-full h-80"
            />
          </div>

          {/* Extra Content */}
          <div data-fade className="space-y-6">
            <h3 className="text-3xl font-bold">Our Creative Journey</h3>
            <p className="text-lg opacity-90 leading-relaxed">
              From startups to global brands, we’ve helped clients turn ideas
              into interactive experiences. Our design and development process
              ensures top-notch quality with a personal touch.
            </p>
            <ul className="list-disc list-inside text-sm opacity-80 space-y-2">
              <li>Custom animations and UI/UX</li>
              <li>Scalable applications for any industry</li>
              <li>Seamless integration with modern tech</li>
            </ul>
          </div>
        </div>
        {/* Extra Content Section */}
        <div className="grid md:grid-cols-2 gap-10 items-center mt-24">
          {/* Random Image */}
          <div data-fade>
            <img
              src="/images/13.webp" // make sure file exists in public/images/
              alt="Random showcase"
              className="rounded-2xl shadow-lg object-cover w-full h-80"
            />
          </div>

          {/* Extra Content */}
          <div data-fade className="space-y-6">
            <h3 className="text-3xl font-bold">Our Creative Journey</h3>
            <p className="text-lg opacity-90 leading-relaxed">
              From startups to global brands, we’ve helped clients turn ideas
              into interactive experiences. Our design and development process
              ensures top-notch quality with a personal touch.
            </p>
            <ul className="list-disc list-inside text-sm opacity-80 space-y-2">
              <li>Custom animations and UI/UX</li>
              <li>Scalable applications for any industry</li>
              <li>Seamless integration with modern tech</li>
            </ul>
          </div>
        </div>

        {/* Call to Action */}
        <div data-fade className="text-center mt-16">
          <p className="text-lg mb-6">Ready to start your project with us?</p>
          <button className="bg-white text-rose-800 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
