const IntroSection = () => (
  <section id="about" className="py-16 md:py-24">
    <div className="container">
      <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-2 text-center">
        Introduction to AOF
      </p>
      <div className="max-w-3xl mx-auto space-y-8">
        <h2 className="font-display text-4xl md:text-5xl text-foreground text-center">
          Welcome to the AOF Family
        </h2>
        <p className="text-muted-foreground leading-relaxed text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="relative aspect-video rounded-lg overflow-hidden bg-muted">
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center cursor-pointer hover:bg-primary transition-colors">
              <div
                className="w-0 h-0 border-t-8 border-b-8 border-t-transparent border-b-transparent ml-1"
                style={{ borderLeftWidth: '14px', borderLeftColor: 'hsl(var(--primary-foreground))' }}
              />
            </div>
          </div>
          <div className="w-full h-full bg-gradient-to-br from-muted to-card" />
        </div>
      </div>
    </div>
  </section>
);

export default IntroSection;
