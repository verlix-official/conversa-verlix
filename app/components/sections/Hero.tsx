// HeroSection.tsx
"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { siteConfig } from "@/config/siteConfig";

export default function HeroSection() {
  const hero = siteConfig.heroSection; 

  return (
    <section className="relative overflow-hidden flex items-center justify-center min-h-screen bg-linear-to-br from-violet-600/10 via-slate-900 to-slate-950 px-0 md:px-6 pt-28 pb-16 text-center">
      {/* ✨ Background Blur Circles */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-violet-600/30 blur-[120px] rounded-full opacity-50 animate-pulse" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-blue-500/30 blur-[100px] rounded-full opacity-40 animate-pulse" />

      <div className="relative z-10 max-w-360 mx-auto w-full">
        {/* 🌟 Title */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold leading-tight text-gray-900 dark:text-gray-100"
          dangerouslySetInnerHTML={{
            __html: hero.title.replace("{brand}", siteConfig.brand.name),
          }}
        />

        {/* 🪶 Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
        >
          {hero.subtitle}
        </motion.p>

        {/* 🚀 CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
        >
          {/* Primary Button */}
          <Button
            size="lg"
            className="px-8 py-6 text-lg bg-violet-600 hover:bg-violet-700 transition-all shadow-lg"
            asChild
          >
            <a href={hero.ctaButtons[0].href}>
              {hero.ctaButtons[0].label} <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>

          {/* Secondary Button */}
          <Button
            size="lg"
            variant="outline"
            className="px-8 py-6 text-lg border-gray-400 hover:bg-gray-100 dark:hover:bg-slate-800"
            asChild
          >
            <a href={hero.ctaButtons[1].href}>{hero.ctaButtons[1].label}</a>
          </Button>
        </motion.div>

        {/* 🖼️ Product Preview */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-16 relative mx-auto w-full max-w-[100vw] rounded-none md:rounded-2xl overflow-hidden shadow-2xl border border-gray-200 dark:border-slate-700"
        >
          <Image
            src={hero.image}
            alt="App Preview"
            width={1920}
            height={1080}
            className="w-full h-auto object-cover"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
