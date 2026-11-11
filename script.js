// Personalise these values before publishing.
const PORTFOLIO_EMAIL = "hello@example.com";

document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("menuToggle");
  const links = document.getElementById("navLinks");
  const year = document.getElementById("year");
  const emailLink = document.getElementById("emailLink");
  const copyButton = document.getElementById("copyEmail");
  const copyStatus = document.getElementById("copyStatus");

  year.textContent = new Date().getFullYear();
  emailLink.href = `mailto:${PORTFOLIO_EMAIL}`;
  emailLink.innerHTML = `${PORTFOLIO_EMAIL} <span>↗</span>`;

  toggle.addEventListener("click", () => {
    const isOpen = links.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
    toggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
  });

  links.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
    links.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Open navigation");
  }));

  copyButton.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(PORTFOLIO_EMAIL);
      copyStatus.textContent = "Email copied to clipboard.";
    } catch {
      copyStatus.textContent = `Copy unavailable. Email: ${PORTFOLIO_EMAIL}`;
    }
  });

  if ("serviceWorker" in navigator && (location.protocol === "https:" || location.hostname === "localhost")) {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("./service-worker.js").catch(error => {
        console.warn("Service worker registration failed:", error);
      });
    });
  }
});
