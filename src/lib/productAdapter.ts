import { urlFor } from "@/sanity/image";

interface SanityImage extends Record<string, unknown> {
  asset?: unknown;
}

interface SanityAccordionItem {
  title?: string;
  content?: unknown;
}

interface PortableTextChild {
  text?: string;
}

interface SanityVariantImage {
  image?: SanityImage;
  alt?: string;
  _key?: string;
}

interface SanityVariant {
  images?: SanityVariantImage[];
  accordionItems?: SanityAccordionItem[];
  title?: string;
  imagePosition?: string;
}

interface SanityProduct {
  title?: string;
  slug?: string;
  image?: unknown;
  cardOverlay?: {
    description?: string;
    materials?: string;
    applications?: string;
    cta?: string;
  };
  hero?: {
    image1?: SanityImage;
    image1Alt?: string;
    image2?: SanityImage;
    image2Alt?: string;
    badge?: string;
    title?: string;
    logo?: SanityImage;
    logoAlt?: string;
  };
  productAbout?: {
    images?: SanityImage[];
    title?: string;
    description?: string;
  };
  variants?: SanityVariant[];
}

export function mapSanityProductToConfig(p: SanityProduct) {
  const hero = p?.hero;

  const heroImages = [
    hero?.image1?.asset
      ? {
          src: urlFor(hero.image1).width(1600).quality(80).url(),
          alt: hero?.image1Alt ?? "",
          className:
            "relative md:col-start-1 row-start-1 row-end-4 md:col-span-1 col-span-2 md:row-start-7 md:row-end-2",
        }
      : null,
    hero?.image2?.asset
      ? {
          src: urlFor(hero.image2).width(1600).quality(80).url(),
          alt: hero?.image2Alt ?? "",
          className:
            "relative md:col-start-2 col-start-3 row-start-7 row-end-3 md:row-start-1 md:row-end-6",
        }
      : null,
  ].filter(Boolean);

  const sections: Array<{ type: string; props: Record<string, unknown> }> = [];


  if (p?.productAbout) {
    const aboutImages = (p.productAbout.images ?? [])
      .filter((img: SanityImage) => img?.asset)
      .map((img: SanityImage) => urlFor(img).width(1200).quality(80).url());

    if (aboutImages.length) {
      sections.push({
        type: "productAbout", 
        props: {
          title: p.productAbout.title ?? "",
          description: p.productAbout.description ?? "",
          images: aboutImages,
        },
      });
    }
  }


if (p?.variants?.length) {
  const items = p.variants.map((s: SanityVariant) => {
    const images = (s.images ?? [])
      .filter((it: SanityVariantImage) => it?.image?.asset)
      .map((it: SanityVariantImage) => ({
        id: it._key,
        src: urlFor(it.image!).width(1200).quality(80).url(),
        alt: it.alt ?? "",
      }));

const accordionItems = (s.accordionItems ?? []).map((it: SanityAccordionItem, idx: number) => ({
  id: idx + 1,
  title: it.title ?? "",
  content: portableTextToPlainText(it.content),
}));


    return {
      title: s.title ?? "",
      imagePosition: s.imagePosition ?? "left",
      images,
      accordionItems,
    };
  }).filter((v) => v.images?.length);

  if (items.length) {
    sections.push({
      type: "overview",
      props: { items }, 
    });
  }
}


  return {
    hero: {
      badge: hero?.badge ?? "",
      title: hero?.title ?? "",
      images: heroImages,
      logo: {
        src: hero?.logo?.asset ? urlFor(hero.logo).width(300).quality(80).url() : "",
        alt: hero?.logoAlt ?? "",
      },
    },
    sections,
  };
}





export function mapSanityProductsToCards(products: SanityProduct[]) {
  return products.map((p) => ({
    title: p.title,
    slug: p.slug,
    image: p.image,
    overlay: {
      description: p.cardOverlay?.description ?? "",
      materials: p.cardOverlay?.materials ?? "",
      applications: p.cardOverlay?.applications ?? "",
      cta: p.cardOverlay?.cta ?? "View Product",
    },
  }));
}
function portableTextToPlainText(value: unknown): string {
  if (!value) return "";

  if (Array.isArray(value)) {
    return value
      .map((block) => {
        if (block?._type !== "block") return "";
        return (block.children ?? [])
          .map((child: PortableTextChild) => child?.text ?? "")
          .join("");
      })
      .filter(Boolean)
      .join("\n");
  }

  if (typeof value === "string") return value;

  return "";
}
