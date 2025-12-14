# Aether Studio - Minimalist Design Agency

[![Deploy to Cloudflare][cloudflarebutton]]

A breathtaking, minimalist portfolio website for a high-end design agency featuring smooth interactions and a monochromatic aesthetic. Aether Studio embodies the principles of 'Minimalist Design' as a stunning single-page scrolling experience (SPA) that showcases premium portfolio work, services, and contact inquiry in an elegant, narrative-driven layout.

## Features

- **Hero Section**: Visually arresting introduction with massive typography, ample whitespace, subtle animated gradient aura, and magnetic call-to-action.
- **Selected Works (Portfolio)**: Masonry or grid layout with high-contrast imagery, hover-revealed metadata, and optional project detail modal.
- **Services & Philosophy**: Text-heavy section with large typography, accordion or list format detailing UI/UX, Branding, and Development services.
- **Contact Form**: Minimalist form with Shadcn UI components, Zod validation, and simulated submission with toast feedback.
- **Smart Navigation**: Sticky glass-morphism header that hides on scroll down and reappears on scroll up.
- **Responsive Design**: Flawless across all devices with mobile-first approach.
- **Smooth Animations**: Subtle fade-in, slide-up effects powered by Framer Motion.
- **Static Data**: Client-side only with hardcoded content for instant performance.

Color palette: `#09090b`, `#ffffff`, `#f4f4f5`.

## Tech Stack

- **Frontend**: React 18, TypeScript, Vite, React Router
- **UI Library**: shadcn/ui (Radix UI primitives), Tailwind CSS v3
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Forms & Validation**: React Hook Form, Zod
- **State Management**: Zustand (minimal UI states)
- **Notifications**: Sonner/Toaster
- **Data Fetching**: TanStack Query (optional)
- **Deployment**: Cloudflare Workers & Pages
- **Other**: clsx, tailwind-merge, class-variance-authority (CVA)

## Quick Start

### Prerequisites

- [Bun](https://bun.sh/) (package manager)
- [Wrangler CLI](https://developers.cloudflare.com/workers/wrangler/install-and-update/) (for Cloudflare deployment)

### Installation

1. Clone the repository:
   ```
   git clone <your-repo-url>
   cd aether-design-studio
   ```

2. Install dependencies:
   ```
   bun install
   ```

3. Start the development server:
   ```
   bun run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) to view it.

## Usage

- **Local Development**: `bun run dev` – Hot-reloads on code changes.
- **Build for Production**: `bun run build` – Outputs to `dist/`.
- **Preview Build**: `bun run preview` – Serves the production build locally.
- **Lint Code**: `bun run lint` – Checks for issues.

The app is a single-page application routed via React Router. All content is static and client-side rendered for optimal performance.

## Development

- **Routing**: Edit routes in `src/main.tsx` using `createBrowserRouter`. Use `<Link>` from `react-router-dom` for navigation.
- **Styling**: Tailwind utilities + shadcn/ui components. Custom theme in `tailwind.config.js` and `src/index.css`.
- **Components**: Import shadcn/ui from `@/components/ui/*`. Add custom components in `src/components/`.
- **Data**: Hardcoded in constants (e.g., `data.ts`). Extend as needed.
- **Animations**: Use Framer Motion for subtle effects (fade-in, slide-up).
- **Forms**: Leverage React Hook Form + Zod for validation.
- **Backend Routes**: Add API endpoints in `worker/userRoutes.ts` (Hono).

**Best Practices**:
- Follow UI non-negotiables: Root wrapper with `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`.
- Ensure responsive design with Tailwind breakpoints.
- Avoid infinite re-render loops (see zero-tolerance rules in codebase).

## Deployment

Deploy to Cloudflare Workers/Pages with one command:

```
bun run deploy
```

This builds the app and deploys via Wrangler. Ensure you're logged in with `wrangler login`.

[![Deploy to Cloudflare][cloudflarebutton]]

**Configuration**:
- Project name and assets handled in `wrangler.jsonc`.
- SPA routing: `not_found_handling: "single-page-application"`.
- API routes: `/api/*` via `worker/index.ts`.

View live deployment metrics in the Cloudflare dashboard.

## License

MIT License – see [LICENSE](LICENSE) for details (or add your own).