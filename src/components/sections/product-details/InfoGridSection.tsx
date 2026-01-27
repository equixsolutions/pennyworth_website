"use client";

import { InfoGridSectionProps } from "@/types/products";
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function InfoGridSection({
  heading,
  columns,
  image,
  actionButton,
}: InfoGridSectionProps) {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Heading
      gsap.from(".ig-heading", {
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

      // Columns
      gsap.from(".ig-column", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
      });

      // Image
      gsap.from(".ig-image", {
        opacity: 0,
        y: 40,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 72%",
          once: true,
        },
      });

      // Action button
      gsap.from(".ig-action", {
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: "power2.out",
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
    <section ref={sectionRef} className="bg-secondary px-5 md:px-10">
      <div>
        <div className="mb-6">
          <h3 className="ig-heading md:text-body-lg text-body-sm text-primary mb-2">
            {heading}
          </h3>
        </div>

        <div
          className={`
            border border-muted-foreground/40
            grid gap-0
            ${
              image || actionButton
                ? "grid-cols-1 md:grid-cols-3"
                : "grid-cols-1 md:grid-cols-2"
            }
          `}
        >
          {columns.map((col, index) => (
            <div
              key={col.title}
              className={`
                ig-column
                p-6 md:p-8
                ${
                  index !== columns.length - 1
                    ? "md:border-r border-muted-foreground/40"
                    : ""
                }
              `}
            >
              <h4 className="md:text-body-md-bold text-body-xs-bold mb-4">
                {col.title}
              </h4>

              <ul className="space-y-2 md:text-body-md text-body-xs text-primary/80 list-disc list-inside">
                {col.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}

          {image && (
            <div className="ig-image flex justify-end w-full h-[350px]">
              <img src={image.src} alt={image.alt} className="object-contain" />
            </div>
          )}

          {actionButton && (
            <div className="ig-action flex items-end justify-end p-6 md:p-8">
              <button
                onClick={actionButton.onClick}
                className="
                  border border-primary text-primary
                  px-4 py-2 text-sm
                  hover:bg-primary hover:text-white transition
                "
              >
                {actionButton.label}
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default InfoGridSection;
