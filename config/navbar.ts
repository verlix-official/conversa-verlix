export type NavLink = {
    name: string;
    href: string;
};

export type CTA = {
    text: string;
    href: string;
};

export const navbarConfig = {
    brandName: "Conversa Verlix",
    logoSrc: "/logo.svg",
    navLinks: [
        { name: "Home", href: "#home" },
        { name: "Features", href: "#features" },
        { name: "Use Cases", href: "#usecases" },
        { name: "Pricing", href: "#pricing" },
        { name: "Reviews", href: "#reviews" },
    ],
    ctaPrimary: { text: "Try Free", href: "/signup" },
    ctaSecondary: { text: "Login", href: "/login" },
};
