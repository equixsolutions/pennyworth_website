"use client";

import PennyWort from "@/assets/svg/penny_wort.svg";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function CoreValuesSection() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Title
      gsap.from(".core-title", {
        opacity: 0,
        x: -30,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
      });

      // Wave animation for values
      gsap.from(".core-value", {
        opacity: 0,
        y: 40,
        duration: 0.9,
        ease: "power3.out",
        stagger: {
          each: 0.15,
          from: "start", // left → right wave
        },
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          once: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-primary text-secondary py-16 md:py-28 px-5 md:px-10 overflow-hidden"
    >
      <div className="absolute md:left-0 left-8 -translte-y-1/2 pointer-events-none z-0">
        {" "}
        <PennyWort className="w-[320px] h-auto" />{" "}
      </div>

      <div className="mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] md:gap-12 gap-40">
          <div className="flex items-center justify-center">
            <h2 className="core-title md:heading-xs heading-caption text-secondary mb-2">
              Our Core Values
            </h2>
          </div>

          <div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-12">
              <Value
                title="Integrity"
                desc="We do what’s right, even when no one is watching"
              />
              <Value
                title="Excellence"
                desc="Good enough is never good enough"
              />
              <Value
                title="Innovation"
                desc="Continuous improvement in products and processes"
              />
            </div>

            <hr className="border-white/30 my-8 md:block hidden" />

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-12">
              <Value title="Safety" desc="Protection is our primary purpose" />
              <Value title="Partnership" desc="Your success is our success" />
              <Value
                title="Sustainability"
                desc="Responsibility to planet and people"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Value({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="core-value">
      <h3 className="md:text-body-md-bold text-body-sm-bold uppercase mb-2">
        {title}
      </h3>
      <p className="text-sm text-secondary/70 leading-relaxed md:text-body-md text-body-sm max-w-xs">
        {desc}
      </p>
    </div>
  );
}
