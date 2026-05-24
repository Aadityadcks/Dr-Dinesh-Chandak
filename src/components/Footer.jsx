import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Clock } from "lucide-react";

export function Footer() {
  return (
    <footer style={{ background: "var(--house)", color: "var(--on-dark)" }} className="mt-20">
      <div className="max-w-[1440px] mx-auto px-4 md:px-6 lg:px-10 py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="trust-pill" style={{ borderColor: "var(--gold)", color: "var(--gold)" }}>
            ★ Complete Child Care Unit of Shri Kalyan Hospital
          </div>
          <h3 className="mt-6 text-[2.4rem] font-semibold">Khushi Child Care Clinic</h3>
          <p className="mt-3 text-[1.5rem] max-w-md" style={{ color: "var(--on-dark-soft)" }}>
            Compassionate pediatric care in Jagatpura, Jaipur — led by Dr. Dinesh Chandak,
            with 10+ years of experience caring for newborns and children.
          </p>
        </div>

        <div>
          <h4 className="text-[1.4rem] font-semibold uppercase tracking-wider mb-4">Visit</h4>
          <ul className="space-y-3 text-[1.4rem]" style={{ color: "var(--on-dark-soft)" }}>
            <li className="flex gap-2"><MapPin className="w-4 h-4 mt-1 shrink-0" /><span>B-1, Near Kalyan Hospital, Mahal Yojana, Jagatpura, Jaipur — 302017</span></li>
            <li className="flex gap-2"><Phone className="w-4 h-4 mt-1 shrink-0" /><a href="tel:+917014579689" className="hover:text-white">070145 79689</a></li>
            <li className="flex gap-2"><Clock className="w-4 h-4 mt-1 shrink-0" /><span>Mon – Sat: 10:00 AM onwards<br />Sunday: Closed</span></li>
          </ul>
        </div>

        <div>
          <h4 className="text-[1.4rem] font-semibold uppercase tracking-wider mb-4">Quick Links</h4>
          <ul className="space-y-3 text-[1.4rem]" style={{ color: "var(--on-dark-soft)" }}>
            <li><Link to="/about" className="hover:text-white">About Dr. Dinesh</Link></li>
            <li><Link to="/services" className="hover:text-white">Services</Link></li>
            <li><Link to="/resources" className="hover:text-white">Patient Resources</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>
      </div>

      <div
        className="border-t py-6 text-center text-[1.3rem]"
        style={{ borderColor: "rgba(255,255,255,0.1)", color: "var(--on-dark-soft)" }}
      >
        © {new Date().getFullYear()} Khushi Child Care Clinic. All rights reserved.
      </div>
    </footer>
  );
}
