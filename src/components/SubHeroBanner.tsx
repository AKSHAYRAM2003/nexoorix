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

      {/* Left Decorative Image Graphic */}
      <div className="gsap-subhero-left-img absolute left-0 top-1/2 -translate-y-1/2 hidden sm:block w-[48px] sm:w-[72px] md:w-[96px] lg:w-[128px] pointer-events-none select-none z-10">
        <Image
          src="/assets/iamges/sub-left1.png"
          alt="Nexoorix Decorative Left Accent"
          width={512}
          height={835}
          className="w-full h-auto object-contain object-left"
          priority
        />
      </div>

      {/* Right Decorative Image Graphic */}
      <div className="gsap-subhero-right-img absolute right-0 top-1/2 -translate-y-1/2 hidden sm:block w-[72px] sm:w-[108px] md:w-[144px] lg:w-[192px] pointer-events-none select-none z-10">
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
      <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-20 md:px-32 lg:px-44 text-center flex flex-col items-center space-y-4 sm:space-y-5 md:space-y-6">
        {/* Uppercase Business Action Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
          <span className="gsap-subhero-badge px-4 py-1.5 rounded-lg bg-neutral-100/90 border border-neutral-200/70 text-neutral-700 text-[10px] sm:text-[11px] font-semibold tracking-[0.2em] uppercase shadow-2xs">
            AUTOMATE
          </span>
          <span className="gsap-subhero-badge px-4 py-1.5 rounded-lg bg-neutral-100/90 border border-neutral-200/70 text-neutral-700 text-[10px] sm:text-[11px] font-semibold tracking-[0.2em] uppercase shadow-2xs">
            BUILD
          </span>
          <span className="gsap-subhero-badge px-4 py-1.5 rounded-lg bg-neutral-100/90 border border-neutral-200/70 text-neutral-700 text-[10px] sm:text-[11px] font-semibold tracking-[0.2em] uppercase shadow-2xs">
            SCALE
          </span>
          <span className="gsap-subhero-badge px-4 py-1.5 rounded-lg bg-neutral-100/90 border border-neutral-200/70 text-neutral-700 text-[10px] sm:text-[11px] font-semibold tracking-[0.2em] uppercase shadow-2xs">
            AMPLIFY
          </span>
        </div>

        {/* Central Core Headline */}
        <h2
          className="gsap-subhero-headline text-2xl sm:text-3xl md:text-[42px] font-medium tracking-tight text-neutral-950 leading-snug sm:leading-tight flex flex-wrap items-baseline justify-center gap-x-[0.28em] select-none"
          style={{ fontFamily: 'var(--font-grotesk-neue)' }}
        >
          {['Every', 'workflow', 'is', 'an'].map((word, idx) => (
            <span
              key={idx}
              className="gsap-subhero-word inline-block align-baseline font-medium text-neutral-950 will-change-[transform,opacity,filter]"
              style={{ fontFamily: 'var(--font-grotesk-neue)' }}
            >
              {word}
            </span>
          ))}
          <span
            className="gsap-subhero-word inline-block align-baseline font-normal italic text-neutral-900 will-change-[transform,opacity,filter]"
            style={{ fontFamily: 'var(--font-pp-editorial)' }}
          >
            opportunity
          </span>
        </h2>

        {/* Subtitle / Business Description */}
        <p className="gsap-subhero-desc text-sm sm:text-base md:text-lg text-neutral-600 font-sans leading-relaxed max-w-2xl mx-auto font-normal will-change-[transform,opacity,filter]">
          Nexoorix is built to help you automate operations in real time, convert leads into active growth, scale intelligent AI solutions with clarity, and amplify your brand&apos;s market presence.
        </p>
      </div>
    </section>
  );
}
