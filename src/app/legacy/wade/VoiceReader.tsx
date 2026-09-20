"use client";

import { useEffect, useRef, useState } from "react";

// Reads an answer aloud in Wade's own voice (his ElevenLabs voice clone, via
// /api/askwade/speak). The text is the answer the page already shows; nothing
// new is generated. Renders nothing when the voice is not configured.

type State = "idle" | "loading" | "playing" | "blocked" | "error";

let enabledCache: boolean | null = null;

export function useVoiceEnabled(): boolean {
  const [enabled, setEnabled] = useState<boolean>(enabledCache ?? false);
  useEffect(() => {
    if (enabledCache !== null) return;
    fetch("/api/askwade/speak")
      .then((r) => r.json())
      .then((j) => {
        enabledCache = Boolean(j?.enabled);
        setEnabled(enabledCache);
      })
      .catch(() => {
        enabledCache = false;
      });
  }, []);
  return enabled;
}

export default function VoiceReader({ text, autoplay }: { text: string; autoplay: boolean }) {
  const enabled = useVoiceEnabled();
  const [state, setState] = useState<State>("idle");
  const [message, setMessage] = useState("");
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const abortRef = useRef<AbortController | null>(null);
  const urlRef = useRef<string | null>(null);

  function cleanup() {
    abortRef.current?.abort();
    abortRef.current = null;
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.src = "";
      audioRef.current = null;
    }
    if (urlRef.current) {
      URL.revokeObjectURL(urlRef.current);
      urlRef.current = null;
    }
  }

  async function play() {
    if (!text.trim()) return;
    cleanup();
    setState("loading");
    setMessage("");
    const controller = new AbortController();
    abortRef.current = controller;
    try {
      const r = await fetch("/api/askwade/speak", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text }),
        signal: controller.signal,
      });
      if (!r.ok) {
        const j = await r.json().catch(() => ({}));
        setMessage(j.error ?? "Wade's voice could not be reached just now.");
        setState("error");
        return;
      }
      const blob = await r.blob();
      if (controller.signal.aborted) return;
      const url = URL.createObjectURL(blob);
      urlRef.current = url;
      const audio = new Audio(url);
      audioRef.current = audio;
      audio.onended = () => setState("idle");
      audio.onerror = () => {
        setMessage("The audio would not play.");
        setState("error");
      };
      try {
        await audio.play();
        setState("playing");
      } catch {
        // Autoplay blocked by the browser: keep the audio ready behind the button.
        setState("blocked");
      }
    } catch (err) {
      if ((err as Error)?.name === "AbortError") return;
      setMessage("Wade's voice could not be reached just now.");
      setState("error");
    }
  }

  function stop() {
    cleanup();
    setState("idle");
  }

  async function resume() {
    if (!audioRef.current) return play();
    try {
      await audioRef.current.play();
      setState("playing");
    } catch {
      setState("blocked");
    }
  }

  // A new answer: start over, and read it if the listener asked for that.
  useEffect(() => {
    cleanup();
    setState("idle");
    setMessage("");
    if (enabled && autoplay) void play();
    return cleanup;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text, enabled]);

  if (!enabled || !text.trim()) return null;

  const base = "inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm transition-colors";
  return (
    <div className="mt-4 flex flex-wrap items-center gap-3">
      {state === "playing" ? (
        <button type="button" onClick={stop} className={`${base} border-[#1A1B2E] bg-[#1A1B2E] text-[#FAF8F4]`}>
          <span aria-hidden className="inline-block h-2 w-2 animate-pulse rounded-full bg-[#FAF8F4]" />
          Stop
        </button>
      ) : state === "loading" ? (
        <button type="button" disabled className={`${base} border-[#1A1B2E]/20 text-[#262B3D]/70`}>
          Getting Wade&apos;s voice
        </button>
      ) : state === "blocked" ? (
        <button type="button" onClick={resume} className={`${base} border-[#2B5D96] text-[#2B5D96] hover:bg-[#FAF8F4]`}>
          <PlayIcon /> Play in Wade&apos;s voice
        </button>
      ) : (
        <button type="button" onClick={play} className={`${base} border-[#1A1B2E]/20 text-[#262B3D] hover:bg-[#FAF8F4]`}>
          <PlayIcon /> Hear it in Wade&apos;s voice
        </button>
      )}
      {state === "error" && <span className="text-sm text-[#B04E2B]">{message}</span>}
    </div>
  );
}

function PlayIcon() {
  return (
    <svg aria-hidden width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
      <path d="M2.5 1.5v9l8-4.5z" />
    </svg>
  );
}

// Turns a structured take into one script for the voice: the take, the
// reasons, what to know first, where the record is silent. No citation numbers.
export function takeScript(t: { take: string; reasons: { point: string }[]; ask_first: string[]; silent: string }): string {
  const parts = [t.take];
  if (t.reasons.length) parts.push("Why. " + t.reasons.map((r) => r.point).join(" "));
  if (t.ask_first.length) parts.push("What I would want to know first. " + t.ask_first.join(" "));
  if (t.silent) parts.push(t.silent);
  return parts.join("\n\n");
}
