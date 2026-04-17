const IntroSection = () => (
  <section id="about" className="py-16 md:py-24">
    <div className="container flex justify-center">
      {/* Whole section constrained to ~6cm wide */}
      <div className="w-full" style={{ maxWidth: '227px' }}>
        <p className="text-primary text-[10px] font-semibold uppercase tracking-widest mb-2 text-left">
          Introduction to AOF
        </p>
        <div className="grid grid-cols-2 gap-3 items-center">
          {/* Left: captions */}
          <div className="space-y-2">
            <h2 className="font-display text-sm text-foreground leading-tight">
              Welcome to the AOF Family
            </h2>
            <p className="text-muted-foreground text-[9px] leading-snug">
              Train with proven coaches and a system built for real fighters. Join the family today.
            </p>
          </div>

          {/* Right: video */}
          <div className="relative aspect-video rounded-md overflow-hidden bg-muted">
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <div className="w-7 h-7 rounded-full bg-primary/90 flex items-center justify-center cursor-pointer hover:bg-primary transition-colors">
                <div
                  className="w-0 h-0 border-t-[4px] border-b-[4px] border-t-transparent border-b-transparent ml-0.5"
                  style={{ borderLeftWidth: '7px', borderLeftColor: 'hsl(var(--primary-foreground))' }}
                />
              </div>
            </div>
            <div className="w-full h-full bg-gradient-to-br from-muted to-card" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default IntroSection;
