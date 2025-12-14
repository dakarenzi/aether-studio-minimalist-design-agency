import { siteConfig } from "@/lib/data";
export function Footer() {
  return (
    <footer className="bg-white dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            Built with ❤️ at Cloudflare
          </p>
        </div>
      </div>
    </footer>
  );
}