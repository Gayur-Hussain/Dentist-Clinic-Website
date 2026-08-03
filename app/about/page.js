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
  description: "Learn about Lumina Dental's mission, our lead specialist Dr. Rohan Sharma, MDS, and our commitment to advanced dental care in Vasant Vihar, New Delhi.",
};

const timelineEvents = [
  {
    year: "2010",
    title: "Clinic Founded",
    description: "Dr. Rohan Sharma established the practice in Vasant Vihar, New Delhi, with a single chair and a mission to offer personalized care.",
  },
  {
    year: "2015",
    title: "Advanced 3D Imaging",
    description: "Integrated hospital-grade CBCT 3D radiography, eliminating reference scans and bringing advanced digital diagnoses in-house.",
  },
  {
    year: "2020",
    title: "Pain-Free Sedation Protocols",
    description: "Pioneered conscious micro-sedation and warm anesthesia techniques, earning a reputation for absolute pain-free therapy.",
  },
  {
    year: "2024",
    title: "Fully Digital Scan Suite",
    description: "Retired all traditional putty impressions. Upgraded entirely to digital intraoral wand scans for veneers, implants, and aligners.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHeader
          badge="Our Story"
          title="Precision Dentistry, Human Touch"
          subtitle="Founded on the belief that world-class dental care should feel warm, personal, and technologically superior. Meet our team."
          breadcrumbs={[{ label: "About" }]}
        />

        {/* Mission Overlap Grid */}
        <section className="py-24 bg-white">
          <div className="max-w-[1280px] mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "favorite",
                title: "Our Mission",
                description:
                  "To deliver patient-first dental care that combines clinical excellence with a compassionate, spa-like environment for every visit.",
              },
              {
                icon: "visibility",
                title: "Our Vision",
                description:
                  "To be the most trusted name in Indian dentistry — a clinic where cutting-edge technology meets genuine human connection.",
              },
              {
                icon: "diamond",
                title: "Our Values",
                description:
                  "Integrity, transparency, and excellence guide every decision we make — from personalized care sheets to honest medical reporting.",
              },
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-[32px] border border-[#eaefed] bg-[#f5faf8]/30 hover:bg-white hover:shadow-xl hover:border-[#00685f]/20 transition-all duration-300 group cursor-default">
                <div className="w-14 h-14 rounded-2xl bg-[#00685f]/10 flex items-center justify-center mb-6 group-hover:bg-[#00685f] transition-all">
                  <span className="material-symbols-outlined text-[28px] text-[#00685f] group-hover:text-white transition-all">
                    {item.icon}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-[#171d1c] mb-3">{item.title}</h3>
                <p className="text-sm text-[#3d4947] leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Lead Doctor Showcase */}
        <AboutDoctor />

        {/* Statistics Block */}
        <Statistics />

        {/* Clinical timeline / History */}
        <section className="py-24 bg-[#f5faf8] border-y border-[#eaefed]">
          <div className="max-w-[1280px] mx-auto px-6 md:px-10">
            <div className="text-center mb-16">
              <span className="text-[12px] font-bold text-[#00685f] uppercase tracking-wider">Clinical Evolution</span>
              <h2 className="text-3xl font-bold text-[#171d1c] mt-2">Our Milestones</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {timelineEvents.map((event, i) => (
                <div key={i} className="bg-white p-8 rounded-3xl border border-[#eaefed] relative shadow-sm hover:shadow-md transition-all">
                  <div className="text-3xl font-extrabold text-[#00685f] mb-3">{event.year}</div>
                  <h4 className="text-md font-bold text-[#171d1c] mb-2">{event.title}</h4>
                  <p className="text-xs text-[#3d4947] leading-relaxed">{event.description}</p>
                  {i < 3 && (
                    <div className="hidden lg:block absolute top-12 -right-6 w-12 h-[1px] bg-[#00685f]/20 z-10" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* why choose us */}
        <WhyChooseUs />

        {/* Team Section (Interactive Scroll Parallax) */}
        <SpecialistTeam />
      </main>
      <Footer />
      <MobileNav />
    </>
  );
}
