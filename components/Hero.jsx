"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-[#f5f5f7] text-[#1d1d1f] overflow-hidden">
      <div className="max-w-[1120px] mx-auto px-6 text-center flex flex-col items-center">
        
        {/* Apple Sub-Label */}
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xs font-semibold uppercase tracking-widest text-[#86868b] mb-4"
        >
          Lumina Dental • Vasant Vihar, New Delhi
        </motion.span>

        {/* Large Bold Apple Typography */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#1d1d1f] max-w-3xl leading-[1.08] mb-6"
        >
          Confident Smiles. <br className="hidden sm:inline" />
          Painless Care.
        </motion.h1>

        {/* Apple 1-Sentence Description */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-[#515154] max-w-xl font-normal leading-relaxed mb-8"
        >
          Experience 3D optical precision, zero-pain treatments, and luxury clinical comfort designed entirely around you.
        </motion.p>

        {/* Call To Actions */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-14"
        >
          <Link
            href="/contact"
            className="h-11 px-7 rounded-full text-sm font-semibold text-white bg-[#00685f] hover:bg-[#005049] transition-all shadow-sm hover:shadow-md cursor-pointer flex items-center justify-center"
          >
            Book Appointment
          </Link>
          <a
            href="tel:+919876543210"
            className="h-11 px-7 rounded-full text-sm font-semibold text-[#1d1d1f] bg-white border border-black/10 hover:bg-black/5 transition-all cursor-pointer flex items-center justify-center gap-2"
          >
            <span className="material-symbols-outlined text-[18px]">call</span>
            Call Clinic
          </a>
        </motion.div>

        {/* Centered High-Resolution Product Photography Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative w-full max-w-[1000px] rounded-3xl overflow-hidden shadow-2xl shadow-black/10 border border-black/5"
        >
          <img
            src="/images/hero_dental_clinic.jpg"
            alt="Lumina Dental Studio Interior"
            className="w-full h-[320px] sm:h-[480px] md:h-[560px] object-cover"
          />

          {/* Minimal Bottom Info Bar */}
          <div className="bg-white/90 backdrop-blur-md px-6 py-4 border-t border-black/5 flex flex-wrap justify-between items-center gap-4 text-left">
            <div>
              <span className="text-xs font-semibold text-[#1d1d1f] block">
                Modern Studio Environment
              </span>
              <span className="text-xs text-[#86868b]">
                Acoustic treatment pods • 3D Optical Imaging
              </span>
            </div>
            <div className="flex items-center gap-2 text-xs font-bold text-[#00685f]">
              <span className="material-symbols-outlined text-[18px]">star</span>
              <span>4.9★ (500+ Google Patient Reviews)</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
