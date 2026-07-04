import { Hero } from "@/components/Hero";
import { Mission } from "@/components/Mission";
import { Navbar } from "@/components/Navbar";
import { SchoolLogosMarquee } from "@/components/SchoolLogosMarquee";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="bg-ecorise-mint">
        <Hero />
        <SchoolLogosMarquee />
        <Mission />
      </main>
    </>
  );
}
