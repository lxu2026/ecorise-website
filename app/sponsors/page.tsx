import { Navbar } from "@/components/Navbar";
import { Sponsors } from "@/components/Sponsors";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sponsors | EcoRise",
  description:
    "Meet the partners behind EcoRise and explore sponsorship tiers that support K–12 sustainability education.",
};

export default function SponsorsPage() {
  return (
    <>
      <Navbar />
      <main>
        <Sponsors />
      </main>
    </>
  );
}
