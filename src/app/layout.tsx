import type { Metadata } from "next";
import localFont from "next/font/local";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
import JsonLd from "@/components/JsonLd";
import "./globals.css";

const groteskNeue = localFont({
  src: "../../public/assets/fonts/fk-grotesk-nueue.ttf",
  variable: "--font-grotesk-neue",
  display: "swap",
});

const groteskLight = localFont({
  src: "../../public/assets/fonts/FK Grotesk light.ttf",
  variable: "--font-grotesk-light",
  display: "swap",
});

const ppEditorial = localFont({
  src: "../../public/assets/fonts/PP Editorial Regular.ttf",
  variable: "--font-pp-editorial",
  display: "swap",
});

const SITE_URL = "https://www.nexoorix.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: "Nexoorix — AI Automation & Custom Software Solutions",
    template: "%s | Nexoorix",
  },
  description:
    "Nexoorix engineers custom software solutions and AI-driven automation systems that eliminate manual workflows, accelerate productivity, and empower modern enterprises to operate at peak efficiency.",
  keywords: [
    "Nexoorix",
    "AI automation",
    "custom software solutions",
    "AI-driven automation",
    "software development agency",
    "business automation",
    "custom web development",
    "enterprise software",
    "digital transformation",
    "Nexoorix agency",
  ],
  authors: [{ name: "Nexoorix", url: SITE_URL }],
  creator: "Nexoorix",
  publisher: "Nexoorix",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: SITE_URL,
  },

  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Nexoorix",
    title: "Nexoorix — AI Automation & Custom Software Solutions",
    description:
      "Nexoorix engineers custom software solutions and AI-driven automation systems that eliminate manual workflows, accelerate productivity, and empower modern enterprises to scale intelligently.",
    images: [
      {
        url: `${SITE_URL}/opengraph-image`,
        width: 1200,
        height: 630,
        alt: "Nexoorix — AI Automation & Custom Software Solutions",
      },
    ],
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: "Nexoorix — AI Automation & Custom Software Solutions",
    description:
      "Nexoorix engineers custom software and AI-driven automation systems that eliminate manual workflows and empower enterprises to scale intelligently.",
    images: [`${SITE_URL}/opengraph-image`],
    creator: "@nexoorix",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${groteskNeue.variable} ${groteskLight.variable} ${ppEditorial.variable} h-full antialiased`}
    >
      <body suppressHydrationWarning className="min-h-full bg-white text-neutral-900 font-sans selection:bg-neutral-900 selection:text-white">
        <JsonLd />
        <SmoothScroll>
          {/* Main Website Centered Container Framed by Side Lines */}
          <div className="max-w-7xl mx-auto min-h-screen bg-white border-x border-neutral-200/80 shadow-xs flex flex-col relative">
            <Navbar />
            <main className="flex-1 w-full">{children}</main>
          </div>
        </SmoothScroll>
      </body>
    </html>
  );
}
