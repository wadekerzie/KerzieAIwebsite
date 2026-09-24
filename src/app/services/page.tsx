import Link from "next/link";
import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import { offer } from "@/content/siteFacts";

// THE OFFERS HUB (Wade + Aaron, 2026-09-24): "draw the line between what our
// offers are and what our ventures are, and stack rank what people see
// first." Offers are what we sell to other businesses, in Wade's order:
// Back Cover at the top, then Sales Teams, then Unison, then Executive
// Legacy. The smaller entry points follow under their own heading. Ventures
// (companies we own and run) live on /ventures and never appear here.
export const metadata: Metadata = {
  title: "Offers | Kerzie AI",
  description:
    "What Kerzie AI sells: The Back Cover, For Sales Teams, Unison, and Executive Legacy. Then the smaller ways in: One-Window, the AI Fast-Track Session, and AI Implementation.",
};

const backCover = offer("back-cover");
const fastTrack = offer("fast-track");
const oneWindow = offer("one-window");

// One line each, matching what the page itself says.
const ranked = [
  {
    label: "01",
    title: "The Back Cover",
    price: backCover.priceLabel,
    body: "Tired of talking about your website? The Back Cover is one page, written for the AI your customers now ask, that keeps itself current. Set up once, off your plate.",
    href: "/back-cover",
    cta: "Read the page",
  },
  {
    label: "02",
    title: "For Sales Teams",
    price: "Book a call",
    body: "Your team was told to use AI. Here is what it looks like when it works: every seller runs their own AI operating system, and the leader gets the view.",
    href: "/services/sales-teams",
    cta: "How the engagement runs",
  },
  {
    label: "03",
    title: "Unison",
    price: "Book a call",
    body: "Someone calls your business after hours and you never knew they called. Unison answers immediately across every channel.",
    href: "/ventures/unison",
    cta: "Read the story",
  },
  {
    label: "04",
    title: "Executive Legacy",
    price: "Book a call",
    body: "What walks out the door with a retiring executive? Executive Legacy captures that judgment in an answer set the successor can ask, every answer cited.",
    href: "/ventures/executive-legacy",
    cta: "Read the story",
  },
];

const entryPoints = [
  {
    label: "05",
    title: "One-Window",
    price: oneWindow.priceLabel,
    body: "Your own AI operating system, free, and every upgrade is free too. Three hours, two habits, one window, zero to-do list.",
    href: "/one-window",
    cta: "Get One-Window",
  },
  {
    label: "06",
    title: "AI Fast-Track Session",
    price: fastTrack.priceLabel,
    body: "Three hours, one room, up to three people. Each at your own machine, in your own business, on your own $20 AI subscription. Every person moves one painful workflow from manual to working, and every person leaves with One-Window. One person or three, same price.",
    href: "/services/fast-track",
    cta: "Read how it works",
  },
  {
    label: "07",
    title: "AI Implementation",
    price: "Scoped per project",
    body: "We map, build, and deploy AI systems inside your business operations end-to-end. From workflow analysis to live production deployment. No slide decks. No proofs of concept. And if you are already running an AI agent you are not sure you can trust, that is an implementation problem too. Bring it to us.",
    href: "/services/implementation",
    cta: "What we build",
  },
];

type Row = (typeof ranked)[number];

function OfferRow({ o, i, lead }: { o: Row; i: number; lead?: boolean }) {
  return (
    <Reveal delay={i * 80}>
      <div className="border-t border-[rgba(26,27,46,0.13)] py-12 lg:py-10 lg:grid lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-3 mb-4 lg:mb-0">
          <p className="k-label">{o.label}</p>
          <p className="k-mono text-[#B04E2B] text-xs lg:text-sm tracking-[0.15em] lg:tracking-[0.12em] mt-3">
            {o.price}
          </p>
          {lead && (
            <>
              {/* The Back Cover leads with its own image (Wade 9/24: the empty left column looked odd) */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/back-cover-book-tall.jpg"
                alt="A hardcover book seen from the back, its machine-readable metadata lit by a scanning beam"
                className="mt-5 w-28 sm:w-32 lg:w-full lg:max-w-[11rem] rounded-lg border border-[rgba(26,27,46,0.13)] shadow-xl shadow-black/30"
              />
            </>
          )}
        </div>
        <div className="lg:col-span-9">
          <h2
            className={`text-[#1A1B2E] font-bold tracking-tight mb-3 ${
              lead ? "text-3xl lg:text-4xl" : "text-2xl lg:text-3xl"
            }`}
          >
            {o.title}
          </h2>
          <p className="text-[#262B3D] text-lg leading-relaxed max-w-2xl mb-5">
            {o.body}
          </p>
          <Link href={o.href} className="k-link k-focus text-[#2B5D96] lg:text-lg font-medium">
            {o.cta} <span className="k-arrow">&rarr;</span>
          </Link>
        </div>
      </div>
    </Reveal>
  );
}

export default function ServicesPage() {
  return (
    <div className="bg-[#FAF8F4] min-h-screen">
      {/* Back link */}
      <div className="max-w-6xl mx-auto px-6 lg:px-12 pt-10">
        <Link
          href="/"
          className="k-mono text-[#262B3D]/70 text-xs lg:text-sm tracking-[0.15em] lg:tracking-[0.12em] hover:text-[#1A1B2E] transition-colors duration-200 k-focus"
        >
          &larr; KERZIE<span className="text-[#B04E2B]">.</span>AI
        </Link>
      </div>

      {/* Header */}
      <section className="max-w-6xl mx-auto px-6 lg:px-12 pt-16 lg:pt-14 pb-14 lg:pb-10">
        <p className="k-rise k-rise-1 k-label mb-8 lg:mb-6">Offers</p>
        <h1 className="k-rise k-rise-2 text-[#1A1B2E] font-bold tracking-[-0.025em] leading-[1.05] text-[clamp(2rem,4.5vw,3.25rem)]">
          What we sell<span className="text-[#B04E2B]">.</span>
        </h1>
        <p className="k-rise k-rise-3 mt-6 text-[#262B3D] text-lg max-w-xl leading-relaxed">
          Four offers, in the order we would point you at them. Then the
          smaller ways in. Either way: shipping, not slide decks.
        </p>
        <p className="k-rise k-rise-3 mt-4 text-[#262B3D]/70 text-base lg:text-lg max-w-xl">
          The companies we own and run are on a separate page.{" "}
          <Link href="/ventures" className="k-link text-[#2B5D96] k-focus">
            See the ventures <span className="k-arrow">&rarr;</span>
          </Link>
        </p>
      </section>

      {/* Evidence */}
      <section className="max-w-6xl mx-auto px-6 lg:px-12 pb-14 lg:pb-10">
        <Reveal>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/evidence/services-office.jpg"
            alt="A team of four in a modern office meeting room, a silver-haired leader standing and talking while three colleagues listen with laptops open"
            className="k-photo"
          />
        </Reveal>
      </section>

      {/* The four offers, ranked */}
      <section className="max-w-6xl mx-auto px-6 lg:px-12 pb-16">
        <div className="space-y-0">
          {ranked.map((o, i) => (
            <OfferRow key={o.title} o={o} i={i} lead={i === 0} />
          ))}
        </div>
      </section>

      {/* The smaller ways in */}
      <section className="max-w-6xl mx-auto px-6 lg:px-12 pb-16">
        <p className="k-label mb-2">The smaller ways in</p>
        <p className="text-[#262B3D]/70 text-base lg:text-lg max-w-xl mb-6">
          Start small and leave with something working.
        </p>
        <div className="space-y-0">
          {entryPoints.map((o, i) => (
            <OfferRow key={o.title} o={o} i={i} />
          ))}
        </div>
      </section>

      {/* Closer */}
      <section className="max-w-6xl mx-auto px-6 lg:px-12 pb-24 lg:pb-20 border-t border-[rgba(26,27,46,0.13)] pt-14">
        <Reveal>
          <p className="text-[#1A1B2E] text-xl lg:text-2xl font-medium mb-6 max-w-xl">
            Not sure which one fits?{" "}
            <span className="k-serif font-normal">Tell us what hurts</span> and
            we will point you at the smallest thing that fixes it.
          </p>
          <Link href="/schedule" className="k-btn-ghost k-focus inline-block">
            Pick a time <span className="k-arrow">&rarr;</span>
          </Link>
        </Reveal>
      </section>
    </div>
  );
}
