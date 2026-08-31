import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#FAF8F4]">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 pt-20 pb-12">

        {/* The belief, in the human voice */}
        <p className="k-serif text-[#1A1B2E] text-xl lg:text-2xl">
          Life is best when technology just works<span className="text-[#B04E2B]">.</span>
        </p>

        <div className="k-hairline w-full mt-10 mb-8" />

        <div className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-4">
          <span className="k-mono text-[#1A1B2E] text-sm">
            kerzie<span className="text-[#B04E2B]">.</span>ai
          </span>
          <div className="flex flex-wrap items-baseline gap-x-8 gap-y-3">
            <Link
              href="/thousand"
              className="k-link text-[#262B3D]/70 text-sm hover:text-[#1A1B2E] transition-colors duration-200"
            >
              The First Thousand
            </Link>
            <Link
              href="/subscribe"
              className="k-link text-[#262B3D]/70 text-sm hover:text-[#1A1B2E] transition-colors duration-200"
            >
              Newsletter
            </Link>
            <Link
              href="/privacy-policy"
              className="k-link text-[#262B3D]/70 text-sm hover:text-[#1A1B2E] transition-colors duration-200"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="k-link text-[#262B3D]/70 text-sm hover:text-[#1A1B2E] transition-colors duration-200"
            >
              Terms of Service
            </Link>
            <span className="k-mono text-[#262B3D]/50 text-xs">
              &copy; 2026 Kerzie Consulting LLC
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
