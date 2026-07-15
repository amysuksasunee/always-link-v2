import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Always Link Solutions | IT Infrastructure & Automation",
  description:
    "Always Link Solutions delivers IT infrastructure, cloud, network security, industrial automation, IoT and SCADA monitoring solutions.",

  openGraph: {
    title: "Always Link Solutions | IT Infrastructure & Automation",
    description:
      "Always Link Solutions delivers IT infrastructure, cloud, network security, industrial automation, IoT and SCADA monitoring solutions.",
    url: "https://www.alwayslinksolutions.com",
    siteName: "Always Link Solutions",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
