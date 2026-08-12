# Personal OS Upgrade v1.7 - "The Scan"

Released August 2026 · For any Personal OS running the Single Pane (v1.1 "The Living Pane" or later). If you do not have the pane yet, install v1.1 first - this upgrade is a change to how the pane is KEPT TRUE, and there is nothing to keep true without it. v1.2 through v1.6 are not required; upgrades are skippable by design.

> **If you are a human reading this, you are in the wrong place.** This document is
> written to your AI, not to you. Go to **kerzie.ai/downloads**, copy the install line
> for this upgrade, and paste it into your Code tab. Your AI reads this; you do not
> have to.

---

**TO THE CLAUDE READING THIS - you are the installer. LOOK, then TELL, then GO:**

1. **LOOK FIRST, before saying anything.** Read `VERSION.md` at the OS root, confirm a
   pane exists, and read their operating manual (CLAUDE.md or equivalent). You are
   answering three questions. Is this already installed? Is there a pane at all? And did
   the user already write their own version - a standing rule about reconciling the pane
   when work lands, which this upgrade did not put there? A stock OS has nothing like
   that - expect to find nothing.
2. **ALREADY INSTALLED, OR NO PANE?** If `VERSION.md` lists v1.7 or later, tell the user
   in one line that they already have this, and stop. If there is no pane at all, stop
   and point the user at v1.1 (The Living Pane) instead - this upgrade changes how a
   pane is kept true, and there is nothing to keep true without one. (VERSION.md missing
   but a pane exists = infer v1.1 and proceed; create VERSION.md in step 5.)
3. **THE CLEAN PATH - nothing of theirs in the way (this is almost everyone).** Tell the
   user in two or three plain sentences what this adds: today their pane only updates
   when a session remembers to write to it; after this, every time a piece of work
   lands, their AI scans the pane the way THEY read it and reconciles every row the work
   touched - clear it, update it, or add what is new. One section added to their
   operating manual, nothing else. Then install it, in the same message, without asking
   anything - pasting the install line was their yes. Close with one line: "If you ever
   want this back out, say 'remove The Scan' and I'll take it out cleanly." Do not
   mention conflicts, customizations, or options - when you found nothing in step 1,
   there is nothing for them to decide.
4. **THE ONE QUESTION - only if step 1 actually found their own rule.** Name what you
   found, in their own words, and ask exactly one question with the safe answer built
   in: "You already have [their rule, described plainly]. Keep yours, or take this one?
   Keeping yours is a fine answer." Do what they say. Never ask this when step 1 found
   nothing.
5. **RECORD + PROVE.** Append to `VERSION.md`: `v1.7 - The Scan - applied <today's date>`.
   Then prove it works: take the last piece of work you finished together, run the scan
   on it live, and show the user which rows it cleared, changed, or created. Removing
   this later means deleting the section it added and noting the removal in VERSION.md.

---

# The Scan - Your Board Should Never Show Finished Work As Waiting

**To the person receiving this: save this file into the folder where you already run Claude
(the one with your CLAUDE.md and tracker in it), then tell Claude: "read
personal-os-v1.7-the-scan.md and walk me through it."**

---

## Why this exists

The pane earns its place by being trustworthy. The moment it shows something as waiting on
you that you already did, you stop believing the rest of it - and a board you do not believe
is worse than no board, because now you are double-checking a thing that exists to stop you
double-checking.

Here is how the operator this system was built for described the motion, sitting in front of
his own pane:

> "I'm sitting here looking at the tabs. I see something waiting on me. We work together, it
> gets done - you should quickly scan the pane for that completed action. It might be one
> thing, or it might be 2-3 things impacted. You clear, update, or modify, or even add a new
> item. That's how it should work."

Two real failures, same week, that this motion prevents:

- A "post this" job was staged by the AI and finished by the operator himself - he clicked
  Post with his own hands. No session saw him do it, so the pane spent TWO DAYS telling him
  the thing he had already done was still waiting on him. He had to point at it.
- A session then went to fix that stale row, found three related schedule rows, corrected all
  three - and still missed the one bullet the operator was actually staring at, because it
  lived in a different part of the data file. Fixing the first match is not the scan.

## The motion (this is the whole upgrade)

Whenever a piece of work LANDS - a task finishes, a send goes out, a decision gets made, or
your user tells you they did something themselves - before moving on:

1. **Ask: which tabs did this touch?** Usually one. Sometimes two or three. A sale can touch
   a revenue tab, a project tab, and the to-do list at once.
2. **Read each impacted tab's data the way your user reads the rendered page** - every place
   a row can live. Panes typically have section tables AND a "your moves" / "next actions"
   list; the moves list is the one the user acts from, and it is the one sessions forget.
3. **Reconcile every impacted row:** CLEAR what is now done. UPDATE what changed. ADD what
   the work just created (a new commitment, a new follow-up, a new thing waiting on someone).
4. **The user's own hands count as work landing.** If they say "I sent it," "I posted it,"
   "I already did that" - that clears rows right then, in the same breath. Never make them
   say it twice.

That is the entire upgrade. It is a habit installed into your rules, not a script.

## The block to add to the operating manual

Add this to the user's CLAUDE.md (or equivalent), adapting the file path to their pane:

```
## The scan (pane reconciliation - every time work lands)

My pane is my to-do list in real time. Whenever work lands - ours or mine alone - scan the
pane for that completed action before moving on. It might touch one row or 2-3 across tabs.
Read the impacted tab's data files the way I read the rendered tabs: section rows AND the
your-moves list (they live in different places in the data - check both). Then clear what is
done, update what changed, add what is new. If I tell you I did something myself, that is
work landing: clear its rows in the same breath, never at wrap-up, and never make me repeat
it. A row that shows finished work as waiting is worse than no row - it teaches me to
distrust the board.
```

## What good looks like

Fast: the scan is a few hundred tokens - one small data file read, two or three rows edited.
Cheap insurance. The expensive version is the one you are preventing: a stale row that
survives to tomorrow's session gets re-investigated, re-verified, sometimes re-done.

Accurate: the test is simple. When your user sits down and looks at the pane, is there
anything on it they already did? If yes, the scan missed. Their trust in the board is the
product.

Simple: no new tools, no new files, no schedule. One habit, run in the same breath as the
work, every time.
