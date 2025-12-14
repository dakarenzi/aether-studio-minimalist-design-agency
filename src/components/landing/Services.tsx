import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { services } from "@/lib/data";
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};
export function Services() {
  return (
    <section id="services" className="bg-white dark:bg-zinc-900 py-24 sm:py-32">
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="max-w-xl">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-white">
              Our Philosophy
            </h2>
            <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
              We believe in the power of simplicity. Our approach is rooted in the 'Less is More' philosophy, focusing on clarity, purpose, and elegance to create designs that are both beautiful and functional.
            </p>
          </div>
          <div>
            <Accordion type="single" collapsible className="w-full" defaultValue="item-0">
              {services.map((service, index) => (
                <AccordionItem key={service.title} value={`item-${index}`}>
                  <AccordionTrigger className="text-lg font-medium hover:no-underline text-zinc-800 dark:text-zinc-100">
                    {service.title}
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-zinc-600 dark:text-zinc-400">
                    {service.description}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </motion.div>
    </section>
  );
}