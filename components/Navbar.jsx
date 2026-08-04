"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Services", href: "/services" },
  { label: "Doctor", href: "/#about" },
  { label: "Transformations", href: "/#gallery" },
  { label: "Reviews", href: "/reviews" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-3 px-4 transition-all duration-300">
      <nav
        className={`w-full max-w-[1120px] transition-all duration-300 rounded-full border ${
          scrolled
            ? "bg-white/85 backdrop-blur-md border-black/10 shadow-[0_8px_30px_rgba(0,0,0,0.06)] py-2.5 px-6"
            : "bg-white/70 backdrop-blur-sm border-black/5 shadow-sm py-3.5 px-8"
        }`}
      >
        <div className="flex justify-between items-center h-9">
          
          {/* Minimal Apple-style Brand Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 font-bold text-lg text-[#1d1d1f] tracking-tight hover:opacity-80 transition-opacity"
          >
            <span className="material-symbols-outlined text-[22px] text-[#00685f]">
              dentistry
            </span>
            <span>Lumina Dental</span>
          </Link>

          {/* Minimalist Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-xs uppercase tracking-wider font-semibold transition-colors ${
                    isActive
                      ? "text-[#00685f]"
                      : "text-[#86868b] hover:text-[#1d1d1f]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Action Button & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center justify-center h-9 px-5 rounded-full text-xs font-semibold text-white bg-[#00685f] hover:bg-[#005049] transition-all cursor-pointer shadow-sm hover:shadow"
            >
              Book Appointment
            </Link>

            {/* Mobile Hamburger */}
            <button
              className="md:hidden flex flex-col justify-center items-center w-8 h-8 rounded-full hover:bg-black/5 transition-colors cursor-pointer"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle Menu"
            >
              <div className="w-4 h-3 flex flex-col justify-between">
                <span
                  className={`block h-0.5 bg-[#1d1d1f] rounded-full transition-transform duration-300 ${
                    mobileOpen ? "rotate-45 translate-y-1.2" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 bg-[#1d1d1f] rounded-full transition-opacity duration-300 ${
                    mobileOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 bg-[#1d1d1f] rounded-full transition-transform duration-300 ${
                    mobileOpen ? "-rotate-45 -translate-y-1.2" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Clean Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden pt-4 pb-2 border-t border-black/5 mt-3 space-y-2"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-3 py-2 text-sm font-medium text-[#1d1d1f] hover:text-[#00685f] rounded-lg hover:bg-black/5 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-2">
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="block w-full text-center py-2.5 rounded-full text-xs font-semibold text-white bg-[#00685f]"
                >
                  Book Appointment
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
