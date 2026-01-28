"use client";

import { FitStyleSectionProps } from "@/types/products";
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function FitStyleSection({
  title = "Fit Styles",
  fitStyles,
  images,
}: FitStyleSectionProps) {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Title + list
      gsap.from(".fs-text", {
        opacity: 0,
        immediateRender: false,
        y: 20,
        duration: 0.7,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
      });

      // List items
      gsap.from(".fs-item", {
        opacity: 0,
        immediateRender: false,
        y: 10,
        duration: 0.4,
        ease: "power2.out",
        stagger: 0.08,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 78%",
          once: true,
        },
      });

      // Images
      gsap.from(".fs-image", {
        opacity: 0,
        y: 30,
        duration: 0.9,
        ease: "power3.out",
        immediateRender: false,
        stagger: 0.15,
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
    <section ref={sectionRef} className="px-5 md:px-10 py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
        {/* TEXT */}
        <div className="fs-text">
          <h4 className="md:text-body-md-bold text-body-xs-bold">{title}:</h4>

          <ul className="space-y-2 md:text-body-md text-body-xs text-primary/80 list-disc list-inside">
            {fitStyles.map((item, i) => (
              <li key={i} className="fs-item">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* IMAGES */}
        <div className="md:col-span-2 h-[300px] grid grid-cols-1 sm:grid-cols-3 gap-2">
          {images.map((image, i) => (
            <div
              key={i}
              className={`fs-image relative bg-muted
                ${i === 0 ? "sm:col-span-1" : "sm:col-span-2"}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FitStyleSection;
