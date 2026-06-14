import Link from "next/link";

const products = [
  {
    name: "GotaGuy",
    problem: "Finding a contractor is a part-time job. It should take a text message.",
    href: "/ventures/gotaguy",
  },
  {
    name: "Unison",
    problem: "Someone calls your business after hours. They get voicemail. You never knew they called.",
    href: "/ventures/unison",
  },
  {
    name: "Zorli",
    problem: "The information is there. Finding it costs more time than the answer is worth.",
    href: "/ventures/zorli",
  },
  {
    name: "Ad2Action",
    problem: "You paid for the ad. You responded too late. They forgot they clicked.",
    href: "/ventures/ad2action",
  },
];

export default function VenturesPage() {
  return (
    <div className="bg-[#1A1B2E] min-h-screen">

      {/* Back link */}
      <div className="max-w-3xl mx-auto px-6 pt-8">
        <Link
          href="/"
          className="text-[#AABBCC] text-sm hover:text-white transition-colors duration-150"
        >
          &larr; Back to kerzie.ai
        </Link>
      </div>

      {/* Header */}
      <section className="px-6 pt-16 pb-12 max-w-5xl mx-auto">
        <h1 className="text-white text-[40px] font-black leading-none tracking-tight mb-4">
          What we have built so far.
        </h1>
        <p className="text-[#AABBCC]">
          Every product starts with a problem worth fixing.
        </p>
      </section>

      {/* Product grid */}
      <section className="px-6 pb-24 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {products.map((product) => (
            <div key={product.name} className="bg-[#1E2035] p-8 flex flex-col justify-between">
              <div>
                <h2 className="text-white text-xl font-bold mb-3">
                  {product.name}
                </h2>
                <p className="text-[#AABBCC] text-sm leading-relaxed">
                  {product.problem}
                </p>
              </div>
              <div className="mt-6">
                <Link
                  href={product.href}
                  className="text-[#6B9FD4] text-sm font-semibold hover:text-white transition-colors duration-150"
                >
                  Read the story &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
