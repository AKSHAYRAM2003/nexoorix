'use client';

import Hero3 from './Hero3';
import SubHeroBanner from './SubHeroBanner';
import AboutSection from './AboutSection';
import ServicesSection from './ServicesSection';
import GrowthLoopSection from './GrowthLoopSection';
import EngagementSection from './EngagementSection';
import FooterSection from './FooterSection';
import BackToTopButton from './BackToTopButton';

export default function AnimatedShowcase() {
  return (
    <div className="relative overflow-x-clip min-h-screen">
      {/* Hero Engine */}
      <Hero3 />

      {/* Sub Hero Section with Side Graphics & Business Value Prop */}
      <SubHeroBanner />

      {/* About Us Elevator Pitch Section */}
      <AboutSection />

      {/* Scroll-Driven Services Showcase Section */}
      <ServicesSection />

      {/* The Nexoorix Growth Loop / Flywheel Section */}
      <GrowthLoopSection />

      {/* Engagement CTA Section with Pixel Grid Side Graphics */}
      <EngagementSection />

      {/* Separate Premium Footer Component */}
      <FooterSection />

      {/* Floating Back to Top Button activated on scroll & aligned inside content margin */}
      <BackToTopButton />
    </div>
  );
}