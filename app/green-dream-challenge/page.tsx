import { GreenDreamChallengePage } from "@/components/green-dream-challenge/GreenDreamChallengePage";
import { Navbar } from "@/components/Navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Green Dream Challenge | EcoRise",
  description:
    "Create solutions for a more sustainable future with EcoRise. Compete solo or in teams of up to 3 in Advocacy or Innovation paths.",
};

export default function GreenDreamChallengeRoutePage() {
  return (
    <>
      <Navbar />
      <main className="bg-white">
        <GreenDreamChallengePage />
      </main>
    </>
  );
}
