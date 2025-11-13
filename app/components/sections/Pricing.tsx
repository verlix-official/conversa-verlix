"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/siteConfig";

export default function PricingSection() {
  const { pricing } = siteConfig;

  return (
    <section className="relative py-24 bg-linear-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-extrabold text-gray-900 dark:text-gray-100"
        >
          {pricing.sectionTitle}
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
        >
          {pricing.sectionSubtitle}
        </motion.p>

        {/* Plans Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricing.plans.map((plan, i) => {
            const Icon = plan.icon!;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * i, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <Card
                  className={`border border-gray-200 dark:border-slate-800 shadow-lg hover:shadow-violet-500/30 transition-all rounded-2xl bg-white/70 dark:bg-slate-900/60 backdrop-blur-lg ${plan.isPopular ? "border-violet-500" : ""
                    }`}
                >
                  <CardContent className="p-8 text-center space-y-6">
                    {plan.isPopular && (
                      <span className="text-sm text-white bg-violet-600 px-3 py-1 rounded-full uppercase tracking-wider">
                        Popular
                      </span>
                    )}

                    <div className="flex justify-center">
                      <Icon className="w-10 h-10 text-violet-600 mb-3" />
                    </div>

                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                      {plan.name}
                    </h3>

                    <p className="text-3xl font-bold text-gray-900 dark:text-gray-100">
                      {plan.price}
                    </p>

                    <p className="text-gray-600 dark:text-gray-400 text-base">
                      {plan.description}
                    </p>

                    <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                      {plan.features.map((f, idx) => (
                        <li key={idx}>• {f}</li>
                      ))}
                    </ul>

                    <Button
                      className="mt-4 w-full"
                      variant={plan.isPopular ? "default" : "outline"}
                      asChild
                    >
                      <a href={plan.ctaHref}>{plan.ctaLabel}</a>
                    </Button>
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
