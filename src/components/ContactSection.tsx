import { MapPin, Phone } from "lucide-react";
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
              <svg className="w-5 h-5 text-primary shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              <p className="text-muted-foreground text-sm">@Instagram</p>
            </div>
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5 text-primary shrink-0" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
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
