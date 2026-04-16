import { Shield, Users, Trophy } from "lucide-react";

const indicators = [
  { icon: Shield, title: "Tamil Team", desc: "Lorem ipsum dolor sit" },
  { icon: Users, title: "300+ Fighters Trained", desc: "Lorem ipsum dolor sit" },
  { icon: Trophy, title: "Proven System & Methodology", desc: "Lorem ipsum dolor sit" },
];

const TrustIndicators = () => (
  <div className="flex items-center justify-between w-full">
    {indicators.map((item) => (
      <div key={item.title} className="flex items-center gap-2">
        <item.icon className="w-4 h-4 text-primary-foreground shrink-0" />
        <span className="font-display text-xs md:text-sm text-primary-foreground tracking-wider">{item.title}</span>
      </div>
    ))}
  </div>
);

export default TrustIndicators;
