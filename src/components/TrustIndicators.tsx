import { ShieldCheck, Users, Trophy } from "lucide-react";

const indicators = [
  { icon: ShieldCheck, title: "Proven System" },
  { icon: Users, title: "Tamil Team" },
  { icon: Trophy, title: "Real Results" },
];

const TrustIndicators = () => (
  <div className="grid grid-cols-3 w-full gap-4 md:gap-6 rounded-xl p-4 md:p-6" style={{ backgroundColor: '#07b4ba' }}>
    {indicators.map((item) => (
      <div key={item.title} className="flex flex-col items-center gap-3 text-center">
        <div className="w-14 h-14 rounded-full bg-white/20 ring-1 ring-white/30 flex items-center justify-center">
          <item.icon className="w-7 h-7 text-white" />
        </div>
        <span className="font-display text-base md:text-lg text-white tracking-wide">
          {item.title}
        </span>
      </div>
    ))}
  </div>
);

export default TrustIndicators;
