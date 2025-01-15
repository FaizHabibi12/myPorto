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
  

  

  // return ( 
  //   <div className="flex flex-row justify-center items-center gap-4">
  //         <div>
  //           <Image src={"/my-pict3.png"} width={500} height={500} alt={"my-pict"}></Image>
  //         </div>
  //         <div>
  //           <Image src={"/my-pict2.png"} width={500} height={500} alt={"my-pict"}></Image>

  //         </div>
  //   </div>
  // );

