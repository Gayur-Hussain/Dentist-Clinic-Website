"use client";

import { motion } from "framer-motion";

export default function Technology() {
  return (
    <section id="technology" className="py-24 md:py-36 bg-white text-[#1d1d1f] border-t border-black/5">
      <div className="max-w-[1120px] mx-auto px-6">
        
        {/* Apple Section Headline */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-semibold uppercase tracking-widest text-[#86868b] block mb-3"
          >
            Digital Innovation
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-bold tracking-tight text-[#1d1d1f] mb-4 leading-tight"
          >
            3D Optical Scanning. <br />
            No Putty. No Gagging.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#515154] text-base sm:text-lg font-normal leading-relaxed"
          >
            A fast 60-second optical scan creates an exact 3D digital model of your teeth with zero discomfort.
          </motion.p>
        </div>

        {/* Big Photography Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-3xl overflow-hidden shadow-xl border border-black/5 mb-16 bg-[#f5f5f7]"
        >
          <img
            src="/images/tech_3d_scanner.jpg"
            alt="3D Intraoral Scanner Wand"
            className="w-full h-[320px] sm:h-[460px] object-cover"
          />
        </motion.div>

        {/* 3 Simple Patient Benefit Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl bg-[#f5f5f7] border border-black/5"
          >
            <span className="text-sm font-bold text-[#00685f] block mb-2">01 / Instant 3D Model</span>
            <h4 className="text-lg font-bold text-[#1d1d1f] mb-2">See Your Smile First</h4>
            <p className="text-sm text-[#515154] leading-relaxed">
              Watch your 3D tooth map appear on our chairside screen in real time before treatment starts.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="p-8 rounded-2xl bg-[#f5f5f7] border border-black/5"
          >
            <span className="text-sm font-bold text-[#00685f] block mb-2">02 / Sub-Millimeter Fit</span>
            <h4 className="text-lg font-bold text-[#1d1d1f] mb-2">Micrometric Precision</h4>
            <p className="text-sm text-[#515154] leading-relaxed">
              Custom aligners and crowns fit perfectly on the first try without painful adjustments.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="p-8 rounded-2xl bg-[#f5f5f7] border border-black/5"
          >
            <span className="text-sm font-bold text-[#00685f] block mb-2">03 / 100% Pain-Free</span>
            <h4 className="text-lg font-bold text-[#1d1d1f] mb-2">Complete Comfort</h4>
            <p className="text-sm text-[#515154] leading-relaxed">
              A light wand gently glides over your teeth. Fast, clean, and completely non-invasive.
            </p>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
