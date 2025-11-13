// /app/demo/page.tsx
"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/siteConfig";
import Image from "next/image";
import { PlayCircle } from "lucide-react";

export default function DemoPage() {
    const { title, subtitle, videoUrl, images } = siteConfig.demo;

    return (
        <section className="relative py-28 bg-linear-to-b from-white to-slate-50 dark:from-slate-950 dark:to-slate-900">
            <div className="max-w-6xl mx-auto px-6 text-center">
                {/* Title */}
                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-gray-100"
                >
                    {title}
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
                >
                    {subtitle}
                </motion.p>

                <Separator className="my-10 w-24 mx-auto bg-violet-500/40" />

                {/* Video Section */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex justify-center"
                >
                    <Card className="overflow-hidden rounded-2xl shadow-xl border border-gray-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/70 backdrop-blur-lg max-w-4xl w-full">
                        <CardContent className="p-0">
                            <div className="aspect-video w-full">
                                <iframe
                                    className="w-full h-full rounded-2xl"
                                    src={videoUrl}
                                    title="Conversa Verlix Demo"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>

                {/* Optional CTA */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="mt-8"
                >
                    <Button
                        size="lg"
                        className="rounded-xl bg-violet-600 hover:bg-violet-700 text-white px-8"
                        asChild
                    >
                        <a href={siteConfig.brand.cta.tryFree}>
                            <PlayCircle className="mr-2 h-5 w-5" /> Try Now
                        </a>
                    </Button>
                </motion.div>

                {/* Image Gallery */}
                <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    <TooltipProvider>
                        {images.map((img, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 * i, duration: 0.6 }}
                            >
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <Card className="overflow-hidden shadow-md hover:shadow-xl transition-all rounded-2xl border border-gray-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60">
                                            <CardContent className="p-0">
                                                <Image
                                                    src={img.src}
                                                    alt={img.alt}
                                                    width={600}
                                                    height={400}
                                                    className="object-cover w-full h-60"
                                                />
                                            </CardContent>
                                        </Card>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>{img.caption}</p>
                                    </TooltipContent>
                                </Tooltip>
                            </motion.div>
                        ))}
                    </TooltipProvider>
                </div>
            </div>
        </section>
    );
}
