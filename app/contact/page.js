"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import MobileNav from "@/components/MobileNav";
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

function BookingWizardForm() {
  const searchParams = useSearchParams();
  const [submitted, setSubmitted] = useState(false);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [treatment, setTreatment] = useState("");
  const [date, setDate] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const queryTreatment = searchParams.get("treatment");
    if (queryTreatment) {
      setTreatment(queryTreatment);
    }
  }, [searchParams]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const resetForm = () => {
    setFirstName("");
    setLastName("");
    setPhone("");
    setEmail("");
    setTreatment("");
    setDate("");
    setMessage("");
    setSubmitted(false);
  };

  if (submitted) {
    return (
      <div className="text-center py-12 bg-white border border-black/5 rounded-3xl p-8 shadow-sm">
        <div className="w-16 h-16 rounded-full bg-[#00685f]/10 flex items-center justify-center mx-auto mb-4 text-[#00685f]">
          <span className="material-symbols-outlined text-[32px]">check_circle</span>
        </div>
        <h3 className="text-2xl font-bold text-[#1d1d1f] mb-2">Appointment Request Received</h3>
        <p className="text-sm text-[#515154] leading-relaxed max-w-sm mx-auto mb-6">
          Thank you, {firstName}. Our clinic coordinator in Vasant Vihar will call you back on {phone} within 2 hours to confirm your appointment.
        </p>
        <Button
          onClick={resetForm}
          className="rounded-full px-7 h-10 text-white bg-[#00685f] hover:bg-[#005049]"
        >
          Book Another Appointment
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-white border border-black/5 rounded-3xl p-8 md:p-10 shadow-sm">
      <h3 className="text-xl font-bold text-[#1d1d1f] mb-6">
        Request Appointment Slot
      </h3>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <Label className="text-xs font-semibold text-[#1d1d1f]">First Name</Label>
            <Input
              required
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="h-11 bg-[#f5f5f7] rounded-xl border-black/5"
              placeholder="Rahul"
            />
          </div>
          <div className="space-y-1.5">
            <Label className="text-xs font-semibold text-[#1d1d1f]">Last Name</Label>
            <Input
              required
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="h-11 bg-[#f5f5f7] rounded-xl border-black/5"
              placeholder="Verma"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <Label className="text-xs font-semibold text-[#1d1d1f]">Phone Number</Label>
            <Input
              required
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="h-11 bg-[#f5f5f7] rounded-xl border-black/5"
              placeholder="+91 98765 43210"
            />
          </div>
          <div className="space-y-1.5">
            <Label className="text-xs font-semibold text-[#1d1d1f]">Email Address</Label>
            <Input
              required
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-11 bg-[#f5f5f7] rounded-xl border-black/5"
              placeholder="rahul@example.com"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <Label className="text-xs font-semibold text-[#1d1d1f]">Treatment</Label>
            <Select required value={treatment} onValueChange={(val) => setTreatment(val)}>
              <SelectTrigger className="h-11 bg-[#f5f5f7] rounded-xl border-black/5">
                <SelectValue placeholder="Select Treatment" />
              </SelectTrigger>
              <SelectContent className="bg-white rounded-xl">
                <SelectItem value="whitening">Teeth Whitening</SelectItem>
                <SelectItem value="orthodontics">Clear Aligners</SelectItem>
                <SelectItem value="implants">Dental Implants</SelectItem>
                <SelectItem value="root-canal">Painless Root Canal</SelectItem>
                <SelectItem value="digital-scan">3D Digital Scan</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-1.5">
            <Label className="text-xs font-semibold text-[#1d1d1f]">Preferred Date</Label>
            <Input
              required
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="h-11 bg-[#f5f5f7] rounded-xl border-black/5"
            />
          </div>
        </div>

        <div className="space-y-1.5">
          <Label className="text-xs font-semibold text-[#1d1d1f]">Message (Optional)</Label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full h-24 bg-[#f5f5f7] rounded-xl border border-black/5 px-4 py-3 text-sm text-[#1d1d1f] resize-none focus:outline-none focus:ring-2 focus:ring-[#00685f]/20"
            placeholder="Briefly describe your goals or symptoms..."
          />
        </div>

        <Button
          type="submit"
          className="w-full h-11 rounded-full text-white font-semibold text-xs bg-[#00685f] hover:bg-[#005049] mt-2 cursor-pointer"
        >
          Confirm Appointment Request
        </Button>
      </form>
    </div>
  );
}

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="bg-[#f5f5f7] text-[#1d1d1f]">
        <PageHeader
          title="Schedule Your Visit."
          subtitle="Book your appointment slot online or call our Vasant Vihar clinic directly."
        />

        <section className="py-20 md:py-28 bg-white border-t border-black/5">
          <div className="max-w-[1120px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-14">
            
            {/* Contact Details Column */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-[#1d1d1f] mb-4">Visit Lumina Dental</h2>
                <p className="text-sm text-[#515154] leading-relaxed mb-6 font-normal">
                  E-20, Ground Floor, Vasant Vihar, New Delhi, Delhi 110057
                </p>

                <div className="space-y-6 pt-4 border-t border-black/5">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#00685f]/10 text-[#00685f] flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-[20px]">schedule</span>
                    </div>
                    <div>
                      <p className="font-bold text-sm text-[#1d1d1f]">Practice Hours</p>
                      <p className="text-xs text-[#515154]">Monday – Saturday: 9:00 AM – 8:00 PM</p>
                      <p className="text-xs text-[#515154]">Sunday: Emergency Appointments Active</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#00685f]/10 text-[#00685f] flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-[20px]">call</span>
                    </div>
                    <div>
                      <p className="font-bold text-sm text-[#1d1d1f]">Phone Lines</p>
                      <a href="tel:+919876543210" className="text-xs text-[#00685f] font-semibold block hover:underline">
                        +91 98765 43210 (Direct Clinic Line)
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Container */}
              <div className="h-64 rounded-3xl overflow-hidden border border-black/5 bg-[#f5f5f7]">
                <iframe
                  src="https://maps.google.com/maps?q=Vasant%20Vihar,%20New%20Delhi&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            {/* Form Column */}
            <div>
              <Suspense fallback={<div className="p-8 bg-white border border-black/5 rounded-3xl text-center">Loading Booking Panel...</div>}>
                <BookingWizardForm />
              </Suspense>
            </div>

          </div>
        </section>
      </main>
      <Footer />
      <MobileNav />
    </>
  );
}
