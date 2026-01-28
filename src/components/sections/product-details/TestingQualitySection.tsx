"use client";

import { useEffect, useRef } from "react";
import { testAndQuality } from "@/constance/products";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function TestingQualitySection() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Text block
      gsap.from(".tq-text", {
        opacity: 0,
        y: 30,
        duration: 0.9,
        immediateRender: false,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
      });

      // Bullet points
      gsap.from(".tq-item", {
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: "power2.out",
        immediateRender: false,
        stagger: 0.15,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
      });

      // Image
      gsap.from(".tq-image", {
        opacity: 0,
        y: 40,
        immediateRender: false,
        duration: 1.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          once: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="md:pl-10 py-10">
      <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="px-5 tq-text">
          <h3 className="md:text-body-md-bold text-body-xs-bold text-primary mb-6">
            Testing & Quality Assurance
          </h3>

          <p className="md:text-body-md text-body-xs text-primary/80 mb-8">
            Every Pennywort coverall undergoes rigorous testing:
          </p>

          <ul className="space-y-4 mb-8">
            {testAndQuality.map((item) => (
              <li key={item} className="tq-item flex items-start gap-3">
                <span className="mt-1 text-primary">✔</span>
                <span className="md:text-body-md text-body-xs text-primary/80">
                  {item}
                </span>
              </li>
            ))}
          </ul>

          <p className="md:text-body-md text-body-xs text-primary/80">
            Test Reports: Available upon request for compliance documentation
          </p>
        </div>

        <div className="tq-image relative w-full h-[420px] md:h-[520px]">
          <Image
            src="/assets/images/design/T&Q.png"
            alt="Quality Testing"
            fill
            // loading="lazy"
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}

export default TestingQualitySection;
