"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

const specialists = [
  {
    name: "Dr. Rohan Sharma",
    role: "Lead Clinical Director",
    degree: "MDS — MAIDS, New Delhi",
    bio: "Dr. Rohan Sharma has over 15 years of experience in aesthetic restorations and implantology. He is a pioneer in digital smile designing and guided bone reconstructions in Delhi.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAn_EmJ_lXoUdC-KuBI1bk-EWQ67jwisteDJO1nz4qxvvA7QvoC7PLy6dB6CUPoIOiH9ug2P9_RY-ENpRIoCCaItkHRGfvTs4jwzy-dpXdT8FyDJVAkE5_Wa6UWG9MXnI0uhSN-52PsTGbeLFms4CRzwIaD3BQEusIyFCRm-QCz_V14EBIKGFFOytLBojratYq1HrdEfehFvFEFZ2UVS7POyx-Yt7DlLtj2kMuIFA9Iju2iDYysUGmBxmaVg0wwswvVeX8GZED5C6w",
    symptomQuery: "implants",
  },
  {
    name: "Dr. Anjali Mehta",
    role: "Orthodontics Specialist",
    degree: "MDS — KGMU, Lucknow",
    bio: "Dr. Anjali Mehta specializes in modern clear aligner therapies (like Invisalign) and self-ligating braces, focusing on comfortable, aesthetic smile alignments for teens and adults.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBRgiqbANVDP1FBgnzUsrb63eQ4ZNH3HaEc1BEMH4f9JfzHiYF7snaOdhyZ53J_oVmrkXLkvzLTsRd1omok2utmX8UWl5u5015aazFCsci5AEhbdmU3vZVb0eb3FUndhIse_27MGPKr1do_iA63U2xJj5QdofnHHpZBy6oKx1KnKAixxx1McpDOoNQRF0TH19cUBlnBJRNyQcus4m2NOOSXH-yNXH1qob3jJA35x0WyFcOzP2XBfJG5SpUpfkhA7AJg7KiBQbXm6rk",
    symptomQuery: "orthodontics",
  },
  {
    name: "Dr. Vikram Malhotra",
    role: "Oral Surgery Expert",
    degree: "MDS — AIIMS, New Delhi",
    bio: "Dr. Vikram Malhotra handles complex maxillofacial surgeries, wisdom tooth extractions, and emergency trauma reconstructions under conscious sedation.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBvQhwbRHA38_QhQJXozhvpAvJ7ryPh3gSp2FEX0Z9_sdX32FxzeMs7r-MltVTWSqHCeMDcsPgu3zGa80QsAP2SKaARLIuvOL8ZWNQ6CTpEqP73YdexpXPgWIvTQUc066kmUaicSRD9w-0d0jtKvhq1ZZHIJRqyyCVKJlsld2V1iZUDQujE7JUD3D-BTVuIVoUSey3-WhJ0kUAqEOiJBlilTKJngtckk00wlkI3yVrOsC26xLKv8vM8L0VUXtLhYOEB62D3z1KT8vQ",
    symptomQuery: "oral-surgery",
  },
  {
    name: "Dr. Pooja Rao",
    role: "Pediatric Dentistry Specialist",
    degree: "MDS — MCODS, Manipal",
    bio: "Dr. Pooja Rao specializes in preventive care and anxiety-free treatments for children, using friendly behavior management models to create a positive dental attitude.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBx4Jjk0NlVi1E1XZbbjmcp7P_oclLX505Ml0is_4ZNdYkzj8JDnCLm8djm2NgMW-zh3Ngb7ng9akxtISfR1dcbuo3HoiSQX0X1ViFZP6Eq4M2WakzRPQzOw_eOi2uujXdqJDGZ1e1jgA5723G8OLBgFJsOzESFdDhwSxionpG4gmp4bybTAacgmUq-nsfOdXWsHH5NvGPZ5H2yEe2IvhEsK81XchVor0BhvdDdhsh08dT6NpOr986_ciGHeAN1HDuiHQVYvhuQ1T0",
    symptomQuery: "pediatrics",
  },
];

function SpecialistCard({ specialist, index }) {
  const cardRef = useRef(null);

  // Set up scroll listener target for this card
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  // Calculate dynamic vertical translation inside the overflow frame (creates 3D Parallax effect)
  const yImage = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="grid grid-cols-1 md:grid-cols-12 rounded-[32px] overflow-hidden border border-[#eaefed] bg-white shadow-xl hover:shadow-2xl transition-all duration-500 min-h-[320px]"
    >
      {/* Parallax Image Area */}
      <div className="col-span-1 md:col-span-5 relative h-64 md:h-auto overflow-hidden">
        <motion.img
          src={specialist.img}
          alt={specialist.name}
          className="absolute inset-0 w-full h-[124%] object-cover pointer-events-none"
          style={{ y: yImage, top: "-12%" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/5 pointer-events-none" />
      </div>

      {/* Specialist Details Area */}
      <div className="col-span-1 md:col-span-7 p-8 md:p-10 flex flex-col justify-between space-y-6">
        <div>
          <span className="text-[10px] font-bold text-primary bg-primary/10 px-3.5 py-1.5 rounded-full uppercase tracking-wider select-none">
            {specialist.role}
          </span>
          <h3 className="text-2xl font-bold text-[#171d1c] mt-4">
            {specialist.name}
          </h3>
          <p className="text-xs text-[#6d7a77] font-semibold mt-1">
            {specialist.degree}
          </p>
          <p className="text-sm text-[#3d4947] leading-relaxed mt-4">
            {specialist.bio}
          </p>
        </div>

        <div className="pt-6 border-t border-[#eaefed]">
          <Link
            href={`/contact?treatment=${specialist.symptomQuery}`}
            className="inline-flex items-center gap-2 text-xs font-bold text-primary hover:gap-3 transition-all cursor-pointer group"
          >
            Schedule Consultation with Dr. {specialist.name.split(" ")[2]}
            <span className="material-symbols-outlined text-[14px] transition-transform group-hover:translate-x-1">
              arrow_forward
            </span>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default function SpecialistTeam() {
  const containerRef = useRef(null);

  return (
    <section className="py-28 bg-white" ref={containerRef} id="specialists">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Sticky Left Info Panel */}
          <div className="lg:col-span-4 lg:sticky lg:top-36 space-y-4">
            <span className="text-xs font-bold text-[#00685f] uppercase tracking-wider block">
              The Medical Experts
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#171d1c] leading-tight">
              Meet Our Specialists
            </h2>
            <p className="text-sm text-[#3d4947] leading-relaxed max-w-sm">
              Our clinic brings together top-tier dental surgeons from India's
              premier institutes to deliver advanced, pain-free therapies.
              Scroll to explore their fields of clinical excellence.
            </p>
          </div>

          {/* Scrolling Parallax Cards Stack */}
          <div className="lg:col-span-8 space-y-12">
            {specialists.map((doc, idx) => (
              <SpecialistCard key={idx} specialist={doc} index={idx} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
