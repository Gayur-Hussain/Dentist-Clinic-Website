"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const keyTreatments = [
  {
    title: "Teeth Whitening",
    subtitle: "Up to 8 Shades Brighter in 1 Visit",
    description: "Gentle laser-activated whitening that removes deep stains safely with zero enamel damage.",
    image: "/images/treatment_whitening.jpg",
    slug: "whitening",
    duration: "60 mins",
    recovery: "Immediate",
  },
  {
    title: "Clear Aligners",
    subtitle: "Straighten Teeth Invisibly",
    description: "Custom transparent aligners created from 3D scans. No metal wires or painful brackets.",
    image: "/images/treatment_invisalign.jpg",
    slug: "orthodontics",
    duration: "3-12 months",
    recovery: "Zero downtime",
  },
  {
    title: "Dental Implants",
    subtitle: "Permanent Tooth Replacement",
    description: "Bio-compatible titanium implants that fuse with your jaw, looking and functioning like natural teeth.",
    image: "/images/hero_dental_clinic.jpg",
    slug: "implants",
    duration: "1-2 hours",
    recovery: "Fast healing",
  },
  {
    title: "Painless Root Canal",
    subtitle: "Preserve Your Natural Tooth",
    description: "Precision rotary endodontic therapy with warm anaesthesia to eliminate pain completely.",
    image: "/images/tech_3d_scanner.jpg",
    slug: "root-canal",
    duration: "45-60 mins",
    recovery: "Same-day comfort",
  },
];

export default function Services() {
  return (
    <section className="py-24 md:py-36 bg-[#f5f5f7] text-[#1d1d1f]" id="services">
      <div className="max-w-[1120px] mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-semibold uppercase tracking-widest text-[#86868b] block mb-3"
          >
            Clinical Excellence
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-bold tracking-tight text-[#1d1d1f] mb-4"
          >
            Specialized Treatments.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#515154] text-base sm:text-lg font-normal"
          >
            Transparent, painless, and tailored to your personal aesthetic goals.
          </motion.p>
        </div>

        {/* 4 Clean Treatment Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {keyTreatments.map((t, idx) => (
            <motion.div
              key={t.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden border border-black/5 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="h-64 overflow-hidden relative">
                  <img
                    src={t.image}
                    alt={t.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-8">
                  <span className="text-xs font-semibold text-[#00685f] uppercase tracking-wider block mb-1">
                    {t.subtitle}
                  </span>
                  <h3 className="text-2xl font-bold text-[#1d1d1f] mb-3">
                    {t.title}
                  </h3>
                  <p className="text-sm text-[#515154] leading-relaxed mb-6">
                    {t.description}
                  </p>

                  <div className="flex gap-6 pt-4 border-t border-black/5 text-xs text-[#86868b]">
                    <div>
                      <span className="font-semibold text-[#1d1d1f] block">Duration</span>
                      <span>{t.duration}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-[#1d1d1f] block">Recovery</span>
                      <span>{t.recovery}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="px-8 pb-8">
                <Link
                  href="/contact"
                  className="w-full py-3 bg-[#00685f] hover:bg-[#005049] text-white text-xs font-semibold rounded-full transition-all block text-center shadow-sm"
                >
                  Book Treatment
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
