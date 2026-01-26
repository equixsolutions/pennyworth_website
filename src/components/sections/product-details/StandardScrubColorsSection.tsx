"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ColorSwatches from "@/components/common/ColorSwatches";
import { scrubColors } from "@/constance/products";

gsap.registerPlugin(ScrollTrigger);

function StandardScrubColorsSection() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Heading animation
      gsap.from(".ssc-heading", {
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
      });

      // Color groups animation
      gsap.from(".ssc-group", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-secondary px-5 md:px-10 py-10">
      <div>
        <h3 className="ssc-heading">Standard Scrub Colors</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-10">
          {scrubColors.map((group) => (
            <div key={group.title} className="ssc-group">
              <ColorSwatches title={group.title} colors={group.colors} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default StandardScrubColorsSection;
