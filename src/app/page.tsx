import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {

    return (
      <div>
        <HeroSection />
        <SkillsSection />
        <ContactSection />

      </div>
    );
  };
  
