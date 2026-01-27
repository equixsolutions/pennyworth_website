"use client";

import React, { useRef, useState, useEffect } from "react";
import ProductCard from "@/components/common/ProductCard";
import ArrowSide from "@/assets/svg/arrow_down.svg";
import Link from "next/link";
import { client } from "@/sanity/client";
import { signatureProductsQuery } from "@/sanity/queries";
import { mapSanityProductsToCards } from "@/lib/productAdapter";
import gsap from "gsap";
import { ProductSkeleton } from "@/components/layout/ProductSkeleton";

function SignatureProductSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    client.fetch(signatureProductsQuery).then((data) => {
      setProducts(mapSanityProductsToCards(data));
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    if (loading || cardRefs.current.length === 0) return;

    gsap.from(cardRefs.current, {
      opacity: 0,
      y: 40,
      duration: 0.8,
      ease: "power3.out",
      stagger: 0.12,
    });
  }, [loading]);

  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    const scrollLeft = scrollContainerRef.current.scrollLeft;
    const cardWidth = cardRefs.current[0]?.offsetWidth || 1;
    setActiveIndex(Math.round(scrollLeft / cardWidth));
  };

  const scrollToCard = (index: number) => {
    if (!scrollContainerRef.current || !cardRefs.current[index]) return;
    scrollContainerRef.current.scrollTo({
      left: cardRefs.current[index]!.offsetLeft,
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-secondary px-5 md:px-10 py-16 md:py-24">
      <div>
        <div className="mb-2">
          <h2 className="md:text-body-lg text-body-sm">
            Our Signature Product Lines
          </h2>
          <hr className="border-primary/30 mt-4 md:hidden" />
        </div>

        {!loading && (
          <div className="flex gap-2 mt-10 md:hidden">
            <button
              onClick={() => scrollToCard(Math.max(activeIndex - 1, 0))}
              className="w-10 h-10 md:w-14 md:h-14 rounded-full border border-primary flex items-center justify-center transition"
            >
              <ArrowSide className="rotate-90" />
            </button>

            <button
              onClick={() =>
                scrollToCard(Math.min(activeIndex + 1, products.length - 1))
              }
              className="w-10 h-10 md:w-14 md:h-14 rounded-full border border-primary flex items-center justify-center transition"
            >
              <ArrowSide className="-rotate-90" />
            </button>
          </div>
        )}

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
          {(loading ? Array.from({ length: 4 }) : products).map((data, i) => {
            const COLS = 4;
            const isLastCol = (i + 1) % COLS === 0;
            const hasBelow = i + COLS < products.length;

            return (
              <div
                key={i}
                ref={(el: any) => (cardRefs.current[i] = el)}
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
                  {loading ? (
                    <ProductSkeleton />
                  ) : (
                    <Link
                      href={`/product-details/${data.slug}`}
                      className="block pb-5 pt-10 px-1"
                    >
                      <ProductCard product={data} textColor={"text-primary"} />
                    </Link>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {!loading && (
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
        )}
      </div>
    </section>
  );
}

export default SignatureProductSection;
