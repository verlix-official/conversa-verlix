// config/terms.ts

export const termsOfServiceConfig = {
    title: "Terms of Service",
    intro:
        "By using our AI tool, you agree to comply with the following terms and conditions.",
    sections: [
        {
            id: "use-of-service",
            heading: "1. Use of the Service",
            content:
                "Users must use the tool responsibly and in compliance with all applicable laws.",
        },
        {
            id: "account-responsibilities",
            heading: "2. Account Responsibilities",
            content:
                "Keep your login details confidential. You are responsible for any activity under your account.",
        },
        {
            id: "limitation-of-liability",
            heading: "3. Limitation of Liability",
            content:
                "We are not responsible for any losses or damages arising from the use of this tool.",
        },
    ],
};

export type TermsOfServiceConfig = typeof termsOfServiceConfig;
