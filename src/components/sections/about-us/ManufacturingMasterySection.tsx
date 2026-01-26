"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ManufacturingMasterySection() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const leftColRef = useRef(null);
  const rightColRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headingRef.current, {
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      gsap.from(leftColRef.current, {
        opacity: 0,
        x: -60,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      gsap.from(rightColRef.current, {
        opacity: 0,
        x: 60,
        duration: 1,
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
    <section
      ref={sectionRef}
      className="w-full text-primary my-12 md:px-10 px-5"
    >
      <div>
        <div ref={headingRef} className="mb-4 md:mb-8">
          <h2 className="md:text-body-lg text-body-sm text-primary mb-2">
            Two Decades of Manufacturing Mastery
          </h2>
          <hr className="border-t border-main border-muted-foreground/50" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 text-sm leading-relaxed md:text-body-md text-body-xs">
          <div ref={leftColRef} className="space-y-4">
            <p>
              At Pennywort Clothing, we believe workwear is more than clothing —
              it is protection, identity, and pride.
            </p>

            <p>
              With over two decades of expertise in designing and manufacturing
              world-class uniforms and safety apparel, we are proud to be
              recognized as one of India’s leading workwear manufacturers,
              trusted by industries worldwide. Based in Kerala, India, and
              certified under ISO 9001:2015, our legacy is built on a foundation
              of quality, integrity, and customer-first service.
            </p>
          </div>

          <div ref={rightColRef}>
            <p>
              We serve diverse industries — especially oil & gas, construction,
              and logistics to healthcare, hospitality, and corporates — with
              tailored solutions that combine safety, durability, and comfort.
              Our products are crafted with precision to not only meet but
              exceed international safety and performance standards.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
