"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function EmergencyBanner() {
  return (
    <section className="py-12">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-container-max mx-auto px-margin-page"
      >
        <div className="bg-tertiary text-on-tertiary p-12 rounded-[40px] flex flex-col md:flex-row justify-between items-center gap-8 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <span className="material-symbols-outlined text-[300px] absolute -right-20 -top-20">
              emergency
            </span>
          </div>

          <div className="relative z-10 text-center md:text-left">
            <h2 className="font-h2 text-h2 mb-4">Need Urgent Dental Care?</h2>
            <p className="font-body-lg text-body-lg opacity-90 max-w-lg">
              We prioritize emergency cases. Call our 24/7 hotline for immediate
              assistance with pain or injuries.
            </p>
          </div>

          <div className="relative z-10 flex flex-col sm:flex-row gap-4">
            <a
              className="px-10 py-5 bg-white text-tertiary rounded-full font-bold text-lg hover:bg-tertiary-fixed-dim transition-all flex items-center justify-center gap-3"
              href="tel:+12127558930"
            >
              <span className="material-symbols-outlined">call</span>
              (212) 755-8930
            </a>
            <Button
              variant="outline"
              className="px-10 py-7 border-2 border-white/40 text-white rounded-full font-bold text-lg hover:bg-white/10 transition-all bg-transparent"
            >
              WhatsApp Now
            </Button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
