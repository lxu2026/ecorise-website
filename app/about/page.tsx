import { AboutPageContent } from "@/components/about/AboutPageContent";
import { Navbar } from "@/components/Navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | EcoRise",
  description:
    "Learn about EcoRise, our mission, and the team inspiring youth to build a sustainable tomorrow.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="bg-ecorise-mint">
        <AboutPageContent />
      </main>
    </>
  );
}
