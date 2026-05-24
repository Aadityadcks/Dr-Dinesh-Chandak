
## Khushi Child Care Clinic — Website Plan

A multi-page pediatric clinic website for Dr. Dinesh Chandak in Jagatpura, Jaipur, styled with the Starbucks-inspired design system you provided (warm cream canvas, four-tier green, full-pill buttons, whisper-soft shadows). Adapted for a healthcare-pediatric context: the "Frap" floating CTA becomes a floating "Book Appointment" / call button; "Rewards Gold" accents are reserved for trust badges (10+ years, 5-star).

### Design system foundation

Set up in `src/styles.css` as design tokens (oklch equivalents of the hexes you provided):

- **Greens (four-tier):** Starbucks `#006241`, Accent `#00754A` (CTAs), House `#1E3932` (dark bands/footer), Uplift `#2b5148`
- **Canvas:** Neutral Warm `#f2f0eb` (page bg), Ceramic `#edebe9` (zone separators), White (cards)
- **Accents:** Gold `#cba258` (trust badges only), Red `#c82014` (emergency note)
- **Text:** `rgba(0,0,0,0.87)` on light, `rgba(255,255,255,0.70)` soft on dark
- **Radii:** cards 12px, buttons 50px pill, Frap circle 50%
- **Shadows:** card dual-shadow, nav triple-stack, Frap base+ambient stack
- **Spacing:** rem scale with `1rem=10px` root trick, gutters 16/24/40px
- **Fonts:** Inter (SoDoSans substitute) site-wide with `-0.01em` tracking; Lora as the Lander Tall serif substitute for one or two trust/values headline moments; loaded via Google Fonts
- Universal button active state `scale(0.95)` + 0.2s ease

### Pages & routes (TanStack file-based)

```
src/routes/
  __root.tsx              shell + GlobalNav + Footer + FloatingCTA
  index.tsx               Home
  about.tsx               About Dr. Dinesh & Clinic
  services.tsx            Services hub (anchored sections per service)
  resources.tsx           Patient Resources (blog teasers + FAQ accordion)
  contact.tsx             Contact & Visit Us
```

Each route gets unique `head()` meta (title, description, og:title/description) — no shared boilerplate. Single H1 per page. Semantic HTML. JSON-LD `MedicalBusiness` on Home and Contact.

### Shared components (`src/components/`)

- `GlobalNav` — fixed top bar, KCC logo left, nav links center (Home · About · Services · Resources · Contact), right-side "Call 070145 79689" outlined pill + "Book Appointment" Green Accent filled pill. Three-layer shadow. Progressive heights 64→99px.
- `Footer` — House Green `#1E3932` band, white + soft-white text, clinic address, hours, quick links, "Complete Child Care Unit of Shri Kalyan Hospital" gold badge.
- `FloatingCTA` — Frap-style 56px circular button bottom-right, Green Accent fill, phone icon, `tel:` link, layered shadow stack.
- `PillButton` — variants: primary-filled, primary-outlined, on-dark-filled (white), on-dark-outlined, black-filled. 50px radius, scale(0.95) active.
- `Card` — white, 12px radius, whisper-soft dual shadow.
- `FeatureBand` — full-width House Green section with 40/60 split, white headline + soft-white body + CTA row.
- `ServiceTile` — icon + title + short description, links into Services page anchor.
- `TestimonialCard`, `FAQItem` (accordion with 300ms ease-out), `TrustBadge` (gold outlined pill).

### Page contents

**Home (`/`)**
1. Hero — cream canvas, 60/40 split: headline "Complete, Compassionate Care for Your Little Ones." + sub-headline + two CTAs (Book Online filled / Call Now outlined) | photo of Dr. Chandak (uploaded image 1)
2. Core Promise strip — Ceramic band: "Complete Child Care Unit of Shri Kalyan Hospital"
3. Brief intro paragraph centered, max-width
4. Quick Service Grid — 4 white cards: Vaccination, Newborn Care, Growth & Development, Day Care & Nebulisation
5. Why Choose Us — House Green feature band, 3-up: 10+ Years (gold trust pill), 5.0-star (gold), child-friendly environment
6. Testimonials — horizontal scroll of Google review cards
7. Map preview + address with Book CTA

**About (`/about`)**
- Doctor bio with headshot (uploaded image 1), credentials, 10+ years experience
- Philosophy block in Lora serif headline "First, give the proper treatment to the child."
- Clinic gallery (uploaded images 2, 3) — 12px rounded photo cards on cream canvas

**Services (`/services`)**
- Intro band
- Five anchored sections (#vaccination, #newborn, #growth, #nutrition, #daycare) each with icon, description, bullet list, and Book CTA
- House Green CTA band at bottom

**Resources (`/resources`)**
- 3 blog teaser cards (RSV, Seasonal Allergies in Jagatpura, Vaccinations) — placeholder articles
- FAQ accordion (3+ questions from your spec)

**Contact (`/contact`)**
- Embedded Google Map iframe pinned to Akshay Patra Chouraha, Jagatpura
- Address + landmark, phone (click-to-call), hours
- Contact form (Name, Phone, Child's Age, Message) — client-only (no backend), shows success toast via sonner
- Emergency red-tinted callout card at bottom

### Assets

Copy uploaded photos into `src/assets/`:
- `user-uploads://1.jpg` → `dr-dinesh.jpg` (about + home hero)
- `user-uploads://2.jpg` → `clinic-interior.jpg` (about gallery)
- `user-uploads://3.png` → `clinic-banner.png` (about/home)
- Images 4 and 5 used as reference only (not embedded — they're existing marketing graphics with their own typography)

Service-grid icons via `lucide-react` (Syringe, Baby, TrendingUp, Apple, Stethoscope).

### Out of scope (this pass)

- No backend / Lovable Cloud (no real booking, no form submissions stored — form is presentational + toast)
- No real blog CMS (static teaser cards)
- No authentication

### Technical notes

- Tailwind v4 via `@theme inline` in `src/styles.css`; all colors as oklch tokens, then mapped to semantic Tailwind utilities (`bg-canvas`, `bg-house`, `text-brand`, `bg-accent` etc.)
- Google Fonts (Inter + Lora) imported in `__root.tsx` head links
- `1rem=10px` root via `html { font-size: 62.5% }` then body resets to 1.6rem
- Each route file owns its own `head()` SEO meta; root sets only viewport/charset defaults
- Mobile-first responsive; nav collapses to sheet/drawer below `md`
