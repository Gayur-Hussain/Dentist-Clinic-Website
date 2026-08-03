"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "The diagnostic tech here is incredible. Dr. Sharma mapped out my entire veneer schedule on their digital chairside monitor. The laser procedure was completely painless, and my teeth look naturally stunning.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB_5_xe-lXqutnRchNoIGohcudY71V9N_7cJH7Fvg7rNqsisXiwIV5l7_JyDQCV5_3l0Wcy0FWjDdCndjIaZu8w0VUtlGcbWFEj2r_7qaX1ublc9zD-PV9ugZI8G0UwgzYkqMDecmf5HaDTJdSAXjyZQ_GBU1yOWnd-jO8Tccq-ArjbVhdFi-nOdyLM1rch04htMsdyFNPflp9IAJyF4VwJNj5plw6Zk1GFfOYvtOWaQn3x9q5a1zOQuBQtbdYtjpKwtLhwa2Pa2Kw",
    name: "Shreya Sen",
    role: "Patient — Smile Makeover",
  },
  {
    quote:
      "I avoided dentists for five years due to severe dental anxiety. The team here is incredibly warm. Their sedation protocol worked perfectly, and my root canal was completed without a single moment of discomfort.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBvQhwbRHA38_QhQJXozhvpAvJ7ryPh3gSp2FEX0Z9_sdX32FxzeMs7r-MltVTWSqHCeMDcsPgu3zGa80QsAP2SKaARLIuvOL8ZWNQ6CTpEqP73YdexpXPgWIvTQUc066kmUaicSRD9w-0d0jtKvhq1ZZHIJRqyyCVKJlsld2V1iZUDQujE7JUD3D-BTVuIVoUSey3-WhJ0kUAqEOiJBlilTKJngtckk00wlkI3yVrOsC26xLKv8vM8L0VUXtLhYOEB62D3z1KT8vQ",
    name: "Amit Malhotra",
    role: "Patient — Root Canal",
  },
  {
    quote:
      "As a medical practitioner, I am extremely critical of clinical environments. Lumina Dental's hospital-grade sterilization autoclaves and digital 3D scans are absolute state-of-the-art. Dr. Sharma is a superb clinician.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBRgiqbANVDP1FBgnzUsrb63eQ4ZNH3HaEc1BEMH4f9JfzHiYF7snaOdhyZ53J_oVmrkXLkvzLTsRd1omok2utmX8UWl5u5015aazFCsci5AEhbdmU3vZVb0eb3FUndhIse_27MGPKr1do_iA63U2xJj5QdofnHHpZBy6oKx1KnKAixxx1McpDOoNQRF0TH19cUBlnBJRNyQcus4m2NOOSXH-yNXH1qob3jJA35x0WyFcOzP2XBfJG5SpUpfkhA7AJg7KiBQbXm6rk",
    name: "Dr. Rajesh K. Iyer, MD",
    role: "Patient — Dental Implants",
  },
];

export default function Testimonials() {
  return (
    <section className="py-section-gap relative" id="reviews">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 rounded-full blur-[150px]"></div>
      </div>
      <div className="relative z-10 max-w-container-max mx-auto px-margin-page">
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-label-sm text-label-sm text-primary uppercase tracking-[0.2em]"
          >
            Patient Stories
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-h2 text-h2 mt-4"
          >
            Clinical Transformations
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-stack-md">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="glass-card p-10 rounded-[32px] border border-[#eaefed] bg-white/70 shadow-xl flex flex-col justify-between"
            >
              <div>
                <div className="flex gap-1 text-primary mb-6">
                  {[...Array(5)].map((_, star) => (
                    <span
                      key={star}
                      className="material-symbols-outlined fill-1 text-amber-400"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                  ))}
                </div>
                <p className="text-on-surface-variant font-body-md text-[15px] leading-relaxed mb-8 italic">
                  "{t.quote}"
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden shrink-0">
                  <img className="w-full h-full object-cover" src={t.image} alt={t.name} />
                </div>
                <div>
                  <p className="font-bold text-sm text-[#171d1c]">{t.name}</p>
                  <p className="text-xs text-on-surface-variant">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
