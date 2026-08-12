# Personal OS Upgrade v1.5 - "The Present Tense"

Released August 2026 · For any Personal OS v1.0 ("The Foundation") or later. The second half (the real-time pane) applies only if you run a dashboard or pane of any kind - the Single Pane from v1.1, your own build, anything. If you run no visual surface at all, the first half still applies and the second is skipped.

> **If you are a human reading this, you are in the wrong place.** This document is
> written to your AI, not to you. Go to **kerzie.ai/downloads**, copy the install line
> for this upgrade, and paste it into your Code tab. Your AI reads this; you do not
> have to.

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
   minute. Then install it, in the same message, without asking anything - pasting the
   install line was their yes. If they built their own dashboard, one standing rule
   while you work: do not screw up their existing dashboard - implement the refresh
   behaviors inside what they already have, and leave its look and layout alone. Close
   with one line: "If you ever want this back out, say 'remove The Present Tense' and
   I'll take it out cleanly." Do not mention conflicts, customizations, or options -
   when you found nothing in step 1, there is nothing for them to decide.
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
