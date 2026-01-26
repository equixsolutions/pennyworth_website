"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function ChooseByTaskSection() {
  const sectionRef = useRef<HTMLElement | null>(null);

  const tableData = [
    { task: "Light assembly", glove: "Cotton knit or PU-coated" },
    { task: "Heavy lifting", glove: "Leather palm reinforced" },
    { task: "Sharp objects", glove: "Cut-resistant (Level 4–5)" },
    { task: "Welding", glove: "Heat-resistant leather, long cuff" },
    { task: "Chemical handling", glove: "Nitrile or neoprene" },
    { task: "High heat", glove: "Aramid or aluminized" },
    { task: "Precision work", glove: "Thin PU or nitrile coated" },
    { task: "General construction", glove: "Split leather" },
    { task: "Oil/grease work", glove: "Nitrile-coated" },
  ];

  const images = [
    {
      src: "/assets/images/design/choose_by_1.png",
      alt: "Measuring work with gloves",
      span: "col-span-1",
    },
    {
      src: "/assets/images/design/choose_by_3.png",
      alt: "Cutting work gloves",
      span: "col-span-1",
    },
    {
      src: "/assets/images/design/choose_by_3.png",
      alt: "Industrial glove usage",
      span: "col-span-2",
    },
  ];

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Heading
      gsap.from(".choose-heading", {
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

      // Table rows
      gsap.from(".choose-row", {
        opacity: 0,
        y: 15,
        duration: 0.5,
        ease: "power2.out",
        stagger: 0.06,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
      });

      // Images
      gsap.from(".choose-image", {
        opacity: 0,
        y: 30,
        duration: 0.9,
        ease: "power3.out",
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
    <section
      ref={sectionRef}
      className="bg-black px-5 md:px-10 py-10 text-secondary"
    >
      <div>
        <div className="mb-10">
          <h3 className="choose-heading md:text-body-lg text-body-sm text-secondary mb-2">
            Choose by Task
          </h3>
          <hr className="border-secondary/30" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {/* TABLE */}
          <div className="border border-secondary/30 md:col-span-2">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-secondary/30 bg-secondary/10">
                  <th className="text-left md:text-body-md-bold text-body-xs-bold px-6 py-4">
                    Task
                  </th>
                  <th className="text-left md:text-body-md-bold text-body-xs-bold px-6 py-4">
                    Recommended Glove
                  </th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((row, i) => (
                  <tr key={i} className="choose-row bg-secondary/10">
                    <td className="px-6 py-3 md:text-body-md text-body-xs text-secondary/80">
                      {row.task}
                    </td>
                    <td className="px-6 py-3 md:text-body-md text-body-xs text-secondary/80">
                      {row.glove}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* IMAGES */}
          <div className="grid grid-cols-2 gap-4 md:col-span-1">
            {images.map((img, i) => (
              <div
                key={i}
                className={`choose-image relative md:aspect-auto aspect-[4/3] overflow-hidden ${img.span}`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ChooseByTaskSection;
