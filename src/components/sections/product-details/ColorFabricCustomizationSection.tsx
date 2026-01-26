"use client";

import ColorSwatches from "@/components/common/ColorSwatches";
import { availableColors, benefits } from "@/constance/products";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function ColorFabricCustomizationSection() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Main heading
      gsap.from(".color-heading", {
        opacity: 0,
        y: 20,
        duration: 0.7,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
      });

      // Intro text
      gsap.from(".color-intro", {
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.12,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 78%",
          once: true,
        },
      });

      // Benefits list
      gsap.from(".color-benefit", {
        opacity: 0,
        y: 15,
        duration: 0.5,
        ease: "power2.out",
        stagger: 0.08,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
      });

      // Color swatches panel
      gsap.from(".color-swatches", {
        opacity: 0,
        y: 30,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 72%",
          once: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-secondary px-5 md:px-10 py-20">
      <div>
        <div className="mb-10">
          <h3 className="color-heading md:text-body-lg text-body-sm text-primary mb-2">
            Color & Fabric Customization
          </h3>
          <hr className="border-muted-foreground/40" />
        </div>

        <h2 className="color-intro text-xl md:text-2xl font-serif mb-4">
          We Dye for You!
        </h2>

        <p className="color-intro md:text-body-md-bold text-body-xs-bold mb-6">
          Can’t find the exact shade you need?
          <br />
          No problem!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* LEFT CONTENT */}
          <div className="pr-0 md:pr-10 md:border-r border-muted-foreground/40">
            <p className="color-intro md:text-body-md-bold text-body-xs-bold mb-4">
              We offer custom color matching services
            </p>

            <ul className="space-y-3 md:text-body-md text-body-xs text-primary/80">
              {benefits.map((item) => (
                <li key={item} className="color-benefit flex gap-2">
                  <span className="text-primary">✔</span>
                  {item}
                </li>
              ))}
            </ul>

            <p className="color-intro text-body-xs mt-6">
              Minimum Order: 100 pieces
            </p>
          </div>

          {/* RIGHT: COLOR SWATCHES */}
          <div className="color-swatches">
            <ColorSwatches
              title="Available Colors (Standard Stock)"
              colors={availableColors}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ColorFabricCustomizationSection;
