const IntroSection = () => (
  <section id="about" className="py-16 md:py-24">
    <div className="container flex flex-col items-center">
      <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-2 text-center">
        Introduction to AOF
      </p>
      <div className="w-full space-y-8" style={{ maxWidth: '227px' }}>
        <h2 className="font-display text-lg md:text-xl text-foreground text-center leading-tight">
          Welcome to the AOF Family
        </h2>
        <p className="text-muted-foreground text-xs leading-relaxed text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="relative aspect-video rounded-lg overflow-hidden bg-muted">
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="w-10 h-10 rounded-full bg-primary/90 flex items-center justify-center cursor-pointer hover:bg-primary transition-colors">
              <div
                className="w-0 h-0 border-t-[6px] border-b-[6px] border-t-transparent border-b-transparent ml-0.5"
                style={{ borderLeftWidth: '10px', borderLeftColor: 'hsl(var(--primary-foreground))' }}
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
