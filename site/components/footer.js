import { icons } from "./icons.js";

export function renderFooter(containerId = "site-footer") {
  const root = document.getElementById(containerId);
  if (!root) return;

  root.innerHTML = `
    <footer class="site-footer">
      <div class="container footer-grid">
        <div>
          <span class="trust-pill">★ Complete Child Care Unit of Shri Kalyan Hospital</span>
          <h3>Khushi Child Care Clinic</h3>
          <p class="text-on-dark-soft" style="margin-top:12px;max-width:28rem;font-size:1.5rem">
            Compassionate pediatric care in Jagatpura, Jaipur — led by Dr. Dinesh Chandak,
            with 10+ years of experience caring for newborns and children.
          </p>
        </div>

        <div>
          <h4>Visit</h4>
          <ul>
            <li>${icons.mapPin}<span>B-1, Near Kalyan Hospital, Mahal Yojana, Jagatpura, Jaipur — 302017</span></li>
            <li>${icons.phone}<a href="tel:+917014579689">070145 79689</a></li>
            <li>${icons.clock}<span>Mon – Sat: 10:00 AM onwards<br />Sunday: Closed</span></li>
          </ul>
        </div>

        <div>
          <h4>Quick Links</h4>
          <ul>
            <li><a href="about.html">About Dr. Dinesh</a></li>
            <li><a href="services.html">Services</a></li>
            <li><a href="resources.html">Patient Resources</a></li>
            <li><a href="contact.html">Contact</a></li>
          </ul>
        </div>
      </div>

      <div class="container footer-bottom">
        © ${new Date().getFullYear()} Khushi Child Care Clinic. All rights reserved.
      </div>
    </footer>
  `.trim();
}
