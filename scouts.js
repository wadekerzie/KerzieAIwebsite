/* Applied AI Scouts landing page interactions (no dependencies) */

const qs = (sel, el = document) => el.querySelector(sel);
const qsa = (sel, el = document) => Array.from(el.querySelectorAll(sel));

function initYear() {
  const y = qs("#year");
  if (y) y.textContent = String(new Date().getFullYear());
}

function initSmoothScroll() {
  qsa('a[href^="#"]').forEach((a) => {
    a.addEventListener("click", (e) => {
      const href = a.getAttribute("href");
      if (!href || href === "#") return;
      const target = qs(href);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      // Avoid polluting history during fast scrolls
      try {
        history.replaceState(null, "", href);
      } catch {
        // ignore
      }
    });
  });
}

function getUTM() {
  const p = new URLSearchParams(window.location.search);
  const pick = (k) => {
    const v = p.get(k);
    return v ? String(v).trim() : "";
  };
  return {
    utm_source: pick("utm_source"),
    utm_medium: pick("utm_medium"),
    utm_campaign: pick("utm_campaign"),
    utm_content: pick("utm_content"),
    utm_term: pick("utm_term"),
  };
}

function setHidden(form, name, value) {
  const el = qs(`input[name="${name}"]`, form);
  if (el) el.value = value || "";
}

function initForm() {
  const form = qs("#scoutForm");
  const toast = qs("#formToast");
  if (!form || !toast) return;

  const RATE_LIMIT_MS = 30_000;
  const RATE_KEY = "scouts_last_submit_at";

  const showToast = (msg, kind = "ok") => {
    toast.hidden = false;
    toast.textContent = msg;
    toast.classList.remove("toast--ok", "toast--bad");
    toast.classList.add(kind === "bad" ? "toast--bad" : "toast--ok");
  };

  // UTM + context capture
  const utm = getUTM();
  setHidden(form, "utm_source", utm.utm_source);
  setHidden(form, "utm_medium", utm.utm_medium);
  setHidden(form, "utm_campaign", utm.utm_campaign);
  setHidden(form, "utm_content", utm.utm_content);
  setHidden(form, "utm_term", utm.utm_term);
  setHidden(form, "referrer", document.referrer || "");
  setHidden(form, "landing_page", window.location.href);

  const endpoint = String(form.dataset.endpoint || "").trim();

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    toast.hidden = true;

    // Honeypot
    const hp = qs('input[name="website"]', form);
    if (hp && String(hp.value || "").trim()) {
      showToast("Submission blocked.", "bad");
      return;
    }

    // Rate limit (client-side)
    const last = Number(localStorage.getItem(RATE_KEY) || "0");
    const now = Date.now();
    if (last && now - last < RATE_LIMIT_MS) {
      showToast("Please wait a moment and try again.", "bad");
      return;
    }

    // Native validation
    if (!form.checkValidity()) {
      showToast("Check the required fields and try again.", "bad");
      return;
    }

    const fd = new FormData(form);
    const payload = Object.fromEntries(fd.entries());

    // If no endpoint configured, simulate success (local preview + GHL paste safety)
    if (!endpoint) {
      localStorage.setItem(RATE_KEY, String(now));
      showToast("You're on the list. Watch your email/text for next steps.", "ok");
      form.reset();
      // keep UTM values after reset
      const utm2 = getUTM();
      setHidden(form, "utm_source", utm2.utm_source);
      setHidden(form, "utm_medium", utm2.utm_medium);
      setHidden(form, "utm_campaign", utm2.utm_campaign);
      setHidden(form, "utm_content", utm2.utm_content);
      setHidden(form, "utm_term", utm2.utm_term);
      setHidden(form, "referrer", document.referrer || "");
      setHidden(form, "landing_page", window.location.href);
      return;
    }

    try {
      // Default: POST JSON to a webhook/CRM endpoint you provide (GHL inbound webhook works great).
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error(`HTTP ${res.status}`);

      localStorage.setItem(RATE_KEY, String(now));
      showToast("You're on the list. Watch your email/text for next steps.", "ok");
      form.reset();
    } catch (err) {
      showToast("Could not submit right now. Please try again.", "bad");
      // eslint-disable-next-line no-console
      console.error(err);
    }
  });
}

initYear();
initSmoothScroll();
initForm();


