'use client';

import React, { useRef, useState, useEffect, useLayoutEffect } from 'react';
import {
  ArrowRight,
  ArrowUpRight,
} from 'lucide-react';
import gsap from 'gsap';

const HERO_KEY_PHRASES = [
  'GenAI & Automation',
  'AI workflow agents',
  'SEO & AI SEO',
  'Digital marketing',
  'Websites & software',
];

export default function Hero3() {
  const containerRef = useRef<HTMLDivElement>(null);
  const keyphraseRef = useRef<HTMLSpanElement>(null);
  const [phraseIndex, setPhraseIndex] = useState(0);
  const isAnimatingRef = useRef(false);

  // GSAP Ultra-Smooth In-Place Blur & Fade Animation (Stationary, 5.0 seconds interval)
  useEffect(() => {
    const interval = setInterval(() => {
      if (!keyphraseRef.current || isAnimatingRef.current) return;
      isAnimatingRef.current = true;

      // 1. GSAP Blur & Fade Out In-Place (No vertical y shift)
      gsap.to(keyphraseRef.current, {
        opacity: 0,
        filter: 'blur(10px)',
        duration: 0.6,
        ease: 'power2.inOut',
        onComplete: () => {
          setPhraseIndex((prev) => (prev + 1) % HERO_KEY_PHRASES.length);

          // 2. GSAP Blur & Fade In In-Place (No vertical y shift)
          gsap.fromTo(
            keyphraseRef.current,
            { opacity: 0, filter: 'blur(10px)' },
            {
              opacity: 1,
              filter: 'blur(0px)',
              duration: 0.8,
              ease: 'power3.out',
              onComplete: () => {
                isAnimatingRef.current = false;
              },
            }
          );
        },
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Initialize UnicornStudio Aura Background Script
  useEffect(() => {
    const initUnicorn = () => {
      if ((window as any).UnicornStudio?.init) {
        (window as any).UnicornStudio.init();
        (window as any).UnicornStudio.isInitialized = true;
      }
    };

    if (!(window as any).UnicornStudio) {
      (window as any).UnicornStudio = { isInitialized: false };
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.1.0-1/dist/unicornStudio.umd.js';
      script.onload = () => {
        if (document.readyState === 'loading') {
          document.addEventListener('DOMContentLoaded', initUnicorn);
        } else {
          initUnicorn();
        }
      };
      (document.head || document.body).appendChild(script);
    } else if (!(window as any).UnicornStudio.isInitialized && (window as any).UnicornStudio.init) {
      initUnicorn();
    }
  }, []);

  // GSAP Entrance Animations
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      // Stagger center elements reveal
      tl.fromTo(
        '.gsap-hero3-center > *',
        { y: 35, opacity: 0, filter: 'blur(8px)' },
        { y: 0, opacity: 1, filter: 'blur(0px)', duration: 0.8, stagger: 0.12, delay: 0.1 }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full flex items-center justify-center bg-white text-neutral-900 pt-8 sm:pt-14 md:pt-20 pb-12 sm:pb-20 md:pb-28 overflow-hidden"
    >
      {/* Soft Ambient 4-Color Gradient Fade Background (Green, Yellow, Blue, Red) */}
      <div className="absolute inset-0 z-0 h-full w-full bg-white pointer-events-none overflow-hidden">
        {/* Layer 1: Radial Arc Base Gradient */}
        <div
          className="absolute inset-0 opacity-85 pointer-events-none"
          style={{
            background: `
              radial-gradient(ellipse 135% 85% at 50% 20%, 
                #ffffff 40%, 
                rgba(191, 219, 254, 0.28) 60%, 
                rgba(187, 247, 208, 0.28) 74%, 
                rgba(254, 243, 199, 0.3) 86%, 
                rgba(254, 205, 211, 0.32) 100%
              )
            `,
          }}
        />

        {/* Ambient Color Glow Orbs */}
        <div className="absolute -top-[15%] -left-[10%] w-[380px] h-[380px] sm:w-[650px] sm:h-[650px] rounded-full bg-gradient-to-br from-blue-400/25 via-cyan-300/20 to-transparent blur-[80px] sm:blur-[130px] pointer-events-none" />
        <div className="absolute -top-[15%] -right-[10%] w-[380px] h-[380px] sm:w-[650px] sm:h-[650px] rounded-full bg-gradient-to-bl from-amber-400/25 via-yellow-300/20 to-transparent blur-[80px] sm:blur-[130px] pointer-events-none" />
        <div className="absolute -bottom-[20%] -left-[8%] w-[360px] h-[360px] sm:w-[620px] sm:h-[620px] rounded-full bg-gradient-to-tr from-emerald-500/25 via-teal-400/20 to-transparent blur-[80px] sm:blur-[130px] pointer-events-none" />
        <div className="absolute -bottom-[20%] -right-[8%] w-[360px] h-[360px] sm:w-[620px] sm:h-[620px] rounded-full bg-gradient-to-tl from-red-500/25 via-rose-400/20 to-transparent blur-[80px] sm:blur-[130px] pointer-events-none" />

        {/* Center Contrast Lens */}
        <div
          className="absolute inset-0 pointer-events-none opacity-90"
          style={{
            background: 'radial-gradient(ellipse 90% 70% at 50% 25%, #ffffff 42%, rgba(255,255,255,0.75) 65%, rgba(255,255,255,0) 100%)',
          }}
        />
      </div>

      {/* Analog Noise Texture Overlay */}
      <div
        className="absolute inset-0 z-2 opacity-[0.035] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Main Center Content Container */}
      <div className="relative z-30 max-w-4xl mx-auto px-4 sm:px-8 md:px-14 lg:px-20 text-center flex flex-col items-center">
        <div className="gsap-hero3-center flex flex-col items-center text-center space-y-3.5 sm:space-y-4 md:space-y-5 max-w-3xl">

          {/* Category Badge Pill */}
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 py-1.5 sm:px-3.5 sm:py-1.5 rounded-lg bg-neutral-100/90 border border-neutral-200/70 text-neutral-700 text-[9px] min-[360px]:text-[10px] sm:text-[11px] font-semibold tracking-[0.08em] min-[360px]:tracking-[0.14em] sm:tracking-[0.2em] uppercase shadow-2xs select-none max-w-full">
            <span className="flex h-1.5 w-1.5 sm:h-2 sm:w-2 relative shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 sm:h-2 sm:w-2 bg-blue-600" />
            </span>
            <span className="truncate">LET&apos;S BRING LIFE TO YOUR IDEA</span>
          </div>

          {/* Central Core Headline: Single-Line Main Sentence Across Desktop, Tablet & Mobile (<425px) */}
          <h1
            className="text-[35px] min-[360px]:text-[17px] min-[400px]:text-[19px] sm:text-3xl md:text-[42px] lg:text-[48px] font-medium tracking-tight text-neutral-950 leading-snug sm:leading-tight max-w-5xl mx-auto select-none text-center flex flex-col items-center justify-center space-y-1 sm:space-y-1.5 px-1 sm:px-0"
            style={{ fontFamily: 'var(--font-grotesk-neue)' }}
          >
            {/* Line 1: Always in ONE single unbroken line across Desktop, Tablet & Mobile (<425px) */}
            <span
              className="whitespace-nowrap block font-medium text-neutral-950 tracking-tight text-center"
              style={{ fontFamily: 'var(--font-grotesk-neue)' }}
            >
              Empowering businesses to scale with
            </span>

            {/* Line 2: Rotating Keyphrase centered directly underneath */}
            <span className="block min-h-[1.3em] flex items-center justify-center">
              <span
                ref={keyphraseRef}
                className="inline-block font-normal italic align-baseline bg-gradient-to-r from-blue-600 via-emerald-500 via-amber-500 to-red-500 bg-clip-text text-transparent pr-2 sm:pr-3 py-0.5 will-change-[opacity,filter]"
                style={{ fontFamily: 'var(--font-pp-editorial)' }}
              >
                {HERO_KEY_PHRASES[phraseIndex]}
              </span>
            </span>
          </h1>

          {/* Subtitle / Description */}
          <p className="text-[12px] min-[360px]:text-[13px] sm:text-base md:text-lg text-neutral-600 font-sans leading-relaxed max-w-2xl font-normal px-2 sm:px-0">
            We help startups, businesses, and enterprises automate workflows, build intelligent AI solutions, develop scalable software, create high-performance websites, and accelerate digital growth through data-driven marketing.
          </p>

          {/* Dual CTA Buttons */}
          <div className="pt-2 sm:pt-3 space-y-3.5 sm:space-y-4 w-full flex flex-col items-center">
            <div className="flex flex-row items-center justify-center gap-2 sm:gap-3.5 w-auto max-w-full">
              <a
                href="#contact"
                className="group inline-flex items-center gap-1 sm:gap-1.5 cursor-pointer select-none"
              >
                {/* Left Pill Text Container */}
                <div className="relative overflow-hidden inline-flex items-center justify-center px-3.5 py-1.5 min-[360px]:px-4 min-[360px]:py-2 sm:px-5 sm:py-2.5 rounded-full border border-neutral-950 text-neutral-950 font-semibold text-[11px] min-[360px]:text-xs sm:text-sm tracking-wider uppercase transition-colors duration-500 group-hover:border-neutral-950 group-hover:text-white">
                  {/* Expanding Fill Circle Originating from Center Point */}
                  <span className="absolute inset-0 bg-neutral-950 rounded-full scale-0 group-hover:scale-110 transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] origin-center pointer-events-none" />
                  
                  {/* Button Text */}
                  <span className="relative z-10 font-semibold tracking-wider">
                    Book a Demo
                  </span>
                </div>

                {/* Separate Right Arrow Circle */}
                <div className="relative overflow-hidden w-7 h-7 min-[360px]:w-8 min-[360px]:h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full border border-neutral-950 text-neutral-950 flex items-center justify-center transition-colors duration-500 group-hover:border-neutral-950 group-hover:text-white shrink-0">
                  {/* Expanding Fill Circle Originating from Center Point */}
                  <span className="absolute inset-0 bg-neutral-950 rounded-full scale-0 group-hover:scale-110 transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] origin-center pointer-events-none" />

                  {/* Arrow Icon */}
                  <ArrowUpRight className="relative z-10 w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] " />
                </div>
              </a>
              {/* <a
                href="#services"
                className="inline-flex items-center justify-center px-4 py-2 sm:px-6 sm:py-3 rounded-full bg-white/95 hover:bg-neutral-100 text-neutral-800 border border-neutral-200/90 font-medium text-[11px] sm:text-xs md:text-sm transition-all active:scale-95 text-center shrink-0 shadow-2xs backdrop-blur-xl"
              >
                View Portfolio
              </a> */}
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Ambient Gradient Fade Overlay into SubHero section */}
      <div className="absolute bottom-0 inset-x-0 h-24 sm:h-32 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none z-20" />
    </section>
  );
}
