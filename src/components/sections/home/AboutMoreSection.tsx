import { motion, useMotionValue } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import ArrowSide from "@/assets/svg/arrow_down.svg";

import { client } from "@/sanity/client";
import { homeVideosQuery } from "@/sanity/queries";
import { mapSanityVideosToCarouselItems } from "@/lib/homeAdapter";

function AboutMoreSection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const [isDragging, setIsDragging] = useState(false);

  const [slides, setSlides] = useState<
    { id: string; title: string; url: string; thumbnail: string }[]
  >([]);

  useEffect(() => {
    client.fetch(homeVideosQuery).then((data) => {
      const items = mapSanityVideosToCarouselItems(data?.videos ?? []);
      setSlides(items);
      x.set(0);
    });
  }, []);

  useEffect(() => {
    let rafId: number;
    const speed = 0.6;

    const animate = () => {
      if (!isDragging) {
        x.set(x.get() - speed);

        const track = trackRef.current;
        if (track) {
          const halfWidth = track.scrollWidth / 2;
          if (Math.abs(x.get()) >= halfWidth) {
            x.set(0);
          }
        }
      }

      rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId);
  }, [isDragging, x]);

  const nudgeLeft = () => x.set(x.get() + 200);
  const nudgeRight = () => x.set(x.get() - 200);

  if (!slides.length) return null; // or show skeleton

  return (
    <section className="relative md:mx-10 ml-5 md:mt-12 mt-24 mb-10">
      <div className="mb-8 md:mb-12 mr-5">
        <h2 className="md:text-body-lg text-body-sm text-primary mb-2">
          Find Out More About Us
        </h2>
        <hr className="border-t border-main border-muted-foreground/50" />
      </div>

      <div className="md:hidden flex font-normal mr-5 text-primary text-base md:text-lg tracking-[0] leading-[normal] mb-8 md:mb-[149px]">
        At Pennywort, sustainability isn't an afterthought—it's woven into every
        thread. We're committed to:
      </div>

      <div className="overflow-hidden cursor-grab active:cursor-grabbing">
        <motion.div
          ref={trackRef}
          className="flex gap-4 will-change-transform"
          style={{ x }}
          drag="x"
          dragConstraints={{ left: -Infinity, right: Infinity }}
          dragElastic={0.05}
          onDragStart={() => setIsDragging(true)}
          onDragEnd={() => setIsDragging(false)}
        >
          {[...slides, ...slides].map((item, i) => (
            <div
              key={`${item.id}-${i}`}
              className="flex-shrink-0 w-[90vw] sm:w-[45vw] lg:w-[33vw]"
            >
              <div className="relative">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-full h-[304px] object-cover"
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="flex md:justify-center gap-1 mt-8">
        <button
          type="button"
          onClick={nudgeLeft}
          className="w-14 h-14 rounded-full border border-primary flex items-center justify-center hover:border-muted-foreground hover:text-muted-foreground transition"
        >
          <ArrowSide className="rotate-90" />
        </button>

        <button
          type="button"
          onClick={nudgeRight}
          className="w-14 h-14 rounded-full border border-primary flex items-center justify-center hover:border-muted-foreground hover:text-muted-foreground transition"
        >
          <ArrowSide className="-rotate-90" />
        </button>
      </div>
    </section>
  );
}

export default AboutMoreSection;
