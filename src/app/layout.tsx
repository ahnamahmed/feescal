import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next"
import Nav from "@/components/nav";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Feescal | Profit & Fee Analysis for the Modern Reseller",
  icons: {
    icon: '/favicon.svg',
  },
  description: "Calculate net profit across all major reselling platforms instantly. Updated for 2026 fee changes.",

  alternates: {
    canonical: 'https://feescal.com/',
  },

  keywords: [
    "2026 reseller fee calculator",
    "TikTok Shop profit calculator",
    "eBay fee calculator 2026",
    "Poshmark fee calculator",
    "Whatnot seller fees",
    "stockx seller fee calculator",
    "net profit after fees calculator",
    "TikTok Shop affiliate fee changes 2026",
    "Poshmark tiered fees 2026",
    "reselling fee comparison",
    "Feescal"
  ],

  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "Feescal | Profit & Fee Analysis for the Modern Reseller",
    description: "Calculate net profit across all major reselling platforms instantly. Updated for 2026 fee changes.",
    type: "website",
    siteName: "Feescal",
  },
  twitter: {
    card: "summary_large_image",
    title: "Feescal | Profit & Fee Analysis for the Modern Reseller",
    description: "Calculate net profit across all major reselling platforms instantly. Updated for 2026 fee changes.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Nav />
        {children}
        <Analytics />
      </body>
    </html>
  );
}