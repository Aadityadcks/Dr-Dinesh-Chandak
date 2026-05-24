import { renderHeader, setActiveNavLink } from "./components/header.js";
import { renderFooter } from "./components/footer.js";
import { renderFloating } from "./components/floating.js";

function showToast(title, description) {
  let container = document.querySelector(".toast-container");
  if (!container) {
    container = document.createElement("div");
    container.className = "toast-container";
    document.body.appendChild(container);
  }
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `<strong>${title}</strong><span>${description}</span>`;
  container.appendChild(toast);
  requestAnimationFrame(() => toast.classList.add("is-visible"));
  setTimeout(() => {
    toast.classList.remove("is-visible");
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}

function initContactForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    if (btn) {
      btn.disabled = true;
      btn.textContent = "Sending...";
    }
    setTimeout(() => {
      form.reset();
      if (btn) {
        btn.disabled = false;
        btn.textContent = "Send Message";
      }
      showToast(
        "Thanks! We'll get back to you shortly.",
        "For urgent concerns, please call 070145 79689.",
      );
    }, 600);
  });
}

function initFaq() {
  document.querySelectorAll(".faq-item").forEach((item) => {
    const trigger = item.querySelector(".faq-trigger");
    if (!trigger) return;
    trigger.addEventListener("click", () => {
      const open = item.classList.toggle("is-open");
      trigger.setAttribute("aria-expanded", String(open));
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderHeader("site-header");
  renderFooter("site-footer");
  renderFloating("site-floating");
  setActiveNavLink();
  initContactForm();
  initFaq();
});
