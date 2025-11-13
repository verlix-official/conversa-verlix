export type FaqItem = {
    id: string;
    question: string;
    answer: string;
    tags?: string[];
};

export const faqList: FaqItem[] = [
    {
        id: "faq-1",
        question: "What is Conversa Verlix?",
        answer:
            "Conversa Verlix is an AI-powered assistant designed to help you chat, create, and code faster. It combines conversational AI, content generation, and coding assistance in one platform.",
        tags: ["general"],
    },
    {
        id: "faq-2",
        question: "Do I need to create an account to use Conversa Verlix?",
        answer:
            "You can explore basic tools without an account, but creating a free account unlocks access to personalized features, saved chats, and more AI tools.",
        tags: ["account"],
    },
    {
        id: "faq-3",
        question: "Is Conversa Verlix free to use?",
        answer:
            "Conversa Verlix offers a free plan with limited usage. You can upgrade to a premium plan anytime to unlock unlimited access, faster responses, and advanced AI features.",
        tags: ["pricing", "plans"],
    },
    {
        id: "faq-4",
        question: "How do I reset my password?",
        answer:
            "Go to the login page and click **Forgot Password**. You’ll receive a password reset email. Follow the link to create a new password.",
        tags: ["account", "security"],
    },
    {
        id: "faq-5",
        question: "Can Conversa Verlix write or debug code?",
        answer:
            "Yes! Conversa Verlix can generate, explain, and debug code in multiple programming languages including JavaScript, Python, and C++.",
        tags: ["coding", "ai"],
    },
    {
        id: "faq-6",
        question: "How can I contact support?",
        answer:
            "You can reach our support team through the **Contact** page or by submitting a ticket on the **Support** page. We respond within 24 hours.",
        tags: ["support", "contact"],
    },
    {
        id: "faq-7",
        question: "Can I integrate Conversa Verlix into my own website or app?",
        answer:
            "Integration options will be available soon through our API plan. Developers will be able to embed AI chat and productivity tools directly into their own applications.",
        tags: ["developers", "api"],
    },
    {
        id: "faq-8",
        question: "Is my data safe with Conversa Verlix?",
        answer:
            "Absolutely. Conversa Verlix uses secure encryption protocols and does not share your data with third parties. You can review our **Privacy Policy** for full details.",
        tags: ["privacy", "security"],
    },
    {
        id: "faq-9",
        question: "How can I cancel my subscription?",
        answer:
            "You can cancel or manage your subscription anytime from your **Account Settings**. Your access will continue until the end of your current billing period.",
        tags: ["billing", "account"],
    },
    {
        id: "faq-10",
        question: "Can I use Conversa Verlix for commercial projects?",
        answer:
            "Yes, all generated content and code can be used commercially, as long as it complies with our **Terms of Service** and licensing policies.",
        tags: ["usage", "legal"],
    },
];