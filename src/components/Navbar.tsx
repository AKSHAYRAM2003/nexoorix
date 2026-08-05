'use client';

import React, { useRef, useLayoutEffect, useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useMediaQuery } from '@/components/use-media-query';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';

interface NavbarProps {
  timelineRef?: React.RefObject<HTMLElement | null>;
}

// Navigation items array with Solutions before About, Dashboard removed
const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar({}: NavbarProps = {}) {
  // Enabled for Mobile & Tablet screens up to 1023px (< lg)
  const isMobileOrTablet = useMediaQuery('(max-width: 1023px)');
  const headerRef = useRef<HTMLElement>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('Home');

  // Initial header slide-in animation using GSAP
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { y: -80, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out', delay: 0.1 }
      );
    });
    return () => ctx.revert();
  }, []);

  // Prevent background scrolling when mobile/tablet menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Handle smooth navigation click & auto close drawer
  const handleNavClick = (href: string, label: string) => {
    setActiveSection(label);
    setMobileMenuOpen(false);

    if (href === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (href.startsWith('#')) {
      const targetId = href.replace('#', '');
      if (!targetId) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }
      const el = document.getElementById(targetId);
      if (el) {
        const offset = 80;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = el.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
    }
  };

  return (
    <>
      <header
        ref={headerRef}
        className="w-full sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-neutral-200/80 transition-colors"
        style={{ opacity: 0 }}
      >
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 py-2.5 sm:py-3 flex items-center justify-between">
          
          {/* 1. Brand Logo - Redirect to Home on Click */}
          <Link
            href="/"
            onClick={(e) => {
              if (window.location.pathname === '/') {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
            className="flex items-center group shrink-0 focus:outline-none"
            aria-label="Nexoorix Home Page"
          >
            <Image
              src="/assets/iamges/nexoorix-logo.png"
              alt="Nexoorix Logo"
              width={220}
              height={45}
              className="h-8 min-[360px]:h-9 sm:h-10 md:h-11 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02]"
              priority
            />
          </Link>

          {/* 2. Center Large Screen Navigation Links (1024px+) */}
          {!isMobileOrTablet && (
            <nav className="hidden lg:flex items-center gap-7 lg:gap-9 text-sm lg:text-base font-medium text-neutral-600">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href, item.label);
                  }}
                  className={`relative py-1 transition-colors duration-200 hover:text-neutral-950 ${
                    activeSection === item.label ? 'text-neutral-950 font-semibold' : ''
                  }`}
                >
                  {item.label}
                  {activeSection === item.label && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-neutral-950 rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              ))}
            </nav>
          )}

          {/* 3. Right Large Screen CTA Action Button (1024px+) */}
          {!isMobileOrTablet && (
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('#contact', 'Contact');
                }}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-neutral-950 hover:bg-neutral-800 text-white text-xs lg:text-sm font-semibold transition-all shadow-xs hover:shadow-md active:scale-95 group"
              >
                <span>Book a Demo</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          )}

          {/* 4. Mobile & Tablet Hamburger Menu Toggle Button (< 1024px) */}
          {isMobileOrTablet && (
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden relative z-50 p-2.5 rounded-full bg-neutral-100/90 border border-neutral-200/80 text-neutral-800 hover:text-black hover:bg-neutral-200/60 active:scale-95 transition-all shadow-2xs"
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            >
              <motion.div
                animate={mobileMenuOpen ? 'open' : 'closed'}
                className="w-5 h-5 flex flex-col justify-center items-center relative"
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5 text-neutral-900" />
                ) : (
                  <Menu className="w-5 h-5 text-neutral-900" />
                )}
              </motion.div>
            </button>
          )}
        </div>
      </header>

      {/* 5. Mobile & Tablet Glassmorphism Overlay & Drawer Navigation (< 1024px) */}
      <AnimatePresence>
        {isMobileOrTablet && mobileMenuOpen && (
          <div className="fixed inset-0 z-50 lg:hidden flex justify-end">
            
            {/* Backdrop Blur Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-neutral-950/40 backdrop-blur-md"
            />

            {/* Slide-over Drawer Content */}
            <motion.aside
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="relative w-[85%] max-w-[360px] sm:max-w-[400px] h-full bg-white shadow-2xl border-l border-neutral-200/80 flex flex-col justify-between p-6 sm:p-8 overflow-y-auto z-10"
            >
              <div>
                {/* Drawer Header: Logo + Close */}
                <div className="flex items-center justify-between pb-6 border-b border-neutral-100">
                  <Link
                    href="/"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="flex items-center"
                  >
                    <Image
                      src="/assets/iamges/nexoorix-logo.png"
                      alt="Nexoorix Logo"
                      width={180}
                      height={40}
                      className="h-8 min-[360px]:h-9 w-auto object-contain"
                      priority
                    />
                  </Link>

                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 rounded-full bg-neutral-100 text-neutral-700 hover:text-black hover:bg-neutral-200/80 transition-colors"
                    aria-label="Close Navigation"
                  >
                    <X className="w-4.5 h-4.5" />
                  </button>
                </div>

                {/* Staggered Navigation Links */}
                <nav className="py-6 space-y-1.5 sm:space-y-2">
                  {NAV_ITEMS.map((item, idx) => (
                    <motion.a
                      key={item.label}
                      href={item.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 * idx + 0.1, duration: 0.3 }}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(item.href, item.label);
                      }}
                      className={`flex items-center justify-between px-4 py-3 sm:py-3.5 rounded-2xl text-base sm:text-lg font-medium transition-all duration-200 ${
                        activeSection === item.label
                          ? 'bg-neutral-900 text-white font-semibold shadow-xs'
                          : 'text-neutral-700 hover:bg-neutral-100 hover:text-neutral-950'
                      }`}
                    >
                      <span>{item.label}</span>
                      {activeSection === item.label ? (
                        <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                      ) : (
                        <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 opacity-40 group-hover:opacity-100 transition-opacity" />
                      )}
                    </motion.a>
                  ))}
                </nav>
              </div>

              {/* Bottom CTA & Business Badge inside Drawer */}
              <div className="pt-6 border-t border-neutral-100 space-y-4">
                <div className="flex items-center gap-2 text-neutral-500 text-xs sm:text-sm font-medium px-1">
                  <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600" />
                  <span>Empowering AI-Driven Businesses</span>
                </div>

                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('#contact', 'Contact');
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3 sm:py-3.5 rounded-full bg-neutral-950 hover:bg-neutral-800 text-white text-sm sm:text-base font-semibold shadow-sm transition-all active:scale-98 text-center"
                >
                  <span>Book a Demo</span>
                  <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
              </div>
            </motion.aside>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
