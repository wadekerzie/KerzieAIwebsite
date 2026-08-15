import Link from "next/link";
import type { Metadata } from "next";
import OsDownloadCard from "@/components/OsDownloadCard";
import library from "@/data/os_library.json";

// The OS Library. Deliberately not in the site menu - this page is for people
// who already own One-Window. Rewritten August 2026 to the
// capability-note model (Wade's call, 8/14, after the Kurt exchange): a card
// is a described idea the owner hands to their OS, not a file-install. The
// full documents stay behind every card as references written to the AI.
export const metadata: Metadata = {
  title: "The OS Library | Kerzie AI",
  description: "Ideas from a working OS, described in plain words. Take what fits yours.",
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
          Your OS is not software. Nothing here is an update.
        </h1>
        <div className="mt-6 max-w-2xl space-y-4 text-[#AABBCC] text-lg leading-relaxed">
          <p>
            This page is for people who own the{" "}
            <Link href="/one-window" className="k-link k-focus text-[#6B9FD4]">
              One-Window
            </Link>
            , and it works differently than every download page you have ever
            used. <span className="text-white">There are no versions to fall
            behind on, no updates you are forced to take, and nothing here will
            ever make your OS harder to run.</span> Your OS exists to run your
            business the way you want it run. That is the entire point of it.
          </p>
          <p>
            Every card below is something I run in my own OS. When a behavior
            earns its keep, I describe it here in plain words. You read the
            card and ask one question:{" "}
            <span className="text-white">&ldquo;Do I want that?&rdquo;</span>{" "}
            If no, skip it - what helps me might not fit how you work. If yes,
            you hand the idea to your OS and it builds the capability its own
            way, fitted to what you already have, breaking nothing you have
            built.
          </p>
          <p>
            That is also how this library gets made. I describe what I want,
            and my OS builds it. Every card on this page is that method
            working, and handing a card to your own OS is you using the same
            method.
          </p>
          <p>
            Your email registers which capabilities you pulled, so I know who
            runs what without your OS ever phoning home. Use the email you
            bought with.
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
            file={library.baseline.file}
            baseline
          />
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 lg:px-12 pb-14 border-t border-[rgba(170,187,204,0.13)] pt-14">
        <p className="k-label mb-6">The Capabilities</p>
        <div className="grid md:grid-cols-2 gap-5">
          {library.upgrades.map((u) => (
            <OsDownloadCard
              key={u.slug}
              slug={u.slug}
              name={u.name}
              was={u.was}
              description={u.description}
              file={u.file}
              note={"note" in u ? (u as { note?: string }).note : undefined}
            />
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 lg:px-12 pb-20 border-t border-[rgba(170,187,204,0.13)] pt-14">
        <p className="k-label mb-6">How A Capability Lands</p>
        <div className="max-w-2xl space-y-4 text-[#AABBCC] text-lg leading-relaxed">
          <p>
            Read the card. Want it? The button copies one line - paste it into
            your Code tab and let your AI work.
            <span className="text-white"> Your AI builds the capability to fit
            your OS</span>, and it tells you in plain words what it is about to
            add before it touches anything. Behind every card sits a full
            reference document written to your AI, not to you - it reads that
            for the detail so you never have to.
          </p>
          <p>
            Two promises hold for everything on this page.
            <span className="text-white"> Nothing you built gets replaced
            without your yes</span> - if your AI finds something you made your
            own way, it names it and asks one question: keep yours, or take
            this. Keeping yours is always a fine answer. And when the build is
            done, ask your AI:{" "}
            <span className="text-white">&ldquo;Show me in plain words what you
            built and how I use it.&rdquo;</span> That is your receipt. Any
            capability comes back out as easily as it went in - tell your AI to
            remove it, and it&apos;s gone.
          </p>
          <p className="text-[#AABBCC]/70 text-base">
            Bought One-Window and something here will not work? Email{" "}
            <a href="mailto:wade@kerzie.ai" className="k-link k-focus text-[#6B9FD4]">
              wade@kerzie.ai
            </a>{" "}
            and I will get you squared away directly.
          </p>
        </div>
      </section>
    </div>
  );
}
