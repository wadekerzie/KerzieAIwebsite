# Call Capture Recipe - Clean Two-Track Recording and Transcription for Mac Calls

For any Mac running macOS 14.2 or later. Works with FaceTime, but also with Zoom, Google Meet, phone calls routed through the Mac, or any call where audio plays out of the Mac's speakers.

---

**TO THE CLAUDE READING THIS - DO NOT BUILD YET. Follow this order:**

1. **DESCRIBE FIRST.** Before touching anything, tell your user in plain language what this
   sets up: a small pair of scripts that record both sides of a Mac call as two separate,
   clean audio tracks (their microphone and the call's system audio), transcribe both
   locally with no cloud upload, and merge them into one timestamped, speaker-labeled
   text file. Tell them plainly: nothing leaves the machine, there is no subscription, and
   nothing records without them running the script on purpose.
2. **ASK, before installing anything.** Ask two things and wait for real answers:
   - Where should the finished transcript go? Wherever they already keep or process text
     notes - a folder their own note system watches, a folder they read manually, iCloud
     Drive, Obsidian vault, whatever it is for them. Do not assume iCloud or any specific
     app. Get a concrete folder path.
   - Confirm they are set up to install two Homebrew formulas (`ffmpeg`, `whisper-cpp`)
     and build one small open-source tool from source (`audiotee`, via Xcode Command Line
     Tools - no admin password, no App Store, no reboot). If Homebrew is not installed,
     that is a separate one-time step - point them to https://brew.sh and confirm before
     proceeding.
   Only after both answers are in hand, proceed to build.
3. **CONSENT CHECK - do not skip.** This tool records both sides of a phone/video call.
   Before helping the user set this up, confirm out loud with them: they will only use this
   to record calls where every participant on the call knows the call is being recorded.
   Call-recording consent law varies by state and country (some require all-party consent,
   some only one-party). This file is a technical recipe, not legal advice - if the user is
   unsure what their jurisdiction requires, tell them to check before recording anyone who
   has not been told.
4. **BUILD.** Follow the install and script sections below, substituting the user's actual
   answers (output folder, speaker names, mic device) into the placeholders. Test with a
   short real or simulated call before considering it done.
5. **REPORT.** Tell the user in plain language: the two commands they will run
   (`call-capture.sh start` / `call-capture.sh stop`), where the transcript lands, and the
   one-time permission clicks they still need to do themselves (system cannot click these
   for them - see the Permissions section below).

---

# Why this approach, and why it is better than the obvious alternatives

Two common approaches to recording a Mac call both have a real flaw:

- **A second device recording the room** (phone voice memo sitting next to the laptop, or
  a Shortcuts-triggered recording) captures both voices through one microphone, at room
  volume, with room echo, fan noise, and typing bleeding into every line. Diarization
  (figuring out who said what) has to be guessed after the fact from one blended track,
  and it guesses wrong often enough to make the transcript unreliable exactly where
  precision would matter.
- **Installing a virtual audio driver (BlackHole or similar) plus a Multi-Output Device
  and an Aggregate Device** in Audio MIDI Setup does produce a real capture, but it costs
  an admin-password driver install, BlackHole's own installer requires a full **reboot**,
  a manual multi-step device setup in Audio MIDI Setup, and then the output device has to
  be switched before and after every single call. It works, but it is fragile and it is a
  chore every time.

**This recipe uses a third route: no virtual driver, no second device, no reboot.**

- **System audio** (the other side of the call - whatever the Mac is playing out loud) is
  captured with [`audiotee`](https://github.com/makeusabrew/audiotee), a small,
  MIT-licensed open-source command-line tool built directly on Apple's own **Core Audio
  Tap API** (`AudioHardwareCreateProcessTap`, available on macOS 14.2 and later). It taps
  what the Mac is already outputting at the operating-system level. It does not touch,
  rename, or reroute the user's audio output device, and it does not change what they
  hear. This is the same technique real shipping local meeting-transcription apps use.
- **The microphone** (the user's own voice) is captured separately, at the same time,
  with `ffmpeg`'s `avfoundation` input - the ordinary, well-supported way to grab a
  named audio input device on macOS.
- **The two tracks are written to two separate audio files and never combined before
  transcription.** Each file is transcribed independently with `whisper.cpp` running
  fully offline on the Mac's own hardware (Apple Silicon uses the GPU automatically via
  Metal - a short call transcribes in seconds). The two resulting transcripts are then
  merged into one file, sorted by timestamp, with each line labeled by which track it
  came from.

Because the two voices are two separate audio files from the moment of capture, there is
no blending to undo and no guessing about who spoke. The system-audio track is
mechanically incapable of containing the user's own microphone content, and vice versa.
That is the entire reason this is more reliable than a single-mic recording, and it costs
nothing beyond two small command-line tools and about five minutes of one-time setup.

**The one physical limitation, and it is physics, not a bug:** if the user is on
speakers rather than headphones, their own microphone will pick up a faint echo of the
other side's voice bleeding acoustically off the speakers into the room - true of any
recording method that is not using headphones, software or otherwise. It does not
corrupt anything (the system-audio track has the other side cleanly regardless, and the
user's own words are still the dominant signal on their mic track), but headphones during
the call is the actual fix if the cleanest possible separation matters.

## System requirement

Core Audio Tap requires **macOS 14.2 (Sonoma) or later**. Check with `sw_vers
-productVersion` before starting. On an older macOS, this specific approach is not
available - audiotee's own README documents the driver-based fallback.

---

# One-time install (no sudo, no reboot)

Run these from a normal Terminal window, in the user's home directory or wherever they
want this tool to live:

```bash
# 1. The two Homebrew formulas - no admin password needed for either.
brew install ffmpeg whisper-cpp

# 2. audiotee - not in Homebrew, build it from source. Needs Xcode Command Line
#    Tools, which most Macs already have; if `swift` is not found, run
#    `xcode-select --install` first (also no admin password).
mkdir -p ~/.call-capture/bin ~/.call-capture/src
git clone https://github.com/makeusabrew/audiotee ~/.call-capture/src/audiotee
cd ~/.call-capture/src/audiotee
swift build -c release
cp .build/arm64-apple-macosx/release/audiotee ~/.call-capture/bin/audiotee
# (On an Intel Mac the build path is .build/x86_64-apple-macosx/release/audiotee instead.)

# 3. The whisper.cpp speech model - base.en is the right default: small (148MB),
#    fast, and accurate enough for normal conversational audio. Only reach for a
#    bigger model (small.en, 488MB) if base.en is visibly struggling on real calls.
mkdir -p ~/.call-capture/models
curl -L -o ~/.call-capture/models/ggml-base.en.bin \
  https://huggingface.co/ggerganov/whisper.cpp/resolve/main/ggml-base.en.bin
```

Save the two script files below into `~/.call-capture/` (or wherever the user prefers -
adjust paths in the scripts if so) as `call-capture.sh` and `merge_transcript.py`, then:

```bash
chmod +x ~/.call-capture/call-capture.sh
```

---

# The capture script

Save as `call-capture.sh`. Everything a specific user needs to change is at the top, in
the CONFIG block - fill it in with what they told you in step 2 above.

```bash
#!/bin/bash
# call-capture.sh - record both sides of a Mac call cleanly, transcribe locally,
# and write a merged transcript to wherever this user's own notes system reads
# from. See the recipe doc this came with for the full explanation.
#
# Usage:
#   call-capture.sh start
#   call-capture.sh stop
#   call-capture.sh status

set -uo pipefail

# --- CONFIG: fill these in for this user, once, at setup time -------------
# Where the finished transcript gets copied. This is THE integration point -
# point it at whatever folder this user's own system already watches or reads
# for text notes. No default is assumed; ask the user before filling this in.
OUTPUT_DIR="${CALL_CAPTURE_OUTPUT_DIR:-$HOME/CHANGE_ME_transcript_output_folder}"

# Label for the two speakers in the merged transcript.
MIC_LABEL="${CALL_CAPTURE_MIC_LABEL:-Me}"
SYSTEM_LABEL="${CALL_CAPTURE_SYSTEM_LABEL:-Other side}"

# Exact avfoundation device name for the microphone to use. Run the device
# listing command in the "External mic / choosing the right input" section
# below to find the exact name for THIS user's setup before filling this in -
# do not assume the built-in mic, especially if they use an external mic,
# USB headset, or AirPods.
MIC_DEVICE_NAME="${CALL_CAPTURE_MIC_DEVICE:-MacBook Air Microphone}"

# Optional: bias whisper toward proper nouns it would otherwise mishear (a
# name, a company, a project term). Without this, uncommon proper nouns often
# get transcribed as the nearest common word/name. Leave blank for none.
WHISPER_PROMPT="${CALL_CAPTURE_WHISPER_PROMPT:-}"
# ---------------------------------------------------------------------------

STATE_DIR="$HOME/.call-capture"
BIN_DIR="$STATE_DIR/bin"
MODELS_DIR="$STATE_DIR/models"
AUDIO_DIR="$STATE_DIR/audio"
RUN_DIR="$STATE_DIR/run"
LOG_DIR="$STATE_DIR/logs"
SESSION_FILE="$RUN_DIR/session.json"
LOG_FILE="$LOG_DIR/call_capture.log"

AUDIOTEE_BIN="$BIN_DIR/audiotee"
WHISPER_MODEL="$MODELS_DIR/ggml-base.en.bin"
MERGE_SCRIPT="$STATE_DIR/merge_transcript.py"
SAMPLE_RATE=16000

mkdir -p "$BIN_DIR" "$MODELS_DIR" "$AUDIO_DIR" "$RUN_DIR" "$LOG_DIR" "$OUTPUT_DIR"

log() { echo "$(date '+%Y-%m-%d %H:%M:%S') $*" >> "$LOG_FILE"; }
die() { echo "ERROR: $*" >&2; exit 1; }

require_deps() {
  local missing=0
  if ! command -v ffmpeg >/dev/null 2>&1; then
    echo "MISSING: ffmpeg. Fix: brew install ffmpeg" >&2; missing=1
  fi
  if ! command -v whisper-cli >/dev/null 2>&1; then
    echo "MISSING: whisper-cli. Fix: brew install whisper-cpp" >&2; missing=1
  fi
  if [ ! -x "$AUDIOTEE_BIN" ]; then
    echo "MISSING: audiotee binary at $AUDIOTEE_BIN" >&2
    echo "  Fix: cd $STATE_DIR/src/audiotee && swift build -c release && \\" >&2
    echo "       cp .build/*/release/audiotee $AUDIOTEE_BIN" >&2
    missing=1
  fi
  if [ ! -f "$WHISPER_MODEL" ]; then
    echo "MISSING: whisper model at $WHISPER_MODEL" >&2
    echo "  Fix: curl -L -o \"$WHISPER_MODEL\" https://huggingface.co/ggerganov/whisper.cpp/resolve/main/ggml-base.en.bin" >&2
    missing=1
  fi
  if [ ! -d "$OUTPUT_DIR" ]; then
    echo "MISSING: output folder not found at $OUTPUT_DIR - create it or fix OUTPUT_DIR." >&2
    missing=1
  fi
  [ "$missing" -eq 0 ] || exit 1
}

# Find the mic's avfoundation device index by NAME, not a hardcoded number -
# device indices shift whenever anything is plugged or unplugged.
find_mic_index() {
  local listing idx
  listing="$(ffmpeg -f avfoundation -list_devices true -i "" 2>&1)"
  idx="$(echo "$listing" | grep -A 20 "AVFoundation audio devices:" \
          | grep "$MIC_DEVICE_NAME" \
          | head -1 \
          | sed -E 's/.*\[([0-9]+)\].*/\1/')"
  if [ -z "$idx" ]; then
    echo "WARNING: could not find audio device named '$MIC_DEVICE_NAME'; falling back to index 0. Audio devices seen:" >&2
    echo "$listing" | grep -A 20 "AVFoundation audio devices:" >&2
    idx=0
  fi
  echo "$idx"
}

is_pid_alive() { local pid="$1"; [ -n "$pid" ] && kill -0 "$pid" 2>/dev/null; }

session_field() {
  local field="$1"
  python3 -c "
import json, sys
d = json.load(open(sys.argv[1]))
print(d.get(sys.argv[2], ''))
" "$SESSION_FILE" "$field"
}

cmd_start() {
  require_deps

  if [ -f "$SESSION_FILE" ]; then
    local existing_pid
    existing_pid="$(session_field audiotee_pid 2>/dev/null)"
    if is_pid_alive "$existing_pid"; then
      die "already recording (session file present, audiotee pid $existing_pid alive). Run 'stop' first, or check 'status'."
    else
      echo "Stale session file found - clearing it and starting fresh." >&2
      rm -f "$SESSION_FILE"
    fi
  fi

  local session_id session_dir mic_index
  session_id="$(date '+%Y-%m-%d-%H%M%S')"
  session_dir="$AUDIO_DIR/call-$session_id"
  mkdir -p "$session_dir"
  mic_index="$(find_mic_index)"

  log "start: session $session_id, mic device index $mic_index ($MIC_DEVICE_NAME)"

  "$AUDIOTEE_BIN" --sample-rate "$SAMPLE_RATE" --chunk-duration 0.2 \
    > "$session_dir/system.pcm" 2> "$session_dir/audiotee.log" &
  local audiotee_pid=$!

  sleep 0.5
  if ! is_pid_alive "$audiotee_pid"; then
    cat "$session_dir/audiotee.log" >&2
    die "audiotee exited immediately - almost always the System Audio Recording permission has not been granted yet. See Permissions below."
  fi

  ffmpeg -hide_banner -loglevel warning -f avfoundation -i ":$mic_index" \
    -ar "$SAMPLE_RATE" -ac 1 "$session_dir/mic.wav" \
    > "$session_dir/ffmpeg.log" 2>&1 &
  local ffmpeg_pid=$!

  sleep 0.5
  if ! is_pid_alive "$ffmpeg_pid"; then
    kill -INT "$audiotee_pid" 2>/dev/null
    cat "$session_dir/ffmpeg.log" >&2
    die "ffmpeg mic capture exited immediately - almost always the Microphone permission has not been granted yet. See Permissions below."
  fi

  cat > "$SESSION_FILE" <<EOF
{
  "session_id": "$session_id",
  "session_dir": "$session_dir",
  "audiotee_pid": $audiotee_pid,
  "ffmpeg_pid": $ffmpeg_pid,
  "started_at": "$(date -u '+%Y-%m-%dT%H:%M:%SZ')"
}
EOF

  echo "Recording started (session $session_id)."
  echo "  System audio pid: $audiotee_pid | Mic pid: $ffmpeg_pid"
  echo "  Files: $session_dir"
  echo "Run '$0 stop' when the call ends."
}

cmd_stop() {
  if [ ! -f "$SESSION_FILE" ]; then
    die "not recording - no session file at $SESSION_FILE"
  fi

  local session_id session_dir audiotee_pid ffmpeg_pid
  session_id="$(session_field session_id)"
  session_dir="$(session_field session_dir)"
  audiotee_pid="$(session_field audiotee_pid)"
  ffmpeg_pid="$(session_field ffmpeg_pid)"

  log "stop: session $session_id"
  echo "Stopping capture (session $session_id)..."

  for pid in "$audiotee_pid" "$ffmpeg_pid"; do
    is_pid_alive "$pid" && kill -INT "$pid" 2>/dev/null
  done

  local waited=0
  while { is_pid_alive "$audiotee_pid" || is_pid_alive "$ffmpeg_pid"; } && [ "$waited" -lt 10 ]; do
    sleep 1
    waited=$((waited + 1))
  done
  for pid in "$audiotee_pid" "$ffmpeg_pid"; do
    is_pid_alive "$pid" && kill -9 "$pid" 2>/dev/null
  done

  rm -f "$SESSION_FILE"

  if [ ! -s "$session_dir/system.pcm" ] && [ ! -s "$session_dir/mic.wav" ]; then
    die "no audio was captured on either track in $session_dir - nothing to transcribe."
  fi

  if [ -s "$session_dir/system.pcm" ]; then
    ffmpeg -y -hide_banner -loglevel warning -f s16le -ar "$SAMPLE_RATE" -ac 1 \
      -i "$session_dir/system.pcm" "$session_dir/system.wav"
    rm -f "$session_dir/system.pcm"
  fi

  local prompt_args=()
  [ -n "$WHISPER_PROMPT" ] && prompt_args=(--prompt "$WHISPER_PROMPT")

  echo "Transcribing system audio (other side)..."
  if [ -s "$session_dir/system.wav" ]; then
    whisper-cli -m "$WHISPER_MODEL" -f "$session_dir/system.wav" \
      -oj -of "$session_dir/system_out" -np "${prompt_args[@]}" \
      > "$session_dir/whisper_system.log" 2>&1
  fi

  echo "Transcribing mic (my side)..."
  if [ -s "$session_dir/mic.wav" ]; then
    whisper-cli -m "$WHISPER_MODEL" -f "$session_dir/mic.wav" \
      -oj -of "$session_dir/mic_out" -np "${prompt_args[@]}" \
      > "$session_dir/whisper_mic.log" 2>&1
  fi

  local transcript_name="transcript-$session_id.txt"
  local merged="$session_dir/transcript.txt"

  python3 "$MERGE_SCRIPT" \
    --system "$session_dir/system_out.json" \
    --mic "$session_dir/mic_out.json" \
    --system-label "$SYSTEM_LABEL" \
    --mic-label "$MIC_LABEL" \
    --header "Call captured $session_id" \
    --out "$merged" || die "transcript merge failed - check $session_dir for whisper output/logs."

  cp "$merged" "$OUTPUT_DIR/$transcript_name"

  log "stop: wrote $transcript_name to $OUTPUT_DIR, audio archived at $session_dir"

  echo ""
  echo "Done. Transcript written to: $OUTPUT_DIR/$transcript_name"
  echo "Raw audio archived locally at: $session_dir (not deleted automatically)"
}

cmd_status() {
  if [ ! -f "$SESSION_FILE" ]; then
    echo "Not recording."
    return 0
  fi
  local session_id audiotee_pid ffmpeg_pid started_at
  session_id="$(session_field session_id)"
  audiotee_pid="$(session_field audiotee_pid)"
  ffmpeg_pid="$(session_field ffmpeg_pid)"
  started_at="$(session_field started_at)"
  echo "Recording: session $session_id, started $started_at"
  is_pid_alive "$audiotee_pid" && echo "  System audio: running (pid $audiotee_pid)" || echo "  System audio: NOT running (pid $audiotee_pid dead)"
  is_pid_alive "$ffmpeg_pid" && echo "  Mic: running (pid $ffmpeg_pid)" || echo "  Mic: NOT running (pid $ffmpeg_pid dead)"
}

case "${1:-}" in
  start) cmd_start ;;
  stop) cmd_stop ;;
  status) cmd_status ;;
  *) echo "Usage: $0 {start|stop|status}" >&2; exit 1 ;;
esac
```

Daily use, once set up:

```bash
~/.call-capture/call-capture.sh start     # right before or as the call starts
# ... call happens ...
~/.call-capture/call-capture.sh stop      # right after it ends
~/.call-capture/call-capture.sh status    # check whether it is currently recording
```

`start` launches both captures in the background and returns immediately. The call app
itself does not need to be open yet - the script just starts listening at the OS level,
so it is fine to start it a little early.

---

# The merge script

Save as `merge_transcript.py` in the same folder as `call-capture.sh`. It reads the two
whisper.cpp JSON outputs, tags each segment with which track it came from, sorts
everything by timestamp, and writes one plain-text file.

```python
#!/usr/bin/env python3
"""
Merge two whisper.cpp JSON transcripts (system audio + microphone) into a
single chronological, speaker-labeled transcript.

Each whisper.cpp -oj (--output-json) file has a "transcription" array of
segments with "offsets": {"from": ms, "to": ms} and "text". This tags every
segment from the two inputs with a speaker label, sorts by start offset, and
writes plain-text lines like:

    [00:03] Other side: hey, you around for a few minutes?
    [00:07] Me: yeah, go ahead.

Empty or missing JSON files are treated as silence on that track, not an
error, so a one-sided clip still produces a usable transcript from the other
side.
"""

import argparse
import json
import sys
from pathlib import Path


def load_segments(json_path: Path, label: str):
    if not json_path or not json_path.exists():
        return []
    try:
        data = json.loads(json_path.read_text())
    except (json.JSONDecodeError, OSError) as e:
        print(f"warning: could not read {json_path}: {e}", file=sys.stderr)
        return []

    segments = []
    for seg in data.get("transcription", []):
        text = seg.get("text", "").strip()
        if not text:
            continue
        offsets = seg.get("offsets", {})
        start_ms = offsets.get("from", 0)
        segments.append((start_ms, label, text))
    return segments


def format_timestamp(ms: int) -> str:
    total_seconds = ms // 1000
    hours, remainder = divmod(total_seconds, 3600)
    minutes, seconds = divmod(remainder, 60)
    if hours:
        return f"{hours:02d}:{minutes:02d}:{seconds:02d}"
    return f"{minutes:02d}:{seconds:02d}"


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--system", type=Path, required=True)
    parser.add_argument("--mic", type=Path, required=True)
    parser.add_argument("--system-label", default="Other side")
    parser.add_argument("--mic-label", default="Me")
    parser.add_argument("--out", type=Path, required=True)
    parser.add_argument("--header", default=None)
    args = parser.parse_args()

    segments = []
    segments += load_segments(args.system, args.system_label)
    segments += load_segments(args.mic, args.mic_label)
    segments.sort(key=lambda s: s[0])

    lines = []
    if args.header:
        lines.append(args.header)
        lines.append("")

    if not segments:
        lines.append("[no speech detected on either track]")
    else:
        for start_ms, label, text in segments:
            lines.append(f"[{format_timestamp(start_ms)}] {label}: {text}")

    args.out.parent.mkdir(parents=True, exist_ok=True)
    args.out.write_text("\n".join(lines) + "\n")
    print(f"merged transcript written: {args.out} ({len(segments)} segments)")


if __name__ == "__main__":
    main()
```

---

# Permissions - the one-time click-through

macOS gates both audio taps behind one-time permission prompts tied to whichever app
process launches them. This is why the click-path matters:

1. Open **Terminal.app** - the built-in one. audiotee's own documentation notes that
   iTerm and some other terminal replacements sometimes silently fail to trigger the
   permission prompt at all, which looks like a bug but is actually a missing prompt.
2. Run `~/.call-capture/call-capture.sh start`.
3. The first run should trigger two system prompts:
   - **"Terminal" would like to record this computer's audio** → click **Allow**. This
     is the Core Audio Tap / system-audio permission. Found under
     **System Settings → Privacy & Security → Screen & System Audio Recording** if it
     needs checking or re-granting later.
   - **"Terminal" would like to access the microphone** → click **Allow**. Found under
     **System Settings → Privacy & Security → Microphone**.
4. Run `~/.call-capture/call-capture.sh stop` a few seconds later and confirm a real
   transcript with real words landed in the output folder. If it is empty or garbled,
   one of the two permissions above almost certainly did not register - see
   Troubleshooting.

Claude cannot click through these prompts on the user's behalf - they are tied to the
Terminal process the user is running, not to any automation. This is a step the user does
once, personally, the first time.

---

# External mic / choosing the right input - do not assume the built-in mic

The single most common way this breaks: assuming the Mac's built-in microphone is the
input in use, when the user is actually on an external USB mic, a headset, or AirPods.
If `MIC_DEVICE_NAME` in the config block does not match the device actually in use, the
script falls back to device index 0, which may silently record the wrong input (or dead
air) with no error.

Before filling in `MIC_DEVICE_NAME`, list the actual available devices and read the exact
name off the list rather than guessing:

```bash
ffmpeg -f avfoundation -list_devices true -i ""
```

The relevant part of the output looks like this:

```
[AVFoundation indev @ 0x...] AVFoundation audio devices:
[AVFoundation indev @ 0x...] [0] MacBook Air Microphone
[AVFoundation indev @ 0x...] [1] External USB Microphone
[AVFoundation indev @ 0x...] [2] AirPods Pro
```

Copy the exact text after the bracketed number - `MacBook Air Microphone`,
`External USB Microphone`, `AirPods Pro`, whatever it is - into `MIC_DEVICE_NAME` in the
config block. Do this listing on the actual machine that will run the capture, with
whatever mic the user actually plans to use already connected, since the list and the
index numbers can differ machine to machine and change when devices are plugged in or
unplugged. If the user switches microphones later (buys a new headset, for example),
re-run the listing and update `MIC_DEVICE_NAME` - it is matched by name, not by index, so
it survives normal device index drift, but only if the name itself still matches.

---

# Consent

This tool records both sides of a call. Use it only for calls where every participant
knows the call is being recorded. Call-recording consent requirements differ by state and
by country - some places require every party's consent, others only one party's. This
recipe is a technical how-to, not legal advice; when in doubt, the user should check what
applies where they and the other participant are, and should tell the other person before
recording them.

---

# Troubleshooting

**`start` exits immediately with "audiotee exited immediately"** - almost always the
System Audio Recording permission has not been granted to Terminal yet. Check
**System Settings → Privacy & Security → Screen & System Audio Recording** and make sure
Terminal (or whichever app is running the script) is toggled on. If it is not even listed
there, run the script again from Terminal.app directly (not through SSH or a different
terminal emulator) to trigger the prompt fresh.

**`start` exits immediately with "ffmpeg mic capture exited immediately"** - same idea,
for **System Settings → Privacy & Security → Microphone**.

**Transcript came back empty or `[no speech detected on either track]`** - check
`audiotee.log` and `ffmpeg.log` inside the relevant `~/.call-capture/audio/call-<timestamp>/`
folder for errors. Common causes: the call had not actually connected yet when `start`
ran, or the Mac's audio output device changed mid-call.

**Wrong or missing voice on the mic track** - almost always `MIC_DEVICE_NAME` does not
match the actual input device. Re-run the device listing command above and fix the name.

**`status` says recording but the call already ended** - just run `stop`; it kills
whatever is still running and processes what was captured. If a previous run crashed and
left a stale session file with dead process IDs, the next `start` detects this
automatically and clears it before starting fresh.

**Names or uncommon proper nouns transcribed wrong** (a name comes out as a different,
more common name; a company or project name gets mangled) - whisper.cpp leans toward
common words when it is unsure. Fill in `WHISPER_PROMPT` in the config block with a short
sentence naming the people and terms likely to come up (for example: `"Jordan and Priya
discuss the Meridian account and Q3 renewal."`). This is a bias hint, not a hard rule, but
it measurably helps in testing.

**Whisper occasionally invents text during silence** - like all whisper.cpp models,
base.en can hallucinate plausible-sounding words during near-silent or noisy stretches.
If this shows up often on real calls, try the larger `small.en` model (488MB, download it
the same way as base.en above and point `WHISPER_MODEL` at it) or tune whisper-cli's
`--no-speech-thold` flag.

**Only the default output device is tapped** - if the Mac's default audio output changes
mid-call (switching from speakers to a Bluetooth device, for example), audiotee keeps
listening to whatever was default when `start` ran. Not usually an issue within a single
call, but worth knowing.

**Raw audio is not deleted automatically** - `~/.call-capture/audio/` accumulates roughly
30-60MB per hour of call (both tracks, 16kHz mono, combined). Nothing prunes this
automatically; delete old session folders manually if disk space matters.
