"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function ComplianceStandardsSection() {
  const sectionRef = useRef<HTMLElement | null>(null);

  const header = {
    title: "Compliance & Standards",
    subtitle: "All Pennywort safety vests meet or exceed:",
  };

  const standards = [
    {
      type: "image",
      icon: "/assets/images/logo/EN_ISO.png",
      title: "EN ISO",
      code: "20471:2013+A1:2016",
      description: "High Visibility Clothing",
    },
    {
      type: "image",
      icon: "/assets/images/logo/ANSI.png",
      title: "ANSI/ISEA",
      code: "107-2020",
      description: "American high-visibility standard (on request)",
    },
    {
      type: "class",
      icon: "★",
      classes: [
        {
          title: "Class 2",
          description:
            "Minimum 0.5 m² of background material, 0.13 m² reflective",
        },
        {
          title: "Class 3",
          description:
            "Minimum 0.8 m² of background material, 0.2 m² reflective (available in select designs)",
        },
      ],
    },
  ];

  const bulkOrderBenefits = {
    title: "Bulk Order Benefits",
    items: [
      "Minimum Order: 100 pieces",
      "Lead Time: 25–30 days (vests), 35–40 days (with custom printing/embroidery)",
    ],
  };

  const volumePricing = {
    title: "Volume Pricing",
    items: [
      "500 pieces: Standard rate",
      "500–1,000 pieces: 8% discount",
      "1,000+ pieces: 12% discount + free customization setup",
    ],
  };

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Heading
      gsap.from(".compliance-heading", {
        opacity: 0,
        y: 20,
        immediateRender: false,
        duration: 0.7,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
      });

      // Subtitle
      gsap.from(".compliance-subtitle", {
        opacity: 0,
        y: 15,
        duration: 0.6,
        ease: "power2.out",
        immediateRender: false,
        delay: 0.1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 78%",
          once: true,
        },
      });

      // Standards cards
      gsap.from(".compliance-card", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power3.out",
        immediateRender: false,
        stagger: 0.15,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
      });

      // Bottom lists
      gsap.from(".compliance-list", {
        opacity: 0,
        y: 25,
        duration: 0.7,
        ease: "power3.out",
        immediateRender: false,
        stagger: 0.2,
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
        <div className="mb-6">
          <h3 className="compliance-heading md:text-body-lg text-body-sm text-primary mb-2">
            {header.title}
          </h3>
          <hr className="border-muted-foreground/40" />
        </div>

        <p className="compliance-subtitle md:text-body-md text-body-xs text-primary/80 mb-6">
          {header.subtitle}
        </p>

        <div className="border border-muted-foreground/40 grid grid-cols-1 md:grid-cols-3 mb-12">
          {standards.slice(0, 2).map((item) => (
            <div
              key={item.code}
              className="compliance-card p-6 md:p-8 border-b md:border-b-0 md:border-r border-muted-foreground/40"
            >
              <div className="relative w-10 h-10 mb-4">
                <Image
                  src={item.icon}
                  alt="LOGO"
                  fill
                  className="object-contain"
                />
              </div>

              <h4 className="md:heading-sub-semibold heading-xs text-primary/80 mb-2">
                {item.title} {item.code}
              </h4>

              <p className="md:text-body-md text-body-xs text-primary/80">
                {item.description}
              </p>
            </div>
          ))}

          <div className="compliance-card p-6 md:p-8">
            <div className="mb-4 text-xl">{standards[2].icon}</div>

            {standards[2].classes?.map((cls) => (
              <div key={cls.title} className="mb-4 last:mb-0">
                <h4 className="md:text-body-md text-body-xs text-primary/80 mb-1">
                  {cls.title}
                </h4>
                <p className="md:text-body-md text-body-xs text-primary/80">
                  {cls.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="compliance-list">
            <h4 className="md:text-body-md-bold text-body-xs-bold text-primary/80 mb-4">
              {bulkOrderBenefits.title}
            </h4>
            <ul className="list-disc list-inside space-y-2 md:text-body-md text-body-xs text-primary/80">
              {bulkOrderBenefits.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="compliance-list">
            <h4 className="md:text-body-md-bold text-body-xs-bold text-primary/80 mb-4">
              {volumePricing.title}
            </h4>
            <ul className="list-disc list-inside space-y-2 md:text-body-md text-body-xs text-primary/80">
              {volumePricing.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ComplianceStandardsSection;
