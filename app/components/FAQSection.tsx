import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "¿Qué es Houxury?",
    a: "Houxury es una gestora de patrimonio y activos inmobiliarios que opera principalmente en España. Transformamos y gestionamos el alquiler de viviendas para que cada hogar esté listo para entrar a vivir desde el primer día, con un diseño de calidad pensado para el día a día.",
  },
  {
    q: "¿En qué nos diferenciamos a una inmobiliaria?",
    a: "No somos una inmobiliaria tradicional. Ofrecemos un servicio integral que incluye rehabilitación, diseño, gestión y mantenimiento. Nos encargamos de todo para que tanto propietarios como inquilinos disfruten de una experiencia premium.",
  },
  {
    q: "¿Qué tipo de estancias ofrecen?",
    a: "Ofrecemos estancias flexibles que se adaptan a tus planes, ya sea por semanas, meses o más tiempo, sin los trámites y preocupaciones que normalmente conlleva mudarse.",
  },
  {
    q: "¿En qué ciudades estáis presentes?",
    a: "Actualmente operamos en Madrid, Barcelona, Toledo, Alicante y Málaga, con planes de expansión a más ciudades españolas.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-24 px-6">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-3xl md:text-5xl font-heading text-center mb-16">
          Preguntas Frecuentes
        </h2>
        <Accordion type="single" collapsible className="space-y-2">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="border-border/50"
            >
              <AccordionTrigger className="font-body text-left text-base hover:text-primary">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground font-body leading-relaxed">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
