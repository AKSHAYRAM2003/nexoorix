'use client';

import React, { useRef, useLayoutEffect } from 'react';
import Image from 'next/image';
import {
  ArrowRight,
  Workflow,
  Bot,
  Globe,
  TrendingUp,
  ShieldCheck,
  Layers,
} from 'lucide-react';
import gsap from 'gsap';

import { AvatarCircles } from './ui/avatar-circles';

const avatars = [
  {
    imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80',
    profileUrl: '#',
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80',
    profileUrl: '#',
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80',
    profileUrl: '#',
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&auto=format&fit=crop&q=80',
    profileUrl: '#',
  },
];

export default function Hero2() {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      // 1. Stagger left text content elements (badge, h1, p, marquee, dual CTA)
      tl.fromTo(
        '.gsap-hero-left > *',
        { y: 35, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, stagger: 0.1, delay: 0.3 }
      );

      // 2. Right showcase graphic image reveal
      tl.fromTo(
        '.gsap-hero-image',
        { scale: 0.94, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.8, ease: 'power2.out' },
        '-=0.5'
      );

      // 3. Stagger floating glass stat cards pop-in
      tl.fromTo(
        '.gsap-stat-card',
        { scale: 0.7, opacity: 0, y: 15 },
        { scale: 1, opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: 'back.out(1.7)' },
        '-=0.4'
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative w-full bg-white text-neutral-900 pt-2 sm:pt-4 pb-2 sm:pb-4 pl-4 sm:pl-6 md:pl-8 pr-4 sm:pr-0 flex flex-col justify-start overflow-hidden">
      {/* 2. Soft Background Glow & Faint Grid Lines */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(59,130,246,0.06),rgba(255,255,255,0))] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      {/* 3. Floating Blurred Brand Color Circles */}
      <div className="absolute top-1/4 left-10 w-96 h-96 rounded-full bg-blue-400/8 blur-[100px] pointer-events-none z-0" />
      <div className="absolute bottom-10 right-20 w-96 h-96 rounded-full bg-amber-400/8 blur-[100px] pointer-events-none z-0" />

      {/* Main Hero Container - 2 columns on tablet (sm:) and desktop */}
      <div className="relative z-10 w-full max-w-[1440px] ml-auto mr-auto grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12 items-center">
        {/* Left Side: Hierarchy, Copy, Dual CTA & Service Chips */}
        <div className="gsap-hero-left flex flex-col items-start text-left space-y-3 sm:space-y-4 md:space-y-5 max-w-full sm:max-w-md md:max-w-xl lg:max-w-2xl xl:max-w-[720px] pt-2 pb-2">
          {/* Top Category Badge Pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-neutral-100/90 border border-neutral-200/80 text-neutral-800 text-[10px] sm:text-xs font-semibold tracking-wide shadow-xs">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600" />
            </span>
            <span className="uppercase text-[10px] sm:text-[11px] font-bold text-neutral-700 tracking-wider">Let&apos;s Bring Life to Your Idea</span>
          </div>

          {/* Main Headline */}
          {/*
            Font sizes tuned so each line actually fits the ~50% column:
            lg col ≈ 560px → lg:text-[1.65rem] ≈ 26px  ✓ "Helping Businesses Grow Faster" = ~476px
            xl col ≈ 720px → xl:text-[2rem]    ≈ 32px  ✓ "Helping Businesses Grow Faster" = ~584px
            Gradient starts at "with" so the colour change never splits a line awkwardly.
          */}
          <h1 className="text-[1.55rem] sm:text-[1.75rem] md:text-[2rem] lg:text-[1.85rem] xl:text-[2.2rem] font-extrabold tracking-tight text-neutral-950 font-heading leading-[1.22] lg:leading-[1.2] xl:leading-[1.18]">
            Helping Businesses Grow Faster with{' '}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-700 to-blue-900 bg-clip-text text-transparent">
              AI, Automation &amp; Custom Software and AI SEO
            </span>
          </h1>

          {/* Subheadline Paragraph */}
          <p className="text-xs sm:text-xs md:text-sm lg:text-base text-neutral-700 font-sans leading-relaxed max-w-full font-normal pt-0.5 sm:pt-1">
            We help startups, businesses, and enterprises automate workflows, build intelligent AI solutions, develop scalable software, create high-performance websites, and accelerate digital growth through data-driven marketing.
          </p>

          {/* Service Chips Infinite Marquee */}
          <div className="w-full max-w-full overflow-hidden no-scrollbar pt-1 pb-0.5 relative group/marquee">
            {/* Left & Right Fade Gradients */}
            <div className="absolute left-0 top-0 bottom-0 w-6 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-6 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

            <div className="animate-marquee flex items-center gap-2 whitespace-nowrap">
              {/* Set 1 */}
              <div className="inline-flex shrink-0 items-center gap-1.5 sm:gap-2 pl-1.5 pr-2.5 sm:pr-3.5 py-1 rounded-full bg-white border border-neutral-200/90 shadow-2xs hover:border-blue-200 hover:bg-blue-50/30 text-neutral-800 text-[11px] sm:text-xs font-semibold transition-all cursor-default select-none">
                <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-blue-50 border border-blue-100/90 flex items-center justify-center text-blue-600">
                  <Workflow className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                </div>
                <span>AI Automation</span>
              </div>

              <div className="inline-flex shrink-0 items-center gap-1.5 sm:gap-2 pl-1.5 pr-2.5 sm:pr-3.5 py-1 rounded-full bg-white border border-neutral-200/90 shadow-2xs hover:border-purple-200 hover:bg-purple-50/30 text-neutral-800 text-[11px] sm:text-xs font-semibold transition-all cursor-default select-none">
                <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-purple-50 border border-purple-100/90 flex items-center justify-center text-purple-600">
                  <Bot className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                </div>
                <span>AI Agents</span>
              </div>

              <div className="inline-flex shrink-0 items-center gap-1.5 sm:gap-2 pl-1.5 pr-2.5 sm:pr-3.5 py-1 rounded-full bg-white border border-neutral-200/90 shadow-2xs hover:border-indigo-200 hover:bg-indigo-50/30 text-neutral-800 text-[11px] sm:text-xs font-semibold transition-all cursor-default select-none">
                <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-indigo-50 border border-indigo-100/90 flex items-center justify-center text-indigo-600">
                  <Globe className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                </div>
                <span>Web Apps</span>
              </div>

              <div className="inline-flex shrink-0 items-center gap-1.5 sm:gap-2 pl-1.5 pr-2.5 sm:pr-3.5 py-1 rounded-full bg-white border border-neutral-200/90 shadow-2xs hover:border-cyan-200 hover:bg-cyan-50/30 text-neutral-800 text-[11px] sm:text-xs font-semibold transition-all cursor-default select-none">
                <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-cyan-50 border border-cyan-100/90 flex items-center justify-center text-cyan-600">
                  <TrendingUp className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                </div>
                <span>AI SEO &amp; Growth</span>
              </div>

              {/* Set 2 (for continuous smooth loop) */}
              <div className="inline-flex shrink-0 items-center gap-1.5 sm:gap-2 pl-1.5 pr-2.5 sm:pr-3.5 py-1 rounded-full bg-white border border-neutral-200/90 shadow-2xs hover:border-blue-200 hover:bg-blue-50/30 text-neutral-800 text-[11px] sm:text-xs font-semibold transition-all cursor-default select-none">
                <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-blue-50 border border-blue-100/90 flex items-center justify-center text-blue-600">
                  <Workflow className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                </div>
                <span>AI Automation</span>
              </div>

              <div className="inline-flex shrink-0 items-center gap-1.5 sm:gap-2 pl-1.5 pr-2.5 sm:pr-3.5 py-1 rounded-full bg-white border border-neutral-200/90 shadow-2xs hover:border-purple-200 hover:bg-purple-50/30 text-neutral-800 text-[11px] sm:text-xs font-semibold transition-all cursor-default select-none">
                <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-purple-50 border border-purple-100/90 flex items-center justify-center text-purple-600">
                  <Bot className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                </div>
                <span>AI Agents</span>
              </div>

              <div className="inline-flex shrink-0 items-center gap-1.5 sm:gap-2 pl-1.5 pr-2.5 sm:pr-3.5 py-1 rounded-full bg-white border border-neutral-200/90 shadow-2xs hover:border-indigo-200 hover:bg-indigo-50/30 text-neutral-800 text-[11px] sm:text-xs font-semibold transition-all cursor-default select-none">
                <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-indigo-50 border border-indigo-100/90 flex items-center justify-center text-indigo-600">
                  <Globe className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                </div>
                <span>Web Apps</span>
              </div>

              <div className="inline-flex shrink-0 items-center gap-1.5 sm:gap-2 pl-1.5 pr-2.5 sm:pr-3.5 py-1 rounded-full bg-white border border-neutral-200/90 shadow-2xs hover:border-cyan-200 hover:bg-cyan-50/30 text-neutral-800 text-[11px] sm:text-xs font-semibold transition-all cursor-default select-none">
                <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-cyan-50 border border-cyan-100/90 flex items-center justify-center text-cyan-600">
                  <TrendingUp className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                </div>
                <span>AI SEO &amp; Growth</span>
              </div>
            </div>
          </div>

          {/* Rich Dual CTA & Trust Rating */}
          <div className="pt-1.5 sm:pt-2 md:pt-3 space-y-2.5 sm:space-y-3 w-full">
            <div className="flex flex-wrap sm:flex-nowrap items-center gap-2 sm:gap-3 w-full">
              <a
                href="#get-started"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 sm:px-5 sm:py-3 md:px-7 md:py-3.5 rounded-full bg-neutral-950 hover:bg-neutral-800 text-white font-semibold text-xs sm:text-xs md:text-sm transition-all shadow-md hover:shadow-lg active:scale-95 group text-center shrink-0"
              >
                Book a Demo
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
              <a
                href="#portfolio"
                className="inline-flex items-center justify-center px-4 py-2.5 sm:px-5 sm:py-3 md:px-7 md:py-3.5 rounded-full border border-neutral-300 hover:bg-neutral-100/80 text-neutral-800 font-semibold text-xs sm:text-xs md:text-sm transition-all active:scale-95 text-center shrink-0"
              >
                View Portfolio
              </a>
            </div>

            {/* Trust Rating with Avatar Circles */}
            <div className="flex items-center gap-2.5 sm:gap-3 pt-1">
              <AvatarCircles numPeople={99} avatarUrls={avatars} />
              <span className="text-[11px] sm:text-xs text-neutral-600 font-semibold tracking-tight">
                Trusted by <span className="text-neutral-950 font-bold">100+</span> startups &amp; growing businesses
              </span>
            </div>
          </div>
        </div>

        {/* Right Side: Showcase Graphic */}
        <div className="relative w-full flex justify-center sm:justify-end items-center px-0">
          <div className="gsap-hero-image relative w-full max-w-[340px] sm:max-w-[440px] md:max-w-[560px] lg:max-w-[660px] xl:max-w-[740px] aspect-[1086/1448] ml-auto mr-0 rounded-none border-none shadow-none bg-transparent overflow-visible">
            <Image
              src="/assets/iamges/hr2-bg.png"
              alt="Nexoorix Showcase Graphic"
              fill
              priority
              className="object-contain object-top-right rounded-none"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 740px"
            />

            {/* 5 Floating Glass Stat Cards - Staggered & Responsive without mobile clipping */}

            {/* Stat Card 1: AI Workflow Automation (Top Left) */}
            <div className="gsap-stat-card animate-float-slow absolute top-1 sm:top-2 md:top-4 lg:top-6 left-1 sm:left-2 md:left-2 lg:left-4 z-20 flex items-center gap-1.5 sm:gap-2 lg:gap-3 px-2 py-1 sm:px-2.5 sm:py-1.5 lg:px-5 lg:py-2.5 rounded-full bg-white/95 border border-neutral-200/90 shadow-md shadow-slate-950/5 backdrop-blur-xl hover:scale-105 transition-all duration-300 select-none max-w-[calc(100%-0.5rem)]">
              <div className="w-4 h-4 sm:w-5 sm:h-5 lg:w-7 lg:h-7 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100 shrink-0">
                <Workflow className="w-2.5 h-2.5 sm:w-3 sm:h-3 lg:w-3.5 lg:h-3.5" />
              </div>
              <div className="flex flex-col text-left pr-0.5 sm:pr-1">
                <span className="text-[8.5px] sm:text-[9px] lg:text-[11px] font-bold text-neutral-950 leading-tight">100+ AI Workflows</span>
                <span className="text-[7.5px] sm:text-[8px] lg:text-[10px] text-neutral-500 font-medium">Built for Business</span>
              </div>
            </div>

            {/* Stat Card 2: AI Agents 24/7 Execution (Top Right) */}
            <div className="gsap-stat-card animate-float-delayed absolute top-11 sm:top-[4rem] md:top-[5rem] lg:top-20 right-1 sm:right-2 md:right-2 lg:right-6 z-20 flex items-center gap-1.5 sm:gap-2 lg:gap-3 px-2 py-1 sm:px-2.5 sm:py-1.5 lg:px-5 lg:py-2.5 rounded-full bg-white/95 border border-neutral-200/90 shadow-md shadow-slate-950/5 backdrop-blur-xl hover:scale-105 transition-all duration-300 select-none max-w-[calc(100%-0.5rem)]">
              <div className="w-4 h-4 sm:w-5 sm:h-5 lg:w-7 lg:h-7 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center border border-indigo-100 shrink-0">
                <Bot className="w-2.5 h-2.5 sm:w-3 sm:h-3 lg:w-3.5 lg:h-3.5" />
              </div>
              <div className="flex flex-col text-left pr-0.5 sm:pr-1">
                <span className="text-[8.5px] sm:text-[9px] lg:text-[11px] font-bold text-neutral-950 leading-tight">24/7 AI Agents</span>
                <span className="text-[7.5px] sm:text-[8px] lg:text-[10px] text-neutral-500 font-medium">Autonomous Ops</span>
              </div>
            </div>

            {/* Stat Card 3: Enterprise Ready (Middle Right) */}
            <div className="gsap-stat-card animate-float-reverse absolute top-[42%] sm:top-[44%] md:top-[38%] lg:top-1/3 right-1 sm:right-2 md:right-2 lg:right-8 z-20 flex items-center gap-1.5 sm:gap-2 lg:gap-3 px-2 py-1 sm:px-2.5 sm:py-1.5 lg:px-5 lg:py-2.5 rounded-full bg-white/95 border border-neutral-200/90 shadow-md shadow-slate-950/5 backdrop-blur-xl hover:scale-105 transition-all duration-300 select-none max-w-[calc(100%-0.5rem)]">
              <div className="w-4 h-4 sm:w-5 sm:h-5 lg:w-7 lg:h-7 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-100 shrink-0">
                <ShieldCheck className="w-2.5 h-2.5 sm:w-3 sm:h-3 lg:w-3.5 lg:h-3.5" />
              </div>
              <div className="flex flex-col text-left pr-0.5 sm:pr-1">
                <span className="text-[8.5px] sm:text-[9px] lg:text-[11px] font-bold text-neutral-950 leading-tight">99.9% Enterprise</span>
                <span className="text-[7.5px] sm:text-[8px] lg:text-[10px] text-neutral-500 font-medium">Auth • Security</span>
              </div>
            </div>

            {/* Stat Card 4: Custom Software (Middle Left) */}
            <div className="gsap-stat-card animate-float-slow absolute bottom-14 sm:bottom-[4.5rem] md:bottom-[6rem] lg:bottom-36 left-1 sm:left-2 md:left-2 lg:left-6 z-20 flex items-center gap-1.5 sm:gap-2 lg:gap-3 px-2 py-1 sm:px-2.5 sm:py-1.5 lg:px-5 lg:py-2.5 rounded-full bg-white/95 border border-neutral-200/90 shadow-md shadow-slate-950/5 backdrop-blur-xl hover:scale-105 transition-all duration-300 select-none max-w-[calc(100%-0.5rem)]">
              <div className="w-4 h-4 sm:w-5 sm:h-5 lg:w-7 lg:h-7 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center border border-purple-100 shrink-0">
                <Layers className="w-2.5 h-2.5 sm:w-3 sm:h-3 lg:w-3.5 lg:h-3.5" />
              </div>
              <div className="flex flex-col text-left pr-0.5 sm:pr-1">
                <span className="text-[8.5px] sm:text-[9px] lg:text-[11px] font-bold text-neutral-950 leading-tight">50+ Custom Builds</span>
                <span className="text-[7.5px] sm:text-[8px] lg:text-[10px] text-neutral-500 font-medium">Scalable • Secure</span>
              </div>
            </div>

            {/* Stat Card 5: Industry Grade AI SEO (Bottom Right) */}
            <div className="gsap-stat-card animate-float-delayed absolute bottom-1 sm:bottom-2 md:bottom-4 lg:bottom-8 right-1 sm:right-2 md:right-2 lg:right-6 z-20 flex items-center gap-1.5 sm:gap-2 lg:gap-3 px-2 py-1 sm:px-2.5 sm:py-1.5 lg:px-5 lg:py-2.5 rounded-full bg-white/95 border border-neutral-200/90 shadow-md shadow-slate-950/5 backdrop-blur-xl hover:scale-105 transition-all duration-300 select-none max-w-[calc(100%-0.5rem)]">
              <div className="w-4 h-4 sm:w-5 sm:h-5 lg:w-7 lg:h-7 rounded-full bg-cyan-50 text-cyan-600 flex items-center justify-center border border-cyan-100 shrink-0">
                <TrendingUp className="w-2.5 h-2.5 sm:w-3 sm:h-3 lg:w-3.5 lg:h-3.5" />
              </div>
              <div className="flex flex-col text-left pr-0.5 sm:pr-1">
                <span className="text-[8.5px] sm:text-[9px] lg:text-[11px] font-bold text-neutral-950 leading-tight">AI SEO &amp; Growth</span>
                <span className="text-[7.5px] sm:text-[8px] lg:text-[10px] text-neutral-500 font-medium">Data-Driven</span>
              </div>
            </div>

            {/* Smooth Fade at Bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-12 sm:h-16 md:h-32 bg-gradient-to-t from-white via-white/85 to-transparent pointer-events-none z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}