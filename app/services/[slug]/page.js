import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import MobileNav from "@/components/MobileNav";
import { Button } from "@/components/ui/button";
import { servicesData } from "@/lib/servicesData";

export async function generateStaticParams() {
  return servicesData.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const service = servicesData.find((s) => s.slug === resolvedParams.slug);
  if (!service) return {};
  return {
    title: `${service.title} - Lumina Dental`,
    description: service.description,
  };
}

export default async function ServiceDetailPage({ params }) {
  const resolvedParams = await params;
  const service = servicesData.find((s) => s.slug === resolvedParams.slug);
  if (!service) notFound();

  const otherServices = servicesData.filter((s) => s.slug !== resolvedParams.slug).slice(0, 3);

  return (
    <>
      <Navbar />
      <main>
        <PageHeader
          badge={service.title}
          title={service.tagline}
          subtitle={service.description}
          breadcrumbs={[
            { label: "Services", href: "/services" },
            { label: service.title },
          ]}
        />

        {/* Main Content */}
        <section className="py-24 bg-white">
          <div className="max-w-[1280px] mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Left: Details */}
            <div className="lg:col-span-2 space-y-12">
              {/* Hero Image */}
              <div className="rounded-[32px] overflow-hidden shadow-2xl shadow-[#00685f]/10 aspect-video">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Description */}
              <div>
                <h2 className="text-3xl font-bold text-[#171d1c] mb-6">About This Treatment</h2>
                <div className="text-[#3d4947] leading-relaxed space-y-4">
                  {service.longDescription.split("\n\n").map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div>
                <h2 className="text-3xl font-bold text-[#171d1c] mb-6">Key Benefits</h2>
                <div className="space-y-4">
                  {service.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-start gap-4 p-4 rounded-2xl bg-[#f5faf8] border border-[#eaefed]">
                      <div className="w-8 h-8 rounded-full bg-[#00685f]/10 flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-[#00685f] text-[16px]">check</span>
                      </div>
                      <p className="text-[#171d1c] font-medium pt-0.5">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQs */}
              <div>
                <h2 className="text-3xl font-bold text-[#171d1c] mb-6">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  {service.faqs.map((faq, i) => (
                    <div key={i} className="p-6 rounded-2xl bg-[#f5faf8] border border-[#eaefed]">
                      <h4 className="font-bold text-[#00685f] mb-2">{faq.q}</h4>
                      <p className="text-[#3d4947]">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Sidebar */}
            <div className="space-y-8">
              {/* Quick Info Card */}
              <div className="bg-[#f5faf8] border border-[#eaefed] rounded-3xl p-8 sticky top-28 shadow-xl shadow-[#00685f]/2">
                <h3 className="text-xl font-bold text-[#171d1c] mb-6">Treatment Summary</h3>
                <div className="space-y-5">
                  {[
                    { icon: "schedule", label: "Duration", value: service.duration },
                    { icon: "event_repeat", label: "Sessions", value: service.sessions },
                    { icon: "healing", label: "Recovery", value: service.recovery },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-[#00685f]/10 flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-[#00685f] text-[20px]">{item.icon}</span>
                      </div>
                      <div>
                        <p className="text-xs text-[#6d7a77] uppercase tracking-wider">{item.label}</p>
                        <p className="font-semibold text-[#171d1c] text-sm">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <Link href={`/contact?treatment=${service.slug}`}>
                  <Button className="w-full mt-8 rounded-2xl py-6 text-white font-bold cursor-pointer bg-primary hover:bg-[#005049]">
                    Book Appointment
                  </Button>
                </Link>
                <a href="tel:+911141608930" className="cursor-pointer">
                  <Button
                    variant="outline"
                    className="w-full mt-3 rounded-2xl py-6 font-bold cursor-pointer border-[#eaefed] hover:bg-[#00685f]/5 text-primary"
                  >
                    <span className="material-symbols-outlined mr-2 text-[18px]">call</span>
                    Call +91 11 4160 8930
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Other Services */}
        <section className="py-24 bg-[#f5faf8]">
          <div className="max-w-[1280px] mx-auto px-6 md:px-10">
            <h2 className="text-3xl font-bold text-[#171d1c] mb-12 text-center">
              Explore Other Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {otherServices.map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="group block p-6 rounded-2xl bg-white border border-[#eaefed] hover:border-[#00685f]/30 hover:shadow-lg transition-all cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#00685f]/5 flex items-center justify-center text-[#00685f] mb-4 group-hover:bg-[#00685f] group-hover:text-white transition-all">
                    <span className="material-symbols-outlined text-[24px]">{s.icon}</span>
                  </div>
                  <h4 className="font-bold text-[#171d1c] mb-1 group-hover:text-primary transition-colors">{s.title}</h4>
                  <p className="text-xs text-[#3d4947]">{s.tagline}</p>
                </Link>
              ))}
            </div>
            <div className="text-center mt-12">
              <Link href="/services">
                <Button variant="outline" className="px-8 py-3 rounded-full font-bold cursor-pointer">
                  View All Services
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <MobileNav />
    </>
  );
}
