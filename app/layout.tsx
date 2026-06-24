import type { Metadata } from "next";
import { Archivo_Black, Space_Grotesk } from "next/font/google";
import { site } from "@/lib/site-config";
import "./globals.css";

const display = Archivo_Black({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const body = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — MTG Memes & Chaos`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  keywords: ["MTG", "Magic the Gathering", "memes", "YouTube", "TikTok", "Instagram", "Hexicidal"],
  openGraph: {
    title: `${site.name} — MTG Memes & Chaos`,
    description: site.description,
    url: site.url,
    siteName: site.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — MTG Memes & Chaos`,
    description: site.description,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="font-body">{children}</body>
    </html>
  );
}
