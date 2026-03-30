import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Mode:Build - AI Products & Consulting",
    template: "%s | Mode:Build",
  },
  description:
    "I help businesses sell for more. Now I help them build with AI. M&A advisor turned AI builder. Products, automations, and consulting for business owners.",
  metadataBase: new URL("https://modebuild.io"),
  openGraph: {
    title: "Mode:Build - AI Products & Consulting",
    description:
      "I help businesses sell for more. Now I help them build with AI. Products, automations, and consulting for business owners.",
    url: "https://modebuild.io",
    siteName: "Mode:Build",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mode:Build - AI Products & Consulting",
    description:
      "I help businesses sell for more. Now I help them build with AI.",
    creator: "@phi11ip_e11iott",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-background text-text font-sans min-h-screen flex flex-col antialiased">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
