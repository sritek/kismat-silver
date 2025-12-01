"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const textColor = scrolled ? "text-gray-900" : "text-white";
  const hoverColor = "hover:text-primary";
  const navZIndex = isOpen ? "z-[60]" : "z-40";

  // Use absolute/fixed positioning so the navbar sits on top of the hero
  // and does not affect the document flow (prevents height/gap issues).
  const navClasses = scrolled
    ? `fixed top-0 left-0 w-full bg-background/95 backdrop-blur-md shadow-sm pt-6 pb-4 md:pt-5 md:pb-5 min-h-[72px] text-gray-900 ${navZIndex}`
    : `absolute top-14 md:top-16 left-0 w-full bg-transparent py-4 md:py-6 min-h-[72px] text-white ${navZIndex}`;

  return (
    <>
      <nav 
        className={`${navClasses} transition-all ease-in-out will-change-[background-color,transform,box-shadow]`}
        style={{
          transitionProperty: "background-color, padding, box-shadow, backdrop-filter",
          transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
          transitionDuration: "400ms",
        }}
      >
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex items-center h-full relative">
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(true)}
              className={`lg:hidden p-2 ${textColor} -ml-2 absolute left-0 z-10 transition-colors duration-300`}
              aria-label="Open menu"
            >
              <Menu size={24} />
            </button>

            {/* Layout: Menu Left, Logo Center, Nothing Right */}
            <div className="flex items-center w-full relative">
              {/* Left: Menu Items */}
              <div className="hidden lg:flex items-center justify-start flex-shrink-0">
                <div
                  className={`flex items-center space-x-4 xl:space-x-5 text-xs font-medium tracking-widest font-sans ${textColor} flex-nowrap whitespace-nowrap max-w-[calc(50%-200px)] transition-colors ease-in-out`}
                  style={{ transitionDuration: "400ms" }}
                >
                  {["Shop All", "New Arrivals", "Collections", "About", "Contact Us"].map(
                    (item) => (
                      <a
                        key={item}
                        href="#"
                        className={`relative group ${hoverColor} transition-colors uppercase whitespace-nowrap`}
                      >
                        {item}
                        <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary transition-all duration-300 ease-in-out group-hover:w-full"></span>
                      </a>
                    )
                  )}
                </div>
              </div>

              {/* Center: Logo - Absolutely Centered */}
              <div
                className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center ${textColor} z-10 pointer-events-none transition-all ease-in-out ${
                  scrolled ? "translate-y-[calc(-50%+4px)] md:translate-y-[-50%]" : ""
                }`}
                style={{ transitionDuration: "400ms" }}
              >
                <div className="pointer-events-auto">
                  <h1 className="font-serif tracking-widest font-bold text-3xl md:text-3xl lg:text-4xl">
                    KISMAT
                  </h1>
                  <p
                    className={`text-[0.5rem] sm:text-[0.55rem] md:text-[0.6rem] tracking-[0.3em] uppercase mt-0.5 sm:mt-1 block transition-colors ease-in-out ${
                      scrolled ? "text-gray-500" : "text-gray-200"
                    }`}
                  >
                    Silver
                  </p>
                </div>
              </div>

              {/* Right: Empty - Nothing */}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-[60] transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div
          className="absolute inset-0 bg-black/50"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        ></div>
        <div className="relative w-4/5 max-w-xs bg-background h-full shadow-xl flex flex-col p-6">
          <div className="flex justify-between items-center mb-10">
            <span className="font-serif text-xl tracking-widest text-gray-900">MENU</span>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-900"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>
          <div className="flex flex-col space-y-6 text-sm tracking-widest font-medium text-gray-800">
            <a href="#" className="border-b border-gray-100 pb-2">
              SHOP ALL
            </a>
            <a href="#" className="border-b border-gray-100 pb-2">
              RINGS
            </a>
            <a href="#" className="border-b border-gray-100 pb-2">
              NECKLACES
            </a>
            <a href="#" className="border-b border-gray-100 pb-2">
              EARRINGS
            </a>
            <a href="#" className="border-b border-gray-100 pb-2">
              OUR STORY
            </a>
            <a href="#" className="border-b border-gray-100 pb-2">
              CONTACT US
            </a>
          </div>
          <div className="mt-auto text-xs text-gray-500">
            <p>© 2024 Kismat Jewellery</p>
          </div>
        </div>
      </div>
    </>
  );
}
