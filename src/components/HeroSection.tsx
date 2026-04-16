import { Button } from "@/components/ui/button";
import TrustIndicators from "@/components/TrustIndicators";

const HeroSection = () => (
  <section id="home" className="relative h-screen flex flex-col overflow-hidden">
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

    <div className="container relative z-10 flex-1 flex items-center pt-16">
      <div className="max-w-lg space-y-5">
        <p className="text-primary font-semibold text-sm uppercase tracking-widest">
          Art of Fighting Academy
        </p>
        <h1 className="font-display text-4xl md:text-6xl leading-[0.95] text-foreground">
          AOF Academy:<br />
          Unleash Your Potential
        </h1>
        <p className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-md">
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
      </div>
    </div>

    {/* Trust indicators full-width strip */}
    <div className="relative z-10 w-full bg-primary py-3 px-6 md:px-10">
      <TrustIndicators />
    </div>
    <div className="h-4" />
  </section>
);

export default HeroSection;
