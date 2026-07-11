import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#050505",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://buildwithdb.com"),
  title: {
    default: "Build With DB | Systems, AI, Apps & Builder Lifestyle",
    template: "%s | Build With DB",
  },
  description:
    "Build With DB is the personal brand of DB, documenting the journey from trades to tech through AI systems, apps, courses, merch, and digital business.",
  keywords: [
    "build with db",
    "systems create freedom",
    "AI tax concierge",
    "ignite gig",
    "boss suite",
    "trades to tech",
    "builder lifestyle",
  ],
  openGraph: {
    title: "Build With DB | Systems, AI, Apps & Builder Lifestyle",
    description:
      "Build With DB is the personal brand of DB, documenting the journey from trades to tech through AI systems, apps, courses, merch, and digital business.",
    url: "https://buildwithdb.com",
    siteName: "Build With DB",
    locale: "en_US",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Build With DB | Systems, AI, Apps & Builder Lifestyle",
    description:
      "From the trades to tech — building systems, creating apps, and sharing everything I learn.",
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true },
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body>{children}</body>
    </html>
  );
}
