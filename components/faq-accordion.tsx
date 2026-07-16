import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
type FAQLike = { question: string; answer: string };

export function FAQAccordion({ faqs, idPrefix = "faq" }: { faqs: FAQLike[]; idPrefix?: string }) {
  return (
    <Accordion className="divide-y divide-border rounded-2xl border border-border bg-card px-5">
      {faqs.map((faq, i) => (
        <AccordionItem key={`${idPrefix}-${i}`} value={`${idPrefix}-${i}`}>
          <AccordionTrigger className="py-4 text-base font-semibold text-foreground">
            {faq.question}
          </AccordionTrigger>
          <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
            {faq.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
