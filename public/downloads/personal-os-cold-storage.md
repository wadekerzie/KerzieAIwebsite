# Personal OS Behavior Note - "Cold Storage"

Released September 2026 · For every plan · **Highly recommended.** This is not an install
of something new - your OS already has a hot memory and a briefing file. This note teaches
your AI to keep that hot layer small without ever deleting a word, because the alternative
is a briefing that grows until every session starts slow and expensive.

> **If you are a human reading this, you are in the wrong place.** This document is
> written to your AI, not to you. Go to **kerzie.ai/downloads**, copy the install line
> for this note, and paste it into your Code tab. Your AI reads this; you do not have
> to.

---

**TO THE CLAUDE READING THIS - you are the installer. LOOK, then TELL, then GO:**

1. **LOOK.** Measure the hot tier: run a byte count on the operating manual (CLAUDE.md or
   equivalent) and on the memory index if one exists. Read both and answer one question
   honestly: how much of what loads at every session start is HISTORY - old receipts,
   finished sagas, superseded numbers, the story of how a rule was born - versus RULES
   and CURRENT STATE the next session actually needs to act?
2. **TELL the user why this matters, in plain sentences, once:** the briefing file loads
   into every single session, so every byte of history in it is paid for every day. But
   deleting history is worse - the wording of an old decision, the reason a rule exists,
   the number that got superseded, those all matter the one day you need them. The answer
   is neither. It is three shelves: HOT knows and points, WARM holds the working files,
   COLD keeps everything retired - whole, grep-able, forever. Text is nearly free. An
   entire business OS fits in half a gigabyte. Storage is never the reason to lose a word.
3. **WRITE three behaviors into the operating manual, in its own style:**
   - **The hot tier carries rules and current state only.** When a section of the
     briefing grows a history - the story of how the price changed, the experiment that
     got retired, the receipts behind a rule - move that history WHOLE into the project's
     own file and leave one pointer line behind. The rule stays. The story moves.
   - **Build the cold shelf and never delete again.** Create a cold folder in the
     workspace (a name like `memory_cold/` works). Anything retired from hot or warm
     memory moves there complete, with a dated one-line header saying why it moved.
     Before ever telling the user something is unknown or lost, grep the cold shelf
     first - then the archives, then git history.
   - **Demote on approval, never silently.** The weekly tune-up (if this OS has one)
     measures the hot tier and PROPOSES demotions with the evidence quoted; the owner
     approves in one word; only then does anything move. If there is no weekly tune-up,
     make the proposal whenever the briefing file crosses a size the owner sets.
4. **RECORD + PROVE.** Append to `VERSION.md` (create it if missing):
   `Cold Storage - the three-shelf memory - applied <today's date>`. Then prove it: run
   the first supervised demotion pass on the briefing file and report the before and
   after byte counts to the user, with a one-line list of what moved where. Every moved
   block must be findable by grep in its new home before you call the pass done.

---

# Cold Storage - Your AI's Briefing Should Not Be a Scrapbook

**To the person receiving this:** your OS keeps a briefing file your AI reads at the
start of every session. It is the most valuable file you own, and it has one natural
enemy: it only ever grows. Every win, every changed price, every lesson gets written in,
and six weeks later your AI is re-reading the whole story of your business before it
answers a two-line question. You pay for that reading every single day.

The obvious fix is the wrong one. Trim the file and you will eventually cut the one
sentence that mattered - the reason a rule exists, the old number a client still
references, the wording of a decision you made in July. I have watched a "cleanup"
cost more than the bloat it removed.

The real fix is how a good operation has always handled paper: three shelves.

- **Hot** is the front page - rules and what is true right now. It loads every session,
  so it stays lean on purpose.
- **Warm** is the filing cabinet - the working files your AI opens when a job touches
  them, and not before.
- **Cold** is the storage room - everything retired, kept whole, dated, and searchable.
  Nothing is ever thrown away. It just stops riding along every day.

This note teaches your AI the three-shelf habit: history moves out of the front page
with a pointer left behind, retired material lands in cold storage complete, and nothing
moves without your one-word approval. The day something old matters again, your AI greps
the storage room and it is right there - full wording, original dates.

The receipt, from the OS this note came out of: the day we ran the first pass, the
briefing file went from 52KB to 33KB - a third of every session's overhead gone - and
not one sentence was lost. The whole original sits on the cold shelf, findable in
seconds. Faster every morning, and nothing forgotten. That is the whole trade, and you
give up nothing to make it.

One number to keep in your head: a full business OS - every file, every archive, every
retired experiment - is about half a gigabyte. Your phone carries a hundred times that
in photos. Storage is free. Your AI's attention is not. Put the weight where it costs
nothing.
