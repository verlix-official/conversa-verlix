// /config/pricing.ts
import { Rocket, Zap, Building } from "lucide-react";

export type PricingPlan = {
    name: string;
    price: string;
    description: string;
    features: string[];
    ctaLabel: string;
    ctaHref: string;
    isPopular?: boolean;
    iconKey?: string;
    icon?: React.ElementType;
};

const iconMap: Record<string, React.ElementType> = {
    starter: Rocket,
    pro: Zap,
    enterprise: Building,
};

const plans: PricingPlan[] = [
    {
        name: "Basic",
        price: "$19/mo",
        description: "Perfect for individuals starting out.",
        features: ["Up to 3 projects", "Basic analytics", "Email support"],
        ctaLabel: "Get Started",
        ctaHref: "/signup",
        iconKey: "starter",
    },
    {
        name: "Pro",
        price: "$49/mo",
        description: "Best for professionals and growing teams.",
        features: [
            "Unlimited projects",
            "Advanced analytics",
            "Priority support",
            "Custom integrations",
        ],
        ctaLabel: "Upgrade Now",
        ctaHref: "/upgrade",
        isPopular: true,
        iconKey: "pro",
    },
    {
        name: "Enterprise",
        price: "Custom",
        description: "Tailored solutions for enterprises.",
        features: [
            "All Pro features",
            "Dedicated account manager",
            "Custom SLAs",
            "Enterprise integrations",
        ],
        ctaLabel: "Contact Sales",
        ctaHref: "/contact",
        iconKey: "enterprise",
    },
];

export const pricingConfig = {
    sectionTitle: "Simple, Transparent Pricing",
    sectionSubtitle:
        "Choose the plan that fits your needs — upgrade, downgrade, or customize anytime.",
    plans: plans.map((p) => ({
        ...p,
        icon: iconMap[p.iconKey || "starter"],
    })),
};
