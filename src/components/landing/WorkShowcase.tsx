import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { portfolioProjects } from "@/lib/data";
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      staggerChildren: 0.1,
    },
  },
};
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};
export function WorkShowcase() {
  return (
    <section id="work" className="bg-zinc-50 dark:bg-zinc-950 py-24 sm:py-32">
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-white">
            Selected Works
          </h2>
          <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
            A glimpse into our passion for creating impactful digital experiences.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          {portfolioProjects.map((project) => (
            <motion.div key={project.client} variants={itemVariants}>
              <Card className="group overflow-hidden border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm hover:shadow-xl transition-all duration-300">
                <CardContent className="p-0">
                  <div className="overflow-hidden">
                    <img
                      src={project.image}
                      alt={`Showcase for ${project.client}`}
                      className="w-full h-auto object-cover aspect-[4/3] group-hover:scale-105 transition-transform duration-500 ease-in-out"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-baseline">
                      <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">{project.client}</h3>
                      <p className="text-sm text-zinc-500 dark:text-zinc-400">{project.industry}</p>
                    </div>
                    <p className="mt-2 text-base text-zinc-600 dark:text-zinc-300">{project.title}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}