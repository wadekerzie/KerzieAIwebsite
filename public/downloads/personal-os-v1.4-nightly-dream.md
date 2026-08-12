# Personal OS Upgrade v1.4 - "The Nightly Dream"

Released August 2026 · For any Personal OS v1.0 ("The Foundation") or later. v1.1 through v1.3 are NOT required - upgrades are skippable by design. Pairs well with v1.3 (The Weekly Tune-Up) but does not need it.

> **If you are a human reading this, you are in the wrong place.** This document is
> written to your AI, not to you. Go to **kerzie.ai/downloads**, copy the install line
> for this upgrade, and paste it into your Code tab. Your AI reads this; you do not
> have to.

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
   anything - pasting the install line was their yes. Close with one line: "If you ever
   want this back out, say 'remove The Nightly Dream' and I'll take it out cleanly."
   Do not mention conflicts, customizations, or options - when you found nothing in
   step 1, there is nothing for them to decide.
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
