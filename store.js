/* Kerzie AI — Automation Store interactions (no dependencies) */

(() => {
  const qs = (sel, el = document) => el.querySelector(sel);
  const qsa = (sel, el = document) => Array.from(el.querySelectorAll(sel));

  const PRODUCTS = {
  // Sector One: Residential HVAC and Plumbing (DFW)
  "hvac-speed-to-lead": {
    sector: "Residential HVAC & Plumbing (DFW, Texas)",
    name: "Speed-to-Lead Instant Responder",
    outcome:
      "Instantly acknowledges new leads, alerts dispatch, and creates the customer record—so you’re first to respond every time.",
    plainEnglish: [
      "New lead automatically becomes a client + request in your scheduling system.",
      "Customer gets an immediate confirmation text (so they stop shopping competitors).",
      "Your team gets a “red alert” message so nothing gets missed.",
    ],
    connectsTo: ["Jobber", "Facebook Lead Ads / Website Form", "SMS", "Slack"],
    underTheHood: [
      "Trigger: Facebook Lead Ads (new lead) OR website form (new submission).",
      "Create/Find client in Jobber, then create a request.",
      "Send an auto-text to the customer and a dispatch alert to your team channel.",
    ],
    needsFromYou: [
      "Admin access to your Facebook Page + Ad Account (if using Facebook leads).",
      "Admin login for Jobber.",
      "Where dispatch alerts should go (Slack channel or phone number).",
      "Your preferred auto-text wording.",
    ],
    pitch:
      "In Texas heat, speed wins. This installs a “first responder” system so every lead gets an instant reply and dispatch gets alerted—without your office babysitting inboxes.",
  },

  "hvac-reputation-engine": {
    sector: "Residential HVAC & Plumbing (DFW, Texas)",
    name: "Reputation Engine (Automated Review Request)",
    outcome:
      "Automatically asks happy customers for Google reviews right after the job—so your 5‑star count grows without relying on tech memory.",
    plainEnglish: [
      "Detects when a job is closed.",
      "Waits a short period so the tech has left.",
      "Sends a polite review request with a one-click link.",
    ],
    connectsTo: ["Jobber", "Email or SMS (Gmail/Twilio)", "Google Business Profile link"],
    underTheHood: [
      "Trigger: Job status changes to Closed (with safeguards like invoice total > $0).",
      "Delay: ~1 hour.",
      "Send review request via email or text with your Google review short link.",
    ],
    needsFromYou: [
      "Your Google review short link.",
      "The sending email address (or SMS provider preference).",
      "Any job types to exclude (e.g., warranty rework).",
    ],
    pitch:
      "You do the work—your reputation should build itself. This makes review requests automatic at the perfect moment, so you rank higher and win more calls.",
  },

  "hvac-seasonal-goldmine": {
    sector: "Residential HVAC & Plumbing (DFW, Texas)",
    name: "Seasonal Goldmine (CRM → Marketing Sync)",
    outcome:
      "Keeps your customer list automatically synced to your marketing tool—so slow seasons turn into scheduled revenue.",
    plainEnglish: [
      "Every new customer is added to your email list automatically.",
      "Customers can be tagged (install vs repair, city, etc.) so marketing stays targeted.",
      "No more exporting CSV files.",
    ],
    connectsTo: ["Jobber", "Mailchimp"],
    underTheHood: [
      "Trigger: New client created in Jobber.",
      "Action: Add/update subscriber in Mailchimp and apply tags based on service type/segment rules.",
    ],
    needsFromYou: [
      "Mailchimp login/API access.",
      "Which audience/list to sync into.",
      "How you want customers tagged/segmented.",
    ],
    pitch:
      "Your customer list is an asset. This turns it into an always-updated marketing engine so you can sell tune-ups and maintenance in the slow season.",
  },

  "hvac-ad-spend-auditor": {
    sector: "Residential HVAC & Plumbing (DFW, Texas)",
    name: "Ad Spend Auditor (Offline Conversions)",
    outcome:
      "Connects real revenue back to Google Ads so you can stop paying for clicks that don’t become paying jobs.",
    plainEnglish: [
      "When a job closes, the system sends the revenue amount back to your ads dashboard.",
      "Google’s AI learns which leads become real money—not just form fills.",
      "You get clarity on what to cut and what to scale.",
    ],
    connectsTo: ["Jobber", "Google Ads", "Website form tracking (GCLID)"],
    underTheHood: [
      "Trigger: Job closed in Jobber.",
      "Action: Upload offline conversion to Google Ads with invoice value.",
      "Requires matching with Google Click ID (GCLID) captured at lead time.",
    ],
    needsFromYou: [
      "Google Ads Customer ID + conversion action name.",
      "Confirmation your form captures GCLID (hidden field).",
      "Jobber admin access.",
    ],
    pitch:
      "Stop guessing. When you get paid $8,000 for an install, this tells Google exactly which ad created it—so the algorithm finds more high-value customers.",
  },

  "hvac-cash-flow-accelerator": {
    sector: "Residential HVAC & Plumbing (DFW, Texas)",
    name: "Cash Flow Accelerator (Financial Sync)",
    outcome:
      "Automatically syncs invoices from Jobber into QuickBooks Online—eliminating double-entry and speeding up reconciliation.",
    plainEnglish: [
      "Field invoices show up in your accounting system automatically.",
      "Cuts typos and rework from re-typing.",
      "Gives you a more real-time view of cash flow.",
    ],
    connectsTo: ["Jobber", "QuickBooks Online"],
    underTheHood: [
      "Trigger: New invoice created in Jobber (approved/sent).",
      "Find/create customer in QBO, then create corresponding invoice.",
    ],
    needsFromYou: [
      "QuickBooks Online admin access.",
      "How to map services/materials to your QBO items.",
      "Local tax settings (if applicable).",
    ],
    pitch:
      "Your bookkeeper shouldn’t be re-typing what your tech already entered. This makes invoices appear in QuickBooks automatically—fast, clean, audit-ready.",
  },

  // Sector Two: Independent Property Management (Tampa/St. Pete)
  "pm-maintenance-command-center": {
    sector: "Independent Property Management (Tampa Bay, FL)",
    name: "Maintenance Command Center",
    outcome:
      "Centralizes maintenance requests into a single visual board with alerts—so no work order gets lost and you always know the status.",
    plainEnglish: [
      "New work orders become trackable task cards automatically.",
      "Your team gets notified instantly to dispatch vendors.",
      "Creates a clean “paper trail” for owners.",
    ],
    connectsTo: ["DoorLoop", "Asana or Trello", "Slack"],
    underTheHood: [
      "Trigger: New task/work order in DoorLoop.",
      "Action: Create a task card with key tenant/property details.",
      "Notify your maintenance dispatch channel.",
    ],
    needsFromYou: [
      "DoorLoop API key / access.",
      "Your Asana/Trello project + section to receive tickets.",
      "Slack channel name for dispatch alerts.",
    ],
    pitch:
      "Maintenance is where reputations are lost. This gives you a true “command center” so nothing falls through the cracks.",
  },

  "pm-lease-retention": {
    sector: "Independent Property Management (Tampa Bay, FL)",
    name: "Lease Retention Auto‑Sequencer",
    outcome:
      "Starts renewal outreach automatically before leases expire—reducing vacancy gaps and helping you secure rent increases on time.",
    plainEnglish: [
      "Automatically reaches out 90 days before lease end (or your preferred window).",
      "Uses a consistent, professional renewal message.",
      "Reduces “oops we missed that lease” moments.",
    ],
    connectsTo: ["DoorLoop", "Gmail/Email"],
    underTheHood: [
      "Trigger: Lease ending in X days (configured to 90 by default).",
      "Action: Send renewal email using a template with property/tenant merge fields.",
    ],
    needsFromYou: [
      "Your renewal timing policy (60 vs 90 days, etc.).",
      "Approved renewal email copy.",
      "Sender/from address for replies.",
    ],
    pitch:
      "Vacancies are expensive. This starts renewals early and consistently—so you protect revenue without adding admin work.",
  },

  "pm-move-in-bot": {
    sector: "Independent Property Management (Tampa Bay, FL)",
    name: "Seamless Move‑In Bot",
    outcome:
      "Automatically sends welcome info, rules, and access details before move-in—cutting repetitive calls and improving tenant experience.",
    plainEnglish: [
      "Sends a welcome packet PDF automatically.",
      "Includes the essential details (gate codes, utilities, parking rules).",
      "Reduces move-in day chaos.",
    ],
    connectsTo: ["DoorLoop", "Google Drive", "Gmail/Email"],
    underTheHood: [
      "Trigger: Lease starting in X days (configured to 3 by default).",
      "Find welcome packet in Drive and email it to the tenant with custom details.",
    ],
    needsFromYou: [
      "Standard welcome packet PDFs stored in a Drive folder.",
      "Where access details live in DoorLoop (custom fields).",
      "Utility/contact list for the email template.",
    ],
    pitch:
      "Stop answering the same move-in questions every month. This sends a clean, professional welcome automatically before the keys change hands.",
  },

  "pm-owner-reporter": {
    sector: "Independent Property Management (Tampa Bay, FL)",
    name: "Owner Peace‑of‑Mind Reporter",
    outcome:
      "Logs payments into a secure shared sheet for owners—reducing check-in calls and building trust with transparency.",
    plainEnglish: [
      "Every rent/payment event is recorded automatically.",
      "Owners can check a simple dashboard anytime.",
      "Fewer “did rent come in?” messages.",
    ],
    connectsTo: ["DoorLoop", "Google Sheets"],
    underTheHood: [
      "Trigger: New lease payment received in DoorLoop.",
      "Action: Add a row to the correct owner’s sheet (with filtering/routing).",
    ],
    needsFromYou: [
      "Owner email list for sheet sharing permissions.",
      "A sheet template (we can provide one) and how to map portfolios to owners.",
    ],
    pitch:
      "Owners want confidence. This gives them a near real-time view of payments so they feel informed—and you get fewer interruptions.",
  },

  "pm-eviction-compliance-clock": {
    sector: "Independent Property Management (Tampa Bay, FL)",
    name: "Eviction Compliance Clock",
    outcome:
      "Checks balances on a schedule and sends late notices or internal alerts—so your rent-collection timeline stays consistent and compliant.",
    plainEnglish: [
      "Runs on the day you choose (like the 5th).",
      "Flags who is late based on balance owed.",
      "Triggers the next step automatically (email or internal action).",
    ],
    connectsTo: ["DoorLoop", "Gmail/Email", "Scheduled automation"],
    underTheHood: [
      "Trigger: Monthly schedule.",
      "Find tenant balances; continue only if balance > 0.",
      "Send notice email (or alert your team) using approved compliance wording.",
    ],
    needsFromYou: [
      "Your grace period and late date.",
      "Approved legal/compliance text for notices.",
      "Exclusions list (e.g., special handling tenants).",
    ],
    pitch:
      "Collections shouldn’t depend on someone’s mood or memory. This keeps your clock accurate and consistent—so you protect cash flow and reduce legal risk.",
  },

  // Sector Three: Boutique Family Law Firms (Phoenix)
  "law-zero-entry-intake": {
    sector: "Boutique Family Law Firms (Phoenix, AZ)",
    name: "Zero‑Entry Intake & Conflict Check",
    outcome:
      "Turns website intake submissions into a case file automatically and flags conflict checks immediately—saving admin time and accelerating response.",
    plainEnglish: [
      "New intake form creates the client contact automatically.",
      "Creates a matter note with key intake details.",
      "Emails the opposing party name for a fast conflict check.",
    ],
    connectsTo: ["Typeform", "Clio Manage", "Gmail/Email"],
    underTheHood: [
      "Trigger: New Typeform submission.",
      "Create person contact in Clio, create matter note, email conflict-check alert.",
    ],
    needsFromYou: [
      "Typeform access to map questions to fields.",
      "Clio Manage admin permissions.",
      "Who receives conflict-check alerts (email address).",
    ],
    pitch:
      "Your intake process shouldn’t be a bottleneck. This eliminates re-typing, speeds up conflict checks, and helps you respond while the prospect is still motivated.",
  },

  "law-instant-retainer": {
    sector: "Boutique Family Law Firms (Phoenix, AZ)",
    name: "Instant Retainer Generator",
    outcome:
      "Generates a personalized retainer agreement automatically when a matter becomes active—cutting time-to-contract and improving conversion.",
    plainEnglish: [
      "Switch a matter to Open, and the retainer is generated.",
      "Uses your firm’s template and fills in the client details.",
      "Saves the PDF in the correct client folder, ready to send for signature.",
    ],
    connectsTo: ["Clio Manage", "Google Docs", "Google Drive"],
    underTheHood: [
      "Trigger: Matter status updated to Open (with practice-area filter).",
      "Create document from template, convert/upload to the matter folder.",
    ],
    needsFromYou: [
      "A clean Google Doc retainer template with merge tags.",
      "Your pricing/fee structure logic.",
      "Drive folder location (or folder rules) for client files.",
    ],
    pitch:
      "Strike while the iron is hot. This creates the agreement instantly so you can get a contract out while you’re still on the phone.",
  },

  "law-gentle-nudge-ar": {
    sector: "Boutique Family Law Firms (Phoenix, AZ)",
    name: "Gentle Nudge (Accounts Receivable)",
    outcome:
      "Automates polite payment reminders for unpaid bills—improving collections without making attorneys play debt collector.",
    plainEnglish: [
      "If a bill is unpaid after your chosen window, a polite reminder goes out automatically.",
      "Escalates to a firmer follow-up if it remains unpaid.",
      "Keeps cash flow consistent with less awkwardness.",
    ],
    connectsTo: ["Clio Manage", "Gmail/Email"],
    underTheHood: [
      "Trigger: Bill becomes Unpaid/Overdue.",
      "Delay, re-check status, then send the appropriate email sequence.",
    ],
    needsFromYou: ["Your reminder schedule (7/14/30 days).", "Polite + firm email copy.", "Clio billing status labels."],
    pitch:
      "You aren’t a bill collector. This sends consistent reminders automatically, so your realization rate improves without eating billable hours.",
  },

  "law-court-date-sync": {
    sector: "Boutique Family Law Firms (Phoenix, AZ)",
    name: "Court Date Client Sync",
    outcome:
      "Sends clients hearing/trial dates and reminders automatically—reducing missed dates and cutting “when is it again?” calls.",
    plainEnglish: [
      "Detects court-related calendar entries.",
      "Sends the client an invite and a reminder text (if desired).",
      "Reduces anxiety and improves attendance.",
    ],
    connectsTo: ["Clio Manage", "Email", "SMS"],
    underTheHood: [
      "Trigger: New calendar entry in Clio.",
      "Filter by keywords (Hearing/Court/etc.).",
      "Send invite + SMS reminder to the client associated to the matter.",
    ],
    needsFromYou: [
      "Your keyword list (e.g., Hearing, Deposition, Mediation).",
      "Confirm client mobile numbers are stored in Clio.",
      "Privacy rules for what can be included in messages.",
    ],
    pitch:
      "Missed dates are costly and stressful. This keeps clients synced to your calendar without exposing sensitive details.",
  },

  "law-proactive-status-updater": {
    sector: "Boutique Family Law Firms (Phoenix, AZ)",
    name: "Proactive Status Updater",
    outcome:
      "Automatically informs clients when their case moves stages—cutting status calls and improving the client experience.",
    plainEnglish: [
      "When you move a case stage, the client gets a clear explanation of what it means.",
      "You can attach guides (Discovery, Mediation prep, etc.).",
      "Clients feel cared for without extra admin work.",
    ],
    connectsTo: ["Clio Manage", "Gmail/Email"],
    underTheHood: [
      "Trigger: Matter stage/status updated.",
      "Use rules/paths to send the right stage guide.",
      "Send a templated email to the client.",
    ],
    needsFromYou: ["Your list of matter stages.", "Stage guide content (emails or PDFs).", "Approved messaging tone."],
    pitch:
      "The #1 complaint is lack of communication. This makes communication automatic at the moments clients care about most—without adding meetings to your day.",
  },
  };

  function escapeHtml(s) {
    return String(s)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function renderList(items) {
    if (!items || items.length === 0) return "";
    return `<ul class="modal-list">${items.map((x) => `<li>${escapeHtml(x)}</li>`).join("")}</ul>`;
  }

  function renderTags(tags) {
    if (!tags || tags.length === 0) return "";
    return `<div class="modal-tags">${tags.map((t) => `<span class="chip">${escapeHtml(t)}</span>`).join("")}</div>`;
  }

  function buildModalHtml(p) {
    return `
    <div class="modal-section">
      <div class="modal-k">What this item does</div>
      <div class="modal-v">${escapeHtml(p.outcome)}</div>
    </div>

    <div class="modal-section">
      <div class="modal-k">White-glove installation</div>
      <div class="modal-v">
        A Deployment Officer sits down with you to securely connect your tools, request the right access, and install
        this automation end-to-end.
      </div>
    </div>

    <div class="modal-section">
      <div class="modal-k">Feels like</div>
      ${renderList(p.plainEnglish)}
    </div>

    <div class="modal-section">
      <div class="modal-k">Connects to</div>
      ${renderTags(p.connectsTo)}
    </div>

    <details class="modal-details">
      <summary>How it works (optional)</summary>
      <div class="modal-details__body">
        ${renderList(p.underTheHood)}
      </div>
    </details>

    <details class="modal-details">
      <summary>What we need from you (setup checklist)</summary>
      <div class="modal-details__body">
        ${renderList(p.needsFromYou)}
      </div>
    </details>

    <div class="modal-section">
      <div class="modal-k">Why owners buy it</div>
      <div class="modal-v">${escapeHtml(p.pitch)}</div>
    </div>
  `;
  }

  function initStore() {
    const modal = qs("#productModal");
    const title = qs("#modalTitle");
    const eyebrow = qs("#modalEyebrow");
    const body = qs("#modalBody");
    const ask = qs("#modalAskLink");
    const cta = qs("#modalCtaLink");

    if (!modal || !title || !body || !ask || !cta) return;

    let lastFocus = null;

    const close = () => {
      modal.hidden = true;
      document.body.style.overflow = "";
      if (lastFocus && typeof lastFocus.focus === "function") lastFocus.focus();
    };

    const open = (id, triggerEl) => {
      const p = PRODUCTS[id];
      if (!p) return;
      lastFocus = triggerEl || document.activeElement;

      eyebrow.textContent = p.sector;
      title.textContent = p.name;
      body.innerHTML = buildModalHtml(p);

      const subj = encodeURIComponent(`Kerzie AI — Request: ${p.name}`);
      const msg = encodeURIComponent(
        [
          `Hi Kerzie AI,`,
          ``,
          `I’d like to purchase/install this off-the-shelf automation:`,
          `${p.name}`,
          ``,
          `Business type: ${p.sector}`,
          ``,
          `Best contact info:`,
          ``,
          `Thanks,`,
        ].join("\n")
      );

      cta.setAttribute("href", `mailto:hello@kerzie.ai?subject=${subj}&body=${msg}`);
      ask.setAttribute("href", `./index.html#contact`);

      modal.hidden = false;
      document.body.style.overflow = "hidden";

      const closeBtn = qs('[data-modal-close][aria-label="Close"]', modal);
      if (closeBtn) closeBtn.focus();
    };

    qsa(".product[data-product-id]").forEach((btn) => {
      btn.addEventListener("click", () => open(btn.dataset.productId, btn));
    });

    qsa("[data-modal-close]", modal).forEach((el) => el.addEventListener("click", close));

    window.addEventListener("keydown", (e) => {
      if (modal.hidden) return;
      if (e.key === "Escape") close();
    });
  }

  initStore();
})();


