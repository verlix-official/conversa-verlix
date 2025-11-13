// /config/hero.ts

export type HeroConfig = {
    title: string; // HTML allowed (for <span> etc.)
    subtitle: string;
    image: string;
    ctaButtons: {
        label: string;
        href: string;
        variant?: "primary" | "outline";
    }[];
};

export const heroConfig: HeroConfig = {
    title: "Power Your Ideas with <span class='text-violet-600'>Conversa Verlix</span>",
    subtitle:
        "The ultimate AI platform that helps you create, code, and connect — faster and smarter than ever before.",
    image: "/assets/images/hero/dashboard-preview.jpg",
    ctaButtons: [
        { label: "Get Started", href: "/signup", variant: "primary" },
        { label: "Watch Demo", href: "/demo", variant: "outline" },
    ],
};
