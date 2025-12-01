"use client";

import { useState, useEffect, useRef } from "react";
import { X, Sparkles, Send } from "lucide-react";
import callGemini from "@/lib/gemini";
import { ChatMessage } from "@/lib/types";

export default function AIConcierge() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "system",
      text: "Hello, I am the Kismat Concierge. How can I assist you in finding the perfect silver piece today?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const toggleChat = () => setIsOpen(!isOpen);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = input;
    setMessages((prev) => [...prev, { role: "user", text: userMessage }]);
    setInput("");
    setIsTyping(true);

    const systemPrompt =
      "You are a sophisticated, polite, and helpful personal stylist for Kismat Jewellery. We sell high-quality silver jewelry. Help users choose products, find gifts, or understand silver care. Be concise and elegant in your tone. Do not use markdown or bold text, just plain text.";

    const response = await callGemini(userMessage, systemPrompt);

    setMessages((prev) => [...prev, { role: "system", text: response }]);
    setIsTyping(false);
  };

  return (
    <>
      {/* Floating Action Button */}
      <button
        onClick={toggleChat}
        className="fixed bottom-6 right-6 z-50 bg-black text-white p-4 rounded-full shadow-2xl hover:bg-primary transition-all duration-300 group"
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        {isOpen ? (
          <X size={24} />
        ) : (
          <Sparkles size={24} className="group-hover:animate-pulse" />
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div
          className="fixed bottom-24 right-6 w-80 md:w-96 bg-white shadow-2xl z-50 border border-gray-100 flex flex-col rounded-lg overflow-hidden animate-fade-in-up"
          style={{ height: "500px" }}
        >
          {/* Header */}
          <div className="bg-[#1a1a1a] text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              <span className="font-serif tracking-widest text-sm">
                KISMAT CONCIERGE
              </span>
            </div>
            <button
              onClick={toggleChat}
              className="text-gray-400 hover:text-white"
              aria-label="Close chat"
            >
              <X size={16} />
            </button>
          </div>

          {/* Messages */}
          <div
            className="flex-1 overflow-y-auto p-4 bg-background"
            ref={scrollRef}
          >
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`mb-4 flex ${
                  msg.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[80%] p-3 text-sm leading-relaxed ${
                    msg.role === "user"
                      ? "bg-primary text-white rounded-t-lg rounded-bl-lg"
                      : "bg-white border border-gray-200 text-gray-700 rounded-t-lg rounded-br-lg shadow-sm"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start mb-4">
                <div className="bg-white border border-gray-200 p-3 rounded-t-lg rounded-br-lg shadow-sm flex items-center gap-1">
                  <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></div>
                  <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></div>
                  <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></div>
                </div>
              </div>
            )}
          </div>

          {/* Input Area */}
          <div className="p-4 bg-white border-t border-gray-100 flex gap-2">
            <input
              type="text"
              placeholder="Ask for advice..."
              className="flex-1 bg-gray-50 text-sm p-3 focus:outline-none focus:ring-1 focus:ring-primary rounded-sm"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <button
              onClick={handleSend}
              disabled={!input.trim() || isTyping}
              className="bg-black text-white p-3 hover:bg-primary disabled:opacity-50 transition-colors rounded-sm"
              aria-label="Send message"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}

