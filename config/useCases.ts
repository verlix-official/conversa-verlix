// /config/useCases.ts
import {
    Brain,
    Users,
    ShoppingCart,
    Shield,
    Cloud,
    BarChart2,
    Cpu,
    MessageSquare,
    Zap,
} from "lucide-react";

export type UseCaseItem = {
    title: string;
    description: string;
    iconKey: string;
    icon?: React.ElementType;
};

const iconMap: Record<string, React.ElementType> = {
    ai: Brain,
    collaboration: Users,
    ecommerce: ShoppingCart,
    security: Shield,
    cloud: Cloud,
    analytics: BarChart2,
    data: Cpu,
    chat: MessageSquare,
    performance: Zap,
};

const useCaseList: UseCaseItem[] = [
    {
        title: "Team Collaboration",
        description:
            "Empower your team to work seamlessly together with real-time updates and shared dashboards.",
        iconKey: "collaboration",
    },
    {
        title: "E-commerce Optimization",
        description:
            "Boost sales and manage your store efficiently using AI-driven insights and analytics.",
        iconKey: "ecommerce",
    },
    {
        title: "Data Analytics",
        description:
            "Visualize and interpret your business metrics to make informed decisions quickly.",
        iconKey: "analytics",
    },
    {
        title: "Cloud Infrastructure",
        description:
            "Manage scalable and secure infrastructure without the headaches of complex setups.",
        iconKey: "cloud",
    },
];

const useCasesWithIcons = useCaseList.map((item) => ({
    ...item,
    icon: iconMap[item.iconKey] || Brain,
}));

export const useCasesConfig = {
    sectionTitle: "Real Use Cases",
    subtitle:
        "See how businesses and teams leverage our platform to improve productivity and results.",
    useCases: useCasesWithIcons,
};

export type UseCasesConfig = typeof useCasesConfig;
