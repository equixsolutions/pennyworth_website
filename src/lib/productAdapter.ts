import { urlFor } from "@/sanity/image";

export function mapSanityProductToConfig(p: any) {
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

  const sections: any[] = [];

  // Product About
  if (p?.productAbout) {
    const aboutImages = (p.productAbout.images ?? [])
      .filter((img: any) => img?.asset)
      .map((img: any) => urlFor(img).width(1200).quality(80).url());

    if (aboutImages.length) {
      sections.push({
        type: "productAbout", // must match PRODUCT_SECTIONS.productAbout
        props: {
          title: p.productAbout.title ?? "",
          description: p.productAbout.description ?? "",
          images: aboutImages,
        },
      });
    }
  }

  // Overview Section
// Variants (multiple ProductOverview sections)
if (p?.variants?.length) {
  const items = p.variants.map((s: any) => {
    const images = (s.images ?? [])
      .filter((it: any) => it?.image?.asset)
      .map((it: any) => ({
        id: it._key,
        src: urlFor(it.image).width(1200).quality(80).url(),
        alt: it.alt ?? "",
      }));

const accordionItems = (s.accordionItems ?? []).map((it: any, idx: number) => ({
  id: idx + 1,
  title: it.title ?? "",
  content: portableTextToPlainText(it.content), // ✅ convert
}));


    return {
      title: s.title ?? "",
      imagePosition: s.imagePosition ?? "left",
      images,
      accordionItems,
    };
  }).filter((v: any) => v.images?.length);

  if (items.length) {
    sections.push({
      type: "overview",
      props: { items }, // 👈 pass array to wrapper
    });
  }
}


  return {
    hero: {
      badge: hero?.badge ?? "",
      title: hero?.title ?? "",
      images: heroImages,
      logo: {
        src: urlFor(hero?.logo).width(300).quality(80).url(),
        alt: hero?.logoAlt ?? "",
      },
    },
    sections,
  };
}





export function mapSanityProductsToCards(products: any[]) {
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
function portableTextToPlainText(value: any): string {
  if (!value) return "";

  // If Sanity returns Portable Text blocks (array)
  if (Array.isArray(value)) {
    return value
      .map((block) => {
        if (block?._type !== "block") return "";
        return (block.children ?? [])
          .map((child: any) => child?.text ?? "")
          .join("");
      })
      .filter(Boolean)
      .join("\n");
  }

  // If already a string
  if (typeof value === "string") return value;

  return "";
}
