import Link from "next/link";

const people = [
  {
    name: "Wade Kerzie",
    role: "Founder. Building AI-native products that fix real problems.",
    href: "https://pro.wadekerzie.com",
    photo: "/headshot.jpg",
    initials: null,
  },
  {
    name: "Aaron Jones",
    role: "Technical Specialist. Colorado market. Making sure the work actually gets done.",
    href: "#",
    photo: null,
    initials: "AJ",
  },
];

export default function TeamPage() {
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
      <section className="px-6 pt-12 pb-12 max-w-3xl mx-auto">
        <p className="text-white text-xl font-semibold">
          The people behind the work.
        </p>
      </section>

      {/* People cards */}
      <section className="px-6 pb-24 max-w-3xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {people.map((person) => (
            <div key={person.name} className="bg-[#1E2035] p-8 flex flex-col gap-5">
              {/* Photo */}
              {person.photo ? (
                <img
                  src={person.photo}
                  alt={person.name}
                  className="w-[120px] h-[120px] rounded-full object-cover"
                />
              ) : (
                <div className="w-[120px] h-[120px] rounded-full bg-[#2A2B3E] flex items-center justify-center">
                  <span className="text-[#6B9FD4] text-2xl font-bold">
                    {person.initials}
                  </span>
                </div>
              )}

              {/* Name */}
              <div>
                <p className="text-white text-[20px] font-medium mb-1">
                  {person.name}
                </p>
                <p className="text-[#AABBCC] text-[15px] leading-relaxed">
                  {person.role}
                </p>
              </div>

              {/* Link */}
              <Link
                href={person.href}
                className="text-[#6B9FD4] text-sm font-semibold hover:text-white transition-colors duration-150"
              >
                See more &rarr;
              </Link>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
