"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Treatments", href: "/treatments" },
  { label: "Reviews", href: "/reviews" },
  { label: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      // Sleek floating glassmorphic container with custom rounded border and shadows
      className="fixed top-4 left-1/2 -translate-x-1/2 w-[92%] max-w-[1280px] z-50 bg-[#f5faf8]/90 backdrop-blur-md border border-[#eaefed]/80 rounded-full shadow-[0_12px_40px_rgba(0,104,95,0.06)]"
    >
      <div className="flex justify-between items-center h-16 px-6 md:px-8">
        
        {/* Sleek Medical Brand Logo */}
        <Link href="/" className="flex items-center gap-2 font-bold text-lg text-[#00685f] tracking-tight cursor-pointer select-none">
          <span className="material-symbols-outlined text-[20px] font-bold text-[#00685f]">
            dentistry
          </span>
          <span>Lumina Dental</span>
        </Link>

        {/* Compact Navigation Menu (Desktop) */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative cursor-pointer transition-colors text-[13px] uppercase tracking-wider font-bold py-1 ${
                  isActive ? "text-[#00685f]" : "text-[#3d4947] hover:text-[#00685f]"
                }`}
              >
                <span>{link.label}</span>
                {isActive && (
                  <motion.span
                    layoutId="activeNavDot"
                    className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#00685f] rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* Action Button & Mobile Hamburguer */}
        <div className="flex items-center gap-3">
          <Link href="/contact">
            <Button className="hidden lg:flex px-5 h-9 rounded-full font-bold text-[11px] uppercase tracking-wider text-white bg-primary hover:bg-[#005049] transition-all cursor-pointer">
              Book slot
            </Button>
          </Link>
          
          {/* Slick Hamburger */}
          <button
            className="md:hidden flex flex-col gap-1 cursor-pointer p-1.5 shrink-0"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-5 h-0.5 bg-[#00685f] transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-1.5" : ""}`} />
            <span className={`block w-5 h-0.5 bg-[#00685f] transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-0.5 bg-[#00685f] transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile Drawer (Matches glass aesthetics) */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/95 backdrop-blur-md rounded-b-[24px] border-t border-[#eaefed] overflow-hidden"
          >
            <div className="px-6 py-5 flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`cursor-pointer py-2.5 text-sm font-bold border-b border-[#eaefed]/40 last:border-0 ${
                    pathname === link.href ? "text-[#00685f]" : "text-[#3d4947]"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link href="/contact" onClick={() => setMobileOpen(false)}>
                <Button className="w-full h-10 rounded-xl text-white font-bold text-xs uppercase tracking-wider bg-primary mt-2">
                  Book Slot
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
