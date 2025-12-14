import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white dark:bg-zinc-900 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-mesh opacity-20 dark:opacity-10"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-zinc-900 dark:text-white text-balance">
            Design, <br />
            Perfected.
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-zinc-600 dark:text-zinc-300 text-balance">
            We are a minimalist design studio that creates elegant and effective digital experiences for visionary brands.
          </p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
            className="mt-10"
          >
            <Button asChild size="lg" className="group bg-zinc-900 text-white hover:bg-zinc-700 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200 transition-all duration-300">
              <a href="#contact">
                Start a Project
                <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}