"use client";

import React from "react";
import { cn } from "@/lib/utils";

export interface AuroraHeroProps extends React.HTMLAttributes<HTMLDivElement> {
  /** The main title text to display with the glass displacement effect. */
  title?: string;
  /** Optional children elements to render inside the hero container */
  children?: React.ReactNode;
}

export function AuroraHero({
  title,
  children,
  className,
  ...props
}: AuroraHeroProps) {
  // Safely URL-encoded SVG string for the fluted glass effect
  const filterImageHref =
    "data:image/svg+xml," +
    encodeURIComponent(`
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1' color-interpolation-filters='sRGB'>
      <g>
        <rect width='1' height='1' fill='black' />
        <rect width='1' height='1' fill='url(#red)' style='mix-blend-mode:screen' />
        <rect width='1' height='1' fill='url(#green)' style='mix-blend-mode:screen' />
        <rect width='1' height='1' fill='url(#yellow)' style='mix-blend-mode:screen' />
      </g>
      <defs>
        <radialGradient id='yellow' cx='0' cy='0' r='1' >
          <stop stop-color='yellow' />
          <stop stop-color='yellow' offset='1' stop-opacity='0' />
        </radialGradient>
        <radialGradient id='green' cx='1' cy='0' r='1' >
          <stop stop-color='green' />
          <stop stop-color='green' offset='1' stop-opacity='0' />
        </radialGradient>
        <radialGradient id='red' cx='0' cy='1' r='1' >
          <stop stop-color='red' />
          <stop stop-color='red' offset='1' stop-opacity='0' />
        </radialGradient>
      </defs>
    </svg>
  `);

  return (
    <section
      className={cn(
        "aurora-hero-wrapper w-full min-h-screen relative overflow-hidden flex items-center justify-center bg-white text-neutral-900",
        className
      )}
      {...props}
    >
      <style>{`
        .aurora-hero-wrapper {
          --stripe-color: #ffffff;
          --bg-filter: blur(12px) opacity(70%) saturate(170%);
          background: #ffffff;
          font-family: Inter, sans-serif;
        }
        @keyframes smoothBg {
          from { background-position: 50% 50%, 50% 50%; }
          to { background-position: 350% 50%, 350% 50%; }
        }
        .aurora-hero-bg {
          width: 100%;
          height: 100%;
          position: absolute;
          inset: 0;
          --stripes: repeating-linear-gradient(
            100deg, 
            var(--stripe-color) 0%, 
            var(--stripe-color) 7%, 
            transparent 10%, 
            transparent 12%, 
            var(--stripe-color) 16%
          );
          --rainbow: repeating-linear-gradient(
            100deg, 
            #60a5fa 10%, 
            #e879f9 18%, 
            #5eead4 26%, 
            #fbbf24 34%, 
            #f87171 42%,
            #60a5fa 50%
          );
          background-image: var(--stripes), var(--rainbow);
          background-size: 300%, 200%;
          background-position: 50% 50%, 50% 50%;
          filter: var(--bg-filter);
          mask-image: radial-gradient(ellipse at 50% 30%, black 50%, transparent 85%);
          -webkit-mask-image: radial-gradient(ellipse at 50% 30%, black 50%, transparent 85%);
        }
        .aurora-hero-bg::after {
          content: "";
          position: absolute;
          inset: 0;
          background-image: var(--stripes), var(--rainbow);
          background-size: 200%, 100%;
          animation: smoothBg 45s linear infinite;
          background-attachment: fixed;
          mix-blend-mode: color-dodge;
          opacity: 0.85;
        }
        .aurora-content {
          position: relative;
          z-index: 20;
          width: 100%;
          max-width: 56rem;
          margin-left: auto;
          margin-right: auto;
          padding-left: 1rem;
          padding-right: 1rem;
          display: flex;
          place-content: center;
          place-items: center;
          flex-flow: column;
          text-align: center;
        }
        .h1-scalingSize {
          font-size: calc(1.5rem + 3vw);
          position: relative;
          isolation: isolate;
          font-weight: 700;
          color: #09090b;
        }
      `}</style>

      {/* 🌌 Animated Aurora Hero Background */}
      <div className="aurora-hero-bg pointer-events-none z-0"></div>

      {/* ☀️ Center Feathered Soft White Lens for 100% High Contrast Light Mode */}
      <div
        className="absolute inset-0 z-5 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 92% 75% at 50% 30%, rgba(255,255,255,0.96) 0%, rgba(255,255,255,0.82) 58%, transparent 100%)',
        }}
      />

      {/* 🔮 Content Container (Removed default "Vengeance UI" text; renders title if provided or children) */}
      <div className="aurora-content">
        {title && <h1 className="h1-scalingSize">{title}</h1>}
        {children}
      </div>

      {/* SVG Fluted Glass Displacement Filter */}
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        colorInterpolationFilters="sRGB"
        style={{ position: "absolute", opacity: 0, height: 0, width: 0, pointerEvents: "none" }}
        aria-hidden="true"
        focusable="false"
      >
        <filter id="fluted" primitiveUnits="objectBoundingBox">
          <feImage
            x="0"
            y="0"
            result="image_0"
            crossOrigin="anonymous"
            href={filterImageHref}
            preserveAspectRatio="none meet"
            width=".03"
            height="1"
          />
          <feTile in="image_0" result="tile_0" />
          <feGaussianBlur stdDeviation=".0001" edgeMode="none" in="tile_0" result="bar_smoothness" x="0" y="0" />
          <feDisplacementMap
            scale=".08"
            xChannelSelector="R"
            yChannelSelector="G"
            in="SourceGraphic"
            in2="bar_smoothness"
            result="displacement_0"
          />
        </filter>
      </svg>
    </section>
  );
}

export default AuroraHero;
