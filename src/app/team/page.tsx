import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "The People | Kerzie AI",
  description: "The people behind the work.",
};

const people = [
  {
    name: "Wade Kerzie",
    role: "Founder. Building AI-native products that fix real problems.",
    href: "https://pro.wadekerzie.com",
    external: true,
    photo: "/headshot.jpg",
    initials: null,
  },
  {
    name: "Aaron Jones",
    role: "Technical Specialist. Colorado market. Making sure the work actually gets done.",
    href: "#",
    external: false,
    photo: "/aaron.jpg",
    initials: null,
  },
];

export default function TeamPage() {
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
        <p className="k-rise k-rise-1 k-label mb-8">The People</p>
        <h1 className="k-rise k-rise-2 text-white font-bold tracking-[-0.025em] leading-[1.05] text-[clamp(2.25rem,5vw,3.75rem)]">
          The people behind the work.
        </h1>
      </section>

      {/* Profiles */}
      <section className="max-w-6xl mx-auto px-6 lg:px-12 pb-28">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl">
          {people.map((person, i) => (
            <Reveal key={person.name} delay={i * 100}>
              <div className="bg-[#1E2035] p-8 lg:p-10 flex flex-col gap-6 h-full">
                {person.photo ? (
                  /* eslint-disable-next-line @next/next/no-img-element */
                  <img
                    src={person.photo}
                    alt={person.name}
                    className="w-[104px] h-[104px] rounded-full object-cover"
                  />
                ) : (
                  <div className="w-[104px] h-[104px] rounded-full bg-[#1A1B2E] flex items-center justify-center">
                    <span className="k-mono text-[#6B9FD4] text-xl">
                      {person.initials}
                    </span>
                  </div>
                )}
                <div className="flex-1">
                  <p className="text-white text-xl font-medium mb-2">
                    {person.name}
                  </p>
                  <p className="text-[#AABBCC] text-[15px] leading-relaxed">
                    {person.role}
                  </p>
                </div>
                {person.external ? (
                  <a
                    href={person.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="k-link self-start text-[#6B9FD4] text-sm font-semibold hover:text-white transition-colors duration-200"
                  >
                    See more <span className="k-arrow">&rarr;</span>
                  </a>
                ) : (
                  <Link
                    href={person.href}
                    className="k-link self-start text-[#6B9FD4] text-sm font-semibold hover:text-white transition-colors duration-200"
                  >
                    See more <span className="k-arrow">&rarr;</span>
                  </Link>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

    </div>
  );
}
