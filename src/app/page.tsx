import { Hero } from '@/components/sections/Hero';
import { RaceSection } from '@/components/sections/RaceSection';
import { EventHighlightsSection } from '@/components/sections/EventHighlightsSection';
import { RouteSection } from '@/components/sections/RouteSection';

export default function HomePage() {
  return (
    <>
      <Hero />
      <RaceSection />
      <EventHighlightsSection />
      <RouteSection />
    </>
  );
}
