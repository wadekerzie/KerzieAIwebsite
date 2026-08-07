# Personal OS Upgrade v1.6 - "The Paper Trail"

Released August 2026 · For any Personal OS v1.0 ("The Foundation") or later. v1.1 through v1.5 are NOT required - upgrades are skippable by design. This one matters most if you have started creating scheduled tasks, but installing it early is free and means the record exists from your first task onward.

---

**TO THE CLAUDE READING THIS - DO NOT APPLY YET. Follow this order:**

1. **DESCRIBE FIRST.** Before touching anything, tell your user in plain language what this
   upgrade does: right now, the rules their automated tasks run on are stored in a folder
   outside their OS, with no version history. If one gets overwritten or deleted, there is no
   way to get it back and no way to see when it changed. This upgrade copies those files into
   their OS on a schedule so their own git history carries the record. Tell them what it
   touches (it adds one script and one folder to their OS, and adds a step to their wrap and
   weekly routines if they have them) and what it never touches: the live task files keep
   running exactly as they are, and nothing about how their tasks behave changes at all.
2. **ASK.** Then ask directly: "Apply as-is, change something first, or skip it?" Wait for the
   answer. Modifications are welcome - adapt the steps. If they decline, stop entirely.
3. **CHECK STATE.** Read `VERSION.md` at the OS root. This upgrade expects v1.0 or later. If
   VERSION.md is missing, this is a v1.0 Foundation OS and you are clear to proceed (you will
   create VERSION.md in step 5). If it already lists v1.6 or later, tell the user they already
   have this and stop.
4. **APPLY** on their yes, following the instructions below and preserving every customization
   you find.
5. **RECORD + REPORT.** Create or append to `VERSION.md` at the OS root:
   `v1.6 - The Paper Trail - applied <today's date>`
   (If the file is new, first line: `v1.0 - The Foundation - original setup`.)
   Then run the sync once, live, so the user sees exactly what was sitting outside their OS.

---

# The Paper Trail - Your Automation's Rules Should Not Live Somewhere You Cannot See

**To the person receiving this: save this file into the folder where you already run Claude
(the one with your CLAUDE.md and tracker in it), then tell Claude: "read
personal-os-v1.6-paper-trail.md and walk me through it."**

---

## Why this exists (Claude, you are the installer - read carefully)

There are two different `.claude` folders on your user's machine, and almost nobody notices
until something goes wrong.

**`~/.claude/`** is their personal Claude configuration. It belongs to their computer login,
not to any one project. Scheduled tasks live here.

**`<their OS folder>/.claude/`** is that project's own configuration. It is inside their OS
folder, so if their OS is a git repo, it already has history.

Scheduled tasks go in the first one **by design, and that is correct.** A task that fires at
3am has to run whether or not any particular folder is open. If it lived inside one project it
would only be that project's business, and the whole point is that it runs on its own.

Here is the problem that creates. Over time, a scheduled task's instructions stop being a
reminder and start being **operating policy**. They accumulate the rules that matter most:
what may send without asking and what may not, which model tier a job runs on, what a task is
forbidden from touching, and the exact recipe for an operation that took three tries to get
right the first time. That is real institutional knowledge. And all of it sits in a folder
their OS has no record of.

Nothing breaks. That is why it goes unnoticed. The tasks run fine every day. The gap only
becomes visible the moment somebody asks "when did this rule change, and who changed it?" -
and that question does not come up until something has already gone wrong.

**A worked example, from the OS this upgrade came out of.** A nightly task was given a hard
ban: never modify a particular production code repository, only read it. That single sentence
is the thing standing between an unattended 3am job and a live payment system. It was written
into a file with no version history, no diff, and no backup. If it had been lost, nothing would
have complained. The task would simply have started doing something it was never meant to do.

**This upgrade does not move those files.** They stay exactly where the harness expects them,
and they keep running exactly as they do now. It copies them into the OS so git carries the
history.

---

## What gets installed

1. `tools/sync_claude_config.py` - the mirror script
2. `claude_config_mirror/` - where the copies land, with a README that keeps the next person
   from being confused by them
3. One line added to the wrap routine and one to the weekly routine, if those exist

---

## STEP 1 - Check that this will actually help

Run these two checks first and tell the user the result before writing anything.

```bash
# Is their OS folder a git repo? Without git there is no history to write to.
git -C "<their OS folder>" rev-parse --is-inside-work-tree 2>/dev/null && echo "git: yes" || echo "git: NO"

# What is actually sitting outside their OS right now?
ls ~/.claude/scheduled-tasks/ 2>/dev/null | wc -l
ls ~/.claude/skills/ 2>/dev/null | wc -l
```

**If git says NO:** stop and tell the user plainly. This upgrade writes copies into their OS so
git can version them. Without a git repo the copies are just duplicates and buy nothing. Offer
to set up git first (`git init`, a first commit) and then come back to this. Do not install a
mirror into a non-repo and call it done.

**If the task count is 0:** that is fine and worth saying out loud. They have no scheduled tasks
yet, so there is nothing to lose today. Installing now means the record exists from their first
task onward rather than starting after they already have ten. Ask whether they want it now or
later. Either answer is reasonable.

---

## STEP 2 - Write the sync script

Save as `tools/sync_claude_config.py` inside their OS folder. Create `tools/` if it does not
exist. If they already have a different name for that folder (`scripts/`, `bin/`), use theirs.

```python
#!/usr/bin/env python3
"""Mirror ~/.claude operating logic into this OS so it has version history.

Scheduled-task prompts carry real operating policy - send gates, model tiers, hard bans,
and recipes that took several tries to get right. They live at ~/.claude/, outside this
repo, where nothing versions them. This copies them in so git carries the record.

DIRECTION IS ONE-WAY: live -> repo. The files under ~/.claude are the source of truth,
because that is where the harness reads them. The copies here are history and recovery,
never the thing that runs. Editing a copy changes nothing.

Deletions propagate: a task removed from ~/.claude disappears from the mirror, and git
keeps it in history, which is the recovery path.

Refuses to copy anything credential-shaped, so a task prompt that ever gains a hardcoded
key fails loudly instead of quietly committing it.

Usage:
    python3 tools/sync_claude_config.py           # report only
    python3 tools/sync_claude_config.py --apply   # write the mirror
"""

import filecmp
import re
import shutil
import sys
from pathlib import Path

HOME = Path.home()


def find_repo_root(start: Path) -> Path:
    """Walk up from this script to the git root, so the script works wherever it is put."""
    for parent in [start] + list(start.parents):
        if (parent / ".git").exists():
            return parent
    raise SystemExit(
        "Could not find a git repository above this script.\n"
        "The mirror only helps inside a git repo. Run `git init` in your OS folder first."
    )


REPO = find_repo_root(Path(__file__).resolve().parent)
MIRROR = REPO / "claude_config_mirror"

# (source path, mirror subdirectory, glob or None for a single file)
SOURCES = [
    (HOME / ".claude" / "scheduled-tasks", "scheduled-tasks", "**/*.md"),
    (HOME / ".claude" / "skills", "skills", "**/*.md"),
    (HOME / ".claude" / "settings.json", "settings.json", None),
]

# Files the mirror owns that have no upstream source, so the deletion sweep skips them.
MIRROR_OWNED = {"README.md"}

# Vault PATHS (Secrets/foo.env) are fine and deliberately not matched here - a path is a
# reference, not a value. These patterns catch actual embedded credentials.
SECRET_PATTERNS = [
    r"sk-[a-zA-Z0-9]{12,}",
    r"sk_live_[a-zA-Z0-9]+",
    r"sk_test_[a-zA-Z0-9]+",
    r"pk_live_[a-zA-Z0-9]+",
    r"ghp_[a-zA-Z0-9]{20,}",
    r"xox[baprs]-[a-zA-Z0-9-]{10,}",
    r"AIza[0-9A-Za-z_-]{20,}",
    r"eyJ[A-Za-z0-9_-]{20,}\.[A-Za-z0-9_-]{20,}",
    r"-----BEGIN [A-Z ]*PRIVATE KEY-----",
    r"(?i)\b(api[_-]?key|secret|token|password)\s*[:=]\s*['\"][^'\"\s]{16,}['\"]",
]
COMPILED = [re.compile(p) for p in SECRET_PATTERNS]


def scan_for_secrets(path: Path):
    try:
        text = path.read_text(encoding="utf-8", errors="strict")
    except (UnicodeDecodeError, OSError):
        return []
    hits = []
    for i, line in enumerate(text.splitlines(), 1):
        for rx in COMPILED:
            if rx.search(line):
                hits.append((i, rx.pattern))
    return hits


def collect():
    found, missing = {}, []
    for src, sub, glob in SOURCES:
        if not src.exists():
            missing.append(src)
            continue
        if glob is None:
            found[sub] = src
            continue
        for f in sorted(src.glob(glob)):
            if f.is_file():
                found[str(Path(sub) / f.relative_to(src))] = f
    return found, missing


def main():
    apply = "--apply" in sys.argv
    found, missing = collect()

    for m in missing:
        print(f"  note: {m} does not exist, skipping")

    blocked = {rel: hits for rel, src in found.items() if (hits := scan_for_secrets(src))}
    if blocked:
        print("\nREFUSING TO SYNC - credential-shaped content found:")
        for rel, hits in blocked.items():
            for lineno, pat in hits[:3]:
                print(f"  {rel}:{lineno}  matched /{pat}/")
        print("\nMove the value into a gitignored secrets file and reference it by path")
        print("instead, then re-run. Nothing was written.")
        return 1

    existing = {}
    if MIRROR.exists():
        for f in MIRROR.rglob("*"):
            if f.is_file():
                rel = str(f.relative_to(MIRROR))
                if rel not in MIRROR_OWNED:
                    existing[rel] = f

    new = [r for r in found if r not in existing]
    gone = [r for r in existing if r not in found]
    changed = [
        r for r in found
        if r in existing and not filecmp.cmp(found[r], existing[r], shallow=False)
    ]

    print(f"\nscanned {len(found)} files, zero credential hits")
    print(f"  new: {len(new)}   changed: {len(changed)}   removed: {len(gone)}")
    for r in new:
        print(f"    + {r}")
    for r in changed:
        print(f"    ~ {r}")
    for r in gone:
        print(f"    - {r}  (deleted upstream; git keeps the history)")

    if not apply:
        print("\nreport only. re-run with --apply to write the mirror."
              if (new or changed or gone) else "\nmirror is current, nothing to do.")
        return 0

    for rel, src in found.items():
        dst = MIRROR / rel
        dst.parent.mkdir(parents=True, exist_ok=True)
        shutil.copy2(src, dst)
    for rel in gone:
        existing[rel].unlink()
    for d in sorted(MIRROR.rglob("*"), key=lambda p: -len(p.parts)):
        if d.is_dir() and not any(d.iterdir()):
            d.rmdir()

    print(f"\nAPPLIED. mirror at {MIRROR.relative_to(REPO)}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
```

---

## STEP 3 - Write the mirror's README

Save as `claude_config_mirror/README.md`. This one matters more than it looks: without it, the
next person to open that folder reasonably assumes those files are live and edits one, and
then wonders why nothing changed.

```markdown
# ~/.claude config mirror - READ THIS BEFORE EDITING ANYTHING HERE

**These files do not run. Editing them changes nothing.**

This is a one-way MIRROR of the live Claude configuration:

| Mirror path | Live source (the thing that actually runs) |
|---|---|
| `scheduled-tasks/` | `~/.claude/scheduled-tasks/` |
| `skills/` | `~/.claude/skills/` |
| `settings.json` | `~/.claude/settings.json` |

The harness reads from `~/.claude/`, not from here. To change a task's behavior, edit the live
file, then re-run the sync.

## Why this exists

Scheduled-task prompts carry real operating policy: what may send without asking, which model
tier a job runs on, what a task is forbidden from touching, and recipes that took several
attempts to get right. All of it lived outside version control, so a clobbered task had no
history to recover from and no way to see when a rule changed.

## Syncing

    python3 tools/sync_claude_config.py           # report what drifted
    python3 tools/sync_claude_config.py --apply   # write the mirror

**Deletions propagate.** A task deleted from `~/.claude/` disappears from the mirror, and git
keeps it in history. That is the recovery path.

**The sync refuses to run if it finds credential-shaped content**, and writes nothing.

## Recovering a lost task

    git log --oneline -- claude_config_mirror/scheduled-tasks/<name>/SKILL.md
    git show <commit>:claude_config_mirror/scheduled-tasks/<name>/SKILL.md

Write the result back to `~/.claude/scheduled-tasks/<name>/SKILL.md`. Recreating the schedule
itself (the timing, the enabled state) is separate: that lives in the harness, not in these
files.
```

---

## STEP 4 - Wire it into the routines they already have

**If they have a wrap-up routine** (v1.2 "The Clean Handoff", or their own): add a step just
before the commit step, worded to match their file:

> Mirror the Claude config if any task, skill, or setting changed this session:
> `python3 tools/sync_claude_config.py --apply`. The task prompts carry the send gates and
> hard bans, and they live outside this repo; the mirror is the only history they have.

**If they have a weekly routine** (v1.3 "The Weekly Tune-Up", or their own): add the same
command as a step there too, plus this instruction:

> If the sync REFUSES because it found credential-shaped content, do not force it. Report the
> file: a task prompt has gained a hardcoded key that belongs in a gitignored secrets file.

**If they have neither yet:** say so plainly rather than inventing a routine. Tell them the
sync is manual for now and gets picked up automatically when they take v1.2 or v1.3.

---

## STEP 5 - Run it once, live, and show them

Run the report first, then apply:

```bash
python3 tools/sync_claude_config.py
python3 tools/sync_claude_config.py --apply
```

Then commit, so the history actually starts:

```bash
git add tools/sync_claude_config.py claude_config_mirror/
git commit -m "Put the scheduled-task files under version control"
```

**Show the user the file count.** The number of files that had been sitting outside their OS
with no history is the whole point of this upgrade, and seeing it is what makes it land.

---

## What this does not do

- **It does not move or change the live files.** Tasks run exactly as before.
- **It does not back up the schedules.** The timing and enabled state of a task live in the
  harness, not in these files. The mirror recovers a task's *instructions*, which is the part
  that carries the thinking. Recreating the schedule is a one-line job by comparison.
- **It does not sync in reverse.** Editing a mirrored copy does nothing. This is deliberate:
  two-way sync between a running system and its backup is how you get a backup that quietly
  overwrites the thing it was protecting.

---

## Verification

Confirm all four before reporting done:

1. `python3 tools/sync_claude_config.py` runs and reports "mirror is current"
2. `claude_config_mirror/README.md` exists and survived the sync (run the sync twice and
   check it is still there)
3. `git log -- claude_config_mirror/` shows the commit
4. `VERSION.md` has the v1.6 line
