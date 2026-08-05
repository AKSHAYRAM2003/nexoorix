'use client';

import React, { useRef, useLayoutEffect } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

/* ------------------------------------------------------------------ */
/*  Animation Config                                                    */
/* ------------------------------------------------------------------ */
export const GROWTH_LOOP_ANIMATION_CONFIG = {
  headlineDuration: 1.2,
  headlineStagger: 0.10,
  headlineTriggerStart: 'top 85%',
  pillDuration: 0.8,
  pillTriggerStart: 'top 88%',
};

/* ------------------------------------------------------------------ */
/*  4 Growth Loop Stages with Custom 3D Asset Icons                    */
/* ------------------------------------------------------------------ */
const stages = [
  {
    image: '/assets/iamges/Build.png?v=2',
    title: 'Build',
    description: 'Scalable software creates the foundation for automation',
  },
  {
    image: '/assets/iamges/automate.png?v=2',
    title: 'Automate',
    description: 'Smarter workflows free your team to focus on growth',
  },
  {
    image: '/assets/iamges/intelligence.png?v=2',
    title: 'Intelligence',
    description: 'AI agents generate insights that sharpen your strategy',
  },
  {
    image: '/assets/iamges/grow.png?v=2',
    title: 'Grow',
    description: 'Better visibility drives traffic back into the loop',
  },
];

/* ------------------------------------------------------------------ */
/*  Main Component                                                      */
/* ------------------------------------------------------------------ */
export default function GrowthLoopSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // 1. Pill Badge
      gsap.fromTo(
        '.gsap-flywheel-pill',
        { opacity: 0, y: 18 },
        {
          opacity: 1,
          y: 0,
          duration: GROWTH_LOOP_ANIMATION_CONFIG.pillDuration,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.gsap-flywheel-pill',
            start: GROWTH_LOOP_ANIMATION_CONFIG.pillTriggerStart,
            toggleActions: 'play none none reverse',
          },
        }
      );

      // 2. Headline Word Reveal
      gsap.fromTo(
        '.gsap-flywheel-word',
        { opacity: 0.15, filter: 'blur(4px)', y: 12 },
        {
          opacity: 1,
          filter: 'blur(0px)',
          y: 0,
          stagger: GROWTH_LOOP_ANIMATION_CONFIG.headlineStagger,
          duration: GROWTH_LOOP_ANIMATION_CONFIG.headlineDuration,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.gsap-flywheel-headline',
            start: GROWTH_LOOP_ANIMATION_CONFIG.headlineTriggerStart,
            toggleActions: 'play none none reverse',
          },
        }
      );

      // 3. Subtitle Paragraph
      gsap.fromTo(
        '.gsap-flywheel-para',
        { opacity: 0.15, filter: 'blur(4px)', y: 16 },
        {
          opacity: 1,
          filter: 'blur(0px)',
          y: 0,
          duration: 0.85,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.gsap-flywheel-para',
            start: 'top 88%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // 4. Center Video
      gsap.fromTo(
        '.gsap-flywheel-center',
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.gsap-flywheel-center',
            start: 'top 82%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // 5. Corner Nodes Staggered
      gsap.fromTo(
        '.gsap-flywheel-node',
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.15,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.gsap-flywheel-layout',
            start: 'top 78%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="work"
      className="relative w-full bg-[#faf9f7] text-neutral-900 py-10 sm:py-14 md:py-16 lg:py-24 overflow-hidden"
    >
      {/* Custom Keyframes for Smooth Arrow Rotation */}
      <style jsx global>{`
        @keyframes spinSlowLinear {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow-linear {
          animation: spinSlowLinear 26s linear infinite;
        }
      `}</style>

      <div className="relative z-10 max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-12">
        {/* ── Section Header ── */}
        <div className="max-w-3xl mx-auto text-center space-y-2.5 sm:space-y-3 mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          <div className="gsap-flywheel-pill inline-flex items-center justify-center px-3.5 py-1 sm:px-4 sm:py-1.5 rounded-lg bg-neutral-100/90 border border-neutral-200/70 text-neutral-700 text-[9px] sm:text-[11px] font-semibold tracking-[0.18em] uppercase shadow-2xs">
            HOW WE DELIVER VALUE
          </div>
          <h2
            className="gsap-flywheel-headline text-xl sm:text-3xl md:text-[42px] font-medium tracking-tight text-neutral-950 leading-snug sm:leading-tight text-center max-w-4xl mx-auto select-none"
            style={{ fontFamily: 'var(--font-grotesk-neue)' }}
          >
            <span className="block mb-1">
              {['The', 'Nexoorix', 'growth', 'loop', 'driving'].map((word, idx) => (
                <span
                  key={idx}
                  className="gsap-flywheel-word inline-block font-medium text-neutral-950 mr-[0.28em] will-change-[transform,opacity,filter]"
                  style={{ fontFamily: 'var(--font-grotesk-neue)' }}
                >
                  {word}
                </span>
              ))}
            </span>
            <span className="inline-flex flex-wrap items-baseline justify-center gap-x-2 sm:gap-x-2.5">
              <span
                className="gsap-flywheel-word inline-block align-baseline font-medium text-neutral-950 will-change-[transform,opacity,filter]"
                style={{ fontFamily: 'var(--font-grotesk-neue)' }}
              >
                continuous
              </span>
              <span
                className="gsap-flywheel-word inline-block align-baseline font-normal italic text-neutral-900 will-change-[transform,opacity,filter]"
                style={{ fontFamily: 'var(--font-pp-editorial)' }}
              >
                business velocity
              </span>
            </span>
          </h2>

          <p className="gsap-flywheel-para text-sm sm:text-base md:text-lg text-neutral-600 font-sans leading-relaxed max-w-2xl mx-auto font-normal will-change-[transform,opacity,filter] px-2 sm:px-0">
            Every solution we build strengthens the next, creating a continuous
            cycle of innovation, automation, and business growth.
          </p>
        </div>

        {/* ── Flywheel Layout — Responsive Grid Across Mobile, Tablet & Desktop ── */}
        <div className="gsap-flywheel-layout relative max-w-[1280px] mx-auto px-1 sm:px-4">
          <div className="grid grid-cols-[1fr_1.1fr_1fr] sm:grid-cols-[1fr_1.15fr_1fr] md:grid-cols-[1fr_1.1fr_1fr] lg:grid-cols-[1fr_1.3fr_1fr] gap-x-1 sm:gap-x-3 md:gap-x-4 lg:gap-x-8 items-center justify-items-center">

            {/* ── Left Column Nodes ── */}
            <div className="flex flex-col items-center gap-6 sm:gap-10 md:gap-14 lg:gap-28 w-full">
              {/* Top-Left: BUILD */}
              <div className="gsap-flywheel-node flex flex-col items-center text-center space-y-1 sm:space-y-2 max-w-[105px] xs:max-w-[130px] sm:max-w-[180px] md:max-w-[200px] lg:max-w-[260px] xl:max-w-[280px]">
                <div className="w-8 h-8 xs:w-10 xs:h-10 sm:w-13 sm:h-13 md:w-13 md:h-13 lg:w-16 lg:h-16 relative flex items-center justify-center transition-transform duration-300 hover:scale-110">
                  <Image
                    src={stages[0].image}
                    alt={stages[0].title}
                    width={64}
                    height={64}
                    className="w-full h-full object-contain filter drop-shadow-sm"
                    unoptimized
                  />
                </div>
                <h3
                  className="text-base sm:text-xl md:text-2xl lg:text-3xl font-semibold tracking-normal text-neutral-950"
                  style={{ fontFamily: 'var(--font-pp-editorial)' }}
                >
                  {stages[0].title}
                </h3>
                <p className="text-[10px] sm:text-xs md:text-[13px] lg:text-base text-neutral-800 leading-tight sm:leading-normal font-normal">
                  {stages[0].description}
                </p>
              </div>

              {/* Bottom-Left: GROW */}
              <div className="gsap-flywheel-node flex flex-col items-center text-center space-y-1 sm:space-y-2 max-w-[105px] xs:max-w-[130px] sm:max-w-[180px] md:max-w-[200px] lg:max-w-[260px] xl:max-w-[280px]">
                <div className="w-8 h-8 xs:w-10 xs:h-10 sm:w-13 sm:h-13 md:w-13 md:h-13 lg:w-16 lg:h-16 relative flex items-center justify-center transition-transform duration-300 hover:scale-110">
                  <Image
                    src={stages[3].image}
                    alt={stages[3].title}
                    width={64}
                    height={64}
                    className="w-full h-full object-contain filter drop-shadow-sm"
                    unoptimized
                  />
                </div>
                <h3
                  className="text-base sm:text-xl md:text-2xl lg:text-3xl font-semibold tracking-normal text-neutral-950"
                  style={{ fontFamily: 'var(--font-pp-editorial)' }}
                >
                  {stages[3].title}
                </h3>
                <p className="text-[10px] sm:text-xs md:text-[13px] lg:text-base text-neutral-800 leading-tight sm:leading-normal font-normal">
                  {stages[3].description}
                </p>
              </div>
            </div>

            {/* ── Center Image with Rotating Arrow Circle Overlay ── */}
            <div className="gsap-flywheel-center flex items-center justify-center p-0.5 sm:p-2 md:p-4">
              <div className="relative w-full max-w-[135px] xs:max-w-[180px] sm:max-w-[260px] md:max-w-[340px] lg:max-w-[500px] xl:max-w-[580px] flex items-center justify-center">
                {/* Base Loop Graphic */}
                <Image
                  src="/assets/iamges/loop.png"
                  alt="Nexoorix Growth Loop Flywheel"
                  width={700}
                  height={700}
                  className="w-full h-auto object-contain mix-blend-multiply pointer-events-none select-none"
                  priority
                />

                {/* Rotating Solid Circular Arc Arrow Overlay (Thin, elegant hairline stroke) */}
                <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
                  <svg
                    viewBox="0 0 200 200"
                    className="w-[74%] h-[74%] animate-spin-slow-linear text-white"
                  >
                    <defs>
                      <marker
                        id="arc-arrowhead-solid"
                        markerWidth="4.5"
                        markerHeight="4.5"
                        refX="4"
                        refY="2.25"
                        orient="auto"
                      >
                        <polygon points="0 0, 4.5 2.25, 0 4.5" fill="white" opacity="0.85" />
                      </marker>
                    </defs>

                    {/* Arc 1: Top-Right */}
                    <path
                      d="M 120,27 A 76,76 0 0,1 173,80"
                      fill="none"
                      stroke="white"
                      strokeWidth="1.0"
                      strokeLinecap="round"
                      opacity="0.8"
                      markerEnd="url(#arc-arrowhead-solid)"
                    />
                    {/* Arc 2: Bottom-Right */}
                    <path
                      d="M 173,120 A 76,76 0 0,1 120,173"
                      fill="none"
                      stroke="white"
                      strokeWidth="1.0"
                      strokeLinecap="round"
                      opacity="0.8"
                      markerEnd="url(#arc-arrowhead-solid)"
                    />
                    {/* Arc 3: Bottom-Left */}
                    <path
                      d="M 80,173 A 76,76 0 0,1 27,120"
                      fill="none"
                      stroke="white"
                      strokeWidth="1.0"
                      strokeLinecap="round"
                      opacity="0.8"
                      markerEnd="url(#arc-arrowhead-solid)"
                    />
                    {/* Arc 4: Top-Left */}
                    <path
                      d="M 27,80 A 76,76 0 0,1 80,27"
                      fill="none"
                      stroke="white"
                      strokeWidth="1.0"
                      strokeLinecap="round"
                      opacity="0.8"
                      markerEnd="url(#arc-arrowhead-solid)"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* ── Right Column Nodes ── */}
            <div className="flex flex-col items-center gap-6 sm:gap-10 md:gap-14 lg:gap-28 w-full">
              {/* Top-Right: AUTOMATE */}
              <div className="gsap-flywheel-node flex flex-col items-center text-center space-y-1 sm:space-y-2 max-w-[105px] xs:max-w-[130px] sm:max-w-[180px] md:max-w-[200px] lg:max-w-[260px] xl:max-w-[280px]">
                <div className="w-8 h-8 xs:w-10 xs:h-10 sm:w-13 sm:h-13 md:w-13 md:h-13 lg:w-16 lg:h-16 relative flex items-center justify-center transition-transform duration-300 hover:scale-110">
                  <Image
                    src={stages[1].image}
                    alt={stages[1].title}
                    width={64}
                    height={64}
                    className="w-full h-full object-contain filter drop-shadow-sm"
                    unoptimized
                  />
                </div>
                <h3
                  className="text-base sm:text-xl md:text-2xl lg:text-3xl font-semibold tracking-normal text-neutral-950"
                  style={{ fontFamily: 'var(--font-pp-editorial)' }}
                >
                  {stages[1].title}
                </h3>
                <p className="text-[10px] sm:text-xs md:text-[13px] lg:text-base text-neutral-800 leading-tight sm:leading-normal font-normal">
                  {stages[1].description}
                </p>
              </div>

              {/* Bottom-Right: INTELLIGENCE */}
              <div className="gsap-flywheel-node flex flex-col items-center text-center space-y-1 sm:space-y-2 max-w-[105px] xs:max-w-[130px] sm:max-w-[180px] md:max-w-[200px] lg:max-w-[260px] xl:max-w-[280px]">
                <div className="w-8 h-8 xs:w-10 xs:h-10 sm:w-13 sm:h-13 md:w-13 md:h-13 lg:w-16 lg:h-16 relative flex items-center justify-center transition-transform duration-300 hover:scale-110">
                  <Image
                    src={stages[2].image}
                    alt={stages[2].title}
                    width={64}
                    height={64}
                    className="w-full h-full object-contain filter drop-shadow-sm"
                    unoptimized
                  />
                </div>
                <h3
                  className="text-base sm:text-xl md:text-2xl lg:text-3xl font-semibold tracking-normal text-neutral-950"
                  style={{ fontFamily: 'var(--font-pp-editorial)' }}
                >
                  {stages[2].title}
                </h3>
                <p className="text-[10px] sm:text-xs md:text-[13px] lg:text-base text-neutral-800 leading-tight sm:leading-normal font-normal">
                  {stages[2].description}
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
