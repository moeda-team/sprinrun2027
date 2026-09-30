import { Hero } from '@/components/sections/Hero';
import { RaceSection } from '@/components/sections/RaceSection';
import { EventHighlightsSection } from '@/components/sections/EventHighlightsSection';
import { RouteSection } from '@/components/sections/RouteSection';
import { RaceKitSection } from '@/components/sections/RaceKitSection';
import { RegistrationSection } from '@/components/sections/RegistrationSection';
import { FAQSection } from '@/components/sections/FAQSection';

export default function HomePage() {
  return (
    <>
      <Hero />
      <RaceSection />
      <EventHighlightsSection />
      <RouteSection />
      <RaceKitSection />
      <RegistrationSection />
      <FAQSection />
    </>
  );
}
