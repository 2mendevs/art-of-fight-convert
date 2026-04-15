import { Calendar, Users, Trophy, ShieldCheck, ChevronRight, Star, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const CoachSection = () => (
  <section id="coaches" className="py-16 md:py-24">
    <div className="container">
      {/* Head Coach */}
      <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-2">
        Led By
      </p>
      <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start mb-16">
        {/* Coach Image Placeholder */}
        <div className="w-full md:w-[320px] shrink-0">
          <div className="aspect-[3/4] rounded-2xl bg-muted border border-border flex items-center justify-center">
            <User className="w-20 h-20 text-muted-foreground" />
          </div>
        </div>

        {/* Coach Info */}
        <div className="flex-1 space-y-6">
          <div>
            <p className="text-muted-foreground text-lg">Head Coach</p>
            <h2 className="font-display text-5xl md:text-6xl text-foreground">Lorem Ipsum</h2>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                <Calendar className="w-5 h-5 text-primary" />
              </div>
              <div>
                <span className="font-bold text-foreground text-xl">00+</span>
                <p className="text-muted-foreground text-sm">Years Experience</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                <Users className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-muted-foreground text-sm">Trained</p>
                <span className="font-bold text-foreground text-xl">0,000+ Fighters</span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                <Trophy className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-muted-foreground text-sm">Coached</p>
                <span className="font-bold text-foreground text-xl">00 Champions</span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5 text-primary" />
              </div>
              <div>
                <span className="font-bold text-foreground text-lg">Lorem Ipsum System</span>
              </div>
            </div>
          </div>

          <Button className="uppercase tracking-wide font-semibold gap-2">
            <ChevronRight className="w-4 h-4" /> Lorem Ipsum CTA
          </Button>
        </div>
      </div>

      {/* Team Section */}
      <div className="flex items-center gap-4 mb-8">
        <h2 className="font-display text-4xl md:text-5xl text-foreground whitespace-nowrap">
          and a <span className="text-primary">Team</span>
        </h2>
        <div className="h-px bg-border flex-1" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
        {[1, 2].map((i) => (
          <div key={i} className="flex flex-col sm:flex-row gap-5 items-start">
            <div className="flex-1 space-y-3">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-primary" />
                <h3 className="font-display text-2xl text-foreground">Lorem Ipsum</h3>
              </div>
              <p className="text-primary text-sm font-medium">Lorem Ipsum & Team</p>
              <ul className="space-y-1">
                <li className="flex items-start gap-2 text-muted-foreground text-sm">
                  <Star className="w-4 h-4 text-primary shrink-0 mt-0.5" /> Lorem ipsum dolor sit amet
                </li>
                <li className="flex items-start gap-2 text-muted-foreground text-sm">
                  <Star className="w-4 h-4 text-primary shrink-0 mt-0.5" /> Consectetur adipiscing elit
                </li>
                <li className="flex items-start gap-2 text-muted-foreground text-sm">
                  <Star className="w-4 h-4 text-primary shrink-0 mt-0.5" /> Sed do eiusmod tempor
                </li>
              </ul>
            </div>
            <div className="w-32 h-40 rounded-xl bg-muted border border-border flex items-center justify-center shrink-0">
              <User className="w-10 h-10 text-muted-foreground" />
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default CoachSection;
