"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ITEM_WIDTH = 300;
const AUTO_SLIDE_INTERVAL = 3000;
const VISIBLE_RANGE = 7; // must be odd

export const carouselItems = [
  {
    id: 1,
    image: "/assets/images/design/value_1.png",
    title: "Pennywort Meeting in Japan",
    description: "Advanced dyeing processes that reduce water usage by 40%",
  },
  {
    id: 2,
    image: "/assets/images/design/value_4.png",
    title: "Global Strategy Meet",
    description: "Leadership discussion on sustainable manufacturing",
  },
  {
    id: 3,
    image: "/assets/images/design/value_2.png",
    title: "Tech Collaboration",
    description: "Digital transformation with global partners",
  },
  {
    id: 4,
    image: "/assets/images/design/value_3.png",
    title: "Business Review",
    description: "Quarterly growth and expansion planning",
  },
  {
    id: 5,
    image: "/assets/images/design/value_3.png",
    title: "Business Review",
    description: "Quarterly growth and expansion planning",
  },
  {
    id: 6,
    image: "/assets/images/design/value_3.png",
    title: "Business Review",
    description: "Quarterly growth and expansion planning",
  },
  {
    id: 7,
    image: "/assets/images/design/value_3.png",
    title: "Business Review",
    description: "Quarterly growth and expansion planning",
  },
  {
    id: 8,
    image: "/assets/images/design/value_3.png",
    title: "Business Review",
    description: "Quarterly growth and expansion planning",
  },
  {
    id: 9,
    image: "/assets/images/design/value_3.png",
    title: "Business Review",
    description: "Quarterly growth and expansion planning",
  },
  {
    id: 10,
    image: "/assets/images/design/value_3.png",
    title: "Business Review",
    description: "Quarterly growth and expansion planning",
  },
];

export default function NewsAndEvents() {
  const [position, setPosition] = useState(0);
  const total = carouselItems.length;

  // 🔁 Auto slide (always forward)
  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prev) => prev + 1);
    }, AUTO_SLIDE_INTERVAL);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full overflow-hidden py-16 bg-white">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 mb-6">
        <div className="flex justify-between items-center border-b pb-3">
          <p className="text-sm text-gray-500">Find our more Engagements</p>

          <div className="flex gap-6 text-sm">
            <span className="text-gray-900 font-medium">News</span>
            <span className="text-gray-400">Events</span>
          </div>
        </div>
      </div>

      {/* Carousel */}
      <div className="relative w-full flex justify-center">
        <div className="relative h-[460px] w-full max-w-6xl">
          {Array.from({ length: VISIBLE_RANGE }).map((_, i) => {
            const center = Math.floor(VISIBLE_RANGE / 2);
            const offset = i - center;

            const virtualIndex = position + offset;
            const itemIndex = ((virtualIndex % total) + total) % total;

            const item = carouselItems[itemIndex];
            const isActive = offset === 0;

            return (
              <motion.div
                key={`${virtualIndex}-${item.id}`}
                className="absolute top-0 left-1/2"
                animate={{
                  x: offset * ITEM_WIDTH,
                  scale: isActive ? 1.25 : 0.95,
                  opacity: Math.abs(offset) > 2 ? 0 : 1,
                  filter: isActive ? "brightness(1)" : "brightness(0.85)",
                }}
                transition={{
                  duration: 0.9,
                  ease: [0.32, 0.72, 0, 1],
                }}
                style={{
                  translateX: "-50%",
                  zIndex: isActive ? 10 : 5 - Math.abs(offset),
                }}
              >
                {/* Image */}
                {/* Image */}
                <div className="relative w-[240px] h-[340px] md:w-[260px] md:h-[360px] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />

                  {/* Navigation buttons (only center image) */}
                </div>{" "}
                <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 flex gap-4 z-20">
                  <button
                    onClick={() => setPosition((p) => p - 1)}
                    className="w-10 h-10 rounded-full border border-gray-300 bg-white flex items-center justify-center hover:bg-gray-100 transition"
                  >
                    ←
                  </button>
                  <button
                    onClick={() => setPosition((p) => p + 1)}
                    className="w-10 h-10 rounded-full border border-gray-300 bg-white flex items-center justify-center hover:bg-gray-100 transition"
                  >
                    →
                  </button>
                </div>
                {/* Caption (only center) */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 16 }}
                      transition={{ duration: 0.4 }}
                      className="absolute -bottom-28 left-0 text-left max-w-md"
                    >
                      <h3 className="text-lg font-medium text-gray-900 mb-1">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-500 leading-relaxed">
                        {item.description}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
