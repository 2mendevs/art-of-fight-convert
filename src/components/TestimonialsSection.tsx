import { Star, ChevronLeft, ChevronRight, User } from "lucide-react";
import { useState } from "react";

const testimonials = [
  { name: "Syde", role: "Member", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Excepteur sint occaecat cupidatat." },
  { name: "Seity", role: "Member", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam." },
  { name: "Rolen", role: "Member", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor." },
];

const TestimonialsSection = () => {
  const [active, setActive] = useState(0);

  return (
    <section id="testimonials" className="py-16 md:py-24">
      <div className="container">
        <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-2 text-center">Testimonials</p>
        <h2 className="font-display text-4xl md:text-5xl text-foreground text-center mb-10">
          What People Say
        </h2>

        {/* Mobile: carousel, Desktop: grid */}
        <div className="hidden md:grid grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t) => (
            <TestimonialCard key={t.name} {...t} />
          ))}
        </div>

        <div className="md:hidden max-w-sm mx-auto">
          <TestimonialCard {...testimonials[active]} />
          <div className="flex justify-center gap-4 mt-6">
            <button onClick={() => setActive((p) => (p - 1 + testimonials.length) % testimonials.length)} className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary">
              <ChevronLeft size={20} />
            </button>
            <button onClick={() => setActive((p) => (p + 1) % testimonials.length)} className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const TestimonialCard = ({ name, role, text }: { name: string; role: string; text: string }) => (
  <div className="bg-card border border-border rounded-lg p-6 space-y-4">
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="w-4 h-4 text-primary fill-primary" />
      ))}
    </div>
    <p className="text-muted-foreground text-sm leading-relaxed italic">"{text}"</p>
    <div className="flex items-center gap-3 pt-2">
      <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
        <User className="w-5 h-5 text-muted-foreground" />
      </div>
      <div>
        <p className="text-foreground font-semibold text-sm">{name}</p>
        <p className="text-muted-foreground text-xs">{role}</p>
      </div>
    </div>
  </div>
);

export default TestimonialsSection;
