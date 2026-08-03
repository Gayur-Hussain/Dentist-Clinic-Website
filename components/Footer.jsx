"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Footer() {
  return (
    <footer className="bg-[#f5faf8] pt-24 pb-12 border-t border-[#eaefed] mb-16 md:mb-0">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="font-bold text-xl text-[#00685f] tracking-tight flex items-center gap-2">
              <span className="material-symbols-outlined text-[20px] font-bold">dentistry</span>
              <span>Lumina Dental</span>
            </div>
            <p className="text-[#3d4947] text-sm leading-relaxed max-w-xs">
              Pioneering a new era of clinical excellence and patient-focused dental care in Vasant Vihar, New Delhi.
            </p>
            <div className="flex gap-4">
              <a
                className="w-9 h-9 rounded-full bg-[#00685f]/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all"
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="material-symbols-outlined text-[18px]">share</span>
              </a>
              <a
                className="w-9 h-9 rounded-full bg-[#00685f]/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all"
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="material-symbols-outlined text-[18px]">video_camera_front</span>
              </a>
              <a
                className="w-9 h-9 rounded-full bg-[#00685f]/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all"
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="material-symbols-outlined text-[18px]">chat</span>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-bold text-[#171d1c] mb-6 text-sm uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-3.5 text-sm">
              <li>
                <Link className="text-[#3d4947] hover:text-[#00685f] font-medium transition-all" href="/">Home</Link>
              </li>
              <li>
                <Link className="text-[#3d4947] hover:text-[#00685f] font-medium transition-all" href="/about">About Us</Link>
              </li>
              <li>
                <Link className="text-[#3d4947] hover:text-[#00685f] font-medium transition-all" href="/treatments">Treatments</Link>
              </li>
              <li>
                <Link className="text-[#3d4947] hover:text-[#00685f] font-medium transition-all" href="/reviews">Success Stories</Link>
              </li>
              <li>
                <Link className="text-[#3d4947] hover:text-[#00685f] font-medium transition-all" href="/contact">Contact</Link>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-bold text-[#171d1c] mb-6 text-sm uppercase tracking-wider">Services</h4>
            <ul className="space-y-3.5 text-sm">
              <li>
                <Link className="text-[#3d4947] hover:text-[#00685f] font-medium transition-all" href="/services/cosmetic">Cosmetic Dentistry</Link>
              </li>
              <li>
                <Link className="text-[#3d4947] hover:text-[#00685f] font-medium transition-all" href="/services/implants">Dental Implants</Link>
              </li>
              <li>
                <Link className="text-[#3d4947] hover:text-[#00685f] font-medium transition-all" href="/services/digital-scan">General Checkups</Link>
              </li>
              <li>
                <Link className="text-[#3d4947] hover:text-[#00685f] font-medium transition-all" href="/services/pediatrics">Pediatric Care</Link>
              </li>
              <li>
                <Link className="text-[#3d4947] hover:text-[#00685f] font-medium transition-all" href="/services/root-canal">Emergency Dental</Link>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="font-bold text-[#171d1c] mb-6 text-sm uppercase tracking-wider">Newsletter</h4>
            <p className="text-[#3d4947] text-sm leading-relaxed mb-6">
              Stay updated with our latest dental tips and clinical updates.
            </p>
            <div className="flex gap-2">
              <Input
                className="flex-1 h-12 bg-white rounded-xl border-[#bcc9c6] px-4 cursor-text"
                placeholder="Enter email"
                type="email"
              />
              <Button className="px-4 h-12 bg-primary hover:bg-[#005049] text-white rounded-xl cursor-pointer">
                <span className="material-symbols-outlined">send</span>
              </Button>
            </div>
          </motion.div>
        </div>

        <div className="pt-8 border-t border-[#eaefed] flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[#6d7a77] text-xs font-semibold">
            © 2026 Lumina Dental Clinic. Precision in Care.
          </p>
          <div className="flex gap-8 text-xs font-semibold">
            <Link className="text-[#6d7a77] hover:text-[#00685f] transition-all" href="/">Privacy Policy</Link>
            <Link className="text-[#6d7a77] hover:text-[#00685f] transition-all" href="/">Terms of Service</Link>
            <Link className="text-[#6d7a77] hover:text-[#00685f] transition-all" href="/">Accessibility</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
