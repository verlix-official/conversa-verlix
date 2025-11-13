"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { siteConfig } from "@/config/siteConfig";

export default function UseCasesSection() {
  const { sectionTitle, subtitle, useCases } = siteConfig.useCases;

  return (
    <section className="relative py-24 bg-linear-to-b from-white to-slate-50 dark:from-slate-950 dark:to-slate-900">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-extrabold text-gray-900 dark:text-gray-100"
        >
          {sectionTitle}
        </motion.h2>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          >
            {subtitle}
          </motion.p>
        )}

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {useCases.map((uc, i) => {
            const Icon = uc.icon!;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * i, duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="border border-gray-200 dark:border-slate-800 shadow-lg hover:shadow-violet-500/30 transition-all rounded-2xl bg-white/70 dark:bg-slate-900/60 backdrop-blur-lg">
                  <CardContent className="p-8 text-center space-y-4">
                    <div className="flex justify-center">
                      <Icon className="w-8 h-8 text-violet-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                      {uc.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {uc.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
