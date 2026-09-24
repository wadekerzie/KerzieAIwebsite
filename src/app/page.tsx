import Link from "next/link";
import Reveal from "@/components/Reveal";
import ProblemForm from "@/components/ProblemForm";
import BackCoverButton from "@/components/BackCoverButton";

export const metadata = {
  title: "Kerzie AI",
  description:
    "Life is best when technology just works. We build products that fix things people stopped expecting to get fixed.",
};

// OFFERS versus VENTURES (Wade + Aaron, 2026-09-24): "draw the line between
// what our offers are and what our ventures are, and stack rank what people
// see first." Offers are sold to other businesses and come first, in Wade's
// order: Back Cover at the top, then Sales Teams, then Unison, then Executive
// Legacy. Ventures are companies we own and run and get their own section
// further down. The two never share a list. One line each, matching what the
// page itself says.
const offers = [
  {
    name: "The Back Cover",
    line: "One page, written for the AI your customers now ask, that keeps itself current. Set up once, off your plate.",
    href: "/back-cover",
  },
  {
    name: "For Sales Teams",
    line: "Every seller runs their own AI operating system, and the leader gets the view. An engagement, not a login.",
    href: "/services/sales-teams",
  },
  {
    name: "Unison",
    line: "Someone calls your business after hours and you never knew they called. Unison answers immediately across every channel.",
    href: "/ventures/unison",
  },
  {
    name: "Executive Legacy",
    line: "Forty years of judgment retires at the end of the year. Executive Legacy captures it in an answer set the successor can ask, every answer cited.",
    href: "/ventures/executive-legacy",
  },
];

// The venture scenes. Unison left this list when it became an offer;
// Ad2Action is a custom implementation of Unison and is not called out
// separately (Wade, 2026-09-24).
const products = [
  {
    name: "GotaGuy",
    clock: "DAY 3",
    hook: "Your faucet has been dripping for three days.",
    body: "You Googled plumbers. First one: voicemail. Second one: booked until next Thursday. Third gave you a number over the phone that felt made up. You said you'd call back. You haven't. The faucet is still dripping.",
    href: "/ventures/gotaguy",
    image: "/evidence/after-gotaguy-v2.jpg",
    imageAlt: "A homeowner smiling at her phone in a bright kitchen while a plumber fixes the faucet behind her",
  },
  {
    name: "Zorli",
    clock: "8 MIN",
    hook: "Your teenager calls while you're watching a movie.",
    body: "They need the Netflix password. You know you saved it somewhere. Notes app, maybe. Or was it that email from three years ago. You pause the movie. You search. You try four things. You find it eight minutes later in a note called Misc. The movie is still paused. This happens every week.",
    href: "/ventures/zorli",
    image: "/evidence/after-zorli-v2.jpg",
    imageAlt: "A man relaxed on the couch, sending the password from his phone with a small smile",
  },
];

// The rest of the ventures, one line each, matching each page's own words.
const moreVentures = [
  { name: "TrueSeat", href: "/ventures/trueseat", line: "Resumes are claims. TrueSeat builds a sealed, evidence-backed dossier of what you can actually do." },
  { name: "Packed House", href: "/packed-house", line: "Your show is booked. Your room is a quarter full. Packed House fills the seats." },
  { name: "TrueNorth", href: "/ventures/truenorth", line: "Your personal board of history's wisest advisors, portable to any AI you use." },
];

export default function Home() {
  return (
    // `relative` anchors The Back Cover to the top-right of the page body.
    // HOMEPAGE ONLY (Wade, 2026-08-12): site-wide it landed on the essay
    // pages, where a bright marketing button on top of the paper design
    // cheapens a deliberate artifact - and it was redundant on /back-cover
    // itself. Outbound traffic goes straight to /back-cover anyway, so this
    // button is the discovery tell, not the main door.
    <div className="bg-[#FAF8F4] relative">
      <BackCoverButton />

      {/* ============ ACT ONE: THE BELIEF ============ */}
      <section className="max-w-6xl mx-auto px-6 lg:px-12 min-h-[min(calc(100svh-4rem),50rem)] flex flex-col justify-center pt-16 pb-12">
        <h1 className="k-rise k-rise-1 text-[#1A1B2E] font-bold tracking-[-0.03em] leading-[1.02] text-[clamp(2.75rem,7.5vw,5.5rem)]">
          Life is best when
          <br />
          technology{" "}
          <span className="k-serif font-normal">just works</span>
          <span className="text-[#B04E2B]">.</span>
        </h1>

        <p className="k-rise k-rise-2 mt-7 text-[#2B5D96] text-[clamp(1.25rem,2.2vw,1.625rem)] font-medium">
          The world&apos;s best tech feels the easiest.
        </p>

        <p className="k-rise k-rise-3 mt-8 text-[#262B3D] text-lg leading-relaxed max-w-xl">
          We build products that fix things people stopped expecting to get
          fixed. No courses. No explanations. No consulting decks. We ship and
          it works.
        </p>

        {/* The bylines: two trade publications ran the thinking. Receipts, not claims. */}
        <p className="k-rise k-rise-3 mt-6 k-mono text-xs tracking-[0.15em] text-[#262B3D]/60">
          PUBLISHED IN{" "}
          <a
            href="https://www.nrn.com/expert-opinions/why-restaurants-don-t-need-an-11-000-consultant-to-fix-prime-cost-anymore"
            target="_blank"
            rel="noopener"
            className="text-[#1A1B2E] underline underline-offset-4 decoration-[#B04E2B]/50 hover:decoration-[#B04E2B] k-focus"
          >
            NATION&apos;S RESTAURANT NEWS
          </a>{" "}
          <span className="text-[#B04E2B]/60">/</span>{" "}
          <a
            href="https://www.lawfuel.com/the-traffic-meter-cant-see-the-clients-ai-never-sends-you/"
            target="_blank"
            rel="noopener"
            className="text-[#1A1B2E] underline underline-offset-4 decoration-[#B04E2B]/50 hover:decoration-[#B04E2B] k-focus"
          >
            LAWFUEL
          </a>
        </p>

        {/* The index: the offers, in rank order */}
        <div className="k-rise k-rise-4 mt-20 flex flex-wrap items-baseline gap-x-3 gap-y-2 k-mono text-xs tracking-[0.15em] text-[#262B3D]/50">
          {offers.map((p, i) => (
            <span key={p.name} className="flex items-baseline gap-x-3">
              <Link
                href={p.href}
                className="hover:text-[#1A1B2E] transition-colors duration-200 k-focus"
              >
                {p.name.toUpperCase()}
              </Link>
              {i < offers.length - 1 && (
                <span className="text-[#B04E2B]/60">/</span>
              )}
            </span>
          ))}
        </div>
      </section>

      {/* ============ ACT ONE AND A HALF: THE OFFERS ============ */}
      {/* First content section after the hero (Wade + Aaron, 2026-09-24):
          the four offers in rank order, Back Cover first and largest. */}
      <section id="offers" className="bg-[#FFFFFF] border-t border-[rgba(26,27,46,0.13)]">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 py-20 lg:py-28">
          <Reveal>
            <div className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-3 mb-12 lg:mb-16">
              <p className="k-label">
                <span className="idx">01</span>What We Sell
              </p>
              <Link
                href="/services"
                className="k-link text-[#2B5D96] text-sm font-semibold hover:text-[#1A1B2E] transition-colors duration-200"
              >
                All offers <span className="k-arrow">&rarr;</span>
              </Link>
            </div>
          </Reveal>

          {/* Back Cover leads: full width, the biggest type on the page below the hero */}
          <Reveal>
            <Link
              href={offers[0].href}
              className="group block border-t-2 border-[#B04E2B] pt-8 pb-10 k-focus"
            >
              <div className="lg:grid lg:grid-cols-12 lg:gap-8 lg:items-baseline">
                <div className="lg:col-span-3 mb-3 lg:mb-0">
                  <span className="k-mono text-[#B04E2B] text-xs">01</span>
                </div>
                <div className="lg:col-span-9">
                  <h2 className="text-[#1A1B2E] text-[clamp(1.75rem,3.6vw,2.75rem)] font-bold tracking-[-0.02em] leading-[1.05] group-hover:text-[#2B5D96] transition-colors duration-200 mb-4">
                    {offers[0].name}
                  </h2>
                  <p className="text-[#262B3D] text-lg leading-relaxed max-w-2xl mb-4">
                    {offers[0].line}
                  </p>
                  <span className="text-[#2B5D96] text-sm font-semibold">
                    Read the page <span className="k-arrow">&rarr;</span>
                  </span>
                </div>
              </div>
            </Link>
          </Reveal>

          {/* Then the other three, in order */}
          <div className="lg:grid lg:grid-cols-3 lg:gap-8">
            {offers.slice(1).map((o, i) => (
              <Reveal key={o.name} delay={(i + 1) * 80}>
                <Link
                  href={o.href}
                  className="group block border-t border-[rgba(26,27,46,0.13)] pt-6 pb-8 h-full k-focus"
                >
                  <span className="k-mono text-[#B04E2B] text-xs">0{i + 2}</span>
                  <h3 className="mt-3 text-[#1A1B2E] text-xl font-semibold tracking-tight group-hover:text-[#2B5D96] transition-colors duration-200 mb-3">
                    {o.name}
                  </h3>
                  <p className="text-[#262B3D] text-base leading-relaxed mb-4">
                    {o.line}
                  </p>
                  <span className="text-[#2B5D96] text-sm font-semibold">
                    Read more <span className="k-arrow">&rarr;</span>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ THE ENGINES ============ */}
      <section className="max-w-6xl mx-auto px-6 lg:px-12 pt-8 lg:pt-10 pb-24 lg:pb-32">
        <Reveal>
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-3 mb-8 lg:mb-0">
              <p className="k-label">
                <span className="idx">02</span>The Engines
              </p>
            </div>
            <div className="lg:col-span-9">
              <p className="text-[#1A1B2E] text-[clamp(1.375rem,2.6vw,1.875rem)] font-medium leading-snug max-w-3xl">
                Anthropic, OpenAI, Google, and DeepSeek spent billions building
                the most powerful reasoning engines in history. We use them to{" "}
                <span className="k-serif font-normal">
                  fix a leaky faucet, answer your phone at 7pm, and find your
                  Netflix password.
                </span>
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ============ ACT TWO: THE VENTURES ============ */}
      {/* Companies we own and run. A separate section, after the offers,
          never mixed with them (Wade + Aaron, 2026-09-24). */}
      <section id="what-we-built" className="bg-[#FFFFFF]">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 py-24 lg:py-32">
          <Reveal>
            <div className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-3 mb-4">
              <p className="k-label">
                <span className="idx">03</span>Companies We Own and Run
              </p>
              <Link
                href="/ventures"
                className="k-link text-[#2B5D96] text-sm font-semibold hover:text-[#1A1B2E] transition-colors duration-200"
              >
                All ventures <span className="k-arrow">&rarr;</span>
              </Link>
            </div>
            <p className="text-[#262B3D] text-base max-w-xl mb-16 lg:mb-20">
              Not offers. Our own companies, each one started as a problem
              worth fixing.
            </p>
          </Reveal>

          <div className="space-y-16 lg:space-y-24">
            {products.map((product, i) => (
              <Reveal key={product.name} delay={i % 2 === 0 ? 0 : 100}>
                <div className="lg:grid lg:grid-cols-12 lg:gap-8">
                  {/* Time is the villain; the scene is the evidence */}
                  <div className="lg:col-span-3 mb-4 lg:mb-0 lg:text-right">
                    <p className="k-mono text-[clamp(1.5rem,2.8vw,2.25rem)] text-[#262B3D]/40 leading-none tracking-tight">
                      {product.clock}
                    </p>
                    <figure className="hidden lg:block mt-8">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={product.image}
                        alt={product.imageAlt}
                        loading="lazy"
                        className="k-photo aspect-[4/3]"
                      />
                    </figure>
                  </div>
                  <div className="lg:col-span-9 border-l-2 border-[#B04E2B] pl-6 lg:pl-8">
                    <h3 className="text-[#1A1B2E] text-[clamp(1.375rem,2.3vw,1.75rem)] font-semibold leading-snug mb-4">
                      {product.hook}
                    </h3>
                    <p className="text-[#262B3D] text-base leading-relaxed max-w-2xl mb-6">
                      {product.body}
                    </p>
                    <Link
                      href={product.href}
                      className="k-link text-[#2B5D96] text-sm font-semibold hover:text-[#1A1B2E] transition-colors duration-200"
                    >
                      {product.name} <span className="k-arrow">&rarr;</span>
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* The rest of the ventures, one line each */}
          <div className="mt-16 lg:mt-24 border-t border-[rgba(26,27,46,0.13)] pt-8 grid gap-6 sm:grid-cols-3">
            {moreVentures.map((v) => (
              <Link key={v.name} href={v.href} className="group block k-focus">
                <h3 className="text-[#1A1B2E] text-lg font-semibold tracking-tight group-hover:text-[#2B5D96] transition-colors duration-200 mb-2">
                  {v.name}
                </h3>
                <p className="text-[#262B3D] text-sm leading-relaxed">
                  {v.line}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============ AUDIENCE DOOR: SALES TEAMS ============ */}
      <section className="border-t border-[rgba(26,27,46,0.13)] bg-[#FFFFFF]">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 py-16 lg:py-20">
          <Reveal>
            <div className="lg:grid lg:grid-cols-12 lg:gap-8 lg:items-center">
              <div className="lg:col-span-8">
                <p className="k-label mb-4">Leading a sales team?</p>
                <p className="text-[#1A1B2E] text-[clamp(1.375rem,2.6vw,1.875rem)] font-medium leading-snug max-w-2xl">
                  Your reps have AI licenses. That is not the same as{" "}
                  <span className="k-serif font-normal">using</span> them.
                </p>
              </div>
              <div className="lg:col-span-4 mt-6 lg:mt-0 lg:text-right">
                <Link
                  href="/services/sales-teams"
                  className="k-link text-[#2B5D96] text-sm font-semibold hover:text-[#1A1B2E] transition-colors duration-200"
                >
                  For Sales Teams <span className="k-arrow">&rarr;</span>
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ ACT THREE: THE QUESTION ============ */}
      <section id="whats-broken" className="max-w-6xl mx-auto px-6 lg:px-12 py-24 lg:py-32">
        <Reveal>
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-3 mb-8 lg:mb-0">
              <p className="k-label">
                <span className="idx">04</span>The Question
              </p>
            </div>
            <div className="lg:col-span-9">
              <h2 className="text-[#1A1B2E] text-[clamp(2rem,4.5vw,3.25rem)] font-bold tracking-[-0.02em] leading-[1.05] mb-5">
                What problem hurts the most?
              </h2>
              <p className="text-[#262B3D] text-base mb-4 max-w-xl">
                Everything above started as somebody&apos;s problem. That&apos;s
                the whole business: find where technology is failing a person,
                and make it simple enough to actually help.
              </p>
              <p className="text-[#262B3D] text-base mb-10 max-w-xl">
                Don&apos;t worry about the solution. Just tell us the problem.
                The longer the better.
              </p>
              <ProblemForm />
            </div>
          </div>
        </Reveal>
      </section>

    </div>
  );
}
