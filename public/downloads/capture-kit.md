# The Capture Kit

**From Kerzie AI. Ten minutes of setup, one habit: you never have to remember
what you were thinking an hour ago.**

Your best thinking does not happen at your desk. It happens in the car, the
grocery store, the golf cart, walking around the house. An hour later it is
gone. After this setup, the flow is: talk into your phone, two taps, and the
thought is waiting in your workspace the next time you sit down with your AI.
It reads what you said, connects it to what you are working on, and tells you
what to do about it.

Works with whatever AI you already use: Claude, ChatGPT, Gemini, or anything
that can read a pasted transcript. iPhone today; if enough people ask, an
Android version follows.

Two rules that make it work:

1. **Capture everything.** Do not judge a thought while you are having it.
   Rambling is allowed. Finding the signal is the AI's job.
2. **Never organize.** No folders, no tags, no cleanup. That is the machine's
   job.

---

## Part 1 - Turn on Voice Memos transcripts (2 minutes)

1. Open **Voice Memos** on your iPhone and record a 10 second test. Say
   anything.
2. Tap the recording, then tap the **transcript icon** (the quotation mark
   symbol) or the **three dots** menu. If you see your words as text, Part 1
   is done.
3. No transcript? Settings, then Voice Memos: make sure transcription is on.
   Older iPhones may need an iOS update.

## Part 2 - Create your Capture Inbox folder (1 minute)

1. Open the **Files** app on your iPhone.
2. Go to **iCloud Drive** (the top level, not inside any app's folder).
3. Tap the three dots, then **New Folder**. Name it exactly: **Capture Inbox**

That folder now exists on your computer too, automatically, wherever iCloud
Drive lives on it.

## Part 3 - Build the two-tap Shortcut (5 minutes, once, use forever)

You are building ONE shortcut that contains several actions stacked like steps
in a recipe. You tap the plus sign exactly once, then stay on that screen
adding actions. When you finish, your shortcut list should show exactly one
new shortcut.

1. Open the **Shortcuts** app and tap **+** to create a new shortcut. (The
   only time you tap plus.)
2. Tap **Add Action**, search **"Get Clipboard"**, add it.
3. Tap **Add Action**, search **"Format Date"**, add it. **Now the step that
   catches almost everyone:** because it sits under Get Clipboard, this action
   auto-fills as "Format **Clipboard**" with a blue Clipboard token in its top
   line. Left that way, it will try to turn your spoken words into a calendar
   date and fail with "couldn't convert from Text to Date." Tap that blue
   **Clipboard** token and choose **Current Date** so the line reads "Format
   **Current Date**." Then set format **Custom** and type exactly:
   `yyyy-MM-dd_HHmm`
4. Tap **Add Action**, search **"Save File"**, add it. Two more auto-fill
   traps live here:
   - **WHAT gets saved:** the card auto-fills as "Save **Formatted Date**",
     which would save the timestamp instead of your words. Tap the blue
     **Formatted Date** token right after "Save" and switch it to
     **Clipboard**.
   - **WHERE it saves:** it defaults to the Shortcuts folder. Tap the small
     arrow to expand the action: Service **iCloud Drive**, Ask Where to Save
     **OFF**, and for the Destination Path type `/Capture Inbox/` then tap the
     blue **Formatted Date** variable bubble (do not type brackets) and add
     `.txt` after it.
5. Name the shortcut **Capture** and pick an icon you will recognize.
6. Make it one tap from anywhere: the shortcut's three-dots menu, then **Add
   to Home Screen**.

## Part 4 - The daily flow (this is the whole habit)

1. Thought arrives. Open **Voice Memos**, hit record, talk until you are done.
2. Stop. Tap the transcript, then the three dots, then **Copy Transcript**.
3. Tap your **Capture** icon.

Done. The thought is a dated text file in your Capture Inbox, on your computer
before you get home.

## Part 5 - Teach your AI to process the inbox (3 minutes)

**If your AI can read files on your computer** (Claude Code, Claude desktop
with file access, or similar): add this to your project instructions, or save
it as a note to paste:

    When I say "process my inbox":
    1. Read every .txt file in the Capture Inbox folder in my iCloud Drive
       (ignore the "processed" subfolder).
    2. For each file: summarize what I was thinking, connect it to my current
       projects, and propose the concrete next step, or say honestly that it
       is just a musing worth keeping.
    3. Ask me before acting on anything. Capturing is not approval.
    4. Move each handled file into a "processed" subfolder so the inbox stays
       empty.
    5. Give me one short report: what came in, what it means, what you
       suggest.

**If your AI is chat-only** (ChatGPT or Gemini in the browser): open the
newest file in your Capture Inbox, copy it, and paste it into a chat that
starts with:

    This is a raw voice memo transcript from my capture inbox. Summarize what
    I was thinking, connect it to what you know I am working on, and propose
    the concrete next step. Typos are fine; read through them.

## Part 6 - The first real test

1. Record a real voice memo right now. An actual thought about your work, not
   a test phrase.
2. Copy the transcript and tap Capture.
3. Have your AI process it.
4. Watch it read your thought back to you, connected to your work, with a
   suggested next step.

That moment, your grocery store brain talking to your desk brain, is the
system. Feed it daily.

## If something does not work

- **"Conversion Error: couldn't convert from Text to Date":** the Format Date
  action is trying to format your words. Part 3 step 3: switch its blue
  Clipboard token to Current Date.
- **The saved file contains only a date, not your words:** Save File is saving
  Formatted Date instead of Clipboard. Part 3 step 4, first trap.
- **Files land in the Shortcuts folder:** Save File's Service is still set to
  Shortcuts. Part 3 step 4, second trap.
- **Nothing shows up on the computer:** give iCloud a minute; confirm both
  devices use the same Apple ID with iCloud Drive on.
- **The transcript has typos:** fine. Your AI reads through typos better than
  you do. Capture beats accuracy.

---

*Free from Kerzie AI (kerzie.ai). If you want the full working environment
this feeds into, The One-Window Setup is the complete framework in one
document: kerzie.ai/one-window. And if you want it built WITH you, that is
the AI Fast-Track Session.*
