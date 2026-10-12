import type { NextRequest } from "next/server";
import { timingSafeEqual } from "crypto";
import data from "@/data/swingbays_build.json";

// kerzie.ai/swingbays/build
//
// The INTERNAL Swing Bays project page (Wade, Jordan, Aaron). One list of
// everything we still need from Dustin, Colter, Shawn and Keegan plus our own
// tasks and access steps, shown by workstream with a per-person filter and a
// printable ask list for walking into a conversation.
//
// Driven by src/data/swingbays_build.json (edit the data, never the markup).
// Claude keeps it current from the recorded conversations: match the question,
// set answered + answer + source, add new ones, bump updated, redeploy.
// Recipe: Wade OS clients/swing_bays/README_build_page.md.
//
// Gate: HTTP Basic Auth on this route only. Username "kerzie", password from
// the env var SWINGBAYS_BUILD_PASSWORD. No env var = nobody gets in (fail
// closed). Private page: noindex, nofollow, not in the sitemap, not in
// llms.txt, skipped by gen-llms-full (route handlers emit no .html).

export const dynamic = "force-dynamic";

type Person = { key: string; name: string; role: string; org: string; side: string };
type Workstream = { key: string; order: number; title: string; goal: string };
type Milestone = { key: string; label: string; date?: string; offset?: number; approx?: boolean };
type Item = {
  id: string;
  workstream: string;
  kind: string;
  text: string;
  from: string;
  owner: string;
  status: string;
  due: string | null;
  answer: string;
  source: string;
  updated: string;
  step_one: boolean;
};

const USER = "kerzie";
const STATUSES = ["open", "asked", "answered", "done", "blocked"] as const;

const esc = (s: unknown) =>
  String(s ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

const DAY = 86_400_000;
const parse = (iso: string) => new Date(iso + "T12:00:00-05:00");
const addDays = (iso: string, days: number) => new Date(parse(iso).getTime() + days * DAY);
const fmtDate = (d: Date) =>
  d.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric", timeZone: "America/Chicago" });
const fmtLong = (d: Date) =>
  d.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric", timeZone: "America/Chicago" });
const todayChicago = () => parse(new Date().toLocaleDateString("en-CA", { timeZone: "America/Chicago" }));

// ------------------------------------------------------------------ gate

function denied(reason: "missing" | "unconfigured") {
  if (reason === "unconfigured") {
    return new Response("This page is not configured.", {
      status: 403,
      headers: { "Content-Type": "text/plain; charset=utf-8", "X-Robots-Tag": "noindex, nofollow", "Cache-Control": "no-store" },
    });
  }
  return new Response("Sign in to see this page.", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="Swing Bays build page", charset="UTF-8"',
      "Content-Type": "text/plain; charset=utf-8",
      "X-Robots-Tag": "noindex, nofollow",
      "Cache-Control": "no-store",
    },
  });
}

function safeEqual(a: string, b: string) {
  const ba = Buffer.from(a, "utf8");
  const bb = Buffer.from(b, "utf8");
  if (ba.length !== bb.length) {
    // Compare against itself so the time taken does not reveal the length.
    timingSafeEqual(ba, ba);
    return false;
  }
  return timingSafeEqual(ba, bb);
}

function authorized(request: NextRequest): "ok" | "missing" | "unconfigured" {
  const expected = process.env.SWINGBAYS_BUILD_PASSWORD;
  if (!expected) return "unconfigured";
  const header = request.headers.get("authorization") || "";
  const [scheme, encoded] = header.split(" ");
  if (!/^basic$/i.test(scheme || "") || !encoded) return "missing";
  let decoded = "";
  try {
    decoded = Buffer.from(encoded, "base64").toString("utf8");
  } catch {
    return "missing";
  }
  const idx = decoded.indexOf(":");
  if (idx < 0) return "missing";
  const user = decoded.slice(0, idx);
  const pass = decoded.slice(idx + 1);
  const userOk = safeEqual(user, USER);
  const passOk = safeEqual(pass, expected);
  return userOk && passOk ? "ok" : "missing";
}

// ---------------------------------------------------------------- styles

const CSS = `
:root{--ink:#111318;--muted:#5a606b;--line:#d9dde3;--blue:#1d5f9f;--navy:#123c64;--beige:#f3efe7;--paper:#fff;--coral:#E8896A;--soft:#f7f9fc;--green:#2f7d4f;--amber:#8a6500;--amber-bg:#fff1cc;--red:#9b2c2c;--red-bg:#fde8e8}
*{box-sizing:border-box}
html{-webkit-text-size-adjust:100%}
body{margin:0;font-family:Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif;color:var(--ink);background:var(--beige);line-height:1.45;font-size:15px}
.wrap{max-width:1040px;margin:0 auto;padding:20px 12px 64px;min-width:0}
@media(min-width:640px){.wrap{padding:36px 24px 80px}}
.sheet{background:var(--paper);border:1px solid var(--line);border-radius:10px;padding:22px 14px;min-width:0}
@media(min-width:640px){.sheet{padding:40px 40px}}
.client{font-size:20px;letter-spacing:.16em;text-transform:uppercase;color:var(--navy);font-weight:800;margin:0 0 4px;line-height:1.1}
@media(min-width:640px){.client{font-size:24px}}
.client small{display:block;font-size:12px;letter-spacing:.14em;color:var(--muted);font-weight:600;margin-top:4px}
.rule{border:0;border-top:2px solid var(--navy);margin:14px 0 18px}
.kicker{font-size:12px;letter-spacing:.12em;text-transform:uppercase;color:var(--blue);font-weight:700;margin:0 0 6px}
h1{font-size:26px;line-height:1.15;margin:0 0 6px;color:var(--navy);letter-spacing:-.01em}
@media(min-width:640px){h1{font-size:32px}}
.sub{color:var(--muted);margin:0 0 18px;font-size:14px}
.internal{display:inline-block;font-size:11px;letter-spacing:.12em;text-transform:uppercase;font-weight:800;color:var(--red);background:var(--red-bg);border-radius:4px;padding:2px 8px;margin-left:8px;vertical-align:2px}
h2{font-size:19px;line-height:1.25;margin:34px 0 4px;color:var(--navy)}
h2 .n{display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:var(--navy);color:#fff;font-size:13px;font-weight:700;margin-right:9px;vertical-align:2px}
.goal{color:var(--muted);font-size:14px;margin:0 0 10px}
/* top strip */
.strip{display:grid;grid-template-columns:1fr;gap:14px;margin:0 0 6px}
@media(min-width:760px){.strip{grid-template-columns:3fr 2fr}}
.panel{border:1px solid var(--line);border-radius:8px;padding:12px 14px;background:var(--soft);min-width:0}
.panel .h{font-size:11px;letter-spacing:.12em;text-transform:uppercase;color:var(--blue);font-weight:700;margin:0 0 8px}
.ms{list-style:none;margin:0;padding:0}
.ms li{display:grid;grid-template-columns:88px 1fr;gap:4px 10px;padding:6px 0;border-top:1px solid var(--line);font-size:14px}
.ms li:first-child{border-top:0;padding-top:0}
.ms .d{color:var(--navy);font-weight:700;white-space:nowrap}
.ms .d small{display:block;font-weight:500;color:var(--muted);font-size:11px;line-height:1.1}
.ms li.next .d{color:var(--coral)}
.clockline{font-size:12.5px;color:var(--muted);margin:8px 0 0}
.counts{display:grid;grid-template-columns:repeat(3,1fr);gap:8px}
@media(min-width:420px){.counts{grid-template-columns:repeat(3,1fr)}}
.counts div{border:1px solid var(--line);border-radius:8px;padding:8px 10px;background:var(--paper);min-width:0}
.counts b{display:block;font-size:22px;color:var(--navy);line-height:1.1}
.counts span{font-size:11px;color:var(--muted);text-transform:uppercase;letter-spacing:.06em;line-height:1.2;display:block;margin-top:2px}
.counts div.s1{grid-column:1/-1;border-left:4px solid var(--coral)}
.counts div.s1 b{color:var(--coral)}
/* person chips */
.who{margin:18px 0 0;padding:12px 0 0;border-top:1px solid var(--line)}
.who .h{font-size:11px;letter-spacing:.12em;text-transform:uppercase;color:var(--blue);font-weight:700;margin:0 0 8px}
.chips{display:flex;flex-wrap:wrap;gap:6px}
.chip{appearance:none;border:1px solid var(--line);background:var(--paper);color:var(--navy);border-radius:16px;padding:5px 11px;font:inherit;font-size:13px;font-weight:600;cursor:pointer;line-height:1.2}
.chip:hover{border-color:var(--navy)}
.chip.on{background:var(--navy);color:#fff;border-color:var(--navy)}
.chip.us{border-style:dashed}
.chip.us.on{border-style:solid}
.chip small{font-weight:500;opacity:.75;margin-left:4px}
/* ask list */
.asks{display:none;margin:16px 0 0;border:2px solid var(--navy);border-radius:8px;padding:14px 16px;background:var(--paper)}
.asks.on{display:block}
.asks .top{display:flex;justify-content:space-between;align-items:flex-start;gap:10px;flex-wrap:wrap;margin-bottom:6px}
.asks h3{margin:0;font-size:17px;color:var(--navy)}
.asks .role{margin:2px 0 0;font-size:13px;color:var(--muted)}
.asks .pbtn{appearance:none;border:1px solid var(--navy);background:var(--paper);color:var(--navy);border-radius:6px;padding:5px 10px;font:inherit;font-size:13px;font-weight:600;cursor:pointer}
.asks h4{margin:12px 0 4px;font-size:12px;letter-spacing:.08em;text-transform:uppercase;color:var(--blue)}
.asks ol{margin:0;padding-left:22px}
.asks li{padding:3px 0 5px;font-size:14.5px}
.asks li .m{display:block;font-size:12px;color:var(--muted)}
.asks li .s1{font-size:10px;margin-right:5px}
.asks .none{color:var(--muted);font-size:14px;margin:6px 0 0}
.asks .foot{margin:12px 0 0;font-size:12px;color:var(--muted);border-top:1px solid var(--line);padding-top:8px}
/* rows */
.rows{margin:0;padding:0;list-style:none;border-top:1px solid var(--line)}
.row{display:grid;grid-template-columns:1fr;gap:4px 12px;padding:9px 0;border-bottom:1px solid var(--line);min-width:0}
@media(min-width:760px){.row{grid-template-columns:86px 1fr 230px}}
.row.hide{display:none}
.row .st{align-self:start}
.row .t{min-width:0;overflow-wrap:anywhere}
.row .t .k{display:inline-block;font-size:10.5px;letter-spacing:.08em;text-transform:uppercase;font-weight:700;color:var(--muted);margin-right:6px}
.row .t .k.access{color:var(--blue)}
.row .t .k.decision{color:var(--coral)}
.s1{display:inline-block;font-size:10.5px;letter-spacing:.08em;text-transform:uppercase;font-weight:800;color:var(--coral);border:1px solid var(--coral);border-radius:3px;padding:0 5px;margin-right:6px;vertical-align:1px}
.row .t .ans{display:block;margin-top:4px;padding:6px 10px;background:var(--soft);border-left:3px solid var(--green);border-radius:4px;font-size:14px}
.row .t .ans b{color:var(--green);font-size:11px;letter-spacing:.08em;text-transform:uppercase;margin-right:6px}
.row.blocked .t .ans{border-left-color:var(--red)}
.row.blocked .t .ans b{color:var(--red)}
.row .meta{font-size:12.5px;color:var(--muted);line-height:1.4;min-width:0;overflow-wrap:anywhere}
.row .meta b{color:var(--navy);font-weight:600}
.row .meta .due.past{color:var(--red);font-weight:700}
.row .meta .src{display:block;font-size:11.5px;opacity:.85}
.row.done .t,.row.answered .t{color:#3a3f48}
.row.done .t{text-decoration:line-through;text-decoration-color:#b9bec7}
.pill{display:inline-block;font-size:11px;font-weight:700;padding:3px 8px;border-radius:12px;background:#eceff3;color:var(--muted);text-transform:uppercase;letter-spacing:.06em;white-space:nowrap}
.pill.asked{background:var(--amber-bg);color:var(--amber)}
.pill.answered{background:#e3f0ff;color:var(--navy)}
.pill.done{background:#e3f4e8;color:var(--green)}
.pill.blocked{background:var(--red-bg);color:var(--red)}
.wscount{font-size:12px;color:var(--muted);font-weight:500;margin-left:8px}
.empty{display:none;color:var(--muted);font-size:14px;padding:8px 0}
.ws.allhidden .empty{display:block}
.legend{display:flex;flex-wrap:wrap;gap:6px 14px;font-size:12px;color:var(--muted);margin:14px 0 0;align-items:center}
.footer{text-align:center;color:var(--muted);font-size:13px;margin-top:28px}
.footer a{color:inherit}
@media print{
  body{background:#fff;font-size:12px}
  .wrap{padding:0;max-width:none}
  .sheet{border:0;padding:0}
  .chips,.pbtn,.legend{display:none}
  .row{break-inside:avoid}
  body.printasks .strip,body.printasks .who,body.printasks .ws,body.printasks .footer,body.printasks h1,body.printasks .sub,body.printasks .kicker{display:none}
  body.printasks .asks{border:0;padding:0}
}
`;

// ------------------------------------------------------------------ page

function render() {
  const people = data.people as Person[];
  const workstreams = (data.workstreams as Workstream[]).slice().sort((a, b) => a.order - b.order);
  const items = data.items as Item[];
  const today = todayChicago();
  const byKey = new Map(people.map((p) => [p.key, p]));
  const name = (k: string) => byKey.get(k)?.name.split(" ")[0] ?? k;

  // Counts
  const count = (s: string) => items.filter((i) => i.status === s).length;
  const stepOneWaiting = items.filter((i) => i.step_one && i.status !== "done" && i.status !== "answered").length;

  // Milestones: dated as given, offsets from clock_start; next 5 not yet past.
  const clockStart = data.clock_start as string | null;
  const ms = (data.milestones as Milestone[])
    .map((m) => {
      let when: Date | null = null;
      if (m.date) when = parse(m.date);
      else if (typeof m.offset === "number" && clockStart) when = addDays(clockStart, m.offset - 1);
      return { ...m, when };
    })
    .sort((a, b) => (a.when?.getTime() ?? 9e15) - (b.when?.getTime() ?? 9e15));
  const upcoming = ms.filter((m) => !m.when || m.when.getTime() >= today.getTime() - DAY * 0.5).slice(0, 6);
  const msHtml = upcoming
    .map(
      (m, i) =>
        `<li class="${i === 0 ? "next" : ""}"><span class="d">${m.when ? esc(fmtDate(m.when)) : "TBD"}${m.approx ? "<small>week of</small>" : ""}</span><span>${esc(m.label)}</span></li>`,
    )
    .join("");
  const clockLine = clockStart
    ? `Day 1 of the 90 was ${esc(fmtLong(parse(clockStart)))}.`
    : "Day 30, 60 and 90 compute from Parker go-live, which has no date yet.";

  // Person chips (them first, then us), with open-ask counts.
  const openFor = (k: string) => items.filter((i) => i.from === k && (i.status === "open" || i.status === "asked" || i.status === "blocked")).length;
  const chip = (p: Person) =>
    `<button type="button" class="chip ${p.side === "us" ? "us" : ""}" data-who="${esc(p.key)}">${esc(p.name.split(" ")[0])}<small>${openFor(p.key)}</small></button>`;
  const chipsHtml =
    `<button type="button" class="chip on" data-who="">Everyone</button>` +
    people.filter((p) => p.side === "them").map(chip).join("") +
    people.filter((p) => p.side === "us").map(chip).join("");

  // Per-person ask lists (printable): what we still need FROM this person,
  // grouped by workstream, plus what they are chasing as owner.
  const askHtml = people
    .map((p) => {
      const need = items.filter((i) => i.from === p.key && i.status !== "done" && i.status !== "answered");
      const groups = workstreams
        .map((w) => {
          const rows = need.filter((i) => i.workstream === w.key);
          if (!rows.length) return "";
          return `<h4>${esc(w.title)}</h4><ol>${rows
            .map(
              (i) =>
                `<li>${i.step_one ? '<span class="s1">Step One</span>' : ""}${esc(i.text)}<span class="m">${esc(i.kind)}${i.due ? ", by " + esc(fmtDate(parse(i.due))) : ""}${i.status === "asked" ? ", already asked" : ""}${i.status === "blocked" && i.answer ? ", blocked: " + esc(i.answer) : ""}</span></li>`,
            )
            .join("")}</ol>`;
        })
        .join("");
      const chasing = items.filter((i) => i.owner === p.key && i.from !== p.key && i.status !== "done" && i.status !== "answered").length;
      return `<div class="asks" id="asks-${esc(p.key)}" data-who="${esc(p.key)}">
  <div class="top"><div><h3>What we need from ${esc(p.name)}</h3><p class="role">${esc(p.role)}, ${esc(p.org)}. ${need.length} open item${need.length === 1 ? "" : "s"}${chasing ? `; also chasing ${chasing} from others` : ""}.</p></div><button type="button" class="pbtn" data-print="1">Print this list</button></div>
  ${groups || '<p class="none">Nothing open. Everything we needed from this person is answered or done.</p>'}
  <p class="foot">The Swing Bays build page, Kerzie AI Solutions, internal. As of ${esc(fmtLong(parse(data.updated)))}.</p>
</div>`;
    })
    .join("");

  // Workstream sections
  const kindLabel: Record<string, string> = { question: "Question", task: "Task", access: "Access", decision: "Decision" };
  const rowHtml = (i: Item) => {
    const due = i.due ? parse(i.due) : null;
    const past = !!due && due.getTime() < today.getTime() && i.status !== "done" && i.status !== "answered";
    const ans =
      (i.status === "answered" || i.status === "done") && i.answer
        ? `<span class="ans"><b>${i.status === "done" ? "Done" : "Answer"}</b>${esc(i.answer)}</span>`
        : i.status === "blocked" && i.answer
          ? `<span class="ans"><b>Blocked</b>${esc(i.answer)}</span>`
          : "";
    return `<li class="row ${esc(i.status)}" data-from="${esc(i.from)}" data-owner="${esc(i.owner)}" data-status="${esc(i.status)}">
  <span class="st"><span class="pill ${esc(i.status)}">${esc(i.status)}</span></span>
  <span class="t"><span class="k ${esc(i.kind)}">${esc(kindLabel[i.kind] ?? i.kind)}</span>${i.step_one ? '<span class="s1">Step One</span>' : ""}${esc(i.text)}${ans}</span>
  <span class="meta">From <b>${esc(name(i.from))}</b>, owner <b>${esc(name(i.owner))}</b>${due ? `, <span class="due${past ? " past" : ""}">by ${esc(fmtDate(due))}</span>` : ""}<span class="src">${esc(i.source)}. Updated ${esc(fmtDate(parse(i.updated)))}.</span></span>
</li>`;
  };
  const wsHtml = workstreams
    .map((w, idx) => {
      const rows = items.filter((i) => i.workstream === w.key);
      const open = rows.filter((i) => i.status !== "done" && i.status !== "answered").length;
      return `<section class="ws" data-ws="${esc(w.key)}">
  <h2><span class="n">${idx + 1}</span>${esc(w.title)}<span class="wscount">${open} open of ${rows.length}</span></h2>
  <p class="goal">${esc(w.goal)}</p>
  <ul class="rows">${rows.map(rowHtml).join("")}</ul>
  <p class="empty">Nothing here for this person.</p>
</section>`;
    })
    .join("");

  const title = `${data.client} build | Kerzie AI`;
  const JS = `
(function(){
  var chips=document.querySelectorAll('.chip');
  var rows=document.querySelectorAll('.row');
  var asks=document.querySelectorAll('.asks');
  var sections=document.querySelectorAll('.ws');
  function apply(who){
    chips.forEach(function(c){c.classList.toggle('on',(c.getAttribute('data-who')||'')===who);});
    rows.forEach(function(r){
      var show=!who||r.getAttribute('data-from')===who||r.getAttribute('data-owner')===who;
      r.classList.toggle('hide',!show);
    });
    sections.forEach(function(s){
      var any=s.querySelectorAll('.row:not(.hide)').length>0;
      s.classList.toggle('allhidden',!any);
    });
    asks.forEach(function(a){a.classList.toggle('on',!!who&&a.getAttribute('data-who')===who);});
    try{ if(who){history.replaceState(null,'','#'+who);} else {history.replaceState(null,'',location.pathname);} }catch(e){}
  }
  chips.forEach(function(c){c.addEventListener('click',function(){apply(c.getAttribute('data-who')||'');});});
  document.querySelectorAll('[data-print]').forEach(function(b){b.addEventListener('click',function(){
    document.body.classList.add('printasks');window.print();
    setTimeout(function(){document.body.classList.remove('printasks');},500);
  });});
  var h=(location.hash||'').replace('#','');
  if(h&&document.getElementById('asks-'+h)){apply(h);}
})();`;

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex, nofollow, noarchive">
<title>${esc(title)}</title>
<meta property="og:type" content="website">
<meta property="og:site_name" content="Kerzie AI">
<meta property="og:title" content="${esc(data.client)} build page">
<meta property="og:description" content="Internal. Kerzie AI Solutions.">
<meta property="og:image" content="https://kerzie.ai/og/brand-card.jpg">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<link rel="icon" href="/favicon-32.png" sizes="32x32" type="image/png">
<link rel="icon" href="/favicon-16.png" sizes="16x16" type="image/png">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">
<style>${CSS}</style>
</head>
<body>
<div class="wrap">
<div class="sheet">
  <p class="client">${esc(data.client)}<small>Build page</small></p>
  <hr class="rule">
  <p class="kicker">Kerzie AI Solutions<span class="internal">Internal</span></p>
  <h1>What we still need, and who has it.</h1>
  <p class="sub">For Wade, Jordan and Aaron. Not for the client. Updated ${esc(fmtLong(parse(data.updated)))}; Claude keeps it current from the recorded conversations.</p>

  <div class="strip">
    <div class="panel">
      <p class="h">Next up</p>
      <ul class="ms">${msHtml}</ul>
      <p class="clockline">${clockLine}</p>
    </div>
    <div class="panel">
      <p class="h">The list</p>
      <div class="counts">
        <div><b>${count("open")}</b><span>Open</span></div>
        <div><b>${count("asked")}</b><span>Asked</span></div>
        <div><b>${count("blocked")}</b><span>Blocked</span></div>
        <div><b>${count("answered")}</b><span>Answered</span></div>
        <div><b>${count("done")}</b><span>Done</span></div>
        <div><b>${items.length}</b><span>Total</span></div>
        <div class="s1"><b>${stepOneWaiting}</b><span>Step One (one record + November 1) waits on these</span></div>
      </div>
    </div>
  </div>

  <div class="who">
    <p class="h">By person: pick one to see their rows and a printable ask list</p>
    <div class="chips">${chipsHtml}</div>
    ${askHtml}
  </div>

  <div class="legend"><span><span class="pill">open</span> not yet asked</span><span><span class="pill asked">asked</span> waiting on them</span><span><span class="pill blocked">blocked</span> waits on something else</span><span><span class="pill answered">answered</span> we have it</span><span><span class="pill done">done</span> built or delivered</span></div>

  ${wsHtml}

  <p class="footer">Kerzie AI Solutions, internal &middot; <a href="https://kerzie.ai/swingbays/proposal">the proposal</a> &middot; <a href="https://kerzie.ai/swingbays/plan">the 66-item plan</a></p>
</div>
</div>
<script>${JS}</script>
</body>
</html>`;
}

export async function GET(request: NextRequest) {
  const auth = authorized(request);
  if (auth !== "ok") return denied(auth);
  return new Response(render(), {
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "X-Robots-Tag": "noindex, nofollow, noarchive",
      "Cache-Control": "private, no-store",
    },
  });
}
