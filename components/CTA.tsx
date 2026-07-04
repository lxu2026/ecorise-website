"use client";

import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";

export function CTA() {
  return (
    <section className="relative overflow-hidden bg-ecorise-mint py-24 lg:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.5),transparent_50%)]" />

      <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-8">
        <motion.div
          initial={{ y: 24 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-[#1b4332] sm:text-4xl lg:text-5xl">
            Ready to Rise for the Planet?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[#2d5a3d]">
            Enroll your student, bring EcoRise to your school, or volunteer your
            time. Together, we can cultivate the environmental leaders of
            tomorrow.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="#contact" variant="primary" size="lg" className="min-w-[200px]">
              Register Now
            </Button>
            <Button href="#programs" variant="outline" size="lg" className="min-w-[200px]">
              Explore Programs
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
