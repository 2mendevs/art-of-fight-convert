import { Button } from "@/components/ui/button";

const services = [
  {
    title: "AOF 30 Days Program",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.",
    cta: "Apply Due — Limited Availability",
  },
  {
    title: "1-on-1 Coaching",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Personalized training sessions.",
    cta: "Book a Session",
  },
];

const ServicesSection = () => (
  <section id="programs" className="pt-4 pb-16 md:pt-6 md:pb-24 bg-card/50">
    <div className="container">
      <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-2 text-center">
        Service Selection
      </p>
      <h2 className="font-display text-4xl md:text-5xl text-foreground text-center mb-10">
        Choose Your Path
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {services.map((s) => (
          <div
            key={s.title}
            className="bg-card border border-border rounded-lg p-8 flex flex-col items-center text-center gap-5 hover:border-primary/50 transition-colors"
          >
            <h3 className="font-display text-3xl text-foreground">{s.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            <Button className="font-semibold uppercase text-xs tracking-wide mt-auto">{s.cta}</Button>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
