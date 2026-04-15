import { Instagram, Youtube, Phone } from "lucide-react";

const Footer = () => (
  <footer className="py-8 border-t border-border">
    <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="text-center md:text-left">
        <p className="font-display text-xl text-primary">AOF</p>
        <p className="text-muted-foreground text-xs">+91 0000000000 | www.example.com</p>
      </div>
      <div className="flex items-center gap-4">
        <a href="#" className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors">
          <Instagram size={16} />
        </a>
        <a href="#" className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors">
          <Youtube size={16} />
        </a>
        <a href="#" className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors">
          <Phone size={16} />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
