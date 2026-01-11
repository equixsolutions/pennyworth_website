import { ProductAboutConfig } from "@/types/products";

export const heroMedicalScrubsConfig = {
  badge: "Nursing Scrubs & Lab Coats",

  title: "Medical Scrubs & Lab Coats - Professional Healthcare Uniforms",

  logo: {
    src: "/assets/images/design/penny-wort-logo.png",
    alt: "Pennywort Logo",
  },

  images: [
    {
      src: "/assets/images/design/scrubs/hero_1.png",
      alt: "Workwear Model Blue",
      className:
        "relative md:col-start-1 row-start-1 row-end-4 md:col-span-1 col-span-2 md:row-start-7 md:row-end-2",
    },
    {
      src: "/assets/images/design/scrubs/hero_2.png",
      alt: "Workwear Model Orange",
      className:
        "relative md:col-start-2 col-start-3 row-start-7 row-end-3 md:row-start-1 md:row-end-6",
    },
  ],
};

export const medicalScrubsAbout: ProductAboutConfig = {
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

export const customizationServicesSection = {
  heading: "Customization Services",
  features: [
    {
      title: "Embroidery Options",
      points: [
        "Name and title (chest or pocket)",
        "Hospital/clinic logo",
        "Department name",
        "Medical specialty insignia",
      ],
    },
    {
      title: "Embroidery Locations",
      points: [
        "Left chest (most common)",
        "Right chest",
        "Upper sleeve",
        "Back (for facility branding)",
      ],
    },
  ],
  benefits: [
    {
      head: "Thread Colors",
      description: "Match your brand or institutional colors",
    },
    {
      head: "Setup Fee",
      description: "₹500 (waived for orders 500+ pieces)",
    },
    {
      head: "Per-Piece Embroidery Cost",
      description: "₹50–100 (depending on complexity)",
    },
  ],
};

export const careInstructions = {
  title: "Care Instructions",
  sections: [
    {
      title: "Washing",
      items: [
        "Machine wash warm (40–60°C)",
        "Use mild detergent",
        "Avoid bleach (use oxygen bleach if needed)",
        "Tumble dry low or hang dry",
        "Iron on medium setting if required",
      ],
    },
    {
      title: "Durability",
      items: [
        "Standard scrubs: 75–100 washes",
        "Premium scrubs: 100–150 washes",
        "Lab coats: 100+ washes with proper care",
      ],
    },
    {
      title: "Maintenance Tips",
      items: [
        "Wash separately first time to set colors",
        "Turn inside out to preserve color",
        "Remove pens and instruments before washing",
        "Treat stains promptly",
      ],
    },
  ],
};

export const bulkOrderAndProgramsSection = {
  heading: "Bulk Order Benefits",

  topRow: [
    {
      title: "Healthcare Facility Packages",
      points: [
        "Starter Package: 50 tops + 50 pants + 10 lab coats",
        "Department Package: 100–500 pieces with department-specific colors",
        "Hospital Package: 500+ pieces with full embroidery service",
      ],
    },
    {
      title: "Volume Discounts",
      points: [
        "100–250 pieces: Standard pricing",
        "250–500 pieces: 5% discount",
        "500–1,000 pieces: 12% discount",
        "1,000+ pieces: 15% discount + free embroidery setup",
      ],
    },
    {
      title: "Lead Time",
      points: [
        "Standard orders: 30–35 days",
        "With embroidery: 35–40 days",
        "Rush orders: 25 days (10% premium)",
      ],
    },
  ],

  bottomHeading: "Special Programs",

  bottomRow: [
    {
      title: "Nursing College Programs",
      points: [
        "Bulk student uniform packages",
        "Standardized sizing and colors",
        "Competitive educational pricing",
        "Flexible payment terms",
      ],
    },
    {
      title: "Hospital Chain Partnerships",
      points: [
        "Centralized ordering system",
        "Consistent quality across locations",
        "Inventory management support",
        "Annual contract pricing",
      ],
    },
  ],

  image: {
    src: "/assets/images/design/nurse-uniform.png",
    alt: "Medical uniform",
  },
};

export const sizeRangeGuide = {
  heading: "Size Range",
  columns: [
    {
      title: "Scrub Tops & Pants",
      items: [
        "XS (00–0)",
        "Small (2–4)",
        "Medium (6–8)",
        "Large (10–12)",
        "XL (14–16)",
        "2XL (18–20)",
        "3XL (22–24)",
      ],
    },
    {
      title: "Lab Coats",
      items: [
        "XS (30–32 chest)",
        "Small (34–36 chest)",
        "Medium (38–40 chest)",
        "Large (42–44 chest)",
        "XL (46–48 chest)",
        "2XL (50–52 chest)",
      ],
    },
  ],
  actionButton: {
    label: "Download Detailed Size Chart ↗",
    onClick: () => window.open("/size-chart.pdf", "_blank"),
  },
};
