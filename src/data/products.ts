import {
  IGNITE_GIG_URL,
  BOSS_SUITE_LITE_URL,
  SWC_2_URL,
} from "@/lib/links";

export interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  href: string;
  status: "available" | "coming-soon";
  slug: string;
}

export const products: Product[] = [
  {
    id: "ignite-gig",
    name: "Ignite Gig",
    tagline: "AI Tax Concierge",
    description:
      "AI-powered tax assistant for freelancers and self-employed builders. Scan receipts, auto-track expenses, and export CRA-ready reports.",
    href: "/ignite-gig",
    status: "available",
    slug: "ignite-gig",
  },
  {
    id: "boss-suite-lite",
    name: "Boss Suite Lite",
    tagline: "Automate. Close. Scale.",
    description:
      "Everything you need to run and grow your business. CRM, automation, and pipeline management in one place.",
    href: BOSS_SUITE_LITE_URL,
    status: "available",
    slug: "boss-suite-lite",
  },
  {
    id: "swc-20",
    name: "SWC 2.0",
    tagline: "The System Behind 6-Figure Brands",
    description:
      "Proven systems to build, scale, and exit. The blueprint DB used to go from trades to tech.",
    href: SWC_2_URL,
    status: "available",
    slug: "swc-20",
  },
  {
    id: "db-templates",
    name: "DB Templates",
    tagline: "Coming Soon",
    description:
      "AI templates and automations to save you time. Ready-to-use Notion dashboards, automation workflows, and more.",
    href: "#",
    status: "coming-soon",
    slug: "db-templates",
  },
];
