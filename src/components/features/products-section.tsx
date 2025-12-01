import { ArrowRight } from "lucide-react";
import { PRODUCTS } from "@/lib/data";
import ProductCard from "./product-card";
import SectionHeading from "@/components/ui/section-heading";

export default function ProductsSection() {
  return (
    <section className="py-20 md:py-32 px-6">
      <div className="container mx-auto max-w-7xl">
        <SectionHeading title="Timeless Essentials" subtitle="Curated For You" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="inline-flex items-center space-x-2 border-b border-black pb-1 hover:text-primary hover:border-primary transition-colors uppercase tracking-widest text-xs font-bold">
            <span>View Full Collection</span>
            <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </section>
  );
}

