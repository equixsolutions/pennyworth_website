import { ProductAboutConfig } from "@/types/products";

export const heroSafetyVestsConfig = {
  badge: "Safety Vests",
  title:
    "High-Visibility Safety Vests - EN ISO 20471 Certified Protective Apparel",

  logo: {
    src: "/assets/images/design/penny-wort-logo.png",
    alt: "Pennywort Logo",
  },

  images: [
    {
      src: "/assets/images/design/safetyVests/hero_1.png",
      alt: "Workwear Model Blue",
      className:
        "relative md:col-start-1 row-start-1 row-end-4 md:col-span-1 col-span-2 md:row-start-7 md:row-end-2",
    },
    {
      src: "/assets/images/design/safetyVests/hero_2.png",
      alt: "Workwear Model Orange",
      className:
        "relative md:col-start-2 col-start-3 row-start-7 row-end-3 md:row-start-1 md:row-end-6",
    },
  ],
};

export const safetysVastsAbout: ProductAboutConfig = {
  images: [
    "/assets/images/design/safetyVests/safety_veste_about.png",
    "/assets/images/design/safetyVests/safety_veste_about_2.png",
    "/assets/images/design/safetyVests/safety_veste_about_3.png",
    "/assets/images/design/safetyVests/safety_veste_about_4.png",
  ],
  title: "Be Seen. Stay Safe. Work Confidently.",
  description:
    "In construction zones, highways, warehouses, and industrial sites—visibility isn't optional, it's essential. Pennywort's safety vests combine compliance-certified high-visibility materials with durable construction, ensuring your team stays visible and protected.",
};

export const customizationOptionsSection = {
  heading: "Customization Options",
  features: [
    {
      title: "Logo Printing",
      points: [
        "Screen printing (chest, back)",
        "Heat transfer printing",
        "Reflective logo printing (maximum visibility)",
      ],
    },
    {
      title: "Text & Messaging",
      points: [
        "Company name",
        "Department identification",
        "Safety slogans",
        "Emergency contact information",
      ],
    },
    {
      title: "Color Options",
      points: [
        "Fluorescent yellow (most popular)",
        "Fluorescent orange",
        "Fluorescent yellow-green",
        "Custom colors (MOQ: 500 pieces, compliance verification required)",
      ],
    },
    {
      title: "Design Variations",
      points: [
        "Sleeveless (standard)",
        "Short-sleeve",
        "Long-sleeve",
        "Vest-jacket combinations",
      ],
    },
  ],
  image: {
    src: "/assets/images/design/customization-workers.png",
    alt: "Customization example",
    colSpan: 2,
  },
};
