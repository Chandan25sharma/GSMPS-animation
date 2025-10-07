"use client";

import { hasFadeAnim } from "@/lib/animation/hasFadeAnim";
import hasPinContent from "@/lib/animation/hasPinContent";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

const ContactSection = () => {
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
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-800 to-gray-900 text-white relative overflow-hidden"
    >
      {/* Background flourishes */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-24 left-1/4 w-40 h-40 bg-slate-300 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-1/4 w-36 h-36 bg-gray-300 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 right-20 w-28 h-28 bg-white rounded-full blur-lg"></div>
      </div>

      <div ref={containerRef} className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 data-fade className="text-5xl md:text-6xl font-bold mb-6">
            Contact Us
          </h2>
          <p data-fade className="text-xl max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let&apos;s start a conversation
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          <div data-fade>
            <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <span className="text-2xl">📧</span>
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-gray-300">hello@example.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-2xl">📱</span>
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-gray-300">+1 (966) 123-456789</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-2xl">📍</span>
                <div>
                  <p className="font-medium">Address</p>
                  <p className="text-gray-300">test city saudi arabia</p>
                </div>
              </div>
            </div>
          </div>
          <div data-fade>
            <form className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-white/40 backdrop-blur-sm"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-white/40 backdrop-blur-sm"
                />
              </div>
              <div>
                <textarea
                  rows={4}
                  placeholder="Your Message"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-white/40 backdrop-blur-sm resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-white text-gray-900 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
