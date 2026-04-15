import { Shield, Users, Trophy } from "lucide-react";

const indicators = [
  { icon: Shield, title: "Tamil Team", desc: "Lorem ipsum dolor sit" },
  { icon: Users, title: "300+ Fighters Trained", desc: "Lorem ipsum dolor sit" },
  { icon: Trophy, title: "Proven System & Methodology", desc: "Lorem ipsum dolor sit" },
];

const TrustIndicators = () => (
  <section className="py-10 bg-secondary">
    <div className="container">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        {indicators.map((item) => (
          <div key={item.title} className="flex flex-col items-center gap-3 py-4">
            <item.icon className="w-10 h-10 text-secondary-foreground" />
            <h3 className="font-display text-xl text-secondary-foreground">{item.title}</h3>
            <p className="text-secondary-foreground/70 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TrustIndicators;
