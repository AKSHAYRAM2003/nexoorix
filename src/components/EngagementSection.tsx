'use client';

import React, { useRef, useLayoutEffect } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function EngagementSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Pill Badge Scroll Reveal
      gsap.fromTo(
        '.gsap-engagement-pill',
        { opacity: 0, y: 18 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.gsap-engagement-pill',
            start: 'top 88%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // 2. Headline Word Reveal with Blur & Stagger (matching ServicesSection)
      gsap.fromTo(
        '.gsap-engagement-word',
        { opacity: 0.15, filter: 'blur(4px)', y: 12 },
        {
          opacity: 1,
          filter: 'blur(0px)',
          y: 0,
          stagger: 0.10,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.gsap-engagement-headline',
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // 3. Paragraph Blur & Opacity Scroll Reveal (matching ServicesSection)
      gsap.fromTo(
        '.gsap-engagement-para',
        { opacity: 0.15, filter: 'blur(4px)', y: 12 },
        {
          opacity: 1,
          filter: 'blur(0px)',
          y: 0,
          duration: 0.85,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.gsap-engagement-para',
            start: 'top 88%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Left pixel grid slides in from left
      gsap.fromTo(
        '.gsap-engagement-left-img',
        { x: -60, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.9,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Right pixel grid slides in from right
      gsap.fromTo(
        '.gsap-engagement-right-img',
        { x: 60, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.9,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
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
      className="relative w-full bg-white text-neutral-900 overflow-hidden"
      style={{ minHeight: '480px' }}
    >
      {/* ─── Center Text Content ─── */}
      <div className="relative z-20 flex flex-col items-center text-center px-4 sm:px-12 md:px-0 pt-10 sm:pt-20 pb-28 sm:pb-56 md:pb-72">
        <div className="flex flex-col items-center gap-3.5 sm:gap-5 max-w-2xl">

          {/* Top Pill Badge */}
          <div className="gsap-engagement-pill inline-flex items-center justify-center px-3.5 py-1.5 rounded-lg bg-neutral-100/90 border border-neutral-200/70 text-neutral-700 text-[9px] sm:text-[11px] font-semibold tracking-[0.15em] sm:tracking-[0.2em] uppercase shadow-2xs max-w-full">
            AUTOMATE WORKFLOWS. DRIVE BUSINESS.
          </div>

          {/* Headline */}
          <h2
            className="gsap-engagement-headline text-xl sm:text-3xl md:text-[42px] font-medium tracking-tight text-neutral-950 leading-snug sm:leading-tight flex flex-wrap items-baseline justify-center gap-x-[0.28em] select-none"
            style={{ fontFamily: 'var(--font-grotesk-neue)' }}
          >
            {['Every', 'business', 'deserves', 'real'].map((word, idx) => (
              <span
                key={idx}
                className="gsap-engagement-word inline-block align-baseline font-medium text-neutral-950 will-change-[transform,opacity,filter]"
                style={{ fontFamily: 'var(--font-grotesk-neue)' }}
              >
                {word}
              </span>
            ))}
            <span
              className="gsap-engagement-word inline-block align-baseline font-normal italic text-neutral-900 will-change-[transform,opacity,filter]"
              style={{ fontFamily: 'var(--font-pp-editorial)' }}
            >
              engagement
            </span>
          </h2>

          {/* Subtitle / Paragraph matching ServicesSection standard */}
          <p className="gsap-engagement-para text-sm sm:text-base md:text-lg text-neutral-600 font-sans leading-relaxed max-w-2xl mx-auto font-normal will-change-[transform,opacity,filter] px-2 sm:px-0">
            No more dead ends. No more lost opportunities. Nexoorix engages, converts, and automates every client interaction. Ready to reimagine your business for the AI age?
          </p>

          {/* CTA Button */}
          <div className="pt-1 sm:pt-2">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-neutral-950 hover:bg-neutral-800 text-white font-medium text-xs sm:text-sm tracking-wide transition-all shadow-md hover:shadow-lg active:scale-95"
            >
              Book a Personalized Demo
            </a>
          </div>

        </div>
      </div>

      {/* ─── Left Pixel Grid — attached to bottom-left ─── */}
      <div
        className="gsap-engagement-left-img absolute bottom-0 left-0 pointer-events-none select-none z-10"
        style={{ width: 'clamp(140px, 38vw, 560px)' }}
      >
        <Image
          src="/assets/iamges/b-left.png"
          alt="Nexoorix AI Pixel Grid — Left"
          width={900}
          height={680}
          className="w-full h-auto object-left-bottom"
          sizes="(max-width: 640px) 140px, (max-width: 1024px) 40vw, 560px"
          priority
        />
      </div>

      {/* ─── Right Pixel Grid — attached flush to right side line & bottom edge ─── */}
      <div
        className="gsap-engagement-right-img absolute bottom-0 right-0 pointer-events-none select-none z-10"
        style={{ width: 'clamp(140px, 38vw, 560px)' }}
      >
        <Image
          src="/assets/iamges/b-right.png"
          alt="Nexoorix Growth Pixel Grid — Right"
          width={900}
          height={680}
          className="w-full h-auto object-right-bottom"
          sizes="(max-width: 640px) 140px, (max-width: 1024px) 40vw, 560px"
          priority
        />
      </div>
    </section>
  );
}
