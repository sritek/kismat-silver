import { ArrowRight } from "lucide-react";
import CategoryCarousel from "./category-carousel";
import SectionHeading from "@/components/ui/section-heading";

export default function CategoriesSection() {
  return (
    <section className="py-16 md:py-32 w-full overflow-hidden">
      <div className="container mx-auto max-w-7xl px-6 mb-8 md:mb-12">
        <SectionHeading title="Timeless Essentials" subtitle="Curated For You" />
      </div>

      <CategoryCarousel />
      <div className="container mx-auto max-w-7xl px-6 mt-12 md:mt-16 text-center">
        <button className="inline-flex items-center space-x-2 border-b border-black pb-1 hover:text-primary hover:border-primary transition-colors uppercase tracking-widest text-[10px] md:text-xs font-bold">
          <span>View Full Collection</span>
          <ArrowRight size={14} />
        </button>
      </div>
    </section>
  );
}

