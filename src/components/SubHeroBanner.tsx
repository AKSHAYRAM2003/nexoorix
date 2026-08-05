'use client';

import React, { useRef, useLayoutEffect } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function SubHeroBanner() {
  const bannerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Badges reveal on scroll (Staggered bounce entrance with reverse on scroll up)
      gsap.fromTo(
        '.gsap-subhero-badge',
        { y: 25, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: 'back.out(1.5)',
          scrollTrigger: {
            trigger: bannerRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // 2. Headline word-by-word blur reveal (with reverse on scroll up)
      gsap.fromTo(
        '.gsap-subhero-word',
        { opacity: 0.15, filter: 'blur(4px)', y: 12 },
        {
          opacity: 1,
          filter: 'blur(0px)',
          y: 0,
          stagger: 0.10,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.gsap-subhero-headline',
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // 3. Subtitle description blur & opacity reveal (with reverse on scroll up)
      gsap.fromTo(
        '.gsap-subhero-desc',
        { opacity: 0.15, filter: 'blur(4px)', y: 12 },
        {
          opacity: 1,
          filter: 'blur(0px)',
          y: 0,
          duration: 0.85,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.gsap-subhero-desc',
            start: 'top 88%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // 4. Side graphics slide in on scroll (with reverse on scroll up)
      gsap.fromTo(
        '.gsap-subhero-left-img',
        { x: -60, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.9,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: bannerRef.current,
            start: 'top 82%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      gsap.fromTo(
        '.gsap-subhero-right-img',
        { x: 60, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.9,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: bannerRef.current,
            start: 'top 82%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, bannerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={bannerRef}
      className="relative w-full bg-white text-neutral-900 pt-4 sm:pt-6 md:pt-10 pb-12 sm:pb-16 md:pb-20 overflow-hidden"
    >
      {/* Background ambient subtle glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(240,244,255,0.6),rgba(255,255,255,0))] pointer-events-none" />

      {/* Left Decorative Image Graphic — Larger size with generous side space */}
      <div className="gsap-subhero-left-img absolute left-0 top-1/2 -translate-y-1/2 hidden sm:block w-[56px] sm:w-[84px] md:w-[108px] lg:w-[136px] 2xl:w-[160px] pointer-events-none select-none z-0 opacity-85 sm:opacity-95">
        <Image
          src="/assets/iamges/sub-left1.png"
          alt="Nexoorix Decorative Left Accent"
          width={512}
          height={835}
          className="w-full h-auto object-contain object-left"
          priority
        />
      </div>

      {/* Right Decorative Image Graphic — Larger size with generous side space */}
      <div className="gsap-subhero-right-img absolute right-0 top-1/2 -translate-y-1/2 hidden sm:block w-[84px] sm:w-[124px] md:w-[160px] lg:w-[204px] 2xl:w-[240px] pointer-events-none select-none z-0 opacity-85 sm:opacity-95">
        <Image
          src="/assets/iamges/sub-right1.png"
          alt="Nexoorix Decorative Right Accent"
          width={668}
          height={733}
          className="w-full h-auto object-contain object-right"
          priority
        />
      </div>

      {/* Main Center Content Container */}
      <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-14 md:px-20 lg:px-28 text-center flex flex-col items-center space-y-3.5 sm:space-y-5 md:space-y-6">
        {/* Uppercase Business Action Badges */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2.5">
          <span className="gsap-subhero-badge px-2.5 py-1 sm:px-4 sm:py-1.5 rounded-lg bg-neutral-100/90 border border-neutral-200/70 text-neutral-700 text-[8.5px] min-[360px]:text-[9.5px] sm:text-[11px] font-semibold tracking-[0.1em] sm:tracking-[0.2em] uppercase shadow-2xs">
            AUTOMATE
          </span>
          <span className="gsap-subhero-badge px-2.5 py-1 sm:px-4 sm:py-1.5 rounded-lg bg-neutral-100/90 border border-neutral-200/70 text-neutral-700 text-[8.5px] min-[360px]:text-[9.5px] sm:text-[11px] font-semibold tracking-[0.1em] sm:tracking-[0.2em] uppercase shadow-2xs">
            BUILD
          </span>
          <span className="gsap-subhero-badge px-2.5 py-1 sm:px-4 sm:py-1.5 rounded-lg bg-neutral-100/90 border border-neutral-200/70 text-neutral-700 text-[8.5px] min-[360px]:text-[9.5px] sm:text-[11px] font-semibold tracking-[0.1em] sm:tracking-[0.2em] uppercase shadow-2xs">
            SCALE
          </span>
          <span className="gsap-subhero-badge px-2.5 py-1 sm:px-4 sm:py-1.5 rounded-lg bg-neutral-100/90 border border-neutral-200/70 text-neutral-700 text-[8.5px] min-[360px]:text-[9.5px] sm:text-[11px] font-semibold tracking-[0.1em] sm:tracking-[0.2em] uppercase shadow-2xs">
            AMPLIFY
          </span>
        </div>

        {/* Central Core Headline: Line 1 + Line 2 Keyphrase for Generous Side Space */}
        <h2
          className="gsap-subhero-headline text-[20px] min-[360px]:text-2xl sm:text-3xl md:text-[42px] font-medium tracking-tight text-neutral-950 leading-snug sm:leading-tight flex flex-col items-center justify-center select-none space-y-0.5 sm:space-y-1"
          style={{ fontFamily: 'var(--font-grotesk-neue)' }}
        >
          {/* Line 1 */}
          <span className="flex flex-wrap items-baseline justify-center gap-x-[0.28em]">
            {['Every', 'workflow', 'is', 'an'].map((word, idx) => (
              <span
                key={idx}
                className="gsap-subhero-word inline-block align-baseline font-medium text-neutral-950 will-change-[transform,opacity,filter]"
                style={{ fontFamily: 'var(--font-grotesk-neue)' }}
              >
                {word}
              </span>
            ))}
          </span>

          {/* Line 2: Keyphrase on its own centered line */}
          <span
            className="gsap-subhero-word inline-block align-baseline font-normal italic text-neutral-900 will-change-[transform,opacity,filter] pr-2 py-0.5"
            style={{ fontFamily: 'var(--font-pp-editorial)' }}
          >
            opportunity
          </span>
        </h2>

        {/* Subtitle / Business Description */}
        <p className="gsap-subhero-desc text-xs sm:text-base md:text-lg text-neutral-600 font-sans leading-relaxed max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl mx-auto font-normal will-change-[transform,opacity,filter] px-2 sm:px-0">
          Nexoorix is built to help you automate operations in real time, convert leads into active growth, scale intelligent AI solutions with clarity, and amplify your brand&apos;s market presence.
        </p>
      </div>
    </section>
  );
}
