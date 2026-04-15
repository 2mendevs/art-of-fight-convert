import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustIndicators from "@/components/TrustIndicators";
import IntroSection from "@/components/IntroSection";
import ServicesSection from "@/components/ServicesSection";
import CoachSection from "@/components/CoachSection";
import SocialProofSection from "@/components/SocialProofSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <HeroSection />
    <TrustIndicators />
    <IntroSection />
    <ServicesSection />
    <CoachSection />
    <SocialProofSection />
    <TestimonialsSection />
    <ContactSection />
    <FAQSection />
    <Footer />
  </div>
);

export default Index;
