import PageHeader from "@/components/PageHeader";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutDoctor from "@/components/AboutDoctor";
import Statistics from "@/components/Statistics";
import WhyChooseUs from "@/components/WhyChooseUs";
import MobileNav from "@/components/MobileNav";
import SpecialistTeam from "@/components/SpecialistTeam";

export const metadata = {
  title: "About Us - Lumina Dental",
  description: "Learn about Lumina Dental's mission, our lead specialist Dr. Ananya Sharma, MDS, and our commitment to advanced dental care in Vasant Vihar, New Delhi.",
};

const timelineEvents = [
  {
    year: "2010",
    title: "Clinic Founded",
    description: "Dr. Ananya Sharma established the practice in Vasant Vihar, New Delhi, with a mission to offer personalized care.",
  },
  {
    year: "2015",
    title: "Advanced 3D Imaging",
    description: "Integrated hospital-grade CBCT 3D radiography, bringing advanced digital diagnoses in-house.",
  },
  {
    year: "2020",
    title: "Pain-Free Protocols",
    description: "Pioneered conscious micro-sedation and warm anesthesia techniques for absolute pain-free therapy.",
  },
  {
    year: "2024",
    title: "100% Digital Scan Suite",
    description: "Upgraded entirely to digital intraoral wand scans for veneers, implants, and clear aligners.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="bg-[#f5f5f7] text-[#1d1d1f]">
        <PageHeader
          title="Precision Dentistry, Human Touch."
          subtitle="World-class oral care that combines clinical security with a serene spa-like environment."
        />

        {/* Mission Overlap Grid */}
        <section className="py-20 md:py-28 bg-white border-t border-black/5">
          <div className="max-w-[1120px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "favorite",
                title: "Our Mission",
                description:
                  "To deliver patient-first dental care that combines clinical excellence with a compassionate environment for every visit.",
              },
              {
                icon: "visibility",
                title: "Our Vision",
                description:
                  "To be the most trusted name in Indian dentistry — where cutting-edge 3D technology meets genuine human connection.",
              },
              {
                icon: "diamond",
                title: "Our Values",
                description:
                  "Integrity, transparency, and clinical perfection guide every treatment decision we make.",
              },
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-3xl border border-black/5 bg-[#f5f5f7] flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#00685f]/10 flex items-center justify-center mb-6 text-[#00685f]">
                    <span className="material-symbols-outlined text-[24px]">
                      {item.icon}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-[#1d1d1f] mb-2">{item.title}</h3>
                  <p className="text-sm text-[#515154] leading-relaxed font-normal">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Lead Doctor Showcase */}
        <AboutDoctor />

        {/* Statistics Block */}
        <Statistics />

        {/* Clinical Milestones */}
        <section className="py-20 md:py-28 bg-[#f5f5f7] border-t border-black/5">
          <div className="max-w-[1120px] mx-auto px-6">
            <div className="text-center max-w-xl mx-auto mb-14">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#86868b] block mb-2">Evolution</span>
              <h2 className="text-3xl font-bold text-[#1d1d1f]">Our Milestones</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {timelineEvents.map((event, i) => (
                <div key={i} className="bg-white p-7 rounded-3xl border border-black/5 flex flex-col justify-between shadow-sm">
                  <div>
                    <div className="text-2xl font-extrabold text-[#00685f] mb-2">{event.year}</div>
                    <h4 className="text-base font-bold text-[#1d1d1f] mb-2">{event.title}</h4>
                    <p className="text-xs text-[#515154] leading-relaxed font-normal">{event.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <WhyChooseUs />

        {/* Specialist Team */}
        <SpecialistTeam />
      </main>
      <Footer />
      <MobileNav />
    </>
  );
}
