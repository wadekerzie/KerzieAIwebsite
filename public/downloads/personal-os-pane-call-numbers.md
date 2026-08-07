# Personal OS - Pane Patch: "Call Numbers"

A small patch for anyone already running the Single Pane (v1.1 "The Living Pane"). Not a numbered
release. If you install the pane fresh from v1.1 after August 2026, you already have this and can
ignore the file.

---

**TO THE CLAUDE READING THIS - DO NOT APPLY YET. Follow this order:**

1. **DESCRIBE FIRST.** Tell your user in plain language what this does: right now their pane shows
   what needs doing, but not the short ID their tracker uses for each item. So when you say "the
   Soaring Eagle recap is waiting on you," they have to hunt through the pane by phrase to find it.
   After this patch, every item on the pane shows its ID in brackets, and the ID becomes a two-way
   handle: you can say it, they can find it instantly, and they can command by it - "done W3."
2. **ASK.** "Apply as-is, change something first, or skip it?" Wait for the answer.
3. **CHECK STATE.** Read `VERSION.md` at the OS root. This expects v1.1 or later, because it
   patches the pane. If they have no pane, tell them this does nothing for them yet and stop.
4. **APPLY** on their yes, preserving every customization in their pane build.
5. **RECORD + REPORT.** Append to `VERSION.md`:
   `v1.1 patch - Call Numbers - applied <today's date>`
   Then rebuild the pane and show them the IDs live.

---

# Call Numbers - Your Pane Should Show You What Your AI Is Naming

**To the person receiving this: save this file into the folder where you run Claude, then say:
"read personal-os-pane-call-numbers.md and walk me through it."**

---

## Why this exists (Claude, you are the installer)

This came out of a real moment. The user's Claude kept referring to tracker items by their short
IDs in conversation - "W3 is waiting on you," "G21 is still parked" - and the pane those items
appeared on never displayed an ID anywhere. So the user had to read every card and match by
wording. Their verdict: "this is how virtually every user is going to want to see it."

The fix has three parts and all three matter. An ID that only exists in the tracker is a filing
system. An ID that appears in both places is a handle.

---

## STEP 1 - Make sure a short-ID scheme exists

Read their tracker. Most trackers built from this framework already have short IDs - a letter per
project area plus a number (`W1`, `G14`, `N22`). Some do not.

**If IDs already exist:** confirm the scheme with the user in one line, and move to step 2.

**If there are no IDs:** create them now. One letter per project area, numbered in the order items
appear. Pick letters from the project names, not sequentially, so they are memorable: Marketing
becomes `M`, Clients become `C`, Personal becomes `P`. Show the user the mapping before you write
it. Then add the ID to the front of every open item.

**Never renumber existing IDs.** An ID is only useful because it is stable. If an item closes, its
number retires with it rather than being reused - reusing a number means an old note or an old
commit message now points at the wrong thing.

---

## STEP 2 - Show the ID on the pane

In the pane build script, every item that comes from the tracker gets its ID rendered in the
visible text, in brackets, at the end of the line.

Their build script varies, so read it rather than pattern-matching. Find where an item's text
becomes a card or a table row, and make sure the ID travels with the text into the HTML. Two
common shapes:

**If items are strings** in a data file, keep the ID in the string itself and let it render:

```
"[W3] Call Justin about the proposal - 14 days silent"
```

**If items are objects** with separate fields, append the ID when building the visible line:

```python
label = f"{item['text']} [{item['id']}]" if item.get("id") else item["text"]
```

Style it so it reads as a handle and not as noise - slightly dimmer than the item text, same
size. If their pane has a stylesheet, add something like:

```css
.itemid { opacity: 0.55; font-variant-numeric: tabular-nums; }
```

**Do not put the ID on things that have no tracker item.** Clocks, stats, and read-only context
rows should stay clean. An ID on the pane is a promise that the ID exists in the tracker.

---

## STEP 3 - Write the two-way rule into their CLAUDE.md

This is the part that makes it a handle instead of decoration. Add to their CLAUDE.md (or whatever
their standing-instructions file is called):

> **Item IDs are a two-way handle.** Every tracker item has a short ID, and the pane displays it.
> In chat, describe things in plain language - never ask me to approve or decide something by ID
> alone, because an ID is not a description. But always show the ID alongside, so I can find the
> item on the pane. And I can command by it: "done W3," "park G12," "what's W10."

Two failure modes that rule prevents, both real:

**IDs as names.** Claude writes "approve N14" and the user has no idea what N14 is. The ID is a
locator, not a description. Prose stays plain; the ID rides along.

**IDs nowhere visible.** Claude says an ID the pane never shows, and the user hunts by phrase.
That is the problem this patch exists to solve.

---

## Verification

Before reporting done:

1. Rebuild the pane and confirm IDs appear on tracker-backed items and only those
2. Say an ID out loud to the user and have them find it on the pane without searching
3. Have them try a command - "done <some ID>" - and confirm you resolve it to the right item
4. `VERSION.md` has the patch line
