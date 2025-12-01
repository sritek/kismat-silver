"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isCollectionsPage = pathname === "/collections";
  const isContactPage = pathname === "/contact";

  useEffect(() => {
    // On Collections and Contact pages, always show scrolled state
    if (isCollectionsPage || isContactPage) {
      setScrolled(true);
      return;
    }

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
  }, [isCollectionsPage, isContactPage]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const textColor = scrolled || isCollectionsPage || isContactPage ? "text-gray-900" : "text-white";
  const hoverColor = "hover:text-primary";
  const navZIndex = isOpen ? "z-[60]" : "z-40";

  // Function to check if a nav item is active
  const isActive = (item: string) => {
    if (item === "Collections" && pathname === "/collections") return true;
    if (item === "Shop All" && pathname === "/") return true;
    if (item === "Contact Us" && pathname === "/contact") return true;
    return false;
  };

  // Use absolute/fixed positioning so the navbar sits on top of the hero
  // and does not affect the document flow (prevents height/gap issues).
  // On Collections and Contact pages, always use fixed with scrolled styles
  const navClasses = scrolled || isCollectionsPage || isContactPage
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
                    (item) => {
                      let href = "#";
                      if (item === "Collections") href = "/collections";
                      if (item === "Contact Us") href = "/contact";
                      if (item === "Shop All") href = "/";
                      const active = isActive(item);
                      return (
                        <Link
                          key={item}
                          href={href}
                          className={`relative group transition-colors uppercase whitespace-nowrap ${
                            active ? "text-primary" : hoverColor
                          }`}
                        >
                          {item}
                          <span
                            className={`absolute -bottom-1 left-0 h-[1px] bg-primary transition-all duration-300 ease-in-out ${
                              active ? "w-full" : "w-0 group-hover:w-full"
                            }`}
                          ></span>
                        </Link>
                      );
                    }
                  )}
                </div>
              </div>

              {/* Center: Logo - Absolutely Centered */}
              <div
                className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center ${textColor} z-10 pointer-events-none transition-all ease-in-out ${
                  scrolled || isCollectionsPage || isContactPage ? "translate-y-[calc(-50%+4px)] md:translate-y-[-50%]" : ""
                }`}
                style={{ transitionDuration: "400ms" }}
              >
                <Link href="/" className="pointer-events-auto cursor-pointer hover:opacity-80 transition-opacity">
                  <h1 className="font-serif tracking-widest font-bold text-3xl md:text-3xl lg:text-4xl">
                    KISMAT
                  </h1>
                  <p
                    className={`text-[0.5rem] sm:text-[0.55rem] md:text-[0.6rem] tracking-[0.3em] uppercase mt-0.5 sm:mt-1 block transition-colors ease-in-out ${
                      scrolled || isCollectionsPage || isContactPage ? "text-gray-500" : "text-gray-200"
                    }`}
                  >
                    Silver
                  </p>
                </Link>
              </div>

              {/* Right: Empty - Nothing */}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer - Collections Style */}
      <div
        className={`fixed inset-0 bg-white z-[60] transform transition-transform duration-300 lg:hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-5 flex justify-between items-center border-b border-stone-100">
          <Link href="/" className="font-serif text-2xl font-bold uppercase tracking-widest text-stone-900 hover:opacity-80 transition-opacity">
            Kismat Silver
          </Link>
          <button
            onClick={() => setIsOpen(false)}
            className="text-stone-900 hover:bg-stone-100 rounded-full p-2 transition-colors"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>
        <div className="p-8 flex flex-col space-y-8 text-xl font-light tracking-wide text-stone-800">
          <Link
            href="/"
            className={`border-b pb-4 hover:pl-2 transition-all ${
              pathname === "/"
                ? "text-primary border-primary font-medium"
                : "border-stone-100 hover:text-stone-900"
            }`}
            onClick={() => setIsOpen(false)}
          >
            SHOP ALL
          </Link>
          <Link
            href="#"
            className="border-b border-stone-100 pb-4 hover:text-stone-900 hover:pl-2 transition-all"
            onClick={() => setIsOpen(false)}
          >
            NEW ARRIVALS
          </Link>
          <Link
            href="/collections"
            className={`border-b pb-4 hover:pl-2 transition-all ${
              pathname === "/collections"
                ? "text-primary border-primary font-medium"
                : "border-stone-100 hover:text-stone-900"
            }`}
            onClick={() => setIsOpen(false)}
          >
            COLLECTIONS
          </Link>
          <Link
            href="#"
            className="border-b border-stone-100 pb-4 hover:text-stone-900 hover:pl-2 transition-all"
            onClick={() => setIsOpen(false)}
          >
            ABOUT
          </Link>
          <Link
            href="/contact"
            className={`border-b pb-4 hover:pl-2 transition-all ${
              pathname === "/contact"
                ? "text-primary border-primary font-medium"
                : "border-stone-100 hover:text-stone-900"
            }`}
            onClick={() => setIsOpen(false)}
          >
            CONTACT
          </Link>
          <div className="pt-8 flex space-x-8 text-stone-500">
            <a
              href="#"
              className="hover:text-stone-900 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Instagram
            </a>
            <a
              href="#"
              className="hover:text-stone-900 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Pinterest
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
