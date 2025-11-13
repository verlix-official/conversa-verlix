"use client";

import React from "react";
import { siteConfig } from "@/config/siteConfig";

export default function PrivacyPolicyPage() {
  const { title, intro, sections, contactEmail } = siteConfig.privacyPolicy;

  return (
    <section className="max-w-4xl mx-auto px-6 py-16 mt-12 md:mt-16">
      <h1 className="text-3xl font-bold mb-8 text-gray-800 dark:text-gray-100">
        {title}
      </h1>

      <p className="text-gray-700 dark:text-gray-300 mb-4">{intro}</p>

      {sections.map((section, index) => (
        <div key={index} className="mt-8">
          <h2 className="font-semibold text-lg text-gray-900 dark:text-gray-100 mb-2">
            {section.heading}
          </h2>
          {section.content.map((paragraph, i) => (
            <p
              key={i}
              className="text-gray-700 dark:text-gray-300 mb-3 leading-relaxed"
            >
              {paragraph}
            </p>
          ))}
        </div>
      ))}

      {/* Contact info (optional fallback) */}
      <div className="mt-8">
        <p className="text-gray-700 dark:text-gray-300">
          For inquiries, reach us at:{" "}
          <a
            href={`mailto:${contactEmail}`}
            className="text-violet-600 hover:underline"
          >
            {contactEmail}
          </a>
        </p>
      </div>
    </section>
  );
}
