"use client";

import { useState } from "react";
import Image from "next/image";
import { ProductAboutConfig } from "@/types/products";

interface ProductAboutProps extends ProductAboutConfig {}

function ProductAbout({ images, title, description }: ProductAboutProps) {
  const [activeImage, setActiveImage] = useState(0);

  return (
    <section className="px-5 md:px-10 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div className="relative w-full">
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
        <div>
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
                  className={`relative w-20 h-28 border transition
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
