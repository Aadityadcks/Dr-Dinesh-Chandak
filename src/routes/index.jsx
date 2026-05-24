import { createFileRoute, Link } from "@tanstack/react-router";
import { Syringe, Baby, TrendingUp, Stethoscope, Star, Award, Heart, MapPin } from "lucide-react";
import drDinesh from "@/assets/dr-dinesh.jpg";
import { PillLink, PillAnchor } from "@/components/PillLink.jsx";
import { FeatureBand } from "@/components/FeatureBand.jsx";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Khushi Child Care Clinic — Pediatrician Dr. Dinesh Chandak, Jagatpura" },
      { name: "description", content: "Complete, compassionate pediatric care in Jagatpura, Jaipur. Vaccinations, newborn check-ups, growth assessment & nebulisation by Dr. Dinesh Chandak (10+ yrs)." },
      { property: "og:title", content: "Khushi Child Care Clinic — Jagatpura, Jaipur" },
      { property: "og:description", content: "Trusted pediatric care by Dr. Dinesh Chandak. Book online or call 070145 79689." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const services = [
  { icon: Syringe, title: "Child Vaccination", desc: "Complete immunization schedules from birth through adolescence." },
  { icon: Baby, title: "Newborn & Follow-Up", desc: "Post-discharge neonatal check-ups, feeding & lactation support." },
  { icon: TrendingUp, title: "Growth & Development", desc: "Milestone tracking, growth charts and early-delay detection." },
  { icon: Stethoscope, title: "Day Care & Nebulisation", desc: "Acute care for asthma, croup and seasonal illness." },
];

const testimonials = [
  { name: "Priya S.", text: "Soft spoken, well experienced & very generous doctor. Highly recommended for newborns." },
  { name: "Rahul M.", text: "Dr. Chandak explained everything patiently. The clinic is bright, clean and very kid-friendly." },
  { name: "Aarti K.", text: "Best pediatrician in Jagatpura. My son actually looks forward to his check-ups now!" },
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="px-4 md:px-6 lg:px-10 py-12 md:py-20">
        <div className="max-w-[1440px] mx-auto grid gap-12 md:grid-cols-[1.2fr_1fr] items-center">
          <div>
            <span className="trust-pill">★ 10+ Years of Pediatric Care</span>
            <h1 className="mt-6 text-[3.2rem] md:text-[4.8rem] lg:text-[5.6rem] font-semibold leading-[1.05]" style={{ color: "var(--brand)" }}>
              Complete, Compassionate Care for Your Little Ones.
            </h1>
            <p className="mt-6 text-[1.8rem] max-w-xl" style={{ color: "var(--ink-soft)" }}>
              Trusted pediatric care, newborn check-ups, and vaccinations in Jagatpura, Jaipur by{" "}
              <strong style={{ color: "var(--ink)" }}>Dr. Dinesh Chandak</strong> — 10+ years of experience.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <PillLink to="/contact" variant="primary">Book Online</PillLink>
              <PillAnchor href="tel:+917014579689" variant="outline">Call 070145 79689</PillAnchor>
            </div>
          </div>
          <div className="relative">
            <div className="card-soft overflow-hidden aspect-[4/5] max-w-[480px] mx-auto">
              <img src={drDinesh} alt="Dr. Dinesh Chandak, Pediatrician at Khushi Child Care Clinic" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* PROMISE STRIP */}
      <section style={{ background: "var(--ceramic)" }} className="py-8">
        <div className="max-w-[1440px] mx-auto px-4 md:px-6 lg:px-10 text-center">
          <p className="text-[1.6rem] md:text-[1.8rem]" style={{ color: "var(--brand)" }}>
            <Award className="inline w-5 h-5 mr-2 -mt-1" />
            Complete Child Care Unit of <strong>Shri Kalyan Hospital</strong>
          </p>
        </div>
      </section>

      {/* QUICK SERVICES */}
      <section className="px-4 md:px-6 lg:px-10 py-20">
        <div className="max-w-[1440px] mx-auto">
          <div className="max-w-2xl mb-10">
            <h2 className="text-[2.8rem] md:text-[3.2rem] font-semibold" style={{ color: "var(--brand)" }}>
              A child-first approach to every visit.
            </h2>
            <p className="mt-3 text-[1.7rem]" style={{ color: "var(--ink-soft)" }}>
              We focus on proper, holistic treatment — minimizing unnecessary medication and walking parents through every step.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <Link key={s.title} to="/services" className="card-soft p-6 group hover:-translate-y-1 transition-transform">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
                  style={{ background: "var(--gold-wash)", color: "var(--brand-accent)" }}
                >
                  <s.icon className="w-6 h-6" />
                </div>
                <h3 className="text-[1.8rem] font-semibold" style={{ color: "var(--brand)" }}>{s.title}</h3>
                <p className="mt-2 text-[1.4rem]" style={{ color: "var(--ink-soft)" }}>{s.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURE BAND — Why choose us */}
      <FeatureBand>
        <div className="grid gap-12 md:grid-cols-[1fr_1.2fr] items-center">
          <div>
            <h2 className="font-serif italic text-[3rem] md:text-[3.6rem] leading-tight">
              "First, give the proper treatment to the child."
            </h2>
            <p className="mt-5 text-[1.6rem]" style={{ color: "var(--on-dark-soft)" }}>
              Dr. Chandak's philosophy guides every consultation — careful diagnosis, gentle care, and parent counseling at the heart of it.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <PillLink to="/about" variant="onDarkFilled">Meet Dr. Dinesh</PillLink>
              <PillLink to="/services" variant="onDarkOutline">Explore Services</PillLink>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {[
              { icon: Award, label: "10+ Years", sub: "Pediatric Expertise" },
              { icon: Star, label: "5.0 ★", sub: "Google Rated Clinic" },
              { icon: Heart, label: "Child-First", sub: "Warm, friendly space" },
            ].map((s) => (
              <div key={s.label} className="text-center p-4 rounded-xl" style={{ background: "rgba(255,255,255,0.06)" }}>
                <s.icon className="w-7 h-7 mx-auto mb-3" style={{ color: "var(--gold)" }} />
                <div className="text-[1.8rem] font-semibold">{s.label}</div>
                <div className="text-[1.2rem] mt-1" style={{ color: "var(--on-dark-soft)" }}>{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </FeatureBand>

      {/* TESTIMONIALS */}
      <section className="px-4 md:px-6 lg:px-10 py-20">
        <div className="max-w-[1440px] mx-auto">
          <h2 className="text-[2.8rem] md:text-[3.2rem] font-semibold mb-10" style={{ color: "var(--brand)" }}>
            What parents are saying.
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <figure key={t.name} className="card-soft p-7">
                <div className="flex gap-1 mb-3" style={{ color: "var(--gold)" }}>
                  {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <blockquote className="text-[1.5rem] leading-relaxed">"{t.text}"</blockquote>
                <figcaption className="mt-4 text-[1.3rem] font-semibold" style={{ color: "var(--ink-soft)" }}>— {t.name}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* LOCATION TEASER */}
      <section style={{ background: "var(--ceramic)" }} className="px-4 md:px-6 lg:px-10 py-16">
        <div className="max-w-[1440px] mx-auto grid gap-8 md:grid-cols-2 items-center">
          <div>
            <h2 className="text-[2.4rem] font-semibold" style={{ color: "var(--brand)" }}>Visit us in Jagatpura.</h2>
            <p className="mt-3 text-[1.6rem] flex items-start gap-2" style={{ color: "var(--ink-soft)" }}>
              <MapPin className="w-5 h-5 mt-1 shrink-0" style={{ color: "var(--brand-accent)" }} />
              B-1, Mahal Yojana, right near Kalyan Hospital — Akshay Patra Chouraha, Jaipur.
            </p>
            <div className="mt-6">
              <PillLink to="/contact" variant="primary">Get Directions</PillLink>
            </div>
          </div>
          <div className="card-soft overflow-hidden aspect-[16/10]">
            <iframe
              title="Clinic location"
              src="https://www.google.com/maps?q=Mahal+Yojana,+Jagatpura,+Jaipur&output=embed"
              className="w-full h-full"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </>
  );
}
