import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronDown, BookOpen } from "lucide-react";

export const Route = createFileRoute("/resources")({
  head: () => ({
    meta: [
      { title: "Patient Resources & Parenting Guides — Khushi Child Care" },
      { name: "description", content: "Practical guides on RSV, seasonal allergies, vaccinations, and FAQs for parents in Jagatpura, Jaipur." },
      { property: "og:title", content: "Patient Resources — Khushi Child Care" },
      { property: "og:description", content: "Trusted parenting guides and answers to frequently asked questions." },
      { property: "og:url", content: "/resources" },
    ],
    links: [{ rel: "canonical", href: "/resources" }],
  }),
  component: Resources,
});

const articles = [
  {
    title: "Understanding RSV: Prevention and Care for Infants",
    excerpt: "What to watch for in the early days, when to seek help, and how nebulisation supports recovery.",
    tag: "Respiratory",
  },
  {
    title: "Navigating Seasonal Allergies in Jagatpura, Jaipur",
    excerpt: "Dust, pollen, and seasonal triggers common in our area — practical steps for relief.",
    tag: "Allergies",
  },
  {
    title: "The Importance of Timely Polio and Routine Vaccinations",
    excerpt: "A simple walkthrough of the immunization calendar and what to do if you've missed a dose.",
    tag: "Vaccination",
  },
];

const faqs = [
  {
    q: "What should I bring to my child's first newborn check-up?",
    a: "Bring your discharge summary from the birthing hospital, any prescribed medications, vaccination records, and a list of questions you've been thinking about. A spare diaper and feeding bottle are always handy too.",
  },
  {
    q: "What do I do if my child misses a scheduled vaccine?",
    a: "Don't worry — most vaccines can be safely caught up. Call us and we'll review the schedule with you and book a catch-up dose at the earliest safe interval.",
  },
  {
    q: "Do you handle emergencies or walk-ins for nebulisation?",
    a: "Yes. We accept walk-ins for nebulisation during clinic hours. For severe emergencies (breathing distress, unresponsiveness), please head directly to the nearest emergency room and call us en route.",
  },
  {
    q: "How often should my child have a routine check-up?",
    a: "Infants typically need monthly visits in the first six months, then quarterly through age two. After that, an annual well-child visit is recommended. We'll personalize the schedule based on your child's needs.",
  },
];

function Resources() {
  return (
    <>
      <section className="px-4 md:px-6 lg:px-10 py-16">
        <div className="max-w-[1100px] mx-auto">
          <span className="trust-pill">★ Parent Education</span>
          <h1 className="mt-5 text-[3.6rem] md:text-[4.4rem] font-semibold leading-tight" style={{ color: "var(--brand)" }}>
            Resources for confident parents.
          </h1>
          <p className="mt-4 text-[1.7rem] max-w-2xl" style={{ color: "var(--ink-soft)" }}>
            Practical guides written for families in Jagatpura — and answers to the questions parents ask us most often.
          </p>
        </div>
      </section>

      {/* Articles */}
      <section className="px-4 md:px-6 lg:px-10 pb-16">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-[2.4rem] font-semibold mb-8" style={{ color: "var(--brand)" }}>Latest guides</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {articles.map((a) => (
              <article key={a.title} className="card-soft p-7 flex flex-col">
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center mb-5"
                  style={{ background: "var(--gold-wash)", color: "var(--brand-accent)" }}
                >
                  <BookOpen className="w-5 h-5" />
                </div>
                <div className="text-[1.2rem] uppercase tracking-wider font-semibold mb-2" style={{ color: "var(--ink-soft)" }}>
                  {a.tag}
                </div>
                <h3 className="text-[1.8rem] font-semibold leading-snug" style={{ color: "var(--brand)" }}>
                  {a.title}
                </h3>
                <p className="mt-3 text-[1.4rem] flex-1" style={{ color: "var(--ink-soft)" }}>{a.excerpt}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: "var(--ceramic)" }} className="px-4 md:px-6 lg:px-10 py-16">
        <div className="max-w-[900px] mx-auto">
          <h2 className="text-[2.8rem] md:text-[3.2rem] font-semibold mb-3" style={{ color: "var(--brand)" }}>
            Frequently asked questions
          </h2>
          <p className="text-[1.6rem] mb-8" style={{ color: "var(--ink-soft)" }}>
            Can't find your question? Call us at <a href="tel:+917014579689" className="underline" style={{ color: "var(--brand-accent)" }}>070145 79689</a>.
          </p>
          <div className="space-y-3">
            {faqs.map((f, i) => <FAQItem key={i} q={f.q} a={f.a} />)}
          </div>
        </div>
      </section>
    </>
  );
}

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="card-soft overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 p-5 md:p-6 text-left"
      >
        <span className="text-[1.6rem] font-semibold">{q}</span>
        <ChevronDown
          className={`w-5 h-5 shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
          style={{ color: "var(--brand-accent)" }}
        />
      </button>
      <div
        className="grid transition-[grid-template-rows] duration-300 ease-out"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <p className="px-5 md:px-6 pb-6 text-[1.5rem]" style={{ color: "var(--ink-soft)" }}>{a}</p>
        </div>
      </div>
    </div>
  );
}
