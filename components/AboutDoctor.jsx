"use client";

import { motion } from "framer-motion";

export default function AboutDoctor() {
  return (
    <section className="py-section-gap overflow-hidden bg-white" id="about">
      <div className="max-w-container-max mx-auto px-margin-page grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="aspect-[4/5] rounded-[40px] overflow-hidden shadow-2xl shadow-[#00685f]/5">
            <img
              className="w-full h-full object-cover"
              alt="Dr. Rohan Sharma"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAn_EmJ_lXoUdC-KuBI1bk-EWQ67jwisteDJO1nz4qxvvA7QvoC7PLy6dB6CUPoIOiH9ug2P9_RY-ENpRIoCCaItkHRGfvTs4jwzy-dpXdT8FyDJVAkE5_Wa6UWG9MXnI0uhSN-52PsTGbeLFms4CRzwIaD3BQEusIyFCRm-QCz_V14EBIKGFFOytLBojratYq1HrdEfehFvFEFZ2UVS7POyx-Yt7DlLtj2kMuIFA9Iju2iDYysUGmBxmaVg0wwswvVeX8GZED5C6w"
            />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="absolute -right-10 top-1/4 bg-white/80 backdrop-blur-md p-8 rounded-3xl border border-[#eaefed] shadow-2xl max-w-[280px] hidden md:block"
          >
            <div className="text-primary text-h2 font-bold mb-1">15+</div>
            <div className="text-on-surface-variant font-label-sm">
              Years of Clinical Excellence
            </div>
            <div className="mt-4 pt-4 border-t border-primary/10">
              <p className="italic text-on-surface-variant text-sm">
                "Clinical precision meets patient empathy. Your comfort is our
                absolute priority."
              </p>
              <p className="mt-2 font-bold text-primary text-xs">
                — Dr. Rohan Sharma
              </p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-stack-md"
        >
          <span className="font-label-sm text-label-sm text-primary uppercase tracking-[0.2em]">
            Lead Clinical Director
          </span>
          <h2 className="font-h2 text-h2">Precision and Artistry Combined</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
            Dr. Rohan Sharma founded this practice on the principle that
            dentistry should combine clinical excellence with aesthetic
            artistry. Having completed his Master of Dental Surgery (MDS) from
            the prestigious Maulana Azad Institute of Dental Sciences (MAIDS),
            New Delhi, he specializes in minimally invasive cosmetic smile
            makeovers and advanced implantology.
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                <span className="material-symbols-outlined text-[18px]">
                  check
                </span>
              </div>
              <p className="text-body-md font-medium text-[#171d1c]">
                MDS in Prosthodontics & Implantology, MAIDS New Delhi
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                <span className="material-symbols-outlined text-[18px]">
                  check
                </span>
              </div>
              <p className="text-body-md font-medium text-[#171d1c]">
                Fellow, International Congress of Oral Implantologists (ICOI)
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                <span className="material-symbols-outlined text-[18px]">
                  check
                </span>
              </div>
              <p className="text-body-md font-medium text-[#171d1c]">
                Specialist in Guided Bone Regeneration & Digital Smile Design
              </p>
            </div>
          </div>
          <div className="pt-6 border-t border-[#eaefed] flex flex-col gap-1">
            <span className="font-serif italic text-3xl text-primary font-medium tracking-wide">
              Dr. Rohan Sharma
            </span>
            <p className="text-on-surface-variant text-xs font-semibold uppercase tracking-wider">
              MDS, BDS — Lead Clinical Director
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
