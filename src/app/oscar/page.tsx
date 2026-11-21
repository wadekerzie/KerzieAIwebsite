import Link from "next/link";
import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import { offer, ONE_WINDOW, usd, SITE_URL } from "@/content/siteFacts";
import { serviceJsonLd } from "@/content/jsonLd";

// OSCAR BY KERZIE AI (Wade, ruled 2026-11-21). The paid offer that used to be
// called "One Window Implementation". Same price, same thirty days, same
// credit, no required monthly. Every number on this page comes from siteFacts
// so this page, /services, the JSON-LD and /llms.txt cannot quote different
// figures.
//
// HOUSE RULES FOR THIS PAGE:
// - Always the full name "Oscar by Kerzie AI" in headings, titles and the
//   first mention. The product is "it". Only the drawing is a "he".
// - One Window stays: it is the windshield, the screen you drive it from, and
//   the name of the free do-it-yourself download.
// - One driver first. Nothing about how many people a business needs.
// - The Oscar character never shares a section or an image with the Back
//   Cover robot.
const OSCAR = offer("oscar");
const WORKING_SESSION = offer("working-session");
const FAST_TRACK = offer("fast-track");

const DESCRIPTION =
  "Oscar by Kerzie AI is an AI operating system for your business. We set it up inside your business, teach you to drive it, hand you the keys and get out of the car. Thirty days, one driver first, no required monthly.";

export const metadata: Metadata = {
  title: "Oscar by Kerzie AI | Kerzie AI",
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/oscar` },
  openGraph: {
    type: "website",
    title: "Oscar by Kerzie AI",
    description: DESCRIPTION,
    url: `${SITE_URL}/oscar`,
    images: [
      {
        url: "/oscar/og.jpg",
        width: 1200,
        height: 630,
        alt: "Oscar by Kerzie AI: an illustrated man holding out a set of car keys at an open car door",
      },
    ],
  },
  twitter: { card: "summary_large_image", images: ["/oscar/og.jpg"] },
};

const MOONSHOTS_URL = "https://www.youtube.com/watch?v=SMDmpHAWAck&t=3114s";

const carParts = [
  {
    name: "The dashboard.",
    body: "Every car has one, so the driver can see how they're driving. Here it's your dashboards.",
  },
  {
    name: "The center console.",
    body: "Everything within arm's reach of the driver: the air conditioning, the rear defrost, the sunroof. Here each control is a connection to one of your tools. We connect your tech stack, and those connections are the upgrades we fit to your business.",
  },
  {
    name: "The engine.",
    body: "The AI model. It's what makes the controls work. Today that's Claude, and the engine can be swapped.",
  },
  {
    name: "The voice button.",
    body: "Most cars have a button on the steering wheel that opens a voice channel. This one does too. Press one key and talk to it. You reach every control by telling it what to do.",
  },
  {
    name: "The windshield.",
    body: "One Window: the screen you drive it from.",
  },
  {
    name: "The fuel.",
    body: "Your AI subscription. It's the only required ongoing cost.",
  },
];

const habits = [
  {
    say: "“Good morning.”",
    body: "That's how every session starts. Get in, buckle up, start the engine.",
  },
  {
    say: "Screenshot a text thread and hand it over.",
    body: "The back-and-forth with a customer is context. It goes in.",
  },
  {
    say: "Screenshot a thread from your work chat and hand it over.",
    body: "Same habit, different window.",
  },
  {
    say: "“Check this email and draft a reply.”",
    body: "You read the draft. You decide what gets sent.",
  },
];

const thirtyDays = [
  {
    name: "Build.",
    body: "We connect the platforms you already run on and fit the upgrades to how your business actually works. Nothing generic, nothing you have to migrate into.",
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

const SECTION =
  "max-w-6xl mx-auto px-6 lg:px-12 py-14 border-t border-[rgba(26,27,46,0.13)]";
const PROSE = "max-w-2xl space-y-4 text-[#262B3D] text-lg leading-relaxed";

export default function OscarPage() {
  return (
    <div className="bg-[#FAF8F4] min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd(OSCAR)) }}
      />
      <div className="max-w-6xl mx-auto px-6 lg:px-12 pt-10">
        <Link
          href="/services"
          className="k-mono text-[#262B3D]/70 text-xs lg:text-sm tracking-[0.15em] lg:tracking-[0.12em] hover:text-[#1A1B2E] transition-colors duration-200 k-focus"
        >
          &larr; WORK WITH US
        </Link>
      </div>

      {/* Hero: image #3, handing over the keys */}
      <section className="max-w-6xl mx-auto px-6 lg:px-12 pt-16 lg:pt-14 pb-16 lg:pb-14">
        <div className="lg:grid lg:grid-cols-12 lg:gap-12 lg:items-center">
          <div className="lg:col-span-7">
            <p className="k-rise k-rise-1 k-label mb-8 lg:mb-6">Oscar by Kerzie AI</p>
            <h1 className="k-rise k-rise-2 text-[#1A1B2E] font-bold tracking-[-0.025em] leading-[1.05] text-[clamp(2.25rem,5vw,3.75rem)]">
              The car is already built.{" "}
              <span className="k-serif font-normal">Here are the keys</span>
              <span className="text-[#B04E2B]">.</span>
            </h1>
            <p className="k-rise k-rise-3 mt-6 text-[#262B3D] text-lg lg:text-xl max-w-xl leading-relaxed">
              Oscar by Kerzie AI is an AI operating system for your business.
              We set it up inside your business, teach you to drive it, hand
              you the keys and get out of the car.
            </p>
            <div className="k-rise k-rise-4 mt-8 flex flex-wrap gap-4">
              <Link href="/schedule" className="k-btn-solid k-focus inline-block">
                Book a call <span className="k-arrow">&rarr;</span>
              </Link>
              <a href="#price" className="k-btn-ghost k-focus inline-block">
                See the price
              </a>
            </div>
          </div>
          <div className="lg:col-span-5 mt-12 lg:mt-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/oscar/oscar-keys.jpg"
              width={1024}
              height={1024}
              alt="Illustration of Oscar handing over car keys at an open car door"
              className="k-rise k-rise-3 w-full h-auto max-w-md lg:max-w-none rounded-lg border border-[rgba(26,27,46,0.13)]"
            />
          </div>
        </div>
      </section>

      {/* The gap */}
      <section className={SECTION}>
        <Reveal>
          <p className="k-label mb-6">The Gap</p>
          <h2 className="text-[#1A1B2E] text-[clamp(1.75rem,3.4vw,2.5rem)] font-bold tracking-[-0.02em] leading-[1.1] max-w-2xl mb-6">
            Has anyone brought you an AI plan?
          </h2>
          <div className={PROSE}>
            <p>
              It&apos;s the first question we ask an owner. On the Moonshots
              podcast, Dave Blundin said nine in ten people at midsize
              companies haven&apos;t had one credible AI upgrade meeting (
              <a
                href={MOONSHOTS_URL}
                target="_blank"
                rel="noopener"
                className="k-link k-focus text-[#2B5D96]"
              >
                hear him say it
              </a>
              ).
            </p>
            <p className="text-[#1A1B2E] font-medium">
              Oscar by Kerzie AI is that meeting, and what comes after it: an
              AI operating system set up inside your business, with you
              driving it.
            </p>
          </div>
        </Reveal>
      </section>

      {/* The car, part by part */}
      <section className={SECTION}>
        <Reveal>
          <p className="k-label mb-6">The Car, Part By Part</p>
          <p className="max-w-2xl text-[#262B3D] text-lg leading-relaxed mb-8">
            Oscar by Kerzie AI is the car, and the car is already built. What
            changes from one business to the next is the upgrades: your tools,
            connected.
          </p>
          <ul className="max-w-2xl space-y-4">
            {carParts.map((item) => (
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

      {/* One driver first */}
      <section className={SECTION}>
        <Reveal>
          <p className="k-label mb-6">One Driver First</p>
          <div className={PROSE}>
            <p className="text-[#1A1B2E] text-xl font-semibold">
              Step one is one person learning to drive.
            </p>
            <p>
              Ideally that&apos;s the owner, or the most senior person you can
              put in the seat. In a small company, the higher up the driver,
              the better. One person learning to drive it changes the
              business.
            </p>
            <p>
              From there, the driver decides who else gets keys.
            </p>
            <p>
              We don&apos;t try to turn a company that has run the same way
              for 20 years into an AI-native company overnight. That&apos;s
              too heavy a lift, and it fails.
            </p>
          </div>
        </Reveal>
      </section>

      {/* Driver's ed: image #2 as the section break */}
      <section className={SECTION}>
        <Reveal>
          <div className="lg:grid lg:grid-cols-12 lg:gap-12 lg:items-start">
            <div className="lg:col-span-7">
              <p className="k-label mb-6">Driver&apos;s Ed</p>
              <p className="max-w-2xl text-[#262B3D] text-lg leading-relaxed mb-8">
                A handful of habits. You learn them once and repeat them every
                time you get in.
              </p>
              <ul className="max-w-2xl space-y-4">
                {habits.map((h) => (
                  <li
                    key={h.say}
                    className="border-l border-[#B04E2B] pl-5 text-[#262B3D] text-lg leading-relaxed"
                  >
                    <span className="text-[#1A1B2E] font-medium">{h.say}</span>{" "}
                    {h.body}
                  </li>
                ))}
              </ul>
              <p className="max-w-2xl mt-8 text-[#1A1B2E] text-lg font-medium leading-relaxed">
                The point of all of it: get your context in first, so every
                next step picks up where the last one left off, day after day.
              </p>
            </div>
            <div className="lg:col-span-5 mt-10 lg:mt-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/oscar/oscar-open-road.jpg"
                width={1024}
                height={1024}
                loading="lazy"
                alt="Travel-poster illustration of Oscar leaning on a coral convertible beside a coastal road, keys in hand"
                className="w-full h-auto max-w-md lg:max-w-none rounded-lg border border-[rgba(26,27,46,0.13)]"
              />
            </div>
          </div>
        </Reveal>
      </section>

      {/* The documentary: image #4 */}
      <section className={SECTION}>
        <Reveal>
          <div className="lg:grid lg:grid-cols-12 lg:gap-12 lg:items-start">
            <div className="lg:col-span-5 mb-10 lg:mb-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/oscar/oscar-documentary.jpg"
                width={1024}
                height={1024}
                loading="lazy"
                alt="Ink and watercolor illustration of Oscar relaxed in a leather chair, driving gloves on, car keys on the armrest"
                className="w-full h-auto max-w-md lg:max-w-none rounded-lg border border-[rgba(26,27,46,0.13)]"
              />
            </div>
            <div className="lg:col-span-7">
              <p className="k-label mb-6">First, A Documentary</p>
              <div className={PROSE}>
                <p className="text-[#1A1B2E] text-xl font-semibold">
                  The first week or two is a documentary of your business.
                </p>
                <p>
                  A few one-hour sessions. We interview you and your people
                  about how the business runs today.
                </p>
                <p>
                  The upgrades come after that, fitted to what we heard.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* How it starts: the two-hour working session */}
      <section id="start" className={`${SECTION} scroll-mt-24`}>
        <Reveal>
          <p className="k-label mb-6">How It Starts</p>
          <div className={PROSE}>
            <p className="text-[#1A1B2E] text-xl font-semibold">
              A two-hour working session. {WORKING_SESSION.priceLabel}.
            </p>
            <p>
              We sit down for two hours and learn how you run the business
              today: the platforms you are on, the tools you pay for, how
              marketing goes out and how customers reach you.
            </p>
            <p>
              Then we come back with a short recorded demo, about ten minutes,
              showing how your business would run with Oscar by Kerzie AI.
              Wade records the voiceover himself. That demo is your go or
              no-go.
            </p>
            <p>
              You agree to the {usd(ONE_WINDOW.workingSessionPrice)} before we
              put the session on the calendar. If you go ahead, it rolls into
              the price. If you decide not to, that is the only invoice you
              will get from us.
            </p>
          </div>
        </Reveal>
      </section>

      {/* Build, Drive, Own */}
      <section className={SECTION}>
        <Reveal>
          <p className="k-label mb-6">
            Build, Drive, Own: {ONE_WINDOW.implementationDays} Days
          </p>
          <p className="max-w-2xl text-[#262B3D] text-lg leading-relaxed mb-8">
            Like driver&apos;s ed: we have the second brake pedal for a while,
            and the lessons end when you can drive.
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

      {/* The price, rendered from siteFacts */}
      <section id="price" className={`${SECTION} scroll-mt-24`}>
        <Reveal>
          <p className="k-label mb-6">The Price</p>
          <div className={PROSE}>
            <p className="text-[#1A1B2E] text-xl font-semibold">
              {OSCAR.priceLabel}.
            </p>
            <p>
              One time. {usd(ONE_WINDOW.marketPrice)} is the market rate. The
              Founders rate is {usd(ONE_WINDOW.foundersPrice)} for commitments
              made in {ONE_WINDOW.foundersYear}.
            </p>
            <p>
              Anything you have already paid Kerzie AI, a Back Cover setup for
              example, is credited toward it. The{" "}
              {usd(ONE_WINDOW.workingSessionPrice)} from the working session
              rolls in the same way.
            </p>
            <p>
              You are paying for our time and our know-how, up front, and then
              it is yours. There is no required monthly after the{" "}
              {ONE_WINDOW.implementationDays} days. The only required ongoing
              cost is the fuel: your AI subscription. If you want call-in help
              later, there is an optional retainer. Optional means optional.
            </p>
          </div>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/schedule" className="k-btn-solid k-focus inline-block">
              Book a call <span className="k-arrow">&rarr;</span>
            </Link>
          </div>
        </Reveal>
      </section>

      {/* The other ways in */}
      <section className={SECTION}>
        <Reveal>
          <p className="k-label mb-6">Other Ways In</p>
          <div className="max-w-2xl space-y-5 text-[#262B3D] text-lg leading-relaxed">
            <p>
              <span className="text-[#1A1B2E] font-medium">Do it yourself, free.</span>{" "}
              One Window, the free starter, is still free, and so is every
              upgrade. Paste the Foundation into Claude, answer its questions,
              and run it.{" "}
              <Link href="/one-window" className="k-link k-focus text-[#2B5D96]">
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
              Already have{" "}
              <Link href="/back-cover" className="k-link k-focus text-[#2B5D96]">
                The Back Cover
              </Link>
              ? It stays a separate managed service with its own page. Inside
              Oscar by Kerzie AI it becomes a routine in your own system, and
              what you paid for it is credited.
            </p>
          </div>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-6 lg:px-12 pb-24 border-t border-[rgba(26,27,46,0.13)] pt-14">
        <Reveal>
          <p className="text-[#1A1B2E] text-xl lg:text-2xl font-medium mb-6 max-w-xl">
            Has anyone brought you an AI plan?{" "}
            <span className="k-serif font-normal">Book a call</span> and we
            will bring you one.
          </p>
          <Link href="/schedule" className="k-btn-solid k-focus inline-block">
            Book a call <span className="k-arrow">&rarr;</span>
          </Link>
        </Reveal>
      </section>
    </div>
  );
}
