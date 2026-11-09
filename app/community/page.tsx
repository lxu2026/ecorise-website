import { CommunityRecaps } from "@/components/about/CommunityRecaps";
import { Navbar } from "@/components/Navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "In the Community | EcoRise",
  description:
    "Recaps from EcoRise school visits, summits, fairs, and workshops with students and families across Naperville.",
};

export default function CommunityPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white">
        <CommunityRecaps asPage />
      </main>
    </>
  );
}
