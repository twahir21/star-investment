import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Star Investment Zanzibar | Logistics, Protocol & Destination Management",
  description:
    "Leading logistics, executive transportation, protocol, and destination management company in Zanzibar & Tanzania. Trusted partner for diplomatic missions, NGOs, investors, and corporate travel. Expert support for all island & mainland operations.",
  keywords: [
    "logistics Zanzibar",
    "destination management Tanzania",
    "executive transportation Zanzibar",
    "diplomatic protocol services Tanzania",
    "corporate support services Zanzibar",
    "marine logistics Zanzibar",
    "investor facilitation Tanzania",
    "NGO project support Zanzibar",
    "VIP airport transfer Zanzibar",
    "travel management Tanzania"
  ],
  authors: [{ name: "STAR INVESTMENT (ZANZIBAR) LIMITED" }],
  // Viewport is set by Next.js automatically, but kept for legacy/compatibility
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  // Open Graph adds massive value for sharing on LinkedIn/WhatsApp/Twitter
  openGraph: {
    title: "Star Investment (Zanzibar) Limited | Professional Logistics & Corporate Solutions",
    description: "Reliable logistics, protocol, and transport solutions for diplomatic missions, NGOs, and businesses across Zanzibar and Tanzania.",
    url: "https://www.yourdomain.com", // REPLACE WITH YOUR ACTUAL URL
    siteName: "Star Investment Zanzibar",
    locale: "en_TZ",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}