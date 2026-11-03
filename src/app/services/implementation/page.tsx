import Link from "next/link";
import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import { offer, ONE_WINDOW, usd } from "@/content/siteFacts";
import { serviceJsonLd } from "@/content/jsonLd";

// THE ONE WINDOW LADDER (Wade, ruled 2026-10-23, entry motion 2026-11-03).
// Every number on this page comes from siteFacts so this page, /services,
// /one-window/business, the JSON-LD and /llms.txt can never quote different
// figures. Owner-facing name is One Window; "the OS" is how it is built.
const WORKING_SESSION = offer("working-session");
const IMPLEMENTATION = offer("implementation");
const FAST_TRACK = offer("fast-track");

export const metadata: Metadata = {
  title: "One Window Implementation | Kerzie AI",
  description: `How a business starts on One Window: a two-hour working session, a recorded demo of your business running on it, then thirty days to set it up, teach you to drive it, and hand you the keys. Founders rate ${usd(ONE_WINDOW.foundersPrice)} for ${ONE_WINDOW.foundersYear} commitments. No required monthly.`,
};

const thirtyDays = [
  {
    name: "Build.",
    body: "We connect the platforms you already run on and set One Window up around how your business actually works. Nothing generic, nothing you have to migrate into.",
  },
  {
    name: "Drive.",
    body: "You run it with us beside you. The routines that chase, draft, track and report run on your business, and you approve anything that touches a customer or a dollar.",
  },
  {
    name: "Own.",
    body: "We hand you the keys and get out of the car. It is your system, in your accounts, on your machine. There is nothing we can turn off.",
  },
];

export default function ImplementationPage() {
  return (
    <div className="bg-[#FAF8F4] min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd(IMPLEMENTATION)) }}
      />
      <div className="max-w-6xl mx-auto px-6 lg:px-12 pt-10">
        <Link
          href="/services"
          className="k-mono text-[#262B3D]/70 text-xs lg:text-sm tracking-[0.15em] lg:tracking-[0.12em] hover:text-[#1A1B2E] transition-colors duration-200 k-focus"
        >
          &larr; WORK WITH US
        </Link>
      </div>

      <section className="max-w-6xl mx-auto px-6 lg:px-12 pt-16 lg:pt-14 pb-14 lg:pb-10">
        <p className="k-rise k-rise-1 k-label mb-8 lg:mb-6">One Window Implementation</p>
        <h1 className="k-rise k-rise-2 text-[#1A1B2E] font-bold tracking-[-0.025em] leading-[1.05] text-[clamp(2rem,4.5vw,3.25rem)]">
          We set it up, teach you to drive it,{" "}
          <span className="k-serif font-normal">and hand you the keys</span>
          <span className="text-[#B04E2B]">.</span>
        </h1>
        <p className="k-rise k-rise-3 mt-6 text-[#262B3D] text-lg max-w-xl leading-relaxed">
          Thirty days. Your business running from One Window, in your own
          accounts, on your own machine. No slide decks, no pilot on the side.
          The deliverable is the thing, running, and you own it.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-6 lg:px-12 pb-16">
        <Reveal>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/evidence/implementation-office.jpg"
            alt="A business owner at a standing desk in a modern office, working on her laptop in daylight, running the system herself"
            className="k-photo"
          />
        </Reveal>
      </section>

      {/* How it starts: the two-hour working session */}
      <section
        id="start"
        className="max-w-6xl mx-auto px-6 lg:px-12 py-14 border-t border-[rgba(26,27,46,0.13)] scroll-mt-24"
      >
        <Reveal>
          <p className="k-label mb-6">How It Starts</p>
          <div className="max-w-2xl space-y-4 text-[#262B3D] text-lg leading-relaxed">
            <p className="text-[#1A1B2E] text-xl font-semibold">
              A two-hour working session. {WORKING_SESSION.priceLabel}.
            </p>
            <p>
              Every One Window conversation starts the same way. We sit down
              for two hours and learn how you run the business today: the
              platforms you are on, the tools you pay for, how marketing goes
              out and how customers reach you.
            </p>
            <p>
              Then we go away and come back with a short recorded demo, about
              ten minutes, showing how your business would run on One Window.
              Wade records the voiceover himself. That demo is your go or
              no-go.
            </p>
            <p>
              You agree to the {usd(ONE_WINDOW.workingSessionPrice)} before we put the session on the
              calendar. If you go ahead with the implementation, it rolls into
              the price. If you decide not to, that is the only invoice you
              will get from us.
            </p>
          </div>
        </Reveal>
      </section>

      {/* The thirty days */}
      <section className="max-w-6xl mx-auto px-6 lg:px-12 py-14 border-t border-[rgba(26,27,46,0.13)]">
        <Reveal>
          <p className="k-label mb-6">The Thirty Days</p>
          <p className="max-w-2xl text-[#262B3D] text-lg leading-relaxed mb-8">
            Build, drive, own. Like driver&apos;s ed: we have the second brake
            pedal for a while, and the lessons end when you can drive.
          </p>
          <ul className="max-w-2xl space-y-4">
            {thirtyDays.map((item) => (
              <li
                key={item.name}
                className="border-l border-[#B04E2B] pl-5 text-[#262B3D] text-lg leading-relaxed"
              >
                <span className="text-[#1A1B2E] font-medium">{item.name}</span>{" "}
                {item.body}
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      {/* The price */}
      <section className="max-w-6xl mx-auto px-6 lg:px-12 py-14 border-t border-[rgba(26,27,46,0.13)]">
        <Reveal>
          <p className="k-label mb-6">The Price</p>
          <div className="max-w-2xl space-y-4 text-[#262B3D] text-lg leading-relaxed">
            <p className="text-[#1A1B2E] text-xl font-semibold">
              {usd(ONE_WINDOW.marketPrice)}, one time. That is the market rate.
            </p>
            <p className="text-[#1A1B2E] text-xl font-semibold">
              Founders rate: {usd(ONE_WINDOW.foundersPrice)} for commitments
              made in {ONE_WINDOW.foundersYear}.
            </p>
            <p>
              Anything you have already paid Kerzie AI, a Back Cover setup for
              example, is credited toward the implementation price. The{" "}
              {usd(ONE_WINDOW.workingSessionPrice)} from the working session
              rolls in the same way.
            </p>
            <p>
              You are paying for our time and our know-how, up front, and then
              it is yours. There is no required monthly after the thirty days.
              The software is free; your only subscriptions are the platforms
              you already use and the AI model you pick. If you want call-in
              help later, there is an optional retainer. Optional means
              optional.
            </p>
          </div>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/schedule" className="k-btn-solid k-focus inline-block">
              Book the working session <span className="k-arrow">&rarr;</span>
            </Link>
          </div>
        </Reveal>
      </section>

      {/* Where it sits */}
      <section className="max-w-6xl mx-auto px-6 lg:px-12 py-14 border-t border-[rgba(26,27,46,0.13)]">
        <Reveal>
          <p className="k-label mb-6">Three Ways In</p>
          <div className="max-w-2xl space-y-5 text-[#262B3D] text-lg leading-relaxed">
            <p>
              <span className="text-[#1A1B2E] font-medium">Do it yourself, free.</span>{" "}
              The starter One Window is free, and so is every upgrade. Paste
              the Foundation into Claude, answer its questions, and run it.{" "}
              <Link href="/one-window/business" className="k-link k-focus text-[#2B5D96]">
                Get One Window free
              </Link>
              .
            </p>
            <p>
              <span className="text-[#1A1B2E] font-medium">
                Done with you, {FAST_TRACK.priceLabel}.
              </span>{" "}
              Three hours at your desk, on your machine, in your accounts, one
              real workflow shipped before we leave the room.{" "}
              <Link href="/services/fast-track" className="k-link k-focus text-[#2B5D96]">
                The AI Fast-Track Session
              </Link>
              .
            </p>
            <p>
              <span className="text-[#1A1B2E] font-medium">
                Built into the business, thirty days.
              </span>{" "}
              This page. It starts with the two-hour working session and the
              demo, and it ends with you holding the keys.
            </p>
            <p>
              Already have{" "}
              <Link href="/back-cover" className="k-link k-focus text-[#2B5D96]">
                The Back Cover
              </Link>
              ? It stays a separate managed service with its own page. Inside a
              full implementation it becomes a routine in your own system, and
              what you paid for it is credited.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="max-w-6xl mx-auto px-6 lg:px-12 pb-24 border-t border-[rgba(26,27,46,0.13)] pt-14">
        <Reveal>
          <p className="text-[#262B3D] text-lg mb-4 max-w-xl">
            We only build things that make the technology disappear into the
            work. If it needs a training course afterward, we built the wrong
            thing.
          </p>
          <p className="text-[#1A1B2E] text-xl font-medium mb-6 max-w-xl">
            Two hours, then a ten-minute demo of your business on One Window.
            Decide from that.
          </p>
          <Link href="/schedule" className="k-btn-ghost k-focus inline-block">
            Pick a time <span className="k-arrow">&rarr;</span>
          </Link>
        </Reveal>
      </section>
    </div>
  );
}
