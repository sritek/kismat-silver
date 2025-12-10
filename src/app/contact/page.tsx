"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import Navbar from "@/components/features/navbar";
import Footer from "@/components/features/footer";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "General Inquiry",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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
      `}</style>

      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-24 animate-fade-in-up">
        {/* Page Header */}
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-xs md:text-sm font-bold tracking-[0.3em] text-stone-500 uppercase mb-4">
            We're Here to Help
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-stone-900 mb-4 sm:mb-6">
            Get in Touch
          </h1>
          <p className="text-stone-600 max-w-xl mx-auto font-light text-base sm:text-lg px-4">
            Have a question about our collections or need assistance with a custom order? Our team is ready to assist you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-24">
          {/* Contact Form */}
          <div className="bg-white p-6 sm:p-8 lg:p-12 shadow-sm border border-stone-100 rounded-sm">
            <h2 className="text-xl sm:text-2xl font-serif text-stone-900 mb-6 sm:mb-8">Send a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label
                    htmlFor="firstName"
                    className="text-xs font-bold uppercase tracking-widest text-stone-500"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full border-b border-stone-200 py-2 text-stone-900 focus:outline-none focus:border-stone-900 transition-colors bg-transparent"
                    placeholder="Jane"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="lastName"
                    className="text-xs font-bold uppercase tracking-widest text-stone-500"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full border-b border-stone-200 py-2 text-stone-900 focus:outline-none focus:border-stone-900 transition-colors bg-transparent"
                    placeholder="Doe"
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-xs font-bold uppercase tracking-widest text-stone-500">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border-b border-stone-200 py-2 text-stone-900 focus:outline-none focus:border-stone-900 transition-colors bg-transparent"
                  placeholder="jane@example.com"
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-xs font-bold uppercase tracking-widest text-stone-500">
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full border-b border-stone-200 py-2 text-stone-900 focus:outline-none focus:border-stone-900 transition-colors bg-transparent cursor-pointer"
                >
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Custom Order">Custom Order</option>
                  <option value="Shipping & Returns">Shipping & Returns</option>
                  <option value="Wholesale">Wholesale</option>
                </select>
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-xs font-bold uppercase tracking-widest text-stone-500">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full border-b border-stone-200 py-2 text-stone-900 focus:outline-none focus:border-stone-900 transition-colors bg-transparent resize-none"
                  placeholder="How can we help you?"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-stone-900 text-white py-4 text-xs font-bold uppercase tracking-[0.2em] hover:bg-stone-800 transition-colors mt-4 flex items-center justify-center gap-2 group"
              >
                Send Message
                <Send size={14} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8 sm:space-y-12 py-4">
            <div>
              <h3 className="text-lg sm:text-xl font-serif text-stone-900 mb-4 sm:mb-6 flex items-center gap-3">
                <MapPin className="text-stone-400 flex-shrink-0" size={24} />
                <span>Visit Our Showroom</span>
              </h3>
              <p className="text-stone-600 font-light leading-relaxed mb-2">
                123 Johari Bazaar, Pink City
                <br />
                Jaipur, Rajasthan 302003
                <br />
                India
              </p>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold uppercase tracking-widest text-stone-900 border-b border-stone-900 pb-0.5 hover:text-stone-600 hover:border-stone-600 transition-colors inline-block"
              >
                Get Directions
              </a>
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-serif text-stone-900 mb-4 sm:mb-6 flex items-center gap-3">
                <Phone className="text-stone-400 flex-shrink-0" size={24} />
                <span>Contact Info</span>
              </h3>
              <div className="space-y-4">
                <p className="flex items-start sm:items-center gap-3 text-stone-600 font-light">
                  <span className="w-20 text-xs font-bold uppercase tracking-widest text-stone-400 flex-shrink-0">
                    Phone
                  </span>
                  <a href="tel:+919999999999" className="hover:text-stone-900 transition-colors">
                    +91 999 999 9999
                  </a>
                </p>
                <p className="flex items-start sm:items-center gap-3 text-stone-600 font-light">
                  <span className="w-20 text-xs font-bold uppercase tracking-widest text-stone-400 flex-shrink-0">
                    Email
                  </span>
                  <a href="mailto:hello@kismatsilver.com" className="hover:text-stone-900 transition-colors">
                    hello@kismatsilver.com
                  </a>
                </p>
                <p className="flex items-start sm:items-center gap-3 text-stone-600 font-light">
                  <span className="w-20 text-xs font-bold uppercase tracking-widest text-stone-400 flex-shrink-0">
                    WhatsApp
                  </span>
                  <a
                    href="https://wa.me/919999999999"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-stone-900 transition-colors"
                  >
                    +91 999 999 9999
                  </a>
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-serif text-stone-900 mb-4 sm:mb-6 flex items-center gap-3">
                <Clock className="text-stone-400 flex-shrink-0" size={24} />
                <span>Opening Hours</span>
              </h3>
              <div className="space-y-2 text-stone-600 font-light">
                <p className="flex justify-between max-w-xs border-b border-stone-100 pb-2">
                  <span>Monday - Saturday</span>
                  <span>10:30 AM - 8:30 PM</span>
                </p>
                <p className="flex justify-between max-w-xs border-b border-stone-100 pb-2">
                  <span>Sunday</span>
                  <span>Closed</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}



