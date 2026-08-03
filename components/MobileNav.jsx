"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const mobileLinks = [
  { href: "/", icon: "home", label: "Home" },
  { href: "/treatments", icon: "medical_services", label: "Treatments" },
  { href: "/services", icon: "dentistry", label: "Services" },
  { href: "/contact", icon: "calendar_today", label: "Book" },
];

export default function MobileNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 w-full z-50 md:hidden bg-white/90 backdrop-blur-lg flex justify-around items-center py-3 px-4 border-t border-[#eaefed] shadow-[0_-4px_20px_rgba(0,0,0,0.06)] rounded-t-2xl">
      {mobileLinks.map((link) => {
        const isActive = pathname === link.href;
        return (
          <Link
            key={link.href}
            href={link.href}
            className={`flex flex-col items-center justify-center gap-1 cursor-pointer transition-colors min-w-[60px] ${
              isActive ? "text-[#00685f]" : "text-[#6d7a77] hover:text-[#00685f]"
            }`}
          >
            <span
              className="material-symbols-outlined text-[24px]"
              style={{ fontVariationSettings: isActive ? "'FILL' 1" : "'FILL' 0" }}
            >
              {link.icon}
            </span>
            <span className="text-[10px] font-semibold uppercase tracking-wider">{link.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
