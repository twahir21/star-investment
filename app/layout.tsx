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
  title: "STAR INVESTMENT (ZANZIBAR) LIMITED | Logistics & Corporate Solutions",
  description:
    "Leading provider of logistics, protocol, destination management, transportation, and corporate support solutions in Zanzibar and Mainland Tanzania.",
  keywords:
    "logistics, transportation, destination management, corporate support, Zanzibar, Tanzania",
  authors: [{ name: "STAR INVESTMENT (ZANZIBAR) LIMITED" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
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
        <main className="flex-grow pt-16 md:pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}