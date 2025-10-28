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
        <AccordionItem key={id} value={`item-${id}`}>
          <AccordionTrigger className={"dm-serif-text-regular text-lg md:text-2xl"}>{titulo}</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <p className= " text-start text-md md:text-xl" >{resposta}</p>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default PerguntasFAQSection;
