"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function ProductSpecifications() {
  const sectionRef = useRef<HTMLElement | null>(null);

  const sizeRange = {
    title: "Size Range",
    value: "XS to 5XL",
    note: "(custom sizing available for bulk orders)",
  };

  const colorOptions = {
    title: "Color Options",
    standardLabel: "Standard",
    colors: [
      { name: "Navy blue", color: "#0A1A4F" },
      { name: "Royal blue", color: "#4169E1" },
      { name: "Orange", color: "#FFA500" },
      { name: "Red", color: "#FF0000" },
      { name: "Grey", color: "#8E8E8E" },
    ],
    customNote: "Custom: Any Pantone color match (MOQ: 2500 pieces)",
  };

  const designFeatures = {
    title: "Design Features",
    items: [
      "Zip-front closure with storm flap",
      "Elastic waist or button adjustment",
      "Two chest pockets with flaps and closures",
      "Two side pockets with reinforced openings",
      "Back pocket with secure closure",
      "Hammer loop and tool holder options",
      "Knee pad insert pockets (available on request)",
    ],
  };

  const customizationOptions = {
    title: "Customization Options",
    items: [
      "Company logo embroidery (chest, back, sleeve)",
      "Reflective strips (2-inch, 3-inch, segmented)",
      "Employee name tags",
      "Department color coding",
      "Custom patch placements",
      "Specialized pocket configurations",
    ],
  };

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(".ps-heading", {
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

      gsap.from(".ps-top", {
        opacity: 0,
        y: 30,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
      });

      gsap.from(".ps-divider", {
        opacity: 0,
        duration: 0.6,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 65%",
          once: true,
        },
      });

      gsap.from(".ps-bottom", {
        opacity: 0,
        y: 30,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.25,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
          once: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="px-5 md:px-10 py-10">
      <div>
        <div className="mb-10">
          <h3 className="ps-heading md:text-body-lg text-body-sm text-primary mb-2">
            Product Specifications
          </h3>
          <hr className="border-muted-foreground/40" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <div className="ps-top">
            <h4 className="md:text-body-md-bold text-body-xs-bold text-primary mb-2">
              {sizeRange.title}
            </h4>
            <p className="md:text-body-md text-body-xs text-primary/80">
              {sizeRange.value} <br />
              <span className="text-xs">{sizeRange.note}</span>
            </p>
          </div>

          <div className="ps-top md:border-l md:border-muted-foreground/40 md:pl-12">
            <h4 className="md:text-body-md-bold text-body-xs-bold text-primary mb-4">
              {colorOptions.title}
            </h4>

            <div className="flex items-center md:gap-10 mb-4">
              <span className="md:text-body-md text-body-xs text-primary/80 w-16">
                {colorOptions.standardLabel}
              </span>

              <div className="flex gap-4 md:gap-10">
                {colorOptions.colors.map((item) => (
                  <div key={item.name} className="text-center">
                    <div
                      className="w-10 h-10 rounded-full mx-auto mb-1"
                      style={{ backgroundColor: item.color }}
                    />
                    <p className="md:text-body-md text-body-xs text-primary/80">
                      {item.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <p className="md:text-body-md text-body-xs text-primary/80">
              {colorOptions.customNote}
            </p>
          </div>
        </div>

        <hr className="ps-divider border-muted-foreground/40 mb-12" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="ps-bottom">
            <h4 className="md:text-body-md-bold text-body-xs-bold text-primary/80 mb-4">
              {designFeatures.title}
            </h4>
            <ul className="space-y-2 md:text-body-md text-body-xs text-primary/80 list-disc list-inside">
              {designFeatures.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="ps-bottom">
            <h4 className="md:text-body-md-bold text-body-xs-bold mb-4">
              {customizationOptions.title}
            </h4>
            <ul className="space-y-2 md:text-body-md text-body-xs text-primary/80 list-disc list-inside">
              {customizationOptions.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductSpecifications;
