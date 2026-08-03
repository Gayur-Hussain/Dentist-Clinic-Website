"use client";

import { motion } from "framer-motion";

export default function ContactLocation() {
  return (
    <section className="py-section-gap" id="contact">
      <div className="max-w-container-max mx-auto px-margin-page grid grid-cols-1 lg:grid-cols-2 gap-stack-md">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-stack-md"
        >
          <span className="font-label-sm text-label-sm text-primary uppercase tracking-[0.2em]">
            Get in Touch
          </span>
          <h2 className="font-h2 text-h2">Visit Our Practice</h2>

          <div className="space-y-8 pt-6">
            <div className="flex gap-6">
              <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center text-primary shrink-0">
                <span className="material-symbols-outlined">location_on</span>
              </div>
              <div>
                <h4 className="font-bold text-[#171d1c]">Clinic Location</h4>
                <p className="text-on-surface-variant text-sm mt-1">
                  E-20, Ground Floor, Vasant Vihar, New Delhi, Delhi 110057
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center text-primary shrink-0">
                <span className="material-symbols-outlined">schedule</span>
              </div>
              <div>
                <h4 className="font-bold text-[#171d1c]">Practice Hours</h4>
                <p className="text-on-surface-variant text-sm mt-1 leading-relaxed">
                  Monday - Friday: 8:00 AM - 7:00 PM<br />
                  Saturday: 9:00 AM - 3:00 PM<br />
                  Sunday: Closed (Emergency line open 24/7)
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center text-primary shrink-0">
                <span className="material-symbols-outlined">alternate_email</span>
              </div>
              <div>
                <h4 className="font-bold text-[#171d1c]">Direct Contacts</h4>
                <p className="text-on-surface-variant text-sm mt-1 leading-relaxed">
                  appointments@luminadental.com<br />
                  +91 11 4160 8930
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
          className="h-[500px] rounded-[40px] overflow-hidden border border-outline-variant bg-surface-variant relative shadow-xl shadow-[#00685f]/2"
        >
          <iframe
            src="https://maps.google.com/maps?q=Vasant%20Vihar,%20New%20Delhi&t=&z=15&ie=UTF8&iwloc=&output=embed"
            className="w-full h-full border-0 opacity-90"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </div>
    </section>
  );
}
