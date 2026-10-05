import { Hero } from '@/components/sections/Hero';
import { RaceSection } from '@/components/sections/RaceSection';
import { EventHighlightsSection } from '@/components/sections/EventHighlightsSection';
import { RouteSection } from '@/components/sections/RouteSection';
import { RaceKitSection } from '@/components/sections/RaceKitSection';
import { RegistrationSection } from '@/components/sections/RegistrationSection';
import { FAQSection } from '@/components/sections/FAQSection';
import { CTASection } from '@/components/sections/CTASection';
import { HostsSection } from '@/components/sections/HostsSection';

export default function HomePage() {
  return (
    <>
      <Hero />
      <EventHighlightsSection />
      <RaceSection />
      <RegistrationSection />
      <RouteSection />
      <RaceKitSection />
      <FAQSection />
      <HostsSection />
      <CTASection />
    </>
  );
}
