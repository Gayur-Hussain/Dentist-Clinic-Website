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
    <section className="py-section-gap">
      <div className="max-w-container-max mx-auto px-margin-page max-w-4xl">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-label-sm text-label-sm text-primary uppercase tracking-[0.2em]"
          >
            Common Queries
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-h2 text-h2 mt-4"
          >
            Frequently Asked Questions
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem
              value="item-1"
              className="p-2 px-6 bg-white border border-outline-variant rounded-2xl"
            >
              <AccordionTrigger className="hover:no-underline font-h3 text-h3 text-primary">
                How long does a dental implant procedure take?
              </AccordionTrigger>
              <AccordionContent className="text-on-surface-variant font-body-md text-base">
                The entire process typically spans 3-6 months to allow for
                proper healing and integration, although the actual surgery is
                completed in a single visit.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-2"
              className="p-2 px-6 bg-white border border-outline-variant rounded-2xl"
            >
              <AccordionTrigger className="hover:no-underline font-h3 text-h3 text-on-background">
                Do you offer financing for major treatments?
              </AccordionTrigger>
              <AccordionContent className="text-on-surface-variant font-body-md text-base">
                Yes, we offer flexible payment plans to suit your budget. Please
                contact our office for more detailed information.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-3"
              className="p-2 px-6 bg-white border border-outline-variant rounded-2xl"
            >
              <AccordionTrigger className="hover:no-underline font-h3 text-h3 text-on-background">
                Is laser teeth whitening safe for sensitive teeth?
              </AccordionTrigger>
              <AccordionContent className="text-on-surface-variant font-body-md text-base">
                Absolutely. Our advanced laser systems minimize discomfort and
                we apply desensitizing agents to ensure a comfortable
                experience.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-4"
              className="p-2 px-6 bg-white border border-outline-variant rounded-2xl"
            >
              <AccordionTrigger className="hover:no-underline font-h3 text-h3 text-on-background">
                What should I do in a dental emergency?
              </AccordionTrigger>
              <AccordionContent className="text-on-surface-variant font-body-md text-base">
                Contact our emergency hotline immediately. We have an on-call
                specialist ready 24/7 to address urgent issues.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
