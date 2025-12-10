"use client";

import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import { CATEGORIES, MATERIALS, MIN_PRICE, MAX_PRICE } from "@/lib/collections-data";

interface FilterSectionProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

const FilterSection = ({ title, children, defaultOpen = true }: FilterSectionProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-stone-100 py-6">
      <div
        className="flex items-center justify-between cursor-pointer mb-4 group"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-xs font-bold uppercase tracking-widest text-stone-800 group-hover:text-stone-600 transition-colors">
          {title}
        </h3>
        <ChevronDown
          size={14}
          className={`text-stone-400 group-hover:text-stone-600 transform transition-all duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </div>
      <div
        className={`transition-all duration-500 ease-in-out overflow-hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {children}
      </div>
    </div>
  );
};

interface CheckboxItemProps {
  label: string;
  checked: boolean;
  onChange: () => void;
}

const CheckboxItem = ({ label, checked, onChange }: CheckboxItemProps) => (
  <label className="flex items-center space-x-3 cursor-pointer group mb-3">
    <div
      className={`w-4 h-4 border rounded-sm flex items-center justify-center transition-all duration-300 ${
        checked ? "border-stone-900 bg-stone-900" : "border-stone-300 group-hover:border-stone-500"
      }`}
    >
      <input type="checkbox" className="hidden" checked={checked} onChange={onChange} />
      {checked && <div className="w-2 h-2 bg-white rounded-[1px]" />}
    </div>
    <span
      className={`text-sm font-light tracking-wide transition-colors duration-300 ${
        checked ? "text-stone-900 font-medium" : "text-stone-500 group-hover:text-stone-900"
      }`}
    >
      {label}
    </span>
  </label>
);

interface RadioItemProps {
  label: string;
  checked: boolean;
  onChange: () => void;
}

const RadioItem = ({ label, checked, onChange }: RadioItemProps) => (
  <label className="flex items-center space-x-3 cursor-pointer group mb-3">
    <div
      className={`w-4 h-4 border rounded-full flex items-center justify-center transition-all duration-300 ${
        checked ? "border-stone-900" : "border-stone-300 group-hover:border-stone-500"
      }`}
    >
      <input type="radio" className="hidden" checked={checked} onChange={onChange} />
      {checked && <div className="w-2 h-2 bg-stone-900 rounded-full" />}
    </div>
    <span
      className={`text-sm font-light tracking-wide transition-colors duration-300 ${
        checked ? "text-stone-900 font-medium" : "text-stone-500 group-hover:text-stone-900"
      }`}
    >
      {label}
    </span>
  </label>
);

interface PriceSliderProps {
  min: number;
  max: number;
  value: [number, number];
  onChange: (value: [number, number]) => void;
}

const PriceSlider = ({ min, max, value, onChange }: PriceSliderProps) => {
  const [localValue, setLocalValue] = useState<[number, number]>(value);

  useEffect(() => {
    setLocalValue(value);
  }, [value]);

  const handleRangeChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const newValue: [number, number] = [...localValue];
    newValue[index] = Number(e.target.value);

    if (index === 0 && newValue[0] > newValue[1]) newValue[0] = newValue[1];
    if (index === 1 && newValue[1] < newValue[0]) newValue[1] = newValue[0];

    setLocalValue(newValue);
    onChange(newValue);
  };

  const percent1 = ((localValue[0] - min) / (max - min)) * 100;
  const percent2 = ((localValue[1] - min) / (max - min)) * 100;

  return (
    <div className="px-3 md:px-4 py-4">
      <style>{`
        .range-slider-input {
          -webkit-appearance: none;
          pointer-events: none;
          position: absolute;
          height: 0;
          width: 100%;
          z-index: 20;
          opacity: 0;
        }
        .range-slider-input::-webkit-slider-thumb {
          -webkit-appearance: none;
          pointer-events: auto;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          cursor: pointer;
        }
        .range-slider-input::-moz-range-thumb {
          pointer-events: auto;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          cursor: pointer;
          border: none;
        }
      `}</style>
      <div className="relative h-1 bg-stone-200 rounded-full mb-8 mt-2">
        <div
          className="absolute h-full bg-stone-800 rounded-full z-10"
          style={{ left: `${percent1}%`, right: `${100 - percent2}%` }}
        ></div>
        <input
          type="range"
          min={min}
          max={max}
          value={localValue[0]}
          onChange={(e) => handleRangeChange(e, 0)}
          className="range-slider-input top-0 left-0"
        />
        <input
          type="range"
          min={min}
          max={max}
          value={localValue[1]}
          onChange={(e) => handleRangeChange(e, 1)}
          className="range-slider-input top-0 left-0"
        />
        <div
          className="absolute top-1/2 w-4 h-4 bg-white border-2 border-stone-800 rounded-full shadow-lg pointer-events-none z-30 transition-transform duration-200 hover:scale-110"
          style={{ left: `${percent1}%`, transform: `translate(-50%, -50%)` }}
        ></div>
        <div
          className="absolute top-1/2 w-4 h-4 bg-white border-2 border-stone-800 rounded-full shadow-lg pointer-events-none z-30 transition-transform duration-200 hover:scale-110"
          style={{ left: `${percent2}%`, transform: `translate(-50%, -50%)` }}
        ></div>
      </div>
      <div className="flex justify-between items-center text-xs font-medium text-stone-600 gap-2">
        <div className="relative w-24 group">
          <span className="absolute left-2 top-1/2 -translate-y-1/2 text-stone-400 group-hover:text-stone-600 transition-colors">
            ₹
          </span>
          <input
            type="number"
            value={localValue[0]}
            onChange={(e) => {
              const newValue: [number, number] = [...localValue];
              newValue[0] = Number(e.target.value);
              if (newValue[0] > newValue[1]) newValue[0] = newValue[1];
              setLocalValue(newValue);
              onChange(newValue);
            }}
            className="w-full bg-white border border-stone-200 text-stone-900 pl-6 pr-2 py-2 rounded-sm text-right focus:outline-none focus:border-stone-800 focus:ring-0 transition-colors"
          />
        </div>
        <div className="text-stone-400">-</div>
        <div className="relative w-24 group">
          <span className="absolute left-2 top-1/2 -translate-y-1/2 text-stone-400 group-hover:text-stone-600 transition-colors">
            ₹
          </span>
          <input
            type="number"
            value={localValue[1]}
            onChange={(e) => {
              const newValue: [number, number] = [...localValue];
              newValue[1] = Number(e.target.value);
              if (newValue[1] < newValue[0]) newValue[1] = newValue[0];
              setLocalValue(newValue);
              onChange(newValue);
            }}
            className="w-full bg-white border border-stone-200 text-stone-900 pl-6 pr-2 py-2 rounded-sm text-right focus:outline-none focus:border-stone-800 focus:ring-0 transition-colors"
          />
        </div>
      </div>
    </div>
  );
};

interface FilterPanelProps {
  className?: string;
  filters: {
    categories: string[];
    materials: string[];
    priceRange: [number, number];
    sortBy: string;
  };
  setFilters: (filters: any) => void;
  onClearAll: () => void;
  onApply?: () => void;
  showApplyButton?: boolean;
  minPrice: number;
  maxPrice: number;
}

export default function FilterPanel({
  className,
  filters,
  setFilters,
  onClearAll,
  onApply,
  showApplyButton = true,
  minPrice,
  maxPrice,
}: FilterPanelProps) {
  // Map material names to their SVG icons in /public/icons
  const materialIcons: Record<string, string> = {
    gold: "/icons/gold_svg.svg",
    silver: "/icons/silver_svg.svg",
    "rose gold": "/icons/rosegold_svg.svg",
    diamond: "/icons/diamond.svg",
  };

  const toggleCategory = (cat: string) => {
    const newCats = filters.categories.includes(cat)
      ? filters.categories.filter((c) => c !== cat)
      : [...filters.categories, cat];
    setFilters({ ...filters, categories: newCats });
  };

  const toggleMaterial = (mat: string) => {
    const newMats = filters.materials.includes(mat)
      ? filters.materials.filter((m) => m !== mat)
      : [...filters.materials, mat];
    setFilters({ ...filters, materials: newMats });
  };

  return (
    <aside className={`w-full lg:w-72 flex-shrink-0 ${className || ""}`}>
      <div className="bg-white p-6 lg:rounded-sm lg:shadow-sm lg:border lg:border-stone-100 animate-slide-in-left">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-lg font-serif font-bold text-stone-900 tracking-wide">Filter By</h2>
          <button
            onClick={onClearAll}
            className="text-[10px] uppercase tracking-widest text-stone-400 hover:text-stone-900 transition-colors border-b border-transparent hover:border-stone-900 pb-0.5"
          >
            Clear All
          </button>
        </div>
        <div className="filter-scrollable max-h-[calc(100vh-250px)] overflow-y-auto pr-2 -mr-2">
          <style jsx>{`
            .filter-scrollable {
              scrollbar-width: none;
              scrollbar-color: transparent transparent;
            }
            .filter-scrollable::-webkit-scrollbar {
              width: 0;
              height: 0;
            }
          `}</style>
          <FilterSection title="Category">
          {CATEGORIES.map((cat, i) => (
            <CheckboxItem
              key={i}
              label={cat}
              checked={filters.categories.includes(cat)}
              onChange={() => toggleCategory(cat)}
            />
          ))}
        </FilterSection>
        <FilterSection title="Material">
          <div className="flex flex-wrap gap-3">
            {MATERIALS.map((mat, i) => {
              const isSelected = filters.materials.includes(mat.name);
              const iconSrc = materialIcons[mat.name.toLowerCase()];
              return (
                <div
                  key={i}
                  onClick={() => toggleMaterial(mat.name)}
                  className={`flex flex-col items-center cursor-pointer group p-2 rounded-md transition-all duration-300 ${
                    isSelected
                      ? "bg-white ring-1 ring-primary/40 shadow-sm scale-[1.02]"
                      : "hover:bg-stone-50"
                  }`}
                >
                  <div
                    className={`w-8 h-8 rounded-full shadow-sm mb-2 border border-stone-200 transition-transform duration-300 overflow-hidden flex items-center justify-center ${
                      isSelected
                        ? "scale-110 ring-2 ring-offset-2 ring-offset-white ring-primary/50"
                        : "group-hover:scale-110"
                    }`}
                    style={{ backgroundColor: mat.color }}
                  >
                    {iconSrc ? (
                      <img
                        src={iconSrc}
                        alt={mat.name}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    ) : null}
                  </div>
                  <span
                    className={`text-[9px] uppercase tracking-wider ${
                      isSelected ? "text-primary font-bold" : "text-stone-500 group-hover:text-stone-700"
                    }`}
                  >
                    {mat.name}
                  </span>
                </div>
              );
            })}
          </div>
        </FilterSection>
        <FilterSection title="Price Range">
          <PriceSlider
            min={minPrice}
            max={maxPrice}
            value={filters.priceRange}
            onChange={(newRange) => setFilters({ ...filters, priceRange: newRange })}
          />
        </FilterSection>
        <FilterSection title="Sort By" defaultOpen={true}>
          <RadioItem
            label="Featured"
            checked={filters.sortBy === "featured"}
            onChange={() => setFilters({ ...filters, sortBy: "featured" })}
          />
          <RadioItem
            label="Price: Low to High"
            checked={filters.sortBy === "price_asc"}
            onChange={() => setFilters({ ...filters, sortBy: "price_asc" })}
          />
          <RadioItem
            label="Price: High to Low"
            checked={filters.sortBy === "price_desc"}
            onChange={() => setFilters({ ...filters, sortBy: "price_desc" })}
          />
        </FilterSection>
        </div>
        {showApplyButton && (
          <button
            onClick={onApply}
            className="w-full mt-6 bg-stone-900 text-white py-3 text-xs font-bold uppercase tracking-[0.3em] hover:bg-stone-800 transition-colors rounded-sm shadow-sm"
          >
            Apply Filters
          </button>
        )}
      </div>
    </aside>
  );
}

