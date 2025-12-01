"use client";

import { X } from "lucide-react";
import FilterPanel from "./collections-filter-panel";

interface MobileFilterDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  filters: {
    categories: string[];
    materials: string[];
    priceRange: [number, number];
    sortBy: string;
  };
  setFilters: (filters: any) => void;
  onClearAll: () => void;
  minPrice: number;
  maxPrice: number;
}

export default function MobileFilterDrawer({
  isOpen,
  onClose,
  filters,
  setFilters,
  onClearAll,
  minPrice,
  maxPrice,
}: MobileFilterDrawerProps) {
  return (
    <>
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-[60] transition-opacity duration-300 lg:hidden ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />
      <div
        className={`fixed inset-y-0 right-0 w-[85vw] max-w-sm bg-white border-l border-stone-100 z-[61] transform transition-transform duration-300 ease-in-out lg:hidden overflow-y-auto ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-5 flex justify-between items-center border-b border-stone-100 sticky top-0 bg-white z-10">
          <h2 className="font-serif text-xl text-stone-900">Filters</h2>
          <button
            onClick={onClose}
            className="p-2 text-stone-400 hover:text-stone-900 hover:bg-stone-100 rounded-full transition-colors"
          >
            <X size={24} />
          </button>
        </div>
        <div className="p-5 pb-24">
          <FilterPanel
            className="block"
            filters={filters}
            setFilters={setFilters}
            onClearAll={onClearAll}
            minPrice={minPrice}
            maxPrice={maxPrice}
          />
          <button
            onClick={onClose}
            className="w-full mt-6 bg-stone-900 text-white py-4 text-sm font-bold uppercase tracking-widest hover:bg-stone-800 transition-colors rounded-sm sticky bottom-4 shadow-xl"
          >
            View Results
          </button>
        </div>
      </div>
    </>
  );
}

