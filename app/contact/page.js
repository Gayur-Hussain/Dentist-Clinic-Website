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

// Helper component to parse URL search params and render the interactive booking form
function BookingWizardForm() {
  const searchParams = useSearchParams();
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  // Form states
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [treatment, setTreatment] = useState("");
  const [date, setDate] = useState("");
  const [message, setMessage] = useState("");

  // Initialize selected treatment from URL query parameter
  useEffect(() => {
    const queryTreatment = searchParams.get("treatment");
    if (queryTreatment) {
      setTreatment(queryTreatment);
    }
  }, [searchParams]);

  const handleNextStep = (e) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    }
  };

  const handlePrevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

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
    setStep(1);
    setSubmitted(false);
  };

  if (submitted) {
    return (
      <div className="text-center py-16">
        <div className="w-20 h-20 rounded-full bg-[#00685f]/10 flex items-center justify-center mx-auto mb-6">
          <span className="material-symbols-outlined text-[#00685f] text-[40px]">check_circle</span>
        </div>
        <h3 className="text-2xl font-bold text-[#171d1c] mb-3">Appointment Booked!</h3>
        <p className="text-sm text-[#3d4947] leading-relaxed max-w-sm mx-auto">
          Thank you, {firstName}. Your request is queued. Our representative in Vasant Vihar will call you back on {phone} within 2 hours to confirm your slot.
        </p>
        <Button
          onClick={resetForm}
          className="mt-8 rounded-full px-8 text-white cursor-pointer bg-primary hover:bg-[#005049]"
        >
          Book Another
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-[#f5faf8] border border-[#eaefed] rounded-3xl p-8 md:p-10 shadow-xl shadow-[#00685f]/2">
      {/* Wizard Progress Bar */}
      <div className="flex justify-between items-center mb-8 relative">
        <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 -translate-y-1/2 z-0" />
        <div
          className="absolute top-1/2 left-0 h-0.5 bg-[#00685f] -translate-y-1/2 transition-all duration-300 z-0"
          style={{ width: `${((step - 1) / 2) * 100}%` }}
        />
        {[1, 2, 3].map((s) => (
          <div
            key={s}
            className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs relative z-10 border transition-all duration-300 ${
              step >= s
                ? "bg-[#00685f] text-white border-[#00685f]"
                : "bg-white text-gray-400 border-gray-200"
            }`}
          >
            {s}
          </div>
        ))}
      </div>

      <h3 className="text-xl font-bold text-[#171d1c] mb-6">
        {step === 1 && "Step 1: Patient Basics"}
        {step === 2 && "Step 2: Care Details"}
        {step === 3 && "Step 3: Review & Confirm"}
      </h3>

      <form onSubmit={step === 3 ? handleSubmit : handleNextStep} className="space-y-5">
        {/* STEP 1: Patient Basics */}
        {step === 1 && (
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <Label className="text-xs font-semibold text-[#3d4947]">First Name</Label>
                <Input
                  required
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="h-12 bg-white rounded-xl border-[#bcc9c6] cursor-text"
                  placeholder="Rahul"
                />
              </div>
              <div className="space-y-1.5">
                <Label className="text-xs font-semibold text-[#3d4947]">Last Name</Label>
                <Input
                  required
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="h-12 bg-white rounded-xl border-[#bcc9c6] cursor-text"
                  placeholder="Verma"
                />
              </div>
            </div>
            <div className="space-y-1.5">
              <Label className="text-xs font-semibold text-[#3d4947]">Phone Number</Label>
              <Input
                required
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="h-12 bg-white rounded-xl border-[#bcc9c6] cursor-text"
                placeholder="+91 98765 43210"
              />
            </div>
            <div className="space-y-1.5">
              <Label className="text-xs font-semibold text-[#3d4947]">Email Address</Label>
              <Input
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12 bg-white rounded-xl border-[#bcc9c6] cursor-text"
                placeholder="rahul@example.com"
              />
            </div>
          </div>
        )}

        {/* STEP 2: Care Details */}
        {step === 2 && (
          <div className="space-y-4">
            <div className="space-y-1.5">
              <Label className="text-xs font-semibold text-[#3d4947]">Treatment Required</Label>
              <Select required value={treatment} onValueChange={(val) => setTreatment(val)}>
                <SelectTrigger className="h-12 bg-white rounded-xl border-[#bcc9c6] cursor-pointer">
                  <SelectValue placeholder="Select a treatment" />
                </SelectTrigger>
                <SelectContent className="bg-white rounded-xl">
                  <SelectItem className="cursor-pointer" value="root-canal">Root Canal Treatment</SelectItem>
                  <SelectItem className="cursor-pointer" value="implants">Dental Implants</SelectItem>
                  <SelectItem className="cursor-pointer" value="whitening">Teeth Whitening</SelectItem>
                  <SelectItem className="cursor-pointer" value="orthodontics">Clear Aligners / Braces</SelectItem>
                  <SelectItem className="cursor-pointer" value="oral-surgery">Oral Surgery</SelectItem>
                  <SelectItem className="cursor-pointer" value="pediatrics">Pediatric Dentistry</SelectItem>
                  <SelectItem className="cursor-pointer" value="gum-care">Gum Care / Laser Scaling</SelectItem>
                  <SelectItem className="cursor-pointer" value="cosmetic">Cosmetic Dentistry</SelectItem>
                  <SelectItem className="cursor-pointer" value="digital-scan">3D Digital Scanning</SelectItem>
                  <SelectItem className="cursor-pointer" value="protective">Protective Nightguards</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-1.5">
              <Label className="text-xs font-semibold text-[#3d4947]">Preferred Date</Label>
              <Input
                required
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="h-12 bg-white rounded-xl border-[#bcc9c6] cursor-pointer"
              />
            </div>
            <div className="space-y-1.5">
              <Label className="text-xs font-semibold text-[#3d4947]">Message (optional)</Label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full h-24 bg-white rounded-xl border border-[#bcc9c6] px-4 py-3 text-sm text-[#171d1c] resize-none focus:outline-none focus:ring-2 focus:ring-[#00685f]/20 focus:border-[#00685f] transition-all cursor-text"
                placeholder="Briefly describe your symptoms or cosmetic goals..."
              />
            </div>
          </div>
        )}

        {/* STEP 3: Review & Confirm */}
        {step === 3 && (
          <div className="space-y-4 bg-white p-6 rounded-2xl border border-[#eaefed] text-sm">
            <div className="grid grid-cols-2 gap-4 pb-4 border-b border-[#eaefed]">
              <div>
                <span className="block text-xs text-[#6d7a77] uppercase font-bold tracking-wide">Patient</span>
                <span className="font-semibold text-[#171d1c]">{firstName} {lastName}</span>
              </div>
              <div>
                <span className="block text-xs text-[#6d7a77] uppercase font-bold tracking-wide">Contact</span>
                <span className="font-semibold text-[#171d1c]">{phone}</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 pb-4 border-b border-[#eaefed]">
              <div>
                <span className="block text-xs text-[#6d7a77] uppercase font-bold tracking-wide">Treatment</span>
                <span className="font-semibold text-[#171d1c] capitalize">{treatment.replace("-", " ")}</span>
              </div>
              <div>
                <span className="block text-xs text-[#6d7a77] uppercase font-bold tracking-wide">Preferred Date</span>
                <span className="font-semibold text-[#171d1c]">{date}</span>
              </div>
            </div>
            <div>
              <span className="block text-xs text-[#6d7a77] uppercase font-bold tracking-wide">Email</span>
              <span className="font-semibold text-[#171d1c]">{email}</span>
            </div>
          </div>
        )}

        {/* Buttons Controls */}
        <div className="flex gap-3 pt-4">
          {step > 1 && (
            <Button
              type="button"
              onClick={handlePrevStep}
              variant="outline"
              className="flex-1 h-12 rounded-xl border-[#eaefed] font-bold text-xs cursor-pointer"
            >
              Back
            </Button>
          )}
          <Button
            type="submit"
            className="flex-1 h-12 rounded-xl text-white font-bold text-xs bg-primary hover:bg-[#005049] cursor-pointer"
          >
            {step < 3 ? "Next Step" : "Book slot"}
            {step === 3 && <span className="material-symbols-outlined ml-2 text-[14px]">check</span>}
          </Button>
        </div>
      </form>
    </div>
  );
}

export default function ContactPage() {
  const [clinicStatus, setClinicStatus] = useState({ label: "Loading Status...", color: "bg-gray-400" });

  // Live status badge calculation
  useEffect(() => {
    const calculateStatus = () => {
      try {
        const options = { timeZone: "Asia/Kolkata", hour: "numeric", minute: "numeric", weekday: "long" };
        const formatter = new Intl.DateTimeFormat("en-US", options);
        const parts = formatter.formatToParts(new Date());

        let hour = 0;
        let minute = 0;
        let day = "";
        let isPm = false;

        parts.forEach((part) => {
          if (part.type === "hour") hour = parseInt(part.value);
          if (part.type === "minute") minute = parseInt(part.value);
          if (part.type === "weekday") day = part.value;
          if (part.type === "dayPeriod") isPm = part.value.toLowerCase().includes("pm");
        });

        let hours24 = hour;
        if (isPm && hour !== 12) hours24 += 12;
        if (!isPm && hour === 12) hours24 = 0;

        const timeFloat = hours24 + minute / 60;

        if (day === "Sunday") {
          setClinicStatus({ label: "Closed — Emergency Line Open", color: "bg-red-500" });
        } else if (day === "Saturday") {
          if (timeFloat >= 9.0 && timeFloat < 15.0) {
            setClinicStatus({ label: `Open Now — Closes at 3:00 PM`, color: "bg-[#00685f]" });
          } else {
            setClinicStatus({ label: "Closed — Opens Monday at 8:00 AM", color: "bg-red-500" });
          }
        } else {
          if (timeFloat >= 8.0 && timeFloat < 19.0) {
            setClinicStatus({ label: `Open Now — Closes at 7:00 PM`, color: "bg-[#00685f]" });
          } else {
            const label = hours24 < 8 ? "Closed — Opens today at 8:00 AM" : "Closed — Opens tomorrow at 8:00 AM";
            setClinicStatus({ label, color: "bg-red-500" });
          }
        }
      } catch (err) {
        setClinicStatus({ label: "Vasant Vihar Clinic Open", color: "bg-[#00685f]" });
      }
    };

    calculateStatus();
    const interval = setInterval(calculateStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <PageHeader
          badge="Contact Lumina"
          title="Schedule Your Appointment Today"
          subtitle="Register via our wizard below or call directly. Our coordinators will confirm your schedule slots within 2 hours."
          breadcrumbs={[{ label: "Contact Us" }]}
        />

        <section className="py-24 bg-white">
          <div className="max-w-[1280px] mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Contact Details Column */}
            <div className="space-y-10">
              <div>
                <h2 className="text-3xl font-bold text-[#171d1c] mb-6">Visit Our Vasant Vihar Clinic</h2>
                
                {/* Live Status Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-gray-100 bg-[#f5faf8] mb-8 shadow-sm">
                  <div className={`w-2.5 h-2.5 rounded-full ${clinicStatus.color} animate-pulse`} />
                  <span className="text-[11px] font-bold text-[#3d4947] tracking-wide uppercase">{clinicStatus.label}</span>
                </div>

                <div className="space-y-6">
                  {[
                    {
                      icon: "location_on",
                      title: "Location Address",
                      lines: ["E-20, Ground Floor", "Vasant Vihar, New Delhi, Delhi 110057"],
                    },
                    {
                      icon: "schedule",
                      title: "Practice Hours",
                      lines: [
                        "Monday – Friday: 8:00 AM – 7:00 PM",
                        "Saturday: 9:00 AM – 3:00 PM",
                        "Sunday: Closed (Emergency Callbacks Active)",
                      ],
                    },
                    {
                      icon: "call",
                      title: "Phone Lines",
                      lines: ["+91 11 4160 8930", "+91 99100 89310 (24/7 Emergencies)"],
                      link: "tel:+911141608930",
                    },
                    {
                      icon: "alternate_email",
                      title: "Clinic Email",
                      lines: ["appointments@luminadental.com"],
                      link: "mailto:appointments@luminadental.com",
                    },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-5">
                      <div className="w-12 h-12 rounded-xl bg-[#00685f]/10 flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-[#00685f] text-[22px]">{item.icon}</span>
                      </div>
                      <div>
                        <p className="font-bold text-[#171d1c] mb-1">{item.title}</p>
                        {item.lines.map((line, j) => (
                          item.link && j === 0 ? (
                            <a key={j} href={item.link} className="block text-[#3d4947] hover:text-[#00685f] transition-colors cursor-pointer text-sm">
                              {line}
                            </a>
                          ) : (
                            <p key={j} className="text-[#3d4947] text-sm leading-relaxed">{line}</p>
                          )
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Map Widget */}
              <div className="h-72 rounded-[32px] overflow-hidden border border-[#eaefed] relative bg-[#eaefed]">
                <iframe
                  src="https://maps.google.com/maps?q=Vasant%20Vihar,%20New%20Delhi&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0 opacity-90"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              {/* Emergency Banner panel */}
              <div className="p-6 rounded-2xl bg-[#924628]/10 border border-[#924628]/20 flex items-center gap-4">
                <span className="material-symbols-outlined text-[#924628] text-[36px]">emergency</span>
                <div>
                  <p className="font-bold text-[#171d1c] text-sm">Acute Dental Pain?</p>
                  <p className="text-xs text-[#3d4947] mt-0.5">Call our New Delhi emergency coordinator immediately</p>
                  <a href="tel:+919910089310" className="text-[#924628] font-bold text-sm cursor-pointer hover:underline block mt-1">
                    +91 99100 89310
                  </a>
                </div>
              </div>
            </div>

            {/* Booking Form Wizard Column */}
            <div>
              <Suspense fallback={<div className="p-10 bg-[#f5faf8] border border-[#eaefed] rounded-3xl text-center">Loading Booking Panel...</div>}>
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
