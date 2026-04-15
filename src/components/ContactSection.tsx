import { MapPin, Instagram, Youtube, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => (
  <section id="contact" className="py-16 md:py-24 bg-card/50">
    <div className="container">
      <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-2 text-center">Contact</p>
      <h2 className="font-display text-4xl md:text-5xl text-foreground text-center mb-10">
        Get in Touch
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* Contact Info */}
        <div className="space-y-6">
          <h3 className="font-display text-2xl text-foreground">Contact Us</h3>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-primary mt-0.5 shrink-0" />
              <p className="text-muted-foreground text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit address</p>
            </div>
            <div className="flex items-center gap-3">
              <Instagram className="w-5 h-5 text-primary shrink-0" />
              <p className="text-muted-foreground text-sm">@Instagram</p>
            </div>
            <div className="flex items-center gap-3">
              <Youtube className="w-5 h-5 text-primary shrink-0" />
              <p className="text-muted-foreground text-sm">YouTube AOFAcademy</p>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-primary shrink-0" />
              <p className="text-muted-foreground text-sm">+91 0000000000</p>
            </div>
          </div>
        </div>

        {/* Enquiry Form */}
        <div className="bg-card border border-border rounded-lg p-6 space-y-4">
          <h3 className="font-display text-2xl text-foreground">Enquiry Form</h3>
          <input type="text" placeholder="Name" className="w-full bg-muted border border-border rounded px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary" />
          <input type="email" placeholder="Email" className="w-full bg-muted border border-border rounded px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary" />
          <div className="grid grid-cols-2 gap-3">
            <input type="tel" placeholder="Phone" className="w-full bg-muted border border-border rounded px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary" />
            <input type="text" placeholder="Subject" className="w-full bg-muted border border-border rounded px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary" />
          </div>
          <textarea placeholder="Message" rows={4} className="w-full bg-muted border border-border rounded px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary resize-none" />
          <Button className="w-full font-semibold uppercase tracking-wide">Submit</Button>
        </div>
      </div>
    </div>
  </section>
);

export default ContactSection;
