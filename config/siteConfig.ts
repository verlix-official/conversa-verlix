// /config/siteConfig.ts
import { navbarConfig } from "./navbar";
import { footerConfig } from "./footer";
import { faqList } from "./faq";
import { privacyPolicyConfig } from "./privacy";
import { termsOfServiceConfig } from "./terms";
import { cookiePolicyConfig } from "./cookie";
import { heroConfig } from "./hero";
import { featuresConfig } from "./features";
import { useCasesConfig } from "./useCases";
import { pricingConfig } from "./pricing";
import { reviewsConfig } from "./reviews";
import { demoConfig } from "./demo";
import { upgradeConfig } from "./upgrade"; // ✅ NEW IMPORT

export const siteConfig = {
  brand: {
    name: "Conversa Verlix",
    logo: "/logo.svg",
    description:
      "The ultimate AI tools for productivity, creativity, and code.",
    cta: {
      tryFree: "/signup",
      login: "/login",
    },
  },

  navbar: {
    ...navbarConfig,
    brandName: "Conversa Verlix",
    logoSrc: "/logo.svg",
  },

  heroSection: heroConfig,
  features: featuresConfig,
  useCases: useCasesConfig,
  pricing: pricingConfig,
  reviews: reviewsConfig,
  demo: demoConfig,

  // ✅ NEWLY ADDED UPGRADE CONFIG
  upgrade: upgradeConfig,

  footer: {
    ...footerConfig,
    brandName: "Conversa Verlix",
    logoSrc: "/logo.svg",
  },

  faq: {
    title: "Frequently Asked Questions",
    subtitle:
      "Find quick answers about Conversa Verlix — your AI-powered productivity and creativity partner.",
    list: faqList,
  },

  privacyPolicy: privacyPolicyConfig,
  termsOfService: termsOfServiceConfig,
  cookiePolicy: cookiePolicyConfig,
};

export type SiteConfig = typeof siteConfig;
