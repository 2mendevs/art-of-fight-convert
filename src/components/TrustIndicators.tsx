import { ShieldCheck, Users, Trophy } from "lucide-react";

const indicators = [
  { icon: ShieldCheck, title: "Proven System" },
  { icon: Users, title: "Tamil Team" },
  { icon: Trophy, title: "Real Results" },
];

const TrustIndicators = () => (
  <div className="grid grid-cols-3 w-full gap-6 bg-primary/15 backdrop-blur-sm rounded-xl py-5 px-4 border border-primary/20">
    {indicators.map((item) => (
      <div key={item.title} className="flex flex-col items-center gap-3 text-center">
        <div className="w-14 h-14 rounded-full bg-primary/15 flex items-center justify-center">
          <item.icon className="w-7 h-7 text-primary" />
        </div>
        <span className="font-display text-base md:text-lg text-foreground tracking-wide">
          {item.title}
        </span>
      </div>
    ))}
  </div>
);

export default TrustIndicators;
