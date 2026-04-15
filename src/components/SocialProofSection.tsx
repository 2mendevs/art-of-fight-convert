import { Play } from "lucide-react";

const videos = [1, 2, 3];

const SocialProofSection = () => (
  <section className="py-16 md:py-24 bg-card/50">
    <div className="container">
      <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-2 text-center">
        Social Proof
      </p>
      <h2 className="font-display text-4xl md:text-5xl text-foreground text-center mb-10">
        See Us in Action
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {videos.map((v) => (
          <div key={v} className="relative aspect-video bg-muted rounded-lg overflow-hidden cursor-pointer group">
            <div className="absolute inset-0 bg-gradient-to-br from-background/40 to-transparent group-hover:from-background/20 transition-colors" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-14 h-14 rounded-full bg-primary/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Play className="w-6 h-6 text-primary-foreground ml-1" fill="currentColor" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SocialProofSection;
