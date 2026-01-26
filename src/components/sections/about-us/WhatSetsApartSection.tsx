"use client";

import FeatureCard from "@/components/common/FeatureCard";
import { features } from "@/constance/aboutUs";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function WhatSetsApartSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(cardsRef.current, {
        opacity: 0,
        y: 40,
        duration: 1, 
        ease: "power3.out",
        stagger: .50, 
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
    <section
      ref={sectionRef}
      className="relative bg-primary py-16 md:py-18 px-5 md:px-10"
    >
      <div className="mx-auto">
        <div className="mb-12">
          <h2 className="md:text-body-lg text-body-sm text-secondary mb-2">
            What Sets Pennywort Apart
          </h2>
          <hr className="border-t border-main border-muted-foreground/50" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, i) => (
            <div
              key={i}
              ref={(el) => {
                if (el) cardsRef.current[i] = el;
              }}
            >
              <FeatureCard {...item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
