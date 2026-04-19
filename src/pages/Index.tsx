import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";

import IntroSection from "@/components/IntroSection";
import ServicesSection from "@/components/ServicesSection";
import CoachSection from "@/components/CoachSection";
import SocialProofSection from "@/components/SocialProofSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";

import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <HeroSection />
    
    <IntroSection />
    <ServicesSection />
    <CoachSection />
    <SocialProofSection />
    <TestimonialsSection />
    
    <ContactSection />
    <Footer />
  </div>
);

export default Index;
