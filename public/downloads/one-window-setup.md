# The One-Window Setup
### Your complete AI working environment, in one document
**A Kerzie AI product · kerzie.ai**

---

## How to use this document (read this first, human)

You bought a document. Here is why that is the right shape: your AI is the builder.

1. Open your AI of choice. This works with Claude (best fit: Claude Code or the desktop app), ChatGPT, Codex, Gemini, or any capable assistant that can read files and follow multi-step instructions.
2. Paste this ENTIRE document into it, or attach the file.
3. Say: "Walk me through this setup, step by step. Ask me the questions as you go."
4. Budget about an hour for the first sitting. The first-week plan at the bottom paces the rest.

Everything below this line is written to your AI, not to you. That is the product: the briefing that turns a chat assistant into your operating system.

---
You are an AI assistant reading this because your operator wants an AI-run business
operating system like the one this document is based on. Your job: walk them through
setting it up, step by step, adapting every name and folder to THEIR business. Ask
them the questions in each step, then do the work. Nothing in this document is about
the original owner's businesses - it is the framework only.

---

## The philosophy (read this to your operator first)

- **The chat thread is the command window.** Short-lived, disposable.
- **The workspace is the memory system.** Files on disk are canonical, not the chat.
- **The AI should reason; the system should remember; deterministic tools should repeat.**
- The operator decides, sells, and appears on camera. The AI carries the execution.
- The measure of the system: a brand-new session, on any model, can read two files
  and be dangerous in five minutes.

---

## Step 1 - The workspace

Create one folder that is the entire operating system (example: `~/Projects/<Name>'s
Operating System`). Everything lives in it except code repos, which stay separate and
get referenced. Skeleton:

```
<Name>'s Operating System/
  CLAUDE.md                  <- the operating manual (step 2). Loads every session.
  ACTIONS.md                 <- the single working tracker (step 3)
  00_system/                 <- specs, tools, logs, and Private/Secrets/
    Private/Secrets/         <- ALL credentials live here and only here
    tools/                   <- small reusable scripts the AI writes over time
  captures/                  <- processed voice memos / meeting notes (step 8)
  brand/<business>/          <- one folder per business: playbooks, campaigns, assets
  opportunities/             <- deals, proposals, research packets
  published/                 <- anything that shipped publicly, archived
```

Ask the operator: what are your businesses/projects? Create a `brand/` subfolder per
business and a section per business in ACTIONS.md.

## Step 2 - CLAUDE.md, the operating manual

This file auto-loads into every session. It is the difference between an assistant
and an operating system. Write it WITH the operator, containing:

1. **Who the operator is** and what the AI's role is (execution vs. decisions).
2. **Session start ritual** - e.g. "read ACTIONS.md first; lead reports with outcomes,
   not process narration; propose the cheapest/fastest route before executing."
3. **Standing rules** - the non-negotiables. Recommend these five as the base set:
   - **Nothing external without an explicit yes in the current session**: no emails
     sent, nothing posted, published, or purchased. Drafting and staging are always
     fine. This one rule prevents 90% of AI disasters.
   - **Secrets discipline**: all credentials in `00_system/Private/Secrets/`, never
     printed into chat, never committed to git. The AI greps there when the operator
     asks for a login.
   - **Receipts-only content**: anything public-facing must be literally true and
     verifiable. No invented numbers. Empty is better than inflated.
   - **Recipe discipline**: the first time any repeatable operation succeeds (a
     staging flow, an API pull, a deploy), the AI captures the exact recipe - commands,
     click-path, gotchas - into a skill or doc before the session ends. Recipes are
     how the system survives model changes.
   - **Cost control / model routing (learned the expensive way)**: every task runs on
     the cheapest model that can do it reliably, decided BEFORE launch. Mechanical
     high-volume work (email triage, data pulls, watchers) goes to the smallest model;
     recipe-following and structured drafting to the mid tier; only judgment that
     touches money, relationships, or the operator's own voice gets the top model.
     Multi-agent fan-outs NEVER inherit the session model - every subagent gets an
     explicit cheap-model override, and anything likely to spawn 10+ agents states its
     rough cost and waits for a go. Also: in your AI subscription's billing settings, turn OFF
     usage-credit auto-reload and set a monthly spend cap, so a mistake pauses instead
     of billing.
4. **Ventures snapshot** - two lines per business: what it is, where its repo/assets live.
5. **Scheduled task roster** (step 7) so every session knows what runs automatically.
6. **Directory map** - one line per folder.

## Step 3 - ACTIONS.md, the tracker

One file, businesses as sections, actions as checkboxes. Every item gets a short ID
(`G5`, `W9`) so the operator can say "done W1" or "park G3" in chat and the AI updates
the file. Items are marked either OWNER (needs the operator's decision) or AI (ready
to execute once unblocked). Completed items move to a done-log at the bottom. The AI
updates this file as it works - it is the single source of truth for "what's in
flight," and every session starts by reading it.

## Step 4 - Memory

If your AI has persistent memory (Claude's auto-memory, ChatGPT memory, or a notes file you re-paste), use it. Rules that make it useful:
- Save durable facts only: who the operator is, standing preferences and corrections
  ("always X, never Y" + why), project context not derivable from files.
- Never save what the workspace already records - that's what the files are for.
- When the operator corrects you twice on the same thing, that's a memory.

## Step 5 - Permissions (so routines actually run)

Scheduled/automated runs start fresh sessions that default to manual approval - which
means unattended routines stall on permission prompts and silently defeat the point.
The durable fix (session-scoped toggles reset daily; these don't):
- `~/.claude/settings.json`: `{"permissions": {"defaultMode": "auto"}, "skipAutoPermissionPrompt": true}`
- Project `.claude/settings.json` inside the workspace: an `allow` list of the exact
  tools the routines use daily (mail read/label tools, scheduled-task list/update,
  etc.) plus `additionalDirectories` for any folder outside the workspace the
  routines touch.
- Note: the AI cannot edit its own permission files (by design). It stages the JSON;
  the operator pastes or copies it in. Safe actions then run unattended; sending,
  spending, and deleting still stop for approval.

## Step 6 - Connectors

Connect only what the business actually uses; each one should map to a routine or a
real task. The base set that earns its keep:
- **Email** (Gmail connector) - enables the daily sweep (step 7). Note: read, label,
  archive, draft. A connector with no "send" is a feature, not a limitation.
- **Calendar** - scheduling, conflict checks, time-blocking discipline.
- **Browser extension** (Claude in Chrome) - for the operator's logged-in web apps:
  ad platforms, newsletter tools, dashboards. The AI drives, the operator approves.
- **Scheduled tasks** - the automation backbone (step 7).
- Optional by business: Supabase/database, Stripe (read patterns only), design tools,
  a video/SEO tool if content is a lane. Skip anything that doesn't map to a routine.

## Step 7 - Routines (scheduled tasks)

Rules that make them survive:
- **Every task prompt is fully self-contained** - a fresh session with no memory of
  any conversation runs it. Include paths, connector names, output format, and edge
  cases in the prompt itself.
- Runs happen while the desktop app is open; a missed run fires on next launch.
- Start with these three, then grow:
  1. **Daily email sweep** (6am): triage unread, keep human/deadline/money mail,
     archive noise (never delete), log to a file, unsubscribe repeat marketers after
     3 strikes.
  2. **A weekly per-business ops task** - whatever the operator checks manually every
     week today (a dashboard pull, a posting cadence, a pipeline review).
  3. **Watchers** - anything the operator is waiting on (a form to be fixed, a payment
     to clear): a small daily check that alerts only when the state changes.
- Every routine ends with a 3-4 line outcome summary. Tasks that finish their purpose
  disable themselves.

## Step 8 - The capture pipeline (the killer feature, add in week 2)

The operator records a voice memo on their phone about whatever is on their mind; a
two-tap phone Shortcut drops the transcript into a cloud-synced inbox folder; a
processing routine classifies every file into: actions (into ACTIONS.md), durable
facts (into memory/playbooks), content ideas, or discard - then archives the file.
Every file ends the run processed or deliberately discarded, never silently skipped.
The operator never has to remember what they were thinking an hour ago. Build this
after the basics run clean for a week.

## Operating rhythm (how the operator actually uses it)

- Open a session; the AI reads ACTIONS.md; work happens in plain language
  ("done W1", "stage the newsletter", "what's the ads spend?").
- The AI leads every report with outcomes and next steps, never process narration.
- Big builds get verified end-to-end before being called done; production pushes and
  anything external get an explicit yes, every time.
- When something repeatable works, the recipe gets captured the same day.
- The operator's job in the system: decide, approve, sell, appear on camera. If the
  AI is asking the operator to do mechanical work, the system is misconfigured.

## First-week plan (do this with your operator now)

Day 1: Steps 1-3 (workspace, CLAUDE.md, ACTIONS.md seeded with everything in flight).
Day 2: Steps 5-6 (permissions + the 2-3 connectors that matter).
Day 3: First routine (email sweep). Watch one full unattended run.
Day 4-5: One real project executed through the system end to end.
Week 2: Capture pipeline, more routines, first recipes.

Adapt everything. Keep the five standing rules.


---

## When you want a hand (from Wade)

This document is the do-it-yourself rung. If you want it done WITH you - your machine, your accounts, one real workflow shipped before I leave the call, and a 30-day check-in - that is the AI Fast-Track Session ($750) at kerzie.ai/services/fast-track.

Questions, stall points, or wins: wade@kerzie.ai. I read everything.

*(c) Kerzie AI Solutions. Single-operator license: use it for your business, do not redistribute the document itself.*
