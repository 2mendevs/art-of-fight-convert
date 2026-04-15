import { User } from "lucide-react";

const coaches = [
  { name: "Head Coach", role: "Head Coach", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { name: "Striking Specialist", role: "Muay Thai", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { name: "Grappling Instructor", role: "Instructor", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
];

const CoachSection = () => (
  <section id="coaches" className="py-16 md:py-24">
    <div className="container">
      <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-2 text-center">
        Coach and Team
      </p>
      <h2 className="font-display text-4xl md:text-5xl text-foreground text-center mb-12">
        Our Expert Team
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {coaches.map((c) => (
          <div key={c.name} className="bg-card border border-border rounded-lg p-6 text-center space-y-4 hover:border-primary/40 transition-colors">
            <div className="w-20 h-20 rounded-full bg-muted mx-auto flex items-center justify-center">
              <User className="w-10 h-10 text-muted-foreground" />
            </div>
            <h3 className="font-display text-2xl text-foreground">{c.name}</h3>
            <p className="text-primary text-sm font-medium">{c.role}</p>
            <p className="text-muted-foreground text-sm leading-relaxed">{c.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default CoachSection;
