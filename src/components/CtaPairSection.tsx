import { Button } from "@/components/ui/button";

const CtaPairSection = () => (
  <section className="py-10 md:py-14 bg-gradient-to-b from-background via-card/40 to-background border-y border-border/50">
    <div className="container">
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
  </section>
);

export default CtaPairSection;
