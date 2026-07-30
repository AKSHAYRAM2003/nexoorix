import type { Metadata } from "next";
import localFont from "next/font/local";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
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

export const metadata: Metadata = {
  title: "Nexoorix - Next.js & Tailwind CSS Studio",
  description: "Next.js App Router application with FK Grotesk typography and framed responsive layout.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${groteskNeue.variable} ${groteskLight.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-white text-neutral-900 font-sans selection:bg-neutral-900 selection:text-white">
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
