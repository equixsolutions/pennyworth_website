"use client";

import { useRef, useState,useEffect } from "react";
import ProductCard from "../../common/ProductCard";
import ArrowSide from "@/assets/svg/arrow_down.svg";
import { products } from "@/constance/products";
import { client } from "@/sanity/client";
import { signatureProductsQuery } from "@/sanity/queries";
import { mapSanityProductsToCards } from "@/lib/productAdapter";
import Link from "next/link";

function ViewSimilarProductsSection() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

     const [products, setProducts] = useState<any[]>([]);
  
    useEffect(() => {
      client.fetch(signatureProductsQuery).then((data) => {
        setProducts(mapSanityProductsToCards(data));
      });
    }, []);

  const scrollTo = (index: number) => {
    cardRefs.current[index]?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
    setActiveIndex(index);
  };

  const handleScroll = () => {
    const container = containerRef.current;
    if (!container) return;

    const center =
      container.getBoundingClientRect().left + container.clientWidth / 2;

    const distances = cardRefs.current.map((card) =>
      card
        ? Math.abs(
            card.getBoundingClientRect().left + card.clientWidth / 2 - center,
          )
        : Infinity,
    );

    setActiveIndex(distances.indexOf(Math.min(...distances)));
  };

  return (
    <section className="px-5 md:px-10 py-10 relative">
      <div className="mb-2 flex items-center justify-between">
        <h2 className="md:text-body-lg text-body-sm text-primary mb-2 px-18">
          View Similar Products
        </h2>
      </div>
      <div className="relative">
        <button
          onClick={() => scrollTo(Math.max(activeIndex - 1, 0))}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10
            w-10 h-10 md:w-12 md:h-12
            rounded-full border border-muted-foreground
            bg-secondary flex items-center justify-center"
        >
          <ArrowSide className="rotate-90 text-primary" />
        </button>

        <button
          onClick={() =>
            scrollTo(Math.min(activeIndex + 1, products.length - 1))
          }
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10
            w-10 h-10 md:w-12 md:h-12
            rounded-full border border-muted-foreground
            bg-secondary flex items-center justify-center"
        >
          <ArrowSide className="-rotate-90 text-primary" />
        </button>

        <div
          ref={containerRef}
          onScroll={handleScroll}
          className="overflow-x-auto no-scrollbar"
        >
          <div className="flex snap-x snap-mandatory">
          {products.map((data, i) => {
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
                  <Link
                    href={`/product-details/${data.slug}`}
                    className="block pb-5 pt-10 px-1"
                  >
                    <ProductCard product={data} textColor={"text-primary"} />
                  </Link>
                </div>
              </div>
            );
          })}
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-3 mt-6">
        {products.map((_, i) => (
          <span
            key={i}
            className={`h-[2px] w-10 transition-colors ${
              i === activeIndex ? "bg-primary" : "bg-muted-foreground/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
}

export default ViewSimilarProductsSection;
