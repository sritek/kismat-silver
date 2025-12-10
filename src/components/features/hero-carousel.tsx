"use client";

import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, ChevronDown } from "lucide-react";
import { CAROUSEL_IMAGES } from "@/lib/data";
import Image from "next/image";

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % CAROUSEL_IMAGES.length);
  }, []);

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + CAROUSEL_IMAGES.length) % CAROUSEL_IMAGES.length
    );
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    setTimeout(() => setIsLoaded(true), 100);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <div
      className={`relative w-full overflow-hidden transition-opacity duration-1000 h-[calc(100vh-48px)] max-h-screen ${
        isLoaded ? "opacity-100" : "opacity-0"
      }`}
    >
      {CAROUSEL_IMAGES.map((image, index) => (
        <div
          key={image.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <div className="absolute inset-0 bg-black/20 z-10"></div>
          <div className="absolute top-0 left-0 right-0 h-24 sm:h-32 md:h-40 bg-gradient-to-b from-black/60 to-transparent z-10 pointer-events-none"></div>
          <div 
            className="relative w-full h-full overflow-hidden"
            style={{ 
              animationDelay: `${index * 1.33}s`
            }}
          >
            <div className="absolute inset-0 animate-ken-burns">
              <Image
                src={image.url}
                alt={image.title}
                fill
                className="object-cover object-center"
                priority={index === 0}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 100vw"
                quality={index === 0 ? 90 : 85}
                loading={index === 0 ? "eager" : "lazy"}
              />
            </div>
          </div>

          <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center text-white px-4 sm:px-6 md:px-8">
            <p
              className={`text-xs sm:text-sm md:text-base tracking-[0.3em] uppercase mb-2 sm:mb-3 md:mb-4 transition-all duration-700 delay-300 ${
                index === currentIndex
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              New Collection
            </p>
            <h2
              className={`font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-3 sm:mb-4 md:mb-6 px-2 transition-all duration-700 delay-500 ${
                index === currentIndex
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              {image.title}
            </h2>
            <p
              className={`text-sm sm:text-base md:text-lg lg:text-xl font-light mb-4 sm:mb-6 md:mb-8 max-w-[320px] sm:max-w-xs md:max-w-lg px-2 transition-all duration-700 delay-700 ${
                index === currentIndex
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              {image.subtitle}
            </p>
            <button
              className={`border border-white bg-transparent hover:bg-white hover:text-black text-white px-6 py-2 sm:px-7 sm:py-2.5 md:px-8 md:py-3 uppercase tracking-widest text-xs sm:text-sm md:text-sm transition-all duration-500 delay-900 ${
                index === currentIndex
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              Shop Now
            </button>
          </div>
        </div>
      ))}

      <div className="absolute bottom-6 sm:bottom-8 md:bottom-10 left-0 right-0 z-30 flex justify-center items-center animate-fade-in-up">
        <div className="rounded-full bg-black/45 p-2 sm:p-2.5 md:p-3 flex items-center justify-center">
          <ChevronDown 
            className="text-white opacity-90 animate-arrow-bounce w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 drop-shadow-md"
            aria-label="Scroll down"
          />
        </div>
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 z-30 text-white/50 hover:text-white transition-colors hidden md:block"
        aria-label="Previous slide"
      >
        <ChevronLeft size={40} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 z-30 text-white/50 hover:text-white transition-colors hidden md:block"
        aria-label="Next slide"
      >
        <ChevronRight size={40} />
      </button>
    </div>
  );
}
