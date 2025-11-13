// /config/features.ts
import {
    Brain,
    Shield,
    Zap,
    Cpu,
    Lock,
    Sparkles,
    Rocket,
    MessageSquare,
    Cloud,
} from "lucide-react";
import React from "react";

// 🔹 Feature type definition
export type FeatureItem = {
    title: string;
    description: string;
    iconKey: string; // keyword for auto-detecting icon
    icon?: React.ElementType;
};

// 🔹 Icon map for automatic icon detection
const iconMap: Record<string, React.ElementType> = {
    ai: Brain,
    secure: Shield,
    fast: Zap,
    performance: Zap,
    data: Cpu,
    privacy: Lock,
    creative: Sparkles,
    innovation: Rocket,
    chat: MessageSquare,
    cloud: Cloud,
};

// 🔹 Feature list (add more anytime — icons will be auto-detected)
const featureList: FeatureItem[] = [
    {
        title: "Clean & Modern Code",
        description:
            "Built with the latest React and Tailwind standards for performance and maintainability.",
        iconKey: "creative",
    },
    {
        title: "AI-Powered Insights",
        description:
            "Leverage intelligent analytics to make data-driven decisions effortlessly.",
        iconKey: "ai",
    },
    {
        title: "Blazing Fast Performance",
        description:
            "Optimized for speed and scalability — delivering instant load times across all devices.",
        iconKey: "fast",
    },
    {
        title: "Secure by Design",
        description:
            "Your data is protected with top-grade encryption and modern security best practices.",
        iconKey: "secure",
    },
];

// 🔹 Automatically attach icons from iconMap
const featuresWithIcons = featureList.map((item) => ({
    ...item,
    icon: iconMap[item.iconKey] || Sparkles,
}));

// 🔹 Export main configuration
export const featuresConfig = {
    sectionTitle: "Powerful Features Built for You",
    features: featuresWithIcons,
};

export type FeaturesConfig = typeof featuresConfig;
