import Link from "next/link";
import Reveal from "@/components/Reveal";
import ProblemForm from "@/components/ProblemForm";

export const metadata = {
  title: "Kerzie AI",
  description:
    "Life is best when technology just works. We build products that fix things people stopped expecting to get fixed.",
};

const products = [
  {
    name: "GotaGuy",
    clock: "DAY 3",
    hook: "Your faucet has been dripping for three days.",
    body: "You Googled plumbers. First one: voicemail. Second one: booked until next Thursday. Third gave you a number over the phone that felt made up. You said you'd call back. You haven't. The faucet is still dripping.",
    href: "/ventures/gotaguy",
  },
  {
    name: "Unison",
    clock: "7:05 PM",
    hook: "Someone calls your law firm at 7:05pm.",
    body: "They get voicemail. They needed an answer tonight. They'll call someone else in the morning. You never knew they called.",
    href: "/ventures/unison",
  },
  {
    name: "Zorli",
    clock: "8 MIN",
    hook: "Your teenager calls while you're watching a movie.",
    body: "They need the Netflix password. You know you saved it somewhere. Notes app, maybe. Or was it that email from three years ago. You pause the movie. You search. You try four things. You find it eight minutes later in a note called Misc. The movie is still paused. This happens every week.",
    href: "/ventures/zorli",
  },
  {
    name: "Ad2Action",
    clock: "+14 HRS",
    hook: "You paid for the ad.",
    body: "Someone clicked at 7pm on a Thursday. They filled out the form. Your autoresponder fired. By Friday morning when you followed up, they didn't remember why they clicked. You bought their attention at peak interest and responded at zero interest.",
    href: "/ventures/ad2action",
  },
];

export default function Home() {
  return (
    <div className="bg-[#1A1B2E]">

      {/* ============ ACT ONE: THE BELIEF ============ */}
      <section className="max-w-6xl mx-auto px-6 lg:px-12 min-h-[min(calc(100svh-4rem),50rem)] flex flex-col justify-center pt-16 pb-12">
        <h1 className="k-rise k-rise-1 text-white font-bold tracking-[-0.03em] leading-[1.02] text-[clamp(2.75rem,7.5vw,5.5rem)]">
          Life is best when
          <br />
          technology{" "}
          <span className="k-serif font-normal">just works</span>
          <span className="text-[#E8896A]">.</span>
        </h1>

        <p className="k-rise k-rise-2 mt-7 text-[#6B9FD4] text-[clamp(1.25rem,2.2vw,1.625rem)] font-medium">
          The world&apos;s best tech feels the easiest.
        </p>

        <p className="k-rise k-rise-3 mt-8 text-[#AABBCC] text-lg leading-relaxed max-w-xl">
          We build products that fix things people stopped expecting to get
          fixed. No courses. No explanations. No consulting decks. We ship and
          it works.
        </p>

        {/* The index: what's on the bench */}
        <div className="k-rise k-rise-4 mt-20 flex flex-wrap items-baseline gap-x-3 gap-y-2 k-mono text-xs tracking-[0.15em] text-[#AABBCC]/50">
          {products.map((p, i) => (
            <span key={p.name} className="flex items-baseline gap-x-3">
              <Link
                href={p.href}
                className="hover:text-white transition-colors duration-200 k-focus"
              >
                {p.name.toUpperCase()}
              </Link>
              {i < products.length - 1 && (
                <span className="text-[#E8896A]/60">/</span>
              )}
            </span>
          ))}
        </div>
      </section>

      {/* ============ THE ENGINES ============ */}
      <section className="max-w-6xl mx-auto px-6 lg:px-12 pt-8 lg:pt-10 pb-24 lg:pb-32">
        <Reveal>
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-3 mb-8 lg:mb-0">
              <p className="k-label">
                <span className="idx">01</span>The Engines
              </p>
            </div>
            <div className="lg:col-span-9">
              <p className="text-white text-[clamp(1.375rem,2.6vw,1.875rem)] font-medium leading-snug max-w-3xl">
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

      {/* ============ ACT TWO: THE PROBLEMS ============ */}
      <section id="what-we-built" className="bg-[#1E2035]">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 py-24 lg:py-32">
          <Reveal>
            <p className="k-label mb-16 lg:mb-20">
              <span className="idx">02</span>What We Fixed
            </p>
          </Reveal>

          <div className="space-y-16 lg:space-y-24">
            {products.map((product, i) => (
              <Reveal key={product.name} delay={i % 2 === 0 ? 0 : 100}>
                <div className="lg:grid lg:grid-cols-12 lg:gap-8">
                  {/* Time is the villain */}
                  <div className="lg:col-span-3 mb-4 lg:mb-0 lg:text-right">
                    <p className="k-mono text-[clamp(1.5rem,2.8vw,2.25rem)] text-[#AABBCC]/40 leading-none tracking-tight">
                      {product.clock}
                    </p>
                  </div>
                  <div className="lg:col-span-9 border-l-2 border-[#E8896A] pl-6 lg:pl-8">
                    <h3 className="text-white text-[clamp(1.375rem,2.3vw,1.75rem)] font-semibold leading-snug mb-4">
                      {product.hook}
                    </h3>
                    <p className="text-[#AABBCC] text-base leading-relaxed max-w-2xl mb-6">
                      {product.body}
                    </p>
                    <Link
                      href={product.href}
                      className="k-link text-[#6B9FD4] text-sm font-semibold hover:text-white transition-colors duration-200"
                    >
                      {product.name} <span className="k-arrow">&rarr;</span>
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ ACT THREE: THE QUESTION ============ */}
      <section id="whats-broken" className="max-w-6xl mx-auto px-6 lg:px-12 py-24 lg:py-32">
        <Reveal>
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-3 mb-8 lg:mb-0">
              <p className="k-label">
                <span className="idx">03</span>The Question
              </p>
            </div>
            <div className="lg:col-span-9">
              <h2 className="text-white text-[clamp(2rem,4.5vw,3.25rem)] font-bold tracking-[-0.02em] leading-[1.05] mb-5">
                What problem hurts the most?
              </h2>
              <p className="text-[#AABBCC] text-base mb-10 max-w-xl">
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
