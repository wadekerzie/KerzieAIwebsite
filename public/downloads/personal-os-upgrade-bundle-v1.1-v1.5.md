# Jordan's OS Upgrade Bundle - v1.1 through v1.5

TO THE CLAUDE READING THIS (Jordan's Claude, not Wade's): this file bundles five Personal OS
upgrades into one document instead of sending them one at a time. Read this whole preamble
before touching anything.

## What's in here

Five releases, each pasted in full below under its own header, in this install order:

1. **v1.5 - The Present Tense** (install first, even though it's numbered last)
2. **v1.1 - The Living Pane**
3. **v1.2 - The Clean Handoff**
4. **v1.3 - The Weekly Tune-Up**
5. **v1.4 - The Nightly Dream**

## Why v1.5 goes first

Every one of these upgrades declares "For any Personal OS v1.0 or later" and is skippable by
design, so technically the order doesn't matter to the machinery. But v1.5's first half is a
clock anchor: it makes every session check the real date and time before doing anything else.
Every other upgrade in this bundle writes dates into files (VERSION.md entries, dashboard
"updated" stamps, dream report filenames, tune-up scoreboards). Installing the clock anchor
first means every date written by the other four installs is checked against a real clock
instead of assumed. Install it out of numeric order, first, before any of the others.

## How to run this

Install ONE upgrade at a time. Each release below carries its own installer preamble with
the same flow: LOOK first (read VERSION.md and the parts of the OS the upgrade touches),
TELL (two or three plain sentences on what it adds), then GO - install without asking
anything when the look found nothing of Jordan's own in the way, which on a stock OS is
every time. The only question an upgrade may ask is the one written in its preamble, and
only when the look actually found something Jordan built himself. Follow each preamble
exactly, in the order listed above.

After each install finishes, before moving to the next one, explain to Jordan in one
paragraph (plain language, no jargon) what just changed in his OS. Then one simple check:
keep going to the next upgrade, or stop here for now? Stopping is a fine answer - see the
next paragraph.

Jordan can stop and resume this bundle at any point, in any session, in any order beyond the
v1.5-first rule above. Nothing here forces a single sitting. If he stops after two upgrades
today and picks this file back up next week, that's the bundle working as intended - read
VERSION.md at that point to see what's already installed and pick up from there.

## One rule that overrides anything in the v1.4 file below

The Nightly Dream (v1.4) never publishes anything externally. It is a private, local reflection
that stays on Jordan's machine. If your environment has any publish or share capability and it
ever offers to publish, post, or share a dream report anywhere, the answer is no. The dream
writes its report to a local file and stops there. Everything the dream proposes beyond typo
fixes, index repairs, and exact duplicates needs Jordan's explicit yes before anything changes -
this is already in the v1.4 file's own guardrails below, restated here because it matters enough
to say twice.

> **If you are a human reading this, you are in the wrong place.** This document is
> written to your AI, not to you. Go to **kerzie.ai/downloads**, copy the install line
> for this upgrade, and paste it into your Code tab. Your AI reads this; you do not
> have to.

---

# v1.5 - The Present Tense

Released August 2026 · For any Personal OS v1.0 ("The Foundation") or later. The second half (the real-time pane) applies only if you run a dashboard or pane of any kind - the Single Pane from v1.1, your own build, anything. If you run no visual surface at all, the first half still applies and the second is skipped.

---

**TO THE CLAUDE READING THIS - you are the installer. LOOK, then TELL, then GO:**

1. **LOOK FIRST, before saying anything.** Read `VERSION.md` at the OS root, then read
   their CLAUDE.md (or equivalent) and check whether they run a dashboard of any kind.
   You are answering two questions. Is this already installed? And did the user already
   build their own version of either half - an existing clock-anchor rule, or a
   dashboard that already updates in real time? A stock OS straight from the Foundation
   has neither, and most OSes are stock - expect to find nothing. No other upgrade is
   required first; upgrades are skippable by design.
2. **ALREADY INSTALLED?** If `VERSION.md` lists v1.5 or later, tell the user in one line
   that they already have this, and stop. (VERSION.md missing = a v1.0 Foundation OS.
   That is normal - proceed, and create it in step 5.)
3. **THE CLEAN PATH - nothing of theirs in the way (this is almost everyone).** Tell the
   user in two or three plain sentences what this adds: every session opens by checking
   the real date and time in their time zone so the OS never guesses what day it is,
   and if they run a dashboard, its data updates in the same breath as the work and the
   page reloads itself every 60 seconds - so the screen converges on the truth within a
   minute. Then install it, in the same message, without asking anything - the install
   line (or this bundle) was their yes. If they built their own dashboard, one standing
   rule while you work: do not screw up their existing dashboard - implement the
   refresh behaviors inside what they already have, and leave its look and layout
   alone. Close with one line: "If you ever want this back out, say 'remove The Present
   Tense' and I'll take it out cleanly." Do not mention conflicts, customizations, or
   options - when you found nothing in step 1, there is nothing for them to decide.
4. **THE ONE QUESTION - only if step 1 actually found their own version.** Name what you
   found, in their own words, and ask exactly one question with the safe answer built
   in: "You already have [their thing, described plainly]. Keep yours, or take this
   one? Keeping yours is a fine answer - I'll add only the half you are missing." Do
   what they say. Never ask this when step 1 found nothing.
5. **RECORD + PROVE.** Create or append to `VERSION.md` at the OS root:
   `v1.5 - The Present Tense - applied <today's date>`
   (If the file is new, first line: `v1.0 - The Foundation - original setup`.)
   Then prove both behaviors to the user: state the anchored date and time out loud,
   and if they run a pane, make one small real change and let them watch the pane
   catch up on its own within a minute. Removing this later means deleting what it
   added and noting the removal in VERSION.md.

---

# The Present Tense - Your OS Should Know What Day It Is

**To the person receiving this: save this file into the folder where you already run
Claude (the one with your CLAUDE.md and tracker in it), then tell Claude: "read
personal-os-v1.5-present-tense.md and walk me through it."**

---

## Why this exists (Claude, you are the installer - read carefully)

Both halves of this upgrade come from real failures, not theory.

The clock first. A language model does not actually know what time it is. It will
happily assume, and an assumed "today" is how a review packet goes out dated
"Wednesday the 6th" in a week where Wednesday is the 5th. That happened. The fix is
mechanical: check the real clock once at session start, then never assume again for
the rest of the session.

The pane second. A dashboard that gets updated "at the end" is a dashboard that lies
all day. The failure looks like this: an item gets finished at 10 AM, the user
glances at their pane at 2 PM, and it still shows the finished thing as the next
step - so the pane just sent them chasing work that is already done. A view of the
operation is only worth having if it is current. Two mechanics fix it together: the
data changes the moment reality changes, and the page refreshes itself so the user
never has to.

## Install, part one: the clock anchor (everyone)

Add to the user's CLAUDE.md standing behaviors (adapt the time zone to theirs):

```
## Clock anchor

At the start of every session, before anything else, check the actual current date
and time in my time zone (run a real clock command - do not assume). Treat the
result as the session's anchor: every "today," "tomorrow," date, and day-of-week
calculation for the rest of the session derives from that anchor. If a session runs
long, re-check before dating anything that will be seen by someone else.
```

## Install, part two: the real-time pane (only if they run a dashboard)

Two changes, and both are needed - either one alone still leaves a stale pane.

**1. Same-breath updates.** Add to CLAUDE.md standing behaviors:

```
## Real-time pane

The moment any state the pane shows changes - an item finishes, a status flips, a
next step changes - update the pane's data and rebuild it in the same breath as the
work, before moving on. Never batch pane updates to a wrap-up. The pane describes
now, not the plan for later.
```

**2. The self-reloading page.** Have Claude add an auto-refresh to the dashboard
page itself so it reloads every 60 seconds. How depends on their build - a meta
refresh tag or a one-line script in the page template both work. If a script or
tool generates their dashboard, bake it into the generator so every future build
carries it. The test: with the pane open, change one small real thing, touch
nothing in the browser, and watch the pane show it within a minute.

## Guardrails (non-negotiable)

- Never redesign the user's dashboard while installing this. Layout, tabs, colors,
  and structure are theirs. This upgrade changes when the pane updates, not what
  it looks like.
- The clock check is a real command against the real system clock, in the user's
  time zone. Reading a date off memory or conversation does not count.
- If the user has no dashboard, do not build one for this upgrade. Install the
  clock anchor and stop - the pane half waits until they have a pane.

**Done when:** the user can ask "what day is it?" in any session and get the real
answer without a lookup, and can glance at their open pane at any moment of the day
and trust that what it shows was true within the last minute.

---

# v1.1 - The Living Pane

Released August 2026 · For any Personal OS built from the original one-window setup (v1.0, "The Foundation")

---

**TO THE CLAUDE READING THIS - you are the builder. LOOK, then TELL, then GO:**

1. **LOOK FIRST, before saying anything.** Read `VERSION.md` at the OS root, and check
   whether this user already runs a dashboard or pane of any kind - their own build, a
   tasks app they render, anything that plays this role. You are answering two
   questions. Is this already installed? And do they already have their own pane? A
   stock OS straight from the Foundation has none, and most OSes are stock - expect to
   find nothing.
2. **ALREADY INSTALLED?** If `VERSION.md` lists v1.1 or later, tell the user in one line
   that they already have this, and stop. (VERSION.md missing = a v1.0 Foundation OS.
   That is normal - proceed, and create it in step 5.)
3. **THE CLEAN PATH - no pane of their own (this is almost everyone).** Tell the user in
   two or three plain sentences what this builds: a Single Pane - one live dashboard
   page with a tab per project, current status and next steps only - served locally so
   it updates itself within seconds whenever a status changes. It adds a `dashboard/`
   folder and a `tools/` folder, nothing else, and never touches their tracker, files,
   or content - the tracker stays canonical and the pane is a view of it. Then start the
   build, in the same message, without asking anything about whether to proceed - the
   install line (or this bundle) was their yes. The build begins with the short
   interview in Step 1 below; those questions are about THEIR projects and THEIR words,
   and they are part of the build, not a permission gate. Close the build with one
   line: "If you ever want this back out, say 'remove The Living Pane' and I'll take it
   out cleanly."
4. **THE ONE QUESTION - only if step 1 actually found a pane they already run.** Name
   it, in their own words, and ask exactly one question with the safe answer built in:
   "You already run [their dashboard, described plainly]. Keep it, or replace it with
   the Single Pane? Keeping yours is a fine answer - and if you keep it, the later pane
   upgrades can still be fitted into it." Do what they say. Never ask this when step 1
   found nothing.
5. **RECORD + PROVE.** Create or append to `VERSION.md` at the OS root:
   `v1.1 - The Living Pane - applied <today's date>`
   (If the file is new, first line: `v1.0 - The Foundation - original setup`.)
   Then show the user their pane running live and how to open it tomorrow. Removing
   this later means deleting the `dashboard/` and `tools/` folders it added and noting
   the removal in VERSION.md - the tracker is untouched either way.

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

1. Their first name, and what the pane should be called. (Check their CLAUDE.md first — if it
   already names them, confirm instead of asking. These become the `OWNER` and `OS_NAME`
   variables in Step 3, e.g. "Dana" → "DANA OS". The build must carry THEIR name everywhere;
   no example name from this file may survive into their pane.)
2. Which projects or areas should be tabs? (Read their tracker/CLAUDE.md first and PROPOSE a
   tab list; let them edit. 4-8 tabs is the sweet spot.)
3. What is their ONE next step right now? (The Overview tab leads with a single highlighted
   next action — one, not a list. If they keep a queue, the queue collapses under it.)
4. Any dated deadlines or follow-up clocks to surface? (These become the Overview "Clocks"
   table, sorted by date.)
5. Anything that should NOT appear? (Sensitive projects can be excluded entirely.)

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
    "user": [["Action the USER must take", "One line of context (optional)"]],
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
only the actions waiting on a human or queued for the AI (the `next` key; the `"user"` key
always means the human owner); (2) **working state in the middle** - the sections: things in motion
or waiting on the outside world; (3) **done collapses to the bottom** - the `done` list renders
as a collapsed "Done - last 7 days" line-per-item receipt; (4) **nothing completed lives on the
pane forever** - at build time, done entries older than 7 days move automatically to
`dashboard/archive.md`, off the pane, readable any time the user asks. Long-running stable
state that needs no action compresses into a note-only section (empty `columns`/`rows`) titled
something like "Running quietly." A pane that accumulates finished work stops being read; a
pane that leads with next moves gets read every day.

**Status chips** — start any cell with one of these tokens and it renders as a colored chip:
`{live}` (in motion), `{warm}` (a human responded, relationship warm), `{user}` (waiting on
the user — the chip renders with THEIR name, taken from the `OWNER` variable in the builder
script), `{them}` (waiting on someone else), `{gated}` (blocked on a prerequisite), `{parked}`
(deliberately later), `{closed}` (dead/rejected), `{done}`, `{watch}`.
Links: `[label](https://url)` inside any cell.

**Writing the rows is the craft.** Status in plain words a stranger could act on. Next step
concrete enough to start. No item numbering systems, no jargon from old sessions, no history
trails. If a row needs three sentences of backstory, the backstory belongs in the project file
and the row gets a pointer.

## Step 3 — The builder script

Save this verbatim as `tools/build_dashboard.py` (adjust the two paths at the top if the user's
layout differs — DATA is the folder from Step 2, OUT is where the HTML lands). It is
deterministic and costs zero tokens to run. Python 3, stdlib only.

Then set the two variables at the top — `OWNER` (the user's first name) and `OS_NAME` (their
operation's name), both from the Step 1 interview. **Those two assignments are the only
per-user edit in the file:** the page title, masthead, the user's status chip, and the archive
notes all render from them. Never hand-edit a name anywhere else in the script.

```python
#!/usr/bin/env python3
"""Single-pane dashboard generator.

Reads dashboard/data/*.json (curated current-state, updated the moment state
changes) and emits a single self-contained tabbed HTML file at
dashboard/dashboard.html. Deterministic, zero tokens: run it any time.

    python3 tools/build_dashboard.py

Publish: Artifact tool on the output file (stable URL, see dashboard/README.md).

Cell syntax in data files:
  "{live}Clock running - sent 7/30"   -> status chip + text
  chips: live, warm, user, them, gated, parked, closed, done, watch
  [label](https://url) -> link
"""
import json
import html
import re
import sys
from datetime import datetime, date, timedelta
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
DATA = ROOT / "dashboard" / "data"
OUT = ROOT / "dashboard" / "dashboard.html"
ARCHIVE = ROOT / "dashboard" / "archive.md"
DONE_WINDOW_DAYS = 7

# The ONLY per-user edits in this file - set both from the Step 1 interview.
OWNER = "User"     # the user's first name: their status chip + archive notes
OS_NAME = "MY OS"  # masthead brand and page title, e.g. "DANA OS"

CHIPS = {
    "live": ("Live", "c-live"),
    "warm": ("Warm", "c-warm"),
    "user": (OWNER, "c-user"),
    "them": ("Their move", "c-them"),
    "gated": ("Gated", "c-gated"),
    "parked": ("Parked", "c-parked"),
    "closed": ("Closed", "c-closed"),
    "done": ("Done", "c-done"),
    "watch": ("Watch", "c-watch"),
}
CHIPS["wade"] = CHIPS["user"]  # legacy alias: builds before 2026-08-09 used {wade}

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
    """Top-of-tab moves: the user's first, Claude's second. Items are [action]
    or [action, context]."""
    if "wade" in next_block:  # legacy key alias, same vintage as the chip alias
        next_block.setdefault("user", next_block.pop("wade"))

    def card(owner, cls, empty_msg):
        items = next_block.get(owner, [])
        h = [f'<div class="movecard {cls}">'
             f'<div class="movelabel">{"YOUR MOVES" if owner == "user" else "CLAUDE&#x27;S MOVES"}</div>']
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
            + card("user", "user", "Nothing waiting on you.")
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
                f"{DONE_WINDOW_DAYS}-day done window. Shown to {OWNER} only on request.\n" + block
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
    built = datetime.now().astimezone().strftime("%a %b %-d, %Y %-I:%M %p %Z")
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

    page = f"""<title>{html.escape(OS_NAME)} - Single Pane</title>
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
.movecard.user {{ border-left:4px solid var(--accent); }}
.movecard.claude {{ border-left:4px solid var(--watchc); }}
.movelabel {{ font-size:11px; font-weight:700; letter-spacing:.12em; }}
.movecard.user .movelabel {{ color:var(--accent); }}
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
  <div class="brand"><h1>{html.escape(OS_NAME)}<span class="dot">.</span> <span class="thin">SINGLE PANE</span></h1>
  <span class="built">data as of {html.escape(latest)} &middot; built {html.escape(built)}</span></div>
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

---

# v1.2 - The Clean Handoff

Released August 2026 · For any Personal OS v1.0 ("The Foundation") or later. Works with or without the Single Pane (v1.1) - it adapts to whatever dashboard you run, including none.

---

**TO THE CLAUDE READING THIS - you are the installer. LOOK, then TELL, then GO:**

1. **LOOK FIRST, before saying anything.** Read `VERSION.md` at the OS root, then read
   their CLAUDE.md (or equivalent standing-instructions file). You are answering two
   questions. Is this already installed? And did the user already build their own
   wrap-up - an end-of-session or wrap-up section in their manual that this upgrade did
   not put there? A stock OS straight from the Foundation has nothing like that, and
   most OSes are stock - expect to find nothing. v1.1 is NOT required; upgrades are
   skippable by design.
2. **ALREADY INSTALLED?** If `VERSION.md` lists v1.2 or later, tell the user in one line
   that they already have this, and stop. (VERSION.md missing = a v1.0 Foundation OS.
   That is normal - proceed, and create it in step 5.)
3. **THE CLEAN PATH - nothing of theirs in the way (this is almost everyone).** Tell the
   user in two or three plain sentences what this adds: a wrap-up ritual, so "let's wrap
   up" reconciles their tracker against reality, verifies anything that claims to be
   live, refreshes their dashboard if they have one, and leaves a short handoff so
   tomorrow starts warm. Then install it, in the same message, without asking anything -
   the install line (or this bundle) was their yes. Close with one line: "If you ever
   want this back out, say 'remove The Clean Handoff' and I'll take it out cleanly."
   Do not mention conflicts, customizations, or options - when you found nothing in
   step 1, there is nothing for them to decide.
4. **THE ONE QUESTION - only if step 1 actually found their own wrap-up.** Name what you
   found, in their own words, and ask exactly one question with the safe answer built
   in: "You already have [their wrap-up, described plainly]. Keep yours, or take this
   one? Keeping yours is a fine answer - I'll fit anything missing around it." Do what
   they say. Never ask this when step 1 found nothing.
5. **RECORD + PROVE.** Create or append to `VERSION.md` at the OS root:
   `v1.2 - The Clean Handoff - applied <today's date>`
   (If the file is new, first line: `v1.0 - The Foundation - original setup`.)
   Then walk the user through one real wrap-up so they see it work. Removing this later
   means deleting the section it added and noting the removal in VERSION.md.

---

# The Clean Handoff - Wrapping Up a Session Is Part of the Art Form

**To the person receiving this: save this file into the folder where you already run Claude
(the one with your CLAUDE.md and tracker in it), then tell Claude: "read
personal-os-v1.2-clean-handoff.md and walk me through it."**

---

## Why this exists (Claude, you are the installer - read carefully)

Every session ends one of two ways. It either leaves the operation exactly as described -
tracker true, dashboard current, next step named - or it leaves a mess the next session
pays for: stale statuses that send tomorrow's work chasing things already finished, and a
new session that starts slow because it has to re-derive where things stand.

The wrap-up is the fix, and it is a ritual, not a favor. The user says "let's wrap up"
and the same five moves happen every time, in order. The whole point of a tracker is to
be current. An item that says "waiting" or "unpushed" about something that is already
done is worse than no item at all.

One thing this upgrade deliberately does NOT do: it does not save the whole session to
memory. Telling your AI "write all of this to memory" means every future session pays to
re-read it. The handoff is a DISTILLED state, not a transcript - what is true now, what
happens next, and nothing else. History belongs in the project files and commit messages,
not in what loads at startup.

## Install: add this to the user's CLAUDE.md

Add a standing-behaviors section (adapt names to their setup - their tracker file, their
dashboard, their memory file):

```
## Session wrap ritual

When I say "let's wrap up" (or words to that effect), run this in order:

1. RECONCILE. For every project touched this session, rewrite the tracker item to
   describe what is now true - not what was planned. Close what finished. If a
   standing fact changed this session (a price, an offer, a cadence, a status),
   search my record files for the old value and fix every copy.
2. VERIFY LIVE SURFACES. Anything that claims to be published, sent, scheduled, or
   deployed gets checked against the real surface before the tracker says so.
   A push is not a deploy - poll the live page until the change is visible.
   If it did not land, that is the wrap-up finding, not a silent pass.
3. REFRESH THE VIEW. If I run a dashboard or pane, update its data for every area
   this session touched - current state and next steps only, never history.
4. DISTILL THE HANDOFF. Write or replace a short "NEXT SESSION STARTS HERE" block
   at the top of the tracker: where things stand in a few lines, the single next
   step, and any clocks or deadlines coming due. Small enough to read in thirty
   seconds. Never append the session's history to it - replace it.
5. REPORT. Give me the session's ledger in a few bullets: what shipped, what
   changed, what is waiting on me. Then stop.
```

If they use git for their OS folder, add committing to step 5. If they do not, skip it -
do not introduce git as part of this upgrade.

## The handoff block, by example

Bad (a journal - the next session drowns):

> Today we worked on the newsletter and had a long discussion about pricing, then we
> looked at the website copy and decided to revisit it, also the vendor call got
> rescheduled and we talked about maybe changing the intro paragraph...

Good (a state - the next session starts in seconds):

> NEXT SESSION STARTS HERE (set Aug 3)
> - Newsletter for Tue is SCHEDULED and verified on the platform's post list.
> - Pricing page: new price is LIVE and checked on the site. Old price swept from all files.
> - ONE NEXT STEP: review the two draft replies sitting in the email drafts folder.
> - Clock: vendor call moved to Thu 10am.

## Guardrails (non-negotiable)

- Never mark something done that was not verified done. "I pushed it" is not "it is live."
- Never close a loop only in a commit message or chat reply - the tracker is the record.
- The handoff block is REPLACED each wrap, never appended to. If it grows, it has failed.
- If the session touched nothing real, say so and skip the ceremony. An honest
  "nothing to reconcile" beats theater.

**Done when:** the user can end any session with two words, open a fresh session tomorrow,
and be working on the right thing inside a minute - with nothing re-done, and nothing lost.

---

# v1.3 - The Weekly Tune-Up

Released August 2026 · For any Personal OS v1.0 ("The Foundation") or later. v1.1 and v1.2 are NOT required - upgrades are skippable by design.

---

**TO THE CLAUDE READING THIS - you are the installer. LOOK, then TELL, then GO:**

1. **LOOK FIRST, before saying anything.** Read `VERSION.md` at the OS root, then look at
   how this OS schedules recurring work (scheduled tasks, standing commands in the
   manual). You are answering two questions. Is this already installed? And did the user
   already build their own version - an existing weekly maintenance, cleanup, or
   tune-up routine this upgrade did not put there? A stock OS straight from the
   Foundation has nothing like that, and most OSes are stock - expect to find nothing.
2. **ALREADY INSTALLED?** If `VERSION.md` lists v1.3 or later, tell the user in one line
   that they already have this, and stop. (VERSION.md missing = a v1.0 Foundation OS.
   That is normal - proceed, and create it in step 5.)
3. **THE CLEAN PATH - nothing of theirs in the way (this is almost everyone).** Tell the
   user in two or three plain sentences what this adds: once a week their OS measures
   what a brand-new session is forced to read before it can help, trims the bloat
   losslessly (always archiving, never deleting), and reports only the judgment calls -
   so the OS gets faster and cheaper every week instead of slower. Then install it, in
   the same message, without asking anything - the install line (or this bundle) was
   their yes. Close with one line: "If you ever want this back out, say 'remove The
   Weekly Tune-Up' and I'll take it out cleanly." Do not mention conflicts,
   customizations, or options - when you found nothing in step 1, there is nothing for
   them to decide.
4. **THE ONE QUESTION - only if step 1 actually found their own routine.** Name what you
   found, in their own words, and ask exactly one question with the safe answer built
   in: "You already run [their routine, described plainly]. Keep yours, or take this
   one? Keeping yours is a fine answer - I'll fold in anything it is missing." Do what
   they say. Never ask this when step 1 found nothing.
5. **RECORD + PROVE.** Create or append to `VERSION.md` at the OS root:
   `v1.3 - The Weekly Tune-Up - applied <today's date>`
   (If the file is new, first line: `v1.0 - The Foundation - original setup`.)
   Then run the first tune-up together, live, so the user sees what it catches. Removing
   this later means deleting the routine it added and noting the removal in VERSION.md.

---

# The Weekly Tune-Up - Your OS Should Get Faster Every Week, Not Slower

**To the person receiving this: save this file into the folder where you already run Claude
(the one with your CLAUDE.md and tracker in it), then tell Claude: "read
personal-os-v1.3-weekly-tune-up.md and walk me through it."**

---

## Why this exists (Claude, you are the installer - read carefully)

Every OS accumulates weight. Sessions add facts to memory, items to the tracker, and
standing notes to CLAUDE.md, and almost nothing ever gets taken back out. The cost is
invisible until it isn't: every new session starts by reading all of it, so startup gets
slower, token spend climbs, and the AI's attention goes to stale history instead of
today's work.

A real example of what this routine catches: one operator's weekly run found that three
complete essays were sitting in startup memory - every single session was re-reading all
three in full before doing anything. The tune-up compacted them to one-line summaries
with links to the published versions. Same information available, a fraction of the
startup cost. Nobody had decided to keep them there; they had just never been asked to
leave.

That is the pattern this routine exists for: a recursive self-improvement loop. Measure,
prune, verify nothing was lost, report, and run again next week with what it learned.

## Install: create the weekly routine

Set this up however the user schedules recurring work (a scheduled task if their setup
supports one, or a standing "run my tune-up" command they say once a week - ask which
they prefer). Sunday evening is a good default: the week's residue is fresh and nothing
is on fire. This is mechanical work - if the user's setup supports choosing a cheaper or
faster model for routine jobs, this one qualifies.

The routine, in order:

```
## Weekly tune-up

1. MEASURE. List every file a brand-new session must read before it can help
   (CLAUDE.md, memory files, the tracker, anything auto-loaded). Estimate the
   total reading cost. This number is the scoreboard - record it each week so
   the trend is visible.
2. HUNT THE BLOAT, in each startup file:
   - Facts that are no longer true (old prices, old statuses, finished projects).
   - Closed or dead items still sitting in the open list.
   - Full documents or long histories riding along where a one-line summary
     plus a link would do.
   - Duplicates: the same fact recorded in two places, free to drift apart.
3. COMPACT, LOSSLESSLY. Move history to an archive file, never the trash.
   Replace documents with summary-plus-link. Fix stale facts everywhere they
   appear, not just in one file. Nothing is deleted; everything remains
   findable.
4. VERIFY. Re-read what changed and confirm every compaction still points at
   the full version. A tune-up that loses information is worse than none.
5. REPORT JUDGMENT CALLS ONLY. Tell the user the new startup cost vs last week,
   what was compacted, and the handful of things that need a human decision
   (park this project? is this fact still true?). Never park, retire, or
   rewrite the user's standing rules on your own - flag, don't decide.
```

## Guardrails (non-negotiable)

- Lossless means lossless. Archive files exist so nothing ever has to be deleted to
  get lighter.
- The routine tunes the MACHINERY (startup cost, staleness, duplication). It never
  edits the user's principles, boundaries, or standing rules by itself - those are
  flagged for the user, decided by the user.
- If a fact looks stale, verify against the real surface before "fixing" it. A wrong
  correction is worse than the staleness.
- The report is a few bullets, not an essay. If nothing needed pruning, one line:
  "measured, clean, no change" - and that is a good week, not a failed run.

**Done when:** startup cost is measured weekly and trending flat or down while the
operation grows - the OS is learning to carry more business with less weight.

---

# v1.4 - The Nightly Dream

Released August 2026 · For any Personal OS v1.0 ("The Foundation") or later. v1.1 through v1.3 are NOT required - upgrades are skippable by design. Pairs well with v1.3 (The Weekly Tune-Up) but does not need it.

---

**TO THE CLAUDE READING THIS - you are the installer. LOOK, then TELL, then GO:**

1. **LOOK FIRST, before saying anything.** Read `VERSION.md` at the OS root, then look at
   how this OS schedules recurring work. You are answering two questions. Is this
   already installed? And did the user already build their own version - an existing
   nightly or reflection routine that re-reads the day, which this upgrade did not put
   there? A stock OS straight from the Foundation has nothing like that, and most OSes
   are stock - expect to find nothing.
2. **ALREADY INSTALLED?** If `VERSION.md` lists v1.4 or later, tell the user in one line
   that they already have this, and stop. (VERSION.md missing = a v1.0 Foundation OS.
   That is normal - proceed, and create it in step 5.)
3. **THE CLEAN PATH - nothing of theirs in the way (this is almost everyone).** Tell the
   user in two or three plain sentences what this adds: while they sleep, their OS
   re-reads the day's conversations across every session, compares what was said and
   decided against what the OS has written down, and files a short morning report of
   proposed corrections with the evidence quoted. It fixes only trivial things on its
   own (typos, broken index lines, exact duplicates); everything that matters waits for
   their yes. It reads their own local session transcripts - conversation text only,
   never raw tool output - and never touches their standing rules, tracker items,
   content, or anything private. Then install it, in the same message, without asking
   anything - the install line (or this bundle) was their yes. Close with one line: "If
   you ever want this back out, say 'remove The Nightly Dream' and I'll take it out
   cleanly." Do not mention conflicts, customizations, or options - when you found
   nothing in step 1, there is nothing for them to decide.
4. **THE ONE QUESTION - only if step 1 actually found their own routine.** Name what you
   found, in their own words, and ask exactly one question with the safe answer built
   in: "You already run [their routine, described plainly]. Keep yours, or take this
   one? Keeping yours is a fine answer." Do what they say. Never ask this when step 1
   found nothing.
5. **RECORD + PROVE.** Create or append to `VERSION.md` at the OS root:
   `v1.4 - The Nightly Dream - applied <today's date>`
   (If the file is new, first line: `v1.0 - The Foundation - original setup`.)
   Then run one dream pass together, live, so the user sees what it catches on day one -
   the live run also settles the permission approvals the schedule will need (see the
   gotchas below). Removing this later means deleting the routine and noting the
   removal in VERSION.md.

---

# The Nightly Dream - Your OS Should Learn While You Sleep

**To the person receiving this: save this file into the folder where you already run Claude
(the one with your CLAUDE.md and tracker in it), then tell Claude: "read
personal-os-v1.4-nightly-dream.md and walk me through it."**

---

## Why this exists (Claude, you are the installer - read carefully)

Andrej Karpathy pointed at the gap: a person builds up a day of context, then sleep
distills it into lasting memory. AI sessions do not get that. Every session starts from
zero, writes its notes in a hurry while doing other work, and never looks back at what
the OTHER sessions of the day learned. Three failure modes follow:

- **Split focus.** A session updating memory mid-task is a chef writing the recipe book
  during dinner service. The notes are rushed and partial.
- **Patterns nobody can see.** Each session sees only its own conversation. The same
  friction hitting three different sessions in one day is invisible to all three.
- **Stale facts with confidence.** A real example from the operator who wrote this
  upgrade: a price changed, the tracker got updated, and two other record files kept the
  old number for four days - every session that read them repeated a price that was no
  longer true. Nothing in the system could catch it, because no session ever re-read the
  day with fresh eyes.

The dream is the fresh eyes. One pass, every night, whose ONLY job is reconciliation.

## Install: create the nightly routine

Set this up however the user schedules recurring work: a scheduled task at ~3am if their
setup supports one, otherwise a standing "run my dream" command they say each morning
before work starts. This is careful-but-mechanical work - if the user's setup supports
choosing a mid-tier model for routine jobs, this one qualifies; it should not run on
their most expensive model.

**Two gotchas learned the hard way - handle both during install, not after:**

- Claude Code stores session transcripts locally at `~/.claude/projects/<one folder per
  project>/*.jsonl`. Verify the path exists on THIS machine before wiring the routine
  to it, and read conversation text only (the user and assistant messages), never the
  raw tool results - tool output can contain credentials, and credentials must never be
  quoted into a report.
- A scheduled run cannot click permission pop-ups. If the first run stalls waiting for
  an approval, the routine silently dies every night after. Run the dream once live with
  the user present, approve what it asks with "always allow," and only then trust the
  schedule.

The routine, in order:

```
## Nightly dream

1. GATHER. Find every session transcript from the last ~25 hours, across all
   projects. Extract the conversation text only. Skip automated boilerplate.
   Also pull the day's commit log if the OS lives in git.
2. RECONCILE against the standing record (memory files, CLAUDE.md facts, the
   tracker's open list), hunting five things:
   - Corrections: the user said or decided something today that contradicts
     what is written down.
   - New facts worth keeping: preferences repeated, rules stated out loud,
     durable facts about people or projects not yet recorded.
   - Stale entries: things recorded as pending or in-draft that the day's
     work shows are done and live.
   - Duplicates: the same fact in two places, free to drift apart.
   - Cross-session patterns: the same friction in two or more sessions today,
     which deserves a fix, not a note.
3. REPORT. Write dream_reports/dream_<date>.md: a three-line summary on top
   (sessions read, proposals found, the single most important one), then
   numbered proposals - each with the exact change, the file it touches, and
   a short quote from the transcript as evidence. Tag each one either
   [AUTO-APPLIED] or [NEEDS YOU].
4. AUTO-APPLY, strictly limited to: typo fixes in memory files, repairing the
   memory index (pointer lines missing or broken), and merging exact
   duplicates. NOTHING else - a proposal you are only confident about is
   still a proposal.
5. HAND OFF. The next morning session reads the latest dream report FIRST and
   walks the user through the [NEEDS YOU] items, one at a time. A dream
   nobody reads is just disk usage.
```

## Guardrails (non-negotiable)

- The dream proposes; the user disposes. It never edits CLAUDE.md, standing rules,
  tracker items, or the user's principles on its own - not even when it is sure.
- Evidence or it did not happen. Every proposal quotes the transcript line that
  justifies it. No quote, no proposal.
- Never quote anything that looks like a password, key, or token. If the evidence for
  a proposal is sensitive, describe it instead of quoting it.
- A quiet night is a valid finding. "Read 6 sessions, nothing to reconcile" is two
  lines and a good report, not a failed run.
- If a fact looks wrong, verify against the real surface before proposing the fix.
  A wrong correction with a confident quote attached is the worst output this
  routine can produce.

**Done when:** the user starts their morning by reading what their OS learned overnight,
approves or rejects in under two minutes, and stale facts stop surviving longer than one
day - the OS remembers the day better than any single session could.

---

# Closing: VERSION.md for Jordan's OS

TO THE CLAUDE READING THIS: after each upgrade above is installed (on Jordan's yes, one at a
time), keep `VERSION.md` at Jordan's OS root current. If VERSION.md does not exist yet, create
it with a first line recording the original setup, then add one line per upgrade as it goes in.

Baseline entry (create if missing):

```
v1.0 - The Foundation - original setup
```

Then, as each upgrade installs, append one line with today's real date (checked against the
clock, once v1.5 is in) in this form:

```
v1.5 - The Present Tense - applied <date>
v1.1 - The Living Pane - applied <date>
v1.2 - The Clean Handoff - applied <date>
v1.3 - The Weekly Tune-Up - applied <date>
v1.4 - The Nightly Dream - applied <date>
```

Once all five are in, the top of VERSION.md should read v1.5 as Jordan's installed baseline
for the numbered stream (the highest version number he has, even though it went in first),
with the other four upgrades logged as separate lines underneath since each is a distinct
capability, not a linear replacement of the last. Every future upgrade file checks this same
VERSION.md before applying, so keeping it current is what lets Jordan skip straight to
whatever comes next without re-explaining what he already has.
