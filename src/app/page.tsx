"use client";

import HeroSection from "@/components/sections/HeroSection";
import NavigationMenu from "@/components/layout/NavigationMenu";
import { useState } from "react";
import StatsSection from "@/components/sections/StatsSection";
import AboutSection from "@/components/sections/AboutSection";
import LeadershipSection from "@/components/sections/LeadershipSection";
import ValuesSection from "@/components/sections/ValuesSection";
import IndustriesSection from "@/components/sections/IndustriesSection";
import NewsAndEvents from "@/components/sections/NewsAndEvents";
import FeaturesSection from "@/components/sections/FeaturesSection";
import AboutMoreSection from "@/components/sections/AboutMoreSection";
import TestimonialSection from "@/components/sections/TestimonialSection";
import Footer from "@/components/layout/Footer";


const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <main className="min-h-screen">
        <HeroSection onMenuOpen={() => setIsMenuOpen(true)} />
        <StatsSection />
        <AboutSection />
        <LeadershipSection />
        <NewsAndEvents />
        <ValuesSection />
        <IndustriesSection />
        <FeaturesSection />
        <AboutMoreSection />
        <TestimonialSection />
        <Footer />
        <NavigationMenu
          isOpen={isMenuOpen}
          onClose={() => setIsMenuOpen(false)}
        />
      </main>
    </>
  );
};

export default Home;
