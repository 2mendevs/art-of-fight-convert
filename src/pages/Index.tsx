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
import Reveal from "@/components/Reveal";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <HeroSection />

    <Reveal animation="fade-up">
      <IntroSection />
    </Reveal>

    <Reveal animation="fade-up">
      <ServicesSection />
    </Reveal>

    <Reveal animation="fade-up">
      <CoachSection />
    </Reveal>

    <Reveal animation="scale-in">
      <SocialProofSection />
    </Reveal>

    <Reveal animation="fade-up">
      <TestimonialsSection />
    </Reveal>

    <Reveal animation="scale-in">
      <div className="container py-6">
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold text-sm uppercase tracking-wide"
          >
            1 on 1 Coaching
          </Button>
          <Button size="lg" className="font-semibold text-sm uppercase tracking-wide">
            AOF 30 Days Program
          </Button>
        </div>
      </div>
    </Reveal>

    <Reveal animation="fade-up">
      <ContactSection />
    </Reveal>

    <Footer />
  </div>
);

export default Index;
