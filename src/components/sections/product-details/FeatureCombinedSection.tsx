"use client";

import Image from "next/image";
import FeatureCard from "@/components/common/FeatureCard";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface FeatureSectionProps {
  heading: string;
  topRow: {
    title: string;
    description?: string;
    points?: string[];
  }[];
  bottomHeading: string;
  bottomRow: {
    title: string;
    description?: string;
    points?: string[];
  }[];
  image?: {
    src: string;
    alt: string;
  };
}

function FeatureCombinedSection({
  heading,
  topRow,
  bottomHeading,
  bottomRow,
  image,
}: FeatureSectionProps) {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Main heading
      gsap.from(".fc-heading", {
        opacity: 0,
        y: 20,
        duration: 0.7,
        ease: "power2.out",
        immediateRender: false,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
      });

      // Top row cards
      gsap.from(".fc-top-card", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power3.out",
        immediateRender: false,
        stagger: 0.15,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
      });

      // Bottom heading
      gsap.from(".fc-bottom-heading", {
        opacity: 0,
        y: 15,
        duration: 0.6,
        ease: "power2.out",
        immediateRender: false,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 72%",
          once: true,
        },
      });

      // Bottom row cards + image
      gsap.from(".fc-bottom-item", {
        opacity: 0,
        y: 30,
        duration: 0.9,
        ease: "power3.out",
        immediateRender: false,
        stagger: 0.15,
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
    <section ref={sectionRef} className="bg-primary px-5 md:px-10 py-16">
      <div>
        {/* MAIN HEADING */}
        <div className="mb-10">
          <h2 className="fc-heading text-secondary text-lg md:text-xl font-light mb-3">
            {heading}
          </h2>
          <hr className="border-secondary/20" />
        </div>

        {/* TOP ROW */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {topRow.map((item, i) => (
            <div key={i} className="fc-top-card">
              <FeatureCard {...item} />
            </div>
          ))}
        </div>

        {/* BOTTOM HEADING */}
        <h3 className="fc-bottom-heading text-secondary/70 text-sm font-light mb-6">
          {bottomHeading}
        </h3>

        {/* BOTTOM ROW */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {bottomRow.map((item, i) => (
            <div key={i} className="fc-bottom-item">
              <FeatureCard {...item} />
            </div>
          ))}

          {image && (
            <div className="fc-bottom-item relative min-h-[240px] border border-secondary/20 overflow-hidden">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default FeatureCombinedSection;
