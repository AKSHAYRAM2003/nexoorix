'use client';

import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed bottom-5 sm:bottom-6 md:bottom-8 inset-x-0 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16 pointer-events-none z-50 flex justify-end">
      <button
        onClick={scrollToTop}
        aria-label="Back to Top"
        title="Back to Top"
        className={`h-10 w-10 sm:h-11 sm:w-11 lg:h-12 lg:w-12 rounded-full flex items-center justify-center bg-white/95 border border-neutral-200/90 text-neutral-800 hover:text-white hover:bg-neutral-950 hover:border-neutral-950 shadow-[0_8px_24px_rgba(0,0,0,0.14)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.24)] transition-all duration-300 backdrop-blur-xl group cursor-pointer mr-0 sm:mr-0 lg:mr-8 ${
          isVisible
            ? 'opacity-100 translate-y-0 pointer-events-auto scale-100'
            : 'opacity-0 translate-y-4 pointer-events-none scale-90'
        }`}
      >
        <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5 text-neutral-700 group-hover:text-white group-hover:-translate-y-0.5 transition-transform duration-200" />
      </button>
    </div>
  );
}
