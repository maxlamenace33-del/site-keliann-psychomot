import { getSiteSettings } from "@/lib/settings";
import { HeroSection } from "@/components/sections/HeroSection";
import { PillarsSection } from "@/components/sections/PillarsSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ValuesSection } from "@/components/sections/ValuesSection";
import { PsychomotSection } from "@/components/sections/PsychomotSection";
import { CabinetSection } from "@/components/sections/CabinetSection";

export default async function HomePage() {
  const settings = await getSiteSettings();

  return (
    <div className="flex flex-col gap-24 pb-20">
      <HeroSection settings={settings} />
      <PillarsSection />
      <AboutSection settings={settings} />
      <ValuesSection />
      <PsychomotSection />
      <CabinetSection settings={settings} />
    </div>
  );
}
