import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { PillLink, PillAnchor } from "./PillLink.jsx";

const PHONE = "070145 79689";
const PHONE_TEL = "tel:+917014579689";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Dr. Dinesh" },
  { to: "/services", label: "Services" },
  { to: "/resources", label: "Patient Resources" },
  { to: "/contact", label: "Contact" },
];

export function GlobalNav() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="fixed top-0 inset-x-0 z-50 bg-white"
      style={{ boxShadow: "var(--shadow-nav)" }}
    >
      <div className="mx-auto flex items-center justify-between gap-6 px-4 md:px-6 lg:px-10 h-[64px] md:h-[83px] lg:h-[99px] max-w-[1440px]">
        <Link to="/" className="flex items-center gap-3 shrink-0">
          <span
            className="inline-flex items-center justify-center w-11 h-11 rounded-full text-white font-bold text-[1.6rem]"
            style={{ background: "var(--brand)" }}
            aria-hidden
          >
            K
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-bold text-[1.6rem]" style={{ color: "var(--brand)" }}>
              Khushi Child Care
            </span>
            <span className="text-[1.2rem] text-[color:var(--ink-soft)]">
              Clinic — Jagatpura
            </span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-[1.5rem] text-[color:var(--ink)] hover:text-[color:var(--brand-accent)] transition-colors"
              activeProps={{ style: { color: "var(--brand-accent)", fontWeight: 600 } }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <PillAnchor href={PHONE_TEL} variant="outline" className="!py-[7px] !px-4 !text-[1.4rem]">
            <Phone className="w-4 h-4" /> {PHONE}
          </PillAnchor>
          <PillLink to="/contact" variant="primary" className="!py-[7px] !px-4 !text-[1.4rem]">
            Book Appointment
          </PillLink>
        </div>

        <button
          aria-label="Toggle menu"
          className="lg:hidden p-2"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-[color:var(--border)] bg-white">
          <div className="flex flex-col p-4 gap-3">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="text-[1.6rem] py-2"
                activeProps={{ style: { color: "var(--brand-accent)", fontWeight: 600 } }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            ))}
            <div className="flex flex-col gap-2 pt-2">
              <PillAnchor href={PHONE_TEL} variant="outline">
                <Phone className="w-4 h-4" /> Call {PHONE}
              </PillAnchor>
              <PillLink to="/contact" variant="primary">Book Appointment</PillLink>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
