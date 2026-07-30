'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useMediaQuery } from '@/components/use-media-query';
import MotionDrawer from '@/components/ui/motion-drawer';

interface NavbarProps {
  timelineRef?: React.RefObject<HTMLElement | null>;
}

export default function Navbar({}: NavbarProps = {}) {
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <header className="w-full sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-neutral-200/80 transition-colors">
      <div className="w-full px-6 sm:px-10 py-2 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center group">
          <Image
            src="/assets/iamges/nexoorix-logo.png"
            alt="Nexoorix Logo"
            width={220}
            height={45}
            className="h-11 md:h-11 w-auto object-contain transition-transform duration-200 group-hover:scale-100"
            priority
          />
        </Link>

        {/* Center Desktop Navigation Links */}
        {!isMobile && (
          <nav className="hidden md:flex items-center gap-10 text-md font-bold text-neutral-700">
            <a href="#" className="hover:text-neutral-950 transition-colors">
              Home
            </a>
            <a href="#" className="hover:text-neutral-950 transition-colors">
              About
            </a>
            <a href="#" className="hover:text-neutral-950 transition-colors">
              Solution
            </a>
            <a href="#" className="hover:text-neutral-950 transition-colors">
              Blog
            </a>
          </nav>
        )}

        {/* Right CTA Action Buttons */}
        {!isMobile && (
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#dashboard"
              className="px-5 py-2 rounded-full border border-neutral-300 text-neutral-800 text-xs font-semibold hover:bg-neutral-100 transition-colors"
            >
              Dashboard
            </a>
            <a
              href="#get-started"
              className="px-5 py-2 rounded-full bg-neutral-950 hover:bg-neutral-800 text-white text-xs font-semibold transition-all shadow-sm hover:shadow-md"
            >
              Book a Demo
            </a>
          </div>
        )}

        {/* Mobile Navigation Drawer */}
        {isMobile && (
          <div className="md:hidden flex items-center gap-2">
            <MotionDrawer
              direction="left"
              width={300}
              backgroundColor={'#ffffff'}
              clsBtnClassName="bg-neutral-800 border-r border-neutral-900 text-white"
              contentClassName="bg-white border-r border-neutral-200 text-black"
              btnClassName="bg-white text-black relative w-fit p-2 rounded-full shadow-xs border border-neutral-200"
            >
              <nav className="space-y-4 pt-4">
                <div className="flex items-center gap-2 text-black mb-6">
                  <Image
                    src="/assets/iamges/nexoorix-logo.png"
                    alt="Nexoorix Logo"
                    width={220}
                    height={55}
                    className="h-10 w-auto object-contain"
                    priority
                  />
                </div>
                <a
                  href="#"
                  className="block p-2 hover:bg-neutral-200/60 hover:text-black rounded-full px-4 text-sm font-medium"
                >
                  Home
                </a>
                 <a
                  href="#"
                  className="block p-2 hover:bg-neutral-200/60 hover:text-black rounded-full px-4 text-sm font-medium"
                >
                  Work
                </a>
                <a
                  href="#"
                  className="block p-2 hover:bg-neutral-200/60 hover:text-black rounded-full px-4 text-sm font-medium"
                >
                  About
                </a>
                <a
                  href="#"
                  className="block p-2 hover:bg-neutral-200/60 hover:text-black rounded-full px-4 text-sm font-medium"
                >
                  Solutions
                </a>
                
                <a
                  href="#"
                  className="block p-2 hover:bg-neutral-200/60 hover:text-black rounded-full px-4 text-sm font-medium"
                >
                  Blog
                </a>
                <div className="pt-4 flex flex-col gap-2">
                  <a
                    href="#dashboard"
                    className="w-full text-center py-2.5 rounded-full border border-neutral-300 text-neutral-800 font-semibold text-xs"
                  >
                    Dashboard
                  </a>
                  <a
                    href="#get-started"
                    className="w-full text-center py-2.5 rounded-full bg-neutral-950 text-white font-semibold text-xs"
                  >
                    Book a Demo
                  </a>
                </div>
              </nav>
            </MotionDrawer>
          </div>
        )}
      </div>
    </header>
  );
}
