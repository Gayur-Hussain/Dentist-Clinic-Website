"use client";

import { motion } from "framer-motion";

export default function EmergencyBanner() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-[1120px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#00685f] text-white p-8 sm:p-12 md:p-14 rounded-3xl flex flex-col lg:flex-row justify-between items-center gap-8 relative overflow-hidden shadow-xl"
        >
          {/* Subtle background icon */}
          <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none translate-x-1/4 translate-y-1/4">
            <span className="material-symbols-outlined text-[240px] md:text-[320px] text-white">
              emergency
            </span>
          </div>

          <div className="relative z-10 text-center lg:text-left max-w-xl">
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-200 block mb-2 font-semibold">
              24/7 Priority Emergency Care
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight mb-3">
              Need Urgent Dental Care?
            </h2>
            <p className="text-white/80 text-sm sm:text-base font-normal leading-relaxed">
              We prioritize same-day emergency cases for acute toothache, trauma, or broken teeth in New Delhi.
            </p>
          </div>

          {/* Fully Responsive Buttons Container */}
          <div className="relative z-10 w-full lg:w-auto flex flex-col sm:flex-row gap-3 justify-center items-stretch sm:items-center shrink-0">
            <a
              href="tel:+919876543210"
              className="h-12 px-7 bg-white text-[#00685f] rounded-full font-bold text-sm hover:bg-white/95 transition-all flex items-center justify-center gap-2 shadow-md cursor-pointer"
            >
              <span className="material-symbols-outlined text-[18px]">call</span>
              <span>+91 98765 43210</span>
            </a>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="h-12 px-7 border border-white/40 text-white rounded-full font-bold text-sm hover:bg-white/10 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span className="material-symbols-outlined text-[18px]">chat</span>
              <span>WhatsApp Hotline</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
