'use client';

import React, { useRef, useEffect, useLayoutEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import gsap from 'gsap';

export default function Hero4() {
  const containerRef = useRef<HTMLDivElement>(null);
  const bgContainerRef = useRef<HTMLDivElement>(null);

  // 1. Dynamic Stepped Gradient Bar Generator & Animation Loop (Light Mode Bluish & Green Gradient)
  useEffect(() => {
    const container = bgContainerRef.current;
    if (!container) return;

    // Clear any previous bars
    container.innerHTML = '';

    const numBars = 23;
    const bars: { el: HTMLDivElement; baseHeight: number; index: number }[] = [];
    const centerIndex = Math.floor(numBars / 2);

    for (let i = 0; i < numBars; i++) {
      const bar = document.createElement('div');
      bar.className = 'flex-1 h-full w-full opacity-90 transition-transform origin-bottom';

      const dist = Math.abs(i - centerIndex);
      const normDist = dist / centerIndex;
      const baseHeight = 22 + Math.pow(normDist, 1.4) * 68;

      bar.style.height = `${baseHeight}%`;
      // Light Mode Vibrant Bluish & Green Stepped Gradient
      bar.style.background =
        'linear-gradient(to top, #ffffff 0%, rgba(236, 253, 245, 0.9) 20%, rgba(207, 250, 254, 0.75) 45%, rgba(147, 197, 253, 0.6) 70%, rgba(52, 211, 153, 0.35) 90%, transparent 100%)';
      bar.style.borderRight = '1px solid rgba(226, 232, 240, 0.6)';
      bar.style.borderLeft = '1px solid rgba(226, 232, 240, 0.6)';

      container.appendChild(bar);
      bars.push({ el: bar, baseHeight, index: i });
    }

    let animationFrameId: number;
    const start = Date.now();

    function animateBackground() {
      const time = (Date.now() - start) * 0.001;

      bars.forEach((b) => {
        const wave = Math.sin(time * 1.2 + b.index * 0.25) * 2;
        b.el.style.height = `${b.baseHeight + wave}%`;

        const pulse = Math.sin(time * 1.5 + b.index * 0.15) * 0.05;
        b.el.style.opacity = `${0.9 + pulse}`;
      });

      animationFrameId = requestAnimationFrame(animateBackground);
    }

    animateBackground();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // 2. GSAP Entrance Animations for Content
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        '.gsap-hero4-center > *',
        { y: 35, opacity: 0, filter: 'blur(8px)' },
        { y: 0, opacity: 1, filter: 'blur(0px)', duration: 0.8, stagger: 0.12, delay: 0.1 }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full flex items-center justify-center bg-white text-neutral-900 min-h-screen pt-12 sm:pt-16 pb-16 sm:pb-24 overflow-hidden"
    >
      {/* 🔮 Dynamic Stepped Gradient Background Container — Light Mode Bluish & Green Palette */}
      <div
        ref={bgContainerRef}
        className="absolute inset-0 z-0 flex items-end justify-center px-0 pb-0 gap-0 pointer-events-none w-full"
        style={{
          maskImage: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.5) 6%, black 18%, black 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.5) 6%, black 18%, black 100%)',
        }}
      />

      {/* 🌫️ Top Soft White Blur Overlay — ONLY at Top Tips of Lines */}
      <div className="absolute top-0 left-0 right-0 h-32 sm:h-44 bg-gradient-to-b from-white via-white/70 to-transparent backdrop-blur-[3px] pointer-events-none z-1" />

      {/* ☀️ Feathered White Lens behind text for 100% crystal-clear readability */}
      <div
        className="absolute inset-0 z-5 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 90% 80% at 50% 35%, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.8) 55%, transparent 100%)',
        }}
      />

      {/* Main Center Content Container — High z-index (z-20) for crisp text contrast */}
      <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-8 md:px-14 lg:px-20 text-center flex flex-col items-center">
        <div className="gsap-hero4-center flex flex-col items-center text-center space-y-4 sm:space-y-5 md:space-y-6 max-w-3xl">
          
          {/* Category Badge Pill */}
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white/95 border border-neutral-200/90 text-neutral-800 text-[10px] sm:text-xs font-medium tracking-wide shadow-2xs backdrop-blur-xl">
            <span className="flex h-1.5 w-1.5 sm:h-2 sm:w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 sm:h-2 sm:w-2 bg-emerald-600" />
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
              className="font-serif font-medium bg-gradient-to-r from-blue-600 via-teal-500 to-emerald-500 bg-clip-text text-transparent"
              style={{ fontFamily: 'var(--font-pp-editorial)' }}
            >
              AI, Automation
            </span>{' '}
            <span
              className="font-serif font-medium bg-gradient-to-r from-blue-600 via-teal-500 to-emerald-500 bg-clip-text text-transparent"
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
      </div>
    </section>
  );
}
