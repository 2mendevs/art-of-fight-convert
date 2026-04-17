import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const portraits = [1, 2, 3];
const landscapes = [1, 2, 3, 4, 5];

const SocialProofSection = () => (
  <section className="py-16 md:py-24 bg-card/50">
    <div className="container">
      {/* Header block (matches reference) */}
      <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
        <h2 className="font-display text-3xl md:text-5xl text-foreground">
          Watch <span className="text-primary">AOF in Action</span>
        </h2>
        <p className="text-muted-foreground text-sm md:text-base">
          Subscribe on YouTube and join 5,000+ MMA enthusiasts on Instagram for weekly tips, training, and pad work.
        </p>
        <div className="pt-1">
          <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-full">
            Follow AOF
          </Button>
        </div>
      </div>

      {/* 3 portrait autoplay videos */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {portraits.map((v) => (
          <div
            key={v}
            className="relative bg-muted rounded-lg overflow-hidden group"
            style={{ width: '180px', aspectRatio: '9/16' }}
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            >
              {/* placeholder – no source yet */}
            </video>
            <div className="absolute inset-0 bg-gradient-to-br from-muted to-card" />
            <div className="absolute bottom-2 left-2 right-2 text-[10px] text-foreground/80 uppercase tracking-wider">
              Reel {v}
            </div>
          </div>
        ))}
      </div>

      {/* 5 landscape photos as YouTube buttons */}
      <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-3 gap-3">
        {landscapes.map((v, i) => (
          <a
            key={v}
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className={`relative aspect-video bg-muted rounded-lg overflow-hidden group cursor-pointer block ${
              i === 3 ? 'sm:col-start-1' : ''
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-muted to-card" />
            <div className="absolute inset-0 bg-background/30 group-hover:bg-background/10 transition-colors z-10" />
            <div className="absolute inset-0 flex items-center justify-center z-20">
              <div className="w-10 h-10 rounded-full bg-primary/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Play className="w-4 h-4 text-primary-foreground ml-0.5" fill="currentColor" />
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default SocialProofSection;
