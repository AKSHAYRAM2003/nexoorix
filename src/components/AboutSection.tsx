'use client';

import React, { useRef, useLayoutEffect } from 'react';
import Image from 'next/image';
import {
  Grid,
  ArrowRight,
  Bot,
  Code,
  Globe,
  TrendingUp,
  Sparkles,
  Zap,
  CheckCircle2,
  Cpu,
  Layers,
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// 🎛️ USER ANIMATION CONTROL CONFIG (Tweak reveal speed, stagger, and triggers here!)
export const ABOUT_ANIMATION_CONFIG = {
  headlineDuration: 1.2,      // Duration per word reveal in seconds (Increase to slow down)
  headlineStagger: 0.10,      // Stagger delay between words in seconds (Increase to slow down sequence)
  headlineTriggerStart: 'top 85%', // Scroll start position trigger
  pillDuration: 0.8,          // Pill badge reveal duration
  pillTriggerStart: 'top 88%',// Pill badge scroll trigger start
};

const capabilities = [
  {
    icon: Bot,
    title: 'AI Automation & Agents',
    description: 'Automate complex business workflows using intelligent custom AI systems and autonomous agents.',
    badge: 'AI Powered',
    accentColor: 'from-blue-500/10 to-indigo-500/10 border-blue-200/60 hover:border-blue-300',
    iconBg: 'bg-blue-50 text-blue-600 border-blue-100',
  },
  {
    icon: Code,
    title: 'Custom Software',
    description: 'Tailor-made software applications engineered specifically for your unique business goals and scale.',
    badge: 'Scalable',
    accentColor: 'from-violet-500/10 to-purple-500/10 border-violet-200/60 hover:border-violet-300',
    iconBg: 'bg-violet-50 text-violet-600 border-violet-100',
  },
  {
    icon: Globe,
    title: 'Website Development',
    description: 'High-performance, ultra-fast, responsive websites designed for maximum conversion, speed, and SEO.',
    badge: 'SEO Optimized',
    accentColor: 'from-emerald-500/10 to-teal-500/10 border-emerald-200/60 hover:border-emerald-300',
    iconBg: 'bg-emerald-50 text-emerald-600 border-emerald-100',
  },
  {
    icon: TrendingUp,
    title: 'Digital Growth',
    description: 'Strategic digital marketing, analytics, and conversion funnels to expand market reach online.',
    badge: 'Data Driven',
    accentColor: 'from-amber-500/10 to-orange-500/10 border-amber-200/60 hover:border-amber-300',
    iconBg: 'bg-amber-50 text-amber-600 border-amber-100',
  },
];

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // 1. About Us Pill Badge Scroll Effect (No reverse on scroll up)
      gsap.fromTo(
        '.gsap-about-pill',
        { opacity: 0, y: 18 },
        {
          opacity: 1,
          y: 0,
          duration: ABOUT_ANIMATION_CONFIG.pillDuration,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.gsap-about-pill',
            start: ABOUT_ANIMATION_CONFIG.pillTriggerStart,
            toggleActions: 'play none none none',
          },
        }
      );

      // 2. Smooth Headline Word Reveal (No reverse on scroll up, customizable speed)
      gsap.fromTo(
        '.gsap-scroll-word',
        {
          opacity: 0.15,
          filter: 'blur(4px)',
          y: 12,
        },
        {
          opacity: 1,
          filter: 'blur(0px)',
          y: 0,
          stagger: ABOUT_ANIMATION_CONFIG.headlineStagger,
          duration: ABOUT_ANIMATION_CONFIG.headlineDuration,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.gsap-about-headline',
            start: ABOUT_ANIMATION_CONFIG.headlineTriggerStart,
            toggleActions: 'play none none none',
          },
        }
      );

      // 3. Smooth Paragraph Text Reveal (Each paragraph triggers individually as it enters viewport)
      const paraEls = gsap.utils.toArray<HTMLElement>('.gsap-about-para');
      paraEls.forEach((para) => {
        gsap.fromTo(
          para,
          {
            opacity: 0.15,
            filter: 'blur(4px)',
            y: 16,
          },
          {
            opacity: 1,
            filter: 'blur(0px)',
            y: 0,
            duration: 0.85,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: para,
              start: 'top 88%',
              toggleActions: 'play none none none',
            },
          }
        );
      });

      // 4. Action Button Scroll Entrance (No reverse on scroll up)
      gsap.fromTo(
        '.gsap-about-btn',
        {
          opacity: 0,
          y: 20,
          scale: 0.95,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.7,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.gsap-about-btn',
            start: 'top 90%',
            toggleActions: 'play none none none',
          },
        }
      );

      // 5. Central Image Banner Graphic Reveal (Upgraded 3D perspective zoom & fade, no reverse on scroll up)
      gsap.fromTo(
        '.gsap-about-banner',
        {
          y: 50,
          opacity: 0,
          scale: 0.93,
          rotateX: 6,
          transformPerspective: 1000,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          rotateX: 0,
          duration: 1.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.gsap-about-banner',
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );

      // 4. Stagger feature/capability cards
      gsap.fromTo(
        '.gsap-about-card',
        { y: 35, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.gsap-about-grid',
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );

      // 5. Quote banner reveal
      gsap.fromTo(
        '.gsap-about-highlight',
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.gsap-about-highlight',
            start: 'top 90%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* 1. Main Reference-Inspired About Section */}
      <section
        ref={sectionRef}
        id="about"
        className="relative w-full bg-white text-neutral-900 py-6 sm:py-4 md:py-8 overflow-hidden border-t border-neutral-100"
      >
        {/* Subtle Background Dot Matrix Pattern */}
        {/* <div className="absolute inset-0 bg-[radial-gradient(#8080801a_1.2px,transparent_1.2px)] bg-[size:24px_24px] pointer-events-none" /> */}

        {/* Decorative Grid Crosshair Marks (+) at Key Intersections */}
        <div className="absolute top-12 left-12 text-neutral-300 pointer-events-none select-none text-xs font-light z-0">
          +
        </div>
        <div className="absolute top-12 left-1/3 text-neutral-300 pointer-events-none select-none text-xs font-light z-0">
          +
        </div>
        <div className="absolute top-24 right-1/4 text-neutral-300 pointer-events-none select-none text-xs font-light z-0">
          +
        </div>
        <div className="absolute top-1/2 left-16 text-neutral-300 pointer-events-none select-none text-xs font-light z-0">
          +
        </div>
        <div className="absolute bottom-20 right-16 text-neutral-300 pointer-events-none select-none text-xs font-light z-0">
          +
        </div>

        <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 lg:px-16 space-y-12 sm:space-y-16">
          {/* Main Top Architecture Layout (Centered Container on Page, Left-to-Right Text) */}
          <div className="gsap-about-header max-w-4xl mx-auto space-y-6">
            {/* Top Pill Badge (Centered & Animated) */}
            <div className="gsap-about-pill w-full flex justify-center">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-100/90 border border-neutral-200/80 text-neutral-700 text-xs font-medium tracking-wide shadow-2xs">
                <span className="text-[11px] font-semibold text-neutral-800 tracking-wide">
                  About Us
                </span>
              </div>
            </div>

            {/* Core Clean Headline (Font-medium & FK Grotesk Neue font-family explicitly assigned on word spans) */}
            <h2 className="gsap-about-headline text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-medium tracking-tight text-neutral-950 leading-tight text-center max-w-3xl mx-auto flex flex-wrap justify-center gap-x-[0.28em] gap-y-2 select-none">
              {['We', 'build', 'custom', 'software', '&', 'AI', 'workflows', 'that'].map((word, idx) => (
                <span
                  key={idx}
                  className="gsap-scroll-word inline-block font-medium text-neutral-950 will-change-[transform,opacity,filter]"
                  style={{ fontFamily: 'var(--font-grotesk-neue)', opacity: 0.15, filter: 'blur(4px)', transform: 'translateY(12px)' }}
                >
                  {word}
                </span>
              ))}
              <span
                className="gsap-scroll-word inline-block font-serif italic font-normal text-neutral-800 will-change-[transform,opacity,filter]"
                style={{ opacity: 0.15, filter: 'blur(4px)', transform: 'translateY(12px)' }}
              >
                scale your business.
              </span>
            </h2>

            {/* Narrative Paragraphs (Expanded Business Brief with text-justify & italic underlined keywords) */}
            <div className="gsap-about-paragraphs space-y-5 text-neutral-600 text-base sm:text-lg font-sans leading-relaxed font-normal max-w-4xl pt-2 text-justify">
              <p
                className="gsap-about-para will-change-[transform,opacity,filter]"
                style={{ opacity: 0.15, filter: 'blur(4px)', transform: 'translateY(16px)' }}
              >
                At <strong className="font-semibold text-neutral-950">Nexoorix</strong>, we engineer <em className="font-serif italic text-neutral-950 underline decoration-neutral-400 underline-offset-4 font-normal">custom software solutions</em> and <em className="font-serif italic text-neutral-950 underline decoration-neutral-400 underline-offset-4 font-normal">AI-driven automation systems</em> tailored to solve complex operational challenges. Our team specializes in translating intricate business requirements into <em className="font-serif italic text-neutral-950 underline decoration-neutral-400 underline-offset-4 font-normal">resilient, high-speed digital products</em> that eliminate manual workflows, accelerate productivity, and empower modern enterprises to operate at peak efficiency.
              </p>
              <p
                className="gsap-about-para will-change-[transform,opacity,filter]"
                style={{ opacity: 0.15, filter: 'blur(4px)', transform: 'translateY(16px)' }}
              >
                We bridge the gap between cutting-edge technology and real-world business impact. By combining modern <em className="font-serif italic text-neutral-950 underline decoration-neutral-400 underline-offset-4 font-normal">full-stack web development</em>, custom cloud architectures, and <em className="font-serif italic text-neutral-950 underline decoration-neutral-400 underline-offset-4 font-normal">autonomous AI pipelines</em>, we build scalable platforms that deliver <em className="font-serif italic text-neutral-950 underline decoration-neutral-400 underline-offset-4 font-normal">sub-second performance</em>, uncompromised data security, and seamless integration with your existing technology ecosystem.
              </p>
              <p
                className="gsap-about-para will-change-[transform,opacity,filter]"
                style={{ opacity: 0.15, filter: 'blur(4px)', transform: 'translateY(16px)' }}
              >
                Our engineering philosophy focuses on clarity, longevity, and measurable ROI. We eliminate technical bloat in favor of <em className="font-serif italic text-neutral-950 underline decoration-neutral-400 underline-offset-4 font-normal">clean, maintainable code structures</em> and intuitive user interfaces that enhance engagement across all digital touchpoints. Every product we ship undergoes rigorous optimization for <em className="font-serif italic text-neutral-950 underline decoration-neutral-400 underline-offset-4 font-normal">speed, SEO, and long-term durability</em>.
              </p>
              <p
                className="gsap-about-para will-change-[transform,opacity,filter]"
                style={{ opacity: 0.15, filter: 'blur(4px)', transform: 'translateY(16px)' }}
              >
                Whether you are an ambitious startup launching a flagship digital product or an established enterprise scaling your digital infrastructure, Nexoorix acts as your <em className="font-serif italic text-neutral-950 underline decoration-neutral-400 underline-offset-4 font-normal">strategic technology partner</em>. We collaborate directly with your key stakeholders from initial architectural design through deployment, ensuring your digital assets <em className="font-serif italic text-neutral-950 underline decoration-neutral-400 underline-offset-4 font-normal">continuously adapt and scale</em> as your market evolves.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-4 text-left">
              <a
                href="#capabilities"
                className="gsap-about-btn group relative inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-neutral-950 text-white font-medium text-sm tracking-wide transition-all duration-300 hover:bg-neutral-800 shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Learn More About Us</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          {/* Full-Width Featured Visual Showcase Banner Frame (Reference Bottom Image) */}
          <div className="gsap-about-banner relative rounded-3xl overflow-hidden border border-neutral-200/90 shadow-xl bg-neutral-950 group">
            {/* Banner Background Graphic / Image */}
            <div className="relative w-full h-[320px] sm:h-[420px] md:h-[480px]">
              <Image
                src="/assets/iamges/about-section-bg.png"
                alt="Nexoorix Digital Innovation Engine Showcase"
                fill
                className="object-cover object-center transition-scale duration-700 group-hover:scale-102"
                priority
              />
              {/* Ambient Gradient Overlay for Readability & Depth */}
              {/* <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent pointer-events-none" /> */}

              {/* Inset Banner Content / Caption */}
              {/* <div className="absolute bottom-6 sm:bottom-10 left-6 sm:left-10 right-6 sm:right-10 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 z-10 text-white">
                <div className="space-y-1 max-w-xl">
                  <span className="text-[11px] font-mono font-semibold uppercase tracking-widest text-blue-400">
                    THE NEXOORIX PLATFORM
                  </span>
                  <h3 className="text-xl sm:text-2xl font-medium text-white tracking-tight">
                    Where Intelligence Meets Modern Execution
                  </h3>
                </div>

                <div className="flex items-center gap-3 text-xs font-medium text-neutral-300 bg-white/10 backdrop-blur-md px-4 py-2.5 rounded-full border border-white/15">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <span>Next-Gen Enterprise Engine</span>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* 2. Standalone Core Capabilities & Tagline Section */}
      <section id="capabilities" className="relative w-full bg-white text-neutral-900 py-16 sm:py-24 overflow-hidden">

        <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 lg:px-16 space-y-12 sm:space-y-16">
          {/* Grid Section Title */}
          <div className="flex items-center justify-between border-b border-neutral-200/80 pb-4">
            <h3 className="text-xl sm:text-2xl font-semibold text-neutral-950 tracking-tight">
              What We Excel At
            </h3>
            <span className="text-xs font-medium text-neutral-500 uppercase tracking-wider">
              Core Capabilities
            </span>
          </div>

          {/* 4 Feature / Capability Cards Grid */}
          <div className="gsap-about-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {capabilities.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className={`gsap-about-card group relative p-6 sm:p-7 rounded-2xl bg-gradient-to-br ${item.accentColor} bg-white border transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl flex flex-col justify-between`}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className={`p-3 rounded-xl border ${item.iconBg} transition-transform duration-300 group-hover:scale-110`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-600 bg-neutral-100 px-2.5 py-1 rounded-full border border-neutral-200/70">
                        {item.badge}
                      </span>
                    </div>

                    <div className="space-y-2 pt-1">
                      <h4 className="text-base font-semibold text-neutral-950 group-hover:text-blue-600 transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Tagline Banner */}
          <div className="gsap-about-highlight relative rounded-2xl bg-neutral-950 text-white p-6 sm:p-8 md:p-10 overflow-hidden shadow-xl text-center flex flex-col items-center justify-center space-y-3 border border-neutral-800">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(59,130,246,0.15),rgba(0,0,0,0))] pointer-events-none" />
            <div className="absolute top-0 right-0 w-48 h-48 bg-amber-400/10 rounded-full blur-2xl pointer-events-none" />

            <div className="relative z-10 max-w-3xl space-y-2">
              <p className="text-xs font-semibold text-blue-400 uppercase tracking-widest">
                OUR PROMISE
              </p>
              <h3 className="text-base sm:text-lg md:text-xl font-medium tracking-tight text-neutral-100 leading-relaxed">
                &ldquo;Helping businesses embrace AI, automation, and digital transformation with confidence.&rdquo;
              </h3>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
