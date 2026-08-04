import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import MobileNav from "@/components/MobileNav";
import { servicesData } from "@/lib/servicesData";

export const metadata = {
  title: "Our Services - Lumina Dental",
  description: "Explore our full range of premium dental services — from 3D scanning and implants to laser whitening and aligners.",
};

const departments = [
  {
    id: "preventive",
    name: "Preventive & General Care",
    description: "Preserve your natural tooth strength and health with 3D optical diagnostics and gentle preventive care.",
    slugs: ["whitening", "pediatrics", "gum-care", "digital-scan", "protective"],
  },
  {
    id: "restorative",
    name: "Restorative & Surgical Therapies",
    description: "Rebuild structural strength, restore missing teeth, and eliminate acute discomfort with board-certified specialists.",
    slugs: ["root-canal", "implants", "oral-surgery"],
  },
  {
    id: "cosmetics",
    name: "Cosmetic & Orthodontic Artistry",
    description: "Straighten teeth invisibly and design your ideal smile with 3D digital simulations and porcelain veneers.",
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
      <main className="bg-[#f5f5f7] text-[#1d1d1f]">
        
        {/* Apple Clean Header */}
        <PageHeader
          badge="Specialized Clinical Care"
          title="Precision Dental Services."
          subtitle="World-class oral care delivered by specialist clinicians using sub-millimeter 3D optical technology in New Delhi."
          breadcrumbs={[{ label: "Services" }]}
        />

        {departments.map((dept, di) => {
          const deptServices = dept.slugs.map((slug) => getServiceBySlug(slug)).filter(Boolean);
          
          return (
            <section
              key={dept.id}
              className={`py-20 md:py-28 ${di % 2 === 0 ? "bg-white" : "bg-[#f5f5f7]"} border-t border-black/5`}
            >
              <div className="max-w-[1120px] mx-auto px-6">
                
                {/* Department Title */}
                <div className="max-w-2xl mb-14">
                  <span className="text-xs font-semibold text-[#00685f] uppercase tracking-wider block mb-2">
                    Department 0{di + 1}
                  </span>
                  <h2 className="text-3xl font-bold text-[#1d1d1f] mb-3">
                    {dept.name}
                  </h2>
                  <p className="text-[#515154] text-base leading-relaxed font-normal">
                    {dept.description}
                  </p>
                </div>

                {/* Services Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {deptServices.map((service) => (
                    <div
                      key={service.slug}
                      className="bg-white border border-black/5 rounded-3xl p-7 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow group"
                    >
                      <div>
                        {/* Service Image preview */}
                        <div className="h-44 rounded-2xl overflow-hidden mb-6 bg-[#f5f5f7] relative">
                          <img
                            src={service.image}
                            alt={service.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>

                        {/* Title & Tagline */}
                        <span className="text-xs font-semibold text-[#00685f] uppercase tracking-wider block mb-1">
                          {service.tagline}
                        </span>
                        <h3 className="text-xl font-bold text-[#1d1d1f] mb-3">
                          {service.title}
                        </h3>

                        {/* Description */}
                        <p className="text-sm text-[#515154] leading-relaxed mb-6 font-normal">
                          {service.description}
                        </p>
                      </div>

                      {/* Footer Actions */}
                      <div className="pt-6 border-t border-black/5 flex flex-col gap-3">
                        <div className="flex justify-between text-xs text-[#86868b] font-medium">
                          <span>Duration: <strong className="text-[#1d1d1f]">{service.duration}</strong></span>
                          <span>Recovery: <strong className="text-[#1d1d1f]">{service.recovery}</strong></span>
                        </div>

                        <div className="grid grid-cols-2 gap-2 mt-2">
                          <Link
                            href={`/services/${service.slug}`}
                            className="text-center py-2.5 text-xs font-semibold border border-black/10 rounded-full text-[#1d1d1f] hover:bg-black/5 transition-all"
                          >
                            Read Guide
                          </Link>
                          <Link
                            href={`/contact?treatment=${service.slug}`}
                            className="text-center py-2.5 text-xs font-semibold bg-[#00685f] hover:bg-[#005049] text-white rounded-full transition-all"
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

        {/* Dynamic Consult Callout */}
        <section className="py-20 bg-[#00685f] text-white">
          <div className="max-w-[1120px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left max-w-xl">
              <h2 className="text-3xl font-bold mb-3 tracking-tight">Need a Comprehensive Screening?</h2>
              <p className="text-white/80 text-base font-normal">
                Visit our clinic in Vasant Vihar, New Delhi for a 3D optical scan and personalized treatment roadmap.
              </p>
            </div>
            <Link
              href="/contact"
              className="shrink-0 h-12 px-8 bg-white text-[#00685f] hover:bg-white/95 rounded-full font-bold text-sm transition-all shadow-md flex items-center justify-center"
            >
              Book Clinic Visit
            </Link>
          </div>
        </section>

      </main>
      <Footer />
      <MobileNav />
    </>
  );
}
