import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";

import IntroSection from "@/components/IntroSection";
import ServicesSection from "@/components/ServicesSection";
import CoachSection from "@/components/CoachSection";
import SocialProofSection from "@/components/SocialProofSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const Index = () => {
  useScrollReveal();
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />

      <div className="reveal-on-scroll"><IntroSection /></div>
      <div className="reveal-on-scroll"><ServicesSection /></div>
      <div className="reveal-on-scroll"><CoachSection /></div>
      <div className="reveal-on-scroll"><SocialProofSection /></div>
      <div className="reveal-on-scroll"><TestimonialsSection /></div>
      <div className="container py-6 reveal-on-scroll">
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold text-sm uppercase tracking-wide transition-transform hover:scale-105"
          >
            1 on 1 Coaching
          </Button>
          <Button size="lg" className="font-semibold text-sm uppercase tracking-wide transition-transform hover:scale-105">
            AOF 30 Days Program
          </Button>
        </div>
      </div>
      <div className="reveal-on-scroll"><ContactSection /></div>
      <Footer />
    </div>
  );
};

export default Index;
