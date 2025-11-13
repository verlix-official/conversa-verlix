"use client";

import { useMemo, useState } from "react";
import { faqList, type FaqItem } from "@/config/faq";
import { siteConfig } from "@/config/siteConfig";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { ScanSearch } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function FAQPage() {
  const data: FaqItem[] = faqList; // ← faqList 
  const [query, setQuery] = useState("");
  const [activeTag, setActiveTag] = useState<string | null>(null);

  // ✅ Unique tags
  const tags = useMemo(() => {
    const s = new Set<string>();
    data.forEach((d) => (d.tags || []).forEach((t) => s.add(t)));
    return Array.from(s);
  }, [data]);

  // ✅ Filtered FAQs
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return data.filter((item) => {
      const matchesTag = activeTag ? (item.tags || []).includes(activeTag) : true;
      const matchesQuery =
        !q ||
        item.question.toLowerCase().includes(q) ||
        item.answer.toLowerCase().includes(q);
      return matchesTag && matchesQuery;
    });
  }, [data, query, activeTag]);

  return (
    <main className="max-w-5xl mx-auto px-6 pt-20 pb-40">
      {/* ✅ Header dynamic from siteConfig */}
      <header className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
          {siteConfig.faq.title}
        </h1>
        <p className="mt-2 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          {siteConfig.faq.subtitle}
        </p>
      </header>

      {/* Search + Tags */}
      <div className="mb-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Search bar */}
        <div className="md:col-span-2">
          <label className="sr-only">Search FAQs</label>
          <div className="relative">
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search help topics, e.g. 'password', 'billing'..."
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
              <ScanSearch size={16} />
            </span>
          </div>
        </div>

        {/* Tag filters */}
        <div className="flex items-center gap-2">
          <div className="flex flex-wrap gap-2">
            <Badge
              className={`cursor-pointer ${activeTag === null ? "bg-violet-600 text-white" : ""
                }`}
              onClick={() => setActiveTag(null)}
            >
              All
            </Badge>
            {tags.map((t) => (
              <Badge
                key={t}
                className={`cursor-pointer ${activeTag === t ? "bg-violet-600 text-white" : ""
                  }`}
                onClick={() => setActiveTag((prev) => (prev === t ? null : t))}
              >
                {t}
              </Badge>
            ))}
          </div>
        </div>
      </div>

      {/* Results */}
      {filtered.length === 0 ? (
        <div className="py-16 text-center text-gray-500">
          No results — try another query.
        </div>
      ) : (
        <Accordion type="single" collapsible className="space-y-3">
          {filtered.map((f) => (
            <AccordionItem
              key={f.id}
              value={f.id}
              className="border rounded-lg px-4 py-2 bg-white/80 dark:bg-black/40 shadow-sm"
            >
              <AccordionTrigger className="text-base font-medium text-gray-800 dark:text-gray-100 hover:text-violet-600">
                {f.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 dark:text-gray-300 leading-relaxed">
                <div
                  className="prose max-w-none dark:prose-invert"
                  dangerouslySetInnerHTML={{ __html: f.answer }}
                />
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      )}
    </main>
  );
}
