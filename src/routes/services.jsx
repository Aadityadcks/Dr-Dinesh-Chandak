import { createFileRoute } from "@tanstack/react-router";
import { Syringe, Baby, TrendingUp, Apple, Stethoscope } from "lucide-react";
import { PillLink, PillAnchor } from "@/components/PillLink.jsx";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Pediatric Services — Vaccinations, Newborn Care, Nebulisation | Khushi Child Care" },
      { name: "description", content: "Complete pediatric services in Jagatpura, Jaipur: child vaccination, newborn follow-up, growth assessment, nutrition counseling, day care and nebulisation." },
      { property: "og:title", content: "Pediatric Services — Khushi Child Care" },
      { property: "og:description", content: "Vaccinations, newborn care, growth assessment, nutrition counseling, and acute pediatric day care." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: Services,
});

const services = [
  {
    id: "vaccination", icon: Syringe, title: "Child Vaccination",
    desc: "Comprehensive immunization schedules from birth through adolescence — including routine, optional, and catch-up vaccines.",
    bullets: ["Birth dose & infant vaccines", "School-age & adolescent boosters", "Catch-up & missed-dose guidance", "Polio, MMR, DTP, Hepatitis, HPV"],
  },
  {
    id: "newborn", icon: Baby, title: "Newborn Care & Follow-Up",
    desc: "Gentle post-discharge care for new families — including feeding, sleep, and early-week reassurance.",
    bullets: ["Post-discharge neonatal check-ups", "Lactation & feeding support", "Infant sleep guidance", "Jaundice & weight monitoring"],
  },
  {
    id: "growth", icon: TrendingUp, title: "Growth & Development Assessment",
    desc: "Track every milestone — physical, cognitive, and behavioral — with early intervention when it matters.",
    bullets: ["Height, weight & BMI charting", "Motor & speech milestones", "Behavioral development", "Early-delay detection"],
  },
  {
    id: "nutrition", icon: Apple, title: "Dietary & Nutritional Counseling",
    desc: "Practical, personalized meal plans for toddlers, picky eaters, and growing school-age kids.",
    bullets: ["Toddler meal planning", "Picky-eater strategies", "School-age nutrition", "Iron, calcium & vitamin guidance"],
  },
  {
    id: "daycare", icon: Stethoscope, title: "Pediatric Day Care & Acute Care",
    desc: "On-site nebulisation and same-day care for asthma, croup, viral fever, and tummy bugs.",
    bullets: ["Nebulisation (asthma, croup, RSV)", "Seasonal viral & bacterial infections", "Allergic reaction management", "Walk-in acute care"],
  },
];

function Services() {
  return (
    <>
      <section className="px-4 md:px-6 lg:px-10 py-16">
        <div className="max-w-[1100px] mx-auto text-center">
          <h1 className="text-[3.6rem] md:text-[4.8rem] font-semibold leading-tight" style={{ color: "var(--brand)" }}>
            Pediatric services, end to end.
          </h1>
          <p className="mt-5 text-[1.7rem] max-w-2xl mx-auto" style={{ color: "var(--ink-soft)" }}>
            From your baby's first check-up to your teenager's annual visit — one trusted clinic for every stage of childhood.
          </p>
        </div>
      </section>

      <section className="px-4 md:px-6 lg:px-10 pb-16">
        <div className="max-w-[1200px] mx-auto space-y-8">
          {services.map((s, i) => (
            <article
              key={s.id}
              id={s.id}
              className="card-soft p-8 md:p-12 grid gap-8 md:grid-cols-[1fr_2fr] items-start scroll-mt-32"
            >
              <div>
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
                  style={{ background: "var(--gold-wash)", color: "var(--brand-accent)" }}
                >
                  <s.icon className="w-8 h-8" />
                </div>
                <div className="text-[1.3rem] uppercase tracking-wider font-semibold" style={{ color: "var(--ink-soft)" }}>
                  0{i + 1}
                </div>
              </div>
              <div>
                <h2 className="text-[2.4rem] md:text-[2.8rem] font-semibold" style={{ color: "var(--brand)" }}>
                  {s.title}
                </h2>
                <p className="mt-3 text-[1.6rem]">{s.desc}</p>
                <ul className="mt-5 grid sm:grid-cols-2 gap-2">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex gap-2 text-[1.4rem]" style={{ color: "var(--ink-soft)" }}>
                      <span style={{ color: "var(--brand-accent)" }}>✓</span> {b}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section style={{ background: "var(--house)", color: "var(--on-dark)" }} className="px-4 md:px-6 lg:px-10 py-16 md:py-20">
        <div className="max-w-[900px] mx-auto text-center">
          <h2 className="font-serif italic text-[2.8rem] md:text-[3.6rem] leading-tight">
            Not sure where to start? We'll guide you.
          </h2>
          <p className="mt-4 text-[1.6rem]" style={{ color: "var(--on-dark-soft)" }}>
            Call us and we'll help you book the right appointment for your child.
          </p>
          <div className="mt-7 flex flex-wrap gap-3 justify-center">
            <PillLink to="/contact" variant="onDarkFilled">Book Appointment</PillLink>
            <PillAnchor href="tel:+917014579689" variant="onDarkOutline">Call 070145 79689</PillAnchor>
          </div>
        </div>
      </section>
    </>
  );
}
