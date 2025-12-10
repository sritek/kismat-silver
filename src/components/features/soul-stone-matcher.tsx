"use client";

import { useState } from "react";
import { Sparkles } from "lucide-react";
import Input from "@/components/ui/input";
import Button from "@/components/ui/button";

export default function SoulStoneMatcher() {
  const [intention, setIntention] = useState("");
  const [result, setResult] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleMatch = async () => {
    if (!intention) return;
    setLoading(true);
    setResult(null);

    // Placeholder response - Gemini API removed
    setTimeout(() => {
      setResult(
        "For your intention of healing and renewal, we suggest Moonstone or Pearl. These stones resonate with emotional balance and inner peace, perfectly complementing our handcrafted silver pieces."
      );
      setLoading(false);
    }, 1000);
  };

  return (
    <section className="py-12 md:py-20 bg-background px-6 border-t border-gray-100">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="inline-block p-2 rounded-full bg-primary/10 text-primary mb-4">
          <Sparkles size={20} />
        </div>
        <h2 className="font-serif text-2xl md:text-4xl text-gray-900 mb-4">
          Find Your Soul Stone
        </h2>
        <p className="text-gray-500 mb-8 max-w-lg mx-auto text-sm md:text-base">
          Whisper your intention to the universe, and let our AI guide you to
          the piece meant for you.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 max-w-lg mx-auto">
          <Input
            type="text"
            placeholder="e.g., Healing, Confidence, New Love..."
            className="w-full"
            value={intention}
            onChange={(e) => setIntention(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleMatch()}
          />
          <Button
            onClick={handleMatch}
            disabled={loading}
            className="w-full md:w-auto whitespace-nowrap flex items-center justify-center gap-2 px-6 py-3 rounded-sm shadow-md shadow-black/10 border border-black/5 text-sm font-semibold"
          >
            {loading ? "Revealing..." : "Reveal"}
          </Button>
        </div>

        {result && (
          <div className="mt-10 p-6 md:p-8 bg-white border border-gray-100 shadow-sm max-w-2xl mx-auto animate-fade-in-up">
            <h3 className="font-serif text-xl mb-4 text-primary">
              The Stars Suggest...
            </h3>
            <p className="text-gray-700 font-light text-base md:text-lg leading-relaxed italic">
              &quot;{result}&quot;
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
