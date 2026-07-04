import type { Metadata } from "next";
import { Fraunces, Poppins } from "next/font/google";
import { Footer } from "@/components/Footer";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
});

export const metadata: Metadata = {
  title: "EcoRise | Empowering Environmental Leaders",
  description:
    "EcoRise inspires K–12 students through sustainability education, STEM innovation, and community action.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${fraunces.variable} h-full antialiased`}>
      <body className={`${poppins.className} flex min-h-full flex-col`}>
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
