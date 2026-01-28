"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Accordion from "@/components/common/Accordion";
import { ProductOverviewProps } from "@/types/products";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function ProductOverview({
  title,
  images = [],
  accordionItems = [],
  imagePosition = "left",
}: ProductOverviewProps) {
  const [activeImage, setActiveImage] = useState(images[0]);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (images.length) setActiveImage(images[0]);
  }, [images]);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(".po-title", {
        opacity: 0,
        y: 20,
        immediateRender: false,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
      });

      gsap.from(".po-image", {
        opacity: 0,
        y: 40,
        immediateRender: false,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
      });

      gsap.from(".po-thumb", {
        y: 15,
        duration: 0.4,
        stagger: 0.08,
        immediateRender: false,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 72%",
          once: true,
        },
      });

      gsap.from(".po-accordion", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        immediateRender: false,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          once: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  if (!images.length) return null;

  const isImageLeft = imagePosition === "left";

  return (
    <section ref={sectionRef} className="px-5 md:px-10 py-10">
      <div className="mx-auto">
        <div className="mb-10">
          <h2 className="po-title md:heading-xs heading-caption text-primary">
            {title}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className={`po-image ${isImageLeft ? "" : "lg:order-2"}`}>
            <div className="relative w-full h-[420px] md:h-[520px] bg-gray-100 mb-6">
              <Image
                src={activeImage?.src}
                alt={activeImage?.alt || "Product image"}
                fill
                className="object-contain"
                priority
              />
            </div>

            <div className="flex gap-4">
              {images.map((img) => {
                const isActive = img.id === activeImage?.id;

                return (
                  <button
                    key={img.id}
                    onClick={() => setActiveImage(img)}
                    className={`po-thumb relative w-20 h-28 border transition ${
                      isActive
                        ? "border-primary opacity-100"
                        : "border-transparent opacity-40 hover:opacity-70"
                    }`}
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-contain"
                    />
                  </button>
                );
              })}
            </div>
          </div>

          <div className={`po-accordion ${isImageLeft ? "" : "lg:order-1"}`}>
            <Accordion items={accordionItems} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductOverview;
