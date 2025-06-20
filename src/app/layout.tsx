import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// 🆕 Load Inter font with Tailwind-friendly CSS variable
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Delicious Bites | Food Ordering Showcase",
  description:
    "A modern food menu and contact site built with Next.js, Tailwind CSS, MUI, and TypeScript.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
