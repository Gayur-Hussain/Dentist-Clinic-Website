"use client";

import { useRef } from "react";
import { motion } from "framer-motion";

const reviews = [
  {
    initials: "DK",
    name: "Devansh Kapoor",
    time: "2 days ago",
    quote: "Had two dental implants placed by Dr. Sharma. I was terrified of the surgery, but their guided digital systems made it take less than an hour! Almost zero recovery pain.",
    treatment: "Dental Implants",
  },
  {
    initials: "PS",
    name: "Priya Sharma",
    time: "1 week ago",
    quote: "Dr. Sharma completely redesigned my front teeth with porcelain veneers. The 3D digital mockups let me preview the results before any prep. Best clinic in New Delhi!",
    treatment: "Veneers Makeover",
  },
  {
    initials: "RG",
    name: "Rajesh Gupta",
    time: "2 weeks ago",
    quote: "No more gagging on messy putty! They scanned my mouth with an optical wand in 3 minutes. Spotless facility and completely pain-free root canal treatment.",
    treatment: "3D Optical Scan",
  },
  {
    initials: "AN",
    name: "Ananya Narang",
    time: "3 weeks ago",
    quote: "Got laser teeth whitening done before my wedding. The results were immediate and up to 8 shades brighter. The team was extremely gentle and professional.",
    treatment: "Laser Whitening",
  },
  {
    initials: "VS",
    name: "Vikram Singh",
    time: "1 month ago",
    quote: "Clear aligner treatment was smooth from start to finish. Being able to see my progress in 3D gave me immense confidence. Highly recommended!",
    treatment: "Clear Aligners",
  },
];

export default function GoogleReviews() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const amount = direction === "left" ? -360 : 360;
      scrollRef.current.scrollBy({ left: amount, behavior: "smooth" });
    }
  };

  return (
    <section className="py-24 md:py-36 bg-[#f5f5f7] text-[#1d1d1f] border-t border-black/5" id="reviews">
      <div className="max-w-[1120px] mx-auto px-6">
        
        {/* Header with Navigation Controls */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 mb-12">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 mb-3"
            >
              <div className="flex text-amber-500 text-sm">
                ★★★★★
              </div>
              <span className="text-xs font-bold text-[#1d1d1f]">4.9 / 5.0</span>
              <span className="text-xs text-[#86868b]">• 500+ Google Reviews</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-5xl font-bold tracking-tight text-[#1d1d1f]"
            >
              What Our Patients Say.
            </motion.h2>
          </div>

          {/* Previous / Next Scroll Buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => scroll("left")}
              className="w-11 h-11 rounded-full bg-white border border-black/10 hover:bg-black/5 text-[#1d1d1f] flex items-center justify-center transition-all cursor-pointer shadow-sm hover:scale-105"
              aria-label="Scroll Previous Reviews"
            >
              <span className="material-symbols-outlined text-[20px]">chevron_left</span>
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-11 h-11 rounded-full bg-[#00685f] hover:bg-[#005049] text-white flex items-center justify-center transition-all cursor-pointer shadow-sm hover:scale-105"
              aria-label="Scroll Next Reviews"
            >
              <span className="material-symbols-outlined text-[20px]">chevron_right</span>
            </button>
          </div>
        </div>

        {/* Horizontal Scrollable Container */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-6 pt-2 scroll-smooth no-scrollbar"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {reviews.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-white p-7 rounded-3xl border border-black/5 shadow-sm min-w-[320px] max-w-[360px] flex-shrink-0 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#00685f]/10 text-[#00685f] font-bold text-sm flex items-center justify-center">
                      {r.initials}
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-[#1d1d1f]">{r.name}</h4>
                      <span className="text-[11px] text-[#86868b]">{r.time}</span>
                    </div>
                  </div>
                  <span className="text-[11px] font-semibold text-[#00685f] bg-[#00685f]/5 px-2.5 py-1 rounded-full">
                    Verified
                  </span>
                </div>

                <p className="text-sm text-[#515154] leading-relaxed mb-6 font-normal">
                  "{r.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-black/5 flex justify-between items-center text-xs text-[#86868b]">
                <span>Treatment: <strong className="text-[#1d1d1f]">{r.treatment}</strong></span>
                <span className="text-amber-500">★★★★★</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
