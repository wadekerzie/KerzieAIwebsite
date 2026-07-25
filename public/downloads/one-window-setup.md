# The One-Window Setup
### Your complete AI working environment, in one document
**A Kerzie AI product · kerzie.ai**

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
3. **The five standing rules.** These are the base set. Explain each one to them as you write it, and let them add their own from the boundaries question:
   - **Nothing external without an explicit yes in the current session.** No email sent, nothing posted, published, or purchased. Drafting and staging are always fine. This one rule prevents most AI disasters.
   - **Secrets discipline.** All credentials in `00_system/Private/Secrets/`, never printed into chat, never committed anywhere public.
   - **Receipts only.** Anything public-facing must be literally true and verifiable. No invented numbers, no inflated claims. Empty beats exaggerated.
   - **Recipe discipline.** The first time any repeatable operation succeeds, capture the exact steps into a file before the session ends. Recipes are how this system survives model changes.
   - **Cost control.** Every task runs on the cheapest model that can do it reliably, decided before starting. Also: in their AI billing settings, turn off usage-credit auto-reload and set a monthly cap, so a mistake pauses instead of billing.
4. **How to talk to this operator.** Copy the communication rules from this document into their file, so future sessions inherit them.
5. **Their businesses.** Two lines each: what it is, where its assets live.
6. **Directory map.** One line per folder.

### ACTIONS.md, the tracker

One file. Their businesses as sections. Every open item gets a short ID like `G5` or `W9` so they can say "done G5" in plain language and you update the file.

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

- **Capture recipes as you go.** The first time you get something working, write down the exact steps in their folder before the session ends. Next time, follow the recipe instead of improvising.
- **Route work to the cheapest model that can do it reliably,** and decide before starting, not after. High-volume mechanical work goes to the smallest model. Only judgment that touches money, relationships, or their own voice needs the top one.
- **Propose the faster route before executing.** If there is a direct way and a slow way, say so and recommend one.
- **Keep ACTIONS.md current as you work.** It is the single source of truth for what is in flight, and every future session starts by reading it.
- **Watch for repeat work.** When you do the same thing a third time, say so and propose turning it into a routine.

## First week

- **Day 1:** Everything above. Foundation, connectors, one real task done.
- **Day 2:** The first routine, whichever one they picked. Watch one full run.
- **Day 3 to 5:** One real project through the system end to end.
- **Week 2:** A second routine, and their first captured recipes. By now they should be able to tell you what they want automated without being asked.

## One optional extra, and it is free

There is a companion piece called the Capture Kit, free at **kerzie.ai/free/capture-kit**. It is the voice-memo pipeline: they talk into their phone in the car, and the thought is a dated file waiting in their workspace before they get home. You then read it, connect it to what they are working on, and propose the next step.

**Tell them the truth about it before they try.** It is iPhone only, it is built on Apple Shortcuts, and the setup is fiddly. There are three places where the Shortcuts app auto-fills the wrong thing and the whole chain silently breaks. The kit documents every one of them, but it still takes patience and a willingness to push through a screen that is not obvious.

**Nothing in this setup depends on it.** Their operating system works completely without it. Do not raise it in week one, and do not let a failed Shortcut setup make them feel like the real thing is not working. If they ask, or if they mention thinking about work away from the desk, point them at it then.

## What "working" looks like

The operator opens a session, you read ACTIONS.md, and work happens in plain language. They say "done G5" or "stage that email" or "what did we spend on ads last week," and it happens.

Their job in this system is to decide, approve, sell, and show up. If you are asking them to do mechanical work, something is misconfigured. Fix it.

---

## When you want a hand (from Wade)

This document is the do-it-yourself rung. If you would rather have it built with you, on your machine, with your accounts, and one real workflow shipped before I leave the call, plus a 30-day check-in, that is the AI Fast-Track Session at $750: kerzie.ai/services/fast-track.

Questions, stall points, or wins: wade@kerzie.ai. I read everything.

*(c) Kerzie AI Solutions. Single-operator license: use it for your business, do not redistribute the document itself.*
