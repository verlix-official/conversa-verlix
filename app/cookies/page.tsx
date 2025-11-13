"use client";

import React from "react";
import { siteConfig } from "@/config/siteConfig";

export default function CookiePolicyPage() {
  const { title, intro, sections } = siteConfig.cookiePolicy;

  return (
    <section className="max-w-4xl mx-auto px-6 py-16 mt-12 md:mt-16">
      {/* Page Title */}
      <h1 className="text-3xl font-bold mb-8 text-gray-800 dark:text-gray-100">
        {title}
      </h1>

      {/* Introduction */}
      <p className="text-gray-700 dark:text-gray-300 mb-6">{intro}</p>

      {/* Dynamic Sections */}
      {sections.map((section) => (
        <div key={section.id} className="mb-8">
          <h2 className="font-semibold mt-6 text-gray-900 dark:text-gray-100">
            {section.heading}
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mt-2">
            {section.content}
          </p>
        </div>
      ))}
    </section>
  );
}
