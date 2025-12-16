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

  // Sector Four: Residential and Commercial Roofing
  "roofing-speed-to-lead": {
    sector: "Residential and Commercial Roofing",
    name: 'Speed-to-Lead: The "Instant Strike" Deployment',
    outcome:
      "Eliminates the gap between lead submission and sales rep mobilization during high-volume storm events, ensuring you're first to respond.",
    plainEnglish: [
      "Facebook Lead Ads automatically create contact and job in JobNimbus.",
      "Filters out low-quality leads and renters to preserve sales team focus.",
      "Immediate SMS to customer with proximity-based message for high conversion.",
      "Sales team gets instant alert in Slack for rapid mobilization.",
    ],
    connectsTo: ["Facebook Lead Ads", "JobNimbus", "LeadConnector (GoHighLevel)", "Slack"],
    underTheHood: [
      "Trigger: Facebook Lead Ads (New Lead).",
      "Filter: Only continue if Lead_Quality is NOT 'Low' AND Homeowner_Status is 'Owner'.",
      "Action 1: JobNimbus (Create Contact) with Lead Source tracking.",
      "Action 2: JobNimbus (Create Job) on 'Storm Pipeline' board.",
      "Action 3: LeadConnector (Add to Campaign) with immediate SMS.",
    ],
    needsFromYou: [
      "Facebook Lead Ads account access.",
      "JobNimbus admin credentials.",
      "LeadConnector/GoHighLevel account setup.",
      "SMS message template approval.",
    ],
    pitch:
      "During storms, speed wins. This 'Instant Strike' workflow ensures every lead gets an immediate response and your sales team is alerted instantly—turning storm events into revenue opportunities.",
  },

  "roofing-review-anchor": {
    sector: "Residential and Commercial Roofing",
    name: 'Reputation: The "Review Anchor" Protocol',
    outcome:
      "Captures positive sentiment immediately upon 'substantial completion,' anchoring your local SEO against 'storm chaser' competitors with photo-enhanced reviews.",
    plainEnglish: [
      "Detects when job status changes to 'Production Complete' or 'Invoiced'.",
      "Retrieves 'After' photo gallery from CompanyCam.",
      "Enrolls customer in review campaign with hero image attached.",
      "Reviews with photos perform 3x better in Google Local Services Ads.",
    ],
    connectsTo: ["JobNimbus", "CompanyCam", "NiceJob/Podium"],
    underTheHood: [
      "Trigger: JobNimbus (Job Modified) when Status changes to completion.",
      "Action 1: CompanyCam (Find Project) via JobNimbus_ID or Address.",
      "Action 2: Formatter extracts URL of 'Main Hero Image'.",
      "Action 3: NiceJob/Podium (Enroll Contact) with Hero Image attachment.",
    ],
    needsFromYou: [
      "CompanyCam account with API access.",
      "NiceJob or Podium subscription.",
      "Review request message template.",
    ],
    pitch:
      "Roofing is visual, but most review requests are text-only. This bridges your production documentation with reputation management, attaching the 'After' photo to remind homeowners of value delivered.",
  },

  "roofing-insurance-limbo": {
    sector: "Residential and Commercial Roofing",
    name: 'Nurture: The "Insurance Limbo" Keep-Alive',
    outcome:
      "Automates educational touchpoints during the 30-60 day insurance adjustment period to prevent customer attrition and position you as the expert advocate.",
    plainEnglish: [
      "Detects when job moves to 'Claim Filed' or 'Pending Adjustment' status.",
      "Waits 5 days, then sends educational guide about adjuster meetings.",
      "Explains concepts like 'Deductible' and 'Depreciation' to build authority.",
      "Reduces homeowner anxiety during the waiting period.",
    ],
    connectsTo: ["JobNimbus", "ActiveCampaign", "Gmail"],
    underTheHood: [
      "Trigger: JobNimbus (Job Modified) when Status moves to insurance-related stages.",
      "Action 1: ActiveCampaign (Add Tag) 'Status: Insurance Pending'.",
      "Action 2: Delay by Zapier (5 Days).",
      "Action 3: Gmail (Send Email) with 'What to Expect' guide.",
    ],
    needsFromYou: [
      "ActiveCampaign account setup.",
      "Educational content templates (adjuster meeting guide).",
      "Email sending address configuration.",
    ],
    pitch:
      "The 'Valley of Death' in roofing sales is the wait for the insurance adjuster. This ensures continuous, high-value communication without manual intervention, building authority and reducing homeowner anxiety.",
  },

  "roofing-material-drop": {
    sector: "Residential and Commercial Roofing",
    name: 'Operations: The "Material Drop" Logistics Sync',
    outcome:
      "Synchronizes material delivery with crew arrival to minimize site congestion and theft risk, ensuring operational efficiency.",
    plainEnglish: [
      "Detects when job status moves to 'Ready for Production'.",
      "Sends notification to production logistics channel in Slack.",
      "Creates calendar event for scheduled start date.",
      "Creates Trello card with checklist for permits, dumpster, crew confirmation.",
    ],
    connectsTo: ["JobNimbus", "Slack", "Google Calendar", "Trello"],
    underTheHood: [
      "Trigger: JobNimbus (Job Modified) when Status moves to 'Ready for Production'.",
      "Action 1: Slack (Channel Message) to #production-logistics with job details.",
      "Action 2: Google Calendar (Create Event) using Scheduled_Start_Date.",
      "Action 3: Trello (Create Card) with production checklist.",
    ],
    needsFromYou: [
      "Slack workspace and channel setup.",
      "Google Calendar access for production calendar.",
      "Trello board and list configuration.",
    ],
    pitch:
      "Misalignment between material delivery and crew arrival causes profit leakage. This acts as a digital dispatcher, pushing the 'Ready' signal to all operational platforms simultaneously.",
  },

  "roofing-supplement-commission": {
    sector: "Residential and Commercial Roofing",
    name: 'Finance: The "Supplement & Commission" Reconciliation',
    outcome:
      "Reconciles final job costs against insurance proceeds to accurately calculate sales commissions based on net profit margins.",
    plainEnglish: [
      "Detects when job status moves to 'Paid in Full'.",
      "Ensures customer record exists in QuickBooks Online.",
      "Creates sales receipt with final contract amount including supplements.",
      "Logs commission calculation to Google Sheets for finance team.",
    ],
    connectsTo: ["JobNimbus", "QuickBooks Online", "Google Sheets"],
    underTheHood: [
      "Trigger: JobNimbus (Job Modified) when Status moves to 'Paid in Full'.",
      "Action 1: QuickBooks Online (Find Customer) to ensure record exists.",
      "Action 2: QuickBooks Online (Create Sales Receipt) with Contract_Amount.",
      "Action 3: Google Sheets (Create Row) with commission calculation formula.",
    ],
    needsFromYou: [
      "QuickBooks Online admin access.",
      "Google Sheets 'Commissions 2025' sheet setup.",
      "Commission calculation formula (e.g., 10% of net profit).",
    ],
    pitch:
      "Roofing commissions are complex, often based on 'Split Profit' models. This automates the population of the 'True Up' sheet, allowing finance to issue commission checks with confidence and transparency.",
  },

  // Sector Five: Arboriculture and Tree Care Services
  "tree-emergency-triage": {
    sector: "Arboriculture and Tree Care Services",
    name: 'Speed-to-Lead: The "Emergency Triage" Router',
    outcome:
      "Rapidly identifies and routes 'Emergency' tree removal requests to the nearest crew during severe weather events, bypassing voicemail queues.",
    plainEnglish: [
      "Captures form submission with emergency status and photos.",
      "Filters for emergency or tree-on-structure situations.",
      "Creates lead in SingleOps with 'Critical' priority.",
      "Sends urgent SMS to Operations Manager with photos and address.",
      "Broadcasts to emergency dispatch channel in Slack.",
    ],
    connectsTo: ["JotForm/Gravity Forms", "SingleOps", "Twilio", "Slack"],
    underTheHood: [
      "Trigger: JotForm/Gravity Forms (New Submission) with emergency fields.",
      "Filter: Continue if Emergency is True OR Tree_On_Structure is True.",
      "Action 1: SingleOps (Create Lead) with Priority 'Critical' and photo attachments.",
      "Action 2: Twilio (Send SMS) to Operations Manager with photos link.",
      "Action 3: Slack (Channel Message) to #emergency-dispatch.",
    ],
    needsFromYou: [
      "Form builder account (JotForm or Gravity Forms).",
      "SingleOps API access.",
      "Twilio account for SMS.",
      "Slack workspace setup.",
    ],
    pitch:
      "During storms, tree care companies are inundated with calls. This bypasses the voicemail queue, injecting high-priority emergency jobs directly into your operational bloodstream with photos for immediate assessment.",
  },

  "tree-arborist-authority": {
    sector: "Arboriculture and Tree Care Services",
    name: 'Reputation: The "Arborist Authority" Loop',
    outcome:
      "Leverages the visual transformation of tree work to solicit reviews, specifically targeting 'Preservation' jobs to build a conservationist brand.",
    plainEnglish: [
      "Detects when job is completed in SingleOps.",
      "Filters for 'Pruning' or 'PHC' service types (avoids removal jobs).",
      "Enrolls customer in 'Tree Care' review campaign.",
      "Drafts Facebook post with before/after photos for social proof.",
    ],
    connectsTo: ["SingleOps", "NiceJob", "Facebook Pages"],
    underTheHood: [
      "Trigger: SingleOps (Webhook: Job Completed) with Service_Type.",
      "Filter: Continue if Service_Type contains 'Pruning' OR 'PHC'.",
      "Action 1: NiceJob (Enroll Contact) in 'Tree Care' campaign.",
      "Action 2: Facebook Pages (Create Photo Post) with before/after images.",
    ],
    needsFromYou: [
      "SingleOps webhook configuration.",
      "NiceJob account setup.",
      "Facebook Page admin access.",
    ],
    pitch:
      "Tree care reputation is nuanced. Promoting 'Tree Removal' can attract negative sentiment. This intelligently filters for 'Preservation' work, ensuring your public face is one of stewardship.",
  },

  "tree-phc-renewal": {
    sector: "Arboriculture and Tree Care Services",
    name: 'Nurture: The "PHC Auto-Renewal" Engine',
    outcome:
      "Automates the renewal of annual Plant Health Care programs, converting one-off clients into recurring revenue assets.",
    plainEnglish: [
      "Detects when final visit of PHC program is marked complete.",
      "Waits 10 months (approximately 300 days).",
      "Creates deal in ActiveCampaign 'Renewals' pipeline.",
      "Sends renewal email with Emerald Ash Borer protection message.",
    ],
    connectsTo: ["SingleOps", "ActiveCampaign", "Gmail"],
    underTheHood: [
      "Trigger: SingleOps (Webhook: Job Completed) for final PHC visit.",
      "Action 1: Delay by Zapier (10 months / ~300 days).",
      "Action 2: ActiveCampaign (Create Deal) in 'Renewals' pipeline.",
      "Action 3: Gmail (Send Email) with renewal offer.",
    ],
    needsFromYou: [
      "SingleOps webhook setup.",
      "ActiveCampaign account with 'Renewals' pipeline.",
      "Renewal email template content.",
    ],
    pitch:
      "The 'churn' in PHC often comes from simple administrative failure—forgetting to ask for the renewal. This creates a perpetual motion machine for renewals, timing outreach exactly 10 months after the last treatment.",
  },

  "tree-fleet-health": {
    sector: "Arboriculture and Tree Care Services",
    name: 'Operations: The "Fleet Health" Watchdog',
    outcome:
      "Automates equipment maintenance scheduling based on actual usage hours logged in job data, moving from reactive to proactive maintenance.",
    plainEnglish: [
      "Detects when job is closed in SingleOps.",
      "Looks up equipment asset in Fleet Log (Google Sheets).",
      "Adds job duration to current hours total.",
      "If hours exceed maintenance interval, alerts mechanic via Slack.",
    ],
    connectsTo: ["SingleOps", "Google Sheets", "Slack"],
    underTheHood: [
      "Trigger: SingleOps (Webhook: Job Closed) with Equipment_Used array and Duration.",
      "Action 1: Google Sheets (Lookup Row) for specific Asset ID.",
      "Action 2: Google Sheets (Update Row) adding Job_Duration to Current_Hours.",
      "Action 3: Filter if Current_Hours > Maintenance_Interval (e.g., 100 hours).",
      "Action 4: Slack (Message Mechanic) with maintenance alert.",
    ],
    needsFromYou: [
      "Google Sheets 'Fleet Log' with asset tracking setup.",
      "Maintenance interval thresholds per equipment type.",
      "Slack channel or user for mechanic notifications.",
    ],
    pitch:
      "Equipment downtime destroys profitability. A chipper breaking down on a job site halts the entire crew. This moves maintenance from 'Reactive' to 'Data-Driven Proactive,' ensuring assets are serviced based on actual utilization.",
  },

  "tree-job-costing": {
    sector: "Arboriculture and Tree Care Services",
    name: 'Finance: The "Job Costing" Auditor',
    outcome:
      "Automatically flags jobs where actual labor hours exceeded estimated hours by a significant margin, providing real-time feedback to the sales team.",
    plainEnglish: [
      "Detects when job is closed with estimated vs actual hours.",
      "Calculates variance percentage.",
      "If variance exceeds 20%, alerts Sales Manager via email.",
      "Provides data for corrective training or pricing adjustments.",
    ],
    connectsTo: ["SingleOps", "Zapier Tables", "Gmail"],
    underTheHood: [
      "Trigger: SingleOps (Webhook: Job Closed) with Estimated_Man_Hours vs Actual_Man_Hours.",
      "Action 1: Zapier Tables (Calculate Variance) formula: (Actual - Estimated) / Estimated.",
      "Filter: Continue if Variance > 0.20 (20% over budget).",
      "Action 2: Gmail (Email Sales Manager) with bidding alert.",
    ],
    needsFromYou: [
      "SingleOps webhook with job costing data.",
      "Sales Manager email address.",
      "Variance threshold configuration (default 20%).",
    ],
    pitch:
      "Profit fade in tree care is invisible until the P&L is run at month-end. This provides real-time feedback to the sales team, exposing trends immediately for corrective training or pricing adjustments.",
  },

  // Sector Six: Swimming Pool Maintenance and Construction
  "pool-route-density": {
    sector: "Swimming Pool Maintenance and Construction",
    name: 'Speed-to-Lead: The "Route Density" Analyzer',
    outcome:
      "Instantly captures leads and qualifies them based on proximity to existing high-density routes, ensuring route maps remain tight and profitable.",
    plainEnglish: [
      "Captures form submission with address and pool details.",
      "Calculates driving distance from depot or route center point.",
      "Creates customer record in Skimmer with distance noted.",
      "Alerts sales team with priority level based on route proximity.",
    ],
    connectsTo: ["Typeform", "Google Maps", "Skimmer", "Slack"],
    underTheHood: [
      "Trigger: Typeform (New Submission) with Address, Pool Size fields.",
      "Action 1: Google Maps (Calculate Distance) from Depot to lead address.",
      "Action 2: Skimmer (Create Customer) with 'Distance: X miles' in notes.",
      "Action 3: Slack (Notify Channel) with priority level (High/Low).",
    ],
    needsFromYou: [
      "Typeform account with form setup.",
      "Google Maps API key.",
      "Skimmer account access.",
      "Route center point coordinates.",
    ],
    pitch:
      "In the pool business, taking a customer 20 miles outside a core route is a profit killer. This automates the 'viability check,' ensuring the sales team knows whether to aggressively pursue the lead or refer it out.",
  },

  "pool-sparkling-water": {
    sector: "Swimming Pool Maintenance and Construction",
    name: 'Reputation: The "Sparkling Water" Proof',
    outcome:
      "Uses the 'After' photo generated by the tech at every visit to drive social proof and reduce customer churn through consistent social media presence.",
    plainEnglish: [
      "Detects when service is finished in Skimmer.",
      "Randomly selects 1 in 20 visits (5% sample rate).",
      "Generates Instagram caption using AI about crystal clear pool.",
      "Publishes service photo to company Instagram feed.",
    ],
    connectsTo: ["Skimmer", "Zapier Interfaces/AI", "Instagram for Business"],
    underTheHood: [
      "Trigger: Skimmer (Webhook: Service Finished) with Service_Image_URL.",
      "Filter: Continue if Service_Type is 'Weekly Maintenance' AND Random_Sample (1 in 20).",
      "Action 1: Zapier Interfaces/AI (Generate Caption) with pool service prompt.",
      "Action 2: Instagram for Business (Publish Photo) to company feed.",
    ],
    needsFromYou: [
      "Skimmer webhook configuration.",
      "Instagram Business account connected.",
      "AI caption generation preferences.",
    ],
    pitch:
      "Pool owners often wonder, 'Did the pool guy even show up?' This turns operational proof (the confirmation photo) into marketing assets, maintaining an active social feed that demonstrates consistency without overwhelming the marketing manager.",
  },

  "pool-chemical-upsell": {
    sector: "Swimming Pool Maintenance and Construction",
    name: 'Nurture: The "Chemical Upsell" Automation',
    outcome:
      "Identifies pools that consistently consume high levels of expensive chemicals and upsells them on efficiency equipment (Salt Cells, UV systems), transforming high-cost customers into high-revenue customers.",
    plainEnglish: [
      "Detects when chemical usage is logged in Skimmer.",
      "Logs customer ID, chemical type, and amount to Google Sheets.",
      "Aggregates monthly chlorine cost per customer.",
      "If monthly cost exceeds $50, triggers upsell email about Salt Systems.",
    ],
    connectsTo: ["Skimmer", "Google Sheets", "Zapier Tables", "ActiveCampaign"],
    underTheHood: [
      "Trigger: Skimmer (Webhook: Dosage Recorded) when chemical usage is logged.",
      "Action 1: Google Sheets (Add Row) with Customer_ID, Chemical_Type, Amount.",
      "Action 2: Zapier Tables (Aggregate) sums Monthly_Chlorine_Cost per customer.",
      "Action 3: ActiveCampaign (Trigger Automation) if Monthly_Cost > $50.",
    ],
    needsFromYou: [
      "Skimmer webhook with chemical usage data.",
      "Google Sheets for cost tracking.",
      "ActiveCampaign automation setup with upsell email.",
    ],
    pitch:
      "This is a high-value 'Data Mining' automation. It uses operational data (chemical usage) to drive capital sales, transforming a high-cost customer into a high-revenue customer while solving their pain point (high chemical bills).",
  },

  "pool-gate-code": {
    sector: "Swimming Pool Maintenance and Construction",
    name: 'Operations: The "Gate Code" Update Sync',
    outcome:
      "Ensures field technicians have real-time access to updated access codes, preventing 'Locked Out' service skips that cost fuel and labor with zero revenue.",
    plainEnglish: [
      "Detects when Gate_Code or Dog_Status is updated in Skimmer.",
      "Sends SMS to assigned technician with new code and dog warning.",
      "Logs 'Tech Notified' note in Skimmer for liability audit trail.",
    ],
    connectsTo: ["Skimmer", "SMS by Zapier"],
    underTheHood: [
      "Trigger: Skimmer (Customer Updated) when Gate_Code or Dog_Status field is modified.",
      "Action 1: SMS by Zapier (Send Text) to Assigned Technician with updated info.",
      "Action 2: Skimmer (Log Note) 'Tech Notified of Code Change'.",
    ],
    needsFromYou: [
      "Skimmer customer update webhook.",
      "SMS provider setup (Twilio or similar).",
      "Technician phone number mapping.",
    ],
    pitch:
      "A 'Locked Out' stop is a wasted trip. This solves the communication latency between the office (who receives the code change call) and the field (who needs the code now).",
  },

  "pool-billable-extra": {
    sector: "Swimming Pool Maintenance and Construction",
    name: 'Finance: The "Billable Extra" Sweeper',
    outcome:
      "Automatically identifies and invoices for 'Extra' items (filter cleans, phosphate treatments) that are not covered in the base monthly fee, potentially increasing revenue by 5-10%.",
    plainEnglish: [
      "Detects when work order is completed in Skimmer.",
      "Checks Items_Used array for billable items not yet invoiced.",
      "Creates detailed invoice in QuickBooks Online for specific items.",
      "If customer has autopay, charges card immediately via Stripe.",
    ],
    connectsTo: ["Skimmer", "QuickBooks Online", "Stripe"],
    underTheHood: [
      "Trigger: Skimmer (Webhook: Work Order Completed) with Items_Used array.",
      "Filter: Continue if Item_Billable is True AND Invoiced is False.",
      "Action 1: QuickBooks Online (Create Invoice) for specific items.",
      "Action 2: Stripe (Create Charge) if customer has 'Autopay' enabled.",
    ],
    needsFromYou: [
      "Skimmer webhook with work order completion data.",
      "QuickBooks Online account.",
      "Stripe account for payment processing.",
    ],
    pitch:
      "'Revenue Leakage' is rampant in the pool industry—techs perform a $20 filter clean but forget to tell the office to bill it. This closes the loop, ensuring every billable action results in an invoice.",
  },

  // Sector Seven: Commercial Landscape Management
  "landscape-commercial-rfp": {
    sector: "Commercial Landscape Management",
    name: 'Speed-to-Lead: The "Commercial RFP" Handshake',
    outcome:
      "Immediately acknowledges complex commercial RFPs (Request for Proposals) and routes them to the specialized estimating team, ensuring high-value leads aren't lost.",
    plainEnglish: [
      "Captures LinkedIn Lead Gen Form submission with company and portfolio details.",
      "Creates contact in LMN (Landscape Management Network).",
      "Creates deal in HubSpot for long-cycle sales tracking.",
      "Notifies estimator channel in Slack with company and portfolio size.",
    ],
    connectsTo: ["LinkedIn Lead Gen Forms", "LMN", "HubSpot", "Slack"],
    underTheHood: [
      "Trigger: LinkedIn Lead Gen Forms (New Submission).",
      "Action 1: LMN (Create Contact) with Title, Company, Portfolio Size.",
      "Action 2: HubSpot (Create Deal) for sales tracking.",
      "Action 3: Slack (Notify Channel) with RFP details and assignee.",
    ],
    needsFromYou: [
      "LinkedIn Lead Gen Forms setup.",
      "LMN account with API access.",
      "HubSpot account for sales pipeline.",
      "Slack channel for estimator notifications.",
    ],
    pitch:
      "Commercial sales cycles are long and relationship-driven. This ensures a high-value lead from LinkedIn isn't lost in an inbox, creating records in both operational CRM (LMN) and sales CRM (HubSpot).",
  },

  "landscape-compliance-notification": {
    sector: "Commercial Landscape Management",
    name: 'Reputation: The "Proactive Compliance" Notification',
    outcome:
      "Notifies Property Managers before they ask that a service (e.g., snow plowing) has been completed, mitigating their anxiety about tenant safety.",
    plainEnglish: [
      "Detects when task is completed in LMN (crew clocks out).",
      "Filters for 'Snow Plowing' or 'Salting' service types.",
      "Sends SMS to Property Manager confirming service completion.",
      "Logs service details to Google Sheets for liability tracking.",
    ],
    connectsTo: ["LMN", "Twilio", "Google Sheets"],
    underTheHood: [
      "Trigger: LMN (Task Completed) when crew clocks out via LMN Time app.",
      "Filter: Continue if Service_Type is 'Snow Plowing' or 'Salting'.",
      "Action 1: Twilio (Send SMS) to Property Manager with completion confirmation.",
      "Action 2: Google Sheets (Add Row) to 'Liability Log' with timestamp and details.",
    ],
    needsFromYou: [
      "LMN Time app integration.",
      "Twilio account for SMS.",
      "Google Sheets 'Liability Log' setup.",
      "Property Manager contact list.",
    ],
    pitch:
      "In commercial management, silence is stressful. By proactively pushing the 'Service Complete' notification, you allow the Property Manager to sleep soundly and report to tenants that the site is safe.",
  },

  "landscape-seasonal-enhancement": {
    sector: "Commercial Landscape Management",
    name: 'Nurture: The "Seasonal Enhancement" Proposer',
    outcome:
      "Automatically proposes 'Enhancement Services' (mulch, flowers, color changes) based on the calendar season to drive ancillary revenue.",
    plainEnglish: [
      "Triggers on 1st of March (Mulch) and 1st of October (Bulbs/Mums).",
      "Finds all active commercial clients with 'Enhancement' tags in LMN.",
      "Sends visual proposal via Mailchimp campaign.",
      "Creates follow-up task in LMN for Account Manager.",
    ],
    connectsTo: ["Schedule by Zapier", "LMN", "Mailchimp"],
    underTheHood: [
      "Trigger: Schedule by Zapier (Monthly) on 1st of March and October.",
      "Action 1: LMN (Find Contact) with 'Enhancement' tags.",
      "Action 2: Mailchimp (Send Campaign) with visual color menu proposal.",
      "Action 3: LMN (Create ToDo) 'Follow up on Spring Color Proposal'.",
    ],
    needsFromYou: [
      "LMN contact tagging system.",
      "Mailchimp account with campaign templates.",
      "Enhancement service pricing and menu.",
    ],
    pitch:
      "'Enhancements' are the highest margin revenue in landscaping. This automates the proposal process, ensuring every client is presented with upgrade options at the optimal seasonal moment.",
  },

  "landscape-weather-trigger": {
    sector: "Commercial Landscape Management",
    name: 'Operations: The "Weather Trigger" Dispatch',
    outcome:
      "Automates snow crew mobilization based on meteorological triggers to optimize response times and ensure compliance with SLAs.",
    plainEnglish: [
      "Monitors weather forecast for snow accumulation.",
      "If accumulation exceeds 2 inches in service zip codes, triggers mobilization.",
      "Creates task in LMN for dispatcher.",
      "Broadcasts message to snow operations channel in Slack.",
      "Calls Operations Manager for overnight wake-up if needed.",
    ],
    connectsTo: ["Weather by Zapier", "LMN", "Slack", "Twilio"],
    underTheHood: [
      "Trigger: Weather by Zapier (Snow Forecast) if accumulation > 2 inches in Zip Code.",
      "Action 1: LMN (Create ToDo/Note) 'Snow Event Mobilization' assigned to Dispatcher.",
      "Action 2: Slack (Broadcast Message) to #snow-ops channel.",
      "Action 3: Twilio (Voice Call) to Ops Manager for overnight wake-up.",
    ],
    needsFromYou: [
      "Weather by Zapier setup with zip code monitoring.",
      "LMN task management system.",
      "Slack workspace for snow operations.",
      "Operations Manager phone number.",
    ],
    pitch:
      "Snow events often happen at 2:00 AM. This acts as an automated watchman, triggering mobilization the moment the forecast crosses the contractual threshold (2 inches), ensuring compliance with SLAs.",
  },

  "landscape-tm-capture": {
    sector: "Commercial Landscape Management",
    name: 'Finance: The "T&M" Capture',
    outcome:
      "Ensures that 'Time and Material' (T&M) extra work—often performed during emergencies—is billed immediately to close the cash flow gap.",
    plainEnglish: [
      "Detects when timesheet marked 'Billable Extra' is approved in LMN.",
      "Creates invoice in QuickBooks Online with labor notes and materials.",
      "Notifies finance team in Microsoft Teams to review and send.",
    ],
    connectsTo: ["LMN", "QuickBooks Online", "Microsoft Teams"],
    underTheHood: [
      "Trigger: LMN (Time Entry Approved) when marked 'Billable Extra'.",
      "Action 1: QuickBooks Online (Create Invoice) with labor notes and material usage.",
      "Action 2: Microsoft Teams (Message Finance) with invoice draft notification.",
    ],
    needsFromYou: [
      "LMN time entry approval workflow.",
      "QuickBooks Online account.",
      "Microsoft Teams workspace for finance notifications.",
    ],
    pitch:
      "Emergency work (e.g., storm cleanup) is often done on a handshake. If not invoiced within 48 hours, the client may dispute the hours. This ensures the invoice is generated the moment labor is approved.",
  },

  // Sector Eight: Residential Solar Installation and Maintenance
  "solar-proposal-sync": {
    sector: "Residential Solar Installation and Maintenance",
    name: 'Speed-to-Lead: The "Proposal Sync"',
    outcome:
      "Seamlessly transfers data from the Design/Proposal tool to the CRM to generate a contract instantly, eliminating errors in the handoff process.",
    plainEnglish: [
      "Detects when customer E-signs proposal in Solo/SolarGraf.",
      "Updates JobNimbus job status to 'Closed Won' with system size and contract value.",
      "Generates Installation Agreement in PandaDoc using proposal data.",
      "Notifies team channel in Slack with deal details.",
    ],
    connectsTo: ["Solo/SolarGraf", "JobNimbus", "PandaDoc", "Slack"],
    underTheHood: [
      "Trigger: Solo/SolarGraf (Proposal Signed) webhook when customer E-signs.",
      "Action 1: JobNimbus (Create/Update Job) status to 'Closed Won' with specs.",
      "Action 2: PandaDoc (Create Document) Installation Agreement from proposal data.",
      "Action 3: Slack (Notify Channel) with new deal information.",
    ],
    needsFromYou: [
      "Solo or SolarGraf account with webhook access.",
      "JobNimbus admin credentials.",
      "PandaDoc account with template setup.",
    ],
    pitch:
      "The handoff between 'Signed Proposal' and 'Contract Generation' is where errors occur. This eliminates errors by pulling technical specs directly from the design tool into the legal contract, creating a frictionless experience.",
  },

  "solar-install-day": {
    sector: "Residential Solar Installation and Maintenance",
    name: 'Reputation: The "Install Day" Celebration',
    outcome:
      "Captures the excitement of installation day before the long wait for PTO begins, securing reviews at the peak moment of customer satisfaction.",
    plainEnglish: [
      "Detects when job status changes to 'Install Complete' in JobNimbus.",
      "Sends review request via Podium asking about crew performance.",
      "Fetches drone shots of finished install from CompanyCam.",
      "Sends email explaining what happens next with utility (PTO process).",
    ],
    connectsTo: ["JobNimbus", "Podium", "CompanyCam", "Gmail"],
    underTheHood: [
      "Trigger: JobNimbus (Job Modified) when Status changes to 'Install Complete'.",
      "Action 1: Podium (Send Review Request) 'How did our crew do today?'",
      "Action 2: CompanyCam (Get Gallery Link) for drone shots.",
      "Action 3: Gmail (Send Email) with PTO timeline explanation.",
    ],
    needsFromYou: [
      "JobNimbus status tracking setup.",
      "Podium account for review management.",
      "CompanyCam account with gallery access.",
    ],
    pitch:
      "Homeowners are most excited on Install Day—they can see the panels. This capitalizes on the visual excitement to secure a review before the frustration of the utility wait sets in.",
  },

  "solar-pto-wait": {
    sector: "Residential Solar Installation and Maintenance",
    name: 'Nurture: The "PTO Wait" Pacifier',
    outcome:
      "Proactively updates the customer during the interconnection wait to prevent cancellations and 'ghosting' complaints, simulating a high-touch concierge service.",
    plainEnglish: [
      "Detects when job status changes to 'PTO Submitted'.",
      "Adds customer to ActiveCampaign 'PTO Education' automation sequence.",
      "Waits 14 days, then checks status every 2 weeks.",
      "Sends SMS update reassuring customer that delay is normal (utility-side).",
    ],
    connectsTo: ["JobNimbus", "ActiveCampaign", "SMS by Zapier"],
    underTheHood: [
      "Trigger: JobNimbus (Job Modified) when Status changes to 'PTO Submitted'.",
      "Action 1: ActiveCampaign (Add to Automation) 'PTO Education' sequence.",
      "Action 2: Wait Step (14 Days) then check status every 2 weeks.",
      "Action 3: SMS by Zapier (Send Update) with reassurance message.",
    ],
    needsFromYou: [
      "JobNimbus status tracking.",
      "ActiveCampaign automation sequence setup.",
      "SMS provider configuration.",
    ],
    pitch:
      "Silence is the enemy in solar. A customer who doesn't hear from their installer for 3 weeks assumes the project is broken. This simulates a 'high-touch' service, automatically checking in to reassure the client.",
  },

  "solar-site-survey": {
    sector: "Residential Solar Installation and Maintenance",
    name: 'Operations: The "Site Survey" Handoff',
    outcome:
      "Automates the scheduling of the site survey and the creation of the Engineering ticket, reducing lag time between survey and permit packet generation.",
    plainEnglish: [
      "Detects when job status changes to 'Site Survey Needed'.",
      "Sends Calendly booking link to homeowner for self-scheduling.",
      "Creates Trello card in Engineering CAD Queue.",
      "Reduces back-and-forth emails for scheduling.",
    ],
    connectsTo: ["JobNimbus", "Calendly", "Trello"],
    underTheHood: [
      "Trigger: JobNimbus (Job Modified) when Status changes to 'Site Survey Needed'.",
      "Action 1: Calendly (Create Invitation) sends booking link to homeowner.",
      "Action 2: Trello (Create Card) in Engineering board, CAD Queue list.",
    ],
    needsFromYou: [
      "JobNimbus status workflow.",
      "Calendly account with surveyor calendar.",
      "Trello board setup for engineering queue.",
    ],
    pitch:
      "Scheduling the site survey involves back-and-forth emails. This empowers the homeowner to book their own slot via Calendly while simultaneously queuing the Engineering team to prepare for incoming data.",
  },

  "solar-milestone-payment": {
    sector: "Residential Solar Installation and Maintenance",
    name: 'Finance: The "Milestone Payment" Collector',
    outcome:
      "Automates the collection of progress payments (e.g., due at Material Delivery or Inspection), accelerating cash conversion cycles and maintaining liquidity.",
    plainEnglish: [
      "Detects when 'Inspection Passed' is logged in JobNimbus.",
      "Creates invoice in QuickBooks Online for 'Milestone 2 Payment'.",
      "Emails invoice with direct pay link via Stripe.",
      "Adds note to JobNimbus that milestone invoice was sent.",
    ],
    connectsTo: ["JobNimbus", "QuickBooks Online", "Stripe"],
    underTheHood: [
      "Trigger: JobNimbus (Activity/Status Change) when 'Inspection Passed' is logged.",
      "Action 1: QuickBooks Online (Create Invoice) 'Milestone 2 Payment'.",
      "Action 2: Stripe (Send Payment Link) emails invoice with direct pay link.",
      "Action 3: JobNimbus (Add Note) 'Milestone 2 Invoice Sent'.",
    ],
    needsFromYou: [
      "JobNimbus activity tracking setup.",
      "QuickBooks Online account.",
      "Stripe account for payment links.",
    ],
    pitch:
      "Cash flow in solar is lumpy. Waiting for the back office to manually generate an invoice after an inspection passes can delay funding by days. This triggers the invoice the moment the field inspector passes the job.",
  },

  // Sector Nine: Waste Management & Dumpster Rental
  "waste-instant-quote": {
    sector: "Waste Management & Dumpster Rental",
    name: 'Speed-to-Lead: The "Instant Quote" Dispatch Engine',
    outcome:
      "Eliminates lead response latency, reducing the time from inquiry to engagement from hours to seconds, projected to increase lead conversion rates by 30-40%.",
    plainEnglish: [
      "Captures web form submission with dumpster size and delivery window.",
      "Creates 'Prospective Customer' record in ServiceCore for inventory check.",
      "Sends bidirectional SMS via Twilio with price estimate and qualifying question.",
      "Pushes notification to Dispatch channel in Slack for sales team prioritization.",
    ],
    connectsTo: ["Jotform", "ServiceCore", "Twilio", "Slack"],
    underTheHood: [
      "Trigger: Jotform (New Submission) 'Quote Request Form'.",
      "Action: Formatter by Zapier (Text) clean phone number and parse address.",
      "Action: ServiceCore (Create Customer) via Webhooks/API with custom fields.",
      "Action: Twilio (Send SMS) to customer with price estimate.",
      "Action: Slack (Channel Message) to #sales-dispatch with lead details.",
    ],
    needsFromYou: [
      "Jotform account with quote request form.",
      "ServiceCore API Key with Write permissions.",
      "Twilio A2P 10DLC registration for carrier compliance.",
      "Pricing lookup table (Zapier or Google Sheets) based on Zip Code.",
    ],
    pitch:
      "In the time it took us to shake hands, three people in your city searched for a dumpster rental. Two called your competitor because they picked up on the first ring. This installs a 'Speed-to-Lead' protocol that operates faster than your best dispatcher.",
  },

  "waste-haul-off-review": {
    sector: "Waste Management & Dumpster Rental",
    name: 'Reputation: The "Haul-Off" Review Loop',
    outcome:
      "Systematically drives Google Business Profile density by soliciting reviews at the precise moment of maximum customer satisfaction, insulating the business from negative reviews.",
    plainEnglish: [
      "Detects when driver completes 'Pickup' or 'Exchange' and marks ticket 'Done'.",
      "Waits 2 hours to ensure truck has cleared property and driveway is swept.",
      "Filters for any 'Incident Reports' (damage, overfilled fines) - only asks if clean.",
      "Triggers review request via Podium or NiceJob via SMS.",
    ],
    connectsTo: ["ServiceCore", "Podium/NiceJob"],
    underTheHood: [
      "Trigger: ServiceCore (Job Status Updated) filter for 'Status: Completed' AND 'Job Type: Pickup'.",
      "Action: Delay by Zapier (120 Minutes).",
      "Filter: Continue only if 'Driver Notes' does not contain 'Damage', 'Overweight', or 'Blocked'.",
      "Action: Podium (Create Review Invite) send via SMS.",
    ],
    needsFromYou: [
      "ServiceCore webhook listener on job.updated event.",
      "Strict driver protocol to tag 'Incidents' to prevent bad survey sends.",
      "Active Podium subscription linked to Google Business Profile.",
    ],
    pitch:
      "Your drivers do the heavy lifting, but your online reputation is doing the heavy lifting for your marketing. This automates the 'Ask' two hours after your driver pulls away, filtering out problem jobs so you never ask an angry client for a review.",
  },

  "waste-commercial-reactivation": {
    sector: "Waste Management & Dumpster Rental",
    name: "Nurture: Commercial Account Reactivation",
    outcome:
      "Increases Customer Lifetime Value (LTV) by systematically identifying and re-engaging dormant commercial accounts before they defect to competitors.",
    plainEnglish: [
      "Runs weekly schedule (Friday at 8:00 AM).",
      "Queries ServiceCore database for commercial accounts with no active rental in 90 days.",
      "Pushes contacts into 'Win-Back' sequence in ActiveCampaign.",
      "Offers specific incentive (e.g., 'Contractor Pricing' on next 30-yarder).",
    ],
    connectsTo: ["Schedule by Zapier", "ServiceCore", "ActiveCampaign"],
    underTheHood: [
      "Trigger: Schedule by Zapier (Every Week) Friday at 8:00 AM.",
      "Action: ServiceCore (Find Customer) via API Search or linked Google Sheet.",
      "Filter: Continue if 'Last Job Date' < 90 days AND 'Customer Type' = 'Commercial'.",
      "Action: ActiveCampaign (Add Contact to Automation) 'Commercial Win-Back Sequence'.",
    ],
    needsFromYou: [
      "Weekly export or sync of ServiceCore customer data to Google Sheets for easier querying.",
      "Clear tagging of 'Commercial' vs 'Residential' in ServiceCore.",
      "Pre-built email templates offering specific B2B incentives.",
    ],
    pitch:
      "You have a list of contractors in your database who haven't rented from you in three months. They didn't fire you; they just got busy or a competitor offered them a deal. This 'Reactivation Engine' finds these dormant accounts and pings them with a 'Welcome Back' offer every Friday.",
  },

  "waste-driver-logistics": {
    sector: "Waste Management & Dumpster Rental",
    name: "Operations: Driver Logistics & Route Sync",
    outcome:
      "Reduces missed pickups and fuel waste by ensuring real-time synchronization between sales commitments and driver logistics.",
    plainEnglish: [
      "Detects when job is created in ServiceCore with 'Urgent' or 'Same Day' tag.",
      "Sends high-priority alert to Dispatch channel in Microsoft Teams.",
      "Creates specific 'Critical Stop' event in Master Route calendar.",
      "Ensures dispatcher sees commitment immediately for route re-optimization.",
    ],
    connectsTo: ["ServiceCore", "Microsoft Teams", "Google Calendar"],
    underTheHood: [
      "Trigger: ServiceCore (New Job Created).",
      "Filter: Continue if 'Job Tags' contains 'Urgent' OR 'Same Day'.",
      "Action: Microsoft Teams (Send Channel Message) 'PRIORITY DISPATCH' alert.",
      "Action: Google Calendar (Create Event) add to 'Master Dispatch' calendar with color code Red.",
    ],
    needsFromYou: [
      "Tagging discipline - sales team must use consistent tags in ServiceCore.",
      "Microsoft Teams or Slack workspace integrated.",
      "Shared Google Calendar accessible by all dispatchers.",
    ],
    pitch:
      "The chaos in dispatch happens when sales promises something operations doesn't see until it's too late. This hard-wires that connection. If a salesperson tags a job as 'Urgent,' your dispatcher gets a 'Red Alert' instantly.",
  },

  "waste-cash-flow-collections": {
    sector: "Waste Management & Dumpster Rental",
    name: 'Finance: The "Cash-Flow" Collections Automator',
    outcome:
      "Reduces Days Sales Outstanding (DSO) by automating the dunning process, ensuring consistent cash flow without administrative burden.",
    plainEnglish: [
      "Monitors invoice status in QuickBooks Online (ServiceCore integrates with QBO).",
      "At 7 days past due: sends friendly 'soft' reminder via SMS.",
      "At 15 days: triggers formal email.",
      "At 30 days: creates 'Collections Call' task in CRM for office manager.",
    ],
    connectsTo: ["QuickBooks Online", "ServiceCore", "Twilio", "Gmail"],
    underTheHood: [
      "Trigger: QuickBooks Online (Invoice Overdue) - ServiceCore integrates with QBO.",
      "Path A (7 Days Late): Twilio (Send SMS) friendly reminder.",
      "Path B (30 Days Late): ServiceCore/CRM (Create Task) 'Call Client re: Collections'.",
      "Action: Gmail (Send Email) attach invoice PDF copy.",
    ],
    needsFromYou: [
      "Active ServiceCore to QuickBooks Online sync.",
      "Mobile numbers synced to QBO 'Mobile' field.",
      "Collections language compliant with local regulations.",
    ],
    pitch:
      "Stop being a bank for your customers. The 'Cash-Flow Automator' takes the awkwardness out of asking for money. The system politely nudges them at 7 days and alerts you at 30 days, creating a rhythm of payment that trains your customers to respect your terms.",
  },

  // Sector Ten: Restoration & Remediation
  "restoration-fnol-mobilization": {
    sector: "Restoration & Remediation",
    name: "Speed-to-Lead: FNOL Instant Mobilization Protocol",
    outcome:
      "Reduces response time to emergency losses to under 5 minutes, ensuring compliance with carrier SLAs and securing the job against competitors.",
    plainEnglish: [
      "Scrapes structured data from FNOL email (Loss Address, Policyholder Name, Type of Loss).",
      "Immediately creates 'New Job' in Xcelerate.",
      "Generates Google Maps link to loss site.",
      "Texts On-Call Project Manager with map link and customer contact info.",
    ],
    connectsTo: ["Email Parser by Zapier", "Xcelerate", "Google Maps", "Twilio"],
    underTheHood: [
      "Trigger: Email Parser by Zapier (New Email) trained on TPA/Lead Source notification formats.",
      "Action: Xcelerate (Create Job) map customer details, loss type, insurance carrier.",
      "Action: Google Maps (Generate Directions Link) from Office HQ to Loss Address.",
      "Action: Twilio (Send SMS) to On-Call PM with map link and contact info.",
    ],
    needsFromYou: [
      "Parsing logic trained on specific email formats from sources like Thumbtack, Angi, or specific carriers.",
      "Xcelerate API Key generated via Settings > Integrations.",
      "Use Zapier 'Formatter' or Lookup Table to determine which PM is on call based on day/time.",
    ],
    pitch:
      "In restoration, the 'Golden Hour' determines the claim's severity and your profitability. This Mobilization Protocol ensures that the second a loss hits your inbox, your on-call PM is rolling with the map and contact info directly on their phone.",
  },

  "restoration-dry-check": {
    sector: "Restoration & Remediation",
    name: 'Reputation: The "Dry-Check" Trust Builder',
    outcome:
      "Mitigates the stress of the restoration process for the homeowner, reducing negative reviews and priming the client for a positive testimonial.",
    plainEnglish: [
      "Detects when job status moves to 'Equipment Set' in Xcelerate.",
      "Sends automated email explaining the drying process (why fans are loud, why it gets hot).",
      "When status moves to 'Job Complete' (if no issues tagged), sends review request.",
    ],
    connectsTo: ["Xcelerate", "Gmail", "Podium/Birdeye"],
    underTheHood: [
      "Trigger: Xcelerate (Job Status Updated) 'Monitor/Drying'.",
      "Action: Gmail (Send Email) 'What to expect: The Drying Process' educational content.",
      "Path B (Trigger: Job Complete): Podium/Birdeye (Send Review Invite) via SMS.",
    ],
    needsFromYou: [
      "Pre-written educational templates regarding equipment noise/heat to manage expectations.",
      "Field discipline - techs must update job status in Xcelerate mobile app in real-time.",
    ],
    pitch:
      "Homeowners panic when they see their walls opened up and hear the fans roaring. This uses automation to hold their hand. The moment equipment is set, they get an email explaining exactly what is happening. When the job is done, we capture that relief and turn it into a 5-star review.",
  },

  "restoration-agent-status": {
    sector: "Restoration & Remediation",
    name: "Nurture: Insurance Agent Status Loop",
    outcome:
      "Increases referral volume by automating status updates to Insurance Agents, keeping them informed without requiring them to call the office.",
    plainEnglish: [
      "Detects when job hits a milestone in Xcelerate (e.g., 'Mitigation Complete,' 'Reconstruction Scheduled').",
      "Identifies 'Referral Source' in Xcelerate.",
      "If source is an agent, sends branded email update at each milestone.",
      "Keeps agent in the loop and reinforces contractor's reliability.",
    ],
    connectsTo: ["Xcelerate", "Gmail"],
    underTheHood: [
      "Trigger: Xcelerate (Job Status Updated).",
      "Filter: Continue if 'Referral Source' is not empty AND contains '@' (valid email).",
      "Action: Gmail (Send Email) to Referral Source with status update.",
    ],
    needsFromYou: [
      "'Referral Source Email' must be a mandatory field during intake in Xcelerate.",
      "Professional status update templates that look personal, not robotic.",
    ],
    pitch:
      "Agents send work to the people who keep them informed. This automates your 'Agent Update' loop. Every time you advance a job, the referring agent gets a branded update, keeping you at the top of their referral list.",
  },

  "restoration-compliance-backup": {
    sector: "Restoration & Remediation",
    name: "Operations: Compliance Photo Backup & Audit Trail",
    outcome:
      "Protects the business from liability and ensures payment by creating a redundant, standardized backup of all job documentation in the cloud.",
    plainEnglish: [
      "Detects when 'New Job' is created in Xcelerate.",
      "Automatically generates structured folder hierarchy in Google Drive.",
      "Creates sub-folders: 'Mitigation Photos', 'Signed Docs', 'Dry Logs'.",
      "Posts Drive link back to Xcelerate Notes field for easy access.",
    ],
    connectsTo: ["Xcelerate", "Google Drive", "Slack"],
    underTheHood: [
      "Trigger: Xcelerate (New Job Created).",
      "Action: Google Drive (Create Folder) naming convention: 'Job# - Customer Name - Date'.",
      "Action: Google Drive (Create Sub-folders) 'Mitigation Photos', 'Signed Docs', 'Dry Logs'.",
      "Action: Slack (Channel Message) 'Job Folder Created' with link.",
    ],
    needsFromYou: [
      "Google Workspace or Dropbox Business account.",
      "Paste the Drive Link back into the Xcelerate 'Notes' field for easy access.",
    ],
    pitch:
      "Liability in restoration comes from lost documentation. If an adjuster asks for a photo from three years ago to justify a bill, can you find it? This builds your digital filing cabinet automatically, ensuring your proof of work is always safe, organized, and ready for an audit.",
  },

  "restoration-deductible-collection": {
    sector: "Restoration & Remediation",
    name: "Finance: Deductible Collection Automator",
    outcome:
      "Accelerates cash flow and reduces bad debt by automating the collection of the policyholder's deductible immediately upon work authorization.",
    plainEnglish: [
      "Monitors 'Deductible Amount' field in Xcelerate.",
      "When 'Work Authorization' is uploaded/signed, if deductible > $0, triggers invoice.",
      "Creates invoice in QuickBooks Online.",
      "Emails payment link to homeowner, setting expectation that deductible is due before work commences.",
    ],
    connectsTo: ["Xcelerate", "QuickBooks Online", "Gmail"],
    underTheHood: [
      "Trigger: Xcelerate (Job Updated) 'Work Auth Signed'.",
      "Filter: Continue if 'Deductible Amount' > 0.",
      "Action: QuickBooks Online (Create Invoice) Line Item: 'Insurance Deductible'.",
      "Action: Gmail (Send Email) 'Please pay your deductible securely here to finalize scheduling'.",
    ],
    needsFromYou: [
      "Xcelerate linked to QuickBooks Online.",
      "Stripe or QuickBooks Payments active to allow online payment.",
    ],
    pitch:
      "Let the system play 'Bad Cop' on the deductible. Instead of your PM having to awkwardly ask for a check, the system automatically invoices the homeowner the moment they sign the work authorization, professionalizing the collection process.",
  },

  // Sector Eleven: Independent Veterinary Practices
  "vet-app-onboarding": {
    sector: "Independent Veterinary Practices",
    name: "Speed-to-Lead: App Onboarding & Welcome Sequence",
    outcome:
      "Drives immediate adoption of the Pet Parent App, reducing future phone call volume by empowering clients to self-serve for appointments and records.",
    plainEnglish: [
      "Detects when 'New Client' is created in Digitail.",
      "Immediately sends branded welcome email sequence.",
      "Includes direct link to download the app and video introduction from lead veterinarian.",
      "Establishes personal connection and drives digital adoption from Day 1.",
    ],
    connectsTo: ["Digitail", "Mailchimp", "Gmail"],
    underTheHood: [
      "Trigger: Digitail (Fetch Client List / New Client).",
      "Action: Mailchimp (Add Subscriber).",
      "Action: Gmail (Send Email) 'Welcome to [Clinic]! Download our App to manage [Pet Name]'s health.'",
    ],
    needsFromYou: [
      "Data mapping: Map 'Pet Name' and 'Client Email' to Mailchimp merge tags.",
      "High-quality 'Welcome' email template with App Store links.",
    ],
    pitch:
      "The best way to stop the phone from ringing is to get clients using the app for bookings and refills. This automates that onboarding, driving digital adoption from the start so your receptionists spend less time on the phone and more time with the patients.",
  },

  "vet-discharge-nps": {
    sector: "Independent Veterinary Practices",
    name: "Reputation: Discharge NPS & Sentiment Analysis",
    outcome:
      "Captures positive sentiment immediately post-visit and intercepts negative feedback before it becomes a public grievance.",
    plainEnglish: [
      "Detects when invoice is created/paid in Digitail (signifying end of visit).",
      "Waits 2 hours, then sends simple NPS (Net Promoter Score) survey via Typeform.",
      "High scores (9-10) are redirected to Google Business Profile review page.",
      "Low scores create 'Call Back' task for Practice Manager to resolve privately.",
    ],
    connectsTo: ["Digitail", "Typeform", "Google Business Profile", "Slack"],
    underTheHood: [
      "Trigger: Digitail (Fetch Invoice List / New Invoice).",
      "Action: Delay by Zapier (2 Hours).",
      "Action: Typeform (Send Form) 'How was [Pet Name]'s visit?'",
      "Path A (Score > 8): Redirect to Google Business Profile.",
      "Path B (Score < 7): Digitail/Slack (Create Task) 'Manager Call Back: Negative Feedback.'",
    ],
    needsFromYou: [
      "Simple 1-question NPS survey logic.",
      "2-hour delay ensures client is home and settled.",
    ],
    pitch:
      "We protect your reputation by listening to your clients before the internet does. After every visit, we ask how it went. If they are happy, we push them to Google. If they are unhappy, we alert you instantly so you can fix it.",
  },

  "vet-puppy-wellness": {
    sector: "Independent Veterinary Practices",
    name: 'Nurture: The "Puppy to Adult" Wellness Journey',
    outcome:
      "Increases compliance with vaccine protocols and preventative care plans through automated, age-appropriate education.",
    plainEnglish: [
      "Segments new patients based on 'Species' and 'Age'.",
      "If puppy is added, enters 12-month educational email series.",
      "Content includes: Potty training, Socialization, Spay/Neuter timing.",
      "Keeps clinic top-of-mind and positions vet as trusted expert.",
    ],
    connectsTo: ["Digitail", "ActiveCampaign/Mailchimp"],
    underTheHood: [
      "Trigger: Digitail (Fetch Patient/Client).",
      "Filter: 'Age' < 1 year AND 'Species' = Canine.",
      "Action: ActiveCampaign/Mailchimp (Add to Automation) 'Puppy Wellness Journey'.",
    ],
    needsFromYou: [
      "12-month content calendar for the email sequence.",
      "Distinct logic for Kittens vs. Puppies.",
    ],
    pitch:
      "A puppy client is a 15-year relationship if you nurture it. This sets up a 'Digital Nurture' track. When you register a puppy, the owner automatically starts receiving helpful, age-specific advice every month, ensuring they come back for adult wellness checks.",
  },

  "vet-lab-result-task": {
    sector: "Independent Veterinary Practices",
    name: "Operations: Reference Lab Result Task Automation",
    outcome:
      "Ensures no diagnostic result is missed (a major liability) and reduces the 'phone tag' time for communicating results to owners.",
    plainEnglish: [
      "Detects when lab results from IDEXX or Antech hit Digitail.",
      "Creates task for specific veterinarian to 'Review Labs'.",
      "Sends Slack notification to vet.",
      "If results marked 'Normal' (via parsing), drafts templated email for vet to approve.",
    ],
    connectsTo: ["Digitail", "Todoist/ClickUp", "Slack"],
    underTheHood: [
      "Trigger: Digitail (Activity/Notification - via Webhook).",
      "Filter: 'Type' = Lab Result.",
      "Action: Todoist/ClickUp (Create Task) 'Review Labs for [Pet Name]'.",
      "Action: Slack (Message to Vet) 'Labs are in for [Pet Name].'",
    ],
    needsFromYou: [
      "Webhook configuration for lab result events if native trigger is broad.",
    ],
    pitch:
      "The 'Did the labs come back?' shuffle wastes your techs' time. This automates the notification. When the results hit Digitail, your vet gets a Slack ping and a task is created, getting answers to worried owners faster.",
  },

  "vet-accounting-sync": {
    sector: "Independent Veterinary Practices",
    name: "Finance: Accounting Sync (Xero/QBO)",
    outcome:
      "Eliminates double-entry of financial data and ensures end-of-day reconciliation is accurate, providing real-time revenue visibility.",
    plainEnglish: [
      "Detects when 'New Invoice' is generated in Digitail.",
      "Maps line items, tax, and client details into accounting software in real-time.",
      "Provides practice owner with accurate, up-to-the-minute view of revenue.",
      "No waiting for bookkeeper.",
    ],
    connectsTo: ["Digitail", "Xero", "Google Sheets"],
    underTheHood: [
      "Trigger: Digitail (Create/Fetch Invoice).",
      "Action: Xero (Create Sales Invoice).",
      "Action: Google Sheets (Add Row) for redundant 'Daily Revenue' log.",
    ],
    needsFromYou: [
      "Xero or QuickBooks Online account.",
      "Tax rates in Digitail match accounting codes exactly.",
    ],
    pitch:
      "Your practice manager shouldn't spend Friday night typing invoices into Xero. This pipes the financial data straight from Digitail to your accounting software in real-time, reducing bookkeeping errors and giving you a real-time view of your practice's financial health.",
  },

  // Sector Twelve: Orthodontics
  "ortho-virtual-smile": {
    sector: "Orthodontics",
    name: 'Speed-to-Lead: The "Virtual Smile" Intake',
    outcome:
      "Increases consult bookings by instantly capturing leads from virtual assessment tools and creating a tracked lead profile for immediate follow-up.",
    plainEnglish: [
      "Captures form submission from Unbounce or Facebook Lead Ads.",
      "Creates 'Lead' in DenGro immediately.",
      "Triggers task for Treatment Coordinator (TC) to call.",
      "Sends 'What to Expect' video to lead via email, warming them up for the call.",
    ],
    connectsTo: ["Facebook Lead Ads / Unbounce", "DenGro", "Mailchimp"],
    underTheHood: [
      "Trigger: Facebook Lead Ads / Unbounce (New Form Submission).",
      "Action: DenGro (Create Lead) map Interest (e.g., 'Invisalign').",
      "Action: DenGro (Create Task) 'New Lead Call'.",
      "Action: Mailchimp (Send Email) 'Welcome to [Practice]. Meet Dr. [Name].'",
    ],
    needsFromYou: [
      "Map 'UTM Source' into DenGro for ROI tracking.",
      "DenGro API Token required for connection.",
    ],
    pitch:
      "You are spending thousands on Invisalign ads, but if you don't call that lead in 5 minutes, the money is wasted. This pipes your leads directly into DenGro and alerts your Treatment Coordinator instantly.",
  },

  "ortho-debonding-celebration": {
    sector: "Orthodontics",
    name: '"Debonding Day" Celebration',
    outcome:
      "Generates high-emotion video testimonials on the day braces come off, capturing the patient's peak excitement.",
    plainEnglish: [
      "Detects when patient's status in DenGro is updated to 'Treatment Complete'.",
      "Waits one hour (to let them get home and look in the mirror).",
      "Sends SMS with link to review platform or request to post selfie and tag practice.",
    ],
    connectsTo: ["DenGro", "Twilio"],
    underTheHood: [
      "Trigger: DenGro (Lead Updated - Status: Treatment Complete).",
      "Action: Delay by Zapier (1 Hour).",
      "Action: Twilio (Send SMS) 'Love your new smile? Show us!'",
    ],
    needsFromYou: [
      "Staff must update DenGro status promptly upon debonding.",
    ],
    pitch:
      "Debonding Day is your best marketing asset. This automates the 'Victory Lap.' One hour after they leave with their new smile, we text them a link to show it off, capturing that joy and turning it into marketing gold.",
  },

  "ortho-observation-pool": {
    sector: "Orthodontics",
    name: 'Nurture: The "Observation Pool" Engagement',
    outcome:
      "Retains younger patients (7-10 year olds) who are not ready for treatment yet but are in the 'Observation' phase, ensuring they start treatment with you when ready.",
    plainEnglish: [
      "Detects when lead is marked 'Observation' in DenGro.",
      "Places contact in 6-month loop in Mailchimp.",
      "Every 180 days, tasks office to schedule growth check.",
      "Sends educational email to parent about dental development.",
    ],
    connectsTo: ["DenGro", "Mailchimp"],
    underTheHood: [
      "Trigger: DenGro (Lead Updated - Status: Observation).",
      "Action: Mailchimp (Add Tag) 'Observation Club'.",
      "Action: Mailchimp (Trigger Journey) email every 180 days: 'Time for a growth check?'",
    ],
    needsFromYou: [
      "Distinct status in DenGro for 'Observation' vs 'Pending'.",
    ],
    pitch:
      "Your 'Observation' cabinet is full of future starts. Don't let them drift away. This automates the relationship. Every six months, the parent gets a friendly nudge from you. When the kid is ready for braces, you are the only orthodontist they will call.",
  },

  "ortho-digital-contract": {
    sector: "Orthodontics",
    name: "Operations: Digital Contract to Start Appointment",
    outcome:
      "Streamlines the onboarding process by converting a signed contract into a 'Ready to Start' status, triggering appointment scheduling.",
    plainEnglish: [
      "Detects when patient signs digital contract via PandaDoc or DocuSign.",
      "Finds the lead in DenGro using client email.",
      "Updates status to 'Signed'.",
      "Alerts scheduling team to book the bonding appointment.",
    ],
    connectsTo: ["DocuSign/PandaDoc", "DenGro", "Slack"],
    underTheHood: [
      "Trigger: DocuSign/PandaDoc (Document Completed).",
      "Action: DenGro (Update Lead) Status: 'Contract Signed'.",
      "Action: Slack (Channel Message) 'New Start! [Name] signed. Schedule Bonding.'",
    ],
    needsFromYou: [
      "Use Client Email to match the document signer to the DenGro lead.",
    ],
    pitch:
      "The friction between 'Yes' and 'In the Chair' loses patients. When they sign the contract, this instantly updates DenGro and alerts your schedulers, turning the signed paper into a booked appointment seamlessly.",
  },

  "ortho-payment-recovery": {
    sector: "Orthodontics",
    name: "Finance: Failed Payment Plan Recovery",
    outcome:
      "Recovers revenue from failed monthly payment plan transactions without awkward manual calls, keeping revenue flowing.",
    plainEnglish: [
      "Detects when Stripe payment fails.",
      "Updates DenGro lead status to 'Payment Alert'.",
      "Sends automated email/SMS with link to update card details.",
      "80% of the time, it's just an expired card and they fix it themselves.",
    ],
    connectsTo: ["Stripe", "DenGro", "Gmail"],
    underTheHood: [
      "Trigger: Stripe (Payment Failed).",
      "Action: DenGro (Update Lead) Add Note: 'Payment Failed'.",
      "Action: Gmail (Send Email) 'Action Required: Update payment method to avoid service interruption.'",
    ],
    needsFromYou: [
      "Stripe connected to Zapier (assuming Stripe is the processor).",
      "Use 'Notes' or 'Status' in DenGro to flag the account for admin team.",
    ],
    pitch:
      "Nobody likes making collections calls. Let the system handle the first step. If a payment fails, we automatically email the patient a link to fix it. 80% of the time, it's just an expired card, and they fix it themselves.",
  },

  // Sector Thirteen: Non-Medical Home Care Agencies
  "homecare-empathy-response": {
    sector: "Non-Medical Home Care Agencies",
    name: "Speed-to-Lead: The Empathy Response",
    outcome:
      "Web inquiry becomes AxisCare prospect with priority alert instantly, ensuring rapid response to adult children researching care for parents after medical events.",
    plainEnglish: [
      "Captures structured web form with level of care needed, zip code, and urgency.",
      "Formats phone number to E.164 standards and maps fields to AxisCare.",
      "Sets status to 'Inquiry' rather than 'Active' to preserve clinical record integrity.",
      "Sends high-priority alert to Slack #intake-urgent or Twilio SMS to on-call care manager.",
      "Rotates notifications based on time of day, ensuring 9 PM inquiries receive acknowledgment.",
    ],
    connectsTo: ["Gravity Forms / JotForm", "AxisCare", "Slack", "Twilio"],
    underTheHood: [
      "Trigger: Gravity Forms / JotForm (New Submission) with structured intake data.",
      "Action: Formatter by Zapier (Text) clean phone number format and parse address.",
      "Action: AxisCare (Create Prospect) via Webhooks/API with custom fields.",
      "Action: Twilio (Send SMS) to on-call care manager or Slack (Notify Channel).",
    ],
    needsFromYou: [
      "Web form builder account (Gravity Forms or JotForm).",
      "AxisCare API access.",
      "Slack workspace or Twilio account for alerts.",
      "On-call rotation schedule or lookup table.",
    ],
    pitch:
      "In home care, the lead is often an adult daughter researching care for a parent after a medical event, usually outside business hours. The speed of response is the single highest predictor of conversion. This removes the latency of inbox checking, ensuring even a 9 PM inquiry receives immediate acknowledgment.",
  },

  "homecare-trust-trigger": {
    sector: "Non-Medical Home Care Agencies",
    name: 'Reputation: The "30-Day Trust" Trigger',
    outcome:
      "Solicits reviews at optimal window after care starts (30 days), ensuring every successful placement generates social proof for local SEO.",
    plainEnglish: [
      "Detects when client status moves from 'Prospect' to 'Active' in AxisCare.",
      "Waits 30 days (the 'Stability Period').",
      "Checks status again to ensure client is still 'Active' and not 'Hospitalized' or 'Deceased'.",
      "Pushes contact information to NiceJob or Birdeye for review campaign.",
    ],
    connectsTo: ["AxisCare", "Delay by Zapier", "NiceJob / Birdeye"],
    underTheHood: [
      "Trigger: AxisCare (Patient Status Updated) when status moves to 'Active'.",
      "Action: Delay by Zapier (30 Days).",
      "Filter: Re-check status to ensure still 'Active' and not 'Hospitalized' or 'Deceased'.",
      "Action: NiceJob/Birdeye (Enroll Contact) in review campaign.",
    ],
    needsFromYou: [
      "AxisCare status tracking setup.",
      "NiceJob or Birdeye subscription linked to Google Business Profile.",
      "Review request message templates.",
    ],
    pitch:
      "Reputation management in healthcare is delicate. Soliciting too early is premature; too late risks engaging during health decline. The optimal window is the 'Stability Period'—typically 30 days after the start of care. This ensures every successful placement generates social proof.",
  },

  "homecare-caregiver-reactivation": {
    sector: "Non-Medical Home Care Agencies",
    name: "Nurture: The Caregiver Reactivation Loop",
    outcome:
      "Transforms the recruiting funnel from a transactional 'Apply/Hire' process into a 'Community Building' process, significantly lowering Cost Per Hire (CPH) over time.",
    plainEnglish: [
      "Detects when caregiver applies in AxisCare but is not immediately hired (or goes inactive).",
      "Syncs data to ActiveCampaign with tag 'Status: Passive Candidate'.",
      "Triggers long-term nurture sequence with monthly 'Agency Culture' updates.",
      "Sends 'Open Shift Alerts' when agency has staffing crisis.",
    ],
    connectsTo: ["AxisCare", "ActiveCampaign"],
    underTheHood: [
      "Trigger: AxisCare (New User / Applicant) or when caregiver goes inactive.",
      "Action: ActiveCampaign (Add to 'Talent Pool' List) with tag 'Status: Passive Candidate'.",
      "Action: ActiveCampaign (Trigger Automation) monthly nurture sequence.",
    ],
    needsFromYou: [
      "AxisCare Applicant Tracking System integration.",
      "ActiveCampaign account with 'Talent Pool' list and automation sequences.",
      "Monthly content templates for agency culture updates.",
    ],
    pitch:
      "Agencies spend thousands on recruitment ads only to let applicants slip through the cracks. This transforms the recruiting funnel from transactional to community building, significantly lowering Cost Per Hire over time by maintaining engagement with passive candidates.",
  },

  "homecare-shift-fulfillment": {
    sector: "Non-Medical Home Care Agencies",
    name: "Operations: Shift Fulfillment Broadcast",
    outcome:
      "Changes shift filling from a 'Push' process (calling one by one) to a 'Pull' process (broadcasting to the willing), reducing coordinator burnout and increasing shift utilization.",
    plainEnglish: [
      "Detects when unassigned shift is created in AxisCare.",
      "Filters for 'Urgent' criteria (e.g., starts within 48 hours).",
      "Queries caregiver database to find staff qualified for client's acuity level and within zip code radius.",
      "Triggers Twilio SMS blast to targeted segment: 'Urgent Shift: 8AM-4PM tomorrow in [Zip Code]. Reply YES to claim.'",
      "First valid reply triggers notification to coordinator to finalize assignment.",
    ],
    connectsTo: ["AxisCare", "Twilio", "Google Sheets"],
    underTheHood: [
      "Trigger: AxisCare (New Unassigned Shift).",
      "Filter: Continue if shift meets 'Urgent' criteria (e.g., starts within 48 hours).",
      "Action: Query caregiver database (synced to Google Sheet) for qualified staff in zip code radius.",
      "Action: Twilio (Send SMS) blast to targeted segment.",
      "Action: On first reply, notify coordinator via Slack or email.",
    ],
    needsFromYou: [
      "AxisCare API access for shift data.",
      "Caregiver database synced to Google Sheets with qualifications and zip codes.",
      "Twilio account for SMS broadcasts.",
    ],
    pitch:
      "The 'Unfilled Shift' is the primary operational failure mode in home care. Coordinators often spend 4-6 hours a day playing 'phone tag.' This changes shift filling from calling one by one to broadcasting to the willing, reducing coordinator burnout.",
  },

  "homecare-evv-billing": {
    sector: "Non-Medical Home Care Agencies",
    name: "Finance: The EVV-Billing Sync",
    outcome:
      "Billing linked to EVV data automatically synced to QuickBooks, eliminating the risk of transcription errors and providing real-time profitability reports.",
    plainEnglish: [
      "Detects when invoice status is 'Finalized' in AxisCare (implies EVV logs reviewed and approved).",
      "Captures line items (Regular Hours, Overtime, Mileage).",
      "Maps them to corresponding Chart of Accounts in QuickBooks Online.",
      "Creates Sales Receipt with 'Client Name' and 'Service Date' in memo field.",
    ],
    connectsTo: ["AxisCare", "QuickBooks Online"],
    underTheHood: [
      "Trigger: AxisCare (Invoice Status: Finalized).",
      "Action: QuickBooks Online (Create Sales Receipt) with line items from EVV data.",
      "Memo field includes Client Name and Service Date for real-time reporting.",
    ],
    needsFromYou: [
      "AxisCare invoice finalization webhook.",
      "QuickBooks Online account with Chart of Accounts mapping.",
      "Service date and client name field mapping.",
    ],
    pitch:
      "Billing in home care is inextricably linked to EVV data. You cannot bill for time that wasn't verified by a GPS clock-in. This automation ensures that the financial data flows from AxisCare to QuickBooks automatically, eliminating transcription errors.",
  },

  // Sector Fourteen: Custom Cabinetry and Millwork Manufacturing
  "cabinetry-visual-inquiry": {
    sector: "Custom Cabinetry and Millwork Manufacturing",
    name: "Speed-to-Lead: The Visual Inquiry",
    outcome:
      "Captures web inquiry with visual attachments (sketches, Pinterest boards, architectural PDFs) and creates Jobman lead instantly, ensuring estimator has context immediately.",
    plainEnglish: [
      "Captures form submission with file uploads (sketches, Pinterest boards, PDFs).",
      "Creates Contact entity in Jobman.",
      "Uploads attachments to 'Files' section of lead record.",
      "Assigns lead to specific salesperson based on 'Project Type' (Commercial vs Residential).",
    ],
    connectsTo: ["Typeform / JotForm", "Jobman"],
    underTheHood: [
      "Trigger: Typeform / JotForm (New Submission) with file uploads.",
      "Action: Jobman (Create Contact & Lead) with attachments uploaded to Files section.",
      "Logic: Assigns to Rep A (Commercial) or Rep B (Residential) based on Project Type.",
    ],
    needsFromYou: [
      "Form builder with file upload capability.",
      "Jobman account with API access.",
      "Territory assignment rules.",
    ],
    pitch:
      "Cabinetry is a visual sale. Leads often arrive with rough sketches, Pinterest boards, or architectural PDFs. This automates the intake, ensuring the estimator opens Jobman and has the 'Context' immediately available, rather than hunting through emails for attachments.",
  },

  "cabinetry-kitchen-reveal": {
    sector: "Custom Cabinetry and Millwork Manufacturing",
    name: 'Reputation: The "Kitchen Reveal" Trigger',
    outcome:
      "Captures portfolio content immediately after installation, before countertops become cluttered, creating a continuous stream of user-generated content for social media.",
    plainEnglish: [
      "Detects when 'Install' phase is marked complete in Jobman.",
      "Triggers specialized email sequence asking for photo (not just review).",
      "If client replies with photo, secondary Zap parses email and saves image to Google Drive.",
      "Creates continuous stream of content for social media without site visits.",
    ],
    connectsTo: ["Jobman", "ActiveCampaign", "Gmail", "Google Drive"],
    underTheHood: [
      "Trigger: Jobman (Job Status: Completed/Installed).",
      "Action: ActiveCampaign (Send 'Showcase' Email) asking for installation photo.",
      "If email reply contains photo, secondary Zap saves to Google Drive folder for marketing team.",
    ],
    needsFromYou: [
      "Jobman status tracking.",
      "ActiveCampaign account with email templates.",
      "Google Drive folder for marketing assets.",
    ],
    pitch:
      "In millwork, the portfolio is the primary marketing asset. Professional photography is expensive, but user-generated content (UGC) is authentic and free. The moment of highest satisfaction is immediately after installation. This captures that moment and turns it into marketing gold.",
  },

  "cabinetry-quote-approval": {
    sector: "Custom Cabinetry and Millwork Manufacturing",
    name: 'Nurture: The Quote Approval Loop',
    outcome:
      "Automates SMS nudge if quote not accepted within 7 days, moving conversation from 'Price' to 'Value/Education' to close high-end millwork deals.",
    plainEnglish: [
      "Detects when quote status is 'Sent' in Jobman.",
      "If status does not change to 'Accepted' within 7 days, triggers task or SMS.",
      "Sends direct SMS: 'Hi [Name], did you have any questions about the material specs? I can hop on a call to explain the difference between maple and oak.'",
    ],
    connectsTo: ["Jobman", "Pipedrive / Salesmate", "Twilio"],
    underTheHood: [
      "Trigger: Jobman (Quote Status: Sent).",
      "Delay: 7 days.",
      "Check: If status still not 'Accepted', Action: Pipedrive/Salesmate (Create Activity) or Twilio (Send SMS).",
    ],
    needsFromYou: [
      "Jobman quote status tracking.",
      "SMS provider (Twilio) or CRM task system.",
      "Educational message templates.",
    ],
    pitch:
      "Cabinetry sales cycles are long (3-6 months) and involve high ticket values. Quotes often stall because the homeowner is overwhelmed by technical details. This moves the conversation from 'Price' to 'Value/Education,' which is the most effective way to close high-end millwork deals.",
  },

  "cabinetry-procurement-trigger": {
    sector: "Custom Cabinetry and Millwork Manufacturing",
    name: "Operations: The Procurement Trigger",
    outcome:
      "Automates vendor email with PO attachment when Purchase Order is approved, ensuring instant transmission and saving production time in supply chain with cutoff times.",
    plainEnglish: [
      "Detects when Purchasing Manager clicks 'Approve' on Purchase Order in Jobman.",
      "Instead of printing, scanning, and emailing, Zap generates email to specific vendor.",
      "Maps via Vendor ID in Jobman to correct vendor email address.",
      "Attaches PDF of Purchase Order.",
    ],
    connectsTo: ["Jobman", "Gmail"],
    underTheHood: [
      "Trigger: Jobman (Purchase Order Approved).",
      "Action: Gmail (Send Email with Attachment) to vendor mapped via Vendor ID.",
      "Attachment: PDF of Purchase Order.",
    ],
    needsFromYou: [
      "Jobman Purchase Order approval workflow.",
      "Vendor email mapping in Jobman or lookup table.",
    ],
    pitch:
      "Specialty hardware (e.g., Blum hinges, Hafele organizers) often has long lead times. A delay in ordering can stall the entire production line. This saves minutes per PO, but more importantly, ensures instant transmission. In a supply chain where cutoff times matter (e.g., 'Order by 2 PM for next day delivery'), this can save an entire day of production time.",
  },

  "cabinetry-deposit-release": {
    sector: "Custom Cabinetry and Millwork Manufacturing",
    name: "Finance: Deposit-Driven Production Release",
    outcome:
      "Releases job for production when deposit clears in accounting, aligning financial reality with physical reality and preventing unpaid work or idle production.",
    plainEnglish: [
      "Detects when payment is reconciled in Xero or QuickBooks and matched to Invoice ID.",
      "Pushes status update back to Jobman, changing job from 'Awaiting Deposit' to 'Released for Production.'",
      "'Green Light' signal appears on factory floor dashboard immediately.",
    ],
    connectsTo: ["Xero / QuickBooks Online", "Jobman"],
    underTheHood: [
      "Trigger: Xero (New Payment Received) or QuickBooks Online payment reconciliation.",
      "Filter: Match payment to Invoice ID.",
      "Action: Jobman (Update Job Status: 'Released').",
    ],
    needsFromYou: [
      "Xero or QuickBooks Online account.",
      "Jobman status workflow with 'Released for Production' status.",
      "Invoice ID matching logic.",
    ],
    pitch:
      "A cardinal rule in custom manufacturing is: 'Don't cut wood until the deposit clears.' However, the accounting team (seeing the bank wire) and the production team (standing at the saw) are often disconnected. This 'Green Light' signal appears on the factory floor dashboard immediately, preventing unpaid work and preventing idle production when money has arrived.",
  },

  // Sector Fifteen: Independent Equipment and Event Rental
  "rental-draft-order": {
    sector: "Independent Equipment and Event Rental",
    name: 'Speed-to-Lead: The "Draft Order" Save',
    outcome:
      "Web cart abandonment becomes sales follow-up automatically, converting 'window shoppers' into booked revenue by leveraging the scarcity principle.",
    plainEnglish: [
      "Detects when 'Draft Order' is created in Booqable with status 'Draft' or 'Concept'.",
      "If status persists for 2 hours, triggers recovery email.",
      "Email: 'We saved your rental quote! The 20x40 tent you selected is popular for June weddings. Click here to lock in your date.'",
    ],
    connectsTo: ["Booqable", "Mailchimp / ActiveCampaign"],
    underTheHood: [
      "Trigger: Booqable (New Cart / Draft Order Created) with status 'Draft' or 'Concept'.",
      "Delay: 2 hours.",
      "Action: Mailchimp / ActiveCampaign (Send Recovery Email) with scarcity messaging.",
    ],
    needsFromYou: [
      "Booqable webhook or API access for draft orders.",
      "Mailchimp or ActiveCampaign account with recovery email templates.",
    ],
    pitch:
      "In event rental, users often fill a cart to get a price estimate but abandon it before paying the deposit. This 'Draft Order' represents high-intent demand. This converts 'window shoppers' into booked revenue by leveraging the scarcity principle (availability).",
  },

  "rental-post-event-sentiment": {
    sector: "Independent Equipment and Event Rental",
    name: "Reputation: Post-Event Sentiment",
    outcome:
      "Captures reviews during the 'Post-Event High' window (24 hours after event), the only time to get a review when client is exhausted but happy.",
    plainEnglish: [
      "Detects when order status is 'Returned' in Booqable.",
      "Waits 24 hours (using Delay by Zapier) to ensure client has recovered from event.",
      "Sends personal text: 'Hi [Name], hope the event was a smash! We loved helping you. Would you mind sharing a quick photo of the setup?'",
      "If client replies positively, second automation sends Google Review link. If negative, alerts owner.",
    ],
    connectsTo: ["Booqable", "Twilio"],
    underTheHood: [
      "Trigger: Booqable (Order Status: Returned) webhook.",
      "Action: Delay by Zapier (24 Hours).",
      "Action: Twilio (Send SMS) requesting photo and feedback.",
      "If positive reply: Send Google Review link. If negative: Alert owner via email/Slack.",
    ],
    needsFromYou: [
      "Booqable order status webhook.",
      "Twilio account for SMS.",
      "Google Review link setup.",
    ],
    pitch:
      "The 'Post-Event High' is a psychological window. 24 hours after a wedding or party, the client is usually exhausted but happy. This is the only time to get a review. By asking for a photo first, you gather marketing assets. If they reply positively, you send the review link. If negative, you alert the owner, bypassing the public review.",
  },

  "rental-anniversary-trigger": {
    sector: "Independent Equipment and Event Rental",
    name: "Nurture: The Anniversary Trigger",
    outcome:
      "Automates renewal process for annual events, securing future revenue with zero acquisition cost by reminding clients 30-60 days before their anniversary date.",
    plainEnglish: [
      "Calculates 'Anniversary Date' of completed order (order date + 330 days).",
      "30-60 days before anniversary, triggers task or email.",
      "Email: 'It's almost time for the Annual Gala! Do you want to reserve the same AV setup as last year before it gets booked?'",
    ],
    connectsTo: ["Booqable", "Gmail", "Schedule by Zapier"],
    underTheHood: [
      "Trigger: Booqable (Order Date + 330 Days) calculation.",
      "Action: Schedule by Zapier (30-60 days before anniversary).",
      "Action: Gmail (Personal Email from Sales Rep) with renewal offer.",
    ],
    needsFromYou: [
      "Booqable order data with dates.",
      "Email template for annual event renewal.",
    ],
    pitch:
      "Many events are annual: corporate holiday parties, festivals, charity galas. The client who rented a stage this year is the best prospect for renting a stage next year. This effectively automates the 'Renewal' process, securing future revenue with zero acquisition cost.",
  },

  "rental-logistics-routing": {
    sector: "Independent Equipment and Event Rental",
    name: "Operations: Logistics Routing",
    outcome:
      "Optimizes delivery routes and reduces fuel waste by pushing delivery data into route optimization tools, then pushing ETA back to customer via SMS.",
    plainEnglish: [
      "Filters Booqable orders for upcoming weekend with 'Delivery' tag.",
      "Extracts Delivery Address, Delivery Window, and Load Volume.",
      "Pushes data into route optimization tool like Routific.",
      "Software generates most efficient path for trucks.",
      "Extended: Pushes ETA back to customer via SMS once route finalized.",
    ],
    connectsTo: ["Booqable", "Routific / Onfleet", "SMS"],
    underTheHood: [
      "Trigger: Booqable (Order Status: Reserved + Delivery) for upcoming weekend.",
      "Action: Routific / Onfleet (Create Stop) with delivery details.",
      "Optional: SMS by Zapier (Send ETA) to customer once route finalized.",
    ],
    needsFromYou: [
      "Booqable order filtering for delivery orders.",
      "Routific or Onfleet account for route optimization.",
      "SMS provider if using ETA notifications.",
    ],
    pitch:
      "Delivery logistics is the margin killer in rentals. Inefficient routing leads to overtime pay and fuel waste. This pushes delivery data into route optimization software, generating the most efficient path for trucks and reducing 'When will the truck get here?' phone calls.",
  },

  "rental-deposit-refund": {
    sector: "Independent Equipment and Event Rental",
    name: "Finance: Security Deposit Refund",
    outcome:
      "Automates refund notification when items cleared, reducing refund cycle from weeks to hours and significantly improving customer satisfaction scores.",
    plainEnglish: [
      "Detects when warehouse crew scans items back in Booqable and marks order 'Returned'.",
      "Checks custom field (e.g., 'Damaged? = No').",
      "If items are clear, instantly notifies finance team in Slack.",
      "Slack message: 'Order #1234 Returned. All clear. Process Refund.'",
    ],
    connectsTo: ["Booqable", "Slack"],
    underTheHood: [
      "Trigger: Booqable (Order Status: Returned).",
      "Filter: Check custom field 'Damaged? = No'.",
      "Action: Slack (Finance Channel Notification) 'Process Refund' alert.",
    ],
    needsFromYou: [
      "Booqable order return workflow with damage checking.",
      "Slack workspace with finance channel.",
    ],
    pitch:
      "Rental companies hold security deposits. Refunding these promptly is a major trust signal. Often, the refund is delayed because the office doesn't know the items have been inspected and cleared. This reduces the refund cycle from weeks to hours.",
  },

  // Sector Sixteen: Marine Service Centers and Boat Yards
  "marine-service-intake": {
    sector: "Marine Service Centers and Boat Yards",
    name: "Speed-to-Lead: The Service Intake",
    outcome:
      "Website form becomes Molo work order draft instantly, putting work into Service Manager's queue immediately, ready to be priced and approved.",
    plainEnglish: [
      "Captures structured intake form with Boat Name, Length, Draft, and specific issues.",
      "Checks if Contact exists in Molo using email address. If not, creates Contact.",
      "Creates Estimate in Molo populated with customer's request notes.",
      "Links to historical service records via 'Vessel Name' for context.",
    ],
    connectsTo: ["JotForm", "Molo"],
    underTheHood: [
      "Trigger: JotForm (New Service Request) with boat and issue details.",
      "Action: Molo (Find Contact) by email. If not found, create Contact.",
      "Action: Molo (Create Estimate) with customer request notes.",
    ],
    needsFromYou: [
      "JotForm account with service request form.",
      "Molo account with API access.",
    ],
    pitch:
      "Boat owners often request service via email or phone, leading to transcription errors. A structured intake form captures critical data. By pre-populating the 'Vessel Name,' the system can link to historical service records, giving the manager context ('We fixed this same engine last year').",
  },

  "marine-splash-trigger": {
    sector: "Marine Service Centers and Boat Yards",
    name: 'Reputation: The "Splash" Trigger',
    outcome:
      "Captures reviews at the most exciting moment for boat owners—when the boat goes back in the water—yielding high conversion rates.",
    plainEnglish: [
      "Detects when Work Order status is 'Completed' in Molo.",
      "Sends SMS: 'Good news! [Boat Name] is ready for pickup. See you on the water!'",
      "24 hours later, follows up: 'How did we do on the engine repair? Click here to leave a review.'",
    ],
    connectsTo: ["Molo", "Podium / Kenect"],
    underTheHood: [
      "Trigger: Molo (Work Order Status: Completed) webhook.",
      "Action: Podium/Kenect (Send Review Text) immediate SMS about pickup.",
      "Delay: 24 hours.",
      "Action: Follow-up SMS with review link.",
    ],
    needsFromYou: [
      "Molo work order completion webhook.",
      "Podium or Kenect account for SMS review requests.",
    ],
    pitch:
      "The most exciting moment for a boat owner is 'Splash Day'—when the boat goes back in the water. Asking for a review while the boat is still 'on the hard' (in the yard) yields low conversion. Asking when the owner is using the boat yields high conversion.",
  },

  "marine-seasonal-cycles": {
    sector: "Marine Service Centers and Boat Yards",
    name: "Nurture: Seasonal Service Cycles",
    outcome:
      "Automates Winterization and Commissioning campaigns, smoothing the 'demand spike' by getting customers to book early for better labor planning.",
    plainEnglish: [
      "Triggers on Sept 1st (Winterization) and April 1st (Commissioning).",
      "Pulls customer list from Molo, segments by Boat Type (Outboard vs Inboard have different service needs).",
      "Pushes segments to Mailchimp for campaign.",
      "Campaign: 'Schedule your Winterization now to guarantee a spot.'",
    ],
    connectsTo: ["Schedule by Zapier", "Molo", "Mailchimp"],
    underTheHood: [
      "Trigger: Date (Sept 1st / April 1st) via Schedule by Zapier.",
      "Action: Molo (Find Contact) with boat type segmentation.",
      "Action: Mailchimp (Send Segmented Campaign) with seasonal service offer.",
    ],
    needsFromYou: [
      "Molo customer database with boat type segmentation.",
      "Mailchimp account with campaign templates.",
    ],
    pitch:
      "Boating is seasonal. Yards make their money on 'Winterization' (Fall) and 'Commissioning' (Spring). This automation smooths the 'demand spike.' By getting customers to book early, the yard can plan labor more effectively.",
  },

  "marine-subcontractor-dispatch": {
    sector: "Marine Service Centers and Boat Yards",
    name: "Operations: Subcontractor Dispatch",
    outcome:
      "Automates vendor notification when job assigned, creating a digital record that the sub was notified and preventing disputes about timelines.",
    plainEnglish: [
      "Detects when line item in Molo Work Order is assigned to specific Vendor (e.g., 'Raymarine Tech').",
      "Extracts job details (Slip Number, Boat Name, Access Code).",
      "Texts details to the subcontractor via ClickSend.",
    ],
    connectsTo: ["Molo", "ClickSend"],
    underTheHood: [
      "Trigger: Molo (Job Assigned to Vendor) webhook.",
      "Filter: job_type = sublet.",
      "Action: ClickSend (Send SMS to Subcontractor) with job details.",
    ],
    needsFromYou: [
      "Molo vendor assignment workflow.",
      "ClickSend account for SMS to subcontractors.",
    ],
    pitch:
      "Yards rely on subcontractors (canvas, fiberglass, electronics). Coordinating them is a nightmare. When a line item is assigned to a specific Vendor, this extracts the job details and texts them to the sub, creating a digital record that prevents disputes about timelines.",
  },

  "marine-storage-billing": {
    sector: "Marine Service Centers and Boat Yards",
    name: "Finance: Recurring Storage Billing",
    outcome:
      "Automates payment alerts for declined storage charges, allowing yard to secure the vessel (lock it down) before owner takes it out for the weekend, securing the debt.",
    plainEnglish: [
      "If Molo is integrated with payment gateway (Stripe or BluePay), listens for 'Payment Failed' events on Storage invoices.",
      "Alerts office manager immediately.",
      "Allows yard to secure the vessel (maritime lien) before owner takes it out.",
    ],
    connectsTo: ["Molo", "Stripe / BluePay", "Slack"],
    underTheHood: [
      "Trigger: Molo (Invoice Created: Storage) with payment gateway integration.",
      "If Payment Failed on Storage invoice: Slack (Notify Office Manager of Failures).",
    ],
    needsFromYou: [
      "Molo integrated with payment gateway (Stripe or BluePay).",
      "Slack workspace for office manager notifications.",
    ],
    pitch:
      "Storage is passive income, but chasing declined credit cards is active work. In marine law, a yard has a 'Maritime Lien' on the vessel for unpaid bills. Knowing immediately when a payment fails allows the yard to secure the vessel (lock it down) before the owner takes it out for the weekend, securing the debt.",
  },

  // Sector Seventeen: Wholesale Food Distribution
  "food-account-onboarding": {
    sector: "Wholesale Food Distribution",
    name: "Speed-to-Lead: New Account Onboarding",
    outcome:
      "App signup triggers credit check and CRM entry instantly, removing the friction of 'Net-30' approval so chef can order today instead of calling Sysco.",
    plainEnglish: [
      "Detects when chef downloads Pepper app and signs up.",
      "Pushes data to Salesforce for sales rep.",
      "Simultaneously triggers DocuSign envelope containing 'Credit Application' and 'Personal Guarantee' to chef's email.",
    ],
    connectsTo: ["Pepper", "Salesforce", "DocuSign"],
    underTheHood: [
      "Trigger: Pepper (New Customer Signup).",
      "Action: Salesforce (Create Lead) for sales rep.",
      "Action: DocuSign (Send Envelope) with Credit Application and Personal Guarantee.",
    ],
    needsFromYou: [
      "Pepper app account with API access.",
      "Salesforce account for sales tracking.",
      "DocuSign account with credit application templates.",
    ],
    pitch:
      "When a chef downloads the Pepper app and signs up, they want to buy now. However, the distributor needs to run a credit check and set payment terms. Speed is vital. If the chef can't order today, they will call Sysco. Automating the paperwork removes the friction.",
  },

  "food-short-check": {
    sector: "Wholesale Food Distribution",
    name: 'Reputation: The "Short" Check',
    outcome:
      "SMS quality control survey after delivery ensures 'Shorts' (missing items) are caught immediately, allowing Sales Rep to 'save' the account by rushing missing product.",
    plainEnglish: [
      "Triggers 60 minutes after delivery window.",
      "Sends SMS: 'Hi Chef, how was the delivery? Did you get everything you needed?'",
      "If chef replies 'No,' alerts Sales Rep via SMS immediately.",
      "Allows Rep to rush missing product in their personal car—a common hero move in this industry.",
    ],
    connectsTo: ["Pepper", "Twilio"],
    underTheHood: [
      "Trigger: Pepper (Order Status: Delivered).",
      "Delay: 60 minutes after delivery window.",
      "Action: Twilio (SMS Survey) to chef.",
      "If reply contains 'No': Twilio (Send SMS) to Sales Rep with alert.",
    ],
    needsFromYou: [
      "Pepper delivery status webhook.",
      "Twilio account for SMS surveys.",
      "Sales Rep phone numbers.",
    ],
    pitch:
      "'Shorts' (missing items) are the enemy of trust in food distribution. If a restaurant expects chicken and it doesn't arrive, they can't serve dinner. This triggers a survey 60 minutes after delivery. If the chef replies 'No,' the system alerts the Sales Rep immediately, allowing them to rush the missing product.",
  },

  "food-churn-prevention": {
    sector: "Wholesale Food Distribution",
    name: "Nurture: Churn Prevention AI",
    outcome:
      "Turns AI churn alerts into high priority tasks, moving the Rep from 'Order Taker' to 'Account Manager' with proactive touchpoints based on data.",
    plainEnglish: [
      "Pepper's AI analyzes purchasing patterns and flags 'Churn Risk' (e.g., 'Flour' for pizza place).",
      "Takes AI flag and turns it into human task.",
      "Creates high-priority task in Salesforce or HubSpot: 'Call Pizza Tony. He missed his flour order 2 weeks in a row.'",
    ],
    connectsTo: ["Pepper", "Salesforce / HubSpot"],
    underTheHood: [
      "Trigger: Pepper (Insight: 'Churn Risk - Flour').",
      "Action: Salesforce / HubSpot (High Priority Task) for sales rep.",
    ],
    needsFromYou: [
      "Pepper AI insights access.",
      "Salesforce or HubSpot account for task management.",
    ],
    pitch:
      "Pepper's AI analyzes purchasing patterns. If a pizza place stops buying flour, they are buying it somewhere else. This takes the AI flag and turns it into a human task, moving the Rep from 'Order Taker' to 'Account Manager' with proactive touchpoints based on data, not intuition.",
  },

  "food-specialty-alert": {
    sector: "Wholesale Food Distribution",
    name: "Operations: Specialty Item Alert",
    outcome:
      "Alerts Purchasing team for non-stock specialty items immediately, preventing embarrassing calls to chef later saying 'Sorry, we couldn't get it,' which damages the restaurant's menu planning.",
    plainEnglish: [
      "Filters orders for specific 'Special Order' SKUs (e.g., Wagyu Beef, Truffles).",
      "If chef orders them, alerts Buyer in Slack: 'New Order for 5lbs Truffles from Le Bistro. Source immediately.'",
    ],
    connectsTo: ["Pepper", "Slack"],
    underTheHood: [
      "Trigger: Pepper (Order contains SKU:).",
      "Filter: Check if SKU is in 'Special Order' list.",
      "Action: Slack (Purchasing Team Notification) with item and restaurant details.",
    ],
    needsFromYou: [
      "Pepper order webhook with line items.",
      "List of 'Special Order' SKUs.",
      "Slack channel for purchasing team.",
    ],
    pitch:
      "Some items are 'Non-Stock' or 'Special Order' (e.g., Wagyu Beef, Truffles). If a chef orders them, the Purchasing team needs to source them immediately. This prevents the embarrassing call to the chef later saying 'Sorry, we couldn't get it,' which damages the restaurant's menu planning.",
  },

  "food-rebate-tracking": {
    sector: "Wholesale Food Distribution",
    name: "Finance: Rebate Tracking",
    outcome:
      "Exports invoice line items to master Google Sheet for rebate tracking, simplifying the rebate claim process with manufacturers and creating a shadow ledger for finance team.",
    plainEnglish: [
      "Detects when invoice is finalized in Pepper.",
      "Exports every line item to master Google Sheet or database.",
      "Creates shadow ledger specifically for rebate tracking.",
      "Finance team can pivot this data to see exactly how many cases of Heinz were sold.",
    ],
    connectsTo: ["Pepper", "Google Sheets"],
    underTheHood: [
      "Trigger: Pepper (Invoice Finalized).",
      "Action: Google Sheets (Add Row) for each line item with product, quantity, customer, date.",
    ],
    needsFromYou: [
      "Pepper invoice finalization webhook.",
      "Google Sheets 'Rebate Tracking' master sheet setup.",
    ],
    pitch:
      "Distributors rely on 'Manufacturer Rebates' (e.g., 'Sell 100 cases of Heinz, get $500 back'). Tracking this is often a manual nightmare. This creates a shadow ledger specifically for rebate tracking, simplifying the rebate claim process with the manufacturer.",
  },

  // Sector Eighteen: Consumer Bankruptcy Law Firms
  "bankruptcy-garnishment-emergency": {
    sector: "Consumer Bankruptcy Law Firms",
    name: "Speed-to-Lead: The Garnishment Emergency",
    outcome:
      "Lead Docket form triggers SMS reassurance instantly, de-escalating client's panic and establishing the attorney as the protector immediately.",
    plainEnglish: [
      "Detects when potential client fills out form saying 'My wages are being garnished.'",
      "Detects 'Garnishment' tag in lead source.",
      "Instantly pushes contact to Jubilee.",
      "Sends SMS: 'This is the Law Office of [Name]. We received your request. Bankruptcy triggers an 'Automatic Stay' that stops garnishment immediately. I am reviewing your file now and will call you in 5 minutes.'",
    ],
    connectsTo: ["Lead Docket", "Jubilee", "Twilio"],
    underTheHood: [
      "Trigger: Lead Docket (New Lead: 'Garnishment' Tag).",
      "Action: Jubilee (Create Contact).",
      "Action: Twilio (Immediate SMS) with reassurance message.",
    ],
    needsFromYou: [
      "Lead Docket form with 'Garnishment' tag field.",
      "Jubilee account with API access.",
      "Twilio account for SMS.",
    ],
    pitch:
      "When a potential client fills out a form saying 'My wages are being garnished,' they are in panic mode. This automated message de-escalates the client's panic and establishes the attorney as the protector immediately, explaining that bankruptcy triggers an 'Automatic Stay' that stops garnishment.",
  },

  "bankruptcy-discharge-celebration": {
    sector: "Consumer Bankruptcy Law Firms",
    name: "Reputation: The Discharge Celebration",
    outcome:
      "Captures reviews at moment of profound relief when 'Discharge Order' is the legal end of the debt, turning relief into powerful reviews.",
    plainEnglish: [
      "Detects when case status is 'Discharged' in Jubilee (pulled automatically from court system).",
      "Triggers email: 'Congratulations! The court has officially wiped out your debt. You are free. Read the attached Discharge Order. If we helped you get a fresh start, please let others know.'",
    ],
    connectsTo: ["Jubilee", "Birdeye"],
    underTheHood: [
      "Trigger: Jubilee (Case Status: Discharged).",
      "Action: Birdeye (Send Review Request) with discharge celebration email.",
    ],
    needsFromYou: [
      "Jubilee case status tracking with court system integration.",
      "Birdeye account for review management.",
      "Discharge celebration email template.",
    ],
    pitch:
      "The 'Discharge Order' is the legal end of the debt. It is a moment of profound relief. Bankruptcy clients are often ashamed, but if they are treated with dignity, they write powerful reviews ('They saved my home'). This captures that moment.",
  },

  "bankruptcy-document-chase": {
    sector: "Consumer Bankruptcy Law Firms",
    name: "Nurture: The Document Chase",
    outcome:
      "Automates 10-day email sequence for document collection, ensuring paralegals don't spend 50% of their time chasing tax returns.",
    plainEnglish: [
      "Detects when case enters 'Collecting Documents' status in Jubilee.",
      "Starts 10-day email sequence: Day 1 (secure link to upload Tax Returns), Day 3 (Pay Stubs reminder), Day 7 (Urgent filing delay notice).",
      "When paralegal marks documents 'Received' in Jubilee, sequence stops automatically.",
    ],
    connectsTo: ["Jubilee", "Mailchimp / ActiveCampaign"],
    underTheHood: [
      "Trigger: Jubilee (Status: 'Collecting Documents').",
      "Action: Mailchimp / ActiveCampaign (Checklist Sequence) 10-day email sequence.",
      "Stop Logic: When documents marked 'Received' in Jubilee, stop sequence.",
    ],
    needsFromYou: [
      "Jubilee status tracking with 'Collecting Documents' stage.",
      "Mailchimp or ActiveCampaign account with 10-day sequence templates.",
    ],
    pitch:
      "Paralegals spend 50% of their time chasing tax returns. This automation starts a 10-day email sequence when the case enters 'Collecting Documents' status. When the paralegal marks documents 'Received,' the Zap stops the sequence. This 'Negative Logic' (stopping the bot when the human acts) is crucial for trust.",
  },

  "bankruptcy-meeting-reminder": {
    sector: "Consumer Bankruptcy Law Firms",
    name: "Operations: 341 Meeting Reminder",
    outcome:
      "SMS reminder sequence for critical court appearances creates a 'Zero Failure' environment for court appearances, ensuring case is not dismissed.",
    plainEnglish: [
      "Jubilee pulls '341 Meeting of Creditors' date from court.",
      "Schedules reminders: 7 Days Before, 24 Hours Before, 1 Hour Before.",
      "7 Days: 'Meeting is next week.'",
      "24 Hours: 'Meeting tomorrow. Bring your SSN card.'",
      "1 Hour: 'Join this Zoom link now.'",
    ],
    connectsTo: ["Jubilee", "ClickSend"],
    underTheHood: [
      "Trigger: Jubilee (New Event: '341 Meeting of Creditors').",
      "Action: ClickSend (SMS Sequence) with scheduled reminders.",
    ],
    needsFromYou: [
      "Jubilee calendar integration with court system.",
      "ClickSend account for SMS reminders.",
      "Client mobile numbers stored in Jubilee.",
    ],
    pitch:
      "The 'Meeting of Creditors' is the one time the client must appear (virtually or in person). If they miss it, the case is dismissed. This creates a 'Zero Failure' environment with reminders at 7 days, 24 hours, and 1 hour before the meeting.",
  },

  "bankruptcy-fee-gate": {
    sector: "Consumer Bankruptcy Law Firms",
    name: "Finance: Pre-Filing Fee Gate",
    outcome:
      "Notifies attorney when client fees paid in full, reducing 'WIP' (Work in Progress) time and converting client from 'Active' to 'Filed' faster.",
    plainEnglish: [
      "Connects payment gateway (LawPay) to Jubilee.",
      "When balance reaches $0 (Paid in Full), triggers Slack message to Attorney.",
      "Message: 'Client Smith is Paid in Full. File the case today.'",
    ],
    connectsTo: ["LawPay", "Jubilee", "Slack"],
    underTheHood: [
      "Trigger: LawPay (Payment Received).",
      "Action: Jubilee (Update Fees Paid) when balance reaches $0.",
      "Action: Slack (Notify Attorney) 'File the case today.'",
    ],
    needsFromYou: [
      "LawPay payment gateway integration.",
      "Jubilee account with fee tracking.",
      "Slack workspace for attorney notifications.",
    ],
    pitch:
      "In Chapter 7, the attorney fees must be paid before filing. The attorney often waits to file until the check clears. This connects the payment gateway to Jubilee. When the balance reaches $0, it triggers a Slack message to the Attorney, reducing 'WIP' time and converting the client from 'Active' to 'Filed' faster.",
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


