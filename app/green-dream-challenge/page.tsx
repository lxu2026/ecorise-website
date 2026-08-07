import { GreenDreamChallengePage } from "@/components/green-dream-challenge/GreenDreamChallengePage";
import { Navbar } from "@/components/Navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Green Dream Challenge | EcoRise",
  description:
    "Recap of EcoRise Green Dream Challenge 2026. Students presented sustainability ideas, earned awards for environmental projects, and celebrated community impact at Benedictine University.",
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
