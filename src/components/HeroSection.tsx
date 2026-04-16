import { Button } from "@/components/ui/button";
import TrustIndicators from "@/components/TrustIndicators";

const HeroSection = () => (
  <section id="home" className="relative min-h-screen flex items-center pt-16">
    <div className="absolute inset-0 z-0">
      <img
        src="/images/hero-fighter.jpg"
        alt="MMA Fighter"
        className="w-full h-full object-cover"
        width={1280}
        height={720}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40" />
    </div>

    <div className="container relative z-10 py-12 md:py-20">
      <div className="max-w-lg space-y-6">
        <p className="text-primary font-semibold text-sm uppercase tracking-widest">
          Art of Fighting Academy
        </p>
        <h1 className="font-display text-5xl md:text-7xl leading-[0.95] text-foreground">
          AOF Academy:<br />
          Unleash Your Potential
        </h1>
        <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-md">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Transform your body and mind.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Button size="lg" className="font-semibold text-sm uppercase tracking-wide">
            AOF 30 Days Program
          </Button>
          <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold text-sm uppercase tracking-wide">
            1 on 1 Coaching
          </Button>
        </div>

        <TrustIndicators />
      </div>
    </div>
  </section>
);

export default HeroSection;
