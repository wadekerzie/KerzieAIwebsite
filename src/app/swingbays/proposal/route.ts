import type { NextRequest } from "next/server";
import data from "@/data/swingbays_project.json";

// kerzie.ai/swingbays/proposal
//
// One page, two modes, driven by src/data/swingbays_project.json (same idea
// as the Danny referral board: edit the data, never the markup).
//
//   mode "proposal"  the offer Aaron walks Dustin through on a phone.
//   mode "project"   the dashboard (90-day clock, every piece and its status,
//                    milestones, approvals and changes log) on top, with the
//                    proposal underneath, unchanged, as "What you approved".
//
// ?view=project previews project mode without touching the JSON;
// ?view=proposal forces the offer. Private page: noindex, nofollow, not in the
// sitemap, not in llms.txt, skipped by gen-llms-full (route handlers emit no
// .html). Recipe for Wade: Wade OS clients/swing_bays/README_project_page.md.

export const dynamic = "force-dynamic";

type Piece = { n?: number; name: string; status: string; example?: boolean };
type Area = { name: string; pieces: Piece[] };
type Milestone = {
  key: string;
  label: string;
  date?: string;
  offset?: number;
  example?: boolean;
};
type LogRow = {
  date: string;
  who: string;
  what: string;
  effect: string;
  example?: boolean;
};

const esc = (s: unknown) =>
  String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

const money = (n: number) => "$" + n.toLocaleString("en-US");

const DAY = 86_400_000;
const parse = (iso: string) => new Date(iso + "T12:00:00-05:00");
const addDays = (iso: string, days: number) =>
  new Date(parse(iso).getTime() + days * DAY);
const fmtDate = (d: Date) =>
  d.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "America/Chicago",
  });
const fmtLong = (d: Date) =>
  d.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "America/Chicago",
  });
const todayChicago = () => {
  const s = new Date().toLocaleDateString("en-CA", {
    timeZone: "America/Chicago",
  });
  return parse(s);
};

// ---------------------------------------------------------------- styles

const CSS = `
:root{--ink:#111318;--muted:#5a606b;--line:#d9dde3;--blue:#1d5f9f;--blue-dark:#123c64;--beige:#f3efe7;--paper:#fff;--coral:#E8896A;--soft:#f7f9fc;--green:#2f7d4f}
*{box-sizing:border-box}
html{-webkit-text-size-adjust:100%}
body{margin:0;font-family:Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif;color:var(--ink);background:var(--beige);line-height:1.55;font-size:17px}
.wrap{max-width:760px;margin:0 auto;padding:28px 14px 72px}
@media(min-width:640px){.wrap{padding:48px 24px 80px}}
.sheet{background:var(--paper);border:1px solid var(--line);border-radius:10px;padding:30px 20px}
@media(min-width:640px){.sheet{padding:48px 44px}}
.sheet+.sheet{margin-top:22px}
.client{font-size:22px;letter-spacing:.16em;text-transform:uppercase;color:var(--blue-dark);font-weight:800;margin:0 0 6px;line-height:1.1}
@media(min-width:640px){.client{font-size:26px}}
.client small{display:block;font-size:12px;letter-spacing:.14em;color:var(--muted);font-weight:600;margin-top:4px}
.rule{border:0;border-top:2px solid var(--blue-dark);margin:16px 0 22px}
.kicker{font-size:12px;letter-spacing:.12em;text-transform:uppercase;color:var(--blue);font-weight:600;margin:0 0 8px}
h1{font-size:28px;line-height:1.15;margin:0 0 8px;color:var(--blue-dark);letter-spacing:-.01em}
@media(min-width:640px){h1{font-size:34px}}
.sub{color:var(--muted);margin:0 0 26px;font-size:15px}
h2{font-size:21px;line-height:1.25;margin:40px 0 10px;color:var(--blue-dark)}
h2 .num{display:inline-block;min-width:28px;height:28px;line-height:28px;text-align:center;border-radius:50%;background:var(--blue-dark);color:#fff;font-size:14px;font-weight:700;margin-right:10px;vertical-align:3px}
p{margin:0 0 14px}
.lead{font-size:18px}
.note{color:var(--muted);font-size:15px}
.cards{display:grid;grid-template-columns:1fr;gap:12px;margin:16px 0 6px}
@media(min-width:560px){.cards{grid-template-columns:1fr 1fr}}
.card{border:1px solid var(--line);border-left:4px solid var(--coral);border-radius:8px;padding:14px 16px;background:var(--soft);min-width:0}
.wrap,.sheet,.cards,.cc,.summary,.phases{min-width:0;max-width:100%}
.card strong{display:block;color:var(--blue-dark);font-size:17px;margin-bottom:4px}
.card p{margin:0;font-size:15px;color:#2b3038}
.steps{list-style:none;padding:0;margin:14px 0 0;counter-reset:s}
.steps>li{position:relative;padding:0 0 16px 44px}
.steps>li::before{counter-increment:s;content:counter(s);position:absolute;left:0;top:0;width:30px;height:30px;border-radius:50%;background:var(--blue-dark);color:#fff;font-weight:700;text-align:center;line-height:30px;font-size:15px}
.steps strong{color:var(--blue-dark)}
.steps ul{margin:6px 0 0;padding-left:18px;font-size:15px;color:#2b3038}
.steps ul li{padding:0 0 4px}
.chart{margin:22px 0 8px;border:1px solid var(--line);border-radius:8px;padding:18px 12px 12px;background:var(--soft)}
.bars{display:flex;align-items:flex-end;gap:6px;height:190px}
@media(max-width:420px){.bars{gap:4px}.chart{padding:16px 8px 12px}.bar b{font-size:10px}.bar s{font-size:10px}}
.bar{flex:1;min-width:0;display:flex;flex-direction:column;justify-content:flex-end;align-items:center;height:100%}
.bar i{display:block;width:100%;max-width:64px;background:var(--blue-dark);border-radius:4px 4px 0 0}
.bar.run i{background:var(--blue)}
.bar.after i{background:#9bb6d3}
.bar b{font-size:12px;color:var(--blue-dark);margin-bottom:6px;white-space:nowrap}
.bar.after b{color:var(--muted)}
.bar s{display:block;height:2.6em;text-decoration:none;font-size:11px;color:var(--muted);margin-top:6px;text-align:center;line-height:1.2}
.chart .cap{margin:12px 0 0;font-size:13px;color:var(--muted);text-align:center}
.pricebox{margin-top:18px;border:2px solid var(--blue-dark);border-radius:8px;overflow:hidden}
.pricebox .row{display:grid;grid-template-columns:1fr;gap:2px 14px;padding:14px 16px;border-top:1px solid var(--line)}
.pricebox .row:first-child{border-top:0}
@media(min-width:560px){.pricebox .row{grid-template-columns:150px 1fr}}
.pricebox .amt{font-weight:800;color:var(--blue-dark);font-size:20px;white-space:nowrap}
.pricebox .amt small{font-weight:600;font-size:13px;color:var(--muted)}
.pricebox .what strong{color:var(--blue-dark)}
.pricebox .what{font-size:15px}
.value{margin:14px 0 0;padding:14px 16px;background:var(--soft);border-radius:8px;font-size:15px}
/* command center */
.cc{display:grid;grid-template-columns:1fr;gap:14px;margin:16px 0 0}
@media(min-width:640px){.cc{grid-template-columns:1fr 1fr}}
.cc .card{border-left-color:var(--blue-dark)}
.cc .card strong{font-size:18px}
.cc .card p+p{margin-top:8px}
.cc .card ul{margin:8px 0 0;padding-left:18px;font-size:15px;color:#2b3038}
.cc .card ul li{padding:0 0 3px}
.cc .card{min-width:0}
.cc .card p,.cc .card li,.cc .card strong{overflow-wrap:anywhere}
.phonewrap{margin:22px auto 0;max-width:340px;width:100%;min-width:0}
.phone{position:relative;background:var(--ink);border-radius:34px;padding:12px;box-shadow:0 10px 30px rgba(17,19,24,.18);max-width:100%;min-width:0}
.phone .screen{background:var(--soft);border-radius:24px;padding:16px 14px 18px;overflow:hidden;min-width:0}
@media(max-width:360px){.phone{border-radius:26px;padding:8px}.phone .screen{padding:12px 10px 14px}.phone .tile b{font-size:19px}}
.phone .tiles>.tile{min-width:0}
.phone .tile b,.phone .tile span{overflow-wrap:anywhere}
.phone .cal{min-width:0}
.phone .days{min-width:0;overflow-x:auto}
.phone .days>div{min-width:0}
.phone .key{flex-wrap:wrap}
.phone .sample{position:absolute;top:-10px;right:14px;background:var(--coral);color:#fff;font-size:11px;letter-spacing:.12em;text-transform:uppercase;font-weight:800;padding:4px 10px;border-radius:12px}
.phone .ttl{font-size:12px;letter-spacing:.14em;text-transform:uppercase;color:var(--blue-dark);font-weight:800;margin:0}
.phone .ttl small{display:block;font-size:11px;letter-spacing:.04em;text-transform:none;color:var(--muted);font-weight:600;margin-top:2px}
.phone .tiles{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin:12px 0 0}
.phone .tile{background:var(--paper);border:1px solid var(--line);border-radius:10px;padding:9px 10px}
.phone .tile b{display:block;font-size:22px;line-height:1.05;color:var(--blue-dark);font-weight:800}
.phone .tile b small{font-size:12px;color:var(--muted);font-weight:600;margin-left:4px}
.phone .tile span{display:block;font-size:11px;color:var(--muted);margin-top:3px;line-height:1.25}
.phone .cal{background:var(--paper);border:1px solid var(--line);border-radius:10px;padding:9px 10px;margin-top:8px}
.phone .cal .h{display:flex;justify-content:space-between;align-items:baseline;font-size:11px;color:var(--muted);margin-bottom:6px}
.phone .cal .h b{color:var(--blue-dark);font-size:12px}
.phone .days{display:grid;grid-template-columns:repeat(7,1fr);gap:4px;text-align:center}
.phone .days div{font-size:10px;color:var(--muted);line-height:1.2}
.phone .days i{display:block;height:18px;border-radius:4px;margin-top:3px;background:#e6ebf1}
.phone .days i.p{background:var(--blue-dark)}
.phone .days i.e{background:var(--coral)}
.phone .days i.pe{background:linear-gradient(90deg,var(--blue-dark) 50%,var(--coral) 50%)}
.phone .key{display:flex;gap:12px;font-size:10px;color:var(--muted);margin-top:6px}
.phone .key i{display:inline-block;width:9px;height:9px;border-radius:2px;vertical-align:-1px;margin-right:4px}
.phone .foot{font-size:10px;color:var(--muted);margin:10px 0 0;text-align:center}
.phonecap{text-align:center;font-size:13px;color:var(--muted);margin:12px 0 0}
.optional{margin-top:22px;border:2px dashed var(--line);border-radius:8px;padding:16px 18px;background:#fff}
.optional .tag{display:inline-block;font-size:11px;letter-spacing:.14em;text-transform:uppercase;font-weight:800;color:#8a6500;background:#fff1cc;border-radius:4px;padding:2px 8px;margin-bottom:8px}
.optional strong{color:var(--blue-dark);font-size:18px;display:block;margin-bottom:6px}
.optional p{font-size:15px;margin:0 0 8px}
.optional p:last-child{margin-bottom:0}
.need{padding-left:20px;margin:10px 0}
.need li{padding:0 0 8px}
.cta{margin-top:40px;padding-top:24px;border-top:2px solid var(--blue-dark)}
.cta .big{font-size:20px;color:var(--blue-dark);font-weight:700}
a{color:var(--blue);font-weight:600}
.footer{text-align:center;color:var(--muted);font-size:13px;margin-top:28px}
/* dashboard */
.banner{background:#fff6e5;border:1px solid #f0d9a8;color:#6b4e00;border-radius:8px;padding:10px 14px;font-size:14px;margin:0 0 20px}
.ex{display:inline-block;font-size:10px;letter-spacing:.08em;text-transform:uppercase;color:#8a6500;background:#fff1cc;border-radius:4px;padding:1px 6px;margin-left:6px;vertical-align:2px;font-weight:700}
.clock{margin:18px 0 6px}
.clock .track{position:relative;height:14px;background:#e6ebf1;border-radius:7px;overflow:hidden}
.clock .fill{position:absolute;left:0;top:0;bottom:0;background:var(--blue);border-radius:7px}
.clock .ticks{display:flex;justify-content:space-between;font-size:12px;color:var(--muted);margin-top:6px}
.clock .today{font-size:22px;font-weight:800;color:var(--blue-dark);margin:14px 0 2px}
.phases{display:grid;grid-template-columns:1fr 1fr 1fr;gap:6px;margin-top:14px;font-size:12px;line-height:1.3}
.phases div{border-top:3px solid #c9d6e4;padding-top:6px;color:var(--muted)}
.phases div.on{border-top-color:var(--blue);color:var(--ink);font-weight:600}
.phases div.done{border-top-color:var(--green)}
.area{margin-top:18px}
.area h3{font-size:16px;margin:0 0 6px;color:var(--blue-dark)}
.area table{width:100%;border-collapse:collapse}
.area td{padding:8px 0;border-top:1px solid var(--line);font-size:15px;vertical-align:top}
.area td.st{text-align:right;white-space:nowrap;width:1%;padding-left:10px}
.chip{display:inline-block;font-size:12px;font-weight:700;padding:3px 9px;border-radius:12px;background:#eceff3;color:var(--muted)}
.chip.building{background:#fff1cc;color:#8a6500}
.chip.live{background:#e3f0ff;color:var(--blue-dark)}
.chip.handed{background:#e3f4e8;color:var(--green)}
.summary{display:grid;grid-template-columns:repeat(2,1fr);gap:10px;margin:16px 0 4px}
@media(min-width:560px){.summary{grid-template-columns:repeat(4,1fr)}}
.summary div{border:1px solid var(--line);border-radius:8px;padding:10px 12px;background:var(--soft)}
.summary b{display:block;font-size:24px;color:var(--blue-dark);line-height:1.1}
.summary span{font-size:12px;color:var(--muted);text-transform:uppercase;letter-spacing:.06em}
.ms{list-style:none;padding:0;margin:12px 0 0}
.ms li{display:flex;gap:12px;align-items:flex-start;padding:9px 0;border-top:1px solid var(--line);font-size:15px}
.ms li:first-child{border-top:0}
.ms .dot{flex:none;width:12px;height:12px;border-radius:50%;border:2px solid #c9d6e4;margin-top:6px;background:#fff}
.ms .dot.done{background:var(--green);border-color:var(--green)}
.ms .dot.next{border-color:var(--blue);background:#fff}
.ms .d{flex:none;width:96px;color:var(--muted);font-size:14px;padding-top:1px}
.log{width:100%;border-collapse:collapse;margin-top:10px;font-size:14px}
.log th{text-align:left;font-size:11px;letter-spacing:.1em;text-transform:uppercase;color:var(--blue);padding:6px 0;border-bottom:2px solid var(--blue-dark)}
.log td{padding:10px 8px 10px 0;border-top:1px solid var(--line);vertical-align:top}
.log td.d{white-space:nowrap;color:var(--muted);width:1%}
@media(max-width:559px){.log thead{display:none}.log tr{display:block;padding:10px 0;border-top:1px solid var(--line)}.log td{display:block;border:0;padding:2px 0}.log td.d{color:var(--blue-dark);font-weight:700}.log td.e{color:var(--muted)}}
.approved{margin:0 0 26px;padding:14px 16px;background:var(--soft);border-radius:8px;border-left:4px solid var(--green)}
.approved .kicker{color:var(--green);margin:0 0 2px}
.approved p{margin:0;font-size:15px}
`;

// ------------------------------------------------------------- proposal

function proposalBody(opts: { approvedOn?: string }) {
  const c = data.client;
  const p = data.price;
  const v = data.value;
  const ct = data.contacts;

  const runTotal = p.run_monthly * p.run_months;
  // Year one at Parker, all in: build, the 90 days, then Right to Use for
  // the rest of the twelve months.
  const yearOne = p.build + runTotal + p.rtu_monthly * (12 - p.run_months);
  const yearOnePct = (yearOne / v.parker_revenue) * 100;
  const pctLine =
    yearOnePct < 4 ? "under 4%" : `about ${Math.round(yearOnePct)}%`;
  const halfLow = v.opening_ads_low / 2;
  const storeLine =
    p.new_store_template <= halfLow
      ? "half or less of"
      : p.new_store_template < v.opening_ads_low
        ? "less than"
        : "in line with";

  // Spend graphic: heights proportional to dollars, with a floor so the small
  // bars stay visible on a phone. Labels carry the real numbers.
  const max = p.build;
  const h = (n: number) => Math.max(5, Math.round((n / max) * 100));
  const bar = (cls: string, n: number, label: string, top?: string) =>
    `<div class="bar ${cls}"><b>${esc(top ?? money(n))}</b><i style="height:${h(n)}%"></i><s>${esc(label)}</s></div>`;

  const approvedBlock = opts.approvedOn
    ? `<div class="approved"><p class="kicker">What you approved</p><p>Signed ${esc(opts.approvedOn)}. This is the offer as agreed, kept here so everyone works from the same page.</p></div>`
    : "";

  // Command center: the cockpit (where work is instructed) and the dashboard
  // (one private address, phone or laptop). The phone mock carries sample
  // numbers from the JSON, labeled "Sample" on the page.
  const cc = data.command_center;
  const sm = cc.sample;
  const showsHtml = cc.dashboard_shows
    .map((s) => `<li>${esc(s)}</li>`)
    .join("");
  const dayCell = (d: { day: string; parker: number; englewood: number }) => {
    const cls =
      d.parker && d.englewood ? "pe" : d.parker ? "p" : d.englewood ? "e" : "";
    const title = [
      d.parker ? c.first_store : "",
      d.englewood ? c.next_store : "",
    ]
      .filter(Boolean)
      .join(" and ");
    return `<div>${esc(d.day)}<i class="${cls}" title="${esc(title || "No post")}"></i></div>`;
  };
  const phoneMock = `
  <div class="phonewrap">
    <div class="phone" role="img" aria-label="Sample of the Swing Bays dashboard on a phone">
      <span class="sample">${esc(sm.label)}</span>
      <div class="screen">
        <p class="ttl">${esc(c.name)}<small>Today, every store. ${esc(sm.label)} numbers.</small></p>
        <div class="tiles">
          <div class="tile"><b>${sm.calls_answered}<small>${sm.calls_handled} handled</small></b><span>Calls the AI answered</span></div>
          <div class="tile"><b>${sm.dms}</b><span>DMs received, Instagram and Facebook</span></div>
          <div class="tile"><b>${sm.repairs_queue}<small>${sm.repairs_done} done</small></b><span>Club repairs in the queue</span></div>
          <div class="tile"><b>${sm.bookings}</b><span>Bookings</span></div>
          <div class="tile"><b>${sm.new_contacts}</b><span>New contacts in the record</span></div>
          <div class="tile"><b>${sm.week.reduce((t, d) => t + d.parker + d.englewood, 0)}</b><span>Posts scheduled this week</span></div>
        </div>
        <div class="cal">
          <div class="h"><b>Post calendar</b><span>this week</span></div>
          <div class="days">${sm.week.map(dayCell).join("")}</div>
          <div class="key"><span><i style="background:var(--blue-dark)"></i>${esc(c.first_store)}</span><span><i style="background:var(--coral)"></i>${esc(c.next_store)}</span></div>
        </div>
        <p class="foot">Updated as things happen</p>
      </div>
    </div>
    <p class="phonecap">A sample of your dashboard. The numbers are placeholders; yours fill in as Parker runs.</p>
  </div>`;

  const commandCenter = `
  <h2><span class="num">1</span>Your command center</h2>
  <p class="lead">When it's all connected, there are two things you look at. One to run it, one to see it.</p>
  <div class="cc">
    <div class="card"><strong>The cockpit</strong><p>${esc(cc.cockpit)}</p></div>
    <div class="card"><strong>The dashboard</strong><p>${esc(cc.dashboard)}</p><p>It shows:</p><ul>${showsHtml}</ul></div>
  </div>
  ${phoneMock}`;

  const mv = data.optional.money_view;
  const optionalBlock = `
  <div class="optional">
    <span class="tag">Optional add-on, not included above</span>
    <strong>${esc(mv.name)}</strong>
    <p>${esc(mv.what)}</p>
    <p>${esc(mv.who)}</p>
    <p><b>${esc(mv.promise)}</b></p>
    <p class="note">${esc(mv.price)}</p>
  </div>`;

  return `
<div class="sheet">
  <p class="client">${esc(c.name)}<small>${esc(c.tagline)}</small></p>
  <hr class="rule">
  <p class="kicker">A proposal from Kerzie AI Solutions</p>
  <h1>${esc(c.name)}, run from one place.</h1>
  <p class="sub">Prepared for ${esc(c.owner)} by ${esc(data.prepared.by)}. ${esc(data.prepared.date)}.</p>
  ${approvedBlock}

  <p class="lead">Every customer and member in one record, and everything else runs off it. The answering, the club repair texts, the posts, the follow-ups, the events, the booking. One place, every store.</p>
  <p class="note">First, The Back Cover pages: the separate agreement you already have. Everything below runs on top of them.</p>
  ${commandCenter}

  <h2><span class="num">2</span>What you get</h2>
  <div class="cards">
    <div class="card"><strong>The cockpit</strong><p>Where ${esc(c.lead)}, you or Brenna instruct the work, on the Swing Bays Mac.</p></div>
    <div class="card"><strong>The dashboard</strong><p>One private address on your phone: posts, calls, DMs, repairs, bookings and new contacts, as they happen.</p></div>
    <div class="card"><strong>Every call, text and DM answered</strong><p>After hours too. ${esc(c.next_store)}'s number is answered from opening day.</p></div>
    <div class="card"><strong>Club repair off paper</strong><p>Orders come in on the website or the counter iPad. ${esc(c.lead)} works one queue. The customer gets the "your clubs are ready" text with a pay link.</p></div>
    <div class="card"><strong>Your voice everywhere</strong><p>Scheduled posts for every store, plus your daily lesson videos turned into shorts, a Swing Bays YouTube channel and TikTok.</p></div>
    <div class="card"><strong>Bring people back</strong><p>First visits, new members, renewals, failed payments and lapsed customers each get the right message at the right time.</p></div>
    <div class="card"><strong>Corporate events found and followed up</strong><p>Local companies found, contacted and followed through to a booking. Your staff approves every send.</p></div>
    <div class="card"><strong>Booking by text</strong><p>Book a bay or a lesson inside a text or DM. Switched on the day SimHouse is connected.</p></div>
    <div class="card"><strong>Every new store opens with all of it</strong><p>Pages, number and outreach live before the doors open, plus the franchise playbook loaded and ready.</p></div>
  </div>
  <p class="note" style="margin-top:12px">No ad budget needed to start. This is built to grow by word of mouth and your own channels.</p>

  <h2><span class="num">3</span>How it works</h2>
  <ol class="steps">
    <li><strong>Build it all at once.</strong> We build everything on our side, prove it, then move it onto a Mac Swing Bays owns. ${esc(c.first_store)} goes live first.</li>
    <li><strong>Run it together for 90 days.</strong>
      <ul>
        <li>Days 1 to 30: we run it, ${esc(c.lead)} learns.</li>
        <li>Days 31 to 60: ${esc(c.lead)} runs it, we watch.</li>
        <li>Days 61 to 90: ${esc(c.lead)} runs it alone, we're on call.</li>
        <li>Day 90: ${esc(c.lead)} signs off and it's handed over.</li>
      </ul>
    </li>
    <li><strong>Then it's yours.</strong> You own it. We keep it current and pick up the phone when you call.</li>
  </ol>
  <div class="chart" aria-label="What you pay over time">
    <div class="bars">
      ${bar("build", p.build, "Build")}
      ${bar("run", p.run_monthly, "Month 1")}
      ${bar("run", p.run_monthly, "Month 2")}
      ${bar("run", p.run_monthly, "Month 3")}
      ${bar("after", p.rtu_monthly, "Month 4")}
      ${bar("after", p.rtu_monthly, "and on")}
    </div>
    <p class="cap">Big once, then small, then smaller. You are never committing to something that grows.</p>
  </div>

  <h2><span class="num">4</span>The price</h2>
  <div class="pricebox">
    <div class="row"><div class="amt">${esc(money(p.build))}</div><div class="what"><strong>Build everything.</strong> Once, ${esc(p.build_terms)}.</div></div>
    <div class="row"><div class="amt">${esc(money(p.run_monthly))}<small> a month</small></div><div class="what"><strong>Run it together for 90 days.</strong> ${esc(String(p.run_months))} months, the same each month.</div></div>
    <div class="row"><div class="amt">${esc(money(p.rtu_monthly))}<small> a month</small></div><div class="what"><strong>After hand-over: Right to Use and Updates.</strong> For ${esc(c.first_store)} and corporate, plus ${esc(money(p.rtu_per_store_monthly))} a month for each additional store on the system.</div></div>
    <div class="row"><div class="amt">${esc(money(p.new_store_template))}</div><div class="what"><strong>Each new store you open.</strong> The template, ${esc(p.new_store_run_note)}.</div></div>
  </div>
  <p class="value">${esc(c.first_store)} does about a million dollars a year (${esc(v.parker_revenue_source)} shows ${esc(money(v.parker_revenue))}). Year one at ${esc(c.first_store)}, all in, is ${esc(money(yearOne))}: ${esc(pctLine)} of that, and you own it. The ${esc(money(p.new_store_template))} template for each new store is ${esc(storeLine)} the ${esc(money(v.opening_ads_low))} to ${esc(money(v.opening_ads_high))} you already budget per store for opening ads.</p>
  ${optionalBlock}

  <h2><span class="num">5</span>Yours, in good faith</h2>
  <p>Everything runs on a Mac Swing Bays owns, in accounts in Swing Bays' name. It's yours. There is no switch we can turn off.</p>
  <p>The monthly after hand-over pays for the updates we roll out to every store, new pieces as we build them, and calling us when something breaks. Stop paying, and you keep everything you have; updates and support stop.</p>
  <p class="note">Use it at every Swing Bays location. It isn't for resale to other businesses.</p>

  <h2><span class="num">6</span>${esc(c.next_store)}, ${esc(c.next_store_opens)}</h2>
  <p>The first proof. ${esc(c.next_store)}'s number is answered by AI from opening day, and the opening invitations go out from the same record the store will run on.</p>

  <h2><span class="num">7</span>What we need from you</h2>
  <ol class="need">
    <li>Sign.</li>
    <li>The Mac and the Claude plan, bought in Swing Bays' name. We spec both.</li>
    <li>${esc(c.lead)} as the one point of contact.</li>
    <li>A session with ${esc(c.sim_contact)} on SimHouse.</li>
    <li>Add us as a user on the website and on Square. We do the connecting.</li>
  </ol>

  <div class="cta">
    <p class="big">Next step: sign, and we start the build.</p>
    <p>Aaron is your contact.<br>
    Aaron Jones, Technical Specialist, Kerzie AI Solutions<br>
    <a href="${esc(ct.aaron_card)}" target="_blank" rel="noopener">kerzie.ai/card/aaron</a><br>
    Wade Kerzie, Kerzie AI Solutions, McKinney, Texas<br>
    <a href="mailto:${esc(ct.wade_email)}">${esc(ct.wade_email)}</a></p>
  </div>
</div>`;
}

// ------------------------------------------------------------ dashboard

function chipClass(status: string) {
  const s = status.toLowerCase();
  if (s.startsWith("handed")) return "chip handed";
  if (s.startsWith("live")) return "chip live";
  if (s.startsWith("building")) return "chip building";
  return "chip";
}

function dashboardBody() {
  const pj = data.project;
  const c = data.client;
  const today = todayChicago();
  const start = pj.clock_start ? parse(pj.clock_start) : null;
  const total = pj.clock_days ?? 90;
  const dayN = start
    ? Math.floor((today.getTime() - start.getTime()) / DAY) + 1
    : 0;
  const clamped = Math.min(Math.max(dayN, 0), total);
  const pct = Math.round((clamped / total) * 100);
  const phase = dayN < 1 ? 0 : dayN <= 30 ? 1 : dayN <= 60 ? 2 : dayN <= 90 ? 3 : 4;

  const todayLine = !start
    ? "The 90 days start when Parker goes live."
    : dayN < 1
      ? `Build underway. Day 1 is ${fmtDate(start)}.`
      : dayN > total
        ? "Handed over. Day 90 is behind us."
        : `Day ${dayN} of ${total}`;

  const phaseBox = (n: number, label: string, who: string) =>
    `<div class="${phase > n ? "done" : phase === n ? "on" : ""}">${esc(label)}<br><span style="font-weight:400">${esc(who)}</span></div>`;

  // Pieces
  const areas = pj.areas as Area[];
  const all = areas.flatMap((a) => a.pieces);
  const count = (pred: (s: string) => boolean) =>
    all.filter((pc) => pred(pc.status.toLowerCase())).length;
  const nLive = count((s) => s.startsWith("live"));
  const nBuilding = count((s) => s.startsWith("building"));
  const nHanded = count((s) => s.startsWith("handed"));
  const nNot = all.length - nLive - nBuilding - nHanded;

  const areaHtml = areas
    .map(
      (a) =>
        `<div class="area"><h3>${esc(a.name)}</h3><table>${a.pieces
          .map(
            (pc) =>
              `<tr><td>${esc(pc.name)}${pc.example ? '<span class="ex">example</span>' : ""}</td><td class="st"><span class="${chipClass(pc.status)}">${esc(pc.status)}</span></td></tr>`,
          )
          .join("")}</table></div>`,
    )
    .join("");

  // Milestones: dated ones as given; Day 30/60/90 derived from clock_start.
  const ms = (pj.milestones as Milestone[])
    .map((m) => {
      let d: Date | null = null;
      if (m.date) d = parse(m.date);
      else if (typeof m.offset === "number" && pj.clock_start)
        d = addDays(pj.clock_start, m.offset - 1);
      return { ...m, when: d };
    })
    .sort(
      (a, b) => (a.when?.getTime() ?? 9e15) - (b.when?.getTime() ?? 9e15),
    );
  let nextMarked = false;
  const msHtml = ms
    .map((m) => {
      const done = !!m.when && m.when.getTime() <= today.getTime();
      let cls = done ? "dot done" : "dot";
      if (!done && !nextMarked) {
        cls = "dot next";
        nextMarked = true;
      }
      return `<li><span class="${cls}"></span><span class="d">${m.when ? esc(fmtDate(m.when)) : "TBD"}</span><span>${esc(m.label)}${m.example ? '<span class="ex">example</span>' : ""}</span></li>`;
    })
    .join("");

  const log = (pj.log as LogRow[])
    .slice()
    .sort((a, b) => (a.date < b.date ? 1 : -1))
    .map(
      (r) =>
        `<tr><td class="d">${esc(fmtDate(parse(r.date)))}</td><td>${esc(r.who)}${r.example ? '<span class="ex">example</span>' : ""}</td><td>${esc(r.what)}</td><td class="e">${esc(r.effect)}</td></tr>`,
    )
    .join("");

  const banner = pj.example_data
    ? `<div class="banner">Preview with example data. Rows marked "example" are placeholders; real statuses and dates replace them when the project starts.</div>`
    : "";

  return `
<div class="sheet">
  <p class="client">${esc(c.name)}<small>Project page</small></p>
  <hr class="rule">
  ${banner}
  <p class="kicker">Kerzie AI Solutions</p>
  <h1>Where we are.</h1>
  <p class="sub">For ${esc(c.owner)} and ${esc(c.lead)}. Updated ${esc(fmtLong(parse(data.updated)))}.</p>

  <h2 style="margin-top:10px">The 90 days</h2>
  <div class="clock">
    <p class="today">${esc(todayLine)}</p>
    <div class="track"><div class="fill" style="width:${pct}%"></div></div>
    <div class="ticks"><span>Day 1</span><span>Day 30</span><span>Day 60</span><span>Day 90</span></div>
    <div class="phases">
      ${phaseBox(1, "Days 1 to 30", `We run it, ${c.lead} learns`)}
      ${phaseBox(2, "Days 31 to 60", `${c.lead} runs it, we watch`)}
      ${phaseBox(3, "Days 61 to 90", `${c.lead} alone, we're on call`)}
    </div>
  </div>

  <h2>Every piece</h2>
  <div class="summary">
    <div><b>${nLive}</b><span>Live at Parker</span></div>
    <div><b>${nBuilding}</b><span>Building</span></div>
    <div><b>${nNot}</b><span>Not started</span></div>
    <div><b>${nHanded}</b><span>Handed to Colter</span></div>
  </div>
  ${areaHtml}

  <h2>Milestones</h2>
  <ul class="ms">${msHtml}</ul>

  <h2>Approvals and changes</h2>
  <p class="note">Every decision, who made it, and what it did to scope or price.</p>
  <table class="log">
    <thead><tr><th>Date</th><th>Who</th><th>What</th><th>Effect</th></tr></thead>
    <tbody>${log}</tbody>
  </table>
</div>`;
}

// ----------------------------------------------------------------- page

export async function GET(request: NextRequest) {
  const view = request.nextUrl.searchParams.get("view");
  const mode =
    view === "project"
      ? "project"
      : view === "proposal"
        ? "proposal"
        : data.mode;

  const signed = data.project.signed
    ? fmtLong(parse(data.project.signed))
    : undefined;
  const body =
    mode === "project"
      ? dashboardBody() + proposalBody({ approvedOn: signed })
      : proposalBody({});

  const title =
    mode === "project"
      ? `${data.client.name} project | Kerzie AI`
      : `${data.client.name}, run from one place | Kerzie AI`;

  const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex, nofollow">
<title>${esc(title)}</title>
<meta property="og:type" content="website">
<meta property="og:site_name" content="Kerzie AI">
<meta property="og:title" content="${esc(data.client.name)}, run from one place">
<meta property="og:description" content="Prepared for ${esc(data.client.owner)} by Kerzie AI Solutions.">
<meta property="og:image" content="https://kerzie.ai/og/brand-card.jpg">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta name="twitter:card" content="summary_large_image">
<link rel="icon" href="/favicon-32.png" sizes="32x32" type="image/png">
<link rel="icon" href="/favicon-16.png" sizes="16x16" type="image/png">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">
<style>${CSS}</style>
</head>
<body>
<div class="wrap">
${body}
<p class="footer">Kerzie AI Solutions &middot; <a href="https://kerzie.ai" style="color:inherit">kerzie.ai</a></p>
</div>
</body>
</html>`;

  return new Response(html, {
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "X-Robots-Tag": "noindex, nofollow",
      "Cache-Control": "no-store",
    },
  });
}
