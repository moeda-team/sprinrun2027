import { Hero } from '@/components/sections/Hero';
import { RaceSection } from '@/components/sections/RaceSection';
import { EventHighlightsSection } from '@/components/sections/EventHighlightsSection';

export default function HomePage() {
  return (
    <>
      <Hero />
      <RaceSection />
      <EventHighlightsSection />
    </>
  );
}
