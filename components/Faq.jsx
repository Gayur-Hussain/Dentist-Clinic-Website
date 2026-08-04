"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Faq() {
  return (
    <section className="py-24 md:py-36 bg-[#f5f5f7] text-[#1d1d1f] border-t border-black/5" id="faq">
      <div className="max-w-[800px] mx-auto px-6">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-semibold uppercase tracking-widest text-[#86868b] block mb-3"
          >
            Common Queries
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-bold tracking-tight text-[#1d1d1f]"
          >
            Frequently Asked Questions
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Accordion type="single" collapsible className="w-full space-y-4">
            
            <AccordionItem
              value="item-1"
              className="bg-white border border-black/5 rounded-2xl px-6 py-1 cursor-pointer transition-colors hover:border-[#00685f]/30"
            >
              <AccordionTrigger className="hover:no-underline text-left text-base sm:text-lg font-bold text-[#1d1d1f] cursor-pointer py-5">
                Is 3D optical scanning painful or uncomfortable?
              </AccordionTrigger>
              <AccordionContent className="text-sm text-[#515154] leading-relaxed pb-5">
                Not at all. The 3D intraoral scanner is a compact wand that glides smoothly over your teeth without touching soft tissue. It replaces messy putty impressions completely.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-2"
              className="bg-white border border-black/5 rounded-2xl px-6 py-1 cursor-pointer transition-colors hover:border-[#00685f]/30"
            >
              <AccordionTrigger className="hover:no-underline text-left text-base sm:text-lg font-bold text-[#1d1d1f] cursor-pointer py-5">
                How long does a laser whitening session take?
              </AccordionTrigger>
              <AccordionContent className="text-sm text-[#515154] leading-relaxed pb-5">
                A full in-chair session takes approximately 60 minutes. We apply a protective layer to your gums and perform three 15-minute whitening cycles for up to 8 shades of brightening.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-3"
              className="bg-white border border-black/5 rounded-2xl px-6 py-1 cursor-pointer transition-colors hover:border-[#00685f]/30"
            >
              <AccordionTrigger className="hover:no-underline text-left text-base sm:text-lg font-bold text-[#1d1d1f] cursor-pointer py-5">
                Are root canal procedures truly pain-free?
              </AccordionTrigger>
              <AccordionContent className="text-sm text-[#515154] leading-relaxed pb-5">
                Yes. With modern rotary endodontic instruments and computerized local anaesthesia, root canals at Lumina Dental feel no different than a standard dental filling.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-4"
              className="bg-white border border-black/5 rounded-2xl px-6 py-1 cursor-pointer transition-colors hover:border-[#00685f]/30"
            >
              <AccordionTrigger className="hover:no-underline text-left text-base sm:text-lg font-bold text-[#1d1d1f] cursor-pointer py-5">
                How do I schedule an emergency or same-day visit?
              </AccordionTrigger>
              <AccordionContent className="text-sm text-[#515154] leading-relaxed pb-5">
                Call our 24/7 hotline directly or send us a WhatsApp message. Emergency walk-ins and acute pain cases are prioritized for immediate treatment.
              </AccordionContent>
            </AccordionItem>

          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
