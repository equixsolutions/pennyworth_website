import { ProductAboutConfig } from "@/types/products";

export const heroWorkGlovesConfig = {
  badge: "Work Gloves",

  title:
    "Industrial Work Gloves - Cut-Resistant, Heat-Resistant & Chemical Protection",

  logo: {
    src: "/assets/images/design/penny-wort-logo.png",
    alt: "Pennywort Logo",
  },

  images: [
    {
      src: "/assets/images/design/gloves/hero_1.png",
      alt: "Workwear Model Blue",
      className:
        "relative md:col-start-1 row-start-1 row-end-4 md:col-span-1 col-span-2 md:row-start-7 md:row-end-2",
    },
    {
      src: "/assets/images/design/gloves/hero_2.png",
      alt: "Workwear Model Orange",
      className:
        "relative md:col-start-2 col-start-3 row-start-7 row-end-3 md:row-start-1 md:row-end-6",
    },
  ],
};

export const workGlovesAbout: ProductAboutConfig = {
  images: [
    "/assets/images/design/product_1.png",
    "/assets/images/design/product_2.png",
    "/assets/images/design/product_3.png",
    "/assets/images/design/product_4.png",
  ],
  title: "Built for the Toughest Environments. Engineered for Maximum Safety.",
  description:
    "When flash fires, molten metal, and extreme heat are part of the job, ordinary workwear isn’t enough. Pennywort’s coveralls combine cutting-edge fabric technology with precision manufacturing to deliver protection that meets—and exceeds—international safety standards.",
};

export const customizationOptions = {
  title: "Customization Options",
  sections: [
    {
      title: "Branding",
      items: [
        "Logo printing on cuff or back",
        "Company name embossing",
        "Color-coded by department",
      ],
    },
    {
      title: "Sizing",
      items: [
        "Available sizes: Small, Medium, Large, XL, 2XL",
        "Custom sizing for bulk orders (1,000+ pairs)",
      ],
    },
    {
      title: "Packaging",
      items: [
        "Individual polybag packaging",
        "Dozen packs",
        "Bulk carton packaging",
        "Custom retail packaging (MOQ: 5,000 pairs)",
      ],
    },
  ],
};
