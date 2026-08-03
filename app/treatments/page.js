import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import MobileNav from "@/components/MobileNav";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Treatments - Lumina Dental",
  description: "Explore our advanced dental treatments in Vasant Vihar, New Delhi, including smile makeovers, full-mouth rehabilitation, implant-supported dentures, and more.",
};

const treatments = [
  {
    category: "Cosmetic & Aesthetic Artistry",
    icon: "diamond",
    description: "Recreate the symmetry, alignment, and shade of your teeth with digital preview simulations.",
    items: [
      {
        slug: "cosmetic",
        title: "Full Smile Makeover",
        desc: "A comprehensive aesthetic transformation combining custom veneers, laser whitening, and gum contouring for a completely redesigned smile.",
        duration: "2–4 weeks (2-3 Visits)",
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC0HZcEYuv0h8fvxUxkQk-_qdpAGK1hTV6G-MFwq_V3d3yryZD0F9OcHwoeeVIPsnbEUI-raZoGeeTAXysZmJYa5_cRB1Kc0GMLlFBoFD7-KdS5fD4nN4HU445eNmgUvESJoQPoXgiVbM3WAzZdOK3qmGcpudUJ9juwdKqu3Puv5-_ptq3HuNfl_Lhm64gaLFuidcBkxfS71oKxChpvCp-9zJDksckxpq5xLZUQSNURzIXIE1DlNSGDy8EPehWTZ-7Nk3O0ANN40G8",
      },
      {
        slug: "cosmetic",
        title: "Porcelain Veneers",
        desc: "Ultra-thin, custom-fabricated ceramic shells bonded to the front of teeth to instantly correct chips, severe discoloration, and minor misalignments.",
        duration: "2 visits (7 days apart)",
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCqJsIBtAzUo8YDOQiLLC7scKVlUIL6u61ve2L_ku9Zfd9s69VsbimrIDkQGCjW-Xr37EZI87jhkc5oGsZr3AVBEgDnSqfcrma3eDukmRhocIhTpTGAkqdGBjKV4IFR9bkJP2qY8ZxsfU2-66UMFy-bqTrtqR4UyCuqb3GKKtG8KDgBxLehjbRhrE5EJiuY1ahJ98HcldtRKnnFASVYwjCke0b0XIL1rUKNdMxpwCUUssDiKN5nNlxgb4T2UeQ_TPCMPMpqvSL3SOc",
      },
    ],
  },
  {
    category: "Restorative & Surgical Excellence",
    icon: "medical_services",
    description: "Rebuild permanent bite function and structural teeth foundation using guided digital implants.",
    items: [
      {
        slug: "implants",
        title: "Full Mouth Rehabilitation",
        desc: "Advanced restoration of the entire upper and lower jaw using implant-anchored bridges and custom crowns to re-establish a natural bite.",
        duration: "3–6 months (3-4 Visits)",
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB1XAMa-Cix7kDhpd2Lt-ldbSJfwjMDNqNrxMhCXGwpAQtRbhIV17niZh3IztsyY4VuJ_wBLh97yOpm_8loh-CUnsWc3Z_q9GKVwzofbPwBjbwagxmT3Jnx6TCEBlRHE2VNA6KYV2WqOpORnPMnJbD6jV9Ak2by9pwbqGxcu2Kn_qGVxD0_xP9rD8GXd6BuKHq8tO_7o634ybdmpYoIVbi73yk1vPI5ozOBuusqyAwZc5J8f3860YE6ecewskXtBaT1se_Ee2EKNN4",
      },
      {
        slug: "implants",
        title: "Implant-Supported Dentures",
        desc: "Fixed, permanent dentures anchored directly onto 4 to 6 titanium implants — completely eliminating slippage and adhesives.",
        duration: "3–4 months (3 Visits)",
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA55Rj_SwmxhYUSXGb2g8P_kGf_guanRx2EB-VEzsa78L1R3SeAjCzoH9Ne75JmamVv-aiY3jUarGD6g36aOgGC9j2BbfOVidoxvKTOntEbo3H7XKPmxKY5EqW3ZWQJKg3sH1Li0IUsLJmwRS4sSxhpTcEXohko8GQR1ci__6X5BpmuOXXhhqxP6r18onYJ1LXg6En55t01UfbolHySAiYeUS4qh3PWiY7BpZbS3lNH5cZGqcCCVocT1bzBj_-IykHyeaqDxWPpp4c",
      },
    ],
  },
  {
    category: "Preventive & Diagnostic Care",
    icon: "health_and_safety",
    description: "Hospital-grade preventive screening, plaque management, and digital jawbone diagnostics.",
    items: [
      {
        slug: "gum-care",
        title: "Ultrasonic Scaler Cleaning",
        desc: "Comprehensive deep scale and polish using high-frequency ultrasonic systems to clear tartar and plaque, protecting gums from disease.",
        duration: "45–60 mins (1 Session)",
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCwbLi2O6AjWDJuVaTFko_rn7498cor2fwEWW4AZKzhYhGH8qHH-x8qcNJzcuy3ESS4HLq7H-Rn0fwV168sd3maoxSIN6y5MkybWwYdAkrEKZnWUIIAiYGaS9Age4VP0YQWLBgrlsld7BYddOnEfXlEmeauloD-3bqaTNWa5IhqdyrWxI5aOFzSGLoopniL7lgOy4zFZPJXuiXvBuu4VCTbEV5VEtkPhFV3kkdjhHLlAO662sav8tVKtmwlEmNFwbrt7KR6fHDItls",
      },
      {
        slug: "digital-scan",
        title: "Digital Oral Health Diagnostics",
        desc: "Full dental assessment incorporating digital 3D intraoral scanning, CBCT jaw radiography, and oral screening with a custom care roadmap.",
        duration: "60 mins (1 Session)",
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDctYTspJi6fBUCQnTmK8vNePuAPFZRJ2ZboB3xmZIgQ2sz2dzc1FZcBVTZrYka9kFCkvWs2vdiB-qEjMtgrOoicIMyBmtp4hhigHsW0ZwGblR8p3RnGC9-K8jOJHC9qs7_vzp_QLBNWVinLd9Wa8gHPbhKiC1lJr4i7y498k7mkv9Z2zht1HkmO9Be0Gr0ZvvkQqc_nAAH25Qb9ggqbwu9KSSOAFgUfYdwtXCVxWyXCQQiWYR4kUdjOwQFrSL0Z4JU0N35VlLDUIQ",
      },
    ],
  },
];

export default function TreatmentsPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHeader
          badge="Treatment Menu"
          title="Advanced Procedures for Dental Health"
          subtitle="From cosmetic smile redesigns to complex implant-supported dentures — every procedure is delivered with the highest clinical standards."
          breadcrumbs={[{ label: "Treatments" }]}
        />

        {treatments.map((category, ci) => (
          <section key={ci} className={`py-24 ${ci % 2 === 0 ? "bg-white" : "bg-[#f5faf8]"}`}>
            <div className="max-w-[1280px] mx-auto px-6 md:px-10">
              {/* Category Header */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12 border-b border-[#eaefed] pb-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#00685f]/10 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[#00685f] text-[24px]">{category.icon}</span>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-[#171d1c]">{category.category}</h2>
                    <p className="text-on-surface-variant text-xs mt-1">{category.description}</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                {category.items.map((item, i) => (
                  <div
                    key={i}
                    className="group rounded-[32px] overflow-hidden border border-[#eaefed] bg-white hover:shadow-2xl hover:shadow-[#00685f]/5 hover:border-[#00685f]/20 transition-all duration-300 flex flex-col sm:flex-row"
                  >
                    {/* Image Area */}
                    <div className="w-full sm:w-2/5 aspect-video sm:aspect-auto sm:h-auto overflow-hidden relative min-h-[200px]">
                      <img
                        src={item.img}
                        alt={item.title}
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>

                    {/* Content Area */}
                    <div className="w-full sm:w-3/5 p-8 flex flex-col justify-between">
                      <div>
                        <div className="flex items-start justify-between gap-4 mb-3">
                          <h3 className="text-lg font-bold text-[#171d1c] group-hover:text-primary transition-colors">{item.title}</h3>
                          <span className="text-[10px] font-bold text-[#00685f] bg-[#00685f]/10 px-2.5 py-1 rounded-full whitespace-nowrap">
                            {item.duration}
                          </span>
                        </div>
                        <p className="text-xs text-[#3d4947] leading-relaxed mb-6">{item.desc}</p>
                      </div>
                      
                      <Link href={`/contact?treatment=${item.slug}`}>
                        <Button className="w-full sm:w-auto rounded-xl px-6 py-2.5 text-xs text-white font-bold bg-primary hover:bg-[#005049] cursor-pointer">
                          Book Treatment
                        </Button>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* CTA Banner */}
        <section className="py-20 bg-[#00685f]">
          <div className="max-w-[1280px] mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-white text-center md:text-left">
              <h2 className="text-3xl font-bold mb-2">Unsure About Your Treatment Choice?</h2>
              <p className="text-white/80 text-base max-w-lg">
                Schedule a clinical consultation in Vasant Vihar, New Delhi, and our dental team will map out a custom care plan.
              </p>
            </div>
            <Link href="/contact" className="shrink-0">
              <Button className="bg-white text-[#00685f] hover:bg-white/90 px-8 py-6 rounded-full font-bold text-md cursor-pointer shadow-lg">
                Schedule Diagnostic
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
