"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { values } from "@/constance/home";

gsap.registerPlugin(ScrollTrigger);

function StatsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const itemsRef = useRef<HTMLDivElement[]>([]);

  useLayoutEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      gsap.from(itemsRef.current, {
        y: 40,
        opacity: 0,
        duration: 0.9,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="flex items-center justify-center md:my-24 my-10"
    >
      <div className="w-full">      
        <div className="mb-4 md:px-10 px-5">
          <h2
            ref={titleRef}
            className="md:text-body-lg text-body-sm text-primary px-18"
          >
            Experience. Trust. Global Reach.
          </h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-5 border-t-2 border-muted-foreground/50">
          {values.map((value, index) => (
            <div
              key={value.id}
              ref={(el) => {
                if (el) itemsRef.current[index] = el;
              }}
              className="
                flex flex-col
                items-start justify-start
                py-6 md:px-10 px-6
                border-r-2 border-b-2 border-muted-foreground/50
                lg:last:border-r-0
                [&:nth-child(2n)]:border-r-2
                lg:[&:nth-child(2n)]:border-r-2
                text-left
              "
            >
              <h3 className="heading-xs md:heading-lg font-light text-primary mb-2">
                {value.heading}
              </h3>
              <p className="md:text-body-md text-body-sm text-primary/70">
                {value.subHeading}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default StatsSection;
