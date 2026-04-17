import { Calendar, Users, Trophy, ShieldCheck, Star, User } from "lucide-react";

const CoachSection = () => (
  <section id="coaches" className="py-16 md:py-24">
    <div className="container space-y-10">
      {/* ---------- LED BY ---------- */}
      <div>
        <p className="text-primary text-xs md:text-sm font-semibold uppercase tracking-widest mb-3">
          Led By
        </p>
        <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-center md:items-stretch">
          {/* Coach photo — borderless, blends with bg */}
          <div className="w-full md:w-[260px] shrink-0">
            <div className="aspect-[4/3] rounded-xl bg-muted/40 flex items-center justify-center">
              <User className="w-16 h-16 text-muted-foreground/60" />
            </div>
          </div>

          {/* Achievements */}
          <div className="flex-1 space-y-4">
            <div>
              <p className="text-muted-foreground text-sm">Head Coach</p>
              <h2 className="font-display text-3xl md:text-5xl text-foreground leading-tight">
                Lorem Ipsum
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Achievement icon={<Calendar className="w-4 h-4 text-primary" />} value="00+" label="Years Experience" />
              <Achievement icon={<Users className="w-4 h-4 text-primary" />} value="0,000+ Fighters" label="Trained" />
              <Achievement icon={<Trophy className="w-4 h-4 text-primary" />} value="00 Champions" label="Coached" />
              <Achievement icon={<ShieldCheck className="w-4 h-4 text-primary" />} value="Lorem Ipsum System" label="Methodology" />
            </div>
          </div>
        </div>
      </div>

      {/* ---------- AND A TEAM ---------- */}
      <div>
        <p className="text-primary text-xs md:text-sm font-semibold uppercase tracking-widest mb-3">
          And A Team
        </p>
        <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-center md:items-stretch">
          {/* Team photo — smaller, borderless */}
          <div className="w-full md:w-[160px] shrink-0">
            <div className="aspect-[4/5] rounded-xl bg-muted/40 flex items-center justify-center">
              <Users className="w-10 h-10 text-muted-foreground/60" />
            </div>
          </div>

          {/* Team achievements */}
          <div className="flex-1 space-y-3">
            <h3 className="font-display text-2xl md:text-3xl text-foreground">
              Coaching Team
            </h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-muted-foreground text-sm">
                <Star className="w-4 h-4 text-primary shrink-0 mt-0.5" /> Specialised assistant coaches across striking, grappling and conditioning
              </li>
              <li className="flex items-start gap-2 text-muted-foreground text-sm">
                <Star className="w-4 h-4 text-primary shrink-0 mt-0.5" /> National & state-level competition experience
              </li>
              <li className="flex items-start gap-2 text-muted-foreground text-sm">
                <Star className="w-4 h-4 text-primary shrink-0 mt-0.5" /> Hands-on mentorship for every student, every session
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Achievement = ({ icon, value, label }: { icon: React.ReactNode; value: string; label: string }) => (
  <div className="flex items-center gap-3">
    <div className="w-9 h-9 rounded-full bg-primary/15 flex items-center justify-center shrink-0">
      {icon}
    </div>
    <div>
      <p className="font-bold text-foreground text-sm md:text-base leading-tight">{value}</p>
      <p className="text-muted-foreground text-xs">{label}</p>
    </div>
  </div>
);

export default CoachSection;
