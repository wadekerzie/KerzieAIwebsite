import Link from "next/link";
import Reveal from "@/components/Reveal";

// VENTURES ONLY (Wade + Aaron, 2026-09-24): companies Kerzie AI owns and
// runs. Offers sold to other businesses (The Back Cover, For Sales Teams,
// Unison, Executive Legacy) live on /services. Unison and Executive Legacy
// keep their /ventures URLs so no inbound link breaks; they are simply not
// listed here. Ad2Action is folded into Unison and redirects there.
export const metadata = {
  title: "Ventures | Kerzie AI",
  description:
    "Companies Kerzie AI owns and runs: GotaGuy, TrueSeat, Packed House, Zorli, TrueNorth.",
};

const products = [
  {
    name: "GotaGuy",
    clock: "DAY 3",
    problem: "Finding a contractor is a part-time job. It should take a text message.",
    href: "/ventures/gotaguy",
  },
  {
    name: "TrueSeat",
    clock: "7 SEC",
    problem: "A recruiter reads your resume for seven seconds. Your career deserves evidence, not a skim.",
    href: "/ventures/trueseat",
  },
  {
    name: "Packed House",
    clock: "40/200",
    problem: "The show is booked, the night is paid for, and forty people came to a room that holds two hundred. Filling the Tuesday is nobody's job.",
    href: "/packed-house",
  },
  {
    name: "Zorli",
    clock: "8 MIN",
    problem: "The information is there. Finding it costs more time than the answer is worth.",
    href: "/ventures/zorli",
  },
  {
    name: "TrueNorth",
    clock: "2 AM",
    problem: "Everyone asks the same AI for life advice and gets the same answer. Yours should know what you stand for.",
    href: "/ventures/truenorth",
  },
];

export default function VenturesPage() {
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
      <section className="max-w-6xl mx-auto px-6 lg:px-12 pt-16 lg:pt-14 pb-16 lg:pb-12">
        <p className="k-rise k-rise-1 k-label mb-8 lg:mb-6">Ventures</p>
        <h1 className="k-rise k-rise-2 text-[#1A1B2E] font-bold tracking-[-0.025em] leading-[1.05] text-[clamp(2.25rem,5vw,3.75rem)]">
          Companies we own and run.
        </h1>
        <p className="k-rise k-rise-3 mt-6 text-[#262B3D] text-lg max-w-xl">
          Every one of them started as a problem worth fixing.
        </p>
        <p className="k-rise k-rise-3 mt-4 text-[#262B3D]/70 text-base lg:text-lg max-w-xl">
          Looking for Unison or Executive Legacy? Those are offers we sell to
          other businesses.{" "}
          <Link href="/services" className="k-link text-[#2B5D96] k-focus">
            See the offers <span className="k-arrow">&rarr;</span>
          </Link>
        </p>
      </section>

      {/* The ledger */}
      <section className="max-w-6xl mx-auto px-6 lg:px-12 pb-28 lg:pb-20">
        <div className="k-hairline w-full" />
        {products.map((product, i) => (
          <Reveal key={product.name} delay={i * 80}>
            <Link
              href={product.href}
              className="group block py-10 border-b border-[rgba(26,27,46,0.13)] k-focus"
            >
              <div className="lg:grid lg:grid-cols-12 lg:gap-8 lg:items-baseline">
                <div className="lg:col-span-3 mb-3 lg:mb-0 flex items-baseline gap-5">
                  <span className="k-mono text-[#B04E2B] text-xs lg:text-sm">
                    0{i + 1}
                  </span>
                  <span className="k-mono text-[#262B3D]/40 text-sm lg:text-base tracking-tight">
                    {product.clock}
                  </span>
                </div>
                <div className="lg:col-span-6 mb-3 lg:mb-0">
                  <h2 className="text-[#1A1B2E] text-2xl lg:text-3xl font-semibold tracking-[-0.02em] group-hover:text-[#2B5D96] transition-colors duration-200 mb-2">
                    {product.name}
                  </h2>
                  <p className="text-[#262B3D] text-base lg:text-lg leading-relaxed max-w-lg">
                    {product.problem}
                  </p>
                </div>
                <div className="lg:col-span-3 lg:text-right">
                  <span className="text-[#2B5D96] text-sm lg:text-base font-semibold">
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
