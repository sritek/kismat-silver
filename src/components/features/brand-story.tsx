import Image from "next/image";
import Button from "@/components/ui/button";

export default function BrandStory() {
  return (
    <section className="relative min-h-[50vh] md:min-h-[60vh] flex items-center justify-center bg-gray-200 overflow-hidden py-16 md:py-0">
      <Image
        src="https://images.unsplash.com/photo-1543294001-f7cd5d7fb516?q=80&w=2070&auto=format&fit=crop"
        alt="Silver crafting"
        fill
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="relative z-10 text-center text-white px-6 max-w-2xl">
        <span className="block mb-4 text-primary uppercase tracking-[0.2em] text-xs md:text-sm">
          Our Philosophy
        </span>
        <h2 className="font-serif text-3xl md:text-5xl mb-6">
          Crafted with Intention
        </h2>
        <p className="text-base md:text-lg font-light leading-relaxed mb-8">
          Every piece of Kismat jewellery tells a story. From the raw silver to
          the final polish, we ensure sustainability and soul in every curve.
        </p>
        <Button variant="secondary" className="px-6 py-2 md:px-8 md:py-3">
          Read Our Story
        </Button>
      </div>
    </section>
  );
}

