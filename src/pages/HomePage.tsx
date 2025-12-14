import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/landing/Hero";
import { WorkShowcase } from "@/components/landing/WorkShowcase";
import { Services } from "@/components/landing/Services";
import { Contact } from "@/components/landing/Contact";
import { Footer } from "@/components/layout/Footer";
import { Toaster } from "@/components/ui/sonner";
import { ThemeToggle } from "@/components/ThemeToggle";
export function HomePage() {
  return (
    <div className="bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white">
      <ThemeToggle className="fixed top-4 right-4" />
      <Navbar />
      <main>
        <Hero />
        <WorkShowcase />
        <Services />
        <Contact />
      </main>
      <Footer />
      <Toaster richColors closeButton />
    </div>
  );
}