import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import MobileNav from "@/components/MobileNav";

export const metadata = {
  title: "Treatments - Lumina Dental",
  description: "Explore our advanced dental treatments in Vasant Vihar, New Delhi, including smile makeovers, full-mouth rehabilitation, implant-supported dentures, and more.",
};

const treatments = [
  {
    category: "Cosmetic & Aesthetic Artistry",
    icon: "diamond",
    description: "Recreate symmetry, alignment, and natural tooth shade with 3D digital simulations.",
    items: [
      {
        slug: "cosmetic",
        title: "Full Smile Makeover",
        desc: "A comprehensive aesthetic transformation combining custom veneers, laser whitening, and gum contouring for a completely redesigned smile.",
        duration: "2-4 weeks",
        img: "/images/makeover_after.jpg",
      },
      {
        slug: "cosmetic",
        title: "Porcelain Veneers",
        desc: "Ultra-thin, custom-fabricated ceramic shells bonded to the front of teeth to instantly correct chips, severe discoloration, and minor misalignments.",
        duration: "2 visits",
        img: "/images/treatment_whitening.jpg",
      },
    ],
  },
  {
    category: "Restorative & Surgical Excellence",
    icon: "medical_services",
    description: "Rebuild permanent bite function and structural tooth foundation using guided digital implants.",
    items: [
      {
        slug: "implants",
        title: "Full Mouth Rehabilitation",
        desc: "Advanced restoration of the entire upper and lower jaw using implant-anchored bridges and custom crowns to re-establish a natural bite.",
        duration: "3-6 months",
        img: "/images/hero_dental_clinic.jpg",
      },
      {
        slug: "implants",
        title: "Implant-Supported Dentures",
        desc: "Fixed, permanent dentures anchored directly onto 4 to 6 titanium implants — completely eliminating slippage and adhesives.",
        duration: "3-4 months",
        img: "/images/tech_3d_scanner.jpg",
      },
    ],
  },
];

export default function TreatmentsPage() {
  return (
    <>
      <Navbar />
      <main className="bg-[#f5f5f7] text-[#1d1d1f]">
        <PageHeader
          title="Advanced Procedures."
          subtitle="From cosmetic smile redesigns to complex implant restorations — delivered with the highest clinical standards."
        />

        {treatments.map((category, ci) => (
          <section key={ci} className={`py-20 md:py-28 ${ci % 2 === 0 ? "bg-white" : "bg-[#f5f5f7]"} border-t border-black/5`}>
            <div className="max-w-[1120px] mx-auto px-6">
              
              <div className="max-w-2xl mb-12">
                <span className="text-xs font-semibold text-[#00685f] uppercase tracking-wider block mb-2">
                  Category 0{ci + 1}
                </span>
                <h2 className="text-3xl font-bold text-[#1d1d1f] mb-2">{category.category}</h2>
                <p className="text-sm text-[#515154] font-normal leading-relaxed">{category.description}</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {category.items.map((item, i) => (
                  <div
                    key={i}
                    className="rounded-3xl overflow-hidden border border-black/5 bg-white shadow-sm hover:shadow-md transition-all flex flex-col sm:flex-row justify-between"
                  >
                    <div className="w-full sm:w-2/5 h-52 sm:h-auto overflow-hidden relative bg-[#f5f5f7]">
                      <img
                        src={item.img}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="w-full sm:w-3/5 p-7 flex flex-col justify-between">
                      <div>
                        <div className="flex items-start justify-between gap-2 mb-2">
                          <h3 className="text-lg font-bold text-[#1d1d1f]">{item.title}</h3>
                          <span className="text-[10px] font-bold text-[#00685f] bg-[#00685f]/10 px-2.5 py-1 rounded-full shrink-0">
                            {item.duration}
                          </span>
                        </div>
                        <p className="text-xs text-[#515154] leading-relaxed mb-6 font-normal">{item.desc}</p>
                      </div>
                      
                      <Link
                        href={`/contact?treatment=${item.slug}`}
                        className="py-2.5 px-5 bg-[#00685f] hover:bg-[#005049] text-white text-xs font-semibold rounded-full transition-all text-center"
                      >
                        Book Treatment
                      </Link>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </section>
        ))}

        {/* CTA Banner */}
        <section className="py-20 bg-[#00685f] text-white">
          <div className="max-w-[1120px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left max-w-xl">
              <h2 className="text-3xl font-bold mb-3 tracking-tight">Unsure About Your Treatment Choice?</h2>
              <p className="text-white/80 text-base font-normal">
                Schedule a clinical consultation in Vasant Vihar, New Delhi, and our dental team will map out a custom care plan.
              </p>
            </div>
            <Link
              href="/contact"
              className="shrink-0 h-12 px-8 bg-white text-[#00685f] hover:bg-white/95 rounded-full font-bold text-sm transition-all shadow-md flex items-center justify-center"
            >
              Schedule Diagnostic
            </Link>
          </div>
        </section>
      </main>
      <Footer />
      <MobileNav />
    </>
  );
}
