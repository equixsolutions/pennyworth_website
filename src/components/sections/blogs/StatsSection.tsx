"use client";

import { blogCategories } from "@/constance/blogs";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function StatsSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Title animation
      gsap.from(".blog-cat-title", {
        opacity: 0,
        y: 20,
        duration: 0.7,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
      });

      // Grid items animation
      gsap.from(".blog-cat-item", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power3.out",
        stagger: {
          each: 0.12,
          from: "start", // row-wise reveal
        },
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="bg-secondary flex items-center justify-center my-10"
    >
      <div className="w-full">
        <div className="mb-4 md:px-10 px-5">
          <h2 className="blog-cat-title md:text-body-lg text-body-sm text-primary mb-2">
            Blog Categories.
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 border-t border-b border-muted-foreground">
          {blogCategories.map((value) => (
            <div
              key={value.id}
              className="
                blog-cat-item
                flex flex-col
                items-start justify-start
                py-6 md:px-10 px-6
                border-r border-b md:border-b-0 border-muted-foreground
                lg:last:border-r-0
                [&:nth-child(2n)]:border-r-1
                lg:[&:nth-child(2n)]:border-r-1
                text-left w-full
              "
            >
              <h3 className="md:text-body-md-bold text-body-sm-bold text-primary mb-2">
                {value.heading}
              </h3>
              <p className="text-muted-foreground md:text-body-md text-body-xs">
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
