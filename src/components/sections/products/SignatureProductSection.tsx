"use client";

import React, { useRef, useState } from "react";
import ProductCard from "@/components/common/ProductCard";
import ArrowSide from "@/assets/svg/arrow_down.svg";
import { products } from "@/constance/products";

function SignatureProductSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    if (!scrollContainerRef.current) return;

    const scrollLeft = scrollContainerRef.current.scrollLeft;
    const cardWidth = cardRefs.current[0]?.offsetWidth || 1;
    const index = Math.round(scrollLeft / cardWidth);
    setActiveIndex(index);
  };

  const scrollToCard = (index: number) => {
    if (!scrollContainerRef.current || !cardRefs.current[index]) return;

    const container = scrollContainerRef.current;
    const card = cardRefs.current[index];

    container.scrollTo({
      left: card.offsetLeft,
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-secondary px-5 md:px-10 py-16 md:py-24">
      <div>
        <div className="mb-2">
          <h2 className="text-sm md:text-base font-medium">
            Our Signature Product Lines
          </h2>
          <hr className="border-primary/30 mt-4 md:hidden" />
        </div>
        <div className="flex gap-2 mt-10 md:hidden">
          <button
            onClick={() => scrollToCard(Math.max(activeIndex - 1, 0))}
            className="w-10 h-10 md:w-14 md:h-14 rounded-full border border-primary flex items-center justify-center  transition"
          >
            <ArrowSide className="rotate-90" />
          </button>

          <button
            onClick={() =>
              scrollToCard(Math.min(activeIndex + 1, products.length - 1))
            }
            className="w-10 h-10 md:w-14 md:h-14 rounded-full border border-primary flex items-center justify-center  transition"
          >
            <ArrowSide className="-rotate-90" />
          </button>
        </div>

        <div
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="
            flex md:grid
            md:grid-cols-2
            lg:grid-cols-3
            xl:grid-cols-4
            overflow-x-auto md:overflow-visible
            snap-x snap-mandatory
            no-scrollbar
        "
        >
          {products.map((item, i) => {
            const COLS = 4;

            const isLastCol = (i + 1) % COLS === 0;
            const hasBelow = i + COLS < products.length;

            return (
              <div
                key={i}
                ref={(el) => {
                  cardRefs.current[i] = el;
                }}
                className="relative snap-start"
              >
                <hr className="absolute top-0 left-1 w-[98%] border-t border-primary md:block hidden" />
                {!isLastCol && (
                  <div className="absolute right-0 top-2 h-[96%] w-px bg-primary md:block hidden" />
                )}
                {!hasBelow && (
                  <hr className="absolute bottom-0 left-1 w-[98%] border-t border-primary md:block hidden" />
                )}

                <div className="pb-5 pt-10 px-1 flex justify-center items-center">
                  <ProductCard
                    image={item.image}
                    title={item.title}
                    textColor={"text-primary"}
                    bgColor={"bg-muted-background"}
                  />
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex gap-3 mt-6 justify-center md:hidden">
          {products.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollToCard(i)}
              className={`h-[2px] w-12 transition-colors duration-300 ${
                i === activeIndex ? "bg-primary" : "bg-primary/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default SignatureProductSection;
