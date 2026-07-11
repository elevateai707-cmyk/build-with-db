import {
  Cpu,
  FileCode,
  TrendingUp,
  ShieldCheck,
  Zap,
  Crosshair,
  type LucideIcon,
} from "lucide-react";

export interface Feature {
  icon: LucideIcon;
  label: string;
  desc: string;
}

export const features: Feature[] = [
  { icon: Cpu, label: "Automate", desc: "Save time. Eliminate busy work." },
  {
    icon: FileCode,
    label: "Create",
    desc: "Build digital products that scale.",
  },
  {
    icon: TrendingUp,
    label: "Grow",
    desc: "Market smarter. Close more.",
  },
  {
    icon: ShieldCheck,
    label: "Protect",
    desc: "Keep your data. Keep your freedom.",
  },
  {
    icon: Zap,
    label: "Innovate",
    desc: "Use AI to build what's next.",
  },
  {
    icon: Crosshair,
    label: "Live",
    desc: "Design a life on your own terms.",
  },
];
