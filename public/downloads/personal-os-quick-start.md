# Personal OS Upgrade - "The Quick Start"

Released August 2026 · For any Personal OS built from the original one-window setup ("The Foundation") or later. Nothing else is required, and no other upgrade is assumed. **This upgrade replaces the earlier release called "The Present Tense" - if you already have that one, see the note in step 3 below; you are not getting anything twice.**

> **If you are a human reading this, you are in the wrong place.** This document is
> written to your AI, not to you. Go to **kerzie.ai/downloads**, copy the install line
> for this upgrade, and paste it into your Code tab. Your AI reads this; you do not
> have to.

---

**TO THE CLAUDE READING THIS - DO NOT APPLY YET. Follow this order:**

1. **DESCRIBE FIRST.** Before touching anything, tell your user in plain language what this
   upgrade does: right now, when they open a new session, you spend the first minute or two
   reading their operating manual and getting oriented before you say anything useful - so
   they sit there watching you work before they can even give you an instruction. This
   upgrade flips that order. You check the real date and time, say hello in one line, ask
   what they are working on, and do ALL of your orientation AFTER their answer, while you are
   already working on the thing they asked for. Tell them what it touches (one section in
   their operating manual, nothing else) and what it never touches: their data, their files,
   their customizations.
2. **ASK.** Then ask directly: "Apply as-is, change something first, or skip it?" Wait for the
   answer. Modifications are welcome - adapt the steps. If they decline, stop entirely.
3. **CHECK STATE.** Read `VERSION.md` at the OS root. This upgrade needs only the baseline
   ("The Foundation") - if VERSION.md is missing entirely, that is fine, infer the baseline
   and create VERSION.md in step 5. **If VERSION.md lists "The Present Tense" (v1.5):** they
   already have the clock anchor from that release. Apply this upgrade anyway - it supersedes
   it - but tell them plainly that the clock-anchor half is already in their manual, so you
   are replacing that section rather than adding a duplicate, and the new part they are
   getting is the opener. If VERSION.md already lists The Quick Start, tell them and stop.
4. **ASK THEM ABOUT SESSION NAMES BEFORE YOU APPLY.** See "The one question to ask" below.
   This upgrade is not complete without their answer, and the answer is theirs to make.
5. **APPLY** on their yes: add the section below to their operating manual (CLAUDE.md or
   equivalent), with their naming convention filled in, preserving every customization you
   find. If a "clock anchor" section already exists from The Present Tense, replace it rather
   than stacking a second one.
6. **RECORD + REPORT.** Append to `VERSION.md`: `The Quick Start - applied <today's date>`.
   Then tell them the honest thing: they will not see this work until their NEXT session,
   because it changes how a session opens. Tell them what tomorrow will look like in one
   sentence so they recognize it when it happens.

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

## The one question to ask before applying

**Sessions in the sidebar get auto-named by the app, usually after whatever was said first,
and those names are useless a week later when your user is trying to find a conversation.**
A date-based name fixes that: "Monday, August 10th" is findable; "Helping with a CSV" is not.

But that is a preference, not a law, so ask:

> "How do you want your sessions named in the sidebar? Some people use the date - 'Monday,
> August 10th' - so past conversations are easy to find. Others prefer the project or client
> they were working on. Or we can skip this entirely. What fits how you look for things?"

Record their answer in the block below. If they want no convention at all, say so in the
block and drop the naming clause from the greeting.

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

("Good afternoon" / "Good evening" by the clock. My naming convention is: [FILL IN - e.g.
day of week + full date; or the project name; or NONE, drop this line entirely].)

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
