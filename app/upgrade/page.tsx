// /app/upgrade/page.tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { siteConfig } from "@/config/siteConfig";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { CheckCircle2, Sparkles } from "lucide-react";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";

export default function UpgradePage() {
    const { title, description, currentPlan, plans } = siteConfig.upgrade;

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

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
                >
                    {description}
                </motion.p>

                <Separator className="my-10 w-24 mx-auto bg-violet-500/40" />

                {/* Current Plan */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-3xl mx-auto mb-16"
                >
                    <Card className="border border-gray-200 dark:border-slate-800 shadow-lg bg-white/70 dark:bg-slate-900/60 backdrop-blur-lg">
                        <CardHeader>
                            <CardTitle className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                                Your Current Plan: {currentPlan.name}
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-gray-600 dark:text-gray-300">
                                {currentPlan.description}
                            </p>
                            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                                {currentPlan.limits}
                            </p>
                        </CardContent>
                    </Card>
                </motion.div>

                {/* Upgrade Options */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <TooltipProvider>
                        {plans.map((plan, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 * index, duration: 0.6 }}
                            >
                                <Card
                                    className={`relative overflow-hidden border ${plan.popular
                                            ? "border-violet-500 shadow-violet-500/30"
                                            : "border-gray-200 dark:border-slate-800"
                                        } shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all bg-white/70 dark:bg-slate-900/60 backdrop-blur-lg`}
                                >
                                    {plan.badge && (
                                        <Badge className="absolute top-4 right-4 bg-violet-600 text-white">
                                            {plan.badge}
                                        </Badge>
                                    )}

                                    <CardHeader>
                                        <CardTitle className="text-2xl font-semibold text-gray-900 dark:text-gray-100 flex justify-center items-center gap-2">
                                            <Sparkles className="h-5 w-5 text-violet-600" />
                                            {plan.name}
                                        </CardTitle>
                                        <p className="text-lg text-violet-600 font-semibold mt-2">
                                            {plan.price}
                                        </p>
                                    </CardHeader>

                                    <CardContent>
                                        <ul className="text-gray-700 dark:text-gray-300 text-left space-y-2 mt-4">
                                            {plan.features.map((feature, i) => (
                                                <li key={i} className="flex items-center gap-2">
                                                    <CheckCircle2 className="h-4 w-4 text-violet-500" />
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>

                                        <Tooltip>
                                            <TooltipTrigger asChild>
                                                <Button
                                                    size="lg"
                                                    asChild
                                                    className="mt-6 w-full bg-violet-600 hover:bg-violet-700 text-white rounded-xl"
                                                >
                                                    <Link href={plan.href || "#"}>
                                                        Upgrade Now
                                                    </Link>
                                                </Button>
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Upgrade to the {plan.name} plan</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </TooltipProvider>
                </div>

                {/* ✅ Placeholder for Stripe Checkout */}
                {/* 
          If you want Stripe integration later:
          - Replace Link href with a checkout URL
          - Or use a modal trigger that opens payment flow
        */}
            </div>
        </section>
    );
}
