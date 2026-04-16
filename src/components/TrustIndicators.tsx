import { Shield, Users, Trophy } from "lucide-react";

const indicators = [
  { icon: Shield, title: "Tamil Team", desc: "Lorem ipsum dolor sit" },
  { icon: Users, title: "300+ Fighters Trained", desc: "Lorem ipsum dolor sit" },
  { icon: Trophy, title: "Proven System & Methodology", desc: "Lorem ipsum dolor sit" },
];

const TrustIndicators = () => (
<div className="py-3 bg-primary rounded-md mt-6">
    <div className="px-4">
      <div className="grid grid-cols-3 gap-4 text-center">
        {indicators.map((item) => (
          <div key={item.title} className="flex items-center justify-center gap-2">
            <item.icon className="w-4 h-4 text-primary-foreground" />
            <span className="font-display text-sm text-primary-foreground tracking-wider">{item.title}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default TrustIndicators;
