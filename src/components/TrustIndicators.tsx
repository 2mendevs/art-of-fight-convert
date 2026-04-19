import { ShieldCheck, Users, Trophy } from "lucide-react";

const indicators = [
  { icon: ShieldCheck, title: "Proven System" },
  { icon: Users, title: "Tamil Team" },
  { icon: Trophy, title: "Real Results" },
];

const TrustIndicators = () => (
  <div className="grid grid-cols-3 w-full gap-4 md:gap-6 rounded-xl border border-primary/40 bg-primary/10 backdrop-blur-sm p-4 md:p-6 shadow-[0_0_24px_-12px_hsl(var(--primary)/0.5)]">
    {indicators.map((item) => (
      <div key={item.title} className="flex flex-col items-center gap-3 text-center">
        <div className="w-14 h-14 rounded-full bg-primary/25 ring-1 ring-primary/40 flex items-center justify-center">
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
