"use client";

import { motion } from "framer-motion";

export default function PageHeader({ title, subtitle }) {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-[#f5f5f7] text-[#1d1d1f] border-b border-black/5">
      <div className="max-w-[1120px] mx-auto px-6 text-center flex flex-col items-center">
        
        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl sm:text-6xl font-bold tracking-tight text-[#1d1d1f] max-w-3xl leading-[1.1] mb-4"
        >
          {title}
        </motion.h1>

        {/* Subtitle */}
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-base sm:text-lg text-[#515154] max-w-xl font-normal leading-relaxed"
          >
            {subtitle}
          </motion.p>
        )}

      </div>
    </section>
  );
}
