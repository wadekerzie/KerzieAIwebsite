# Personal OS Upgrade v1.5 - "The Present Tense"

Released August 2026 · For any Personal OS v1.0 ("The Foundation") or later. The second half (the real-time pane) applies only if you run a dashboard or pane of any kind - the Single Pane from v1.1, your own build, anything. If you run no visual surface at all, the first half still applies and the second is skipped.

---

**TO THE CLAUDE READING THIS - DO NOT APPLY YET. Follow this order:**

1. **DESCRIBE FIRST.** Before touching anything, tell your user in plain language what
   this upgrade does: it installs two behaviors that keep the OS operating in the
   present tense. First, a clock anchor - every session opens by checking the real
   date and time in the user's own time zone, and every "today," "tomorrow," and
   day-of-week calculation for the rest of the session derives from that check, never
   from assumption. Second, a real-time pane - if the user runs a dashboard, its data
   gets updated in the same breath as the work that changes it, never batched to the
   end of a session, and the pane page reloads itself every 60 seconds so what is on
   screen converges on what is true within a minute. Tell them what it touches (their
   CLAUDE.md standing behaviors, and their dashboard build if they have one) and what
   it never touches: their content, their data, their customizations, their dashboard's
   look and layout.
2. **ASK.** Then ask directly: "Apply as-is, change something first, or skip it?"
   Wait for the answer. Modifications are welcome - adapt the steps. If they decline,
   stop entirely.
3. **CHECK STATE.** Read `VERSION.md` at the OS root. This upgrade expects v1.0 or
   later. If VERSION.md is missing, this is a v1.0 Foundation OS and you are clear to
   proceed (you will create VERSION.md in step 5). If it already lists v1.5 or later,
   tell the user they already have this and stop. No other upgrade is required first -
   upgrades are skippable by design.
4. **APPLY** on their yes, following the instructions below and preserving every
   customization you find. If the user built their own dashboard, the standing
   instruction is: do not screw up their existing dashboard - take the enhancements
   and the structure of this and implement them inside what they already have.
5. **RECORD + REPORT.** Create or append to `VERSION.md` at the OS root:
   `v1.5 - The Present Tense - applied <today's date>`
   (If the file is new, first line: `v1.0 - The Foundation - original setup`.)
   Then prove both behaviors to the user: state the anchored date and time out loud,
   and if they run a pane, make one small real change and let them watch the pane
   catch up on its own within a minute.

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
