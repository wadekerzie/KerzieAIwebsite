/* Kerzie AI landing page interactions (no dependencies) */

const qs = (sel, el = document) => el.querySelector(sel);
const qsa = (sel, el = document) => Array.from(el.querySelectorAll(sel));

function initYear() {
  const y = qs("#year");
  if (y) y.textContent = String(new Date().getFullYear());
}

function initMobileMenu() {
  const btn = qs("#menuBtn");
  const menu = qs("#mobileMenu");
  if (!btn || !menu) return;

  const close = () => {
    btn.setAttribute("aria-expanded", "false");
    menu.hidden = true;
    btn.setAttribute("aria-label", "Open menu");
  };

  const open = () => {
    btn.setAttribute("aria-expanded", "true");
    menu.hidden = false;
    btn.setAttribute("aria-label", "Close menu");
  };

  btn.addEventListener("click", () => {
    const expanded = btn.getAttribute("aria-expanded") === "true";
    if (expanded) close();
    else open();
  });

  qsa("a", menu).forEach((a) => a.addEventListener("click", close));
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") close();
  });
}

function initSmoothScroll() {
  qsa('a[href^="#"]').forEach((a) => {
    a.addEventListener("click", (e) => {
      const id = a.getAttribute("href");
      if (!id || id === "#") return;
      const target = qs(id);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      history.pushState(null, "", id);
    });
  });
}

function initReveal() {
  const els = qsa(".reveal");
  if (els.length === 0) return;

  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduced) {
    els.forEach((el) => el.classList.add("is-in"));
    return;
  }

  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-in");
          io.unobserve(entry.target);
        }
      }
    },
    { threshold: 0.18 }
  );

  els.forEach((el) => io.observe(el));
}

function initContrastToggle() {
  const btn = qs("#themeBtn");
  if (!btn) return;

  const key = "kerzie_contrast";
  const saved = localStorage.getItem(key);
  if (saved === "high") document.documentElement.dataset.contrast = "high";

  btn.addEventListener("click", () => {
    const cur = document.documentElement.dataset.contrast;
    if (cur === "high") {
      delete document.documentElement.dataset.contrast;
      localStorage.setItem(key, "normal");
    } else {
      document.documentElement.dataset.contrast = "high";
      localStorage.setItem(key, "high");
    }
  });
}

function initContactForm() {
  const form = qs("#contactForm");
  const toast = qs("#toast");
  if (!form || !toast) return;

  const showToast = (msg, kind = "ok") => {
    toast.hidden = false;
    toast.textContent = msg;
    toast.classList.remove("form__toast--ok", "form__toast--warn", "form__toast--bad");
    toast.classList.add(`form__toast--${kind}`);
  };

  const clearInvalid = (el) => {
    el.removeAttribute("aria-invalid");
  };

  const setInvalid = (el) => {
    el.setAttribute("aria-invalid", "true");
  };

  const isEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(v).trim());

  qsa("input, textarea", form).forEach((el) => {
    el.addEventListener("input", () => clearInvalid(el));
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    toast.hidden = true;

    const fd = new FormData(form);
    const name = String(fd.get("name") || "").trim();
    const email = String(fd.get("email") || "").trim();
    const company = String(fd.get("company") || "").trim();
    const message = String(fd.get("message") || "").trim();

    const nameEl = qs('input[name="name"]', form);
    const emailEl = qs('input[name="email"]', form);
    const msgEl = qs('textarea[name="message"]', form);

    let ok = true;
    if (!name) {
      if (nameEl) setInvalid(nameEl);
      ok = false;
    }
    if (!email || !isEmail(email)) {
      if (emailEl) setInvalid(emailEl);
      ok = false;
    }
    if (!message) {
      if (msgEl) setInvalid(msgEl);
      ok = false;
    }

    if (!ok) {
      showToast("Please fill in your name, a valid email, and what you'd like to automate.", "bad");
      return;
    }

    const subject = encodeURIComponent("Kerzie AI — Automation Plan Request");
    const body = encodeURIComponent(
      [
        `Name: ${name}`,
        `Email: ${email}`,
        company ? `Company: ${company}` : null,
        "",
        "Automation request:",
        message,
        "",
        "— Sent from kerzie.ai landing page",
      ]
        .filter(Boolean)
        .join("\n")
    );

    // Uses mailto by default for a zero-backend setup.
    // Replace hello@kerzie.ai with your real inbox when ready.
    const mailto = `mailto:hello@kerzie.ai?subject=${subject}&body=${body}`;
    window.location.href = mailto;

    showToast("Opening your email client… If it doesn’t open, use “Email instead”.", "warn");
  });
}

initYear();
initMobileMenu();
initSmoothScroll();
initReveal();
initContrastToggle();
initContactForm();
// Intentionally no animated background: keep the site fast and scroll-friendly.


