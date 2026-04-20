import { Star, User, Users } from "lucide-react";

const CoachSection = () => (
  <section id="coaches" className="py-6 md:py-8">
    <div className="container max-w-6xl space-y-4">
      {/* ---------- LED BY ---------- */}
      <div>
        <p className="text-primary text-xs md:text-sm font-semibold uppercase tracking-widest mb-4">
          Led By
        </p>
        <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-start">
          {/* Coach photo — same size as team image */}
          <div className="w-full md:w-[180px] shrink-0">
            <div className="aspect-[4/5] rounded-xl bg-muted/30 flex items-center justify-center">
              <User className="w-12 h-12 text-muted-foreground/50" />
            </div>
          </div>

          {/* Right side: name + paragraph + bullets */}
          <div className="flex-1 space-y-3">
            <div>
              <h2 className="font-display text-3xl md:text-5xl text-foreground leading-tight">
                Coach Name
              </h2>
              <p className="text-muted-foreground text-sm mt-1">Head Coach</p>
            </div>

            <p className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <ul className="space-y-2">
              <li className="flex items-start gap-3 text-foreground text-sm md:text-base">
                <Star className="w-4 h-4 text-primary shrink-0 mt-1" /> 00+ Years of professional fighting experience
              </li>
              <li className="flex items-start gap-3 text-foreground text-sm md:text-base">
                <Star className="w-4 h-4 text-primary shrink-0 mt-1" /> Trained 0,000+ fighters across all levels
              </li>
              <li className="flex items-start gap-3 text-foreground text-sm md:text-base">
                <Star className="w-4 h-4 text-primary shrink-0 mt-1" /> Coached 00 national & state champions
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* ---------- AND A TEAM ---------- */}
      <div>
        <p className="text-primary text-xs md:text-sm font-semibold uppercase tracking-widest mb-4 md:text-right">
          And A Team
        </p>
        <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-start">
          {/* Bullets on the LEFT */}
          <div className="flex-1 order-2 md:order-1 flex md:justify-end">
            <div className="max-w-md space-y-3">
              <div>
                <h2 className="font-display text-3xl md:text-5xl text-foreground leading-tight">
                  Team Name
                </h2>
                <p className="text-muted-foreground text-sm mt-1">Assistant Coaches</p>
              </div>

              <p className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
              </p>

              <ul className="space-y-2">
                <li className="flex items-start gap-3 text-foreground text-sm md:text-base">
                  <Star className="w-4 h-4 text-primary shrink-0 mt-1" /> Specialised assistant coaches across striking, grappling and conditioning
                </li>
                <li className="flex items-start gap-3 text-foreground text-sm md:text-base">
                  <Star className="w-4 h-4 text-primary shrink-0 mt-1" /> National & state-level competition experience
                </li>
                <li className="flex items-start gap-3 text-foreground text-sm md:text-base">
                  <Star className="w-4 h-4 text-primary shrink-0 mt-1" /> Hands-on mentorship for every student, every session
                </li>
              </ul>
            </div>
          </div>

          {/* Team photo on the RIGHT */}
          <div className="w-full md:w-[180px] shrink-0 order-1 md:order-2">
            <div className="aspect-[4/5] rounded-xl bg-muted/30 flex items-center justify-center">
              <Users className="w-12 h-12 text-muted-foreground/50" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default CoachSection;
