'use client';

import React, { useRef, useLayoutEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { AuroraHero } from '@/components/ui/aurora-hero';

export default function Hero5() {
  const containerRef = useRef<HTMLDivElement>(null);

  // GSAP Entrance Animations for Content
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        '.gsap-hero5-center > *',
        { y: 35, opacity: 0, filter: 'blur(8px)' },
        { y: 0, opacity: 1, filter: 'blur(0px)', duration: 0.8, stagger: 0.12, delay: 0.1 }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="w-full">
      <AuroraHero>
        <div className="gsap-hero5-center flex flex-col items-center text-center space-y-4 sm:space-y-5 md:space-y-6 max-w-3xl py-12 sm:py-16">

          {/* Category Badge Pill */}
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white/95 border border-neutral-200/90 text-neutral-800 text-[10px] sm:text-xs font-medium tracking-wide shadow-2xs backdrop-blur-xl">
            <span className="flex h-1.5 w-1.5 sm:h-2 sm:w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 sm:h-2 sm:w-2 bg-blue-600" />
            </span>
            <span className="uppercase text-[9px] sm:text-[11px] font-medium text-neutral-700 tracking-wider">
              Let&apos;s Bring Life to Your Idea
            </span>
          </div>

          {/* Central Core Headline */}
          <h1
            className="text-2xl sm:text-4xl md:text-5xl lg:text-[54px] xl:text-[58px] font-medium tracking-tight text-neutral-950 leading-snug sm:leading-tight max-w-3xl px-1 sm:px-0"
            style={{ fontFamily: 'var(--font-grotesk-neue)' }}
          >
            Empowering Businesses to Scale with{' '}
            <span
              className="font-serif font-medium bg-gradient-to-r from-blue-600 via-emerald-500 via-amber-500 to-red-500 bg-clip-text text-transparent"
              style={{ fontFamily: 'var(--font-pp-editorial)' }}
            >
              AI, Automation
            </span>{' '}
            <span
              className="font-serif font-medium bg-gradient-to-r from-blue-600 via-emerald-500 via-amber-500 to-red-500 bg-clip-text text-transparent"
              style={{ fontFamily: 'var(--font-pp-editorial)' }}
            >
              &amp; Digital Solutions
            </span>
          </h1>

          {/* Subtitle / Description */}
          <p className="text-[13px] sm:text-base md:text-lg text-neutral-600 font-sans leading-relaxed max-w-2xl font-normal px-1 sm:px-0">
            We help startups, businesses, and enterprises automate workflows, build intelligent AI solutions, develop scalable software, create high-performance websites, and accelerate digital growth through data-driven marketing.
          </p>

          {/* Dual CTA Buttons */}
          <div className="pt-2 sm:pt-4 space-y-3.5 sm:space-y-4 w-full flex flex-col items-center">
            <div className="flex flex-row items-center justify-center gap-3 sm:gap-4 w-auto">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-1.5 sm:gap-2 px-5 py-2.5 sm:px-8 sm:py-3.5 rounded-full bg-neutral-950 hover:bg-neutral-800 text-white font-medium text-xs sm:text-sm tracking-wide transition-all shadow-md hover:shadow-lg active:scale-95 group text-center shrink-0"
              >
                <span>Book a Demo</span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center px-5 py-2.5 sm:px-8 sm:py-3.5 rounded-full bg-white/95 hover:bg-neutral-100 text-neutral-800 border border-neutral-200/90 font-medium text-xs sm:text-sm transition-all active:scale-95 text-center shrink-0 shadow-2xs backdrop-blur-xl"
              >
                View Portfolio
              </a>
            </div>
          </div>

        </div>
      </AuroraHero>
    </div>
  );
}
