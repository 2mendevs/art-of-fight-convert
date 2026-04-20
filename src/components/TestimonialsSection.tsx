import { Star, ChevronLeft, ChevronRight, User } from "lucide-react";
import { useState, useEffect } from "react";

const testimonials = [
  { name: "Syde", role: "Member", text: "AOF transformed how I train — discipline, technique, and family vibe all in one." },
  { name: "Seity", role: "Member", text: "The coaches actually care. I've gained real skill and real confidence." },
  { name: "Rolen", role: "Member", text: "Best decision I made this year. The 30-day program is no joke — results are real." },
  { name: "Karthik", role: "Fighter", text: "From beginner to ring-ready in months. The system works." },
  { name: "Arjun", role: "Member", text: "Pad work, sparring, conditioning — every session pushes you to level up." },
];

const VISIBLE = 3;

const TestimonialsSection = () => {
  const [start, setStart] = useState(0);
  const [paused, setPaused] = useState(false);

  // autoplay loop
  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setStart((s) => (s + 1) % testimonials.length), 3500);
    return () => clearInterval(id);
  }, [paused]);

  const next = () => setStart((s) => (s + 1) % testimonials.length);
  const prev = () => setStart((s) => (s - 1 + testimonials.length) % testimonials.length);

  const visible = Array.from({ length: VISIBLE }, (_, i) => testimonials[(start + i) % testimonials.length]);

  return (
    <section id="testimonials" className="py-16 md:py-24 texture-dots">
      <div className="container max-w-6xl">
        {/* Centered title */}
        <div className="text-center mb-12">
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-2">
            Testimonials
          </p>
          <h2 className="font-display text-3xl md:text-5xl text-foreground leading-tight">
            What People Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left: Video — pushed slightly left */}
          <div className="relative aspect-video rounded-xl overflow-hidden bg-muted max-w-md w-full mx-auto md:mx-0 md:-ml-4 lg:-ml-8">
            <div className="absolute inset-0 bg-gradient-to-br from-muted to-card" />
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <div className="w-14 h-14 rounded-full bg-primary/90 flex items-center justify-center cursor-pointer hover:bg-primary transition-colors">
                <div
                  className="w-0 h-0 border-t-[8px] border-b-[8px] border-t-transparent border-b-transparent ml-1"
                  style={{ borderLeftWidth: '14px', borderLeftColor: 'hsl(var(--primary-foreground))' }}
                />
              </div>
            </div>
          </div>

          {/* Right: tilted feedback loop — pushed slightly right */}
          <div
            className="space-y-6 md:pl-8 lg:pl-16"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >

            <div className="relative space-y-3 py-2 max-w-sm mx-auto md:max-w-none md:mx-0">
              {visible.map((t, i) => (
                <div
                  key={`${t.name}-${start}-${i}`}
                  className="bg-card border border-border rounded-lg p-4 shadow-lg transition-transform md:[transform:rotate(-6deg)_translateX(var(--tx))]"
                  style={{ ['--tx' as any]: `${i * 18 - 40}px` }}
                >
                  <div className="flex gap-1 mb-2">
                    {[...Array(5)].map((_, s) => (
                      <Star key={s} className="w-3 h-3 text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground text-xs md:text-sm leading-relaxed italic mb-2">
                    "{t.text}"
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-muted flex items-center justify-center">
                      <User className="w-3.5 h-3.5 text-muted-foreground" />
                    </div>
                    <div>
                      <p className="text-foreground font-semibold text-xs">{t.name}</p>
                      <p className="text-muted-foreground text-[10px]">{t.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-3 pt-2 justify-center md:justify-start">
              <button onClick={prev} aria-label="Previous" className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors">
                <ChevronLeft size={18} />
              </button>
              <button onClick={next} aria-label="Next" className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors">
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
