"use client";

import { useEffect, useRef } from "react";
import { sustainabilityFeaturesData } from "@/constance/home";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function FeaturesSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const cardRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (window.innerWidth < 768) return;

    const ctx = gsap.context(() => {
      cardRefs.current.forEach((card, index) => {
        if (!card) return;
        const depth = 50 + index * 25;

        gsap.fromTo(
          card,
          { yPercent: depth },
          {
            yPercent: -depth,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 90%",
              end: "bottom 10%",
              scrub: true,
            },
          },
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative md:mx-10 mx-5 mt-12">
      <div className="pt-4 mb-8">
        <h2 className="md:text-body-lg text-body-sm text-primary mb-2">
          Building a Responsible Future
        </h2>
        <hr className="border-t border-main border-muted-foreground/50" />
      </div>

      <div className="md:text-body-md text-body-sm text-primary text-base leading-relaxed mb-8 md:mb-[149px]">
        At Pennywort, sustainability isn&apos;t an afterthought—it&apos;s <br />
        woven into every thread. We&apos;re committed to:
      </div>

      <div className="relative w-full mb-14 px-4 md:px-8 lg:px-16">
        <div className="lg:block relative w-full md:min-h-[751px] mx-auto">
          <img
            className="md:absolute top-0 left-[calc(50%-350px)] lg:w-[700px] lg:h-[700px] lg:object-cover"
            alt="Ellipse"
            src="/assets/images/design/ellipse.png"
          />
          <div
            ref={(el: any) => el && (cardRefs.current[0] = el)}
            className="absolute top-[4%] left-[46%] -translate-x-[110%]
                       w-[252px] h-[270px] lg:flex flex-col hidden
                       bg-primary px-4 py-16 text-center"
          >
            <div className="md:heading-xs heading-caption font-normal text-secondary text-[27px] tracking-[1.08px] leading-relaxed mb-1">
              Eco-Friendly Fabrics
            </div>
            <div className="md:text-body-sm text-body-xs tracking-[0] leading-relaxed text-secondary">
              Organic cotton, recycled polyester, Lenzing FR, viscose
            </div>
          </div>

          <div
            ref={(el: any) => el && (cardRefs.current[1] = el)}
            className="absolute top-[20%] lg2:left-[71%] lg:left-[60%] translate-x-[58%]
                       lg:flex flex-col hidden w-[252px] h-[270px]
                       bg-accent px-4 py-16 text-center"
          >
            <div className="md:heading-xs heading-caption font-normal text-primary text-[27px] tracking-[1.08px] leading-relaxed mb-1">
              Ethical Manufacturing
            </div>
            <div className="md:text-body-sm text-body-xs tracking-[0] leading-relaxed">
              Fair wages, safe working conditions, zero child labor
            </div>
          </div>

          <div
            ref={(el: any) => el && (cardRefs.current[2] = el)}
            className="absolute top-[52%] lg2:left-[46%] lg:left-[55%]
                       -translate-x-[225%] lg:flex flex-col hidden
                       w-[252px] h-[270px] bg-accent px-4 py-16 text-center"
          >
            <div className="md:heading-xs heading-caption font-normal text-primary text-2xl tracking-[0.96px] leading-relaxed mb-1">
              Water Conservation
            </div>
            <div className="md:text-body-sm text-body-xs tracking-[0] leading-relaxed">
              Advanced dyeing processes that reduce water usage by 40%
            </div>
          </div>

          <div
            ref={(el: any) => el && (cardRefs.current[3] = el)}
            className="absolute top-[62%] left-[60%] translate-x-[-12%]
                       lg:flex flex-col hidden w-[252px] h-[270px]
                       bg-accent px-4 py-16 text-center"
          >
            <div className="md:heading-xs heading-caption font-normal text-primary text-2xl tracking-[0.96px] leading-relaxed mb-1">
              Carbon Footprint Reduction
            </div>
            <div className="md:text-body-sm text-body-xs tracking-[0] leading-relaxed">
              Energy-efficient machinery and solar-powered facilities
            </div>
          </div>
        </div>
      </div>
      <div className="lg:hidden grid grid-cols-2 mb-8">
        {sustainabilityFeaturesData.map((feature, index) => (
          <div
            key={index}
            className="group bg-accent text-primary p-3
                       transition-all duration-300 ease-in-out
                       hover:bg-primary hover:text-secondary text-center"
          >
            <div className="md:heading-xs heading-caption text-lg mb-3">
              {feature.title}
            </div>
            <div className="text-sm text-muted-foreground">
              {feature.description}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturesSection;
