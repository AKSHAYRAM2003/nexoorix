'use client';

import Hero2 from './Hero2';
import SubHeroBanner from './SubHeroBanner';
import AboutSection from './AboutSection';

export default function AnimatedShowcase() {
  return (
    <div className="relative overflow-x-clip min-h-screen">
      {/* Hero Engine */}
      <Hero2 />

      {/* Sub Hero Section with Side Graphics & Business Value Prop */}
      <SubHeroBanner />

      {/* About Us Elevator Pitch Section */}
      <AboutSection />
    </div>
  );
}