'use client';

import React from 'react';
import Image from 'next/image';
import {
  ArrowUpRight,
  Mail,
} from 'lucide-react';

const LinkedInIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
  </svg>
);

export default function FooterSection() {
  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative w-full bg-[#faf9f7] text-neutral-900 overflow-hidden border-t border-neutral-200/80">
      {/* 🌈 Top subtle multi-color brand ambient gradient accent line */}
      <div className="h-[2px] w-full bg-gradient-to-r from-blue-500 via-emerald-400 via-amber-400 to-red-500" />

      {/* Main Footer Container */}
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 pt-14 sm:pt-16 pb-10">
        
        {/* Top Grid: Left Brand Column + Right Navigation Columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 pb-12 border-b border-neutral-200/70">
          
          {/* Left Column — Brand Identity & Contact (5 cols on tab & desktop) */}
          <div className="md:col-span-5 flex flex-col justify-between space-y-6">
            <div className="space-y-4 max-w-md">
              {/* Logo with smooth click redirect to home hero */}
              <div className="flex items-center gap-2.5">
                <a
                  href="#"
                  onClick={scrollToTop}
                  className="inline-block hover:scale-[1.01] transition-transform duration-300 cursor-pointer"
                  title="Redirect to Home"
                >
                  <Image
                    src="/assets/iamges/nexoorix-logo.png"
                    alt="Nexoorix Logo"
                    width={140}
                    height={38}
                    className="h-8 w-auto object-contain"
                    priority
                  />
                </a>
              </div>

              {/* Tagline */}
              <p className="text-xs sm:text-sm text-neutral-600 font-sans leading-relaxed font-normal">
                We empower startups and enterprises with intelligent AI automation, scalable custom software, and data-driven digital marketing solutions built for real growth.
              </p>
            </div>

            {/* Direct Contact & Email */}
            <div className="space-y-3 pt-1">
              <a
                href="mailto:contact@nexoorix.com"
                className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white border border-neutral-200/90 text-neutral-800 font-medium text-xs sm:text-sm hover:text-blue-600 hover:border-blue-200 transition-all shadow-2xs hover:shadow-xs group"
              >
                <Mail className="w-4 h-4 text-neutral-400 group-hover:text-blue-600 transition-colors" />
                <span>contact@nexoorix.com</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-blue-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right Columns — Navigation Grid (7 cols on tab & desktop) */}
          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8">
            
            {/* Column 1: Services */}
            <div className="space-y-4">
              <h3
                className="text-xs font-semibold text-neutral-950 uppercase tracking-[0.18em]"
                style={{ fontFamily: 'var(--font-grotesk-neue)' }}
              >
                Services
              </h3>
              <ul className="space-y-2.5 text-xs sm:text-sm text-neutral-600">
                <li>
                  <a href="#services" className="hover:text-neutral-950 hover:translate-x-1 inline-block transition-transform duration-200">
                    Custom Software
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-neutral-950 hover:translate-x-1 inline-block transition-transform duration-200">
                    AI Automation
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-neutral-950 hover:translate-x-1 inline-block transition-transform duration-200">
                    GenAI &amp; AI Agents
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-neutral-950 hover:translate-x-1 inline-block transition-transform duration-200">
                    Digital Growth &amp; SEO
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 2: Company */}
            <div className="space-y-4">
              <h3
                className="text-xs font-semibold text-neutral-950 uppercase tracking-[0.18em]"
                style={{ fontFamily: 'var(--font-grotesk-neue)' }}
              >
                Company
              </h3>
              <ul className="space-y-2.5 text-xs sm:text-sm text-neutral-600">
                <li>
                  <a href="#about" className="hover:text-neutral-950 hover:translate-x-1 inline-block transition-transform duration-200">
                    About Nexoorix
                  </a>
                </li>
                <li>
                  <a href="#growth-loop" className="hover:text-neutral-950 hover:translate-x-1 inline-block transition-transform duration-200">
                    Growth Loop Flywheel
                  </a>
                </li>
                <li>
                  <a href="#portfolio" className="hover:text-neutral-950 hover:translate-x-1 inline-block transition-transform duration-200">
                    Portfolio &amp; Work
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-neutral-950 hover:translate-x-1 inline-block transition-transform duration-200">
                    Book a Demo
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3: Connect (LinkedIn Only with exact brand color #0A66C2) */}
            <div className="space-y-4 col-span-2 sm:col-span-1">
              <h3
                className="text-xs font-semibold text-neutral-950 uppercase tracking-[0.18em]"
                style={{ fontFamily: 'var(--font-grotesk-neue)' }}
              >
                Connect
              </h3>
              <div className="flex flex-col items-start space-y-2.5">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-white border border-neutral-200/90 text-neutral-700 hover:border-[#0A66C2]/40 hover:text-[#0A66C2] transition-all shadow-2xs hover:shadow-xs group"
                >
                  <LinkedInIcon className="w-4 h-4 text-[#0A66C2] group-hover:scale-110 transition-transform" />
                  <span className="font-medium text-xs sm:text-sm">LinkedIn</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-[#0A66C2] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Bar: Copyright & Policy Links */}
        <div className="pt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs sm:text-sm text-neutral-600 font-sans font-normal">
          <div>
            © {new Date().getFullYear()} Nexoorix Inc. All rights reserved. Built with precision for growing businesses.
          </div>

          <div className="flex items-center gap-5 sm:gap-6 shrink-0">
            <a href="#" className="hover:text-neutral-950 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-neutral-950 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
