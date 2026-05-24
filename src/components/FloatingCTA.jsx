import { Phone } from "lucide-react";

export function FloatingCTA() {
  return (
    <a
      href="tel:+917014579689"
      aria-label="Call Khushi Child Care Clinic"
      className="fixed z-40 bottom-6 right-6 w-14 h-14 rounded-full flex items-center justify-center text-white transition-transform active:scale-95"
      style={{
        background: "var(--brand-accent)",
        boxShadow: "var(--shadow-frap)",
      }}
    >
      <Phone className="w-6 h-6" />
    </a>
  );
}
