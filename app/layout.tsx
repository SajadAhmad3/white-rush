import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: "White Rush – Explore Kashmir Tours & Adventures",
  description: "White Rush offers unforgettable tour and travel experiences in Kashmir. Discover scenic landscapes, lakes, mountains, and cultural adventures with us.",
  keywords: [
    "Kashmir tours",
    "Kashmir travel",
    "tourism in Kashmir",
    "adventure trips Kashmir",
    "White Rush",
    "travel agency Kashmir",
    "holiday packages Kashmir"
  ],
  authors: [{ name: "White Rush" }],
  openGraph: {
    title: "White Rush – Explore Kashmir Tours & Adventures",
    description: "Unforgettable travel experiences in Kashmir. Scenic landscapes, lakes, mountains & cultural tours.",
    url: "https://whiterush.com",
    siteName: "White Rush",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
