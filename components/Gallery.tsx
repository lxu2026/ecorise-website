import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { galleryItems } from "@/lib/homepage-data";

export function Gallery() {
  return (
    <section id="gallery" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimateOnScroll className="mx-auto mb-16 flex justify-center">
          <SectionHeading
            eyebrow="Gallery"
            title="Moments That Inspire Change"
            description="A glimpse into the hands-on learning, community projects, and celebrations that define the EcoRise experience."
          />
        </AnimateOnScroll>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {galleryItems.map((item, index) => (
            <AnimateOnScroll key={item.label} delay={index * 0.08}>
              <PlaceholderImage
                label={item.label}
                gradient={item.gradient}
                aspect="square"
                className="transition-transform duration-300 hover:scale-[1.02]"
              />
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
