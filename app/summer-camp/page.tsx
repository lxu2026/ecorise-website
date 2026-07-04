import { Navbar } from "@/components/Navbar";
import { SummerCampPage } from "@/components/summer-camp/SummerCampPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Summer Camp | EcoRise",
  description:
    "Explore EcoRise's five-week summer sustainability camp for grades K–8, with hands-on workshops and guest speakers.",
};

export default function SummerCampRoutePage() {
  return (
    <>
      <Navbar />
      <main>
        <SummerCampPage />
      </main>
    </>
  );
}
