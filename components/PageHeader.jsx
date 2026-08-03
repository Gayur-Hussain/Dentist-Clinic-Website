"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function PageHeader({ badge, title, subtitle, breadcrumbs = [] }) {
  return (
    <section className="relative pt-40 pb-20 overflow-hidden bg-gradient-to-br from-[#f5faf8] to-[#e4e9e7] border-b border-[#eaefed]">
      {/* Premium background grid pattern + soft radial blurs */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#eaefed_1px,transparent_1px),linear-gradient(to_bottom,#eaefed_1px,transparent_1px)] bg-[size:40px_40px] opacity-60" />
        <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-[#00685f]/5 rounded-full blur-[100px] -mt-20" />
        <div className="absolute bottom-0 left-10 w-[250px] h-[250px] bg-[#50616b]/5 rounded-full blur-[80px]" />
      </div>

      <div className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-10">
        {/* Left-aligned single-column clean layout */}
        <div className="text-left space-y-5 max-w-4xl">
          {/* Breadcrumb Navigation */}
          {breadcrumbs.length > 0 && (
            <motion.nav
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="flex flex-wrap items-center gap-1.5 text-xs font-semibold text-on-surface-variant/80 uppercase tracking-wider"
            >
              <Link href="/" className="hover:text-[#00685f] transition-colors cursor-pointer">
                Home
              </Link>
              {breadcrumbs.map((crumb, i) => (
                <span key={i} className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[12px] text-primary select-none mt-0.5">chevron_right</span>
                  {crumb.href ? (
                    <Link href={crumb.href} className="hover:text-[#00685f] transition-colors cursor-pointer">
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-[#00685f] font-bold">{crumb.label}</span>
                  )}
                </span>
              ))}
            </motion.nav>
          )}

          {/* Premium badge */}
          {badge && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#00685f]/10 text-[#00685f] border border-[#00685f]/15"
            >
              <span className="material-symbols-outlined text-[16px] font-bold">verified</span>
              <span className="text-xs font-bold uppercase tracking-wider">{badge}</span>
            </motion.div>
          )}

          {/* Main Header Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-[#171d1c] leading-tight tracking-tight max-w-3xl"
          >
            {title}
          </motion.h1>

          {/* Subtitle description */}
          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-sm md:text-[15px] text-[#3d4947] max-w-2xl leading-relaxed"
            >
              {subtitle}
            </motion.p>
          )}
        </div>
      </div>
    </section>
  );
}
