"use client";

import { motion } from "framer-motion";

const reviews = [
  {
    initials: "DK",
    name: "Devansh Kapoor",
    time: "2 days ago",
    quote: "Had two dental implants placed by Dr. Sharma. I was terrified of the surgery, but their guided digital systems made it take less than an hour! Almost zero recovery pain.",
    bgColor: "bg-secondary-fixed",
  },
  {
    initials: "PS",
    name: "Priya Sharma",
    time: "1 week ago",
    quote: "Dr. Sharma completely redesigned my front teeth with porcelain veneers. The digital mockups let me preview the results before any prep. Best clinic in New Delhi!",
    bgColor: "bg-primary-fixed",
  },
  {
    initials: "RG",
    time: "2 weeks ago",
    name: "Rajesh Gupta",
    quote: "No more gagging on messy putty! They scanned my mouth with a digital wand in 3 minutes. Spotless facility and completely pain-free root canal treatment.",
    bgColor: "bg-orange-100",
  },
];

export default function GoogleReviews() {
  return (
    <section className="py-section-gap bg-surface-container-low">
      <div className="max-w-container-max mx-auto px-margin-page">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left shrink-0"
          >
            <div className="flex items-center gap-4 justify-center lg:justify-start mb-4">
              <img
                alt="Google"
                className="h-6"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD8R6c5xlzyuO6IH9ZYXnIRGv2kvVdhYJyElRNuCDiOq8OE3dQ8BOd_XWI2E-2bCur9-yg41L1viIvvXkpjxn_VCaN0G6S97i20xVPYSZOMfOQzTBp0K94GdUN9yerY82hle0QwQsnWRYqyKTXxmQ1MSDKG-sfJSb75AQmxL3oI81tq4mJaaL5Rk03D6nXMumGav9lngZndVNx9O5Y62l8uv3akJMqrgfVNTM542jCAG4S25Mul84USyyOIg_YiDh1815QprkGUWMY"
              />
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, index) => (
                  <span
                    key={index}
                    className="material-symbols-outlined fill-1"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    star
                  </span>
                ))}
              </div>
            </div>
            <h2 className="font-h2 text-h2 font-bold">4.9/5 Rating</h2>
            <p className="text-on-surface-variant text-body-md mt-1">
              Based on 500+ verified patient Google Reviews
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex gap-4 overflow-x-auto pb-4 max-w-full w-full justify-start no-scrollbar"
          >
            {reviews.map((review, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-2xl shadow-sm min-w-[320px] max-w-[350px] border border-outline-variant/30 flex-shrink-0"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`w-10 h-10 rounded-full ${review.bgColor} flex items-center justify-center font-bold text-[#00685f]`}
                  >
                    {review.initials}
                  </div>
                  <div>
                    <p className="font-bold text-sm text-[#171d1c]">{review.name}</p>
                    <p className="text-xs text-on-surface-variant">
                      {review.time}
                    </p>
                  </div>
                </div>
                <p className="text-sm text-[#3d4947] leading-relaxed italic">"{review.quote}"</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
