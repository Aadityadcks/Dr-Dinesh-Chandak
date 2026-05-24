import { createFileRoute } from "@tanstack/react-router";
import drDinesh from "@/assets/dr-dinesh.jpg";
import clinicInterior from "@/assets/clinic-interior.jpg";
import clinicBanner from "@/assets/clinic-banner.png";
import { PillLink } from "@/components/PillLink.jsx";
import { Award, Heart, Stethoscope } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Dr. Dinesh Chandak — Khushi Child Care Clinic" },
      { name: "description", content: "Meet Dr. Dinesh Chandak, MD Pediatrics. 10+ years caring for newborns and children in Jagatpura, Jaipur with a child-first philosophy." },
      { property: "og:title", content: "About Dr. Dinesh Chandak" },
      { property: "og:description", content: "MD Pediatrics with 10+ years of experience — child-first treatment philosophy at Khushi Child Care Clinic." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  return (
    <>
      <section className="px-4 md:px-6 lg:px-10 py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto grid gap-12 md:grid-cols-[1fr_1.2fr] items-center">
          <div className="card-soft overflow-hidden aspect-[4/5] max-w-[440px]">
            <img src={drDinesh} alt="Dr. Dinesh Chandak, MD Pediatrics" className="w-full h-full object-cover" />
          </div>
          <div>
            <span className="trust-pill">★ MD Pediatrics</span>
            <h1 className="mt-5 text-[3.2rem] md:text-[4.4rem] font-semibold leading-tight" style={{ color: "var(--brand)" }}>
              Dr. Dinesh Chandak
            </h1>
            <p className="mt-2 text-[1.8rem]" style={{ color: "var(--ink-soft)" }}>
              Lead Child Specialist · 10+ Years Experience
            </p>
            <p className="mt-6 text-[1.6rem] leading-relaxed">
              Dr. Chandak has spent over a decade caring for newborns and children across Jaipur — guiding families through everything from seasonal viral illness and complex allergies to long-term growth and developmental questions.
            </p>
            <p className="mt-4 text-[1.6rem] leading-relaxed">
              Parents describe him as soft-spoken, patient, and unhurried. Every appointment ends with a clear plan — and parents leave knowing exactly what to watch for at home.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy band */}
      <section style={{ background: "var(--house)", color: "var(--on-dark)" }}>
        <div className="max-w-[1100px] mx-auto px-4 md:px-6 lg:px-10 py-20 text-center">
          <Heart className="w-8 h-8 mx-auto mb-6" style={{ color: "var(--gold)" }} />
          <blockquote className="font-serif italic text-[3rem] md:text-[4rem] leading-tight">
            "First, give the proper treatment to the child."
          </blockquote>
          <p className="mt-6 text-[1.6rem] max-w-2xl mx-auto" style={{ color: "var(--on-dark-soft)" }}>
            We minimize unnecessary medication, take time to explain, and treat each child as an individual — not a checklist. Holistic growth and confident parents are the goal of every visit.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="px-4 md:px-6 lg:px-10 py-20">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-[2.8rem] font-semibold mb-3" style={{ color: "var(--brand)" }}>Inside the clinic</h2>
          <p className="text-[1.6rem] max-w-xl mb-10" style={{ color: "var(--ink-soft)" }}>
            A bright, sterile space designed to feel welcoming for children — playful wallpapers, toys, and a calm waiting area.
          </p>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="card-soft overflow-hidden aspect-[4/3]">
              <img src={clinicInterior} alt="Khushi Child Care Clinic reception" className="w-full h-full object-cover" />
            </div>
            <div className="card-soft overflow-hidden aspect-[4/3]">
              <img src={clinicBanner} alt="Khushi Child Care Clinic branding" className="w-full h-full object-cover" />
            </div>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              { icon: Award, t: "Established Practice", d: "Backed by Shri Kalyan Hospital." },
              { icon: Stethoscope, t: "Full-Service Clinic", d: "Vaccinations, nebulisation, day care." },
              { icon: Heart, t: "Family-Centered", d: "Parents are partners in every plan." },
            ].map((b) => (
              <div key={b.t} className="card-soft p-6">
                <b.icon className="w-7 h-7 mb-3" style={{ color: "var(--brand-accent)" }} />
                <h3 className="text-[1.7rem] font-semibold">{b.t}</h3>
                <p className="text-[1.4rem] mt-1" style={{ color: "var(--ink-soft)" }}>{b.d}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <PillLink to="/contact" variant="primary">Book an Appointment</PillLink>
          </div>
        </div>
      </section>
    </>
  );
}
