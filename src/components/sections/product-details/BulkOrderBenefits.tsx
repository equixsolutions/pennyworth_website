"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function BulkOrderBenefits() {
  const sectionRef = useRef<HTMLElement | null>(null);

  const volumeDiscounts = {
    title: "Volume Discounts",
    items: [
      "500 pieces: Standard pricing",
      "501–1,000 pieces: 5% discount",
      "1,001–5,000 pieces: 10% discount",
      "5,000+ pieces: Custom negotiated pricing",
    ],
  };

  const valueAddedServices = {
    title: "Value-Added Services",
    items: [
      "Sample on time (production quality, not for personal use)",
      "Dedicated account manager for orders 1,000+ pieces",
      "On-site measurement services for large teams (India only)",
      "Inventory management solutions for repeat orders",
      "Flexible payment terms for established corporate clients",
    ],
  };

  const leadTimes = {
    title: "Lead Times",
    items: [
      {
        label: "Standard Production",
        value: "65 days from order confirmation and payment",
      },
      {
        label: "Rush Orders",
        value: "30-day delivery available (10% premium, subject to capacity)",
      },
      {
        label: "Repeat Orders",
        value: "30–35 days (for existing clients with approved designs)",
      },
    ],
  };

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Section heading
      gsap.from(".bulk-heading", {
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

      // Two main columns
      gsap.from(".bulk-column", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
      });

      // List items (very subtle)
      gsap.from(".bulk-list-item", {
        opacity: 0,
        y: 10,
        duration: 0.4,
        ease: "power2.out",
        stagger: 0.05,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 72%",
          once: true,
        },
      });

      // Lead times section
      gsap.from(".bulk-lead-times", {
        opacity: 0,
        y: 25,
        duration: 0.7,
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
    <section ref={sectionRef} className="bg-secondary px-5 md:px-10 py-10">
      <div>
        <div className="mb-10">
          <h3 className="bulk-heading md:text-body-lg text-body-sm text-primary mb-2 px-18">
            Bulk Order Benefits
          </h3>
          <hr className="border-muted-foreground/50" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-12">
          <div className="bulk-column">
            <h4 className="md:text-body-md-bold text-body-sm-bold text-primary mb-4">
              {volumeDiscounts.title}
            </h4>
            <ul className="space-y-2 md:text-body-md text-body-xs text-primary/80 list-disc list-inside">
              {volumeDiscounts.items.map((item) => (
                <li key={item} className="bulk-list-item">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bulk-column">
            <h4 className="md:text-body-md-bold text-body-sm-bold text-primary mb-4">
              {valueAddedServices.title}
            </h4>
            <ul className="space-y-2 md:text-body-md text-body-xs text-primary/80 list-disc list-inside">
              {valueAddedServices.items.map((item) => (
                <li key={item} className="bulk-list-item">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bulk-lead-times">
          <h4 className="md:text-body-md-bold text-body-sm-bold text-primary mb-4">
            {leadTimes.title}
          </h4>

          <div className="space-y-3 md:text-body-md text-body-xs text-primary/80">
            {leadTimes.items.map((item) => (
              <p key={item.label}>
                <span className="md:text-body-md-bold text-body-xs text-primary">
                  {item.label}:
                </span>{" "}
                {item.value}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default BulkOrderBenefits;
