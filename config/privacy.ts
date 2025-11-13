// config/privacy.ts
export type PrivacySection = {
    heading: string;
    content: string[];
};

export interface PrivacyPolicyConfig {
    title: string;
    intro: string;
    sections: PrivacySection[];
    contactEmail: string;
}

export const privacyPolicyConfig: PrivacyPolicyConfig = {
    title: "Privacy Policy",
    intro:
        "We value your privacy. This policy explains how we collect, use, and protect your information when you use our AI platform.",
    sections: [
        {
            heading: "Information We Collect",
            content: [
                "We may collect personal information such as your email address, usage data, and preferences to improve our services.",
            ],
        },
        {
            heading: "How We Use Your Data",
            content: [
                "Your data helps us improve the AI tool, provide support, and send relevant updates if you choose to receive them.",
            ],
        },
        {
            heading: "Contact Us",
            content: [
                "If you have any questions about this policy, contact us at the email below.",
            ],
        },
    ],
    contactEmail: "support@example.com",
};
