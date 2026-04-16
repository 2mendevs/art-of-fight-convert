import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "What age do I need to start?", a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { q: "Are there any requirements?", a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { q: "Can I try a class for free?", a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { q: "What equipment do I need?", a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
];

const ContactSection = () => (
  <section id="contact" className="py-16 md:py-24 bg-card/50">
    <div className="container">
      <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-2 text-center">Contact</p>
      <h2 className="font-display text-4xl md:text-5xl text-foreground text-center mb-10">
        Get in Touch
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* FAQ */}
        <div className="space-y-4">
          <h3 className="font-display text-2xl text-foreground">Frequently Asked Questions</h3>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="bg-card border border-border rounded-lg px-5">
                <AccordionTrigger className="text-foreground font-medium text-sm hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Enquiry Form */}
        <div className="bg-card border border-border rounded-lg p-6 space-y-4">
          <h3 className="font-display text-2xl text-foreground">Enquiry Form</h3>
          <input type="text" placeholder="Name" className="w-full bg-muted border border-border rounded px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary" />
          <input type="tel" placeholder="Phone Number" className="w-full bg-muted border border-border rounded px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary" />
          <textarea placeholder="Message" rows={4} className="w-full bg-muted border border-border rounded px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary resize-none" />
          <Button className="w-full font-semibold uppercase tracking-wide">Submit</Button>
        </div>
      </div>
    </div>
  </section>
);

export default ContactSection;
