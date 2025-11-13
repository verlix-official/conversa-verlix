// /config/upgrade.ts

export type Plan = {
    name: string;
    price: string;
    features: string[];
    popular?: boolean;
    badge?: string;
    href?: string; // ✅ Added for dynamic button linking
};

export const upgradeConfig = {
    title: "Upgrade Your Plan",
    description:
        "Unlock premium features and supercharge your experience. Choose the plan that best fits your workflow.",
    currentPlan: {
        name: "Free Plan",
        description:
            "You're currently on the Free Plan — great for exploring basic features.",
        limits: "Limited queries, standard analytics, and community access.",
    },
    plans: [
        {
            name: "Pro",
            price: "$49/mo", // ✅ matched with your pricing section
            features: [
                "Unlimited AI interactions",
                "Priority support",
                "Team collaboration tools",
                "Advanced analytics dashboard",
            ],
            popular: true,
            badge: "Most Popular",
            href: "/checkout?plan=pro", // ✅ Placeholder for checkout integration
        },
        {
            name: "Enterprise",
            price: "Custom",
            features: [
                "Dedicated support team",
                "Custom integrations",
                "Unlimited projects",
                "Advanced API access",
            ],
            href: "/contact", // ✅ goes to contact sales
        },
    ],
};
