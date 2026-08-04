import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import AboutDoctor from "@/components/AboutDoctor";
import SmileGallery from "@/components/SmileGallery";
import Testimonials from "@/components/Testimonials";
import Statistics from "@/components/Statistics";
import Technology from "@/components/Technology";
import EmergencyBanner from "@/components/EmergencyBanner";
import Faq from "@/components/Faq";
import GoogleReviews from "@/components/GoogleReviews";
import ContactLocation from "@/components/ContactLocation";
import Footer from "@/components/Footer";
import MobileNav from "@/components/MobileNav";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyChooseUs />
        <AboutDoctor />
        <SmileGallery />
        <Testimonials />
        <Statistics />
        <Technology />
        <EmergencyBanner />
        <Faq />
        <GoogleReviews />
        <ContactLocation />
      </main>
      <Footer />
      <MobileNav />
    </>
  );
}
