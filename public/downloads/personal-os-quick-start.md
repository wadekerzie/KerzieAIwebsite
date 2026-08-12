# Personal OS Upgrade - "The Quick Start"

Released August 2026 · For any Personal OS built from the original one-window setup ("The Foundation") or later. Nothing else is required, and no other upgrade is assumed. **This upgrade replaces the earlier release called "The Present Tense" - if you already have that one, see the note in step 3 below; you are not getting anything twice.**

> **If you are a human reading this, you are in the wrong place.** This document is
> written to your AI, not to you. Go to **kerzie.ai/downloads**, copy the install line
> for this upgrade, and paste it into your Code tab. Your AI reads this; you do not
> have to.

---

**TO THE CLAUDE READING THIS - you are the installer. LOOK, then TELL, then GO:**

1. **LOOK FIRST, before saying anything.** Read `VERSION.md` at the OS root, then read
   their operating manual (CLAUDE.md or equivalent). You are answering two questions.
   Is this already installed? And did the user already write their own rule about how a
   session opens? Two specific things to check: **if VERSION.md lists "The Present
   Tense" (v1.5)**, they already have the clock anchor from that release - this upgrade
   supersedes it, so you will replace that section rather than stack a duplicate, and
   the new part they are getting is the opener. And any session-opening or greeting
   rule they wrote themselves counts as their own version. A stock OS straight from the
   Foundation has neither, and most OSes are stock - expect to find nothing.
2. **ALREADY INSTALLED?** If `VERSION.md` lists The Quick Start, tell the user in one
   line that they already have this, and stop. (VERSION.md missing = the baseline
   Foundation. That is normal - proceed, and create it in step 5.)
3. **THE CLEAN PATH - nothing of theirs in the way (this is almost everyone).** Tell the
   user in two or three plain sentences what this changes: right now a new session
   spends its first minute or two reading their files before it says anything useful,
   and they sit there waiting; after this, every session checks the real date, says
   hello in one line, asks what they are working on, and does ALL of its orientation
   after their answer, while it is already working. Then install it, in the same
   message, without asking anything - pasting the install line was their yes. Fill in
   the session-naming convention with the default (day of week plus full date - see
   "The naming default" below) and mention it in one line: "Sessions will offer a date
   name like 'Monday, August 10th' so old conversations are easy to find - if you would
   rather name them by project, or skip naming, just say so and I'll change it." That
   is an offer, not a question to wait on. Close with one line: "If you ever want this
   back out, say 'remove The Quick Start' and I'll take it out cleanly."
4. **THE ONE QUESTION - only if step 1 actually found their own opening rule.** Name
   what you found, in their own words, and ask exactly one question with the safe
   answer built in: "You already have [their rule, described plainly]. Keep yours, or
   take this one? Keeping yours is a fine answer." Do what they say. Never ask this
   when step 1 found nothing. (The Present Tense clock anchor is NOT their own rule -
   it is ours; replace it silently per step 1 and tell them what you did.)
5. **RECORD + REPORT.** Append to `VERSION.md`: `The Quick Start - applied <today's
   date>`. Then tell them the honest thing: they will not see this work until their
   NEXT session, because it changes how a session opens. Tell them what tomorrow will
   look like in one sentence so they recognize it when it happens. Removing this later
   means deleting the section it added (and restoring a plain clock anchor if they had
   The Present Tense) and noting the removal in VERSION.md.

---

# The Quick Start - Stop Making Your User Wait For Hello

**To the person receiving this: save this file into the folder where you already run Claude
(the one with your CLAUDE.md and tracker in it), then tell Claude: "read
personal-os-quick-start.md and walk me through it."**

---

## Why this exists

A personal OS gets good by accumulating context - an operating manual, a tracker, memory
files, a record of what happened yesterday. That is the whole point of it, and it is also
the reason a fresh session feels slow. The AI opens, dutifully reads all of it, and only
then turns around and asks what you need. Meanwhile you have been sitting there.

The operator this system was built for put it plainly:

> "When you go away for two or three minutes to do all your startup, it doesn't feel like
> I'm waiting. Right now I have to start the session and wait two minutes before I give you
> an initial command."

The fix is not to read less. The context is what makes the thing useful. The fix is to
**change the order**: say hello first, take the instruction, and do the reading while you are
already working on what they asked for. The setup still happens. It just stops happening
on their clock.

## The two behaviors this installs

### 1. The clock anchor

Every session opens by checking the real current date and time in your user's own time zone,
before anything else. Every "today," "tomorrow," "this week," and day-of-week calculation
for the rest of that session derives from that check - never from assumption, never from
what the model believes the date to be.

This is not pedantry. An AI that guesses the date will confidently put a Wednesday label on a
Tuesday, schedule something for a day that already passed, or tell your user a deadline is
next week when it is tomorrow. One command at the top of the session removes that entire
class of error permanently.

### 2. The quick start opener

After the clock check and before ANY other setup, greet your user and hand them the floor.
One short line. Then stop and wait.

Everything else - reading the operating manual, checking yesterday's handoff, syncing the
repository, reviewing the tracker, refreshing the pane - is **parked until after their first
instruction**. Then it runs, either as part of the work they asked for or quietly alongside it.

The greeting says, in this order:

1. Good morning / afternoon / evening, by the clock you just checked.
2. A short promise that you will get oriented in a moment. Not a status report.
3. The question: what are we working on?
4. The session's name, by their convention, plus a light reminder that renaming the thread in
   the sidebar is theirs to do (see the next section).

Their reply will be one of three things, and all three work:

- **A task.** Start it. Do your setup lazily, as the work touches things.
- **A pointer to yesterday** ("check where we left off"). Now run the full setup and report.
- **Something you need context for.** Read exactly what that one thing needs, not everything.

## The naming default (install it, do not quiz them)

**Sessions in the sidebar get auto-named by the app, usually after whatever was said first,
and those names are useless a week later when your user is trying to find a conversation.**
A date-based name fixes that: "Monday, August 10th" is findable; "Helping with a CSV" is not.

So the convention installs with a default: **day of week plus full date**. Do not ask the
user to choose a naming scheme during the install - a person new to this has no basis to
pick, and the date default serves almost everyone. Instead, tell them in one line what they
are getting and that it is theirs to change: by project, by client, or no naming at all -
one sentence to you, any time, and you update the block. If they volunteer a preference on
the spot, use it.

**Your AI cannot rename the thread itself.** The sidebar title is set by the app, not by the
assistant inside the conversation, and it will refuse if it tries. So the greeting simply
offers the name and the user renames it in the sidebar if they care to - two seconds, once,
whenever they feel like it. Nothing is broken if they never do.

## The block to add to the operating manual

Add this to the user's CLAUDE.md (or equivalent), filling in their naming convention:

```
## The quick start (how every session opens)

FIRST, before anything else: check the real current date and time in my time zone. Every
"today," "tomorrow," and day-of-week calculation for the rest of this session derives from
that check, never from assumption.

THEN, immediately, send exactly one short message and stop:

  "Good morning, [name]. I'll get oriented in a minute - what are we working on today?"
  "This session: [SESSION NAME BY MY CONVENTION]. Rename the thread in the sidebar if you
   want it to stick."

("Good afternoon" / "Good evening" by the clock. My naming convention is: [day of week +
full date, e.g. "Monday, August 10th" - the default; replace this if I pick a different
scheme, or drop the naming line entirely if I say to skip naming].)

Nothing else goes in that first message. No status report, no summary of yesterday, no
narration of what you are about to read.

EVERY setup step is PARKED until after my first instruction: reading this manual in full,
the tracker, memory files, yesterday's handoff, repository sync, the pane. Run them after I
answer - as the work I gave you needs them, or quietly alongside it.

My reply will be one of three things and all three are fine: a task (start it, set up lazily
as you go), a pointer to yesterday (now run the full setup and report), or a question (read
only what that question needs).

You cannot rename the sidebar thread yourself - the app owns that title. Offer the name; I
will rename it if I care to.

Scheduled and background runs are exempt: nobody is waiting on those, so they run their full
task instructions as written.
```

## What good looks like

**Fast:** the time between your user opening a session and being able to give an instruction
should be a few seconds - one date check and one line of text. If they are watching you read
files before they have said anything, the upgrade is not installed correctly.

**Honest:** the greeting promises orientation "in a minute" and then actually delivers it.
Parked is not skipped. The setup still happens, in full, on the other side of their answer.

**Quiet:** one short message. The temptation is to be helpful by summarizing yesterday in the
opener - resist it. They did not ask yet, and a paragraph they have to read before they can
type is the exact problem this upgrade exists to remove.

**Theirs:** the naming convention is a preference you asked about, not a standard you
imposed. If they want their sessions named after clients, name them after clients. If they
want nothing, drop the line. It is their operating system.
