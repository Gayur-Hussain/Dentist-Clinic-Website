"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const transformations = [
  {
    title: "Full Smile Makeover",
    subtitle: "Custom Porcelain Veneers",
    treatmentTime: "14 Days",
    description: "Corrected deep discoloration and uneven alignment with custom ultra-thin porcelain veneers.",
    beforeImage: "/images/makeover_before.jpg",
    afterImage: "/images/makeover_after.jpg",
  },
  {
    title: "Power Laser Whitening",
    subtitle: "In-Chair Laser Therapy",
    treatmentTime: "1 Session",
    description: "Lifted deep lifestyle stains up to 8 shades brighter in a single 60-minute session.",
    beforeImage: "/images/whitening_before.jpg",
    afterImage: "/images/whitening_after.jpg",
  },
];

function TrueBeforeAfterSlider({ beforeImage, afterImage, title }) {
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
      className="relative overflow-hidden rounded-3xl aspect-[4/3] w-full select-none cursor-ew-resize border border-black/10 shadow-sm bg-[#f5f5f7]"
      onTouchMove={handleTouchMove}
      onMouseMove={handleMouseMove}
      onMouseDown={() => setIsDragging(true)}
      onMouseUp={() => setIsDragging(false)}
      onMouseLeave={() => setIsDragging(false)}
    >
      {/* Real After Image (Bottom Layer) */}
      <img
        src={afterImage}
        alt={`${title} After`}
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
      />
      <div className="absolute top-4 right-4 bg-[#00685f] text-white text-[10px] font-bold px-3 py-1 rounded-full z-20 shadow-sm">
        AFTER
      </div>

      {/* Real Before Image (Clipped Layer Top) */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        style={{ width: `${sliderPosition}%` }}
      >
        <img
          src={beforeImage}
          alt={`${title} Before`}
          className="absolute inset-0 w-full h-full object-cover pointer-events-none max-w-none"
          style={{ width: "100%", height: "100%" }}
        />
        <div className="absolute top-4 left-4 bg-[#1d1d1f] text-white text-[10px] font-bold px-3 py-1 rounded-full z-20 shadow-sm">
          BEFORE
        </div>
      </div>

      {/* Drag Bar Handle */}
      <div
        className="absolute top-0 bottom-0 w-0.5 bg-white cursor-ew-resize z-20"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white shadow-lg flex items-center justify-center border border-black/10 text-[#00685f]">
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
    <section className="py-24 md:py-36 bg-white text-[#1d1d1f] border-t border-black/5" id="gallery">
      <div className="max-w-[1120px] mx-auto px-6">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-semibold uppercase tracking-widest text-[#86868b] block mb-3"
          >
            Transformation Gallery
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-bold tracking-tight text-[#1d1d1f] mb-4"
          >
            Real Results, Real Smiles.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#515154] text-base sm:text-lg font-normal"
          >
            Drag the handle to compare real before & after patient transformations.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {transformations.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-[#f5f5f7] p-6 rounded-3xl border border-black/5 flex flex-col justify-between"
            >
              <div className="mb-6">
                <TrueBeforeAfterSlider
                  beforeImage={item.beforeImage}
                  afterImage={item.afterImage}
                  title={item.title}
                />
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-semibold text-[#00685f] uppercase tracking-wider">
                    {item.subtitle}
                  </span>
                  <span className="text-xs font-bold text-[#86868b] bg-white px-3 py-1 rounded-full border border-black/5">
                    {item.treatmentTime}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[#1d1d1f] mb-2">{item.title}</h3>
                <p className="text-sm text-[#515154] leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
