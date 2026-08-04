"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import MobileNav from "@/components/MobileNav";
import { Button } from "@/components/ui/button";

const reviewsData = [
  { 
    name: "Siddharth Malhotra", 
    role: "Veneers Patient", 
    rating: 5, 
    date: "2 days ago", 
    quote: "Dr. Rohan Sharma completely redesigned my upper jaw with veneers. The 3D digital preview showed exactly what I'd get. Truly a state-of-the-art clinic in Vasant Vihar.", 
    initials: "SM", 
    category: "veneers", 
  },
  { 
    name: "Amit Patel", 
    role: "Root Canal Patient", 
    rating: 5, 
    date: "1 week ago", 
    quote: "Was extremely anxious about my root canal, but Dr. Sharma used warm anesthesia. I felt absolutely zero pain.", 
    initials: "AP", 
    category: "root-canal", 
  },
  { 
    name: "Dr. Rajesh K. Iyer, MD", 
    role: "Physician & Implant Patient", 
    rating: 5, 
    date: "2 weeks ago", 
    quote: "As a medical practitioner, I am picky about infection control. Lumina's hospital-grade autoclaves are top-tier. Got dental implants here — superb surgical precision.", 
    initials: "RI", 
    category: "implants", 
  },
  { 
    name: "Sneha Rao", 
    role: "Mother of 6yo Patient", 
    rating: 5, 
    date: "3 weeks ago", 
    quote: "Took my daughter for a cavity filling. The team was so gentle and playful. My child left happy with zero dentist fear!", 
    initials: "SR", 
    category: "pediatrics", 
  },
  { 
    name: "Vikram Sen", 
    role: "Gum Care Patient", 
    rating: 5, 
    date: "1 month ago", 
    quote: "Had severe bleeding gums. Dr. Sharma's laser gum scaling healed them in two visits. Clean facilities and transparent treatment explanations.", 
    initials: "VS", 
    category: "gum-care", 
  },
  { 
    name: "Ananya Deshmukh", 
    role: "Aligners Patient", 
    rating: 5, 
    date: "1 month ago", 
    quote: "Got clear aligners here. The 3D intraoral scanner is so futuristic — no messy chemical putty tray! Very professional staff and clear orthodontic planning.", 
    initials: "AD", 
    category: "aligners", 
  },
];

const filterOptions = [
  { id: "all", label: "All Reviews" },
  { id: "veneers", label: "Smile Makeover" },
  { id: "implants", label: "Dental Implants" },
  { id: "root-canal", label: "Root Canal" },
  { id: "aligners", label: "Clear Aligners" },
];

export default function ReviewsPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredReviews = activeFilter === "all"
    ? reviewsData
    : reviewsData.filter(r => r.category === activeFilter);

  return (
    <>
      <Navbar />
      <main className="bg-[#f5f5f7] text-[#1d1d1f]">
        <PageHeader
          title="Patient Stories."
          subtitle="Over 500 verified Google reviews from patients who chose Lumina Dental Vasant Vihar."
        />

        {/* Dynamic Ratings overview */}
        <section className="py-16 bg-white border-t border-black/5">
          <div className="max-w-[1120px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-4 bg-[#f5f5f7] border border-black/5 rounded-3xl p-8 text-center">
              <div className="text-6xl font-bold text-[#00685f] mb-2">4.9</div>
              <div className="text-amber-500 text-lg mb-1">★★★★★</div>
              <div className="font-bold text-sm text-[#1d1d1f]">Google Patient Rating</div>
              <div className="text-xs text-[#86868b] mt-1">Based on 500+ verified Google Reviews</div>
            </div>

            <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div className="p-6 bg-[#f5f5f7] border border-black/5 rounded-2xl text-center">
                <span className="text-3xl font-bold text-[#1d1d1f] block">98%</span>
                <span className="text-xs text-[#86868b] font-medium">Recommend Us</span>
              </div>
              <div className="p-6 bg-[#f5f5f7] border border-black/5 rounded-2xl text-center">
                <span className="text-3xl font-bold text-[#00685f] block">4,500+</span>
                <span className="text-xs text-[#86868b] font-medium">Smiles Restored</span>
              </div>
              <div className="p-6 bg-[#f5f5f7] border border-black/5 rounded-2xl text-center col-span-2 sm:col-span-1">
                <span className="text-3xl font-bold text-[#1d1d1f] block">15+</span>
                <span className="text-xs text-[#86868b] font-medium">Years Practice</span>
              </div>
            </div>

          </div>
        </section>

        {/* Reviews Filters and Grid */}
        <section className="py-20 md:py-28 bg-[#f5f5f7]">
          <div className="max-w-[1120px] mx-auto px-6">
            
            {/* Filter controls */}
            <div className="flex flex-wrap gap-2 justify-center mb-12">
              {filterOptions.map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => setActiveFilter(opt.id)}
                  className={`px-5 py-2.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                    activeFilter === opt.id
                      ? "bg-[#00685f] text-white shadow-sm"
                      : "bg-white border border-black/5 text-[#1d1d1f] hover:bg-black/5"
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>

            {/* Filtered Reviews list */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredReviews.map((review, i) => (
                <div
                  key={i}
                  className="bg-white border border-black/5 p-7 rounded-3xl shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <div className="text-amber-500 text-sm mb-3">★★★★★</div>
                    <p className="text-[#515154] text-sm leading-relaxed mb-6 font-normal">
                      "{review.quote}"
                    </p>
                  </div>

                  <div className="flex items-center gap-3 pt-4 border-t border-black/5">
                    <div className="w-9 h-9 rounded-full bg-[#00685f]/10 text-[#00685f] font-bold text-xs flex items-center justify-center">
                      {review.initials}
                    </div>
                    <div>
                      <p className="font-bold text-xs text-[#1d1d1f]">{review.name}</p>
                      <p className="text-[10px] text-[#86868b]">{review.role} · {review.date}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

      </main>
      <Footer />
      <MobileNav />
    </>
  );
}
