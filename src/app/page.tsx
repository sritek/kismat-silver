import AnnouncementBar from "@/components/features/announcement-bar";
import Navbar from "@/components/features/navbar";
import HeroCarousel from "@/components/features/hero-carousel";
import CategoriesSection from "@/components/features/categories-section";
import SoulStoneMatcher from "@/components/features/soul-stone-matcher";
import BrandStory from "@/components/features/brand-story";
import Footer from "@/components/features/footer";
import FloatingContactButtons from "@/components/features/floating-contact-buttons";

export default function Home() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <AnnouncementBar />
      <Navbar />
      <HeroCarousel />
      <CategoriesSection />
      <SoulStoneMatcher />
      <BrandStory />
      <Footer />
      <FloatingContactButtons />
    </div>
  );
}

