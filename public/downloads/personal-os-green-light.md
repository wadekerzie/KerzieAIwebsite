# Personal OS Upgrade - "The Green Light"

Released August 2026 · For any Personal OS built from the original one-window setup ("The Foundation") or later. Nothing else is required. This upgrade only matters once you have scheduled routines, and it is the fix for the most common complaint about them: they stop and ask permission instead of just running.

> **If you are a human reading this, you are in the wrong place.** This document is
> written to your AI, not to you. Go to **kerzie.ai/downloads**, copy the install line
> for this upgrade, and paste it into your Code tab. Your AI reads this; you do not
> have to.

---

**TO THE CLAUDE READING THIS - you are the installer. This is the one upgrade that always
asks a question, because its whole job is deciding what never asks again. LOOK, then TELL,
then ONE yes/no:**

1. **LOOK FIRST, before saying anything.** Read `VERSION.md` at the OS root, then find
   their scheduled routines and run the inventory in Step 1 below: which tools each
   routine needs, every path it touches, and which of those paths sit outside their OS
   folder. Do the looking before the telling - the user gets findings, not process.
2. **ALREADY INSTALLED, OR NOTHING TO DO?** If `VERSION.md` already lists The Green
   Light, tell them in one line and stop. If they have no scheduled routines yet, tell
   them this upgrade has nothing to do until they do, offer to apply it anyway so it is
   ready for their first routine, and let them choose. Do not invent routines to
   justify the install. (VERSION.md missing = the baseline Foundation. That is normal -
   proceed, and create it in step 5.)
3. **TELL THEM WHAT YOU FOUND, THEN ASK THE ONE QUESTION.** In plain language, not JSON:
   their routines by name, exactly what you will allow (built from Step 1's inventory,
   per Steps 2 through 5 below), and the honest trade-off - those specific things stop
   asking for approval, that is the entire point, and anything destructive stays
   blocked no matter what. Then ask one question: "Want me to green-light these?" A yes
   means exactly that list, nothing more. If they say no, stop entirely. Do not offer a
   menu of variations - if they want something different, they will say so, and
   adapting to what they say is welcome.
4. **APPLY** on their yes, following the steps below. Never replace a settings file
   wholesale. Read it, add to it, write it back, and leave every existing setting
   exactly as you found it.
5. **RECORD + PROVE.** Append to `VERSION.md`: `The Green Light - applied <today's date>`
   (create the file if missing, first line: `v1.0 - The Foundation - original setup`).
   Then prove it per Step 7 below: run one of their routines right now and watch it
   finish without prompting. Report per "What to tell them at the end." Removing this
   later means deleting the entries it added from the two settings files and noting the
   removal in VERSION.md.

---

# The Green Light - Your Routines Should Run Without Asking

## Why this exists (Claude, you are the installer - read carefully)

A scheduled routine that stops to ask permission is not a routine. It is a reminder that
something did not happen.

Your user set up a morning brief. It was supposed to pull a few numbers, update a file, and
have the answer waiting. Instead they open their laptop and find it frozen on "can I edit this
file?" from six hours ago. The work did not get done, and worse, they now distrust the whole
idea of automation.

They have almost certainly already tried the obvious fix. Most people find the permission mode
setting, switch it to allow everything, and are baffled when the prompts keep coming.

**Here is what they could not have known.** There are three separate gates, and the mode
setting only opens the first one.

**Gate one is the mode.** This lives on their computer, not in their OS folder, at
`~/.claude/settings.json`. If it is not set, every session starts cautious.

**Gate two is the tool list.** Their OS folder has its own settings at
`<their OS folder>/.claude/settings.json`. Even in the permissive mode, individual tools can
still prompt unless they are named. Fetching a web page is the one that catches people,
because it is the thing every daily brief does.

**Gate three is the one nobody finds on their own, and it is usually the real culprit.**
Anything outside their OS folder is gated no matter what the other two say. If their routine
writes to a file on their Desktop, or reads from a folder somewhere else on the machine, no
permission mode will ever stop that prompt. The folder has to be named explicitly. Someone can
spend a week toggling modes and never find this, because nothing in the error tells them the
problem is the file's location rather than the permission level.

So: check all three. Fix all three. Then show them it works.

---

## Step 1 - Inventory what their routines actually do

Do not skip to writing settings. Look first.

Find their scheduled routines. Read what each one is instructed to do, and build a list of:

- **Which tools each routine needs.** Reading files, editing files, writing files, fetching web
  pages, searching the web, running specific commands, calling connected services.
- **Every file path each routine touches.** Write these down exactly.
- **Which of those paths sit outside their OS folder.** This is gate three, and this list is
  the most valuable thing you will produce in this whole install.

If a routine's instructions are vague about what it touches, say so rather than guessing. Ask
your user, or grant the narrower thing and tell them what you left out.

## Step 2 - Show them the list before you write anything

Put it in front of them in plain language. Not JSON. Something like:

> Your two daily briefs need to: read and edit files in your OS folder, fetch pages from the
> web, and write to a file in your Documents folder, which is outside your OS. I am going to
> allow exactly those four things. Everything else still asks.

Then let them correct it. They may know a routine is about to change, or that a folder should
not be reachable. This is thirty seconds and it prevents the version of this upgrade where
they later find something they did not expect.

## Step 3 - Open gate one, the mode

In their personal settings at `~/.claude/settings.json`, ensure the permission mode is set so
sessions do not start cautious, and that the automatic permission prompt is suppressed. Read
the existing file first and merge - do not overwrite it, and do not disturb any other setting
you find in there.

## Step 4 - Open gate two, the tool list

In their OS folder's settings at `<their OS folder>/.claude/settings.json`, add an allow list
built **from step 1, not from a template.** Name the specific tools their routines actually
use. If none of their routines run shell commands, do not add shell commands.

### ALLOW WEB FETCHING AS A TOOL. NEVER DOMAIN BY DOMAIN.

**This is the single most common way this upgrade fails, and it fails silently.** If a routine
reads the web, put the **fetch tool itself** on the allow list. Do not enumerate the sites it
visited yesterday.

**The receipt, from a real user five days in (2026-08-12).** He ran this upgrade, kept the send
gate on exactly as designed, and his morning brief still stopped every single day asking to pull a
web page. His allow list had grown to **28 individual news domains** and it was never going to be
enough - a news brief reads whatever is in the news, so tomorrow always brings a domain nobody
approved. In his words: *"I click allow, it adds to the allow list, but inevitably there are new
webpages to pull from each day."*

**Per-domain permission cannot work for any routine whose sources change**, which is most briefs,
monitors, research jobs and watchers. Enumerating domains produces a list that is always one day
stale, and a scheduled run has nobody sitting there to click Allow, so it just pauses until the
user next opens the app.

**So: allow the fetch tool.** If the user is uneasy about that, the honest framing is that reading
a public web page is not the risky action - sending, posting, spending and deleting are, and those
are handled in Step 6 by a rule the software enforces rather than by a prompt nobody is awake to
answer.

Scope **command** permissions narrowly - a specific command pattern is right, all shell commands is
not. **Reading tools are the opposite case: scope them by tool, not by target.**

## Step 5 - Open gate three, the folders outside their OS

Take the outside-the-OS path list from step 1 and add those directories to the same project
settings file, as additional directories the OS is permitted to reach.

**Add the specific folders. Never add the whole home directory or the whole drive.** If a
routine writes one file to Documents, the folder that gets added is the one containing that
file, not everything on the machine.

If this list is empty, say so out loud when you report. "Nothing your routines touch lives
outside your OS folder" is useful information, because it means gate three was never their
problem and if prompts continue, the cause is elsewhere.

## Step 6 - The refusal list

Some things do not go on an allow list, and you refuse them even if asked:

- Deleting files, emptying trash, or any destructive file command
- Anything running as administrator
- A blanket wildcard that allows every shell command
- Anything that sends, publishes, or spends on their behalf without them seeing it first

If a routine genuinely needs one of these to work, do not grant it. Tell your user which
routine it is and what it wants, and let them decide with their eyes open. A routine that
sends email should stop and ask every single time, and that is not a bug.

### DENY THE DANGEROUS THINGS EXPLICITLY. DO NOT RELY ON A NARROW ALLOW LIST TO DO IT.

**This is the architecture, and getting it right is what lets Step 4 be generous.**

There are two ways to keep a user safe. The weak way is to allow almost nothing, so anything risky
happens to fall outside the list - which is what produces routines that stop every morning on
harmless things while the user learns to click Allow without reading. The strong way is:

> **Open the reading and working tools wide, and put an explicit, enforced DENY on the small number
> of actions that can actually hurt them.**

So alongside the allow list, write a **deny** rule covering external sends, public posts, spending,
and destructive file operations. A deny rule outranks any allow rule, so it holds even if a later
allow entry is written carelessly - and it holds without a human awake to enforce it.

**This came from a customer, not from us (2026-08-12).** Working through why his routines kept
pausing, his own assistant proposed exactly this and put it better than we had: a *"system-enforced
hard gate on external sends and posts... backed by the software instead of just my word,"* giving
*"routines run hands-free, and no email or post can go to the outside world without your explicit
yes, enforced, not promised."*

**Say that distinction out loud to your user, because it is the whole point of this upgrade.** A
promise depends on an assistant remembering. A deny rule is enforced by the software whether
anything remembers or not. **That is what makes it safe to stop asking about the harmless things.**

## Step 7 - Prove it works

Do not declare victory from a settings file. Run one of their routines manually, right now,
and watch what happens.

- If it completes without prompting, tell them, and name the routine you ran.
- If it still stops, **read the prompt carefully - it names the thing being blocked.** Match
  that against the three gates. A file path in the prompt that sits outside their OS folder
  means gate three needs another folder. A tool name means gate two needs that tool.
- Fix it, run it again, and keep going until it runs clean or you hit something on the refusal
  list. If it is on the refusal list, that is the correct outcome, and you explain why.

---

## What to tell them at the end

Keep it short and concrete. They want to know it is handled.

1. **Which routines will now run unattended**, by name.
2. **What you allowed**, in plain language, in one or two sentences.
3. **Anything that will still stop and ask, and why.** Especially anything on the refusal list.
   Frame this as intentional, because it is.
4. **What tomorrow looks like.** For a morning brief, that is: "the answer will be waiting when
   you sit down instead of a question."

Then tell them the one thing to watch: if they later add a routine that touches a new folder or
a new tool, it may stop and ask, and the fix is to tell you and you will add it. This is not a
one-time thing they have to relearn - it is one sentence to you.

---

## What this upgrade does not do

- It does not change what any routine does. Their instructions are untouched.
- It does not grant blanket permission for everything. It grants what their routines need.
- It does not turn off approval for sending, publishing, or spending.
- It does not touch their content, tracker, notes, or data.

## If prompts continue after all three gates are open

Two things to check before assuming something is broken:

- **A few actions are gated by the app itself and no settings file overrides them.** If you hit
  one, say so plainly rather than editing settings in circles. Tell your user which action it
  is so they know to expect one click.
- **The permission selector in the session window governs the session in front of them, not a
  routine running on its own.** A routine has no window. It reads the settings files. If their
  interactive session behaves differently from their scheduled one, that difference is the
  reason, and it is expected.
