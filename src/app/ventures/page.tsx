import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Our Work | Kerzie AI",
  description:
    "Every product starts with a problem worth fixing. GotaGuy, Unison, Zorli, Ad2Action, TrueSeat.",
};

const products = [
  {
    name: "GotaGuy",
    clock: "DAY 3",
    problem: "Finding a contractor is a part-time job. It should take a text message.",
    href: "/ventures/gotaguy",
  },
  {
    name: "Unison",
    clock: "7:05 PM",
    problem: "Someone calls your business after hours. They get voicemail. You never knew they called.",
    href: "/ventures/unison",
  },
  {
    name: "Zorli",
    clock: "8 MIN",
    problem: "The information is there. Finding it costs more time than the answer is worth.",
    href: "/ventures/zorli",
  },
  {
    name: "Ad2Action",
    clock: "+14 HRS",
    problem: "You paid for the ad. You responded too late. They forgot they clicked.",
    href: "/ventures/ad2action",
  },
  {
    name: "TrueSeat",
    clock: "7 SEC",
    problem: "A recruiter reads your resume for seven seconds. Your career deserves evidence, not a skim.",
    href: "/ventures/trueseat",
  },
];

export default function VenturesPage() {
  return (
    <div className="bg-[#1A1B2E] min-h-screen">

      {/* Back link */}
      <div className="max-w-6xl mx-auto px-6 lg:px-12 pt-10">
        <Link
          href="/"
          className="k-mono text-[#AABBCC]/70 text-xs tracking-[0.15em] hover:text-white transition-colors duration-200 k-focus"
        >
          &larr; KERZIE<span className="text-[#E8896A]">.</span>AI
        </Link>
      </div>

      {/* Header */}
      <section className="max-w-6xl mx-auto px-6 lg:px-12 pt-16 lg:pt-20 pb-16">
        <p className="k-rise k-rise-1 k-label mb-8">The Work</p>
        <h1 className="k-rise k-rise-2 text-white font-bold tracking-[-0.025em] leading-[1.05] text-[clamp(2.25rem,5vw,3.75rem)]">
          What we have built so far.
        </h1>
        <p className="k-rise k-rise-3 mt-6 text-[#AABBCC] text-lg max-w-xl">
          Every product starts with a problem worth fixing.
        </p>
      </section>

      {/* The ledger */}
      <section className="max-w-6xl mx-auto px-6 lg:px-12 pb-28">
        <div className="k-hairline w-full" />
        {products.map((product, i) => (
          <Reveal key={product.name} delay={i * 80}>
            <Link
              href={product.href}
              className="group block py-10 lg:py-12 border-b border-[rgba(170,187,204,0.13)] k-focus"
            >
              <div className="lg:grid lg:grid-cols-12 lg:gap-8 lg:items-baseline">
                <div className="lg:col-span-3 mb-3 lg:mb-0 flex items-baseline gap-5">
                  <span className="k-mono text-[#E8896A] text-xs">
                    0{i + 1}
                  </span>
                  <span className="k-mono text-[#AABBCC]/40 text-sm tracking-tight">
                    {product.clock}
                  </span>
                </div>
                <div className="lg:col-span-6 mb-3 lg:mb-0">
                  <h2 className="text-white text-2xl lg:text-3xl font-semibold tracking-[-0.02em] group-hover:text-[#6B9FD4] transition-colors duration-200 mb-2">
                    {product.name}
                  </h2>
                  <p className="text-[#AABBCC] text-base leading-relaxed max-w-lg">
                    {product.problem}
                  </p>
                </div>
                <div className="lg:col-span-3 lg:text-right">
                  <span className="text-[#6B9FD4] text-sm font-semibold">
                    Read the story <span className="k-arrow">&rarr;</span>
                  </span>
                </div>
              </div>
            </Link>
          </Reveal>
        ))}
      </section>

    </div>
  );
}
