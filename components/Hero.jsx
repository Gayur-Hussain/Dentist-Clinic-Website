"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden min-h-[921px] flex items-center">
      <div className="absolute inset-0 z-0">
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -mr-40 -mt-40"
        />
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[100px] -ml-20 -mb-20"
        />
      </div>

      <div className="relative z-10 max-w-container-max mx-auto px-margin-page grid grid-cols-1 lg:grid-cols-2 gap-stack-md items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-stack-md"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20">
            <span className="material-symbols-outlined text-[18px]">
              verified
            </span>
            <span className="font-label-sm text-label-sm">
              Top Rated Dental Clinic in Vasant Vihar, New Delhi
            </span>
          </div>

          <h1 className="font-h1 text-h1 text-on-background max-w-xl">
            Advanced Dental Care For Your Perfect Smile
          </h1>

          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-lg">
            Combining clinical precision with high-end comfort to give you the
            smile you deserve. Certified specialists using state-of-the-art
            technology for painless treatments.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <Button className="px-8 py-6 rounded-full font-label-sm text-label-sm shadow-lg hover:opacity-90 transition-all active:scale-95 text-white">
              Book Appointment
            </Button>
            <Button
              variant="outline"
              className="px-8 py-6 rounded-full font-label-sm text-label-sm transition-all flex items-center gap-2"
            >
              <span className="material-symbols-outlined">chat</span>
              WhatsApp Consultation
            </Button>
          </div>

          <div className="flex items-center gap-8 pt-8">
            <div className="flex -space-x-3">
              <img
                className="w-12 h-12 rounded-full border-4 border-background object-cover"
                alt="Patient smiling"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRgiqbANVDP1FBgnzUsrb63eQ4ZNH3HaEc1BEMH4f9JfzHiYF7snaOdhyZ53J_oVmrkXLkvzLTsRd1omok2utmX8UWl5u5015aazFCsci5AEhbdmU3vZVb0eb3FUndhIse_27MGPKr1do_iA63U2xJj5QdofnHHpZBy6oKx1KnKAixxx1McpDOoNQRF0TH19cUBlnBJRNyQcus4m2NOOSXH-yNXH1qob3jJA35x0WyFcOzP2XBfJG5SpUpfkhA7AJg7KiBQbXm6rk"
              />
              <img
                className="w-12 h-12 rounded-full border-4 border-background object-cover"
                alt="Patient smiling"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBx4Jjk0NlVi1E1XZbbjmcp7P_oclLX505Ml0is_4ZNdYkzj8JDnCLm8djm2NgMW-zh3Ngb7ng9akxtISfR1dcbuo3HoiSQX0X1ViFZP6Eq4M2WakzRPQzOw_eOi2uujXdqJDGZ1e1jgA5723G8OLBgFJsOzESFdDhwSxionpG4gmp4bybTAacgmUq-nsfOdXWsHH5NvGPZ5H2yEe2IvhEsK81XchVor0BhvdDdhsh08dT6NpOr986_ciGHeAN1HDuiHQVYvhuQ1T0"
              />
              <div className="w-12 h-12 rounded-full border-4 border-background bg-secondary-fixed flex items-center justify-center font-bold text-primary text-[14px]">
                1k+
              </div>
            </div>
            <p className="font-label-sm text-label-sm text-on-surface-variant">
              Trusted by 1000+ Happy Patients
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: 0 }}
          animate={{ opacity: 1, scale: 1, rotate: 2 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative"
        >
          <div className="rounded-3xl overflow-hidden shadow-2xl shadow-primary/10 transform">
            <img
              className="w-full h-[600px] object-cover"
              alt="Modern dental clinic"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBrqcD7JKMpe4VvrP_pCYmaqgBBMmDPUHDQ6qOIihqUVpeNGNwqBs3xpf5i4dt5qKZcT1as3H6iZlOV6PmMNiym3-D2ry21oX0rwceXeQCvGuDU9KX3i6UeUQ_fIXt2WCHZO_FHuWnxLziJln6Au5bZzBDr5V88iNDxwW0ITKB2i2Ixo8HyhiNDYu5h5h0-hBwabJLLQ011_XLDybGWjqS5xd6jj0OiIN6ZoFlZxyZJ9ZByj_CE1NNcipSuXxPfEWWSR59Ki-6OhHg"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBrqcD7JKMpe4VvrP_pCYmaqgBBMmDPUHDQ6qOIihqUVpeNGNwqBs3xpf5i4dt5qKZcT1as3H6iZlOV6PmMNiym3-D2ry21oX0rwceXeQCvGuDU9KX3i6UeUQ_fIXt2WCHZO_FHuWnxLziJln6Au5bZzBDr5V88iNDxwW0ITKB2i2Ixo8HyhiNDYu5h5h0-hBwabJLLQ011_XLDybGWjqS5xd6jj0OiIN6ZoFlZxyZJ9ZByj_CE1NNcipSuXxPfEWWSR59Ki-6OhHg"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
