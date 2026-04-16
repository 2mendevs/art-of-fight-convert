import { Play } from "lucide-react";

const portraits = [1, 2, 3];
const landscapes = [1, 2, 3, 4, 5];

const SocialProofSection = () => (
  <section className="py-16 md:py-24 bg-card/50">
    <div className="container">
      <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-2 text-center">
        Social Proof
      </p>
      <h2 className="font-display text-4xl md:text-5xl text-foreground text-center mb-10">
        See Us in Action
      </h2>

      {/* 3 Portrait autoplay videos */}
      <div className="grid grid-cols-3 gap-4 max-w-4xl mx-auto mb-8">
        {portraits.map((v) => (
          <div key={v} className="relative aspect-[9/16] bg-muted rounded-lg overflow-hidden group cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-b from-background/30 to-transparent group-hover:from-background/10 transition-colors z-10" />
            <div className="absolute inset-0 flex items-center justify-center z-20">
              <div className="w-12 h-12 rounded-full bg-primary/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Play className="w-5 h-5 text-primary-foreground ml-0.5" fill="currentColor" />
              </div>
            </div>
            <div className="w-full h-full bg-gradient-to-br from-muted to-card" />
          </div>
        ))}
      </div>

      {/* 5 Landscape photo thumbnails → YouTube links */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 max-w-5xl mx-auto">
        {landscapes.map((v) => (
          <a
            key={v}
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="relative aspect-video bg-muted rounded-lg overflow-hidden group cursor-pointer block"
          >
            <div className="absolute inset-0 bg-background/20 group-hover:bg-background/5 transition-colors z-10" />
            <div className="absolute inset-0 flex items-center justify-center z-20">
              <Play className="w-6 h-6 text-primary-foreground opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all" fill="currentColor" />
            </div>
            <div className="w-full h-full bg-gradient-to-br from-muted to-card" />
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default SocialProofSection;
