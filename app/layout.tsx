import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Sans, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Instrument Sans: button labels only (wdth axis for width variation)
const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
  axes: ["wdth"],
});

// Bricolage Grotesque: substitute for BDO Grotesk (display headlines)
const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Baius Design — Gabriel Ferraz",
  description:
    "Product Designer & Web Developer. Páginas que trabalham por você.",
};

export default function RootLayout({
  children,
  drawer,
}: Readonly<{
  children: React.ReactNode;
  drawer: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} ${instrumentSans.variable} ${bricolage.variable} dark h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        {drawer}
      </body>
    </html>
  );
}
