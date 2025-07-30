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
  title: "Garderie Aimée",
  description: "Une garderie de qualité à Saint-Laurent, Montréal. Découvrez notre approche éducative bilingue et notre environnement sécuritaire pour enfants de 0 à 5 ans.",
  metadataBase: new URL('https://garderieaimee.ca'),
  openGraph: {
    title: "Garderie Aimée",
    description: "Une garderie de qualité à Saint-Laurent, Montréal",
    url: 'https://garderieaimee.ca',
    siteName: 'Garderie Aimée',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
