"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { servicesData } from "@/lib/servicesData";

// Define categories to group the 10 services
const categories = [
  {
    id: "preventive",
    label: "Preventive & General",
    slugs: ["whitening", "pediatrics", "gum-care", "digital-scan", "protective"],
  },
  {
    id: "restorative",
    label: "Restorative & Surgical",
    slugs: ["root-canal", "implants", "oral-surgery"],
  },
  {
    id: "cosmetics",
    label: "Cosmetics & Alignment",
    slugs: ["orthodontics", "cosmetic"],
  },
];

// Define common symptoms/concerns for the advisor wizard
const symptoms = [
  {
    label: "Toothache / Sharp Pain",
    serviceSlug: "root-canal",
    categoryId: "restorative",
    message: "Sharp or persistent tooth pain is often caused by pulp inflammation. We recommend our painless rotary root canal therapy to save your natural tooth and eliminate discomfort.",
  },
  {
    label: "Missing Tooth / Gap",
    serviceSlug: "implants",
    categoryId: "restorative",
    message: "Missing teeth can impact your bite and jaw health. A permanent, titanium-supported dental implant functions and looks exactly like a natural tooth.",
  },
  {
    label: "Stained / Yellow Teeth",
    serviceSlug: "whitening",
    categoryId: "preventive",
    message: "Discoloration from food, coffee, or age is easily corrected. Our single-session laser whitening brightens teeth up to 8 shades safely and comfortably.",
  },
  {
    label: "Crooked Teeth / Alignment",
    serviceSlug: "orthodontics",
    categoryId: "cosmetics",
    message: "For structural realignment, we offer virtually invisible clear aligners or modern comfortable braces to gently guide your teeth into a perfect smile.",
  },
  {
    label: "Dental Care for my Child",
    serviceSlug: "pediatrics",
    categoryId: "preventive",
    message: "Early dental visits set the tone for lifelong health. Our pediatric specialists use gentle, playful techniques to make children feel safe, excited, and anxiety-free.",
  },
  {
    label: "Bleeding Gums / Bad Breath",
    serviceSlug: "gum-care",
    categoryId: "preventive",
    message: "Swollen or bleeding gums are warning signs of gum disease. Our periodontal scaling and modern laser gum therapies stop infection and restore foundation strength.",
  },
];

export default function Services() {
  const [activeCategory, setActiveCategory] = useState("preventive");
  const [activeServiceSlug, setActiveServiceSlug] = useState("whitening");
  const [selectedSymptom, setSelectedSymptom] = useState(null);

  // Helper: Find service data by slug
  const getServiceBySlug = (slug) => {
    return servicesData.find((s) => s.slug === slug);
  };

  // Filtered services for the active category
  const activeCategoryObj = categories.find((c) => c.id === activeCategory);
  const activeServicesList = activeCategoryObj
    ? activeCategoryObj.slugs.map((slug) => getServiceBySlug(slug)).filter(Boolean)
    : [];

  // Currently active service in detail pane
  const activeService = getServiceBySlug(activeServiceSlug) || activeServicesList[0];

  // Handle category change manually
  const handleCategorySelect = (categoryId) => {
    setActiveCategory(categoryId);
    const category = categories.find((c) => c.id === categoryId);
    if (category && category.slugs.length > 0) {
      setActiveServiceSlug(category.slugs[0]);
    }
    setSelectedSymptom(null);
  };

  // Handle service change manually
  const handleServiceSelect = (slug) => {
    setActiveServiceSlug(slug);
    setSelectedSymptom(null);
  };

  // Handle symptom select
  const handleSymptomSelect = (symptom) => {
    setSelectedSymptom(symptom);
    setActiveCategory(symptom.categoryId);
    setActiveServiceSlug(symptom.serviceSlug);

    // Scroll main explorer into view so the user sees the highlighted detail panel
    const explorerEl = document.getElementById("treatment-explorer");
    if (explorerEl) {
      explorerEl.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="py-[120px] bg-[#f5faf8]" id="services">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[14px] font-semibold text-[#00685f] uppercase tracking-[0.2em]"
          >
            Clinical Excellence
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl font-bold text-[#171d1c] mt-4"
          >
            Personalized Dental Care
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-on-surface-variant text-body-md mt-4"
          >
            Select a specialized treatment category or tell us what you're experiencing today to explore clinical details, recovery, and patient advantages.
          </motion.p>
        </div>

        {/* 1. Clinical Symptom & Care Guide */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white border border-[#eaefed] p-6 md:p-8 rounded-[32px] mb-16 shadow-xl shadow-[#00685f]/2 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#00685f]/5 rounded-full blur-2xl pointer-events-none" />
          
          <h3 className="text-lg font-bold text-[#171d1c] mb-1 flex items-center gap-2">
            <span className="material-symbols-outlined text-[#00685f]">contact_support</span>
            Symptom & Care Assistant
          </h3>
          <p className="text-sm text-on-surface-variant mb-6">
            Are you experiencing discomfort or planning a clinical treatment? Select your concern to get instant advisor insights:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {symptoms.map((sym, index) => {
              const isSelected = selectedSymptom?.label === sym.label;
              return (
                <button
                  key={index}
                  onClick={() => handleSymptomSelect(sym)}
                  className={`w-full text-left p-4 rounded-2xl border text-sm font-semibold transition-all duration-300 flex items-center justify-between group cursor-pointer ${
                    isSelected
                      ? "bg-[#00685f] text-white border-[#00685f] shadow-lg shadow-[#00685f]/20"
                      : "bg-[#f5faf8] text-[#171d1c] border-[#eaefed] hover:border-[#00685f]/20 hover:bg-[#00685f]/5"
                  }`}
                >
                  <span>{sym.label}</span>
                  <span className={`material-symbols-outlined text-[18px] transition-transform duration-300 ${
                    isSelected ? "text-white translate-x-1" : "text-[#00685f] group-hover:translate-x-1"
                  }`}>
                    arrow_forward
                  </span>
                </button>
              );
            })}
          </div>

          <AnimatePresence mode="wait">
            {selectedSymptom && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-6 p-5 bg-[#00685f]/5 border-l-4 border-[#00685f] rounded-r-2xl"
              >
                <div className="flex gap-3">
                  <span className="material-symbols-outlined text-[#00685f] mt-0.5 select-none">
                    clinical_notes
                  </span>
                  <div>
                    <span className="block text-xs uppercase font-bold text-[#00685f] tracking-wider mb-1">
                      Doctor's Advice
                    </span>
                    <p className="text-sm font-medium text-[#171d1c] leading-relaxed">
                      {selectedSymptom.message}
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* 2. Category Tabs */}
        <div id="treatment-explorer" className="flex flex-wrap gap-2 justify-center mb-10">
          {categories.map((cat) => {
            const isSelected = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => handleCategorySelect(cat.id)}
                className={`px-6 py-3.5 rounded-full text-sm font-bold transition-all duration-300 cursor-pointer ${
                  isSelected
                    ? "bg-[#00685f] text-white shadow-md"
                    : "bg-white border border-[#eaefed] text-[#3d4947] hover:bg-[#00685f]/5 hover:text-[#00685f]"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* 3. Main Explorer Area */}
        
        {/* Desktop Split Explorer Layout (lg:grid) */}
        <div className="hidden lg:grid grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Vertical Services List */}
          <div className="col-span-4 space-y-3">
            {activeServicesList.map((service) => {
              const isSelected = activeServiceSlug === service.slug;
              return (
                <button
                  key={service.slug}
                  onClick={() => handleServiceSelect(service.slug)}
                  className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 flex items-start gap-4 cursor-pointer group ${
                    isSelected
                      ? "border-[#00685f] bg-[#00685f]/5 shadow-sm"
                      : "border-[#eaefed] bg-white hover:border-[#00685f]/20 hover:shadow-sm"
                  }`}
                >
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-300 ${
                    isSelected ? "bg-[#00685f] text-white" : "bg-[#00685f]/5 text-[#00685f] group-hover:bg-[#00685f] group-hover:text-white"
                  }`}>
                    <span className="material-symbols-outlined text-[22px]">
                      {service.icon}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#171d1c] text-[16px] group-hover:text-[#00685f] transition-colors">
                      {service.title}
                    </h4>
                    <p className="text-[13px] text-on-surface-variant line-clamp-1 mt-1">
                      {service.tagline}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Detailed Treatment Showcase Pane */}
          <div className="col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService.slug}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="bg-white border border-[#eaefed] rounded-[32px] overflow-hidden shadow-xl shadow-[#00685f]/2 grid grid-cols-12 min-h-[500px]"
              >
                {/* Treatment Image Side */}
                <div className="col-span-5 relative min-h-[350px]">
                  <img
                    src={activeService.image}
                    alt={activeService.title}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/10" />
                </div>

                {/* Treatment Details Side */}
                <div className="col-span-7 p-8 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-bold text-[#00685f] uppercase tracking-wider block mb-2">
                      {activeService.tagline}
                    </span>
                    <h3 className="text-2xl font-bold text-[#171d1c] mb-4">
                      {activeService.title}
                    </h3>
                    <p className="text-[#3d4947] text-sm leading-relaxed mb-6">
                      {activeService.description}
                    </p>

                    {/* Clinical Summary Specs (Excluding Price) */}
                    <div className="grid grid-cols-3 gap-2.5 p-4 bg-[#f5faf8] border border-[#eaefed] rounded-2xl mb-6">
                      <div className="text-center">
                        <span className="material-symbols-outlined text-[#00685f] text-[18px]">schedule</span>
                        <span className="block text-[10px] text-on-surface-variant font-semibold uppercase mt-0.5">Duration</span>
                        <span className="block text-xs font-bold text-[#171d1c] mt-0.5">{activeService.duration}</span>
                      </div>
                      <div className="text-center border-x border-[#eaefed]">
                        <span className="material-symbols-outlined text-[#00685f] text-[18px]">event_repeat</span>
                        <span className="block text-[10px] text-on-surface-variant font-semibold uppercase mt-0.5">Sessions</span>
                        <span className="block text-xs font-bold text-[#171d1c] mt-0.5">{activeService.sessions}</span>
                      </div>
                      <div className="text-center">
                        <span className="material-symbols-outlined text-[#00685f] text-[18px]">healing</span>
                        <span className="block text-[10px] text-on-surface-variant font-semibold uppercase mt-0.5">Recovery</span>
                        <span className="block text-xs font-bold text-[#171d1c] mt-0.5">{activeService.recovery}</span>
                      </div>
                    </div>

                    {/* Clinical Advantages */}
                    <div>
                      <h5 className="text-[13px] font-bold text-[#171d1c] uppercase tracking-wider mb-3">
                        Treatment Advantages
                      </h5>
                      <ul className="space-y-2">
                        {activeService.benefits.slice(0, 3).map((benefit, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-sm text-[#3d4947]">
                            <span className="material-symbols-outlined text-[#00685f] text-[16px] font-bold mt-0.5">
                              check
                            </span>
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Actions Block */}
                  <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-[#eaefed] mt-6">
                    <a
                      href="#booking"
                      className="flex-1 text-center py-3 bg-[#00685f] hover:bg-[#005049] text-white text-sm font-bold rounded-xl transition-all shadow-md shadow-[#00685f]/10"
                    >
                      Book Appointment
                    </a>
                    <Link
                      href={`/services/${activeService.slug}`}
                      className="flex-1 text-center py-3 border border-[#eaefed] hover:border-[#00685f]/30 hover:bg-[#00685f]/5 text-[#00685f] text-sm font-bold rounded-xl transition-all"
                    >
                      Explore Full Details
                    </Link>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile/Tablet Accordion Layout (lg:hidden) */}
        <div className="lg:hidden space-y-4">
          {activeServicesList.map((service) => {
            const isOpen = activeServiceSlug === service.slug;
            return (
              <div
                key={service.slug}
                className="bg-white border border-[#eaefed] rounded-2xl overflow-hidden transition-all duration-300"
              >
                {/* Accordion Trigger Header */}
                <button
                  onClick={() => setActiveServiceSlug(isOpen ? "" : service.slug)}
                  className={`w-full text-left p-5 flex items-center justify-between cursor-pointer ${
                    isOpen ? "bg-[#00685f]/5 border-b border-[#eaefed]" : ""
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                      isOpen ? "bg-[#00685f] text-white" : "bg-[#00685f]/5 text-[#00685f]"
                    }`}>
                      <span className="material-symbols-outlined text-[20px]">
                        {service.icon}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-bold text-[#171d1c] text-[15px]">
                        {service.title}
                      </h4>
                      <p className="text-[11px] text-on-surface-variant mt-0.5">
                        {service.tagline}
                      </p>
                    </div>
                  </div>
                  <span className={`material-symbols-outlined text-on-surface-variant transition-transform duration-300 ${
                    isOpen ? "rotate-180 text-[#00685f]" : ""
                  }`}>
                    keyboard_arrow_down
                  </span>
                </button>

                {/* Collapsible Content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="p-5 space-y-5">
                        {/* Image */}
                        <div className="h-44 rounded-xl overflow-hidden relative">
                          <img
                            src={service.image}
                            alt={service.title}
                            className="w-full h-full object-cover"
                          />
                        </div>

                        {/* Description */}
                        <p className="text-sm text-[#3d4947] leading-relaxed">
                          {service.description}
                        </p>

                        {/* Stats Panel (Excluding Price) */}
                        <div className="grid grid-cols-3 gap-2 p-3.5 bg-[#f5faf8] border border-[#eaefed] rounded-xl text-center">
                          <div>
                            <span className="material-symbols-outlined text-[#00685f] text-[16px]">schedule</span>
                            <span className="block text-[9px] text-on-surface-variant font-semibold uppercase mt-0.5">Duration</span>
                            <span className="block text-xs font-bold text-[#171d1c] mt-0.5">{service.duration}</span>
                          </div>
                          <div className="border-x border-[#eaefed]">
                            <span className="material-symbols-outlined text-[#00685f] text-[16px]">event_repeat</span>
                            <span className="block text-[9px] text-on-surface-variant font-semibold uppercase mt-0.5">Sessions</span>
                            <span className="block text-xs font-bold text-[#171d1c] mt-0.5">{service.sessions}</span>
                          </div>
                          <div>
                            <span className="material-symbols-outlined text-[#00685f] text-[16px]">healing</span>
                            <span className="block text-[9px] text-on-surface-variant font-semibold uppercase mt-0.5">Recovery</span>
                            <span className="block text-xs font-bold text-[#171d1c] mt-0.5">{service.recovery}</span>
                          </div>
                        </div>

                        {/* Advantages list */}
                        <div>
                          <h5 className="text-[12px] font-bold text-[#171d1c] uppercase tracking-wider mb-2.5">
                            Treatment Advantages
                          </h5>
                          <ul className="space-y-1.5">
                            {service.benefits.slice(0, 3).map((benefit, i) => (
                              <li key={i} className="flex items-start gap-2.5 text-xs text-[#3d4947]">
                                <span className="material-symbols-outlined text-[#00685f] text-[14px] font-bold mt-0.5">
                                  check
                                </span>
                                <span>{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* CTAs */}
                        <div className="flex flex-col gap-2 pt-4 border-t border-[#eaefed]">
                          <a
                            href="#booking"
                            className="w-full text-center py-3 bg-[#00685f] text-white text-xs font-bold rounded-xl transition-all shadow-md shadow-[#00685f]/10"
                          >
                            Book Appointment
                          </a>
                          <Link
                            href={`/services/${service.slug}`}
                            className="w-full text-center py-3 border border-[#eaefed] text-[#00685f] text-xs font-bold rounded-xl transition-all"
                          >
                            Explore Full Details
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
