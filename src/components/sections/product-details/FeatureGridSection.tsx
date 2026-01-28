"use client";

import Image from "next/image";
import FeatureCard from "@/components/common/FeatureCard";
import { FeatureSectionProps } from "@/types/products";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function FeatureGridSection({
  heading,
  features,
  benefits,
  image,
}: FeatureSectionProps) {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Heading
      gsap.from(".fg-heading", {
        opacity: 0,
        y: 20,
        duration: 0.7,
        immediateRender: false,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
      });

      // Feature cards
      gsap.from(".fg-card", {
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

      // Image
      gsap.from(".fg-image", {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: "power3.out",
        immediateRender: false,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 72%",
          once: true,
        },
      });

      // Benefits
      gsap.from(".fg-benefit", {
        opacity: 0,
        y: 15,
        duration: 0.6,
        ease: "power2.out",
        immediateRender: false,
        stagger: 0.12,
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
      className={`bg-primary px-5 md:px-10 pt-16 ${
        image?.colSpan == 1 ? "md:pb-16" : "md:pb-36"
      }`}
    >
      <div>
        <div className="mb-10">
          <h2 className="fg-heading text-secondary md:text-body-lg text-body-sm mb-2">
            {heading}
          </h2>
          <hr className="border-secondary/20" />
        </div>

        <div
          className={`
            grid gap-6 
            ${
              image
                ? "grid-cols-1 md:grid-cols-3"
                : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
            }
          `}
        >
          {features.map((item, i) => (
            <div key={i} className="fg-card">
              <FeatureCard {...item} />
            </div>
          ))}

          {image && (
            <div
              className={`fg-image relative w-full md:col-span-${image.colSpan} h-full min-h-[260px] md:h-[100%] md:min-h-[100%]`}
            >
              <div className="md:absolute top-0 w-full h-[364px]">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          )}

          {benefits && (
            <div className="space-y-6">
              {benefits.map((item) => (
                <div key={item.head} className="fg-benefit">
                  <h4 className="text-secondary text-sm font-medium mb-1">
                    {item.head}
                  </h4>
                  <p className="text-secondary/70 text-sm">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default FeatureGridSection;
