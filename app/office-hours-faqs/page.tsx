import { OfficeHoursFaqsPage } from "@/components/office-hours-faqs/OfficeHoursFaqsPage";
import { Navbar } from "@/components/Navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Office Hours & FAQs | EcoRise",
  description:
    "View EcoRise office hours and find answers to frequently asked questions about Green Dream Challenge, summer camp, and our sustainability programs.",
};

export default function OfficeHoursFaqsRoutePage() {
  return (
    <>
      <Navbar />
      <main className="bg-white">
        <OfficeHoursFaqsPage />
      </main>
    </>
  );
}
