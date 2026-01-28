"use client";

import { CustomizationOptionsSectionProps } from "@/types/products";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function FeaturesOptionsSection({
  title,
  sections,
}: CustomizationOptionsSectionProps) {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Section heading
      gsap.from(".fo-heading", {
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

      // Columns
      gsap.from(".fo-column", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        immediateRender: false,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
      });

      // List items
      gsap.from(".fo-item", {
        opacity: 0,
        y: 10,
        duration: 0.4,
        immediateRender: false,
        ease: "power2.out",
        stagger: 0.05,
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
    <section ref={sectionRef} className="bg-secondary px-5 md:px-10 py-16">
      <div>
        <div className="mb-8">
          <h3 className="fo-heading md:text-body-lg text-body-sm text-primary mb-2">
            {title}
          </h3>
          <hr className="border-muted-foreground/40" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 border border-muted-foreground/40">
          {sections.map((section, index) => (
            <div
              key={section.title}
              className={`
                fo-column
                p-6 md:p-8
                ${
                  index !== sections.length - 1
                    ? "md:border-r border-muted-foreground/40"
                    : ""
                }
                border-b md:border-b-0 border-muted-foreground/40
              `}
            >
              <h4 className="md:text-body-md-bold text-body-xs-bold text-primary mb-4">
                {section.title}
              </h4>

              <ul className="space-y-2 md:text-body-md text-body-xs text-primary/80 list-disc list-inside">
                {section.items.map((item) => (
                  <li key={item} className="fo-item">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturesOptionsSection;
