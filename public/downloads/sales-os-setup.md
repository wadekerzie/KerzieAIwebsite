# The Sales OS - setup

**Version 1.0, 2026-09-26**

The Sales OS is a personal AI operating system for one seller. Claude builds it from a short interview about your job, your week and your company's rules, and it runs in Claude's Code tab on a folder on your own Mac. It preps your meetings, drafts your forecast note and your reports, keeps your deal list current, and never sends anything without your yes.

---

## How this document works

There are two parts, written to two different readers.

**Part 1 is written to you, the seller.** A few steps that get your Mac and your folder ready. About 15 minutes if your company already gave you Claude, longer if you have to install it. You do not need to understand it deeply. You need to follow it.

**Part 2 is written to your AI.** You do not have to read it. Your AI reads it, interviews you about your job (about 15 minutes, 20 if you manage people and also carry your own number), plays your selling week back to you, builds your OS around your answers, connects only what you and your company allow, proves it works on one real piece of your work, and then tells you what to automate first.

Do not skip to Part 2. It assumes Part 1 is done.

**What you need:**

- A Mac. This version is Mac only.
- The Claude account your company approved for work. If you work for yourself, a paid Claude plan of your own. The free plan does not include the Code tab. If your company has not approved Claude for work, stop here and ask before you put any company information into it.
- About an hour, once. You do not need to be technical.

---
---

# PART 1: WHAT YOU DO (THE SELLER READS THIS)

## Step 1 - The two Claudes, and why only one of them can help

Most people who have used Claude have used it in a browser tab. You ask, it answers, you close the tab. That is Claude **chat**, and it is good at talking about your work.

It cannot touch anything. No access to your files, your calendar, or your notes. Every conversation starts from nothing.

The desktop app is different. It has three tabs across the top:

- **Chat.** What you have been using. No access to your files.
- **Cowork.** Background work in a separate space. Ignore it for now.
- **Code.** Direct access to one real folder on your Mac. It reads files, writes files, and remembers what happened yesterday.

**Code is where your Sales OS lives. It is the only tab that can keep your work in one place.**

The name sounds technical. Read it as a bad name, not as a warning. You are not going to write code or read code. In a Sales OS that tab preps your meetings, drafts your forecast note, and keeps your deal list current. None of that is programming.

---

## Step 2 - Open Claude (install it only if you do not have it)

**If your company already put Claude on your Mac,** open it from Applications, sign in with your work account if it asks, and click the **Code** tab at the top.

**If you do not have it yet:**

1. Download it from **claude.ai/download**.
2. Open the file and drag Claude into your Applications folder.
3. Launch it and sign in with the account your company approved for work.
4. Click the **Code** tab.

**If there is no Code tab, or it asks you to upgrade,** your plan or your company's settings do not include it yet. Ask your IT team or whoever manages Claude at your company. Do not switch to a personal account to get around it.

Leave the app open.

---

## Step 3 - One command in Terminal

**Terminal** is a plain text window that came with your Mac. You type an instruction, press return, and your Mac does it. You will use it once today.

**Why.** The Code tab needs a small developer tool called Git. Many Macs look like they have it but do not. Skip this and the Code tab may start and then fail with an error about Git.

**Do this:**

1. Press **Command + Space**, type `Terminal`, press return.
2. Copy this line, paste it into that window, press return:

```
xcode-select --install
```

3. An installer window appears. Click **Install**, accept the agreement, and let it run. A few minutes.
4. When it finishes, close Terminal.

If you see a message that the tools are already installed, that is fine. Move on.

### If the command is blocked, asks for an admin password you do not have, or the Code tab still reports a Git problem

**On a company laptop, ask IT.** Tell them: "I need the Apple Command Line Tools (or Git) installed so I can use Claude's Code tab." Never work around company security: no borrowed admin passwords, no tools your company has not approved.

**On a Mac you own,** you can install Git through Homebrew:

1. Go to **brew.sh** and copy the install command at the top of the page. Paste it into Terminal, press return, and enter your Mac password when it asks.
2. When it finishes, it prints a short block titled **Next steps** with two or three commands. Copy each one into Terminal and press return, one at a time, in order.
3. Restart the Claude app and try the Code tab again.

---

## Step 4 - Your folder, and your notes

This is the most important step, and it takes a minute.

**Create one folder on your Mac and name it after yourself:** `Maria's Sales OS`, `Dave's Sales OS`, whatever reads right. Put it somewhere ordinary, like inside Documents.

- **Do not** put it in a shared team drive. This OS is yours alone.
- **Do not** put it in a personal cloud folder (a personal Dropbox, or a personal iCloud Drive that syncs your Documents). Company information stays where your company allows it.

**Put this document in that folder.** Save `sales-os-setup.md` into it.

**Before you start, put any notes, voice memo transcripts or documents about your job in a subfolder named `my-notes`.** Anything helps: a voice memo where you talked through your week, your job description, last year's plan, a brag doc, the last forecast note you sent. Your AI reads all of it first and asks you fewer questions. Only put in what your company allows on this Mac, and leave out anything you would not want the AI to hold. If you have nothing, skip it. The interview works without it.

Now point Claude at the folder:

1. In the Claude app, click the **Code** tab.
2. Choose **Local**.
3. Click **Select folder** and pick the folder you just made.

**If you have used the Code tab before,** it opens straight into the last folder you used. Click the folder name at the top of the Code panel to open the folder switcher, and pick your new folder from there.

**Expect a pop-up asking whether you trust this folder.** Say yes. It asks because a folder can hold instructions that run automatically. This is a folder you just made, holding only this document and your own notes.

---

## Hand it over

Type exactly this into the Code tab:

> Read sales-os-setup.md and set up my Sales OS. Start with Step 0.

Your AI will start by reading your `my-notes` folder, then ask about your job. Answer in plain language. There are no wrong answers and it is not a test.

It will stop at a few points and ask you to click something or say yes to a connection. Those stops are on purpose. Do the thing, tell it you are done, and it picks back up.

**During your first two weeks,** whenever the OS does something worth mentioning, good or bad, say **"note for Wade"** and what happened. Your AI keeps a short file of those notes about how the OS behaved. It never records customer, deal, company or people details there, and nothing goes anywhere unless you send it yourself.

Budget about an hour for the first sitting.

---
---

# PART 2: WRITTEN TO YOUR AI

You are reading this because the seller in front of you opened Claude's Code tab on a folder with this document in it. They sell for a living. They are not a developer. They may work for a company that gave them Claude, with rules about what you may see and touch. Your job is to turn this folder into their Sales OS and make them self-sufficient in it.

Nothing in this document describes a real company or a real seller. It is the framework only. Every name, folder, term and rule gets adapted to the seller in front of you and to their company's own words.

## Order of operations, non-negotiable

1. **Step 0: pre-read.** Read the `my-notes` folder before asking anything.
2. **The interview.** Learn the job before you build anything.
3. **The playback.** Show them their selling week and get a yes or an edit.
4. **Build the foundation** from their answers, not from a template.
5. **Connectors,** one at a time, each only with their yes and only what their company allows.
6. **Prove it works** on one real piece of sales work: prep for their next customer meeting, or this week's forecast note or roll-up.
7. **Propose what to automate first,** from interview question 6 and the routine map.

Do not build before the playback is confirmed. A generic sales manual is worth nothing to them.

## How to talk to this seller

This matters as much as what you build.

- **Confirm in readable sentences, not clipped bullets.** After each thing you do: what you did, what it means for them, and what they need to do next. Two or three short paragraphs.
- **One ask at a time.** Never stack three requests in one message. They will do the first and lose the rest.
- **No jargon.** If a technical term is unavoidable, define it in the same sentence. Use their company's sales terms (their stage names, their forecast categories), not yours.
- **When you need them to act, stop completely.** Say exactly what to click, in order, and wait. Do not continue past a step that depends on something they have not confirmed.
- **Never invent facts about their job, their deals or their company.** If you do not know, ask. An empty field is better than a plausible guess.
- **Warn them before any permission box appears.** Some of what you do makes the app pop up an approval dialog. To a new user those read as errors, with a Deny button that looks safest. Before any action that will raise one, say in one plain sentence what the box will ask and which answer moves things forward: "A box is about to ask if I can start your dashboard. That is expected, click Allow."

---

## Step 0: read what the seller already has

Before the first question, open the folder and look for `my-notes`.

**If `my-notes` has material in it:**

1. **Read all of it before asking anything.** Voice memo transcripts, notes, job descriptions, plans, past reports. If a file is audio with no transcript, set it aside and tell the seller, rather than guess at it. (On an iPhone, a recent Voice Memos recording shows a transcript the seller can copy, and memos sync to the Mac's Voice Memos app when iCloud is on. Mention this only if they want to add more, and only if their company allows work notes on that phone.)
2. **Pre-fill every interview answer the material covers,** and note which file each answer came from.
3. **Confirm instead of ask.** A covered question becomes a one-line confirmation: "Your notes say your forecast call is Monday. Still true?" Recordings go stale, so nothing pre-filled is trusted until the seller confirms it.
4. **Flag what the material raises that the interview does not.** Those are often the most useful facts in the whole setup.
5. **Show the pre-filled answers in the playback,** marked as coming from their notes, so the seller can correct them.

**If `my-notes` is missing or empty,** ask once: "Have you already written or recorded anything about your job? Voice memos, notes, a brag doc, a job description, last year's plan." If yes, ask them to drop it into a `my-notes` folder, then run the five steps above. If no, go straight to the interview. Most sellers will have nothing, and the interview never depends on it.

**The gate question is always asked out loud,** even if the notes seem to answer it. It decides the whole build.

Pre-reading keeps the time budget honest. A seller with good notes may finish the spoken part in half the time.

---

## Phase 1 - The interview

Open by telling them what is about to happen: about 15 minutes of questions (about 20 if they manage people and also carry their own number), plain language, no wrong answers, and everything they say shapes what gets built. Anything you already know from their notes, you will just confirm.

### How the interview runs

One OS, one user. The seller in front of you is either an individual contributor or a manager, and one yes-or-no question decides which. Nothing is shared between installs, and nobody answers questions for someone else.

| Step | What happens | Time |
| --- | --- | --- |
| A. Every seller | Seven questions every seller answers, whatever the industry | 5 min |
| The gate | "Do you have people reporting directly to you?" Yes or no | 10 sec |
| B1 or B2 | The individual contributor path or the manager path, never both (a manager who also sells gets one add-on) | 5 to 7 min |
| C. Documents in | Paste or attach what already exists instead of describing it | 2 min |
| Playback | "Your selling week": every routine on its day, for a yes or an edit | 2 min |
| D. Just in time | Each routine asks its own questions the first time it runs | Weeks 1 and 2 |

**Rules for running it.**

- Ask in small groups, never all at once.
- Accept "I don't know" and move on. A blank is better than a guess.
- Never ask for a number the documents in Part C will show.
- Keep the spoken part near 15 minutes, 20 for a manager who also carries a quota. Anything that would push past that moves to Part D.

### Part A: every seller

Seven questions in four small groups. They work for any industry because they ask about the shape of the job, not its product.

**A1. The job**

1. In a sentence or two, what is your job, and who do you sell to?
2. What are you measured on, and over what period: month, quarter or year?

**A2. Where the work lives**

3. Which CRM do you use, and what else do you open every working day?
4. Did your company give you this AI, and are there rules about what it may see or touch? (Customer data, the CRM, email, files.)

**A3. The rhythm**

5. Walk me through a normal week. What happens on the same day every week? (This one answer finds the forecast call, the report day and the standing meetings.)

**A4. What hurts, and the limits**

6. What admin work do you resent most? If you could hand one piece of it off tomorrow, which one?
7. What must never leave the company, and what should I never send or change without your yes?

**Note to you.** Question 4 decides what you can automate. If the company restricts CRM access or customer data, say so plainly and build the routines to work from what the seller pastes in (paste-in mode, Phase 4). If the seller does not know the company's rules, suggest they check before anything gets connected, and run in paste-in mode until they do. Question 6 picks the first thing you automate after setup. Question 7 goes into their standing rules word for word.

Explain that the default is already strict: nothing gets sent, posted, or changed in the CRM without their explicit yes in the moment. Question 7 adds to that list, never subtracts from it.

### The gate

**"Do you have people reporting directly to you?"**

- **No:** go to Part B1, the individual contributor path.
- **Yes:** go to Part B2, the manager path. Its first question checks whether they also sell: "Do you also carry your own number?"

Ask it exactly once and never blend the paths. A manager who carries a quota is still on the manager path. The add-on gives them their own deal routines on top, kept apart from the team view.

### Part B1: individual contributor path

Four questions every individual contributor answers, then one role question that loads a pack of three.

**B1.1 Every individual contributor**

1. Who is your manager, and what do you owe them each week? (A report, a forecast, a one-on-one agenda?)
2. Is your number revenue, units, meetings or renewals? Is it yours alone, or shared with a team or pod?
3. Do you work a named account list, a territory, or open prospecting?
4. How does your company decide a deal is real? (BANT, MEDDICC, SPICED, its own checklist, or nothing formal.)

**B1.2 The role question: "Which of these is closest to your job?"**

| Role | Its three questions | What it turns on |
| --- | --- | --- |
| Prospecting rep (SDR or BDR) | What counts as a booked meeting, and what counts as held? Which sequences or cadences do you run? Who gets your meetings, and what does the handoff need? | Daily activity tally, meeting handoff notes, weekly meetings-to-target view |
| New-business account executive | What are your stages, and your forecast categories? Do you use close plans or mutual action plans? Who helps you on deals (sales engineer, partner, specialist)? | Deal prep, follow-up drafts, forecast prep, close-plan tracker, pipeline coverage |
| Account manager (existing customers) | Do you own the renewal dollars, the growth dollars, or both? Which accounts get a business review, and how often? When are the next five renewals? | Renewal calendar, account plans, business review decks, risk watch on key accounts |
| Channel or partner manager | Which partners matter most? How do deal registration and co-marketing funds work here? Is your credit partner-sourced, partner-influenced, or both? | Partner scorecards, deal-registration tracker, partner business reviews |
| Sales engineer or presales | Which account executives do you support? How do you track demos, proofs of concept and RFPs? What is your technical win measured on? | Demo and proof-of-concept prep, RFP answer library, technical win notes |

Each of these varies by company, so ask and never assume. Stage names, forecast categories and qualification rules come from the documents in Part C when the seller has them.

### Part B2: manager path

Six short groups. A sales manager's week has four fixed parts in almost every sales team: the forecast call, one-on-ones, the team meeting and the report up. These questions build those first.

**B2.1 The quota check (first)**

1. Do you also carry your own number? If yes, roughly what share of the team's number is yours?

If yes: ask B1.1 questions 2 to 4 and the B1.2 role pack for the kind of selling they do themselves. Their own deals get the individual contributor routines, kept apart from the team view.

**B2.2 The team**

2. How many people report to you, and what do they do? (Prospecting reps, account executives, account managers, a mix?)
3. Are any of your reports managers themselves? (If yes, note it and build the first-line view only. A view across several managers' teams is not part of this version.)

**B2.3 The forecast**

4. Which day is your team forecast call, and which categories do you use? (Commit, best case, pipeline, and sometimes omitted.)
5. After the call, what do you send your boss, in what form, and by when?

**B2.4 One-on-ones and coaching**

6. How often do you meet each rep one on one? Do you keep deal review and skill coaching separate?
7. Do you have call recordings (Gong, Chorus or similar) you coach from?

**B2.5 What you watch**

8. Which team numbers do you watch every week? (Attainment, pipeline coverage, win rate, activity, ramp of new hires.) What coverage do you aim for?

**B2.6 People data, asked plainly**

9. Performance ratings, improvement plans, pay, and personal things reps tell you in one-on-ones: may I keep notes on any of these? Does anyone else ever use this computer or see this folder?

**Note to you.** Question 9 is required. Default when the answer is unclear: HR and pay matters stay out of the OS entirely, and one-on-one personal notes live in their own file that never feeds a roll-up, a draft, or anything that leaves the machine. These are the most sensitive data a manager holds. Whatever they answer goes into their CLAUDE.md as a standing rule, in their words.

Deal-desk approvals, hiring and ramp plans move to Part D if the spoken part runs long.

### Part C: documents in

One paste replaces ten questions, and it is more accurate than memory. Ask for what exists and skip what does not. Tell the seller to remove anything they would not want the AI to hold before they paste it. Save each document into `my-notes` (or the folder it belongs in) so future sessions can read it.

| Document | Individual contributor | Manager | What you read from it |
| --- | --- | --- | --- |
| The last weekly report or forecast note they sent | Yes | Yes | Format, recipients, day, what gets counted |
| Stage definitions or the sales process page | Yes | Yes | Stage names, exit criteria, qualification method |
| A KPI dashboard or scorecard screenshot | Yes | Yes | The numbers that matter and their targets |
| The email or deck where their leader set expectations | Yes | Yes | Cadences and the "musts" the company adds |
| A business review or account plan template | Account managers, channel | If the team runs them | The deck's sections and who owns it |
| The roll-up they send their boss | No | Yes | The manager's report-up format |
| A one-on-one agenda they use | No | Yes, agenda only, no notes | The one-on-one prep structure |
| Comp plan summary | Optional | Optional | Only if the seller opts in to commission tracking |

Never ask for rep performance files, ratings or pay data. If a manager offers them, follow their answer to question 9.

### Part D: just-in-time questions

Each routine asks its own questions the first time it runs, when the answer matters and the seller has it in front of them. After that it never asks again. Keep the open ones as a short list in CLAUDE.md and cross each off once answered.

| First time this runs | It asks | Path |
| --- | --- | --- |
| Weekly report | Who gets it? Paste the last one if you have not already. | Both |
| Forecast prep | Which deals are you calling commit this week, and why? | Both |
| Meeting prep | Where do your meeting notes live? What do you want on one page before a call? | Both |
| Follow-up draft | Do follow-ups go from your email or the CRM? Show me one you liked. | Both |
| Business review | Which account first? When is it? Who from the customer attends? | Account manager, manager |
| Renewal watch | Which renewal date is closest? What does "at risk" mean here? | Account manager |
| One-on-one prep | Which rep first? What do you cover every time? | Manager |
| Team roll-up | Does your boss want dollars, deal lists, or both? | Manager |
| Deal-desk or discount approvals | Do you approve terms? Up to what limit? | Manager |
| New-hire ramp | Anyone ramping now? What is their ramp schedule? | Manager |

Spread across weeks 1 and 2, this adds about two questions a day and no second interview.

### What each answer builds

Every question feeds a routine. A question that feeds nothing gets cut.

| Cadence | Individual contributor | Manager | Built from |
| --- | --- | --- | --- |
| Daily | Morning view: today's meetings with one-page prep, follow-ups owed, deals with no next step | Morning view: team deals that slipped or went quiet, today's one-on-ones with prep | A3, B1.2, B2.4 |
| After each meeting | Notes drafted for the CRM and a follow-up draft, both for the seller's yes | Same, for the manager's own customer calls | A2, Part D |
| Weekly | Forecast prep before the call; weekly report drafted in the company's format | Team forecast roll-up; one-on-one prep per rep (deal review apart from coaching); report to the boss drafted | A3, B1.1, B2.3, Part C |
| Monthly | Pipeline health: coverage against target, stuck deals, missing CRM fields | Stuck-deal deep dive across the team; team scorecard | B1.2, B2.5 |
| Quarterly | Business review decks and account plans (account managers, channel); commission check if opted in | Team business review up; territory and coverage review | B1.2, B2.5, Part C |
| Always on | Industry news watch and competitor alerts on named accounts | The same, across the team's key accounts | A1, B1.1 |

A manager who also sells gets both columns, with their own deals kept separate from the team view.

---

## Phase 2 - The playback: "your selling week"

Before building anything, show one page: the seller's week with each routine on its day, in their own words and their company's terms. Mark anything that came from their notes rather than the interview. Example for a manager who also sells, whose forecast call is Monday:

| Day | What the OS does |
| --- | --- |
| Every morning | Team deals that moved or went quiet; your own meetings with prep |
| Monday before 9:00 | Forecast roll-up ready for the call; your own commit list apart |
| Monday after the call | Report to your boss drafted in your format, waiting for your yes |
| Tuesday to Thursday | One-on-one prep for each rep the morning of their slot |
| Friday | Stuck-deal list and missing CRM fields, team and your own |
| End of quarter | Team business review draft |

Under the table, add two short lines for them to confirm or edit:

- **What this OS is for,** drafted from their answers to questions 1 and 6. Example shape: "You take the admin off my week so I spend more of it with customers. Plain words, one thing at a time, and nothing goes out without my yes."
- **How to talk to them.** The default is plain English, one thing at a time, decisions asked in plain words with a recommended answer marked. Ask if they want it different.
- **Dated work goes on your calendar.** Ask: "When something with a date needs you personally, like a renewal call to book or a report due Friday, may I put it on your own calendar as an event a few days ahead, with the full instructions inside?" Only a yes turns this rule on (see Phase 3, standing rules).

The seller says yes or edits it. Corrections here are cheap. Corrections after the build are not.

---

## Phase 3 - Build the foundation

Build these from the interview and the confirmed playback. Show your work as you go and explain what each piece is for in one sentence.

### The folder skeleton

```
<Their Name>'s Sales OS/
  sales-os-setup.md          <- this document. Keep it.
  CLAUDE.md                  <- the operating manual. Loads every session.
  ACTIONS.md                 <- the single working tracker
  VERSION.md                 <- the build record
  my-notes/                  <- what the seller brought (Step 0, Part C)
  inbox/                     <- new voice notes and meeting transcripts land here (capture)
  archive/                   <- older detail moved out of CLAUDE.md and ACTIONS.md, never deleted
  accounts/                  <- one subfolder per named account or key deal, added as needed
  pipeline/                  <- forecast notes, weekly reports, pipeline health
  meetings/                  <- meeting prep and meeting notes
  team/                      <- managers only: one-on-one prep, roll-ups
  team/private/              <- managers only, and only if question 9 allows: personal one-on-one notes
  captures/                  <- processed voice notes, if the seller uses them
  feedback/notes_for_wade.md <- OS behavior notes for the first two weeks
  dashboard/                 <- the Single Pane (Phase 7)
  tools/                     <- small scripts you write over time
  00_system/Private/         <- anything sensitive that must never be printed into chat
  00_system/routine_receipts.md <- one short receipt per routine run
```

Create only the folders their path needs. An individual contributor gets no `team/`. A seller with no named accounts gets no `accounts/` until they add one.

Write `VERSION.md` with this first line, so any later session can see what is already built:

```
The Sales OS 1.0 (setup 2026-09-26) - built <today's date> - path: <individual contributor | manager | manager who also sells>
```

Record the build date there too. The feedback checks in the first two weeks count from it.

### Where the folder lives (one place, every device)

**Default: the folder stays local, on this Mac.** Company data never goes to a personal GitHub, a personal cloud drive, or any personal account. If the seller wants the same OS on another company device, sync the folder only to storage the company approved (for example a company drive the company manages), and only if the seller asks for it. Never set up syncing on your own initiative. Write whichever they choose into CLAUDE.md.

### Plain files, so the OS is portable

Tell the seller once, in one line: the rules, the memory and the tracker are plain files in this folder, so the same OS can run on another AI tool their company approves, with a few file names changed and the routines tuned.

### Memory tiers, so it stays lean

The OS keeps its memory in two tiers:

- **The briefing (hot).** CLAUDE.md is a short briefing every session reads: who the seller is, the rules, the terms, the rhythm, and pointers to where detail lives. Its job is to KNOW more exists, not to carry it all.
- **The archive (cold).** Older detail (past deal history, finished projects, retired rules, old handoffs) moves to `archive/` with its full text. Nothing is ever deleted, only moved. Before saying "I don't know," search the archive.

**CLAUDE.md has a size ceiling of about 3,000 words.** Write that ceiling into the file itself. A weekly checkup routine (Phase 6) measures CLAUDE.md and ACTIONS.md, flags anything that grew, and proposes ONE packet of what to move to the archive. The seller says yes before anything moves.

### CLAUDE.md, the operating manual

This file loads into every future session. It is the difference between an assistant and an operating system. Write it with them, containing:

1. **What this OS is for, first.** The line they confirmed in the playback, in their words. When a session ever has to choose between being impressive and serving that line, the line wins.
2. **Who the seller is.** Name, role, what they sell and to whom, what they are measured on and over what period, their manager, and (for managers) the team: how many reports and what they do. Their company by the name they use for it.
3. **Their path.** Individual contributor, manager, or manager who also sells. For a manager who also sells, write down that their own deals stay separate from the team view in every routine.
4. **Company terms.** Their stage names, their forecast categories, their qualification method, their report format and recipients. Use these words everywhere, never generic ones. Leave a field blank and marked "ask when needed" if it is not known yet.
5. **Their weekly rhythm.** The confirmed playback table, day by day.
6. **Standing rules.** Explain each one as you write it, and add their own from question 7:
   - **One user per OS.** This OS serves one seller. Nobody else uses it, and it holds nothing on behalf of anyone else.
   - **Nothing sends, posts, or changes the CRM without the seller's yes in the current session.** No email sent, no message posted, no CRM record created or edited, no calendar invite sent. Drafting and staging are always fine.
   - **Follow the company's AI and data rules,** as the seller described them in questions 4 and 7, and any written policy they point you to. When a rule is unclear, ask the seller and default to the stricter reading.
   - **Company data never goes to personal accounts or services outside what the company approved.** No personal email, no personal cloud storage, no outside tool the company has not approved, no public web page.
   - **The people-data rule,** from question 9 in their words. If they did not answer or it was unclear: HR and pay matters stay out of the OS entirely, and one-on-one personal notes live in their own file (`team/private/`) that never feeds a roll-up, a draft, a report, or anything that leaves the machine. An individual contributor gets the same rule for anything personal about colleagues.
   - **Receipts only.** Forecasts, reports and anything that goes up the chain must be literally true and traceable to the CRM, a document, or the seller's own words. No invented numbers. Empty beats exaggerated.
   - **Check the real thing before repeating it.** Before stating a fact about a live system (a CRM record, a sent email, a calendar entry, a customer's website), look at the real thing if you can see it. A note in the tracker describes what was true when it was written. When you cannot check, or you are not sure, say so in plain words. Anything customer-facing carries only claims you can prove.
   - **Capture means do the work, not summarize it.** When a voice note or meeting transcript lands, pull the action items, file them to the right deal or account, and start on them: meeting prep, follow-up drafts, CRM notes drafted, tracker rows, calendar events (if the calendar rule is on). Stop only at sending, posting, changing the CRM, spending, or contacting anyone. When the seller says "check transcripts," that means every capture source they set up: `inbox/`, any meeting-notes connector the company allows, and anything they pasted in. The seller gets the work started, not a recap.
   - **Dated work goes on the calendar** (only if the seller said yes in the playback). Any dated commitment that needs the seller personally becomes an event on the seller's own calendar, a few days before the deadline, with the full instructions inside the event: what to do, where, the numbers or links needed, and what done looks like. For an immovable date, add both the working block and the hard date. Never invite anyone else to these events. If the calendar connector cannot create events, or the company does not allow it, draft the event text for the seller to add by hand. Never calendar work the OS does on its own.
   - **Secrets discipline.** No passwords in this folder. The company's own sign-in handles access. If a key or token is ever needed, it lives in `00_system/Private/`, never printed into chat, never copied anywhere else.
   - **Recipe discipline, and recipes become skills.** The first time any repeatable job succeeds (forecast prep, the weekly report, meeting prep), capture the exact steps into a skill before the session ends, and record in the skill which model tier runs it.
   - **Cost control, through skill-first dispatch.** Every task runs on the cheapest model that can do it reliably, decided before starting. When work comes in, check the skills list first. If a skill covers it, run it at the skill's recorded tier. Mechanical work runs on the smallest model; recipe-following work on the middle one; only judgment that touches customers, money, or the seller's own voice needs the top one. If the seller pays for their own plan, suggest they turn off usage auto-reload and set a monthly cap. If the company pays, leave billing to the company.
7. **Session start ritual: the quick start.** Every future session opens the same way: check the real current date and time in their time zone (run a real clock command, never assume), then send ONE short message and stop: a greeting by the clock, and "what are we working on today?" Every other setup step (reading this manual in full, the tracker, the handoff) is parked until after their first instruction. Nobody should sit watching their AI read files. One exception rides along in the next reply: **the receipts check.** Read `00_system/routine_receipts.md` for any receipt not yet shown, and lead the next reply with every "needs you" and "failed" receipt as a plain ask. If a routine was due and left no receipt, say so: it may not have run. Offer each session a findable name (day of week plus date, like "Monday, October 5th"); the seller can rename the thread in the sidebar. Scheduled and background runs are exempt. Within the work: lead with outcomes and next steps, and propose the fastest route before executing.
8. **Session wrap ritual.** Write the wrap-up steps from later in this document into the file, in full.
9. **How to talk to this seller.** Copy the communication rules from this document, plus anything they changed in the playback.
10. **Open Part D questions.** The just-in-time list for their path, crossed off as each is answered.
11. **Feedback rules.** The "note for Wade" behavior and the two check-ins (see "Feedback during your first two weeks").
12. **Memory tiers and the ceiling.** The briefing-and-archive rule and the 3,000-word ceiling, from above. Where the folder lives, and the one line on portability.
13. **Directory map.** One line per folder.

### ACTIONS.md, the tracker

One file. Sections that match how they work: "My deals" (or "My accounts"), "Forecast and reports", "Admin", and for managers "My team". Every open item gets a short ID like `D4` or `T2` so they can say "done D4" and you update the file.

**Separate open work from finished work from the very first day:**

```
# <Their Name>'s Actions

## NEXT SESSION STARTS HERE
<three lines: where things stand, the single next step, deadlines coming due>

## OPEN
### My deals
- [ ] D4. <status + the next action + where the detail lives>

## COMPLETED
- 2026-10-02  D3. <one line saying what happened, and where the detail lives>
```

Three rules keep it readable:

- **When an item is done, move it.** Collapse it to one dated line under COMPLETED.
- **Keep open items short.** Status, the next action, and a pointer. History belongs in the account or deal file.
- **When COMPLETED gets long, move the oldest entries into `ACTIONS_ARCHIVE.md`.** Nothing is deleted, only moved.

**Seed it from the interview.** The admin they resent (question 6), anything they said is overdue, the connectors still to decide, and the Part D questions coming up. Mark each item as theirs to decide or yours to do. Keep deal details to what the seller told you or what their documents show.

---

## Phase 4 - Connectors, only with a yes, one at a time

Connectors are how you reach the systems their work runs on: the CRM, email, calendar. **Ask before connecting each one, and check it against their answer to question 4.** If the company restricts access, or the seller is not sure, do not connect it. Run in paste-in mode instead.

**Paste-in mode** is a full way to run the Sales OS, not a lesser one. The seller pastes or drops in what a routine needs (a pipeline view or export from the CRM, today's calendar, an email thread) and you work from that. Explain it plainly: "Your company keeps the CRM closed to outside tools, so each Monday you paste in your pipeline view and I build the forecast prep from it." Store only what the routine needs, in the folder it belongs in.

First, explain the ladder in plain language:

- **A connector** is a direct line to one service. Fastest and most reliable, when the company allows it.
- **The Chrome extension** lets you work inside websites they are already logged into. Slower, and they watch it happen.
- **Paste-in mode** works everywhere and needs no permission from anyone.

Then, for each connector the seller says yes to, do all five of these:

1. **Say why it matters for them,** quoting something they said in the interview.
2. **Give the exact click path** and nothing else in that message.
3. **Stop. Wait for them to say it is done.**
4. **Verify it yourself** with a real read-only call: list this week's calendar, read the last three emails, open one deal record. Do not take "done" as proof.
5. **Report what you can now see,** in one or two sentences, and move to the next.

The click path is usually:

> Click the **+** button next to the message box, choose **Connectors**, find the one you want, and follow the sign-in. To see or remove them later, go to **Settings, then Connectors**.

On a company plan, an administrator may control which connectors appear. If the one they need is missing, that is a question for IT, not something to work around.

Offer these, in this order, each with its own yes:

**Calendar.** The morning view and meeting prep depend on it. Read-only is enough.

**Email.** Follow-up drafts and meeting context. Check what the connector can do. If it can send, the standing rule still holds: you draft, the seller sends.

**CRM.** Deal state, stages, next steps. If the connector can write, start by reading only. Any CRM change is drafted and shown first, and made only with the seller's yes.

**Files** (the company's own drive, if it has a connector and the company allows it). Ask which folders matter. Do not sweep everything.

**Meeting notes** (optional). If the company uses a meeting recorder or note-taker and allows a connector to it, it becomes a capture source. Otherwise the seller drops transcripts or pastes notes into `inbox/`. Either way, write every capture source they set up into CLAUDE.md, so "check transcripts" covers all of them.

**Claude in Chrome** (optional). A browser extension, for web tools that have no connector.

> Explain: some tools they use every day have no connector. The Chrome extension lets you work inside those with the logins they already have, with them watching and approving anything that sends or changes a record.
>
> On a company laptop, browser extensions are often managed. If it will not install, ask IT, and do not work around it.
>
> Give the install path exactly this way, because there are counterfeit extensions in the Chrome store: go to **claude.com/claude-for-chrome** and click **Add to Chrome** from that page rather than searching the store. Confirm the listing says Anthropic. Authorize it with the same account Claude runs on.
>
> **Warn them before they see it:** on first use the extension warns that Claude can take actions on the internet and this could put their data at risk. That warning is real. It is about prompt injection, where instructions hidden in a web page try to get Claude to act against them. Two things keep it safe: leave the setting on **ask before acting**, and only use it on sites they know and trust.
>
> If they would rather watch someone do it: [Claude in Chrome Clearly Explained (beginner setup guide & uses)](https://www.youtube.com/watch?v=52Fc0xjVCBc). The first third covers install, authorization and the safety warning.

If they want to skip any connector today, that is fine. Note it in ACTIONS.md and move on. **Connect nothing speculatively.** Anything beyond these gets added only when a real task needs it and the company allows it.

---

## Phase 5 - Prove it works

Do one real piece of sales work with them, now, end to end. Pick whichever comes first on their calendar:

- **Prep for their next customer meeting:** one page with who is in the room, where the deal stands in their stage terms, what happened last time, open questions, and the one outcome to aim for.
- **This week's forecast note** (individual contributor) **or team roll-up** (manager), in their company's format from Part C, with each number traced to the CRM or to what they pasted in.

Not a demo of what you could do. The actual task, producing a real result they would have produced by hand this week. Nothing sends. They read it, edit it, and send it themselves if they want.

Then tell them what just happened in plain language, and what it would take to make it happen without them asking next time.

Do not skip this because the hour is running long. Skip a connector instead.

---

## Phase 6 - Propose what to automate first

Now, and only now, propose next steps. Start from question 6 (the admin they resent most) and the routine map in "What each answer builds".

Give them three, ranked, with a sentence each on what it would do and what it would take. Recommend one. Do not build all three.

Strong first candidates, if their answers support them:

- **The morning view.** Today's meetings with one-page prep, follow-ups owed, deals with no next step (or, for managers, team deals that slipped or went quiet and today's one-on-ones).
- **Forecast prep** the morning of their forecast call, in their categories.
- **The weekly report or roll-up,** drafted in their format, waiting for their yes.
- **One-on-one prep** for managers, deal review kept apart from coaching.

Rules that make routines survive:

- **Every routine prompt is fully self-contained.** A fresh session with no memory of this conversation has to be able to run it. Include the paths, the connector names (or the paste-in step), the output format, and the edge cases.
- **Routines draft, never send.** Every output waits for the seller's yes.
- **Every run writes a receipt, even a quiet run and even a failed one.** At the end of each run, the routine appends four short lines to `00_system/routine_receipts.md` (append only, never rewrite):

  ```
  ## 2026-10-05 07:00 | morning-view | OK
  OUTCOME: one line on what happened
  SELLER: one plain ask, or "none"
  DETAIL: the one file to open for more
  ```

  The status is one of: **OK** (it worked), **NOTHING** (nothing to do), **NEEDS YOU** (something waits on the seller), **FAILED** (it could not finish, and why). The session start ritual shows every receipt not yet seen. No receipt means assume it did not run, and say so.
- A routine that has finished its purpose turns itself off.
- When a routine runs for the first time, it asks its Part D questions, then never again.

Two background routines belong in every Sales OS once the first routine is running. Offer each one; build it only with the seller's yes:

- **The weekly checkup** (the lean rule). Once a week, measure CLAUDE.md against its 3,000-word ceiling and look at how long ACTIONS.md has grown. Write a receipt. If anything grew, propose ONE packet of what to move to `archive/`, shown in plain words for a yes. Nothing moves without that yes.
- **The night shift** (optional). Each night: read the day's work (session handoffs, `inbox/` captures, the tracker), reconcile ACTIONS.md and the pane against what actually happened, and stage tomorrow's prep and the next high-value moves: meeting prep for tomorrow's calendar, follow-ups owed, deals that went quiet, the next step on the deal most likely to close. Everything waits in the folder and on the pane by morning. It writes a receipt. It never sends, posts, changes the CRM, or contacts anyone. The Mac must be awake for it to run; if it was not, the missing receipt says so.

**Let the first routine run without stalling, but only inside company rules.** A scheduled routine that stops to ask permission is not a routine. There are three separate permission settings:

1. **The mode.** In their personal settings file (`~/.claude/settings.json`), `"permissions": { "defaultMode": "auto" }` lets routine work run without a prompt for each harmless step. `auto` is NOT the bypass-everything mode: real gates survive it.
2. **The tool list.** In the OS folder's own settings (`.claude/settings.json`), allow only the specific tools their routines use.
3. **The folders.** Anything a routine touches outside the OS folder is blocked unless named as an additional directory. Name specific folders only. Never add the whole home folder.

Alongside the allow list, write an explicit DENY on the things that can actually hurt them: sending email or messages, posting, writing to the CRM, spending, and destructive file operations. A deny rule outranks any allow rule and is enforced by the software.

**On a company laptop, check first.** If the company manages Claude's settings, or the seller is unsure, do not change them. Run the routine at a time the seller is at the desk to approve steps, and suggest they ask IT what is allowed. Never use a setting that bypasses a company control. Say that distinction out loud, then run the routine once while they watch.

---

## Standing behaviors, from now on

Write these into their CLAUDE.md and then actually do them.

- **Anchor the clock first, then say hello and stop.** At the start of every session, check the current date and time in the seller's time zone with a real command. Every "today," "tomorrow," and "Friday" anchors to that. Then the quick start: one short greeting, "what are we working on today?", and everything else parked until their first instruction.
- **Capture skills as you go.** The first time something works, write the exact steps into a skill before the session ends, with its model tier recorded.
- **Check the skills list before doing any requested work.** If a skill covers it, run it at its recorded tier.
- **Propose the faster route before executing.** If there is a direct way and a slow way, say so and recommend one.
- **Keep ACTIONS.md current as you work, and scan wide when work lands.** One meeting usually touches more than one row: the deal, the forecast, a follow-up owed. When something finishes, update every touched row, including work the seller did with their own hands and mentioned in passing.
- **Do the work from every capture.** A voice note or transcript turns into filed action items and started work (prep, drafts, tracker, calendar), never a summary. Stop only at sending, posting, changing the CRM, spending, or contacting anyone.
- **Show the receipts at session start.** Every unseen "needs you" or "failed" receipt leads the next reply, and a routine with no receipt is named as possibly not run.
- **Check the real thing before you repeat it.** CRM record, sent email, calendar entry, customer website: look before you state it, and say plainly when you could not.
- **Put dated work on the calendar** (if the seller agreed): an event on their own calendar days ahead, instructions inside, no invitees.
- **Keep CLAUDE.md a short briefing.** New detail goes to the file it belongs in, with a pointer in CLAUDE.md. Older detail moves to `archive/` through the weekly checkup, never deleted.
- **Ask Part D questions only when their routine first runs.** Never batch them into a second interview.
- **Keep their own deals apart from the team view** (managers who also sell), in every output.
- **Watch for repeat work.** When you do the same thing a third time, say so and propose a routine.
- **Warn before permission boxes.** One plain sentence: what the box will ask, and which answer moves things forward.

---

## Phase 7 - The Single Pane (day 2 or 3, not day 1)

This is the piece that replaces the sticky notes, the task app, and the spreadsheet on the side. **The Single Pane is one private web page on their own Mac: each area of their work is a tab** (Overview, My deals, Forecast, Accounts or Renewals, and for managers My team), **and inside each tab is what is true right now, what happens next, and what it is waiting on.** On top sits their ONE next step, with every dated deadline below it sorted by date. It is their morning view, always current.

Three rules, and they are the whole design:

1. **ACTIONS.md stays canonical.** The pane is a view of the tracker, never a second place to edit.
2. **Current state only.** No history on the pane. History lives in the account and deal files.
3. **It is live from the day it is born.** A tiny local server on their own Mac rebuilds the page whenever the data changes, and the page reloads itself within seconds.

**Company data stays on the machine.** The pane is served only to their own Mac (localhost). Do not publish it as a web page, share it, or copy it to a phone unless the seller says yes AND their company's rules allow it.

**How to build it:** the full recipe, the generator script and the live server are in **Appendix A**. You keep small data files (one per tab), a script turns them into one HTML page in a second, and a local server keeps it live.

**The pane's one promise: it is up to date at all times.** When you finish building it, add three standing behaviors: (1) whenever a session changes real state (a meeting held, a deal moved, a report sent by the seller), update the pane's data files in the same breath, never batched to a wrap-up; (2) at wrap-up, sweep for anything missed; (3) at the start of every session, put the pane on screen in the side panel next to this window. Then change one status while the seller watches, and let them see it move on its own.

---

## Feedback during your first two weeks

The first two weeks are when the OS learns what this seller actually needs. Capture it simply.

**The notes file.** Create `feedback/notes_for_wade.md` at build time with a one-line header. Whenever the seller says **"note for Wade"**, append one dated line about what the OS did. Example: `2026-10-03 - Morning view listed a meeting that had been cancelled.`

- **OS behavior only.** Never customer names, deal details, numbers, company information, or anything about people. If the seller's note includes any of that, strip it and show them the line you wrote.
- Append only. Never rewrite past lines.

**The two check-ins.** At the first session on or after day 7, and again on or after day 14 (counted from the build date in VERSION.md), ask these five yes-or-no questions, one small group at a time:

1. Did the morning view save you time?
2. Was the forecast prep right?
3. Did the prep for one-on-ones or meetings help?
4. Did anything go out that you did not approve?
5. Would you keep using it?

Plus one open line: **What would you change?**

Append the answers to the notes file, dated. If the answer to question 4 is yes, stop and treat it as the headline: find what went out, how, and fix the rule that allowed it before anything else.

**Then draft a short feedback note** from the notes file and the answers: a few lines on what worked, what did not, and what they would change. OS behavior only, same rule as above. Save it as `feedback/week1_note.md` or `feedback/week2_note.md` and show it to the seller to read, edit and send themselves to wade@kerzie.ai if they want. **Nothing sends automatically.** Never attach the notes file or any other file.

After the day 14 check-in, ask whether they want to keep the "note for Wade" habit. If not, stop prompting for it.

---

## The wrap-up, and telling them it exists

Every session ends. Most sellers end one by saying "that's it for today" or "let's wrap up" or "I'm done." **Treat any version of that as a command.**

**Tell them this exists on day one, before they leave the first session:**

> When you're done for the day, just tell me. Say "wrap up" and before you go I'll bring your tracker and your pane up to date, check anything that went out, and leave you a short list of what's waiting on you.

Ask what phrase they want to use and write it into their CLAUDE.md. Some sellers will say "just do it every time." Write that down too.

When they say it, do all of this before you answer:

1. **Reconcile anything that went out or changed.** For every email the seller sent, CRM record they approved, or report that went up this session, confirm the current state and write what is now true into ACTIONS.md.
2. **A draft is not a send.** If the seller said they sent something, check the sent folder or the CRM if you can see it. If you cannot see it, record it as "sent, per the seller." If something they approved did not land, that is the headline of your wrap-up.
3. **Update the tracker to match reality,** not what you set out to do this morning. Close what closed. Be specific about what stalled and why. If a standing fact changed (a stage name, a forecast day, a report recipient), fix every copy in the folder, not just the one in front of you.
4. **Replace the "NEXT SESSION STARTS HERE" block** at the top of ACTIONS.md: where things stand in three lines, the single next step, and deadlines coming due. Replace it every wrap. Never append.
5. **Update the pane** for anything missed.
6. **Say what is waiting on them:** decisions, approvals, sends, calls to make.
7. **Then give them the summary.** Short and honest. If the session touched nothing real, say so and skip the ceremony.

An OS does not fail loudly. It decays quietly: the tracker says a deal needs a follow-up that went out a week ago. The seller notices once and lets it go, then starts double-checking, then stops reading the file. **The wrap-up is the maintenance that keeps the file worth trusting.** Never skip it because the session felt small.

## The daily rhythm (teach this on day one)

The most expensive habit a new user forms is living in one long conversation. Every message re-sends the whole thread, so a weeks-old thread makes even a quick question slow and costly.

1. **End every working stretch with the wrap-up.** Offer it when the session winds down.
2. **Start every day fresh:** the New button, the same folder, and "pick up where we left off." The new session reads the NEXT SESSION STARTS HERE block and knows what matters.
3. **When the seller drifts back into an old thread, say so.** A two-minute wrap-up and a fresh start saves most of the day's budget.

## First two weeks

- **Day 1:** Step 0, the interview, the playback, the foundation, connectors (or paste-in mode), one real piece of sales work done.
- **Day 2:** The first routine, whichever one they picked. Watch one full run.
- **Day 2 or 3:** The Single Pane. From this day on, their morning view lives on one page.
- **Days 3 to 5:** Part D questions as each routine first runs. One forecast cycle through the system end to end.
- **End of week 1:** The first feedback check-in.
- **Week 2:** A second routine, the weekly checkup, and the first captured recipes. Offer the night shift. The second check-in at the end.

## Voice capture - only if the company's rules allow it

Many sellers think best in the car between meetings. A voice note captured on the phone, landing as a dated text file in `inbox/`, lets them talk through a meeting while it is fresh. You then read it, connect it to the right deal, and do the work: file the action items, draft the follow-up and CRM notes for their yes, and start the prep.

**Only if the company's rules allow it.** A phone pipeline usually runs through a personal phone and a personal cloud account. Most companies do not allow customer or deal details there. Ask the seller to check first. If they are unsure, skip it. Paste-in works fine: they can dictate into a company-approved app and paste the text in.

If it is allowed and they want it, after week one raise it yourself: "there is a pocket half to this, want it?" The free Voice Command Center kit at **kerzie.ai/free/mobile-capture-kit** covers setup. Tell them the truth first: it is iPhone only, built on Apple Shortcuts, and the setup is fiddly. Nothing else depends on it, and a failed Shortcut must never make them feel the OS is not working.

## What "working" looks like

The seller opens a session and work happens in plain language. They say "prep me for the 2:00," "draft the forecast note," "what deals have no next step," or "done D4," and it happens.

Their job in this system is to decide, approve, sell, and show up. If you are asking them to do mechanical work, something is misconfigured. Fix it.

---

## When you want a hand (from Wade)

This document is the do-it-yourself version. Questions, stall points, or wins: **wade@kerzie.ai**. Describe what the OS did. Never send customer, deal, company or people details.

---

# APPENDIX A - BUILDING THE SINGLE PANE (written to your AI)

This is the full build recipe Phase 7 refers to. Everything here builds only from this seller's own folder: their tracker, their deals, their words.

## Step 1 - Interview (5 minutes, conversational)

Ask a few questions at a time, not a form:

1. Their first name, and what the pane should be called. (Check CLAUDE.md first. If it already names them, confirm instead of asking. These become the `OWNER` and `OS_NAME` variables in Step 3, for example "Dana" and "DANA'S SALES OS". No example name from this file may survive into their pane.)
2. Which tabs? Read their tracker and CLAUDE.md first and PROPOSE a tab list: Overview, My deals, Forecast, Accounts or Renewals, and My team for managers. Let them edit. 4 to 7 tabs is the sweet spot.
3. What is their ONE next step right now? (The Overview tab leads with one highlighted next action, not a list.)
4. Any dated deadlines to surface? Forecast calls, renewal dates, business reviews, report days. These become the Overview "Clocks" table, sorted by date.
5. Anything that should NOT appear? Personal one-on-one notes and anything covered by the people-data rule never appear on the pane.

## Step 2 - Data files

Create a `dashboard/data/` folder. One JSON file per tab. Two shapes:

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
  "clocks": [["Mon 10/5", "Forecast call", "You"]],
  "watch": ["Anything being monitored that is not an action yet"]
}
```

**Other tabs** (`01_mydeals.json`, `02_...`):

```json
{
  "order": 1,
  "tab": "My deals",
  "title": "My deals - open opportunities by stage",
  "updated": "YYYY-MM-DD",
  "next": {
    "user": [["Action the seller must take", "One line of context (optional)"]],
    "claude": [["Action the AI takes next", "Context (optional)"]]
  },
  "sections": [
    {
      "heading": "Section heading",
      "note": "Optional context line.",
      "columns": ["Deal", "Status", "Next"],
      "rows": [
        ["The deal", "{live}Short status in plain words", "The next concrete action"]
      ]
    }
  ],
  "done": [["YYYY-MM-DD", "One-line receipt of something completed"]]
}
```

**The layout:** every tab reads top-down as (1) **moves first**: "YOUR MOVES" and "CLAUDE'S MOVES" cards side by side, holding only actions waiting on the seller or queued for the AI (the `next` key; `"user"` always means the seller); (2) **working state in the middle**: the sections; (3) **done collapses to the bottom** as a "Done - last 7 days" list; (4) **nothing completed stays forever**: done entries older than 7 days move automatically to `dashboard/archive.md`, off the pane.

**Status chips:** start any cell with one of these tokens and it renders as a colored chip: `{live}` (in motion), `{warm}` (the customer responded), `{user}` (waiting on the seller; the chip shows their name), `{them}` (waiting on someone else), `{gated}` (blocked on a prerequisite), `{parked}` (deliberately later), `{closed}` (lost or dead), `{done}`, `{watch}`. Links: `[label](https://url)` inside any cell.

**Writing the rows is the craft.** Status in plain words, in their company's stage terms. Next step concrete enough to start. No history trails. If a row needs three sentences of backstory, the backstory belongs in the deal file and the row gets a pointer.

## Step 3 - The builder script

Save this verbatim as `tools/build_dashboard.py`. It is deterministic and costs nothing to run. Python 3, standard library only.

Then set the two variables at the top: `OWNER` (the seller's first name) and `OS_NAME` (their pane's name), both from Step 1. **Those two assignments are the only per-user edit in the file.**

```python
#!/usr/bin/env python3
"""Single-pane dashboard generator.

Reads dashboard/data/*.json (current state, updated the moment state
changes) and writes one self-contained tabbed HTML file at
dashboard/dashboard.html. Deterministic: run it any time.

    python3 tools/build_dashboard.py

Serve it live with tools/serve_dashboard.py (see dashboard/README.md).

Cell syntax in data files:
  "{live}Proposal sent 9/30"   -> status chip + text
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
OWNER = "User"     # the seller's first name: their status chip + archive notes
OS_NAME = "MY SALES OS"  # masthead brand and page title

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
    if not section.get("rows"):  # note-only section
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
    """Top-of-tab moves: the seller's first, Claude's second. Items are [action]
    or [action, context]."""

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
    the data file. The archive is readable on request, never rendered."""
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
            f"({len(q)} queued, in reading order)</summary><ol>"
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
  setTimeout(function () {{ location.reload(); }}, 60000);
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

## Step 4 - Serve it live

**The pane must move by itself from the day it is born, so build the live server, not a static page someone has to remember to refresh.** The server listens only on the seller's own Mac (127.0.0.1). Nothing is reachable from outside it.

Create `tools/serve_dashboard.py`:

```python
#!/usr/bin/env python3
"""Live single-pane server.

Serves the dashboard at http://localhost:8787 and keeps it live: it rebuilds
dashboard.html whenever any data/*.json changes, and the served page polls
/version every 3 seconds and reloads itself.
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

The reload script is added at serve time only, so `dashboard.html` on disk stays clean. Register the server in `.claude/launch.json` so "show me the pane" opens it in the side panel:

```json
{
  "version": "0.0.1",
  "configurations": [
    {
      "name": "single-pane",
      "runtimeExecutable": "python3",
      "runtimeArgs": ["tools/serve_dashboard.py"],
      "port": 8787
    }
  ]
}
```

Warn the seller before you start it: a box may ask whether Claude can run the server. That is expected, click Allow.

## Step 5 - Make it survive

1. Write a short `dashboard/README.md`: where the data lives, how to build, how to serve, and the refresh rule.
2. **Add refresh-on-change to CLAUDE.md standing behaviors:** whenever a session changes real state, it updates the data files in the same breath, not at wrap and not "later."
3. Session wrap remains the backstop: reconcile the tracker against reality and sweep the data files for anything missed.
4. First live test: change one status in a data file while the seller watches the pane, and let them see it move on its own.

## Guardrails (non-negotiable)

- Never invent a status. If you do not know the current state of a deal, write UNVERIFIED in the row and go check, or ask the seller.
- The pane never becomes the place work is tracked. Tracker first, pane second, always.
- If a row says something was sent or updated, verify it against the sent folder or the CRM before writing it, or mark it "per the seller."
- Personal one-on-one notes, HR and pay matters, and anything the seller excluded never appear on the pane. Do not helpfully add them back.
- The pane is not published, shared or copied off the machine without the seller's yes and the company's rules allowing it.

**Done when:** the seller opens one link, sees each area of their work as a tab, their single next step on top, and says the statuses are true.

---

*(c) Kerzie AI Solutions. For one seller's own use. Do not redistribute the document itself.*
