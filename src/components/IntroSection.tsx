const IntroSection = () => (
  <section id="about" className="py-16 md:py-24">
    <div className="container">
      <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-2">Introduction to AOF</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="space-y-5">
          <h2 className="font-display text-4xl md:text-5xl text-foreground">
            Welcome to the AOF Family
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
        </div>
        <div className="relative aspect-video rounded-lg overflow-hidden bg-muted">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center cursor-pointer hover:bg-primary transition-colors">
              <div className="w-0 h-0 border-t-8 border-b-8 border-l-12 border-t-transparent border-b-transparent border-l-primary-foreground ml-1" 
                style={{ borderLeftWidth: '14px' }} />
            </div>
          </div>
          <div className="w-full h-full bg-gradient-to-br from-muted to-card" />
        </div>
      </div>
    </div>
  </section>
);

export default IntroSection;
