"use client";

import HeroSection from "@/components/sections/HeroSection";
import NavigationMenu from "@/components/layout/NavigationMenu";
import { useState } from "react";
import StatsSection from "@/components/sections/StatsSection";
// import AboutSection from "@/components/AboutSection";
// import Footer from "@/components/Footer";

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <main className="min-h-screen">
        <HeroSection onMenuOpen={() => setIsMenuOpen(true)} />
        <StatsSection />
        {/*<AboutSection />
        <Footer />*/}
        <NavigationMenu
          isOpen={isMenuOpen}
          onClose={() => setIsMenuOpen(false)}
        />
      </main>
    </>
  );
};

export default Home;
