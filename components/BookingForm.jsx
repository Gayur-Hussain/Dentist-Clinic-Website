"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function BookingForm() {
  return (
    <section className="py-stack-md relative z-20" id="booking">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-container-max mx-auto px-margin-page"
      >
        <div className="bg-surface-container-lowest border border-sky-100 rounded-[32px] p-8 md:p-12 shadow-2xl shadow-primary/5">
          <form className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 items-end">
            <div className="space-y-2">
              <Label className="font-label-sm text-label-sm text-on-surface-variant ml-2">
                Full Name
              </Label>
              <Input
                className="w-full h-14 bg-surface rounded-2xl border-outline-variant focus-visible:ring-primary/20 transition-all text-body-md"
                placeholder="John Doe"
                type="text"
              />
            </div>

            <div className="space-y-2">
              <Label className="font-label-sm text-label-sm text-on-surface-variant ml-2">
                Phone Number
              </Label>
              <Input
                className="w-full h-14 bg-surface rounded-2xl border-outline-variant focus-visible:ring-primary/20 transition-all text-body-md"
                placeholder="+1 (212) 755-8930"
                type="tel"
              />
            </div>

            <div className="space-y-2">
              <Label className="font-label-sm text-label-sm text-on-surface-variant ml-2">
                Treatment
              </Label>
              <Select>
                <SelectTrigger className="w-full h-14 bg-surface rounded-2xl border-outline-variant focus:ring-primary/20 transition-all text-body-md">
                  <SelectValue placeholder="Select Treatment" />
                </SelectTrigger>
                <SelectContent className="bg-surface rounded-2xl border-outline-variant">
                  <SelectItem value="root-canal">Root Canal</SelectItem>
                  <SelectItem value="implants">Dental Implants</SelectItem>
                  <SelectItem value="whitening">Teeth Whitening</SelectItem>
                  <SelectItem value="orthodontics">Orthodontics</SelectItem>
                  <SelectItem value="oral-surgery">Oral Surgery</SelectItem>
                  <SelectItem value="pediatrics">Pediatric Dentistry</SelectItem>
                  <SelectItem value="gum-care">Gum Care</SelectItem>
                  <SelectItem value="cosmetic">Cosmetic Dentistry</SelectItem>
                  <SelectItem value="digital-scan">Digital Scanning</SelectItem>
                  <SelectItem value="protective">Protective Dentistry</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label className="font-label-sm text-label-sm text-on-surface-variant ml-2">
                Date
              </Label>
              <Input
                className="w-full h-14 bg-surface rounded-2xl border-outline-variant focus-visible:ring-primary/20 transition-all text-body-md"
                type="date"
              />
            </div>

            <Button className="w-full h-14 bg-primary text-on-primary rounded-2xl font-label-sm text-label-sm hover:opacity-90 transition-all flex items-center justify-center gap-2 text-white">
              Confirm Appointment
              <span className="material-symbols-outlined text-[18px]">
                arrow_forward
              </span>
            </Button>
          </form>
        </div>
      </motion.div>
    </section>
  );
}
