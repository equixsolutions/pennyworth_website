export const products = [
  {
    title: "Flame-Resistant Coveralls",
    image: "/assets/images/design/product_1.png",
  },
  {
    title: "High-Visibility Safety Vests",
    image: "/assets/images/design/product_2.png",
  },
  {
    title: "Corporate & Custom T-Shirts",
    image: "/assets/images/design/product_4.png",
  },
  {
    title: "Industrial Work Gloves",
    image: "/assets/images/design/product_6.png",
  },
  {
    title: "Medical Scrubs & Lab Coats",
    image: "/assets/images/design/product_5.png",
  },
];

export const fitStyleData = {
  title: "Fit Styles",
  fitStyles: [
    "Regular Fit (classic, comfortable)",
    "Slim Fit (modern, tapered)",
    "Oversized Fit (contemporary, relaxed)",
    "Athletic Fit (active wear styling)",
  ],
  images: [
    {
      src: "/assets/images/design/fit_style_t.png",
      alt: "Neck label detail",
    },
    {
      src: "/assets/images/design/fit_style_t_2.png",
      alt: "Model wearing t-shirt",
    },
  ],
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

export const benefits = [
  "Match any Pantone color reference",
  "Match from fabric swatch or photo",
  "Create unique brand colors",
  "Consistent color matching across large orders",
];

export const availableColors = [
  { name: "White", hex: "#ffffff", border: true },
  { name: "Black", hex: "#000000" },
  { name: "Navy", hex: "#0b1c3d" },
  { name: "Royal Blue", hex: "#4169e1" },
  { name: "Red", hex: "#ff0000" },
  { name: "Maroon", hex: "#800000" },
  { name: "Bottle Green", hex: "#006a4e" },
  { name: "Olive", hex: "#808000" },
  { name: "Grey", hex: "#8e8e8e" },
  { name: "Orange", hex: "#ffa500" },
  { name: "Yellow", hex: "#ffff00" },
  { name: "Pink", hex: "#ffc0cb" },
  { name: "Purple", hex: "#800080" },
  { name: "Sky Blue", hex: "#87ceeb" },
  { name: "Turquoise", hex: "#40e0d0" },
];

export const scrubColors = [
  {
    title: "Blues",
    colors: [
      { name: "Navy", hex: "#0B1C4D" },
      { name: "Royal Blue", hex: "#4169E1" },
      { name: "Ceil Blue", hex: "#A6BCE2" },
      { name: "Caribbean Blue", hex: "#4BA3AF" },
      { name: "Teal", hex: "#008080" },
    ],
  },
  {
    title: "Greens",
    colors: [
      { name: "Hunter green", hex: "#355E3B" },
      { name: "Forest green", hex: "#228B22" },
      { name: "Sage", hex: "#B2AC88" },
      { name: "Olive", hex: "#808000" },
    ],
  },
  {
    title: "Neutrals",
    colors: [
      { name: "Black", hex: "#000000" },
      { name: "Charcoal", hex: "#36454F" },
      { name: "Pewter", hex: "#E5E4E2" },
      { name: "Khaki", hex: "#C3B091" },
      { name: "White", hex: "#FFFFFF", border: true },
    ],
  },
  {
    title: "Accent Colors",
    colors: [
      { name: "Burgundy", hex: "#800020" },
      { name: "Wine", hex: "#722F37" },
      { name: "Purple", hex: "#800080" },
      { name: "Pink", hex: "#FFC0CB" },
      { name: "Red", hex: "#FF0000" },
    ],
  },
];

export const designPlacementGuide = {
  heading: "Design & Placement Guide",
  columns: [
    {
      title: "Popular Placement Options",
      items: [
        "Left Chest: 3–4 inch logo (most common)",
        "Full Front: Large design up to 12” × 14”",
        "Oversized Front: Modern, bold statement (14” × 16”)",
        "Back: Full back prints, large logos, slogans",
        "Sleeve: Small logo, text, or graphics",
        "Pocket: Subtle branding (pocket t-shirts)",
        "Collar/Neck: Inside tag printing for brand identity",
      ],
    },
    {
      title: "Design Tips",
      items: [
        "Vector files (AI, EPS, PDF) preferred for best quality",
        "High-resolution images (300 DPI minimum) for photo printing",
        "Pantone color matching available",
        "Free design consultation for orders 500+ pieces",
      ],
    },
  ],
  image: {
    src: "/assets/images/design/design-placement.png",
    alt: "Design placement example",
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

export const printingOptionsSection = {
  heading: "Customization Options",
  features: [
    {
      title: "Screen Printing (Most Popular)",
      points: [
        "Best for large quantities, bold designs",
        "Up to 6 colors per design",
        "Print size up to 14” × 16”",
        "Excellent wash resistance",
        "Most economical for bulk orders",
      ],
    },
    {
      title: "Heat Transfer Printing",
      points: [
        "Photo-realistic images",
        "Full-color capability",
        "Quick turnaround",
        "Ideal for complex designs",
      ],
    },
    {
      title: "Vinyl Transfer",
      points: [
        "Best for names & numbers",
        "Excellent durability",
        "Premium finish",
        "Ideal for employee IDs",
      ],
    },
    {
      title: "Direct-to-Garment (DTG) Printing",
      points: [
        "Complex artwork support",
        "Photo-quality prints",
        "Eco-friendly inks",
        "No minimum order quantity",
      ],
    },
    {
      title: "Sublimation Printing",
      points: [
        "Polyester fabrics only",
        "Vibrant permanent colors",
        "All-over print capability",
        "No added fabric weight",
      ],
    },
  ],
  image: {
    src: "/assets/images/design/black-tshirt.png",
    alt: "Printed t-shirt",
    colSpan: 1,
  },
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
