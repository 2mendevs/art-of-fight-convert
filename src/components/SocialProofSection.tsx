import { useState } from "react";
import { Play, ChevronLeft, ChevronRight } from "lucide-react";

const shorts = [1, 2, 3];
const thumbs = [1, 2, 3, 4, 5, 6];
const VISIBLE = 3;

const SocialProofSection = () => {
  const [start, setStart] = useState(0);

  const next = () => setStart((s) => (s + 1) % thumbs.length);
  const prev = () => setStart((s) => (s - 1 + thumbs.length) % thumbs.length);

  // build a rotated array so we can show 3 in loop
  const visible = Array.from({ length: VISIBLE }, (_, i) => thumbs[(start + i) % thumbs.length]);

  return (
    <section className="py-12 md:py-16 bg-card/50 w-full">
      <div className="w-[60%] mx-auto px-4">
        <div className="text-center max-w-xl mx-auto mb-8 space-y-2">
          <h2 className="font-display text-2xl md:text-4xl text-foreground">
            See Us in <span className="text-primary">Action</span>
          </h2>
          <p className="text-muted-foreground text-xs md:text-sm">
            Subscribe on YouTube and join 5,000+ MMA enthusiasts on Instagram for weekly tips, training, and pad work.
          </p>
        </div>

        {/* Row 1: 3 portrait shorts (autoplay) */}
        <div className="flex justify-between items-center w-full mb-8">
          {shorts.map((v) => (
            <div
              key={v}
              className="relative bg-muted rounded-lg overflow-hidden group aspect-[9/16] w-[28%] max-w-[260px]"
            >
              <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-br from-muted to-card" />
              <div className="absolute bottom-2 left-2 right-2 text-[10px] text-foreground/80 uppercase tracking-wider">
                Short {v}
              </div>
            </div>
          ))}
        </div>

        {/* Row 2: thumbnail carousel — 6 total, only 3 visible, loop, side arrows */}
        <div className="w-full">
          <div className="flex items-center gap-3 md:gap-4 w-full">
            <button
              onClick={prev}
              aria-label="Previous"
              className="shrink-0 w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
            >
              <ChevronLeft size={20} />
            </button>

            <div className="flex justify-between items-center flex-1">
              {visible.map((v) => (
                <a
                  key={`${v}-${start}`}
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative aspect-video bg-muted rounded-xl overflow-hidden group block w-[31%] max-w-[420px]"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-muted to-card" />
                  <div className="absolute inset-0 bg-background/30 group-hover:bg-background/10 transition-colors z-10" />
                  <div className="absolute inset-0 flex items-center justify-center z-20">
                    <div className="w-10 h-10 rounded-full bg-primary/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play className="w-4 h-4 text-primary-foreground ml-0.5" fill="currentColor" />
                    </div>
                  </div>
                  <div className="absolute bottom-2 left-2 text-[10px] text-foreground/80 uppercase tracking-wider z-20">
                    Thumb {v}
                  </div>
                </a>
              ))}
            </div>

            <button
              onClick={next}
              aria-label="Next"
              className="shrink-0 w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
