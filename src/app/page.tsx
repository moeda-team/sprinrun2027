import { Hero } from '@/components/sections/Hero';
import { RaceSection } from '@/components/sections/RaceSection';
import { EventHighlightsSection } from '@/components/sections/EventHighlightsSection';
import { RouteSection } from '@/components/sections/RouteSection';
import { RaceKitSection } from '@/components/sections/RaceKitSection';
import { RundownSection } from '@/components/sections/RundownSection';
import { RegistrationSection } from '@/components/sections/RegistrationSection';
import { FAQSection } from '@/components/sections/FAQSection';

export default function HomePage() {
  return (
    <>
      <Hero />
      <RaceSection />
      <EventHighlightsSection />
      <RaceKitSection />
      <RouteSection />
      <RundownSection />
      <RegistrationSection />
      <FAQSection />
    </>
  );
}
