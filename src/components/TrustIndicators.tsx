import { Shield, Users, Trophy } from "lucide-react";

const indicators = [
  { icon: Shield, title: "Tamil Team", desc: "Lorem ipsum dolor sit" },
  { icon: Users, title: "300+ Fighters Trained", desc: "Lorem ipsum dolor sit" },
  { icon: Trophy, title: "Proven System & Methodology", desc: "Lorem ipsum dolor sit" },
];

const TrustIndicators = () => (
  <section className="py-2 bg-primary">
    <div className="container max-w-3xl">
      <div className="grid grid-cols-3 gap-4 text-center">
        {indicators.map((item) => (
          <div key={item.title} className="flex items-center justify-center gap-2">
            <item.icon className="w-4 h-4 text-primary-foreground" />
            <span className="font-display text-sm text-primary-foreground tracking-wider">{item.title}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TrustIndicators;
