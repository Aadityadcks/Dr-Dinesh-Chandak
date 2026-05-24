import { icons } from "./icons.js";

export function renderFloating(containerId = "site-floating") {
  const root = document.getElementById(containerId);
  if (!root) return;

  root.innerHTML = `
    <a class="floating-cta" href="tel:+917014579689" aria-label="Call Khushi Child Care Clinic">
      ${icons.phone}
    </a>
  `.trim();
}
