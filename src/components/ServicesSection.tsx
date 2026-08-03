'use client';

import React, { useRef, useEffect, useLayoutEffect, useState } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  ArrowRight,
  Layers,
  Code2,
  Zap,
  Bot,
  Sparkles,
  Cloud,
  BarChart3,
  Rocket,
} from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// 🎛️ USER ANIMATION CONTROL CONFIG (Matches AboutSection configuration)
export const SERVICES_ANIMATION_CONFIG = {
  headlineDuration: 1.2,       // Duration per word reveal in seconds (Increase to slow down)
  headlineStagger: 0.10,       // Stagger delay between words in seconds
  headlineTriggerStart: 'top 85%', // Scroll start position trigger
  pillDuration: 0.8,           // Pill badge reveal duration
  pillTriggerStart: 'top 88%', // Pill badge scroll trigger start
};

/* ------------------------------------------------------------------ */
/*  Icon map — feature icons for the 5 service pillars                */
/* ------------------------------------------------------------------ */
const featureIcons: Record<string, React.ReactNode> = {
  // Custom Software
  'Enterprise Web Applications': <Code2 className="w-4 h-4 text-blue-600" />,
  'SaaS Products': <Layers className="w-4 h-4 text-blue-600" />,
  'Business Portals': <Zap className="w-4 h-4 text-blue-600" />,
  'API Integrations': <Sparkles className="w-4 h-4 text-blue-600" />,
  // AI Automation
  'Workflow Automation': <Zap className="w-4 h-4 text-emerald-600" />,
  'CRM & ERP Integration': <Layers className="w-4 h-4 text-emerald-600" />,
  'Document Processing': <BarChart3 className="w-4 h-4 text-emerald-600" />,
  'Process Optimization': <Bot className="w-4 h-4 text-emerald-600" />,
  // AI Agents & GenAI
  'AI Agents': <Bot className="w-4 h-4 text-violet-600" />,
  'AI Chatbots': <Bot className="w-4 h-4 text-violet-600" />,
  'RAG Knowledge Bases': <Sparkles className="w-4 h-4 text-violet-600" />,
  'Custom GenAI Applications': <Code2 className="w-4 h-4 text-violet-600" />,
  // Cloud & Data
  'Cloud Infrastructure': <Cloud className="w-4 h-4 text-cyan-600" />,
  'DevOps & CI/CD': <Zap className="w-4 h-4 text-cyan-600" />,
  'Monitoring & Security': <BarChart3 className="w-4 h-4 text-cyan-600" />,
  'Analytics Dashboards': <BarChart3 className="w-4 h-4 text-cyan-600" />,
  // Digital Growth
  'SEO & AI SEO': <Rocket className="w-4 h-4 text-amber-600" />,
  'Performance Optimization': <Zap className="w-4 h-4 text-amber-600" />,
  'Conversion Optimization': <BarChart3 className="w-4 h-4 text-amber-600" />,
  'Digital Growth Strategy': <Sparkles className="w-4 h-4 text-amber-600" />,
};

function getFeatureIcon(feature: string): React.ReactNode {
  return featureIcons[feature] || <Zap className="w-4 h-4 text-neutral-500" />;
}

/* ------------------------------------------------------------------ */
/*  5 Service Pillars Data                                             */
/* ------------------------------------------------------------------ */
interface ServiceItem {
  id: number;
  badge: string;
  category: string;
  title: string;
  titleItalic: string;
  description: string;
  subheading: string;
  features: string[];
  cta: string;
  image: string;
}

const services: ServiceItem[] = [
  {
    id: 1,
    badge: 'BUILD',
    category: 'CUSTOM SOFTWARE',
    title: 'Custom Software That Fits',
    titleItalic: 'Your Business',
    description:
      'Every business has unique challenges. We build scalable web applications, SaaS platforms, and business systems designed around your workflows—not the other way around.',
    subheading: 'Solutions',
    features: [
      'Enterprise Web Applications',
      'SaaS Products',
      'Business Portals',
      'API Integrations',
    ],
    cta: 'Explore Software',
    image: '/assets/iamges/T1.avif',
  },
  {
    id: 2,
    badge: 'AUTOMATE',
    category: 'AI AUTOMATION',
    title: 'Replace Manual Work with',
    titleItalic: 'Intelligent Automation',
    description:
      'Automate repetitive processes, connect your business tools, and streamline operations with AI-powered workflows that save time and reduce operational costs.',
    subheading: 'Solutions',
    features: [
      'Workflow Automation',
      'CRM & ERP Integration',
      'Document Processing',
      'Process Optimization',
    ],
    cta: 'Automate Operations',
    image: '/assets/iamges/T2.avif',
  },
  {
    id: 3,
    badge: 'INTELLIGENCE',
    category: 'AI AGENTS & GENERATIVE AI',
    title: 'AI That Works Alongside',
    titleItalic: 'Your Team',
    description:
      'From intelligent AI agents to custom GenAI applications, we build solutions that answer questions, automate decisions, generate content, and enhance customer experiences.',
    subheading: 'Solutions',
    features: [
      'AI Agents',
      'AI Chatbots',
      'RAG Knowledge Bases',
      'Custom GenAI Applications',
    ],
    cta: 'Build AI Solutions',
    image: '/assets/iamges/T1.avif',
  },
  {
    id: 4,
    badge: 'SCALE',
    category: 'CLOUD & DATA',
    title: 'Secure Infrastructure',
    titleItalic: 'Built to Grow',
    description:
      'Launch with confidence using scalable cloud infrastructure, automated deployments, and real-time analytics that keep your applications reliable and your business informed.',
    subheading: 'Solutions',
    features: [
      'Cloud Infrastructure',
      'DevOps & CI/CD',
      'Monitoring & Security',
      'Analytics Dashboards',
    ],
    cta: 'Scale Your Platform',
    image: '/assets/iamges/T2.avif',
  },
  {
    id: 5,
    badge: 'GROW',
    category: 'DIGITAL GROWTH',
    title: 'Get Found. Convert More.',
    titleItalic: 'Grow Faster.',
    description:
      'A great product deserves visibility. We help businesses attract qualified traffic and turn visitors into customers through modern SEO, AI Search Optimization, and conversion-focused digital experiences.',
    subheading: 'Solutions',
    features: [
      'SEO & AI SEO',
      'Performance Optimization',
      'Conversion Optimization',
      'Digital Growth Strategy',
    ],
    cta: 'Grow Your Business',
    image: '/assets/iamges/T1.avif',
  },
];

/* ------------------------------------------------------------------ */
/*  Main Component — GSAP ScrollTrigger Scrollytelling                 */
/* ------------------------------------------------------------------ */
export default function ServicesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollytellingRef = useRef<HTMLDivElement>(null);
  const leftPanelRef = useRef<HTMLDivElement>(null);
  const rightPanelRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeId, setActiveId] = useState(1);

  // Preload images
  useEffect(() => {
    services.forEach((s) => {
      const img = new window.Image();
      img.src = s.image;
    });
  }, []);

  // GSAP ScrollTrigger — pin left panel + detect active card + header scroll animations
  useLayoutEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // 1. Services Pill Badge Scroll Entrance (Identical to AboutSection)
      gsap.fromTo(
        '.gsap-services-pill',
        { opacity: 0, y: 18 },
        {
          opacity: 1,
          y: 0,
          duration: SERVICES_ANIMATION_CONFIG.pillDuration,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.gsap-services-pill',
            start: SERVICES_ANIMATION_CONFIG.pillTriggerStart,
            toggleActions: 'play none none none',
          },
        }
      );

      // 2. Smooth Headline Word Reveal (Identical to AboutSection)
      gsap.fromTo(
        '.gsap-services-word',
        {
          opacity: 0.15,
          filter: 'blur(4px)',
          y: 12,
        },
        {
          opacity: 1,
          filter: 'blur(0px)',
          y: 0,
          stagger: SERVICES_ANIMATION_CONFIG.headlineStagger,
          duration: SERVICES_ANIMATION_CONFIG.headlineDuration,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.gsap-services-headline',
            start: SERVICES_ANIMATION_CONFIG.headlineTriggerStart,
            toggleActions: 'play none none none',
          },
        }
      );

      // 3. Smooth Paragraph Text Reveal (Identical to AboutSection)
      gsap.fromTo(
        '.gsap-services-para',
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
            trigger: '.gsap-services-para',
            start: 'top 88%',
            toggleActions: 'play none none none',
          },
        }
      );

      // 4. Pin the left panel during sticky scrollytelling container scroll
      if (scrollytellingRef.current && leftPanelRef.current) {
        ScrollTrigger.create({
          trigger: scrollytellingRef.current,
          start: 'top top',
          end: 'bottom bottom',
          pin: leftPanelRef.current,
          pinSpacing: false,
        });
      }

      // 5. Create a ScrollTrigger for each service card to switch left image
      cardRefs.current.forEach((card, index) => {
        if (!card) return;

        ScrollTrigger.create({
          trigger: card,
          start: 'top 60%',
          end: 'bottom 40%',
          onEnter: () => setActiveId(services[index].id),
          onEnterBack: () => setActiveId(services[index].id),
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative w-full bg-[#faf9f7] text-neutral-900 overflow-hidden border-t border-neutral-200/80"
    >
      {/* Section Header */}
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 pt-4 sm:pt-8 md:pt-6 pb-8 sm:pb-12">
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <div className="gsap-services-pill inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-neutral-100/90 border border-neutral-200/80 text-neutral-700 text-xs font-medium tracking-wide">
            <span className="text-[11px] font-medium text-neutral-800 uppercase tracking-widest">
              OUR SERVICES
            </span>
          </div>

          <h2
            className="gsap-services-headline text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-medium tracking-tight text-neutral-950 leading-snug sm:leading-tight flex flex-wrap justify-center gap-x-[0.28em] gap-y-1 select-none"
            style={{ fontFamily: 'var(--font-grotesk-neue)' }}
          >
            {['AI-Powered', 'Solutions', 'Built', 'for', 'Business', 'Growth'].map((word, idx) => (
              <span
                key={idx}
                className="gsap-services-word inline-block font-medium text-neutral-950 will-change-[transform,opacity,filter]"
                style={{ fontFamily: 'var(--font-grotesk-neue)' }}
              >
                {word}
              </span>
            ))}
          </h2>

          <p className="gsap-services-para text-sm sm:text-base md:text-lg text-neutral-600 font-sans leading-relaxed max-w-2xl mx-auto font-normal will-change-[transform,opacity,filter]">
            From custom software to intelligent automation, we design and build
            digital solutions that help businesses streamline operations, improve
            customer experiences, and scale with confidence.
          </p>
        </div>
      </div>

      {/* ============================================================ */}
      {/*  SCROLLYTELLING CONTAINER                                     */}
      {/* ============================================================ */}
      <div
        ref={scrollytellingRef}
        className="relative max-w-[1440px] mx-auto flex flex-col lg:flex-row"
      >
        {/* ---------------------------------------------------------- */}
        {/*  LEFT PANEL — Pinned by GSAP ScrollTrigger                  */}
        {/* ---------------------------------------------------------- */}
        <div
          ref={leftPanelRef}
          className="hidden lg:flex lg:w-[50%] h-screen items-center justify-center overflow-hidden"
        >
          <div className="relative w-full h-full">
            {/* All images stacked, only active one is visible */}
            {services.map((service) => (
              <div
                key={service.id}
                className="absolute inset-0 transition-all duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
                style={{
                  opacity: service.id === activeId ? 1 : 0,
                  transform: service.id === activeId ? 'scale(1)' : 'scale(1.05)',
                }}
              >
                <Image
                  src={service.image}
                  alt={service.title + ' ' + service.titleItalic}
                  fill
                  className="object-cover"
                  priority={service.id <= 2}
                  sizes="50vw"
                />
              </div>
            ))}
          </div>
        </div>

        {/* ---------------------------------------------------------- */}
        {/*  RIGHT PANEL — Scrollable 5 Service Cards                   */}
        {/* ---------------------------------------------------------- */}
        <div ref={rightPanelRef} className="w-full lg:w-[50%]">
          <div className="px-6 sm:px-10 lg:px-14 xl:px-18">
            {services.map((service, index) => (
              <div
                key={service.id}
                ref={(el) => { cardRefs.current[index] = el; }}
                className="min-h-screen flex flex-col justify-center py-8"
              >
                {/* Mobile image — only visible on small screens */}
                <div className="lg:hidden mb-6 rounded-2xl overflow-hidden aspect-[4/3] relative">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="100vw"
                  />
                </div>

                {/* Badge */}
                <div className="mb-3">
                  <span className="inline-block px-3.5 py-1 rounded-full bg-neutral-100 border border-neutral-200/80 text-[10px] sm:text-[11px] font-medium tracking-[0.18em] text-neutral-700 uppercase">
                    {service.badge}
                  </span>
                </div>

                {/* Headline with font-medium and font-serif italic span */}
                <h3
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-medium tracking-tight text-neutral-950 leading-snug sm:leading-tight mb-3"
                  style={{ fontFamily: 'var(--font-grotesk-neue)' }}
                >
                  {service.title}{' '}
                  <span className="font-serif italic font-normal text-neutral-800">
                    {service.titleItalic}
                  </span>
                </h3>

                {/* Description */}
                <p className="text-sm sm:text-base text-neutral-600 font-sans leading-relaxed mb-4 max-w-xl font-normal">
                  {service.description}
                </p>

                {/* Subheading */}
                <p
                  className="text-sm sm:text-base font-medium text-neutral-900 mb-3"
                  style={{ fontFamily: 'var(--font-grotesk-neue)' }}
                >
                  {service.subheading}
                </p>

                {/* Feature list with icon boxes */}
                <div className="flex flex-col gap-2.5 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-neutral-50 border border-neutral-200/70 flex items-center justify-center shrink-0 shadow-2xs">
                        {getFeatureIcon(feature)}
                      </div>
                      <span className="text-xs sm:text-sm font-medium text-neutral-800">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <div>
                  <a
                    href="#contact"
                    className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-neutral-950 text-white font-medium text-xs sm:text-sm tracking-wide transition-all duration-300 hover:bg-neutral-800 hover:scale-[1.02] active:scale-[0.98] shadow-md cursor-pointer"
                  >
                    <span>{service.cta}</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
