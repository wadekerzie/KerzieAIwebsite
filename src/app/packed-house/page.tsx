import Link from "next/link";
import type { Metadata } from "next";

// PACKED HOUSE - live events lane, named by Wade 2026-08-29.
// Venue-facing pitch page. GATES CLEARED + INDEXED 2026-09-01 on Wade's go:
// name check upgraded (8/29 informal read low-to-moderate; 9/1 search found no
// live registered "Packed House" mark in entertainment/event services - plain
// -language read, not a legal opinion) and outreach went live the same day
// (both DFW pilots pitched: Tulips FTW emailed, Three Links form submitted).
// Money model locked 8/29: $99/mo + $1.50 per attributed ticket, first
// 30 days free. Spec: Wade OS opportunity_intelligence/live_events_phase1_spec_2026-08-29.md
export const metadata: Metadata = {
  title: "Packed House | Kerzie AI",
  description:
    "Your show is booked. Your room is a quarter full. Packed House fills the seats you were going to eat - and you only pay for tickets we demonstrably sold.",
  robots: { index: true, follow: true },
};

const steps = [
  {
    title: "We watch your calendar.",
    body: "Our Dark-Night Desk reads your schedule every week the way you do on a slow Tuesday: which nights are at risk. For each one it builds the plan to fill it - before the night arrives, not after it hurt.",
  },
  {
    title: "We find the people.",
    body: "Nobody goes to a show alone. The reason a fan stays home is that getting four friends to commit is work. We do that work: one text thread, seats held, everyone pays their own share, done. Plus a standing list of locals who asked us to tell them when something they would love plays your room.",
  },
  {
    title: "You count the tickets.",
    body: "Every ticket we sell comes through a link you can see. No claimed credit. No marketing report you have to take on faith. A number, on your screen, next to the money.",
  },
];

export default function PackedHousePage() {
  return (
    <main className="min-h-screen bg-[#FAF8F4] text-[#262B3D]">
      <div className="mx-auto max-w-3xl px-6 py-20">
        {/* Act 1 - the problem, out loud */}
        <section className="mb-16">
          <p className="text-3xl font-semibold leading-snug text-[#1A1B2E] sm:text-4xl">
            The band is booked. The night is paid for.
            <br />
            Forty people came. The room holds two hundred.
          </p>
          <div className="mt-8 border-l-2 border-[#B04E2B] pl-5">
            <p className="text-lg leading-relaxed">
              64% of independent venues lost money last year. Not because the
              shows were bad. Because the seats were empty. Every empty seat on
              a booked night is pure margin, sitting there, going home with
              nobody.
            </p>
          </div>
        </section>

        {/* Act 2 - why it stays broken */}
        <section className="mb-16">
          <h2 className="mb-4 text-xl font-semibold text-[#2B5D96]">
            Nobody&apos;s job is the empty seat
          </h2>
          <p className="mb-4 leading-relaxed">
            Your ticketing company sells tickets to people who already decided
            to come. Your promotion is a post and an email blast, sent to the
            same list, the week of the show. Your booker fills the calendar,
            not the room. Everyone in the building has a job, and filling the
            Tuesday is nobody&apos;s.
          </p>
          <p className="leading-relaxed">
            So the Tuesday stays soft, the bar stays quiet, and the math that
            decides whether your room survives gets made on the weekends alone.
          </p>
        </section>

        {/* Act 3 - what got built. Name lands after the problem. */}
        <section className="mb-16">
          <h2 className="mb-4 text-2xl font-semibold text-[#1A1B2E]">
            Packed House makes the empty seat somebody&apos;s job. Ours.
          </h2>
          <div className="space-y-8">
            {steps.map((s) => (
              <div key={s.title}>
                <h3 className="mb-2 text-lg font-semibold text-[#2B5D96]">
                  {s.title}
                </h3>
                <p className="leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* HeyGen explainer - generated 8/29, Wade's avatar, 77s */}
        <section className="mb-16">
          <p className="mb-4 text-sm uppercase tracking-wide text-[#2B5D96]">
            Ninety seconds, plain language
          </p>
          <video
            controls
            preload="metadata"
            playsInline
            className="w-full rounded-lg border border-[rgba(26,27,46,0.2)]"
          >
            <source src="/videos/packed-house-explainer.mp4" type="video/mp4" />
          </video>
        </section>

        {/* The money - plain, all-in, no asterisks */}
        <section className="mb-16">
          <h2 className="mb-4 text-xl font-semibold text-[#2B5D96]">
            What it costs
          </h2>
          <p className="mb-4 leading-relaxed">
            <span className="text-[#1A1B2E]">
              $99 a month, plus $1.50 for each ticket we demonstrably sold.
            </span>{" "}
            That is the whole price. If we fill nothing, you pay $99 and fire
            us. Your first 30 days are free, so the first receipt costs you
            nothing but a soft night we both already knew was coming.
          </p>
          <div className="border-l-2 border-[#B04E2B] pl-5">
            <p className="leading-relaxed">
              You keep your ticketing. You keep your booker. You keep your
              door. We only add.
            </p>
          </div>
        </section>

        {/* One CTA */}
        <section>
          <p className="mb-6 text-lg leading-relaxed text-[#1A1B2E]">
            One conversation. Bring your calendar, we will bring the plan for
            your next soft night.
          </p>
          <Link
            href="/schedule"
            className="inline-block border border-[#2B5D96] px-6 py-3 font-semibold text-[#2B5D96] transition-colors hover:border-[#B04E2B] hover:text-[#B04E2B]"
          >
            Talk to Wade
          </Link>
        </section>
      </div>
    </main>
  );
}
