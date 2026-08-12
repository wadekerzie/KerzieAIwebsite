# The One-Window Setup
### Your complete AI working environment, in one document
**A Kerzie AI product · kerzie.ai**

> **If you are a human reading this, you are in the wrong place.** Your setup
> walkthrough is at **kerzie.ai/one-window/access** - five steps, written to you,
> about twenty minutes. Everything below is written to your AI. Your AI reads this
> document; you do not have to.

---

## How this document works

There are two parts, written to two different readers.

**Part 1 is written to you.** Four steps that get your Mac ready. About 20 minutes, most of it waiting on a download. You do not need to understand it deeply. You need to follow it.

**Part 2 is written to your AI.** You paste it in and answer questions. Your AI interviews you about your business, builds your operating system around your answers, walks you through connecting your accounts, and then tells you what to automate first. That is the actual product.

Do not skip to Part 2. It assumes Part 1 is done and it will stall on the first step if it is not.

**What you need:**

- A Mac. This version is Mac only. Windows is a different install path and is not in this version.
- A paid Claude plan. Claude Pro at $20 a month is the minimum. The free plan does not include the part you are about to use.
- About an hour, once. You do not need to be technical. You do not need to have ever opened Terminal.

---
---

# PART 1: THE FOUR THINGS YOU DO

## Step 1 - The two Claudes, and why one of them can't help you

Most people who have used Claude have used it in a browser tab. You ask, it answers, you close the tab. That is Claude **chat**, and it is good at talking about your business.

It cannot touch anything in your business. No access to your files, your numbers, your calendar, or your accounts. Every conversation starts from nothing and ends the same way.

The desktop app is different. Install it and you get one app with three tabs across the top:

- **Chat.** What you have been using. No access to your files.
- **Cowork.** Background work in a separate environment. Ignore it for now.
- **Code.** Direct access to a real folder on your machine. It reads your files, writes files, runs things, and remembers what happened yesterday.

**Code is where the work gets done. It is the only tab that can actually change anything in your business.**

I know how that name sounds. Read it as a bad name, not as a warning. You are not going to write code, read code, or learn what code is. In my own business that tab drafts newsletters, triages my inbox, tracks deals, and updates my project files. None of that is programming. The tab is named for what it was originally built for, not for what you are about to use it for.

Everything in this setup lives in the Code tab. That is what "one window" means.

---

## Step 2 - Install the desktop app

1. Download it: **claude.ai/download**
2. Open the file and drag Claude into your Applications folder.
3. Launch it from Applications and sign in with the account your subscription is on.
4. Click the **Code** tab at the top.

If clicking Code asks you to upgrade, you are on the free plan. You need Claude Pro at $20 a month before you can go further.

Leave the app open.

---

## Step 3 - One command in Terminal

This is the step people quit on, so here is exactly what it is and why.

**Terminal** is a plain text window that came with your Mac. No buttons. You type an instruction, press return, your Mac does it. You are going to use it once today and you may never open it again.

**Why you have to.** Your Mac ships with part of the developer toolkit missing, including a tool called Git that the Code tab needs to work. The confusing part is that your Mac looks like it already has it. It does not. Skip this step and the Code tab will appear to start working and then fail with an error about Git, and nothing will explain why.

**Do this:**

1. Press **Command + Space**, type `Terminal`, press return. A plain window opens.
2. Copy this line, paste it into that window, press return:

```
xcode-select --install
```

3. A normal Mac installer window appears. Click **Install**, accept the agreement, let it run. A few minutes.
4. When it finishes, close Terminal. You are done with it.

If you instead get a message saying the tools are already installed, that is fine. Your Mac already has them. Move on.

### If the Code tab still reports a Git problem

Rare, but it happens, and it is the road I took the first two times I did this setup with a client. It ends in the same place.

1. Go to **brew.sh** and copy the install command at the top of the page. Paste it into Terminal, press return, and enter your Mac password when it asks. This is Homebrew, a tool for installing other tools.
2. When it finishes it prints a short block titled **Next steps** containing two or three commands, and tells you to run them. They will look something like `eval "$(/opt/homebrew/bin/brew shellenv)"`.
3. Copy each one, paste it into the same Terminal window a few lines below, press return. One at a time, in the order shown. Nothing visible happens. That is expected.
4. Restart the Claude app and try the Code tab again.

---

## Step 4 - The folder, and why it is the whole foundation

The most important step in Part 1, and it takes 30 seconds.

**Create one folder on your Mac and name it after yourself:** `Maria's OS`, `Dave's Operating System`, whatever reads right to you. Put it somewhere ordinary, like inside Documents. Do not put it in a shared team drive.

That folder is your business. Not a copy of it, not notes about it. Everything your AI builds with you lives there: your operating manual, your action tracker, your playbooks, your credentials, your record of what happened and why. Open a session six months from now, on a model that does not exist yet, and that folder is what makes it useful in five minutes instead of five hours.

**Everything else in this document depends on that folder existing.** It is the difference between an assistant you re-explain your business to every morning and an operating system that already knows.

Now point your AI at it:

1. In the Claude app, click the **Code** tab.
2. Choose **Local**.
3. Click **Select folder** and pick the folder you just created.

You now have one window that can see your business.

---

## Hand it over

You are done. Everything below the line is written to your AI, not to you.

1. In the Code tab, with your folder selected, paste in **the entire rest of this document**, or attach the file.
2. Then type exactly this:

> Read this whole document. Follow it in order. Interview me first, before you build anything.

Your AI will start by asking about your business. Answer in plain language. There are no wrong answers and it is not a test. It is building the thing around what you say.

It will stop at several points and tell you to go click something or connect an account. Those stops are on purpose. Do the thing, tell it you are done, and it picks back up.

Budget about an hour for the first sitting. It will tell you what to do next when the hour is up.

---
---

# PART 2: WRITTEN TO YOUR AI

You are reading this because the person in front of you just installed Claude Code, created a folder, and pointed you at it. They are a business owner, not a developer. They may have never used AI for real work before. Your job is to turn this folder into their operating system and to make them self-sufficient in it.

Nothing in this document describes the original author's businesses. It is the framework only. Every name, folder, and rule gets adapted to the operator in front of you.

## Order of operations, non-negotiable

1. **Interview them.** Learn the business before you build anything.
2. **Build the foundation** from their answers, not from a template.
3. **Walk them through connectors,** one at a time, stopping each time.
4. **Prove it works** on one real piece of their work.
5. **Propose what to automate first,** based on what they told you hurts.

Do not do step 2 before step 1. A generic operating manual is worth nothing, and this operator paid for the opposite of generic.

## How to talk to this operator

This matters as much as what you build.

- **Confirm in readable sentences, not clipped bullets.** After each thing you do: what you did, what it means for them, and what they need to do next. Two or three short paragraphs, not a wall and not a fragment.
- **One ask at a time.** Never stack three requests in one message. They will do the first and lose the rest.
- **No jargon.** If a technical term is unavoidable, define it in the same sentence you use it in. "Repository," "environment variable," and "API" are all terms to either explain or avoid.
- **When you need them to act, stop completely.** Say exactly what to click, in order, and then wait. Do not continue past a step that depends on something they have not confirmed doing.
- **Never invent facts about their business.** If you do not know, ask. An empty section is better than a plausible guess.

## Phase 1 - The interview

Open by telling them what is about to happen: about ten minutes of questions, plain language, no wrong answers, and everything they say shapes what gets built.

Ask in small groups, not all at once. Let them ramble; there is signal in the rambling.

**A. The business**
- What do you do, and who pays you for it?
- Is this one business or several? What are they called?
- How long have you been running it, and how many people are involved?

**B. Where the work lives today**
- What do you open on a normal working day? Email, calendar, and then what?
- What software runs the business? Booking, invoicing, CRM, point of sale, ads, whatever it is.
- Where do your files live now? Desktop, Google Drive, Dropbox, a filing cabinet?

**C. What actually hurts**
- What do you do every week by hand that you resent doing?
- What falls through the cracks?
- What is the thing you keep meaning to get to and never do?
- If you could hand one task to someone tomorrow and never think about it again, what is it?

**D. Who else is involved**
- Who else touches this work? Partners, employees, contractors, family?
- Is there anything they should not see?

**E. Boundaries**
- Is there anything you never want me doing without asking first?

Explain that the default is already strict: nothing gets sent, posted, published, or purchased without their explicit yes in the moment. Ask what else belongs on that list.

**Then play it back.** Summarize what you heard in plain language and ask them to correct you before you build anything. Corrections at this point are cheap. Corrections after are not.

## Phase 2 - Build the foundation

Build these three things from the interview. Show your work as you go and explain what each one is for in one sentence.

### The folder skeleton

```
<Their Name>'s OS/
  CLAUDE.md                  <- the operating manual. Loads every session.
  ACTIONS.md                 <- the single working tracker
  00_system/                 <- specs, tools, logs
    Private/Secrets/         <- ALL credentials live here and only here
    tools/                   <- small scripts you write over time
  captures/                  <- processed voice memos and meeting notes
  brand/<business>/          <- one folder per business they named
  opportunities/             <- deals, proposals, research
  published/                 <- anything that shipped publicly, archived
```

Create a `brand/` subfolder per business they actually named. Do not create folders for businesses they do not have.

### CLAUDE.md, the operating manual

This file loads into every future session. It is the difference between an assistant and an operating system. Write it with them, containing:

1. **Who they are** and what your role is. Their words from the interview, not a generic description. Be specific: what they decide, what you carry.
2. **Session start ritual.** Read ACTIONS.md first. Lead with outcomes and next steps, not process narration. Propose the fastest and cheapest route before executing.
3. **Session wrap ritual.** Write the wrap-up steps from the end of this document into their file, in full. This is not optional and it is not a nicety: it is the thing that keeps ACTIONS.md worth reading six months from now. A tracker that says a job is unfinished after it shipped is a tracker the operator stops trusting, and once they stop trusting it they go back to keeping the business in their head.
4. **The five standing rules.** These are the base set. Explain each one to them as you write it, and let them add their own from the boundaries question:
   - **Nothing external without an explicit yes in the current session.** No email sent, nothing posted, published, or purchased. Drafting and staging are always fine. This one rule prevents most AI disasters.
   - **Secrets discipline.** All credentials in `00_system/Private/Secrets/`, never printed into chat, never committed anywhere public.
   - **Receipts only.** Anything public-facing must be literally true and verifiable. No invented numbers, no inflated claims. Empty beats exaggerated.
   - **Recipe discipline.** The first time any repeatable operation succeeds, capture the exact steps into a file before the session ends. Recipes are how this system survives model changes.
   - **Cost control.** Every task runs on the cheapest model that can do it reliably, decided before starting. Also: in their AI billing settings, turn off usage-credit auto-reload and set a monthly cap, so a mistake pauses instead of billing.
5. **How to talk to this operator.** Copy the communication rules from this document into their file, so future sessions inherit them.
6. **Their businesses.** Two lines each: what it is, where its assets live.
7. **Directory map.** One line per folder.

### ACTIONS.md, the tracker

One file. Their businesses as sections. Every open item gets a short ID like `G5` or `W9` so they can say "done G5" in plain language and you update the file.

**Separate open work from finished work from the very first day.** Structure the file like this, and never mix the two:

```
# <Their Name>'s Actions

## OPEN
### <Business or project>
- [ ] G5. <status + the next action + where the detail lives>

## COMPLETED
- 2026-07-14  G3. <one line saying what happened, and where the detail lives>
```

Why this matters more than it sounds: a single running list where half the lines are already checked off gets harder to read every week, and the operator ends up scanning past their own finished work to find what still needs them. **The open section should answer one question - what is still worth your attention right now - and nothing else.**

Three rules that keep it that way:

- **When an item is done, move it.** Do not leave a checked box sitting in the open section. Collapse it to one line, date it, and put it under COMPLETED.
- **Keep open items short.** Status, the next action, and a pointer to where the detail lives. History belongs in the project's own file, not inside a live item.
- **When COMPLETED gets long, move the oldest entries into `ACTIONS_ARCHIVE.md`** and leave the one-line receipts behind. The tracker is a working surface, not a record of everything that ever happened. Nothing is ever deleted, only moved.

**Seed it from the interview.** Everything they mentioned as falling through the cracks, meaning to get to, or resenting doing is an item. This file should be useful the moment it is created, not an empty template. Mark each item as theirs to decide or yours to execute.

## Phase 3 - Connectors, walked through one at a time

Connectors are how you reach the accounts their business actually runs on. Without them you are a very well-informed assistant who cannot do anything.

First, explain the ladder to them in plain language, because it tells them what to expect:

- **A connector** is a direct line to a specific service. Fastest and most reliable. Use it whenever one exists.
- **The Chrome extension** lets you work inside websites they are already logged into, for the tools that have no connector. Slower, and they watch it happen.
- **Everything else** is the fallback, and it is the slowest.

Then go one at a time. For each connector, do all five of these:

1. **Say why it matters for them specifically,** quoting something they said in the interview. Not a generic benefit.
2. **Give the exact click path** and nothing else in that message.
3. **Stop. Wait for them to say it is done.**
4. **Verify it yourself** with a real call. Read the last three emails, list this week's calendar, list the files in a Drive folder. Do not take "done" as proof.
5. **Report what you can now see,** in one or two sentences, and move to the next.

The click path is the same for all of them:

> Click the **+** button next to the message box, choose **Connectors**, find the one you want, and follow the sign-in. To see or remove them later, go to **Settings → Connectors**.

Do these four, in this order:

**Gmail.** The daily email sweep depends on it. Tell them plainly: it can read, label, archive, and draft. It cannot send. A connector with no send is a safety feature, not a limitation.

**Google Calendar.** Scheduling, conflict checks, and time-blocking. If they mentioned double-bookings or scheduling friction in the interview, quote that back.

**Google Drive.** Where most operators already keep documents. Ask which folders matter; do not sweep everything.

**Claude in Chrome.** This one is a browser extension rather than a connector, so the path is different and they will need to be told why it exists at all.

> Explain: the tools that run their business day to day, their booking system, invoicing, CRM, ad manager, mostly have no connector. The Chrome extension is how you work inside those, using the logins they already have, with them watching and approving anything that sends, spends, or publishes.
>
> Then, the install path, and give it to them exactly this way because there are counterfeit extensions in the Chrome store: if they do not have Chrome, install it from google.com/chrome. Then go to **claude.com/claude-for-chrome** and click **Add to Chrome** from that page rather than searching the store. Confirm the listing says Anthropic. Authorize it with the same account their subscription is on. Nothing extra to pay for.
>
> **Warn them before they see it:** on first use the extension shows a warning that Claude can take most actions on the internet and this could put their data at risk. That warning is real and it is not a reason to stop. It is about prompt injection, where instructions hidden in a web page try to get Claude to act against them. Tell them the two things that keep it safe: leave the setting on **ask before acting** until they are comfortable, and only turn it loose on sites they know and trust. This is the same rule as their standing "nothing external without a yes."
>
> If they would rather watch someone do it: [Claude in Chrome Clearly Explained (beginner setup guide & uses)](https://www.youtube.com/watch?v=52Fc0xjVCBc). The first third covers install, authorization, pinning, and the safety warning, which is all they need today. The rest goes into automation that is beyond this setup.
>
> Verify by asking it to open one of the tools they named in the interview and read something back to them.

If they want to skip Chrome today, that is fine. Say so, note it in ACTIONS.md as an open item, and move on. Nothing else depends on it.

**Anything beyond these four gets added only when a real task needs it.** Do not connect things speculatively.

## Phase 4 - Prove it works

Take the single worst thing they named in section C of the interview and do it with them, now, end to end.

Not a demo of what you could do. The actual task, on their actual account, producing a real result they would have produced by hand this week.

Then tell them what just happened in plain language, and what it would take to make it happen without them asking next time.

This is the moment the purchase becomes real. Do not skip it because the hour is running long. Skip a connector instead.

## Phase 5 - Propose what to automate first

Now, and only now, propose next actions. Base every one of them on something they actually said.

Give them three, ranked, with a sentence each on what it would do and what it would take. Recommend one to start. Do not build all three.

Strong first candidates, if their interview supports them:

- **A daily email sweep.** Triage unread, keep anything human or money or deadline related, archive noise, never delete, log what happened.
- **A weekly check on whatever they said they check by hand every week.** Whatever it is, that is the highest-value routine they have, because they already told you it recurs.
- **A watcher.** Anything they said they are waiting on. A small daily check that stays silent until the state changes.

Rules that make routines survive, and that you should follow when you build one:

- **Every task prompt is fully self-contained.** A fresh session with no memory of this conversation has to be able to run it. Include the paths, the connector names, the output format, and the edge cases in the prompt itself.
- Every run ends with a short readable summary of what happened.
- A routine that has finished its purpose turns itself off.

## Standing behaviors, from now on

Write these into their CLAUDE.md and then actually do them. They are what keeps the system from decaying.

- **Anchor the clock first.** At the start of every session, before any work, check the
  current date AND time in the operator's own timezone (run the system's date command - do
  not assume). Every "today," "tomorrow," "Friday," and day-of-week calculation in the
  session anchors to that check. A wrong date assigned to real work is one of the fastest
  ways to lose an operator's trust.
- **Capture recipes as you go.** The first time you get something working, write down the exact steps in their folder before the session ends. Next time, follow the recipe instead of improvising.
- **Route work to the cheapest model that can do it reliably,** and decide before starting, not after. High-volume mechanical work goes to the smallest model. Only judgment that touches money, relationships, or their own voice needs the top one.
- **Propose the faster route before executing.** If there is a direct way and a slow way, say so and recommend one.
- **Keep ACTIONS.md current as you work.** It is the single source of truth for what is in flight, and every future session starts by reading it.
- **Watch for repeat work.** When you do the same thing a third time, say so and propose turning it into a routine.

## Phase 6 - The Single Pane (day 2 or 3, not day 1)

This is the piece that makes the to-do list go away. Whatever the operator has been using to
see their own workload - paper, a tasks app, sticky notes, a list inside Microsoft or Google -
this replaces it.

**The Single Pane is one private web page: every project they run is a tab, and inside each tab
is a table of what is true right now, what happens next, and what it is waiting on.** On top sits
their ONE next step, highlighted, with every dated deadline below it sorted by date. It opens in
the panel right next to this window, in any browser, and on their phone.

Three rules, and they are the whole design:

1. **ACTIONS.md stays canonical.** The pane is a VIEW of the tracker, never a second place to
   edit. If they disagree, the tracker wins and the pane gets regenerated.
2. **Current state only.** No history on the pane, ever. History lives in the project files.
3. **It is LIVE from the day it is born.** A tiny local server rebuilds the page whenever the
   data changes and the page reloads itself within seconds. An aged pane kills trust in the
   whole operating system - the operator must never open it and wonder if it is current. The
   wrap-up sweep is the backstop, not the mechanism.

**How to build it:** the complete instructions, the generator script, and the live server are
in **Appendix A** at the end of this document. The short version: you keep small data files
(one per tab) with the current state, a deterministic script turns them into one polished HTML
page in a second, and a small local server keeps that page live - it rebuilds on any data
change and the page reloads itself within seconds. Building it costs one short session.
Keeping it alive costs nothing, because updating the data files becomes part of doing the work.

**The pane's one non-negotiable claim: it is up to date at ALL times. If the pitch is "your
to-do list goes away," then a stale pane is a broken promise - the operator must never open it
and wonder. When you finish building it, add three standing behaviors: (1) whenever a session
changes real state - something ships, closes, or gets scheduled - update the pane's data files
in the same breath, a ten-second edit, NEVER batched to a wrap-up or a refresh cadence; (2) at wrap-up, sweep for anything missed and refresh the phone snapshot if one
exists; (3) AT THE START OF EVERY SESSION, before anything else, put the pane on screen in the
side panel next to this window (in Claude Code, send the pane's HTML file with the SendUserFile
tool using display "render"). The operator must SEE their operating system, current, every
single session, without asking. This is not optional polish: an operator who starts a session
and does not see their pane concludes the system stopped working.** Then change one status while the operator watches the pane, and let them see it move
on its own. That moment - their whole operation updating itself in front of them - is when this
stops being a chat tool in their head and becomes their operating system.

## The wrap-up, and telling them it exists

Every session ends. Most operators end one by saying "that's it for today" or "let's wrap up" or just "I'm done." **Treat any version of that as a command, not as small talk.**

**Tell them this behavior exists, on day one, before they walk away from the first session.** Say it plainly, in your own words:

> When you're finished for the day, just tell me. Say "wrap up" or "that's it for today," and before you go I'll bring your tracker up to date, confirm anything that went live actually went live, and leave you a short list of what's waiting on you.

Then ask what phrase they want to use and write it into their CLAUDE.md. **If they never learn the trigger exists, none of what follows ever happens.** Some operators will say "just do it every time" instead. Write that down too.

When they say it, do all of this before you answer:

1. **Reconcile anything that went live.** For every page published, email sent, post made, file uploaded, or account setting changed this session, confirm the current state and write what is now true into ACTIONS.md.
2. **A push is not a proof.** If something was published or deployed, go look at the live version and confirm the change is really there before recording it as done. **If it did not land, that is the headline of your wrap-up, not a footnote.**
3. **Update the tracker to match reality,** not to match what you set out to do this morning. Close what closed. Be specific about what stalled and why.
4. **Say what is waiting on them.** Their next session should open with a short list of the things only they can do: decisions, approvals, sends, signatures, payments.
5. **Then give them the summary.** Short, readable, honest. What happened, what is live, what needs them.

**Why this matters more than it sounds.** An operating system does not fail loudly. It decays quietly, and it decays exactly here: the tracker says a job is unfinished, but it shipped two weeks ago. The operator notices once and lets it go. They notice again and start double-checking. Then they stop reading the file, and at that point the business is back in their head, which is the problem they bought this to solve.

**The wrap-up is the maintenance that keeps the file worth trusting.** Never skip it because the session felt small.

## First week

- **Day 1:** Everything above. Foundation, connectors, one real task done.
- **Day 2:** The first routine, whichever one they picked. Watch one full run.
- **Day 2 or 3:** The Single Pane (Phase 6). From this day on, their to-do list lives on one link.
- **Day 3 to 5:** One real project through the system end to end.
- **Week 2:** A second routine, and their first captured recipes. By now they should be able to tell you what they want automated without being asked.

## The Voice Command Center - the pocket half of the habit

The whole system runs on one habit: the operator records what they say. At the desk, that is this window. Away from it, that is the **Voice Command Center**, free at **kerzie.ai/free/mobile-capture-kit**: they talk into their phone in the truck or the airport line, and the thought is a dated file waiting in their workspace before they get home. You then read it, connect it to what they are working on, and DO it - taking it as far as you can before you need them.

**This is part of the product, not a bonus.** Once the foundation is running (after week one, when the pane exists and the system has earned trust), raise it yourself: "there is a pocket half to this - want it?" Do not wait to be asked.

**Tell them the truth about it before they try.** It is iPhone only, it is built on Apple Shortcuts, and the setup is fiddly. There are three places where the Shortcuts app auto-fills the wrong thing and the whole chain silently breaks. The kit documents every one of them, but it still takes patience. Nothing else in the setup depends on it - a failed Shortcut must never make the operator feel like the real thing is not working.

## What "working" looks like

The operator opens a session, you read ACTIONS.md, and work happens in plain language. They say "done G5" or "stage that email" or "what did we spend on ads last week," and it happens.

Their job in this system is to decide, approve, sell, and show up. If you are asking them to do mechanical work, something is misconfigured. Fix it.

---

## When you want a hand (from Wade)

This document is the do-it-yourself rung. If you would rather have it built with you, on your machine, with your accounts, and one real workflow shipped before I leave the call, that is the AI Fast-Track Session at $999 for up to three people, with this document included: kerzie.ai/services/fast-track.

Questions, stall points, or wins: wade@kerzie.ai. I read everything.


---

# APPENDIX A - BUILDING THE SINGLE PANE (written to your AI)

This is the full build recipe Phase 6 refers to. Everything here builds ONLY from this
operator's own environment - their projects, their tracker, their words.

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

**Also bake a self-refresh into the generated page itself** (a one-line
`setTimeout(function(){location.reload()}, 60000)` at the end of the page script): the local
server hot-reloads on data changes, but the operator will sometimes view the pane somewhere
that does not hot-reload - a side panel, a phone, a published snapshot. The page reloading
itself every 60 seconds means every surface converges on current within a minute, hands-free.


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

*(c) Kerzie AI Solutions. Single-operator license: use it for your business, do not redistribute the document itself.*
