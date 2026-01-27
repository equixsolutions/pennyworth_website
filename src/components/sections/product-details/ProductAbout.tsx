"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ProductAboutConfig } from "@/types/products";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ProductAboutProps extends ProductAboutConfig {}

function ProductAbout({ images, title, description }: ProductAboutProps) {
  const [activeImage, setActiveImage] = useState(0);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Image area
      gsap.from(".pa-image", {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
      });

      // Text content
      gsap.from(".pa-text", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power2.out",
        delay: 0.1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 72%",
          once: true,
        },
      });

      // Thumbnails
      gsap.from(".pa-thumb", {
        opacity: 0,
        y: 15,
        duration: 0.4,
        ease: "power2.out",
        stagger: 0.08,
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
    <section ref={sectionRef} className="px-5 md:px-10 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* IMAGE AREA */}
        <div className="pa-image relative w-full">
          {/* Mobile carousel */}
          <div
            className="flex md:hidden overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar"
            onScroll={(e) => {
              const index = Math.round(
                e.currentTarget.scrollLeft / e.currentTarget.clientWidth,
              );
              setActiveImage(index);
            }}
          >
            {images.map((img, i) => (
              <div
                key={img}
                className="relative w-full h-[420px] flex-shrink-0 snap-center"
              >
                <Image
                  src={img}
                  alt="Product image"
                  fill
                  className="object-contain"
                  priority={i === 0}
                />
              </div>
            ))}
          </div>

          {/* Desktop image */}
          <div className="hidden md:block relative -top-24 h-[520px] bg-secondary">
            <Image
              src={images[activeImage]}
              alt="Selected product"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* TEXT + THUMBNAILS */}
        <div className="pa-text">
          <h2 className="md:text-body-lg-bold text-body-sm-bold text-primary mb-6">
            {title}
          </h2>

          <p className="md:text-body-md text-body-sm text-primary/80 leading-relaxed mb-10">
            {description}
          </p>

          <div className="flex gap-4">
            {images.map((img, i) => {
              const isActive = activeImage === i;

              return (
                <button
                  key={img}
                  onClick={() => setActiveImage(i)}
                  className={`pa-thumb relative w-20 h-28 border transition
                    ${
                      isActive
                        ? "border-primary opacity-100"
                        : "border-transparent opacity-40 hover:opacity-70"
                    }`}
                >
                  <Image
                    src={img}
                    alt="Product thumbnail"
                    fill
                    className="object-contain"
                  />
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductAbout;
