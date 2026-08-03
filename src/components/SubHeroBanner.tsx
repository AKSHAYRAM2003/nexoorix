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
      // 1. Badges reveal on scroll
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
            start: 'top 82%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // 2. Main title reveal on scroll
      gsap.fromTo(
        '.gsap-subhero-title',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.gsap-subhero-title',
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // 3. Subtitle description reveal on scroll
      gsap.fromTo(
        '.gsap-subhero-desc',
        { y: 25, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.gsap-subhero-desc',
            start: 'top 88%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // 4. Side graphics slide in on scroll
      gsap.fromTo(
        '.gsap-subhero-left-img',
        { x: -40, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: bannerRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      gsap.fromTo(
        '.gsap-subhero-right-img',
        { x: 40, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: bannerRef.current,
            start: 'top 85%',
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
      className="relative w-full bg-white text-neutral-900 border-t border-neutral-100/80 py-14 sm:py-10 md:py-20 overflow-hidden"
    >
      {/* Background ambient subtle glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(240,244,255,0.6),rgba(255,255,255,0))] pointer-events-none" />

      {/* Left Decorative Image Graphic - Scaled so individual block size matches right side perfectly */}
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

      {/* Right Decorative Image Graphic - Scaled so individual block size matches left side perfectly */}
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

      {/* Main Center Content Container - Constrained horizontal padding so content fits between side graphics */}
      <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-20 md:px-32 lg:px-44 text-center flex flex-col items-center space-y-4 sm:space-y-5 md:space-y-6">
        {/* Uppercase Business Action Badges */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 md:gap-2.5">
          <span className="gsap-subhero-badge px-2.5 sm:px-3.5 md:px-4 py-1 sm:py-1.5 rounded-full bg-neutral-100/90 border border-neutral-200/70 text-neutral-700 text-[9px] sm:text-[10px] md:text-xs font-semibold tracking-wider uppercase shadow-2xs">
            AUTOMATE
          </span>
          <span className="gsap-subhero-badge px-2.5 sm:px-3.5 md:px-4 py-1 sm:py-1.5 rounded-full bg-neutral-100/90 border border-neutral-200/70 text-neutral-700 text-[9px] sm:text-[10px] md:text-xs font-semibold tracking-wider uppercase shadow-2xs">
            BUILD
          </span>
          <span className="gsap-subhero-badge px-2.5 sm:px-3.5 md:px-4 py-1 sm:py-1.5 rounded-full bg-neutral-100/90 border border-neutral-200/70 text-neutral-700 text-[9px] sm:text-[10px] md:text-xs font-semibold tracking-wider uppercase shadow-2xs">
            SCALE
          </span>
          <span className="gsap-subhero-badge px-2.5 sm:px-3.5 md:px-4 py-1 sm:py-1.5 rounded-full bg-neutral-100/90 border border-neutral-200/70 text-neutral-700 text-[9px] sm:text-[10px] md:text-xs font-semibold tracking-wider uppercase shadow-2xs">
            AMPLIFY
          </span>
        </div>

        {/* Central Core Headline */}
        <h2 className="gsap-subhero-title text-xl sm:text-2xl md:text-3xl lg:text-[42px] font-medium tracking-tight text-neutral-950 leading-snug sm:leading-tight">
          Every workflow is an{' '}
          <span className="font-serif italic font-normal text-neutral-800">
            opportunity
          </span>
        </h2>

        {/* Subtitle / Business Description */}
        <p className="gsap-subhero-desc text-sm sm:text-md md:text-base text-neutral-600 font-sans leading-relaxed max-w-2xl font-normal">
          Nexoorix is built to help you automate operations in real time, convert leads into active growth, scale intelligent AI solutions with clarity, and amplify your brand&apos;s market presence.
        </p>
      </div>
    </section>
  );
}
