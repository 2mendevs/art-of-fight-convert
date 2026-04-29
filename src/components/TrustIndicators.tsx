import { ShieldCheck, Users, Trophy } from "lucide-react";

const indicators = [
  { icon: ShieldCheck, title: "Proven System" },
  { icon: Users, title: "Tamil Team" },
  { icon: Trophy, title: "Real Results" },
];

const TrustIndicators = () => (
  <div
    className="grid grid-cols-3 w-full gap-4 md:gap-6 px-4 md:px-8"
    style={{ backgroundColor: '#07b4ba', height: '1.5cm' }}
  >
    {indicators.map((item) => (
      <div key={item.title} className="flex items-center justify-center gap-3 text-center">
        <item.icon className="w-5 h-5 md:w-6 md:h-6 text-white shrink-0" />
        <span className="font-display text-base md:text-lg text-white tracking-wide whitespace-nowrap">
          {item.title}
        </span>
      </div>
    ))}
  </div>
);

export default TrustIndicators;
