import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "What age do I need to start?", a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { q: "Are there any requirements?", a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { q: "Can I try a class for free?", a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { q: "What equipment do I need?", a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
];

const FAQSection = () => (
  <section id="faq" className="py-16 md:py-24">
    <div className="container max-w-3xl">
      <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-2 text-center">FAQ</p>
      <h2 className="font-display text-4xl md:text-5xl text-foreground text-center mb-10">
        Frequently Asked Questions
      </h2>
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
  </section>
);

export default FAQSection;
