'use client';

import React, { useRef, useLayoutEffect } from 'react';
import Image from 'next/image';
import {
  ArrowRight,
  Workflow,
  Bot,
  Globe,
  TrendingUp,
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

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      // Stagger center elements reveal with smooth blur and slide up
      tl.fromTo(
        '.gsap-hero-center > *',
        { y: 40, opacity: 0, filter: 'blur(8px)' },
        { y: 0, opacity: 1, filter: 'blur(0px)', duration: 0.8, stagger: 0.12, delay: 0.1 }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-[85vh] sm:min-h-[90vh] md:min-h-[92vh] flex items-center justify-center overflow-hidden rounded-b-3xl sm:rounded-b-[2.5rem] md:rounded-b-[3.5rem] shadow-2xl shadow-neutral-950/20"
    >
      {/* 1. Base Hero Landing Background Image */}
      <Image
        src="/assets/iamges/landingpage.png"
        alt="Nexoorix Landing Page Hero"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* 2. Dark Overlay Layer for High Contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-neutral-600 via-neutral-950/65 to-neutral-600 backdrop-blur-[2px] pointer-events-none" />

      {/* 3. Radial Glow Accent behind Centered Text */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.18),transparent_65%)] pointer-events-none z-1" />

      {/* 4. Centered Hero Content Container */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-5 sm:px-8 lg:px-12 py-16 sm:py-20 md:py-24 flex flex-col items-center justify-center text-center">
        <div className="gsap-hero-center flex flex-col items-center text-center space-y-4 sm:space-y-5 md:space-y-6 max-w-3xl sm:max-w-4xl">
          
          {/* Top Category Badge Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-white text-[11px] sm:text-xs font-semibold tracking-wide shadow-lg">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-400" />
            </span>
            <span className="uppercase text-[10px] sm:text-[11px] font-bold text-white/95 tracking-wider">
              Let&apos;s Bring Life to Your Idea
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-heading leading-[1.18] sm:leading-[1.16]">
            Helping Businesses Grow Faster with{' '}
            <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-sky-400 bg-clip-text text-transparent">
              AI, Automation &amp; Custom Software and AI SEO
            </span>
          </h1>

          {/* Subheadline Paragraph */}
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-neutral-200/90 font-sans leading-relaxed max-w-2xl font-normal pt-1">
            We help startups, businesses, and enterprises automate workflows, build intelligent AI solutions, develop scalable software, create high-performance websites, and accelerate digital growth through data-driven marketing.
          </p>

          {/* Service Chips Infinite Marquee */}
          <div className="w-full max-w-xl overflow-hidden no-scrollbar py-2 relative group/marquee">
            {/* Left & Right Fade Gradients */}
            <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-neutral-950/60 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-neutral-950/60 to-transparent z-10 pointer-events-none" />

            <div className="animate-marquee flex items-center gap-2.5 whitespace-nowrap">
              {/* Set 1 */}
              <div className="inline-flex shrink-0 items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-white text-xs font-semibold shadow-xs select-none">
                <div className="w-5 h-5 rounded-full bg-blue-500/20 border border-blue-400/30 flex items-center justify-center text-blue-300">
                  <Workflow className="w-3 h-3" />
                </div>
                <span>AI Automation</span>
              </div>

              <div className="inline-flex shrink-0 items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-white text-xs font-semibold shadow-xs select-none">
                <div className="w-5 h-5 rounded-full bg-purple-500/20 border border-purple-400/30 flex items-center justify-center text-purple-300">
                  <Bot className="w-3 h-3" />
                </div>
                <span>AI Agents</span>
              </div>

              <div className="inline-flex shrink-0 items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-white text-xs font-semibold shadow-xs select-none">
                <div className="w-5 h-5 rounded-full bg-indigo-500/20 border border-indigo-400/30 flex items-center justify-center text-indigo-300">
                  <Globe className="w-3 h-3" />
                </div>
                <span>Web Apps</span>
              </div>

              <div className="inline-flex shrink-0 items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-white text-xs font-semibold shadow-xs select-none">
                <div className="w-5 h-5 rounded-full bg-cyan-500/20 border border-cyan-400/30 flex items-center justify-center text-cyan-300">
                  <TrendingUp className="w-3 h-3" />
                </div>
                <span>AI SEO &amp; Growth</span>
              </div>

              {/* Set 2 (for continuous smooth loop) */}
              <div className="inline-flex shrink-0 items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-white text-xs font-semibold shadow-xs select-none">
                <div className="w-5 h-5 rounded-full bg-blue-500/20 border border-blue-400/30 flex items-center justify-center text-blue-300">
                  <Workflow className="w-3 h-3" />
                </div>
                <span>AI Automation</span>
              </div>

              <div className="inline-flex shrink-0 items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-white text-xs font-semibold shadow-xs select-none">
                <div className="w-5 h-5 rounded-full bg-purple-500/20 border border-purple-400/30 flex items-center justify-center text-purple-300">
                  <Bot className="w-3 h-3" />
                </div>
                <span>AI Agents</span>
              </div>

              <div className="inline-flex shrink-0 items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-white text-xs font-semibold shadow-xs select-none">
                <div className="w-5 h-5 rounded-full bg-indigo-500/20 border border-indigo-400/30 flex items-center justify-center text-indigo-300">
                  <Globe className="w-3 h-3" />
                </div>
                <span>Web Apps</span>
              </div>

              <div className="inline-flex shrink-0 items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-white text-xs font-semibold shadow-xs select-none">
                <div className="w-5 h-5 rounded-full bg-cyan-500/20 border border-cyan-400/30 flex items-center justify-center text-cyan-300">
                  <TrendingUp className="w-3 h-3" />
                </div>
                <span>AI SEO &amp; Growth</span>
              </div>
            </div>
          </div>

          {/* Rich Dual CTA & Trust Rating */}
          <div className="pt-2 sm:pt-3 space-y-4 w-full flex flex-col items-center">
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 w-full">
              <a
                href="#get-started"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 sm:px-8 sm:py-3.5 rounded-full bg-white text-neutral-950 hover:bg-neutral-100 font-bold text-xs sm:text-sm tracking-wide transition-all shadow-xl hover:scale-[1.03] active:scale-95 group text-center shrink-0"
              >
                <span>Book a Demo</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-neutral-950" />
              </a>
              <a
                href="#portfolio"
                className="inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/25 backdrop-blur-md font-semibold text-xs sm:text-sm transition-all hover:scale-[1.03] active:scale-95 text-center shrink-0"
              >
                View Portfolio
              </a>
            </div>

            {/* Trust Rating with Avatar Circles */}
            <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 pt-1">
              <AvatarCircles numPeople={99} avatarUrls={avatars} className="[&_img]:border-white/80 [&_a:last-child]:border-white/80 [&_a:last-child]:bg-white/20 [&_a:last-child]:text-white [&_a:last-child]:backdrop-blur-md" />
              <span className="text-xs sm:text-sm text-neutral-200/90 font-medium tracking-tight">
                Trusted by <span className="text-white font-bold">100+</span> startups &amp; growing businesses
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
