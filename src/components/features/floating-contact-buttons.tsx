"use client";

import { Phone, MessageCircle } from "lucide-react";

export default function FloatingContactButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      <a
        href="https://wa.me/"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-black text-white p-3 md:p-4 rounded-full border border-white hover:scale-110 transition-transform duration-300 flex items-center justify-center"
        style={{
          boxShadow: "0 0 15px rgba(255, 255, 255, 0.5), 0 4px 6px rgba(0, 0, 0, 0.3)"
        }}
        aria-label="Contact on WhatsApp"
      >
        <MessageCircle size={20} className="md:w-6 md:h-6" />
      </a>
      <a
        href="tel:+"
        className="bg-black text-white p-3 md:p-4 rounded-full border border-white hover:scale-110 transition-transform duration-300 flex items-center justify-center"
        style={{
          boxShadow: "0 0 15px rgba(255, 255, 255, 0.5), 0 4px 6px rgba(0, 0, 0, 0.3)"
        }}
        aria-label="Call Us"
      >
        <Phone size={20} className="md:w-6 md:h-6" />
      </a>
    </div>
  );
}

