"use client";

import { motion } from "framer-motion";

export default function Statistics() {
  return (
    <section className="py-24 bg-primary text-on-primary">
      <div className="max-w-container-max mx-auto px-margin-page grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-5xl font-bold mb-2">12k+</div>
          <div className="text-primary-fixed-dim/80 font-label-sm">
            Happy Patients
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          <div className="text-5xl font-bold mb-2">25+</div>
          <div className="text-primary-fixed-dim/80 font-label-sm">
            Years Experience
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <div className="text-5xl font-bold mb-2">150+</div>
          <div className="text-primary-fixed-dim/80 font-label-sm">
            Daily Procedures
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <div className="text-5xl font-bold mb-2">15</div>
          <div className="text-primary-fixed-dim/80 font-label-sm">
            Specialist Doctors
          </div>
        </motion.div>
      </div>
    </section>
  );
}
