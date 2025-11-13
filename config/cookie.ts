// config/cookie.ts

export const cookiePolicyConfig = {
    title: "Cookie Policy",
    intro:
        "Our AI platform uses cookies to enhance your experience and analyze usage.",

    sections: [
        {
            id: "what-are-cookies",
            heading: "1. What Are Cookies?",
            content:
                "Cookies are small text files stored on your device that help improve website performance and personalization.",
        },
        {
            id: "how-we-use-cookies",
            heading: "2. How We Use Cookies",
            content:
                "We use cookies to remember your preferences, analyze traffic, and improve features.",
        },
        {
            id: "managing-cookies",
            heading: "3. Managing Cookies",
            content:
                "You can disable cookies in your browser settings, but some features may not function properly.",
        },
    ],
};

export type CookiePolicyConfig = typeof cookiePolicyConfig;
