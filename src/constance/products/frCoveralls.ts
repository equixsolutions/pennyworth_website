import { ProductAboutConfig } from "@/types/products";

export const heroCoverallConfig = {
  badge: "Flame-Resistant Coveralls",

  title: "Industrial & Flame-Resistant Coveralls – Premium Protection Workwear",

  logo: {
    src: "/assets/images/design/penny-wort-logo.png",
    alt: "Pennywort Logo",
  },

  images: [
    {
      src: "/assets/images/design/product_hero_2.png",
      alt: "Workwear Model Blue",
      className:
        "relative md:col-start-1 row-start-1 row-end-4 md:col-span-1 col-span-2 md:row-start-7 md:row-end-2",
    },
    {
      src: "/assets/images/design/product_hero.png",
      alt: "Workwear Model Orange",
      className:
        "relative md:col-start-2 col-start-3 row-start-7 row-end-3 md:row-start-1 md:row-end-6",
    },
  ],
};

export const coverallsAbout: ProductAboutConfig = {
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
