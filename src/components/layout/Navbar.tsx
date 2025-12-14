import { siteConfig, navLinks } from "@/lib/data";
import { cn } from "@/lib/utils";
export function Navbar() {
  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50",
        "bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="text-xl font-bold text-zinc-900 dark:text-white">
            {siteConfig.name}
          </a>
          <div className="hidden sm:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}