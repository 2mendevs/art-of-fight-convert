import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
// WhatsApp brand icon (inline SVG — lucide doesn't ship one)
const WhatsAppIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 0 1 8.413 3.488 11.824 11.824 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
  </svg>
);

const faqs = [
  { q: "What age do I need to start?", a: "We welcome students from age 8 and up. Programs are tailored to your level." },
  { q: "Are there any requirements?", a: "No prior experience required — just commitment and the willingness to learn." },
  { q: "Can I try a class for free?", a: "Yes, your first trial class is on us. Book through the enquiry form." },
  { q: "What equipment do I need?", a: "Just comfortable training gear to start. We'll guide you on gloves and gear later." },
  { q: "Where is the academy located?", a: "We're based in Chennai, Tamil Nadu. Full address shared on enquiry." },
];

const ContactSection = () => (
  <section id="contact" className="py-16 md:py-24">
    <div className="container">
      <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-2 text-center">Contact</p>
      <h2 className="font-display text-4xl md:text-5xl text-foreground text-center mb-10">
        Get in Touch
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* LEFT: WhatsApp button + Enquiry Form */}
        <div className="space-y-4">
          <a
            href="https://wa.me/910000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full bg-[hsl(142,70%,40%)] hover:bg-[hsl(142,70%,35%)] text-white font-semibold uppercase tracking-wide text-sm rounded-md py-3 transition-colors"
          >
            <WhatsAppIcon size={18} /> Chat on WhatsApp
          </a>

          <div className="bg-card border border-border rounded-lg p-6 space-y-4">
            <h3 className="font-display text-2xl text-foreground">Enquiry Form</h3>
            <input type="text" placeholder="Name" className="w-full bg-muted border border-border rounded px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary" />
            <input type="tel" placeholder="Phone Number" className="w-full bg-muted border border-border rounded px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary" />
            <textarea placeholder="Message" rows={4} className="w-full bg-muted border border-border rounded px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary resize-none" />
            <Button className="w-full font-semibold uppercase tracking-wide">Submit</Button>
          </div>
        </div>

        {/* RIGHT: FAQ */}
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
      </div>

    </div>
  </section>
);

export default ContactSection;
