import Link from "next/link";
import type { Metadata } from "next";
import OsDownloadCard from "@/components/OsDownloadCard";
import library from "@/data/os_library.json";

// The OS Library. Deliberately not in the site menu - this page is for people
// who already own the One-Window Setup. Upgrades are named, not numbered, and
// install a la carte: nothing here assumes you took anything else.
export const metadata: Metadata = {
  title: "The OS Library | Kerzie AI",
  description: "Every Personal OS upgrade, by name, in one place. For One-Window owners.",
  robots: { index: false, follow: false },
};

export default function DownloadsPage() {
  return (
    <div className="bg-[#1A1B2E] min-h-screen">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 pt-10">
        <Link
          href="/"
          className="k-mono text-[#AABBCC]/70 text-xs tracking-[0.15em] hover:text-white transition-colors duration-200 k-focus"
        >
          &larr; KERZIE<span className="text-[#E8896A]">.</span>AI
        </Link>
      </div>

      <section className="max-w-6xl mx-auto px-6 lg:px-12 pt-16 lg:pt-20 pb-10">
        <p className="k-label mb-6">The OS Library</p>
        <h1 className="text-white font-bold tracking-[-0.025em] leading-[1.05] text-[clamp(2.2rem,6vw,4rem)] max-w-3xl">
          Every upgrade, by name, in one place.
        </h1>
        <div className="mt-6 max-w-2xl space-y-4 text-[#AABBCC] text-lg leading-relaxed">
          <p>
            This page is for people who own the{" "}
            <Link href="/one-window" className="k-link k-focus text-[#6B9FD4]">
              One-Window Setup
            </Link>
            . Upgrades have names, not version numbers, because they install a
            la carte: read the description, decide if you want that behavior in
            your OS, and skip anything you have already built your own way.
            Nothing here assumes you took anything else, except where a card
            says so.
          </p>
          <p>
            Your email registers which upgrades you pulled, so I know who runs
            what without your OS ever phoning home. Use the email you bought
            with.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 lg:px-12 pb-14">
        <p className="k-label mb-6">Start Here</p>
        <div className="grid md:grid-cols-2 gap-5">
          <OsDownloadCard
            slug={library.baseline.slug}
            name={library.baseline.name}
            was={library.baseline.was}
            description={library.baseline.description}
          />
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 lg:px-12 pb-14 border-t border-[rgba(170,187,204,0.13)] pt-14">
        <p className="k-label mb-6">The Upgrades</p>
        <div className="grid md:grid-cols-2 gap-5">
          {library.upgrades.map((u) => (
            <OsDownloadCard
              key={u.slug}
              slug={u.slug}
              name={u.name}
              was={u.was}
              description={u.description}
              note={"note" in u ? (u as { note?: string }).note : undefined}
            />
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 lg:px-12 pb-20 border-t border-[rgba(170,187,204,0.13)] pt-14">
        <p className="k-label mb-6">How An Upgrade Installs</p>
        <div className="max-w-2xl space-y-4 text-[#AABBCC] text-lg leading-relaxed">
          <p>
            Open a fresh session, hand your AI the file, and let it work.
            <span className="text-white"> Plan for an upgrade to take a full
            session of your AI&apos;s attention</span> - it reads your OS, describes
            what it is about to change, waits for your yes, then does the work.
            Think of it like restarting your Mac for a system update, not like
            installing an app.
          </p>
          <p>
            Every upgrade describes itself before it touches anything, and asks
            before it applies. If it covers something you already built, tell
            it no and keep your version - that is the intended answer, not a
            workaround.
          </p>
          <p className="text-[#AABBCC]/70 text-base">
            Bought the One-Window Setup and something here will not open? Email{" "}
            <a href="mailto:wade@kerzie.ai" className="k-link k-focus text-[#6B9FD4]">
              wade@kerzie.ai
            </a>{" "}
            and I will get you the file directly.
          </p>
        </div>
      </section>
    </div>
  );
}
