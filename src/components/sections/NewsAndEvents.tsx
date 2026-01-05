"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import ArrowSide from "@/assets/svg/arrow_down.svg";
import { carouselItems } from "@/constance/ui";

const IMAGE_WIDTH_MOBILE = 230;
const IMAGE_WIDTH_DESKTOP = 270;

const GAP_INACTIVE_DESKTOP = 60;
const GAP_ACTIVE_DESKTOP = -1;

const GAP_INACTIVE_MOBILE = 30;
const GAP_ACTIVE_MOBILE = 85;

const AUTO_SLIDE_INTERVAL = 3000;
const VISIBLE_RANGE = 7;



export default function NewsAndEvents() {
  const [position, setPosition] = useState(0);
  const total = carouselItems.length;
  const [isDesktop, setIsDesktop] = useState(false);
  const [activeTab, setActiveTab] = useState("news");

  const IMAGE_WIDTH = isDesktop ? IMAGE_WIDTH_DESKTOP : IMAGE_WIDTH_MOBILE;
  const GAP_INACTIVE = isDesktop ? GAP_INACTIVE_DESKTOP : GAP_INACTIVE_MOBILE;
  const GAP_ACTIVE = isDesktop ? GAP_ACTIVE_DESKTOP : GAP_ACTIVE_MOBILE;
  const ITEM_WIDTH = IMAGE_WIDTH + GAP_INACTIVE;
  const ACTIVE_SCALE = isDesktop ? 1.4 : 1.5;

  useEffect(() => {
    const media = window.matchMedia("(min-width: 768px)");
    setIsDesktop(media.matches);
    const listener = () => setIsDesktop(media.matches);
    media.addEventListener("change", listener);

    return () => media.removeEventListener("change", listener);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prev) => prev - 1);
    }, AUTO_SLIDE_INTERVAL);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full overflow-hidden md:mt-10 mt-16">
      <div className="pt-4 px-5 md:px-10">
        <h2 className="text-m-md mb-2">Find our more Engagements</h2>
        <hr className="border-t border-main" />
      </div>
      <div className="flex justify-center gap-8 mt-8 mb-20 md:mt-12 md:mb-28">
        <button
          onClick={() => setActiveTab("news")}
          className={`text-base font-medium transition-colors ${
            activeTab === "news"
              ? "text-foreground"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          News
        </button>
        <button
          onClick={() => setActiveTab("events")}
          className={`text-base font-medium transition-colors ${
            activeTab === "events"
              ? "text-foreground"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          Events
        </button>
      </div>
      <div className="relative w-full flex justify-center">
        <div className="relative h-[460px] w-full">
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
                  x:
                    -(offset * ITEM_WIDTH) +
                    (Math.abs(offset) === 1
                      ? ((offset > 0 ? 1 : -1) * (GAP_ACTIVE - GAP_INACTIVE)) /
                        2
                      : 0),
                  opacity: Math.abs(offset) > 2 ? 0 : 1,
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
                <div className="flex justify-center">
                  <motion.div
                    animate={{ scale: isActive ? ACTIVE_SCALE : 1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  >
                    <div className="relative w-[180px] h-[230px] md:w-[290px] md:h-[320px] overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </motion.div>
                </div>

                <AnimatePresence>
                  {isActive && (
                    <>
                      <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 16 }}
                        transition={{ duration: 0.4 }}
                        className=" absolute top-[300px] md:top-[400px] left-0
                                    w-full max-w-md
                                    text-center
                                    break-words
                                    whitespace-normal"
                      >
                        <h3 className="text-lg font-medium text-gray-900 mb-1">
                          {item.title}
                        </h3>
                        <p className="text-sm text-gray-500 leading-relaxed">
                          {item.description}
                        </p>
                      </motion.div>
                    </>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
          <div className="absolute flex bottom-[175px] md:bottom-[75px] md:gap-[440px] gap-[300px] justify-center  w-full">
            <button
              onClick={() => setPosition((p) => p - 1)}
              className="w-10 h-10  rounded-full border border-muted-foreground  flex items-center justify-center hover:bg-gray-100 transition"
            >
              <ArrowSide className="rotate-90" />
            </button>
            <button
              onClick={() => setPosition((p) => p + 1)}
              className="w-10 h-10  rounded-full border border-muted-foreground  flex items-center justify-center hover:bg-gray-100 transition"
            >
              <ArrowSide className="-rotate-90" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
