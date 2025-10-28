import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { dataFAQ } from "@/data/dataFAQ";

const PerguntasFAQSection = () => {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full"
      defaultValue="item-1"
    >
      {dataFAQ.map(({ id, titulo, resposta }) => (
        <AccordionItem value={`item-${id}`}>
          <AccordionTrigger>{titulo}</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <p>{resposta}</p>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default PerguntasFAQSection;
