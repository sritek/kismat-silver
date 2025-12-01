"use client";

import { Collection } from "@/lib/types";
import { formatPrice } from "@/lib/collections-data";

interface CollectionCardProps {
  collection: Collection;
  index: number;
}

export function CollectionCard({ collection, index }: CollectionCardProps) {
  const handleWhatsAppRedirect = () => {
    const phoneNumber = "919999999999";
    const message = `Hello, I'm interested in this collection: ${collection.title} - ${collection.subtitle}. \n\nImage: ${collection.image}`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div
      className="group cursor-pointer flex flex-col h-full animate-fade-in-up"
      style={{ animationDelay: `${index * 100}ms` }}
      onClick={handleWhatsAppRedirect}
    >
      <div className="relative overflow-hidden aspect-[4/5] bg-stone-100 rounded-sm mb-5 shadow-sm hover:shadow-xl transition-all duration-500">
        <img
          src={collection.image}
          alt={collection.title}
          className="w-full h-full object-cover transform transition-transform duration-1000 ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-30" />
        {collection.badge && (
          <div className="absolute top-4 left-4">
            <div className="relative">
              <div className="absolute inset-0 bg-white/40 blur-md rounded-sm animate-pulse"></div>
              <div className="relative bg-white/90 backdrop-blur-md text-stone-900 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-sm shadow-sm">
                {collection.badge}
              </div>
            </div>
          </div>
        )}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out px-8">
          <button className="bg-white text-stone-900 w-full py-4 text-xs font-bold uppercase tracking-[0.2em] hover:bg-stone-900 hover:text-white transition-colors shadow-lg">
            Inquire Now
          </button>
        </div>
      </div>
      <div className="text-center">
        <h3 className="font-serif text-2xl text-stone-900 mb-2 group-hover:text-stone-600 transition-colors duration-300">
          {collection.title}
        </h3>
        <p className="text-sm text-stone-500 font-light mb-3 tracking-wide">{collection.subtitle}</p>
        <div className="inline-block relative">
          <p className="text-xs font-bold text-stone-900 tracking-[0.1em] pb-1">
            STARTING AT {formatPrice(collection.priceStart)}
          </p>
          <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-stone-900 group-hover:w-full transition-all duration-500"></div>
        </div>
      </div>
    </div>
  );
}

interface CollectionsGridProps {
  collections: Collection[];
}

export default function CollectionsGrid({ collections }: CollectionsGridProps) {
  if (collections.length === 0) {
    return (
      <div className="text-center py-32 bg-stone-100/50 rounded-sm border border-stone-200 border-dashed">
        <p className="text-stone-500 font-serif text-2xl mb-4">No collections match your filters.</p>
        <button className="text-stone-900 text-sm font-bold uppercase tracking-widest border-b border-stone-900 hover:border-transparent transition-colors pb-1">
          Clear all filters
        </button>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-x-8 sm:gap-y-12 lg:gap-y-16">
      {collections.map((collection, index) => (
        <CollectionCard key={collection.id} collection={collection} index={index} />
      ))}
    </div>
  );
}

