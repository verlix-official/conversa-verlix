"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { featuresConfig } from "@/config/features";

export default function FeatureSection() {
  const { sectionTitle, features } = featuresConfig;

  return (
    <section className="relative py-24 bg-linear-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-extrabold text-gray-900 dark:text-gray-100"
        >
          {sectionTitle}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
        >
          Everything you need to build, launch, and scale your next big idea — beautifully and efficiently.
        </motion.p>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => {
            const Icon = f.icon!;
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
                      {f.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {f.description}
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
