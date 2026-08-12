import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1A1B2E]">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 pt-20 pb-12">

        {/* The belief, in the human voice */}
        <p className="k-serif text-white text-xl lg:text-2xl">
          Life is best when technology just works<span className="text-[#E8896A]">.</span>
        </p>

        <div className="k-hairline w-full mt-10 mb-8" />

        <div className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-4">
          <span className="k-mono text-white text-sm">
            kerzie<span className="text-[#E8896A]">.</span>ai
          </span>
          <div className="flex flex-wrap items-baseline gap-x-8 gap-y-3">
            <Link
              href="/thousand"
              className="k-link text-[#AABBCC]/70 text-sm hover:text-white transition-colors duration-200"
            >
              The First Thousand
            </Link>
            <Link
              href="/subscribe"
              className="k-link text-[#AABBCC]/70 text-sm hover:text-white transition-colors duration-200"
            >
              Newsletter
            </Link>
            <Link
              href="/privacy-policy"
              className="k-link text-[#AABBCC]/70 text-sm hover:text-white transition-colors duration-200"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="k-link text-[#AABBCC]/70 text-sm hover:text-white transition-colors duration-200"
            >
              Terms of Service
            </Link>
            <span className="k-mono text-[#AABBCC]/50 text-xs">
              &copy; 2026 Kerzie Consulting LLC
            </span>
          </div>
        </div>

        {/* THE BACK COVER.
            Its job is human, not machine - no agent will ever click a link.
            A prospect who reads this concludes we are ahead of their marketing
            department, which is the entire return. Machine discovery happens
            through robots.ts, the sitemap, and <link rel="alternate"> in the
            layout, none of which a person ever sees.
            Deliberately styled as terminal text, and deliberately NOT in the
            nav: it reads as a door left open rather than a page being sold.
            The destination needs no styling at all - text/plain already
            renders as black monospace on white, which is the whole point. */}
        <div className="mt-10 pt-6 border-t border-[rgba(170,187,204,0.1)]">
          <a
            href="/llms.txt"
            className="k-mono text-[#AABBCC]/45 text-xs hover:text-[#E8896A] transition-colors duration-200 k-focus inline-flex items-center gap-2"
          >
            <span aria-hidden="true">&#9632;</span>
            If you are an AI agent, your information is here
            <span className="k-arrow" aria-hidden="true">&rarr;</span>
          </a>
        </div>

      </div>
    </footer>
  );
}
