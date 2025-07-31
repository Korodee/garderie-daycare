import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Garderie Aimée",
  description:
    "Une garderie de qualité à Saint-Laurent, Montréal. Découvrez notre approche éducative bilingue et notre environnement sécuritaire pour enfants de 0 à 5 ans.",
  metadataBase: new URL("https://garderieaimee.ca"),
  openGraph: {
    title: "Garderie Aimée",
    description: "Une garderie de qualité à Saint-Laurent, Montréal",
    url: "https://garderieaimee.ca",
    siteName: "Garderie Aimée",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
