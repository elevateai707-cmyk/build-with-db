export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "trades-to-tech",
    slug: "from-trades-to-tech",
    title: "From Trades to Tech: Why I'm Building in Public",
    excerpt:
      "After 20+ years in the trades, I decided to bet on myself and build in public. Here's why.",
    date: "2025-06-15",
    readTime: "6 min",
    tags: ["Journey", "Building in Public"],
    content: `
# From Trades to Tech: Why I'm Building in Public

For two decades, I worked with my hands. Industrial HVAC, electrical systems, refrigeration — the kind of work that leaves you tired, covered in grime, and knowing exactly what you accomplished that day.

I was good at it. Master Electrician. HVAC/R specialist. I'd worked my way up from apprentice to running crews on industrial sites. The money was solid. The respect was there.

But something was missing.

## The Trade Skills That Transfer

What people don't understand about the trades is that they teach you *systems thinking*. Every duct run, every electrical panel, every refrigerant loop is a system. If you design it right, it works. If you cut corners, it fails.

That mindset — systems create outcomes — is exactly what I brought to tech.

## Building in Public

I started documenting my journey on social media. Not as a guru selling courses. Just sharing what I was learning as I taught myself to code, build apps, and deploy AI systems.

The response was unexpected.

Other tradespeople reached out. Electricians who wanted to learn automation. Welders building side projects. HVAC techs training AI models on their own data.

## What I'm Building Now

Today I build:

- **Ignite Gig** — AI tax concierge for freelancers
- **Boss Suite Lite** — business automation systems
- **SWC 2.0** — blueprints for building 6-figure brands
- Tools, templates, and content for the modern builder

The goal isn't to escape the trades. It's to *bridge* them with tech.

> "Discipline builds systems. Systems build freedom."

That's not a slogan. It's the framework I use every day.

— DB
    `,
  },
  {
    id: "ai-tools",
    slug: "ai-tools-im-using",
    title: "The AI Tools I'm Using to Build Faster",
    excerpt:
      "A transparent look at the AI stack powering my workflow — from coding to content creation.",
    date: "2025-06-08",
    readTime: "5 min",
    tags: ["AI", "Tools", "Workflow"],
    content: `
# The AI Tools I'm Using to Build Faster

I get asked this constantly: "What AI tools are you actually using?"

Here's my honest stack — no sponsorships, no affiliate fluff.

## Coding

- **Claude / Cursor** — my daily driver for writing and debugging code
- **GitHub Copilot** — autocomplete when I'm in the flow
- **v0 by Vercel** — rapid prototyping for UI

## Content

- **Whisper** — transcribing voice notes and raw ideas
- **Claude** — editing and structuring long-form content
- **Canva AI** — quick social graphics

## Business

- **Custom GPTs** — niche models trained on my own data
- **AI agents** — automation pipelines for repetitive tasks
- **Ignite Gig** (dogfooding my own app) — tax tracking

## The Rule

AI handles the *mechanics*. I handle the *direction*.

The moment a tool starts thinking for me instead of with me, I dial it back.

— DB
    `,
  },
  {
    id: "systems-freedom",
    slug: "why-systems-create-freedom",
    title: "Why Systems Create Freedom",
    excerpt:
      "Most people think freedom means no structure. The truth is the opposite.",
    date: "2025-05-25",
    readTime: "4 min",
    tags: ["Philosophy", "Systems"],
    content: `
# Why Systems Create Freedom

There's a trap a lot of entrepreneurs fall into.

They think freedom means *no structure*. No boss, no schedule, no rules.

But here's what I've learned after 20 years in the trades and 5 years building digital products:

**Systems are the foundation of freedom.**

## The Paradox

Without systems:
- You work on whatever's urgent
- You react instead of create
- You trade time for money
- You're always "busy" but never building

With systems:
- Routine handles the boring stuff
- Automation handles the repetitive stuff
- You focus on high-leverage work
- Your business runs without you

## Start Small

You don't need a Notion dashboard with 47 databases. You need:

1. One recurring task automated
2. One process documented
3. One decision removed from your daily brain space

That's it. That's the start.

> "Discipline builds systems. Systems build freedom."

— DB
    `,
  },
  {
    id: "building-ignite-gig",
    slug: "building-ignite-gig",
    title: "How I'm Building Ignite Gig",
    excerpt:
      "Behind the scenes of building an AI-powered tax concierge app for freelancers.",
    date: "2025-05-10",
    readTime: "7 min",
    tags: ["Ignite Gig", "Development", "AI"],
    content: `
# How I'm Building Ignite Gig

Ignite Gig started with a simple frustration: I was spending hours on taxes as a self-employed builder, and every tool I tried was either too complicated or too expensive.

So I built my own.

## The Problem

As a freelancer/self-employed person in Canada:
- Receipts pile up
- T2125 forms are a maze
- Tax software assumes you're an accountant
- Hiring an accountant for basic tracking is expensive

## The Solution

Ignite Gig is an AI-powered tax concierge that:

1. **Scans receipts** — take a photo, AI extracts the data
2. **Categorizes expenses** — auto-sorts into CRA-friendly categories
3. **Tracks T2125** — auto-populates your form fields
4. **Provides AI guidance** — answers tax questions in plain language
5. **Exports CRA-ready** — download reports your accountant will actually like

## Built for Builders

The UI is designed for people who work with their hands and their laptops. Fast, simple, no accounting degree required.

Not a replacement for a licensed professional — but a damn good assistant.

— DB
    `,
  },
];
