"use client";

import { useState, useEffect, useMemo } from "react";
import { Filter, ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import Navbar from "@/components/features/navbar";
import Footer from "@/components/features/footer";
import FilterPanel from "@/components/features/collections-filter-panel";
import CollectionsGrid from "@/components/features/collections-grid";
import MobileFilterDrawer from "@/components/features/mobile-filter-drawer";
import { COLLECTIONS, MIN_PRICE, MAX_PRICE } from "@/lib/collections-data";
import { Collection } from "@/lib/types";

const ITEMS_PER_PAGE = 9;

export default function CollectionsPage() {
  const [isMobileFilterOpen, setMobileFilterOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState({
    categories: [] as string[],
    materials: [] as string[],
    priceRange: [MIN_PRICE, MAX_PRICE] as [number, number],
    sortBy: "featured",
  });

  const filteredCollections = useMemo(() => {
    let result: Collection[] = [...COLLECTIONS];

    if (filters.categories.length > 0) {
      result = result.filter((item) => filters.categories.includes(item.category));
    }

    if (filters.materials.length > 0) {
      result = result.filter((item) => item.materials.some((mat) => filters.materials.includes(mat)));
    }

    result = result.filter(
      (item) => item.priceStart >= filters.priceRange[0] && item.priceStart <= filters.priceRange[1]
    );

    if (filters.sortBy === "price_asc") {
      result.sort((a, b) => a.priceStart - b.priceStart);
    } else if (filters.sortBy === "price_desc") {
      result.sort((a, b) => b.priceStart - a.priceStart);
    }

    return result;
  }, [filters]);

  // Pagination logic
  const totalPages = Math.ceil(filteredCollections.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const paginatedCollections = filteredCollections.slice(startIndex, endIndex);

  // Reset to page 1 when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [filters]);

  const goToPage = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const clearAllFilters = () => {
    setFilters({
      categories: [],
      materials: [],
      priceRange: [MIN_PRICE, MAX_PRICE],
      sortBy: "featured",
    });
  };

  useEffect(() => {
    if (isMobileFilterOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileFilterOpen]);

  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-900 selection:bg-stone-200 selection:text-stone-900">
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
          opacity: 0; 
        }
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .animate-slide-in-left {
          animation: slideInLeft 0.6s ease-out forwards;
        }
      `}</style>

      <Navbar />

      <MobileFilterDrawer
        isOpen={isMobileFilterOpen}
        onClose={() => setMobileFilterOpen(false)}
        filters={filters}
        setFilters={setFilters}
        onClearAll={clearAllFilters}
        minPrice={MIN_PRICE}
        maxPrice={MAX_PRICE}
      />

      {/* Hero Header */}
      <header className="relative bg-[#E8E6E1] py-12 sm:py-16 md:py-20 lg:py-32 text-center overflow-hidden border-b border-stone-200">
        <div className="absolute top-0 left-1/4 w-[300px] sm:w-[400px] md:w-[500px] h-[300px] sm:h-[400px] md:h-[500px] bg-white opacity-40 rounded-full blur-[100px] animate-pulse"></div>
        <div
          className="absolute bottom-0 right-1/4 w-[400px] sm:w-[500px] md:w-[600px] h-[400px] sm:h-[500px] md:h-[600px] bg-stone-300 opacity-30 rounded-full blur-[120px]"
          style={{ animationDuration: "4s" }}
        ></div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
          <p className="text-[10px] sm:text-xs md:text-sm font-bold tracking-[0.3em] text-stone-500 uppercase mb-4 sm:mb-6 animate-fade-in-up">
            Curated for You
          </p>
          <h1
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-serif text-stone-900 mb-4 sm:mb-6 md:mb-8 leading-none tracking-tight animate-fade-in-up"
            style={{ animationDelay: "0.1s" }}
          >
            Our Collections
          </h1>
          <p
            className="text-stone-600 max-w-xl mx-auto font-light text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed animate-fade-in-up px-2"
            style={{ animationDelay: "0.2s" }}
          >
            Discover handcrafted designs inspired by the cosmos. <br className="hidden sm:block" />
            Sustainable, ethical, and timeless beauty.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-[1600px] mx-auto px-4 sm:px-6 py-8 sm:py-12 lg:py-20">
        {/* Mobile Results Count */}
        <div className="lg:hidden mb-6 text-center">
          <span className="text-xs text-stone-500 font-medium">{filteredCollections.length} Results</span>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
          {/* Desktop Sidebar (Left) */}
          <div className="hidden lg:block sticky top-32 h-fit">
            <FilterPanel
              filters={filters}
              setFilters={setFilters}
              onClearAll={clearAllFilters}
              minPrice={MIN_PRICE}
              maxPrice={MAX_PRICE}
            />
          </div>

          {/* Grid Area (Right) */}
          <div className="flex-1 w-full">
            {/* Desktop Sort Bar */}
            <div
              className="hidden lg:flex items-center justify-between mb-12 pb-6 border-b border-stone-200 animate-fade-in-up"
              style={{ animationDelay: "0.3s" }}
            >
              <div className="text-xs tracking-widest text-stone-500 uppercase">
                Showing <span className="text-stone-900 font-bold">{filteredCollections.length}</span> results
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-xs tracking-widest text-stone-500 uppercase">Sort by:</span>
                <div className="relative group">
                  <select
                    value={filters.sortBy}
                    onChange={(e) => setFilters({ ...filters, sortBy: e.target.value })}
                    className="bg-transparent text-xs font-bold uppercase tracking-widest text-stone-900 focus:outline-none cursor-pointer hover:text-stone-600 transition-colors appearance-none pr-4"
                  >
                    <option value="featured">Featured</option>
                    <option value="price_asc">Price: Low to High</option>
                    <option value="price_desc">Price: High to Low</option>
                  </select>
                  <ChevronDown size={12} className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-stone-900" />
                </div>
              </div>
            </div>

            {/* Grid */}
            <CollectionsGrid collections={paginatedCollections} />

            {/* Pagination */}
            {filteredCollections.length > 0 && totalPages > 1 && (
              <>
                {/* Desktop Pagination with Previous/Next */}
                <div className="hidden md:flex mt-12 lg:mt-24 items-center justify-center gap-3">
                  <button
                    onClick={() => goToPage(currentPage - 1)}
                    disabled={currentPage === 1}
                    className={`flex items-center gap-2 px-4 py-2 rounded-sm border transition-all ${
                      currentPage === 1
                        ? "text-stone-300 border-stone-200 cursor-not-allowed bg-stone-50"
                        : "text-stone-900 border-stone-300 hover:bg-primary hover:text-white hover:border-primary"
                    }`}
                    aria-label="Previous page"
                  >
                    <ChevronLeft size={18} />
                    <span className="text-xs font-medium uppercase tracking-wider">Previous</span>
                  </button>

                  <div className="flex items-center gap-1">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
                      if (
                        page === 1 ||
                        page === totalPages ||
                        (page >= currentPage - 1 && page <= currentPage + 1)
                      ) {
                        return (
                          <button
                            key={page}
                            onClick={() => goToPage(page)}
                            className={`min-w-[40px] h-10 px-3 text-sm font-medium transition-all ${
                              currentPage === page
                                ? "bg-primary text-white"
                                : "text-stone-700 hover:text-primary hover:bg-stone-100"
                            } rounded-sm`}
                          >
                            {page}
                          </button>
                        );
                      } else if (page === currentPage - 2 || page === currentPage + 2) {
                        return (
                          <span key={page} className="text-stone-400 px-2">
                            ...
                          </span>
                        );
                      }
                      return null;
                    })}
                  </div>

                  <button
                    onClick={() => goToPage(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className={`flex items-center gap-2 px-4 py-2 rounded-sm border transition-all ${
                      currentPage === totalPages
                        ? "text-stone-300 border-stone-200 cursor-not-allowed bg-stone-50"
                        : "text-stone-900 border-stone-300 hover:bg-primary hover:text-white hover:border-primary"
                    }`}
                    aria-label="Next page"
                  >
                    <span className="text-xs font-medium uppercase tracking-wider">Next</span>
                    <ChevronRight size={18} />
                  </button>
                </div>

                {/* Mobile Pagination - Only Page Numbers */}
                <div className="md:hidden mt-12 flex items-center justify-center gap-2 flex-wrap px-4">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
                    const isCurrentPage = page === currentPage;
                    return (
                      <button
                        key={page}
                        onClick={() => goToPage(page)}
                        className={`min-w-[36px] h-9 px-2 text-sm font-medium transition-all rounded-sm ${
                          isCurrentPage
                            ? "bg-stone-900 text-white"
                            : "bg-stone-100 text-stone-600 hover:bg-stone-200"
                        }`}
                      >
                        {page}
                      </button>
                    );
                  })}
                </div>
              </>
            )}

            {/* Results info */}
            {filteredCollections.length > 0 && (
              <div className="mt-6 md:mt-8 text-center text-xs text-stone-500">
                Showing {startIndex + 1}-{Math.min(endIndex, filteredCollections.length)} of{" "}
                {filteredCollections.length} collections
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Mobile Floating Filter Button */}
      <button
        onClick={() => setMobileFilterOpen(true)}
        className="lg:hidden fixed bottom-6 right-6 z-50 bg-stone-900 text-white p-4 rounded-full shadow-lg hover:bg-primary transition-all hover:scale-110 active:scale-95"
        aria-label="Open filters"
      >
        <Filter size={24} />
      </button>

      <Footer />
    </div>
  );
}

