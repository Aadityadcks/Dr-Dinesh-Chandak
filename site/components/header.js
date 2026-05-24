import { icons } from "./icons.js";

const LINKS = [
  { href: "index.html", label: "Home", exact: true },
  { href: "about.html", label: "About Dr. Dinesh" },
  { href: "services.html", label: "Services" },
  { href: "resources.html", label: "Patient Resources" },
  { href: "contact.html", label: "Contact" },
];

export function renderHeader(containerId = "site-header") {
  const root = document.getElementById(containerId);
  if (!root) return;

  const navLinks = LINKS.map(
    (l) => `<a href="${l.href}" data-nav="${l.href}">${l.label}</a>`,
  ).join("");

  const mobileLinks = LINKS.map(
    (l) => `<a href="${l.href}" data-nav="${l.href}">${l.label}</a>`,
  ).join("");

  root.innerHTML = `
    <header class="site-header">
      <div class="inner">
        <a class="brand" href="index.html">
          <span class="logo" aria-hidden="true">K</span>
          <span>
            <span class="brand-title">Khushi Child Care</span>
            <span class="brand-sub">Clinic — Jagatpura</span>
          </span>
        </a>

        <nav class="primary-nav" aria-label="Primary navigation">${navLinks}</nav>

        <div class="nav-actions">
          <a class="btn-pill btn-outline btn-sm" href="tel:+917014579689">${icons.phone} 070145 79689</a>
          <a class="btn-pill btn-primary btn-sm" href="contact.html">Book Appointment</a>
        </div>

        <button type="button" class="mobile-toggle" aria-label="Toggle menu" aria-expanded="false" id="nav-toggle">
          <span class="icon-menu">${icons.menu}</span>
        </button>
      </div>
      <div class="nav-mobile" id="mobile-nav" aria-label="Mobile navigation">
        ${mobileLinks}
        <div class="mobile-cta">
          <a class="btn-pill btn-outline" href="tel:+917014579689">${icons.phone} Call 070145 79689</a>
          <a class="btn-pill btn-primary" href="contact.html">Book Appointment</a>
        </div>
      </div>
    </header>
  `.trim();

  const toggle = root.querySelector("#nav-toggle");
  const mobileNav = root.querySelector("#mobile-nav");
  if (toggle && mobileNav) {
    toggle.addEventListener("click", () => {
      const open = mobileNav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(open));
      toggle.querySelector(".icon-menu").innerHTML = open ? icons.x : icons.menu;
    });
    mobileNav.querySelectorAll("a").forEach((a) => {
      a.addEventListener("click", () => {
        mobileNav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.querySelector(".icon-menu").innerHTML = icons.menu;
      });
    });
  }
}

export function setActiveNavLink() {
  const file = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll("[data-nav]").forEach((a) => {
    const href = a.getAttribute("data-nav");
    const isHome = href === "index.html" && (file === "index.html" || file === "");
    const active = href === file || isHome;
    a.classList.toggle("active", active);
  });
}
