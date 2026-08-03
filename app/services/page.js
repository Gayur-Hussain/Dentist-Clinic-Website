import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import MobileNav from "@/components/MobileNav";
import { Button } from "@/components/ui/button";
import { servicesData } from "@/lib/servicesData";

export const metadata = {
  title: "Our Services - Lumina Dental",
  description: "Explore our full range of premium dental services — from root canals and implants to cosmetic dentistry and orthodontics.",
};

// Define departments for categorization
const departments = [
  {
    id: "preventive",
    name: "Preventive & General Dentistry",
    description: "Keep your natural smile strong, clean, and disease-free with regular checkups and diagnostic scanning.",
    slugs: ["whitening", "pediatrics", "gum-care", "digital-scan", "protective"],
  },
  {
    id: "restorative",
    name: "Restorative & Surgical Therapies",
    description: "Rebuild structural strength, fix missing gaps, and address acute tooth pains with board-certified oral surgeons.",
    slugs: ["root-canal", "implants", "oral-surgery"],
  },
  {
    id: "cosmetics",
    name: "Cosmetic & Orthodontic Artistry",
    description: "Realign teeth discreetly and design a stunning, balanced smile with digital mockups and custom porcelain veneers.",
    slugs: ["orthodontics", "cosmetic"],
  },
];

export default function ServicesPage() {
  const getServiceBySlug = (slug) => {
    return servicesData.find((s) => s.slug === slug);
  };

  return (
    <>
      <Navbar />
      <main>
        <PageHeader
          badge="Our Specialties"
          title="Precision Dental Services"
          subtitle="A comprehensive suite of dental treatments delivered by specialist clinicians using the world's most advanced technology."
          breadcrumbs={[{ label: "Services" }]}
        />

        {departments.map((dept, di) => {
          const deptServices = dept.slugs.map((slug) => getServiceBySlug(slug)).filter(Boolean);
          
          return (
            <section key={dept.id} className={`py-24 ${di % 2 === 0 ? "bg-white" : "bg-[#f5faf8]"}`}>
              <div className="max-w-[1280px] mx-auto px-6 md:px-10">
                {/* Department Info */}
                <div className="max-w-2xl mb-16">
                  <span className="text-[12px] font-bold text-[#00685f] uppercase tracking-wider block mb-2">
                    Department {di + 1}
                  </span>
                  <h2 className="text-3xl font-bold text-[#171d1c] mb-3">
                    {dept.name}
                  </h2>
                  <p className="text-on-surface-variant text-sm leading-relaxed">
                    {dept.description}
                  </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {deptServices.map((service) => (
                    <div
                      key={service.slug}
                      className="group bg-white border border-[#eaefed] rounded-[28px] p-8 flex flex-col justify-between hover:shadow-2xl hover:shadow-[#00685f]/5 hover:border-[#00685f]/30 transition-all duration-300 relative overflow-hidden"
                    >
                      <div>
                        {/* Icon */}
                        <div className="w-14 h-14 rounded-2xl bg-[#00685f]/5 flex items-center justify-center text-[#00685f] mb-6 group-hover:bg-[#00685f] group-hover:text-white transition-all duration-300">
                          <span className="material-symbols-outlined text-[28px]">
                            {service.icon}
                          </span>
                        </div>

                        {/* Title & Tagline */}
                        <h3 className="text-lg font-bold text-[#171d1c] group-hover:text-[#00685f] transition-colors mb-1">
                          {service.title}
                        </h3>
                        <p className="text-xs font-semibold text-[#00685f] mb-4">
                          {service.tagline}
                        </p>

                        {/* Description */}
                        <p className="text-sm text-[#3d4947] leading-relaxed mb-6">
                          {service.description}
                        </p>
                      </div>

                      {/* Info and Action Footer */}
                      <div className="pt-6 border-t border-[#eaefed] mt-6 flex flex-col gap-4">
                        <div className="flex items-center gap-4 text-xs text-[#6d7a77]">
                          <span className="flex items-center gap-1.5 font-medium">
                            <span className="material-symbols-outlined text-[14px] text-[#00685f]">schedule</span>
                            {service.duration}
                          </span>
                          <span className="flex items-center gap-1.5 font-medium border-l border-[#eaefed] pl-4">
                            <span className="material-symbols-outlined text-[14px] text-[#00685f]">healing</span>
                            {service.recovery}
                          </span>
                        </div>

                        <div className="grid grid-cols-2 gap-2 mt-2">
                          <Link
                            href={`/services/${service.slug}`}
                            className="text-center py-2.5 text-xs font-bold border border-[#eaefed] rounded-lg text-[#00685f] hover:bg-[#00685f]/5 transition-all"
                          >
                            Explore Guide
                          </Link>
                          <Link
                            href={`/contact?treatment=${service.slug}`}
                            className="text-center py-2.5 text-xs font-bold bg-[#00685f] hover:bg-[#005049] text-white rounded-lg transition-all"
                          >
                            Book Consult
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          );
        })}

        {/* Dynamic Consult CTA */}
        <section className="py-20 bg-[#00685f]">
          <div className="max-w-[1280px] mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-white text-center md:text-left">
              <h2 className="text-3xl font-bold mb-2">Need a Comprehensive Diagnostic?</h2>
              <p className="text-white/80 text-base max-w-lg">
                Meet our specialists in Vasant Vihar, New Delhi for an interactive digital oral health screening.
              </p>
            </div>
            <Link href="/contact" className="shrink-0">
              <Button className="bg-white text-[#00685f] hover:bg-white/95 px-8 py-6 rounded-full font-bold text-md cursor-pointer shadow-lg shadow-black/10">
                Book Clinic Consult
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
      <MobileNav />
    </>
  );
}
