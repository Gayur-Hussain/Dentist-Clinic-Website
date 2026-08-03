"use client";

import { motion } from "framer-motion";

export default function Technology() {
  return (
    <section className="py-section-gap">
      <div className="max-w-container-max mx-auto px-margin-page">
        <div className="flex flex-col md:flex-row gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1 space-y-8"
          >
            <span className="font-label-sm text-label-sm text-primary uppercase tracking-[0.2em]">
              Next-Gen Infrastructure
            </span>
            <h2 className="font-h2 text-h2">
              Technology That Redefines Precision
            </h2>

            <div className="space-y-6">
              <div className="flex gap-6">
                <div className="w-16 h-16 shrink-0 rounded-2xl bg-primary/5 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-[32px]">
                    biotech
                  </span>
                </div>
                <div>
                  <h4 className="font-h3 text-h3 text-primary mb-1">
                    3D Digital Scanning
                  </h4>
                  <p className="text-on-surface-variant">
                    Eliminate messy impressions. Our intraoral scanners create
                    precise 3D models of your teeth in seconds.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-16 h-16 shrink-0 rounded-2xl bg-primary/5 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-[32px]">
                    flare
                  </span>
                </div>
                <div>
                  <h4 className="font-h3 text-h3 text-primary mb-1">
                    Laser Dentistry
                  </h4>
                  <p className="text-on-surface-variant">
                    Minimally invasive treatments for gum disease and whitening,
                    reducing healing time and discomfort.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-16 h-16 shrink-0 rounded-2xl bg-primary/5 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-[32px]">
                    shield_moon
                  </span>
                </div>
                <div>
                  <h4 className="font-h3 text-h3 text-primary mb-1">
                    Advanced Sterilization
                  </h4>
                  <p className="text-on-surface-variant">
                    Hospital-grade sterilization systems that exceed all
                    international healthcare safety protocols.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1 grid grid-cols-2 gap-4"
          >
            <div className="space-y-4 pt-12">
              <div className="rounded-3xl overflow-hidden shadow-lg aspect-square">
                <img
                  className="w-full h-full object-cover"
                  alt="Digital X-ray equipment"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA55Rj_SwmxhYUSXGb2g8P_kGf_guanRx2EB-VEzsa78L1R3SeAjCzoH9Ne75JmamVv-aiY3jUarGD6g36aOgGC9j2BbfOVidoxvKTOntEbo3H7XKPmxKY5EqW3ZWQJKg3sH1Li0IUsLJmwRS4sSxhpTcEXohko8GQR1ci__6X5BpmuOXXhhqxP6r18onYJ1LXg6En55t01UfbolHySAiYeUS4qh3PWiY7BpZbS3lNH5cZGqcCCVocT1bzBj_-IykHyeaqDxWPpp4c"
                />
              </div>
              <div className="rounded-3xl overflow-hidden shadow-lg aspect-[3/4]">
                <img
                  className="w-full h-full object-cover"
                  alt="3D Scanner"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_DhsZld5bZaO4JlTuxDgnsQkoesHW-OQKAM-KpjiRxlPr-qbAIFnJ90JbbEy0hBemOqQRFZxU8ZQEZtCUQ9D21xmSFZOOCzanu4_iRFpkYxwKyhelZBTgbxdwppnXHsLBpDN40uuy28I7mH9UvfHfyZgit579znJXb8QXajXpus39rET4I_APxBtl8cnLPD0F_rrtmi-ZFpCptkBu_HYFjJUBVrwRBed-e7F9YJc8YA6gzFIk3jvwdSQ_V9RnPSVlkfvx1ksiAeU"
                />
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-3xl overflow-hidden shadow-lg aspect-[3/4]">
                <img
                  className="w-full h-full object-cover"
                  alt="Dental Laboratory"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwbLi2O6AjWDJuVaTFko_rn7498cor2fwEWW4AZKzhYhGH8qHH-x8qcNJzcuy3ESS4HLq7H-Rn0fwV168sd3maoxSIN6y5MkybWwYdAkrEKZnWUIIAiYGaS9Age4VP0YQWLBgrlsld7BYddOnEfXlEmeauloD-3bqaTNWa5IhqdyrWxI5aOFzSGLoopniL7lgOy4zFZPJXuiXvBuu4VCTbEV5VEtkPhFV3kkdjhHLlAO662sav8tVKtmwlEmNFwbrt7KR6fHDItls"
                />
              </div>
              <div className="rounded-3xl overflow-hidden shadow-lg aspect-square">
                <img
                  className="w-full h-full object-cover"
                  alt="Dental laser equipment"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDctYTspJi6fBUCQnTmK8vNePuAPFZRJ2ZboB3xmZIgQ2sz2dzc1FZcBVTZrYka9kFCkvWs2vdiB-qEjMtgrOoicIMyBmtp4hhigHsW0ZwGblR8p3RnGC9-K8jOJHC9qs7_vzp_QLBNWVinLd9Wa8gHPbhKiC1lJr4i7y498k7mkv9Z2zht1HkmO9Be0Gr0ZvvkQqc_nAAH25Qb9ggqbwu9KSSOAFgUfYdwtXCVxWyXCQQiWYR4kUdjOwQFrSL0Z4JU0N35VlLDUIQ"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
