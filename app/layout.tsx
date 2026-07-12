import type { Metadata } from "next";
import { Geist_Mono, Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Randolf Francisco | GoHighLevel Implementation Specialist",
    template: "%s | Randolf Francisco",
  },
  description:
    "Skills-focused portfolio of Randolf Francisco showcasing GoHighLevel architecture, automation, Voice AI, websites, funnels, integrations, QA and remote implementation work.",
  keywords: [
    "GoHighLevel specialist",
    "marketing automation",
    "CRM implementation",
    "AI voice workflows",
    "funnel builder",
    "GoHighLevel automation",
    "remote automation specialist",
  ],
  authors: [{ name: "Randolf Francisco" }],
  creator: "Randolf Francisco",
  robots: {
    index: true,
    follow: true,
  },
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${plusJakarta.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Script
          id="leadconnector-voice-ai-widget"
          src="https://widgets.leadconnectorhq.com/loader.js"
          data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
          data-widget-id="6a540fd082c5a91e7f04a66a"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
