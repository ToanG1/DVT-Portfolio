import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dinh Van Toan | Full-Stack & AI Systems Engineer",
  description:
    "Portfolio of Dinh Van Toan — Full-Stack Software Engineer with 3 years of experience architecting Applied AI pipelines, high-throughput microservices (500k keywords/day), and 3,000+ VPS fleets.",
  keywords: [
    "Dinh Van Toan",
    "Software Engineer",
    "Full-Stack Developer",
    "Java",
    "Spring Boot",
    "Next.js",
    "AI Engineer",
    "Playwright",
    "Distributed Systems",
    "Ansible",
    "Web Scraping",
  ],
  authors: [{ name: "Dinh Van Toan" }],
};

export const viewport: Viewport = {
  initialScale: 1,
  width: "device-width",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Analytics />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
