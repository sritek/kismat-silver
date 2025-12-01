"use client";

import { useState, useEffect } from "react";
import { CATEGORIES } from "@/lib/data";
import Image from "next/image";

export default function CategoryCarousel() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 200);
  }, []);

  return (
    <div
      className={`overflow-hidden transition-all duration-1000 ease-out transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
    >
      <div className="flex animate-scroll-left hover:[animation-play-state:paused] w-max">
        {CATEGORIES.map((cat) => (
          <div
            key={`first-${cat.id}`}
            className="w-[50vw] md:w-[33.33vw] lg:w-[20vw] flex-shrink-0 relative group cursor-pointer border-r border-white/20"
          >
            <div className="aspect-[4/5] overflow-hidden relative">
              <Image
                src={cat.image}
                alt={cat.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33.33vw, 20vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80 transition-opacity duration-300"></div>
              <div className="absolute bottom-6 left-0 right-0 text-center">
                <span className="text-white font-serif tracking-widest text-xs md:text-base font-bold uppercase border-b border-transparent group-hover:border-white pb-1 transition-all">
                  {cat.name}
                </span>
              </div>
            </div>
          </div>
        ))}
        {CATEGORIES.map((cat) => (
          <div
            key={`second-${cat.id}`}
            className="w-[50vw] md:w-[33.33vw] lg:w-[20vw] flex-shrink-0 relative group cursor-pointer border-r border-white/20"
          >
            <div className="aspect-[4/5] overflow-hidden relative">
              <Image
                src={cat.image}
                alt={cat.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33.33vw, 20vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80 transition-opacity duration-300"></div>
              <div className="absolute bottom-6 left-0 right-0 text-center">
                <span className="text-white font-serif tracking-widest text-xs md:text-base font-bold uppercase border-b border-transparent group-hover:border-white pb-1 transition-all">
                  {cat.name}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
