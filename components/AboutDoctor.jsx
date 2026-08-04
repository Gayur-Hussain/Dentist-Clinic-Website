"use client";

import { motion } from "framer-motion";

export default function AboutDoctor() {
  return (
    <section className="py-24 md:py-36 bg-white text-[#1d1d1f] border-t border-black/5" id="about">
      <div className="max-w-[1120px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Doctor Photography */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-5"
        >
          <div className="rounded-3xl overflow-hidden shadow-xl border border-black/5 bg-[#f5f5f7]">
            <img
              src="/images/dr_portrait_smile.jpg"
              alt="Dr. Ananya Sharma"
              className="w-full h-[450px] sm:h-[540px] object-cover"
            />
          </div>
        </motion.div>

        {/* Doctor Bio Details */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-7 space-y-6 text-left"
        >
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-[#86868b] block mb-2">
              Lead Clinical Specialist
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#1d1d1f] mb-4">
              Dr. Ananya Sharma
            </h2>
            <p className="text-sm font-semibold text-[#00685f]">
              MDS (MAIDS, New Delhi) • Prosthodontics & Implantology
            </p>
          </div>

          <p className="text-[#515154] text-base sm:text-lg font-normal leading-relaxed">
            With over 15 years of surgical and aesthetic practice, Dr. Ananya Sharma founded Lumina Dental to offer patients a serene, painless medical environment combined with state-of-the-art 3D optical scanning technology.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-black/5">
            <div className="p-4 rounded-2xl bg-[#f5f5f7] border border-black/5">
              <span className="text-2xl font-bold text-[#1d1d1f] block">15+</span>
              <span className="text-xs text-[#86868b]">Years Practice</span>
            </div>
            <div className="p-4 rounded-2xl bg-[#f5f5f7] border border-black/5">
              <span className="text-2xl font-bold text-[#1d1d1f] block">MAIDS</span>
              <span className="text-xs text-[#86868b]">MDS Gold Medalist</span>
            </div>
            <div className="p-4 rounded-2xl bg-[#f5f5f7] border border-black/5">
              <span className="text-2xl font-bold text-[#00685f] block">4,500+</span>
              <span className="text-xs text-[#86868b]">Smiles Restored</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
