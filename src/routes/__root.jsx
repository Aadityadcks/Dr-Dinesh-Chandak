import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner.jsx";
import { GlobalNav } from "@/components/GlobalNav.jsx";
import { Footer } from "@/components/Footer.jsx";
import { FloatingCTA } from "@/components/FloatingCTA.jsx";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[color:var(--canvas)] px-4">
      <div className="max-w-md text-center">
        <h1 className="text-[8rem] font-bold" style={{ color: "var(--brand)" }}>404</h1>
        <h2 className="mt-4 text-[2rem] font-semibold">Page not found</h2>
        <p className="mt-2 text-[1.5rem] text-[color:var(--ink-soft)]">
          The page you're looking for doesn't exist.
        </p>
        <div className="mt-6">
          <Link to="/" className="btn-pill btn-primary">Go home</Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center bg-[color:var(--canvas)] px-4">
      <div className="max-w-md text-center">
        <h1 className="text-[2rem] font-semibold">This page didn't load</h1>
        <p className="mt-2 text-[1.5rem] text-[color:var(--ink-soft)]">
          Something went wrong. Please try again.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="btn-pill btn-primary"
          >Try again</button>
          <a href="/" className="btn-pill btn-outline">Go home</a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Khushi Child Care Clinic — Pediatrician in Jagatpura, Jaipur" },
      { name: "description", content: "Trusted pediatric care, newborn check-ups, and vaccinations in Jagatpura, Jaipur by Dr. Dinesh Chandak." },
      { property: "og:site_name", content: "Khushi Child Care Clinic" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Lora:ital,wght@0,500;0,600;1,500&display=swap" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MedicalBusiness",
          name: "Khushi Child Care Clinic",
          description: "Pediatric clinic led by Dr. Dinesh Chandak in Jagatpura, Jaipur.",
          telephone: "+91-70145-79689",
          address: {
            "@type": "PostalAddress",
            streetAddress: "B-1, Mahal Yojana, Near Kalyan Hospital, Jagatpura",
            addressLocality: "Jaipur",
            postalCode: "302017",
            addressRegion: "RJ",
            addressCountry: "IN",
          },
          openingHours: "Mo-Sa 10:00-21:00",
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalNav />
      <main className="pt-[64px] md:pt-[83px] lg:pt-[99px]">
        <Outlet />
      </main>
      <Footer />
      <FloatingCTA />
      <Toaster />
    </QueryClientProvider>
  );
}
