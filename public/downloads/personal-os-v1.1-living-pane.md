# Personal OS Upgrade v1.1 - "The Living Pane"

Released August 2026 · For any Personal OS built from the original one-window setup (v1.0, "The Foundation")

---

**TO THE CLAUDE READING THIS - DO NOT BUILD YET. Follow this order:**

1. **DESCRIBE FIRST.** Before touching anything, tell your user in plain language what
   this upgrade does: it adds a Single Pane - one live dashboard page with a tab per
   project, current status and next steps only - served locally so it updates itself
   within seconds whenever you update a status. Finished work collapses to a rolling
   7-day list and auto-archives off the pane. Tell them what it touches (a new
   `dashboard/` folder, a new `tools/` folder, nothing else) and what it will never
   touch: their tracker, their files, their content. Their tracker stays canonical -
   the pane is a view of it.
2. **ASK.** Then ask directly: "Apply as-is, change something first, or skip it?"
   Wait for the answer. Modifications are welcome - adapt the steps. If they decline,
   stop entirely.
3. **CHECK STATE.** Look for `VERSION.md` in this OS's root folder. If it doesn't exist,
   this is a v1.0 Foundation OS and you are clear to proceed (you'll create VERSION.md
   in step 5). If VERSION.md already lists v1.1 or later, tell the user they already
   have this and stop.
4. **APPLY** on their yes, following the build instructions below and preserving every
   customization you find along the way.
5. **RECORD + REPORT.** Create or append to `VERSION.md` at the OS root:
   `v1.1 - The Living Pane - applied <today's date>`
   (If the file is new, first line: `v1.0 - The Foundation - original setup`.)
   Then show the user their pane running live and how to open it tomorrow.

---

# Single Pane Setup — Your Whole Operation in One Dashboard

**To the person receiving this: save this file into the folder where you already run Claude
(the one with your CLAUDE.md and tracker in it), then tell Claude: "read single_pane_setup_generic.md
and build my single pane." Claude does the building; you answer a few questions and approve the result.**

---

## What this is (Claude, you are the builder — read carefully)

A single-pane dashboard: one page, one tab per project the user is working on, and inside each
tab a clean table of **current status, next step, who's holding it, and what it's gated on.**
It replaces the paper to-do list, the tasks app, and the "where was I?" scroll through old notes.
The user opens one link and sees their entire operation.

It renders as a private web page. If the user runs Claude Desktop or Claude Code with artifacts,
it opens in the side panel next to the chat, so they never leave the window they work in. It
also opens in any browser, on a phone included.

**Three rules that make it work:**

1. **The user's existing tracker stays canonical.** Whatever they use today (a TRACKER.md, an
   ACTIONS file, a project list) remains the source of truth. The dashboard is a VIEW of it,
   never a second place to edit. If the two disagree, the tracker wins and the dashboard gets
   regenerated.
2. **Current state only — no history.** Every row is what is true NOW and what happens NEXT.
   History lives in git commits and project files. A dashboard that accumulates history becomes
   a journal nobody reads.
3. **It is only as good as its refresh.** Updating the dashboard is part of the end-of-session
   wrap: reconcile the tracker against reality, then regenerate and republish. A stale
   dashboard is worse than none, because it sends the user to re-do finished work.

**Build it ONLY from this user's own environment.** Their projects, their tracker, their words.
Nothing in this file implies any particular business, project names, or content — if an example
schema below uses placeholder names, they are placeholders, not content to copy.

---

## Step 1 — Interview (5 minutes, conversational)

Before building, ask the user (a few questions at a time, not a form):

1. Which projects or areas should be tabs? (Read their tracker/CLAUDE.md first and PROPOSE a
   tab list; let them edit. 4-8 tabs is the sweet spot.)
2. What is their ONE next step right now? (The Overview tab leads with a single highlighted
   next action — one, not a list. If they keep a queue, the queue collapses under it.)
3. Any dated deadlines or follow-up clocks to surface? (These become the Overview "Clocks"
   table, sorted by date.)
4. Anything that should NOT appear? (Sensitive projects can be excluded entirely.)

## Step 2 — Data files

Create a `dashboard/data/` folder in their working directory. One JSON file per tab. Two shapes:

**Overview tab** (`00_overview.json`):

```json
{
  "type": "overview",
  "order": 0,
  "tab": "Overview",
  "updated": "YYYY-MM-DD",
  "headline": "One sentence: the state of everything right now",
  "next": {
    "label": "YOUR NEXT STEP",
    "title": "The one thing to do next",
    "detail": "Why it matters and what done looks like.",
    "link": "https://... (optional)",
    "link_label": "Open it"
  },
  "queue": ["Then this", "Then this"],
  "clocks": [["Mon 9/1", "What happens or is due", "Who owns it"]],
  "watch": ["Anything being monitored that isn't an action yet"]
}
```

**Project tabs** (`01_projectname.json`, `02_...`):

```json
{
  "order": 1,
  "tab": "Project Name",
  "title": "Project Name - one-line description",
  "updated": "YYYY-MM-DD",
  "next": {
    "wade": [["Action the USER must take", "One line of context (optional)"]],
    "claude": [["Action the AI takes next", "Context (optional)"]]
  },
  "sections": [
    {
      "heading": "Section heading",
      "note": "Optional context line. Where the canonical tracker lives, ground rules, etc.",
      "columns": ["Item", "Status", "Next"],
      "rows": [
        ["The thing", "{live}Short status in plain words", "The next concrete action"]
      ]
    }
  ],
  "done": [["YYYY-MM-DD", "One-line receipt of something completed or shipped"]]
}
```

**The triage layout (standing design, part of the product):** every tab reads top-down as
(1) **moves first** - "YOUR MOVES" and "CLAUDE'S MOVES" cards side by side at the top, holding
only the actions waiting on a human or queued for the AI (the `next` key; the `"wade"` key
always means the user); (2) **working state in the middle** - the sections: things in motion
or waiting on the outside world; (3) **done collapses to the bottom** - the `done` list renders
as a collapsed "Done - last 7 days" line-per-item receipt; (4) **nothing completed lives on the
pane forever** - at build time, done entries older than 7 days move automatically to
`dashboard/archive.md`, off the pane, readable any time the user asks. Long-running stable
state that needs no action compresses into a note-only section (empty `columns`/`rows`) titled
something like "Running quietly." A pane that accumulates finished work stops being read; a
pane that leads with next moves gets read every day.

**Status chips** — start any cell with one of these tokens and it renders as a colored chip:
`{live}` (in motion), `{warm}` (a human responded, relationship warm), `{wade}` — **rename this
one**: in the builder script below, edit the CHIPS table so the key and label match YOUR user's
name (it means "waiting on the user"), `{them}` (waiting on someone else), `{gated}` (blocked
on a prerequisite), `{parked}` (deliberately later), `{closed}` (dead/rejected), `{done}`,
`{watch}`. Links: `[label](https://url)` inside any cell.

**Writing the rows is the craft.** Status in plain words a stranger could act on. Next step
concrete enough to start. No item numbering systems, no jargon from old sessions, no history
trails. If a row needs three sentences of backstory, the backstory belongs in the project file
and the row gets a pointer.

## Step 3 — The builder script

Save this verbatim as `tools/build_dashboard.py` (adjust the two paths at the top if the user's
layout differs — DATA is the folder from Step 2, OUT is where the HTML lands). It is
deterministic and costs zero tokens to run. Python 3, stdlib only.

Then edit the `CHIPS` entry `"wade"` to the user's own name/label as noted above, and the
masthead title in the HTML (`WADE OS / SINGLE PANE` — change to the user's own operation name;
it appears once in the `page = f"""` block).

```python
#!/usr/bin/env python3
"""Wade OS dashboard generator.

Reads 00_system/dashboard/data/*.json (curated current-state, updated at session
wrap) and emits a single self-contained tabbed HTML file at
00_system/dashboard/dashboard.html. Deterministic, zero tokens: run it any time.

    python3 00_system/tools/build_dashboard.py

Publish: Artifact tool on the output file (stable URL, see dashboard/README.md).

Cell syntax in data files:
  "{live}Clock running - sent 7/30"   -> status chip + text
  chips: live, warm, wade, them, gated, parked, closed, done, watch
  [label](https://url) -> link
"""
import json
import html
import re
import sys
from datetime import datetime, date, timedelta
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent  # 00_system/
DATA = ROOT / "dashboard" / "data"
OUT = ROOT / "dashboard" / "dashboard.html"
ARCHIVE = ROOT / "dashboard" / "archive.md"
DONE_WINDOW_DAYS = 7

CHIPS = {
    "live": ("Live", "c-live"),
    "warm": ("Warm", "c-warm"),
    "wade": ("Wade", "c-user"),
    "them": ("Their move", "c-them"),
    "gated": ("Gated", "c-gated"),
    "parked": ("Parked", "c-parked"),
    "closed": ("Closed", "c-closed"),
    "done": ("Done", "c-done"),
    "watch": ("Watch", "c-watch"),
}

CHIP_RE = re.compile(r"\{(%s)\}" % "|".join(CHIPS))
LINK_RE = re.compile(r"\[([^\]]+)\]\((https?://[^)\s]+)\)")
CHIP_TOKEN = "\x00CHIP%d\x00"


def cell(text):
    """Render a cell: {chip} tokens anywhere, markdown links, escaped text."""
    chips = []

    def stash(m):
        label, cls = CHIPS[m.group(1)]
        chips.append(f'<span class="chip {cls}">{label}</span>')
        return CHIP_TOKEN % (len(chips) - 1)

    text = CHIP_RE.sub(stash, text)
    out, pos = [], 0
    for lm in LINK_RE.finditer(text):
        out.append(html.escape(text[pos:lm.start()]))
        out.append(
            f'<a href="{html.escape(lm.group(2))}" target="_blank" rel="noopener">'
            f"{html.escape(lm.group(1))}</a>"
        )
        pos = lm.end()
    out.append(html.escape(text[pos:]))
    rendered = "".join(out)
    for i, chip_html in enumerate(chips):
        rendered = rendered.replace(CHIP_TOKEN % i, chip_html + " ")
    return rendered


def render_table(section):
    h = []
    if section.get("heading"):
        h.append(f'<h2>{html.escape(section["heading"])}</h2>')
    if section.get("note"):
        h.append(f'<p class="note">{cell(section["note"])}</p>')
    if not section.get("rows"):  # note-only section (e.g. a live-surfaces summary line)
        return "".join(h)
    h.append('<div class="tablewrap"><table><thead><tr>')
    for c in section["columns"]:
        h.append(f"<th>{html.escape(c)}</th>")
    h.append("</tr></thead><tbody>")
    for row in section["rows"]:
        h.append("<tr>")
        for i, v in enumerate(row):
            h.append(f'<td class="col{i}">{cell(str(v))}</td>')
        h.append("</tr>")
    h.append("</tbody></table></div>")
    return "".join(h)


def render_next(next_block):
    """Top-of-tab moves: Wade's first, Claude's second. Items are [action] or
    [action, context]."""
    def card(owner, cls, empty_msg):
        items = next_block.get(owner, [])
        h = [f'<div class="movecard {cls}">'
             f'<div class="movelabel">{"YOUR MOVES" if owner == "wade" else "CLAUDE&#x27;S MOVES"}</div>']
        if items:
            h.append('<ul class="movelist">')
            for it in items:
                action = it[0] if isinstance(it, list) else it
                ctx = it[1] if isinstance(it, list) and len(it) > 1 else ""
                h.append(f"<li>{cell(str(action))}")
                if ctx:
                    h.append(f'<span class="ctx">{cell(str(ctx))}</span>')
                h.append("</li>")
            h.append("</ul>")
        else:
            h.append(f'<p class="movenone">{empty_msg}</p>')
        h.append("</div>")
        return "".join(h)

    return ('<div class="nextwrap">'
            + card("wade", "wade", "Nothing waiting on you.")
            + card("claude", "claude", "Nothing queued.")
            + "</div>")


def render_done(done_rows):
    if not done_rows:
        return ""
    h = [f'<details class="donewrap"><summary>Done - last {DONE_WINDOW_DAYS} days '
         f"({len(done_rows)})</summary><ul>"]
    for d, summary in sorted(done_rows, reverse=True):
        h.append(f'<li><span class="donedate">{html.escape(d)}</span>{cell(summary)}</li>')
    h.append("</ul></details>")
    return "".join(h)


def roll_done_window(tabs, files):
    """Move done entries older than DONE_WINDOW_DAYS into archive.md and rewrite
    the data file. Completed items needing no follow-up leave the pane; the
    archive is readable on request, never rendered."""
    cutoff = (date.today() - timedelta(days=DONE_WINDOW_DAYS)).isoformat()
    archived_lines = []
    for t, f in zip(tabs, files):
        done = t.get("done")
        if not done:
            continue
        keep = [r for r in done if str(r[0]) >= cutoff]
        expire = [r for r in done if str(r[0]) < cutoff]
        if expire:
            for d, summary in sorted(expire):
                archived_lines.append(f"- {d} [{t.get('tab', f.stem)}] {summary}")
            t["done"] = keep
            f.write_text(json.dumps(t, indent=1) + "\n")
    if archived_lines:
        stamp = date.today().isoformat()
        block = f"\n## Archived {stamp}\n\n" + "\n".join(archived_lines) + "\n"
        if not ARCHIVE.exists():
            ARCHIVE.write_text(
                "# Single Pane archive\n\nCompleted items that rolled off the pane's "
                f"{DONE_WINDOW_DAYS}-day done window. Shown to Wade only on request.\n" + block
            )
        else:
            ARCHIVE.write_text(ARCHIVE.read_text() + block)
        print(f"Archived {len(archived_lines)} expired done item(s) to {ARCHIVE.name}")


def render_overview(d):
    h = ['<div class="ov">']
    h.append(f'<p class="headline">{cell(d["headline"])}</p>')
    n = d["next"]
    h.append('<div class="nextcard">')
    h.append(f'<div class="nextlabel">{html.escape(n["label"])}</div>')
    h.append(f'<div class="nexttitle">{html.escape(n["title"])}</div>')
    h.append(f'<p class="nextdetail">{cell(n["detail"])}</p>')
    if n.get("link"):
        h.append(
            f'<a class="nextbtn" href="{html.escape(n["link"])}" target="_blank" '
            f'rel="noopener">{html.escape(n.get("link_label", "Open"))}</a>'
        )
    h.append("</div>")
    q = d.get("queue", [])
    if q:
        h.append(
            f'<details class="queue"><summary>Then, one at a time '
            f"({len(q)} queued - in reading order, not all at once)</summary><ol>"
        )
        for item in q:
            h.append(f"<li>{cell(item)}</li>")
        h.append("</ol></details>")
    h.append("<h2>Clocks &amp; deadlines</h2>")
    h.append('<div class="tablewrap"><table><thead><tr>'
             "<th>When</th><th>What</th><th>Whose</th></tr></thead><tbody>")
    for when, what, who in d.get("clocks", []):
        h.append(
            f'<tr><td class="when">{html.escape(when)}</td>'
            f"<td>{cell(what)}</td><td>{html.escape(who)}</td></tr>"
        )
    h.append("</tbody></table></div>")
    w = d.get("watch", [])
    if w:
        h.append("<h2>On watch</h2><ul class='watchlist'>")
        for item in w:
            h.append(f"<li>{cell(item)}</li>")
        h.append("</ul>")
    h.append("</div>")
    return "".join(h)


def main():
    files = sorted(DATA.glob("*.json"))
    if not files:
        sys.exit(f"No data files in {DATA}")
    tabs = []
    for f in files:
        try:
            tabs.append(json.loads(f.read_text()))
        except json.JSONDecodeError as e:
            sys.exit(f"{f.name}: invalid JSON - {e}")
    roll_done_window(tabs, files)
    order = sorted(range(len(tabs)), key=lambda i: tabs[i].get("order", 99))
    tabs = [tabs[i] for i in order]
    built = datetime.now().strftime("%a %b %-d, %Y %-I:%M %p")
    latest = max(t.get("updated", "") for t in tabs)

    nav, panels = [], []
    for i, t in enumerate(tabs):
        name = t["tab"]
        nav.append(
            f'<button class="tabbtn" data-tab="{i}" role="tab" '
            f'aria-selected="{"true" if i == 0 else "false"}">{html.escape(name)}</button>'
        )
        if t.get("type") == "overview":
            body = render_overview(t)
        else:
            body = (
                (render_next(t["next"]) if t.get("next") is not None else "")
                + "".join(render_table(s) for s in t.get("sections", []))
                + render_done(t.get("done", []))
            )
        title = (
            f'<p class="tabtitle">{html.escape(t["title"])} '
            f'<span class="upd">data as of {html.escape(t.get("updated", ""))}</span></p>'
            if t.get("title")
            else ""
        )
        panels.append(f'<section class="panel" data-panel="{i}" role="tabpanel">{title}{body}</section>')

    page = f"""<title>Wade OS - Single Pane</title>
<style>
:root {{
  --ground:#F5F6FA; --panel:#FFFFFF; --ink:#232538; --sub:#5F6478;
  --line:#DFE3EE; --accent:#C4633F; --accent-ink:#FFFFFF;
  --live:#2F7D53; --warm:#B0631F; --userc:#7C4FA8; --gated:#A6841F;
  --parked:#7A7E8A; --closed:#B0453B; --done:#3A7D6C; --watchc:#4A6FA8;
  --chipbg:rgba(26,27,46,.05);
}}
@media (prefers-color-scheme: dark) {{ :root {{
  --ground:#14151F; --panel:#1A1B2E; --ink:#E9EAF2; --sub:#AABBCC;
  --line:#2C2E48; --accent:#E8896A; --accent-ink:#1A1B2E;
  --live:#5DBB87; --warm:#DA9A55; --userc:#C08FDD; --gated:#D2B04C;
  --parked:#9AA0A8; --closed:#E07B70; --done:#6FBFA9; --watchc:#8FB3E8;
  --chipbg:rgba(255,255,255,.07);
}} }}
:root[data-theme="dark"] {{
  --ground:#14151F; --panel:#1A1B2E; --ink:#E9EAF2; --sub:#AABBCC;
  --line:#2C2E48; --accent:#E8896A; --accent-ink:#1A1B2E;
  --live:#5DBB87; --warm:#DA9A55; --userc:#C08FDD; --gated:#D2B04C;
  --parked:#9AA0A8; --closed:#E07B70; --done:#6FBFA9; --watchc:#8FB3E8;
  --chipbg:rgba(255,255,255,.07);
}}
:root[data-theme="light"] {{
  --ground:#F5F6FA; --panel:#FFFFFF; --ink:#232538; --sub:#5F6478;
  --line:#DFE3EE; --accent:#C4633F; --accent-ink:#FFFFFF;
  --live:#2F7D53; --warm:#B0631F; --userc:#7C4FA8; --gated:#A6841F;
  --parked:#7A7E8A; --closed:#B0453B; --done:#3A7D6C; --watchc:#4A6FA8;
  --chipbg:rgba(26,27,46,.05);
}}
* {{ box-sizing:border-box; }}
body {{ background:var(--ground); color:var(--ink); margin:0;
  font:15px/1.5 -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif; }}
a {{ color:var(--accent); }}
.masthead {{ position:sticky; top:0; z-index:5; background:var(--ground);
  border-bottom:1px solid var(--line); padding:14px 20px 0; }}
.brand {{ display:flex; align-items:baseline; gap:12px; flex-wrap:wrap; }}
.brand h1 {{ font-size:15px; margin:0; letter-spacing:.14em; font-weight:700; }}
.brand h1 .thin {{ font-weight:400; color:var(--sub); }}
.brand h1 .dot {{ color:var(--accent); }}
.built {{ color:var(--sub); font-size:12px; }}
.tabs {{ display:flex; gap:2px; margin-top:10px; overflow-x:auto; }}
.tabbtn {{ appearance:none; border:1px solid transparent; border-bottom:none;
  background:transparent; color:var(--sub); font:inherit; font-size:13.5px;
  padding:8px 14px; cursor:pointer; border-radius:6px 6px 0 0; white-space:nowrap; }}
.tabbtn:hover {{ color:var(--ink); }}
.tabbtn[aria-selected="true"] {{ background:var(--panel); color:var(--ink);
  border-color:var(--line); font-weight:600; }}
.tabbtn:focus-visible {{ outline:2px solid var(--accent); outline-offset:-2px; }}
main {{ max-width:1120px; margin:0 auto; padding:20px; }}
.panel {{ display:none; }}
.panel.active {{ display:block; }}
.tabtitle {{ margin:0 0 14px; font-size:17px; font-weight:650; }}
.tabtitle .upd {{ color:var(--sub); font-size:12.5px; font-weight:400; margin-left:8px; }}
h2 {{ font-size:13px; letter-spacing:.09em; text-transform:uppercase;
  color:var(--sub); margin:26px 0 8px; }}
.note {{ color:var(--sub); font-size:13px; margin:0 0 10px; max-width:75ch; }}
.tablewrap {{ overflow-x:auto; background:var(--panel); border:1px solid var(--line);
  border-radius:8px; }}
table {{ border-collapse:collapse; width:100%; font-size:13.5px; }}
th {{ text-align:left; font-size:11.5px; letter-spacing:.07em; text-transform:uppercase;
  color:var(--sub); font-weight:600; padding:9px 12px; border-bottom:1px solid var(--line); }}
td {{ padding:10px 12px; border-bottom:1px solid var(--line); vertical-align:top;
  min-width:110px; max-width:420px; }}
tr:last-child td {{ border-bottom:none; }}
td.when, td.col0 {{ white-space:nowrap; font-weight:600;
  font-variant-numeric:tabular-nums; max-width:none; }}
.chip {{ display:inline-block; font-size:10.5px; font-weight:700; letter-spacing:.06em;
  text-transform:uppercase; padding:1px 7px 2px; border-radius:99px;
  background:var(--chipbg); white-space:nowrap; }}
.c-live {{ color:var(--live); box-shadow:inset 0 0 0 1px var(--live); }}
.c-warm {{ color:var(--warm); box-shadow:inset 0 0 0 1px var(--warm); }}
.c-user {{ color:var(--userc); box-shadow:inset 0 0 0 1px var(--userc); }}
.c-them {{ color:var(--watchc); box-shadow:inset 0 0 0 1px var(--watchc); }}
.c-gated {{ color:var(--gated); box-shadow:inset 0 0 0 1px var(--gated); }}
.c-parked {{ color:var(--parked); box-shadow:inset 0 0 0 1px var(--parked); }}
.c-closed {{ color:var(--closed); box-shadow:inset 0 0 0 1px var(--closed); }}
.c-done {{ color:var(--done); box-shadow:inset 0 0 0 1px var(--done); }}
.c-watch {{ color:var(--watchc); box-shadow:inset 0 0 0 1px var(--watchc); }}
.ov .headline {{ font-size:16px; font-weight:600; margin:0 0 16px; max-width:70ch; }}
.nextcard {{ background:var(--panel); border:1px solid var(--line);
  border-left:4px solid var(--accent); border-radius:8px; padding:16px 18px; }}
.nextlabel {{ font-size:11px; font-weight:700; letter-spacing:.12em; color:var(--accent); }}
.nexttitle {{ font-size:19px; font-weight:700; margin:6px 0 6px; text-wrap:balance; }}
.nextdetail {{ margin:0 0 12px; color:var(--sub); max-width:75ch; }}
.nextbtn {{ display:inline-block; background:var(--accent); color:var(--accent-ink);
  text-decoration:none; font-weight:600; font-size:13.5px; padding:7px 16px;
  border-radius:6px; }}
.queue {{ margin:14px 0 0; color:var(--sub); font-size:13.5px; }}
.queue summary {{ cursor:pointer; font-weight:600; }}
.queue ol {{ margin:8px 0 0; padding-left:22px; }}
.queue li {{ margin:4px 0; }}
.watchlist {{ margin:0; padding-left:20px; font-size:13.5px; }}
.watchlist li {{ margin:5px 0; max-width:80ch; }}
.nextwrap {{ display:grid; grid-template-columns:1fr 1fr; gap:12px; margin:0 0 8px; }}
@media (max-width:760px) {{ .nextwrap {{ grid-template-columns:1fr; }} }}
.movecard {{ background:var(--panel); border:1px solid var(--line); border-radius:8px;
  padding:12px 16px 14px; }}
.movecard.wade {{ border-left:4px solid var(--accent); }}
.movecard.claude {{ border-left:4px solid var(--watchc); }}
.movelabel {{ font-size:11px; font-weight:700; letter-spacing:.12em; }}
.movecard.wade .movelabel {{ color:var(--accent); }}
.movecard.claude .movelabel {{ color:var(--watchc); }}
.movelist {{ margin:8px 0 0; padding-left:18px; font-size:13.5px; }}
.movelist li {{ margin:6px 0; }}
.movelist .ctx {{ color:var(--sub); font-size:12.5px; display:block; font-weight:400; }}
.movenone {{ margin:8px 0 0; color:var(--sub); font-size:13px; }}
.donewrap {{ margin:24px 0 0; color:var(--sub); font-size:13px; }}
.donewrap summary {{ cursor:pointer; font-weight:600; }}
.donewrap ul {{ margin:8px 0 0; padding-left:20px; }}
.donewrap li {{ margin:4px 0; max-width:90ch; }}
.donedate {{ font-variant-numeric:tabular-nums; font-weight:600; margin-right:6px; }}
@media (max-width:640px) {{ td {{ min-width:90px; }} main {{ padding:14px; }} }}
</style>
<div class="masthead">
  <div class="brand"><h1>WADE OS<span class="dot">.</span> <span class="thin">SINGLE PANE</span></h1>
  <span class="built">data as of {html.escape(latest)} &middot; built {html.escape(built)} CT</span></div>
  <nav class="tabs" role="tablist">{"".join(nav)}</nav>
</div>
<main>{"".join(panels)}</main>
<script>
(function () {{
  var btns = document.querySelectorAll(".tabbtn");
  var panels = document.querySelectorAll(".panel");
  function show(i) {{
    btns.forEach(function (b) {{
      b.setAttribute("aria-selected", b.dataset.tab === String(i) ? "true" : "false");
    }});
    panels.forEach(function (p) {{
      p.classList.toggle("active", p.dataset.panel === String(i));
    }});
    try {{ localStorage.setItem("singlepane-tab", String(i)); }} catch (e) {{}}
  }}
  btns.forEach(function (b) {{
    b.addEventListener("click", function () {{ show(b.dataset.tab); }});
  }});
  var saved = 0;
  try {{ saved = parseInt(localStorage.getItem("singlepane-tab") || "0", 10) || 0; }} catch (e) {{}}
  if (saved >= panels.length) saved = 0;
  show(saved);
}})();
</script>
"""
    OUT.write_text(page)
    print(f"Built {OUT} ({len(tabs)} tabs, data as of {latest})")


if __name__ == "__main__":
    main()
```

Run it:

```bash
python3 tools/build_dashboard.py
```

## Step 4 — Serve it LIVE (this is the product, not an option)

**Standing rule: an aged pane kills trust. The pane must move by itself from the day it is
born, so build the live server, not a static page you remember to refresh.**

Create `tools/serve_dashboard.py`:

```python
#!/usr/bin/env python3
"""Live single-pane server.

Serves the dashboard at http://localhost:8787 and keeps it LIVE: it rebuilds
dashboard.html whenever any data/*.json changes, and the served page polls
/version every 3 seconds and reloads itself. Any session that edits a data
file updates the pane within seconds - no manual refresh step exists.
"""
import subprocess
import sys
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
DATA = ROOT / "dashboard" / "data"
OUT = ROOT / "dashboard" / "dashboard.html"
BUILD = ROOT / "tools" / "build_dashboard.py"
PORT = 8787

RELOAD_JS = """
<script>
(function () {
  let v = null;
  async function tick() {
    try {
      const r = await fetch('/version', {cache: 'no-store'});
      const t = await r.text();
      if (v === null) { v = t; }
      else if (t !== v) { location.reload(); }
    } catch (e) {}
  }
  setInterval(tick, 3000);
  tick();
})();
</script>
"""


def data_version():
    return "|".join(f"{p.name}:{p.stat().st_mtime_ns}" for p in sorted(DATA.glob("*.json")))


def rebuild_if_stale():
    out_mtime = OUT.stat().st_mtime_ns if OUT.exists() else 0
    newest = max((p.stat().st_mtime_ns for p in DATA.glob("*.json")), default=0)
    if newest > out_mtime:
        subprocess.run([sys.executable, str(BUILD)], check=True)


class Handler(BaseHTTPRequestHandler):
    def do_GET(self):
        if self.path.startswith("/version"):
            body = data_version().encode()
            self.send_response(200)
            self.send_header("Content-Type", "text/plain")
            self.send_header("Cache-Control", "no-store")
            self.send_header("Content-Length", str(len(body)))
            self.end_headers()
            self.wfile.write(body)
            return
        try:
            rebuild_if_stale()
            html_text = OUT.read_text()
        except Exception as e:
            html_text = f"<h1>Dashboard build error</h1><pre>{e}</pre>"
        body = (html_text + RELOAD_JS).encode()
        self.send_response(200)
        self.send_header("Content-Type", "text/html; charset=utf-8")
        self.send_header("Cache-Control", "no-store")
        self.send_header("Content-Length", str(len(body)))
        self.end_headers()
        self.wfile.write(body)

    def log_message(self, fmt, *args):
        pass


if __name__ == "__main__":
    server = ThreadingHTTPServer(("127.0.0.1", PORT), Handler)
    print(f"Single pane live at http://localhost:{PORT}")
    server.serve_forever()
```

The reload script is injected at serve time only, so `dashboard.html` on disk stays clean.
If the user runs Claude Code with a browser side panel, register the server in
`.claude/launch.json` (name it `single-pane`, port 8787) so "show me the pane" opens it
straight into the panel:

```json
{
  "name": "single-pane",
  "runtimeExecutable": "python3",
  "runtimeArgs": ["tools/serve_dashboard.py"],
  "port": 8787
}
```

**Snapshot copy (secondary, optional):** publish the generated HTML with the Artifact tool
for phone/tablet access away from the machine. Label it for what it is - a snapshot, refreshed
at session wraps - and record the stable URL in the README so future sessions republish to the
SAME url instead of minting a new one. The live localhost pane is the primary surface; the
artifact is never presented as the live view.

## Step 5 — Make it survive

1. Write a short `dashboard/README.md`: where the data lives, how to build, how to serve,
   the snapshot URL if one exists, and the refresh discipline.
2. **Add refresh-on-change to the user's CLAUDE.md standing behaviors:** whenever a session
   changes real state (something ships, closes, gets scheduled), it updates the data files in
   the same breath - not at wrap, not "later." The live server makes every edit visible within
   seconds; the discipline is what keeps the pane truthful.
3. Session wrap remains the backstop: reconcile the tracker against reality, sweep the data
   files for anything missed, and refresh the artifact snapshot if one exists.
4. First live test: change one status in a data file while the user watches the pane, and let
   them see it move on its own. That moment is the product.

## The all-times rule (added Aug 2026 - the pane's one non-negotiable)

The pane is up to date at ALL times, or the promise is broken. Two mechanics deliver it:
(1) your Claude updates the pane's data files IN THE SAME BREATH as the work - the moment
something ships, closes, or gets scheduled, never batched to session wrap-up; (2) the pane
page itself carries a 60-second self-refresh (one line: setTimeout(function(){location.reload()},
60000)) so any surface that does not hot-reload - a side panel, a phone - converges on current
within a minute. If your pane ever shows a finished item as your next step, tell your Claude
to adopt both mechanics as standing rules; they apply from every session after.

## The session-start rule (added Aug 2026 - core function, not polish)

At the START of every session, before anything else, put the pane on screen in the side
panel next to your working window: in Claude Code, send the pane's HTML file with the
SendUserFile tool using display "render". You open a session, your operating system is
already looking back at you, current. If your Claude does not do this unprompted, tell it
once to add the behavior to its standing rules - it applies from every session after.

## Guardrails (non-negotiable)

- Never invent a status. If you don't know the current state of something, say UNVERIFIED in
  the row and go check, or ask the user.
- The dashboard never becomes the place work is tracked. Tracker first, dashboard second,
  always in that order.
- If a row asserts something about a live surface (a published page, a sent message), verify
  against that surface before writing it.
- Sensitive items the user excluded stay excluded — do not helpfully re-add them.

**Done when:** the user opens one bookmarked link, sees every project as a tab, their single
next step on top, and says the statuses are true.
