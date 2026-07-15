"use client";

import { useEffect, useRef, useState } from "react";

type Bubble =
  | { kind: "clock"; text: string }
  | {
      kind: "msg";
      from: "homeowner" | "gotaguy";
      text: string;
      photo?: string;
      chip?: string;
    };

const script: Bubble[] = [
  { kind: "clock", text: "TUESDAY 7:12 PM" },
  {
    kind: "msg",
    from: "homeowner",
    text: "My kitchen faucet won't stop dripping. Can you fix it?",
    photo: "/evidence/gotaguy.jpg",
  },
  {
    kind: "msg",
    from: "gotaguy",
    text: "Got the photo. Looks like a worn cartridge. $95 to $140 depending on parts. Want it fixed this week?",
  },
  { kind: "msg", from: "homeowner", text: "Yes. Thursday afternoon?" },
  {
    kind: "msg",
    from: "gotaguy",
    text: "Done. Mike has the job. He'll be there Thursday between 2 and 4.",
  },
  { kind: "clock", text: "THURSDAY 3:41 PM" },
  {
    kind: "msg",
    from: "gotaguy",
    text: "Job's done. Pay securely here when you're ready.",
    chip: "Secure payment link",
  },
  { kind: "msg", from: "homeowner", text: "Paid. That was easy." },
];

const STEP_MS = 1400;

export default function GotaGuyThread() {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(0);
  const [typing, setTyping] = useState(false);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setShown(script.length);
      setStarted(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setStarted(true);
            io.disconnect();
          }
        });
      },
      { threshold: 0.35 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!started || shown >= script.length) return;
    const next = script[shown];
    const isReply = next.kind === "msg" && next.from === "gotaguy";
    let typingTimer: ReturnType<typeof setTimeout> | undefined;
    if (isReply) {
      typingTimer = setTimeout(() => setTyping(true), 250);
    }
    const timer = setTimeout(
      () => {
        setTyping(false);
        setShown((n) => n + 1);
      },
      next.kind === "clock" ? 700 : STEP_MS
    );
    return () => {
      clearTimeout(timer);
      if (typingTimer) clearTimeout(typingTimer);
    };
  }, [started, shown]);

  return (
    <div ref={ref} className="max-w-[380px] mx-auto">
      <div className="border border-[rgba(170,187,204,0.13)] bg-[#16172A] px-4 pt-5 pb-6 min-h-[560px]">
        {/* Thread header */}
        <div className="text-center border-b border-[rgba(170,187,204,0.13)] pb-4 mb-5">
          <p className="k-mono text-[#AABBCC] text-xs tracking-[0.2em]">
            GOTAGUY
          </p>
          <p className="text-[#AABBCC]/50 text-[11px] mt-1">Text Message</p>
        </div>

        <div className="space-y-3">
          {script.slice(0, shown).map((b, i) => {
            if (b.kind === "clock") {
              return (
                <p
                  key={i}
                  className="k-mono text-center text-[10px] tracking-[0.2em] text-[#AABBCC]/40 pt-2"
                >
                  {b.text}
                </p>
              );
            }
            const mine = b.from === "homeowner";
            return (
              <div key={i} className={`flex ${mine ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[80%] ${mine ? "text-right" : "text-left"}`}>
                  {b.photo && (
                    /* eslint-disable-next-line @next/next/no-img-element */
                    <img
                      src={b.photo}
                      alt="The dripping faucet, texted as a photo"
                      className="k-photo mb-1.5 aspect-video object-cover rounded-2xl"
                    />
                  )}
                  <div
                    className={`inline-block px-4 py-2.5 text-[15px] leading-snug rounded-2xl ${
                      mine
                        ? "bg-[#6B9FD4] text-[#16172A] rounded-br-sm"
                        : "bg-[#252542] text-[#F0ECE8] rounded-bl-sm"
                    }`}
                  >
                    {b.text}
                  </div>
                  {b.chip && (
                    <div className="mt-1.5 inline-block border border-[#6B9FD4] text-[#6B9FD4] text-xs px-3 py-1.5 rounded-full">
                      {b.chip} &rarr;
                    </div>
                  )}
                </div>
              </div>
            );
          })}

          {typing && (
            <div className="flex justify-start">
              <div className="bg-[#252542] rounded-2xl rounded-bl-sm px-4 py-3 inline-flex gap-1.5">
                {[0, 1, 2].map((d) => (
                  <span
                    key={d}
                    className="w-1.5 h-1.5 rounded-full bg-[#AABBCC]/60 animate-bounce"
                    style={{ animationDelay: `${d * 150}ms` }}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      <p className="k-mono text-center text-[10px] tracking-[0.2em] text-[#AABBCC]/40 mt-4">
        THE WHOLE PRODUCT. NO APP. NO ACCOUNT.
      </p>
    </div>
  );
}
