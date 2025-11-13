"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { siteConfig } from "@/config/siteConfig";

function renderStars(rating: number) {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (rating >= i) {
      stars.push(<FaStar key={i} className="text-yellow-400 inline-block" />);
    } else if (rating >= i - 0.5) {
      stars.push(
        <FaStarHalfAlt key={i} className="text-yellow-400 inline-block" />
      );
    } else {
      stars.push(<FaRegStar key={i} className="text-yellow-400 inline-block" />);
    }
  }
  return stars;
}

export default function ReviewsSection() {
  const { reviews } = siteConfig;

  return (
    <section className="relative py-24 bg-linear-to-b from-white to-slate-50 dark:from-slate-950 dark:to-slate-900">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-extrabold text-gray-900 dark:text-gray-100"
        >
          {reviews.sectionTitle}
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
        >
          {reviews.sectionSubtitle}
        </motion.p>

        {/* Reviews Grid */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {reviews.reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * i, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
            >
              <Card className="border border-gray-200 dark:border-slate-800 shadow-lg rounded-2xl bg-white/70 dark:bg-slate-900/60 backdrop-blur-lg p-6 text-left">
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-4">
                    <img
                      src={review.image}
                      alt={review.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-violet-500"
                    />
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                        {review.name}
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {review.role}
                      </p>
                      <div className="mt-1">{renderStars(review.rating)}</div>
                    </div>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed">
                    {review.feedback}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
