export type FooterLink = {
    name: string;
    href: string;
};

export type SocialLinks = {
    x?: string;
    linkedin?: string;
    github?: string;
    facebook?: string;
    youtube?: string;
};

export const footerConfig = {
    brand: {
        name: "Conversa Verlix",
        logo: "/logo.svg", // Path to the logo image
    },
    navigationLinks: [
        { name: "Home", href: "#home" },
        { name: "Features", href: "#features" },
        { name: "Use Cases", href: "#usecases" },
        { name: "Pricing", href: "#pricing" },
        { name: "Reviews", href: "#reviews" },
        { name: "FAQ", href: "/faq" },
    ],
    legalLinks: [
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms of Service", href: "/terms" },
        { name: "Cookie Policy", href: "/cookies" },
    ],
    contactLinks: [
        { name: "Contact", href: "/contact" },
        { name: "Support", href: "/support" },
    ],
    socialLinks: {
        x: "https://x.com/",
        linkedin: "https://linkedin.com/",
        github: "https://github.com/",
        facebook: "https://facebook.com/",
        youtube: "https://youtube.com/",
    } as SocialLinks,
};
