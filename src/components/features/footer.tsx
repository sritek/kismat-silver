import { Instagram, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white pt-12 md:pt-20 pb-8 md:pb-10">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-12 md:mb-16">
          <div className="md:col-span-1">
            <div className="mb-4 md:mb-6 text-center">
              <h3 className="font-serif tracking-widest font-bold text-2xl md:text-3xl">KISMAT</h3>
              <p className="text-[0.5rem] sm:text-[0.55rem] md:text-[0.6rem] tracking-[0.3em] uppercase mt-0.5 sm:mt-1 block text-gray-400">
                Silver
              </p>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Handcrafted silver jewellery designed to celebrate the beauty in
              every moment. Sustainable, ethical, and timeless.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center hover:bg-white hover:text-black transition-colors cursor-pointer"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center hover:bg-white hover:text-black transition-colors cursor-pointer"
                aria-label="Facebook"
              >
                <Facebook size={16} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold tracking-widest uppercase mb-4 md:mb-6">
              Shop
            </h4>
            <ul className="space-y-3 md:space-y-4 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  All Jewellery
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  New Arrivals
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Rings
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Earrings
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold tracking-widest uppercase mb-4 md:mb-6">
              Customer Care
            </h4>
            <ul className="space-y-3 md:space-y-4 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Shipping & Returns
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Size Guide
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold tracking-widest uppercase mb-4 md:mb-6">
              Newsletter
            </h4>
            <p className="text-gray-400 text-sm mb-4">
              Subscribe for exclusive drops and early access.
            </p>
            <div className="flex border-b border-gray-600 pb-2">
              <input
                type="email"
                placeholder="Email Address"
                className="bg-transparent w-full outline-none text-white placeholder-gray-500 text-sm"
              />
              <button className="uppercase text-xs tracking-widest text-primary hover:text-white transition-colors">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 md:pt-10 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 text-center md:text-left">
          <p>&copy; 2025 Kismat Silver. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

