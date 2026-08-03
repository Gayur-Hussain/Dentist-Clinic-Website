"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const galleryItems = [
  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC0HZcEYuv0h8fvxUxkQk-_qdpAGK1hTV6G-MFwq_V3d3yryZD0F9OcHwoeeVIPsnbEUI-raZoGeeTAXysZmJYa5_cRB1Kc0GMLlFBoFD7-KdS5fD4nN4HU445eNmgUvESJoQPoXgiVbM3WAzZdOK3qmGcpudUJ9juwdKqu3Puv5-_ptq3HuNfl_Lhm64gaLFuidcBkxfS71oKxChpvCp-9zJDksckxpq5xLZUQSNURzIXIE1DlNSGDy8EPehWTZ-7Nk3O0ANN40G8",
    tag1: "Veneers",
    tag2: "14 Days",
    title: "Full Smile Makeover",
    description: "Corrected severe gaps, chips, and misalignment with custom ultra-thin porcelain veneers.",
  },
  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCqJsIBtAzUo8YDOQiLLC7scKVlUIL6u61ve2L_ku9Zfd9s69VsbimrIDkQGCjW-Xr37EZI87jhkc5oGsZr3AVBEgDnSqfcrma3eDukmRhocIhTpTGAkqdGBjKV4IFR9bkJP2qY8ZxsfU2-66UMFy-bqTrtqR4UyCuqb3GKKtG8KDgBxLehjbRhrE5EJiuY1ahJ98HcldtRKnnFASVYwjCke0b0XIL1rUKNdMxpwCUUssDiKN5nNlxgb4T2UeQ_TPCMPMpqvSL3SOc",
    tag1: "Implants",
    tag2: "3 Months",
    title: "Missing Tooth Restoration",
    description: "Replaced a fractured premolar with a single titanium implant and matching porcelain crown.",
  },
  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB1XAMa-Cix7kDhpd2Lt-ldbSJfwjMDNqNrxMhCXGwpAQtRbhIV17niZh3IztsyY4VuJ_wBLh97yOpm_8loh-CUnsWc3Z_q9GKVwzofbPwBjbwagxmT3Jnx6TCEBlRHE2VNA6KYV2WqOpORnPMnJbD6jV9Ak2by9pwbqGxcu2Kn_qGVxD0_xP9rD8GXd6BuKHq8tO_7o634ybdmpYoIVbi73yk1vPI5ozOBuusqyAwZc5J8f3860YE6ecewskXtBaT1se_Ee2EKNN4",
    tag1: "Whitening",
    tag2: "1 Session",
    title: "Power Laser Whitening",
    description: "Lifted deep developmental and lifestyle stains in a single 60-minute in-chair laser session.",
  },
];

// Interactive Before/After image comparison slider
function BeforeAfterSlider({ image, title }) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (clientX, containerRect) => {
    const x = clientX - containerRect.left;
    const percentage = Math.max(0, Math.min(100, (x / containerRect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleTouchMove = (e) => {
    const container = e.currentTarget.getBoundingClientRect();
    if (e.touches[0]) {
      handleMove(e.touches[0].clientX, container);
    }
  };

  const handleMouseMove = (e) => {
    if (!isDragging && e.buttons !== 1) return;
    const container = e.currentTarget.getBoundingClientRect();
    handleMove(e.clientX, container);
  };

  return (
    <div
      className="relative overflow-hidden rounded-[32px] aspect-video w-full select-none cursor-ew-resize border border-[#eaefed]"
      onTouchMove={handleTouchMove}
      onMouseMove={handleMouseMove}
      onMouseDown={() => setIsDragging(true)}
      onMouseUp={() => setIsDragging(false)}
      onMouseLeave={() => setIsDragging(false)}
    >
      {/* After Image (Full Color & Whiteness) */}
      <img
        src={image}
        alt={`${title} After`}
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
      />
      <div className="absolute top-4 right-4 bg-[#00685f] text-white text-[10px] font-bold px-3 py-1 rounded-full z-20 shadow-md">
        AFTER
      </div>

      {/* Before Image (Clipped Left with Staining Filter) */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        style={{ width: `${sliderPosition}%` }}
      >
        <img
          src={image}
          alt={`${title} Before`}
          className="absolute inset-0 w-full h-full object-cover pointer-events-none max-w-none"
          style={{
            width: "100%",
            height: "100%",
            // Applies yellowing/dimming filters to simulate typical cosmetic "Before" states
            filter: "saturate(0.7) contrast(0.9) sepia(0.32) hue-rotate(-12deg) brightness(0.85)",
          }}
        />
        <div className="absolute top-4 left-4 bg-[#b05e3d] text-white text-[10px] font-bold px-3 py-1 rounded-full z-20 shadow-md">
          BEFORE
        </div>
      </div>

      {/* Drag Bar Handle */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-20"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white shadow-xl flex items-center justify-center border border-[#eaefed] text-primary">
          <span className="material-symbols-outlined text-[16px] font-bold select-none">
            swap_horiz
          </span>
        </div>
      </div>
    </div>
  );
}

export default function SmileGallery() {
  return (
    <section className="py-section-gap bg-surface" id="gallery">
      <div className="max-w-container-max mx-auto px-margin-page">
        <div className="flex justify-between items-end mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-label-sm text-label-sm text-primary uppercase tracking-[0.2em]">
              Transformation Gallery
            </span>
            <h2 className="font-h2 text-h2 mt-4">Real Results, Real Smiles</h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Button
              variant="outline"
              className="hidden md:flex px-8 py-6 rounded-full border-primary text-primary hover:bg-primary hover:text-white transition-all text-body-md"
            >
              View Case Studies
            </Button>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group"
            >
              {/* Interactive Before/After Slider */}
              <div className="mb-6 relative">
                <BeforeAfterSlider image={item.image} title={item.title} />
                
                {/* Floating Tags */}
                <div className="absolute bottom-4 left-4 flex gap-2 z-10">
                  <span className="px-3 py-1 rounded-full bg-white/30 backdrop-blur-md text-[#171d1c] text-[11px] font-bold border border-white/20">
                    {item.tag1}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-white/30 backdrop-blur-md text-[#171d1c] text-[11px] font-bold border border-white/20">
                    {item.tag2}
                  </span>
                </div>
              </div>
              <h4 className="font-h3 text-xl font-bold text-[#171d1c] mb-2">{item.title}</h4>
              <p className="text-on-surface-variant text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
