# Personal OS Upgrade v1.3 - "The Weekly Tune-Up"

Released August 2026 · For any Personal OS v1.0 ("The Foundation") or later. v1.1 and v1.2 are NOT required - upgrades are skippable by design.

---

**TO THE CLAUDE READING THIS - DO NOT APPLY YET. Follow this order:**

1. **DESCRIBE FIRST.** Before touching anything, tell your user in plain language what
   this upgrade does: it installs a weekly self-optimization routine. Once a week, their
   OS measures what a brand-new session is forced to read before it can help, finds the
   bloat (stale facts, finished work still listed as open, whole documents riding along
   in startup memory), compacts it losslessly, and reports only the judgment calls. The
   OS gets faster and cheaper every week instead of slower and more expensive. Tell them
   what it touches (their startup files: memory, tracker, CLAUDE.md standing-behavior
   text - always archiving, never deleting) and what it never touches: their content,
   their project files, their data, their customizations.
2. **ASK.** Then ask directly: "Apply as-is, change something first, or skip it?"
   Wait for the answer. Modifications are welcome - adapt the steps. If they decline,
   stop entirely.
3. **CHECK STATE.** Read `VERSION.md` at the OS root. This upgrade expects v1.0 or later.
   If VERSION.md is missing, this is a v1.0 Foundation OS and you are clear to proceed
   (you will create VERSION.md in step 5). If it already lists v1.3 or later, tell the
   user they already have this and stop.
4. **APPLY** on their yes, following the instructions below and preserving every
   customization you find.
5. **RECORD + REPORT.** Create or append to `VERSION.md` at the OS root:
   `v1.3 - The Weekly Tune-Up - applied <today's date>`
   (If the file is new, first line: `v1.0 - The Foundation - original setup`.)
   Then run the first tune-up together, live, so the user sees what it catches.

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
