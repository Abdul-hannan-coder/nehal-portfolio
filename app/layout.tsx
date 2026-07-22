import "./globals.css";
import type { Metadata } from "next";
import { Sora, Inter } from "next/font/google";
import WhatsAppFloat from "@/components/WhatsAppFloat";

// Display face for headings — modern, confident, premium.
const sora = Sora({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
});

// Body face for prose & UI — highly legible, with true italics for accents.
const inter = Inter({
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-body",
});

import portfolioData from "@/lib/data/portfolio.json";

export const metadata: Metadata = {
  title: `${portfolioData.personal.name} — ${portfolioData.personal.title}`,
  description: portfolioData.personal.subtitle,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sora.variable} ${inter.variable}`}>
      <body className="font-sans">
        {children}
        <WhatsAppFloat />
      </body>
    </html>
  );
}
