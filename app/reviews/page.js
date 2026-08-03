"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import MobileNav from "@/components/MobileNav";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const reviewsData = [
  { 
    name: "Siddharth Malhotra", 
    role: "Veneers Patient", 
    rating: 5, 
    date: "2 days ago", 
    quote: "Dr. Rohan Sharma completely redesigned my upper jaw with veneers. The digital preview showed exactly what I'd get. Truly a state-of-the-art clinic in Vasant Vihar.", 
    initials: "SM", 
    category: "veneers", 
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAn_EmJ_lXoUdC-KuBI1bk-EWQ67jwisteDJO1nz4qxvvA7QvoC7PLy6dB6CUPoIOiH9ug2P9_RY-ENpRIoCCaItkHRGfvTs4jwzy-dpXdT8FyDJVAkE5_Wa6UWG9MXnI0uhSN-52PsTGbeLFms4CRzwIaD3BQEusIyFCRm-QCz_V14EBIKGFFOytLBojratYq1HrdEfehFvFEFZ2UVS7POyx-Yt7DlLtj2kMuIFA9Iju2iDYysUGmBxmaVg0wwswvVeX8GZED5C6w" 
  },
  { 
    name: "Amit Patel", 
    role: "Root Canal Patient", 
    rating: 5, 
    date: "1 week ago", 
    quote: "Was extremely anxious about my root canal, but Dr. Sharma used warm anesthesia. I felt absolutely zero pain. The boutique feel in the lounge is so relaxing.", 
    initials: "AP", 
    category: "root-canal", 
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBvQhwbRHA38_QhQJXozhvpAvJ7ryPh3gSp2FEX0Z9_sdX32FxzeMs7r-MltVTWSqHCeMDcsPgu3zGa80QsAP2SKaARLIuvOL8ZWNQ6CTpEqP73YdexpXPgWIvTQUc066kmUaicSRD9w-0d0jtKvhq1ZZHIJRqyyCVKJlsld2V1iZUDQujE7JUD3D-BTVuIVoUSey3-WhJ0kUAqEOiJBlilTKJngtckk00wlkI3yVrOsC26xLKv8vM8L0VUXtLhYOEB62D3z1KT8vQ" 
  },
  { 
    name: "Dr. Rajesh K. Iyer, MD", 
    role: "Physician & Implant Patient", 
    rating: 5, 
    date: "2 weeks ago", 
    quote: "As a medical practitioner, I am picky about infection control. Lumina's hospital-grade autoclaves are top-tier. Got dental implants here — superb surgical precision.", 
    initials: "RI", 
    category: "implants", 
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBRgiqbANVDP1FBgnzUsrb63eQ4ZNH3HaEc1BEMH4f9JfzHiYF7snaOdhyZ53J_oVmrkXLkvzLTsRd1omok2utmX8UWl5u5015aazFCsci5AEhbdmU3vZVb0eb3FUndhIse_27MGPKr1do_iA63U2xJj5QdofnHHpZBy6oKx1KnKAixxx1McpDOoNQRF0TH19cUBlnBJRNyQcus4m2NOOSXH-yNXH1qob3jJA35x0WyFcOzP2XBfJG5SpUpfkhA7AJg7KiBQbXm6rk" 
  },
  { 
    name: "Sneha Rao", 
    role: "Mother of 6yo Patient", 
    rating: 5, 
    date: "3 weeks ago", 
    quote: "Took my daughter for a cavity filling. Dr. Pooja Rao was so gentle and playful. My child left happy with a toy and zero dentist fear! Highly recommended for kids.", 
    initials: "SR", 
    category: "pediatrics", 
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBx4Jjk0NlVi1E1XZbbjmcp7P_oclLX505Ml0is_4ZNdYkzj8JDnCLm8djm2NgMW-zh3Ngb7ng9akxtISfR1dcbuo3HoiSQX0X1ViFZP6Eq4M2WakzRPQzOw_eOi2uujXdqJDGZ1e1jgA5723G8OLBgFJsOzESFdDhwSxionpG4gmp4bybTAacgmUq-nsfOdXWsHH5NvGPZ5H2yEe2IvhEsK81XchVor0BhvdDdhsh08dT6NpOr986_ciGHeAN1HDuiHQVYvhuQ1T0" 
  },
  { 
    name: "Vikram Sen", 
    role: "Gum Care Patient", 
    rating: 5, 
    date: "1 month ago", 
    quote: "Had severe bleeding gums. Dr. Sharma's deep cleaning and laser gum scaling healed them in two visits. Clean facilities and transparent treatment explanations.", 
    initials: "VS", 
    category: "gum-care", 
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAn_EmJ_lXoUdC-KuBI1bk-EWQ67jwisteDJO1nz4qxvvA7QvoC7PLy6dB6CUPoIOiH9ug2P9_RY-ENpRIoCCaItkHRGfvTs4jwzy-dpXdT8FyDJVAkE5_Wa6UWG9MXnI0uhSN-52PsTGbeLFms4CRzwIaD3BQEusIyFCRm-QCz_V14EBIKGFFOytLBojratYq1HrdEfehFvFEFZ2UVS7POyx-Yt7DlLtj2kMuIFA9Iju2iDYysUGmBxmaVg0wwswvVeX8GZED5C6w" 
  },
  { 
    name: "Ananya Deshmukh", 
    role: "Aligners Patient", 
    rating: 5, 
    date: "1 month ago", 
    quote: "Got clear aligners here. The 3D intraoral scanner is so futuristic — no messy chemical putty tray! Very professional staff and clear orthodontic planning.", 
    initials: "AD", 
    category: "aligners", 
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBvQhwbRHA38_QhQJXozhvpAvJ7ryPh3gSp2FEX0Z9_sdX32FxzeMs7r-MltVTWSqHCeMDcsPgu3zGa80QsAP2SKaARLIuvOL8ZWNQ6CTpEqP73YdexpXPgWIvTQUc066kmUaicSRD9w-0d0jtKvhq1ZZHIJRqyyCVKJlsld2V1iZUDQujE7JUD3D-BTVuIVoUSey3-WhJ0kUAqEOiJBlilTKJngtckk00wlkI3yVrOsC26xLKv8vM8L0VUXtLhYOEB62D3z1KT8vQ" 
  },
];

const filterOptions = [
  { id: "all", label: "All Reviews" },
  { id: "veneers", label: "Smile Design / Veneers" },
  { id: "implants", label: "Dental Implants" },
  { id: "root-canal", label: "Root Canal" },
  { id: "aligners", label: "Clear Aligners" },
  { id: "pediatrics", label: "Kids Dentistry" },
];

export default function ReviewsPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredReviews = activeFilter === "all"
    ? reviewsData
    : reviewsData.filter(r => r.category === activeFilter);

  return (
    <>
      <Navbar />
      <main>
        <PageHeader
          badge="Verified Reviews"
          title="Patient Stories & Results"
          subtitle="Over 500 verified Google reviews from patients who chose Lumina Dental Vasant Vihar for their smile journey."
          breadcrumbs={[{ label: "Reviews" }]}
        />

        {/* Dynamic Ratings overview widget (Google Maps card mockup) */}
        <section className="py-16 bg-white border-b border-[#eaefed]">
          <div className="max-w-[1280px] mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Aggregate Score Card */}
            <div className="lg:col-span-4 bg-[#f5faf8] border border-[#eaefed] rounded-3xl p-8 text-center shadow-sm">
              <div className="text-6xl font-extrabold text-[#00685f] mb-2">4.9</div>
              <div className="flex text-amber-400 justify-center mb-2">
                {[...Array(5)].map((_, index) => (
                  <span
                    key={index}
                    className="material-symbols-outlined text-[26px] fill-1"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    star
                  </span>
                ))}
              </div>
              <div className="font-bold text-sm text-[#171d1c]">Google Review Score</div>
              <div className="text-xs text-[#6d7a77] mt-1">Based on 532 verified patient ratings</div>
            </div>

            {/* Google Rating Distribution Bar Charts */}
            <div className="lg:col-span-5 space-y-2 border-y lg:border-y-0 lg:border-x border-[#eaefed] py-6 lg:py-0 lg:px-8">
              {[
                { star: 5, percentage: "94%" },
                { star: 4, percentage: "4%" },
                { star: 3, percentage: "1%" },
                { star: 2, percentage: "0%" },
                { star: 1, percentage: "1%" },
              ].map((row, i) => (
                <div key={i} className="flex items-center gap-3 text-xs text-[#3d4947]">
                  <span className="w-12 font-semibold text-right">{row.star} Stars</span>
                  <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-amber-400 rounded-full" style={{ width: row.percentage }} />
                  </div>
                  <span className="w-8 text-right font-medium text-[#6d7a77]">{row.percentage}</span>
                </div>
              ))}
            </div>

            {/* Quick Metrics stats */}
            <div className="lg:col-span-3 grid grid-cols-2 gap-4 text-center lg:pl-4">
              <div className="p-4 bg-white border border-[#eaefed] rounded-2xl">
                <div className="text-2xl font-bold text-[#00685f]">98%</div>
                <div className="text-[10px] uppercase font-bold text-[#6d7a77] mt-1">Recommend Us</div>
              </div>
              <div className="p-4 bg-white border border-[#eaefed] rounded-2xl">
                <div className="text-2xl font-bold text-[#00685f]">12k+</div>
                <div className="text-[10px] uppercase font-bold text-[#6d7a77] mt-1">Happy Patients</div>
              </div>
            </div>

          </div>
        </section>

        {/* Reviews Filters and Grid */}
        <section className="py-24 bg-[#f5faf8]">
          <div className="max-w-[1280px] mx-auto px-6 md:px-10">
            
            {/* Filter controls */}
            <div className="flex flex-wrap gap-2 justify-center mb-12">
              {filterOptions.map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => setActiveFilter(opt.id)}
                  className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all duration-300 cursor-pointer ${
                    activeFilter === opt.id
                      ? "bg-[#00685f] text-white shadow-md"
                      : "bg-white border border-[#eaefed] text-[#3d4947] hover:bg-[#00685f]/5 hover:text-[#00685f]"
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>

            {/* Filtered Reviews list */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredReviews.map((review, i) => (
                <div
                  key={i}
                  className="bg-white border border-[#eaefed] p-8 rounded-[32px] shadow-sm hover:shadow-xl hover:border-[#00685f]/10 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Stars */}
                    <div className="flex gap-1 text-amber-400 mb-5">
                      {[...Array(review.rating)].map((_, s) => (
                        <span key={s} className="material-symbols-outlined text-[18px] fill-1" style={{ fontVariationSettings: "'FILL' 1" }}>
                          star
                        </span>
                      ))}
                    </div>
                    {/* Review text */}
                    <p className="text-[#3d4947] italic leading-relaxed mb-6 text-sm">
                      "{review.quote}"
                    </p>
                  </div>

                  {/* Reviewer details footer */}
                  <div className="flex items-center gap-4 pt-5 border-t border-[#eaefed] mt-6">
                    <img src={review.img} alt={review.name} className="w-11 h-11 rounded-full object-cover" />
                    <div>
                      <p className="font-bold text-xs text-[#171d1c]">{review.name}</p>
                      <p className="text-[10px] text-[#6d7a77] mt-0.5">{review.role} · {review.date}</p>
                    </div>
                    <div className="ml-auto shrink-0">
                      <img
                        alt="Google"
                        className="h-4.5 opacity-55"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuD8R6c5xlzyuO6IH9ZYXnIRGv2kvVdhYJyElRNuCDiOq8OE3dQ8BOd_XWI2E-2bCur9-yg41L1viIvvXkpjxn_VCaN0G6S97i20xVPYSZOMfOQzTBp0K94GdUN9yerY82hle0QwQsnWRYqyKTXxmQ1MSDKG-sfJSb75AQmxL3oI81tq4mJaaL5Rk03D6nXMumGav9lngZndVNx9O5Y62l8uv3akJMqrgfVNTM542jCAG4S25Mul84USyyOIg_YiDh1815QprkGUWMY"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredReviews.length === 0 && (
              <div className="text-center py-12 bg-white rounded-3xl border border-[#eaefed]">
                <span className="material-symbols-outlined text-[#6d7a77] text-[48px] mb-2">rate_review</span>
                <p className="text-[#3d4947] text-sm">No reviews found under this category.</p>
              </div>
            )}

          </div>
        </section>

        {/* Write review CTA */}
        <section className="py-20 bg-white border-t border-[#eaefed]">
          <div className="max-w-xl mx-auto px-6 text-center">
            <h2 className="text-2xl font-bold text-[#171d1c] mb-3">Share Your Experience</h2>
            <p className="text-[#3d4947] mb-8 text-sm leading-relaxed">
              We'd love to hear about your treatment! Leave us a review on Google and help other patients in New Delhi find painless dental care.
            </p>
            <a href="https://g.page/r" target="_blank" rel="noopener noreferrer">
              <Button className="px-8 py-5 rounded-full text-white font-bold text-sm cursor-pointer bg-primary hover:bg-[#005049]">
                Write a Google Review
              </Button>
            </a>
          </div>
        </section>
      </main>
      <Footer />
      <MobileNav />
    </>
  );
}
