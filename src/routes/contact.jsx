import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { MapPin, Phone, Clock, AlertTriangle } from "lucide-react";
import { toast } from "sonner";
import { PillButton } from "@/components/PillButton.jsx";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Visit — Khushi Child Care Clinic, Jagatpura, Jaipur" },
      { name: "description", content: "Visit Khushi Child Care Clinic at B-1, Mahal Yojana, near Kalyan Hospital, Jagatpura, Jaipur. Call 070145 79689 to book." },
      { property: "og:title", content: "Contact Khushi Child Care Clinic" },
      { property: "og:description", content: "Address, hours, phone and directions for our Jagatpura clinic." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  const [submitting, setSubmitting] = useState(false);

  function onSubmit(e) {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      e.target.reset();
      toast.success("Thanks! We'll get back to you shortly.", {
        description: "For urgent concerns, please call 070145 79689.",
      });
    }, 600);
  }

  return (
    <>
      <section className="px-4 md:px-6 lg:px-10 py-16">
        <div className="max-w-[1200px] mx-auto">
          <span className="trust-pill">★ Visit Us</span>
          <h1 className="mt-5 text-[3.6rem] md:text-[4.4rem] font-semibold leading-tight" style={{ color: "var(--brand)" }}>
            We're here for you and your little one.
          </h1>
          <p className="mt-4 text-[1.7rem] max-w-2xl" style={{ color: "var(--ink-soft)" }}>
            Easy to reach from anywhere in Jagatpura — right at Akshay Patra Chouraha, near Kalyan Hospital.
          </p>
        </div>
      </section>

      <section className="px-4 md:px-6 lg:px-10 pb-16">
        <div className="max-w-[1200px] mx-auto grid gap-8 lg:grid-cols-[1fr_1.2fr]">
          {/* Info column */}
          <div className="space-y-6">
            <div className="card-soft p-7">
              <div className="space-y-5 text-[1.5rem]">
                <div className="flex gap-4">
                  <MapPin className="w-6 h-6 shrink-0" style={{ color: "var(--brand-accent)" }} />
                  <div>
                    <div className="font-semibold mb-1">Address</div>
                    <div style={{ color: "var(--ink-soft)" }}>
                      B-1, Near Kalyan Hospital,<br />
                      Mahal Yojana, Jagatpura,<br />
                      Jaipur — 302017
                    </div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Phone className="w-6 h-6 shrink-0" style={{ color: "var(--brand-accent)" }} />
                  <div>
                    <div className="font-semibold mb-1">Phone</div>
                    <a href="tel:+917014579689" className="underline" style={{ color: "var(--brand-accent)" }}>070145 79689</a>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Clock className="w-6 h-6 shrink-0" style={{ color: "var(--brand-accent)" }} />
                  <div>
                    <div className="font-semibold mb-1">Clinic Hours</div>
                    <div style={{ color: "var(--ink-soft)" }}>
                      Mon – Sat: 10:00 AM onwards<br />
                      Sunday: Closed
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-soft overflow-hidden aspect-[16/12]">
              <iframe
                title="Khushi Child Care Clinic location"
                src="https://www.google.com/maps?q=Mahal+Yojana,+Jagatpura,+Jaipur+302017&output=embed"
                className="w-full h-full"
                loading="lazy"
              />
            </div>

            <div
              className="rounded-xl p-5 flex gap-4 items-start"
              style={{ background: "hsl(4 82% 43% / 0.06)", border: "1px solid hsl(4 82% 43% / 0.2)" }}
            >
              <AlertTriangle className="w-6 h-6 shrink-0" style={{ color: "var(--destructive)" }} />
              <div className="text-[1.4rem]">
                <div className="font-semibold mb-1" style={{ color: "var(--destructive)" }}>Medical Emergency?</div>
                <p style={{ color: "var(--ink-soft)" }}>
                  If your child is experiencing a severe medical emergency, please call us directly or visit the nearest emergency room immediately.
                </p>
              </div>
            </div>
          </div>

          {/* Form column */}
          <form onSubmit={onSubmit} className="card-soft p-7 md:p-10">
            <h2 className="text-[2.4rem] font-semibold mb-2" style={{ color: "var(--brand)" }}>
              Send us a message
            </h2>
            <p className="text-[1.4rem] mb-7" style={{ color: "var(--ink-soft)" }}>
              For non-urgent inquiries. We typically reply within one working day.
            </p>

            <div className="space-y-5">
              <Field label="Your Name" name="name" type="text" required />
              <Field label="Phone Number" name="phone" type="tel" required />
              <Field label="Child's Age" name="age" type="text" placeholder="e.g. 6 months" />
              <div>
                <label htmlFor="message" className="block text-[1.3rem] font-semibold uppercase tracking-wider mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full px-3 py-3 rounded text-[1.5rem] border focus:outline-none focus:ring-2"
                  style={{
                    background: "white",
                    borderColor: "var(--border)",
                  }}
                />
              </div>
            </div>

            <div className="mt-7">
              <PillButton type="submit" disabled={submitting}>
                {submitting ? "Sending..." : "Send Message"}
              </PillButton>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

function Field({
  label, name, type, required, placeholder,
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-[1.3rem] font-semibold uppercase tracking-wider mb-2">
        {label}{required && " *"}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full px-3 py-3 rounded text-[1.5rem] border focus:outline-none focus:ring-2"
        style={{
          background: "white",
          borderColor: "var(--border)",
        }}
      />
    </div>
  );
}
