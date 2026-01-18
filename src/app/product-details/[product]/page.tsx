"use client";

import Footer from "@/components/layout/Footer";
import NavigationMenu from "@/components/layout/NavigationMenu";
import HeroSection from "@/components/sections/product-details/HeroSection";
import { PRODUCT_CONFIGS, ProductSlug } from "@/config/products/productConfigs";
import { PRODUCT_SECTIONS } from "@/config/products/productSectionRegistry";
import { notFound, useParams } from "next/navigation";
import React, { useState } from "react";


function Product() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { product } = useParams<{ product: ProductSlug }>();
  const config = PRODUCT_CONFIGS[product];

  if (!config) {
    notFound();
  }

  return (
    <>
      <HeroSection {...config.hero} onMenuOpen={() => setIsMenuOpen(true)} />
      {config.sections.map((section, index) => {
        const SectionComponent = PRODUCT_SECTIONS[section.type];
        return <SectionComponent key={index} {...section.props} />;
      })}
      <Footer />
      <NavigationMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
      />
    </>
  );
}

export default Product;
