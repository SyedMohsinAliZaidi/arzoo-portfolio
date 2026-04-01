import { Playfair_Display, Inter } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";
import ClientShell from "./components/ui/ClientShell";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-inter",
  display: "swap",
});


export const metadata: Metadata = {
  metadataBase: new URL("https://arzoo-portfolio.vercel.app"),
  title: {
    default: "Arzoo Agha | Fashion & Digital Designer",
    template: "%s | Arzoo Agha",
  },
  description:
    "Fashion and digital designer crafting visual stories through culture, research, and digital expression.",
  keywords: [
    "Arzoo Agha",
    "fashion designer",
    "digital designer",
    "portfolio",
    "visual storytelling",
    "cultural design",
    "fashion research",
    "UX/UI design",
  ],
  authors: [{ name: "Arzoo Agha" }],
  creator: "Arzoo Agha",
  openGraph: {
    title: "Arzoo Agha | Fashion & Digital Designer",
    description:
      "Fashion and digital designer crafting visual stories through culture, research, and digital expression.",
    url: "https://arzoo-portfolio.vercel.app",
    siteName: "Arzoo Agha Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arzoo Agha | Fashion & Digital Designer",
    description:
      "Fashion and digital designer crafting visual stories through culture, research, and digital expression.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${inter.variable}`}>
        <ClientShell>{children}</ClientShell>
      </body>
    </html>
  );
}