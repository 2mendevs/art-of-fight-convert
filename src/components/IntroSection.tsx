const IntroSection = () => (
  <section id="about" className="pt-16 pb-6 md:pt-24 md:pb-8 bg-card/50">
    <div className="container">
      <p className="text-primary text-xs font-semibold uppercase tracking-widest mb-6">
        AOF Intro Section
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left: intro wordings */}
        <div className="space-y-4">
          <h2 className="font-display text-3xl md:text-5xl text-foreground leading-tight">
            Welcome to the <span className="text-primary">AOF Family</span>
          </h2>
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
            Train with proven coaches and a system built for real fighters. Join the family today.
          </p>
        </div>

        {/* Right: video */}
        <div className="relative aspect-video rounded-xl overflow-hidden bg-muted">
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
      </div>
    </div>
  </section>
);

export default IntroSection;
