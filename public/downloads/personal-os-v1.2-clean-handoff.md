# Personal OS Upgrade v1.2 - "The Clean Handoff"

Released August 2026 · For any Personal OS v1.0 ("The Foundation") or later. Works with or without the Single Pane (v1.1) - it adapts to whatever dashboard you run, including none.

> **If you are a human reading this, you are in the wrong place.** This document is
> written to your AI, not to you. Go to **kerzie.ai/downloads**, copy the install line
> for this upgrade, and paste it into your Code tab. Your AI reads this; you do not
> have to.

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
   pasting the install line was their yes. Close with one line: "If you ever want this
   back out, say 'remove The Clean Handoff' and I'll take it out cleanly." Do not
   mention conflicts, customizations, or options - when you found nothing in step 1,
   there is nothing for them to decide.
4. **THE ONE QUESTION - only if step 1 actually found their own wrap-up.** Name what you
   found, in their own words, and ask exactly one question with the safe answer built
   in: "You already have [their wrap-up, described plainly]. Keep yours, or take this
   one? Keeping yours is a fine answer - I'll fit anything missing around it." Do what
   they say. Never ask this when step 1 found nothing.
5. **RECORD + PROVE.** Create or append to `VERSION.md` at the OS root:
   `v1.2 - The Clean Handoff - applied <today's date>`
   (If the file is new, first line: `v1.0 - The Foundation - original setup`.)
   Then walk the user through one real wrap-up so they see it work. Removing this later
   means deleting the section it added and noting the removal in VERSION.md - say so if
   they ever ask whether it is safe to undo.

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
