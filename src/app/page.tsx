import { Hero } from '@/components/sections/Hero';
import { RaceSection } from '@/components/sections/RaceSection';
import { EventHighlightsSection } from '@/components/sections/EventHighlightsSection';
import { RouteSection } from '@/components/sections/RouteSection';
import { RaceKitSection } from '@/components/sections/RaceKitSection';
import { RundownSection } from '@/components/sections/RundownSection';
import { RegistrationSection } from '@/components/sections/RegistrationSection';
import { FAQSection } from '@/components/sections/FAQSection';
import { CTASection } from '@/components/sections/CTASection';

export default function HomePage() {
  return (
    <>
      <Hero />
      <RaceSection />
      <RegistrationSection />
      <EventHighlightsSection />
      <RaceKitSection />
      <RouteSection />
      <RundownSection />
      <FAQSection />
      <CTASection />
    </>
  );
}
