import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const links = ["Home", "Programs", "Coaches", "Testimonials", "Contact", "FAQ"];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container flex items-center justify-between h-16">
        <a href="#" className="font-display text-3xl text-primary tracking-wider">
          A<span className="text-foreground">O</span>F
        </a>
        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
        <ul className="hidden md:flex items-center gap-6 text-sm font-medium">
          {links.map((l) => (
            <li key={l}>
              <a href={`#${l.toLowerCase()}`} className="text-muted-foreground hover:text-primary transition-colors">
                {l}
              </a>
            </li>
          ))}
        </ul>
      </div>
      {open && (
        <div className="md:hidden bg-card border-t border-border">
          <ul className="flex flex-col py-4">
            {links.map((l) => (
              <li key={l}>
                <a
                  href={`#${l.toLowerCase()}`}
                  className="block px-6 py-3 text-muted-foreground hover:text-primary hover:bg-muted/50 transition-colors"
                  onClick={() => setOpen(false)}
                >
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
