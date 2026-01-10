export interface ProductImage {
  id: number;
  src: string;
  alt: string;
}

export interface AccordionItem {
  id: number;
  title: string;
  content: string;
}

export interface ProductOverviewProps {
  title: string;
  images: ProductImage[];
  accordionItems: AccordionItem[];
  imagePosition?: "left" | "right";
}

type FitImage = {
  src: string;
  alt: string;
};

export interface FitStyleSectionProps {
  title?: string;
  fitStyles: string[];
  images: FitImage[];
}

interface CustomizationSection {
  title: string;
  items: string[];
}

export interface CustomizationOptionsSectionProps {
  title: string;
  sections: CustomizationSection[];
}

interface ColorItem {
  name: string;
  hex: string;
  border?: boolean;
}
export interface ColorSwatchesProps {
  title: string;
  colors: ColorItem[];
}

interface InfoColumn {
  title: string;
  items: string[];
}

export interface InfoGridSectionProps {
  heading: string;
  columns: InfoColumn[];
  image?: {
    src: string;
    alt: string;
  };
  actionButton?: {
    label: string;
    onClick: () => void;
  };
}

export interface FeatureSectionProps {
  heading: string;
  features: {
    title: string;
    description?: string;
    points?: string[];
  }[];
  benefits?: { head: string; description: string }[];
  image?: {
    src: string;
    alt: string;
    colSpan:number
  };
}
