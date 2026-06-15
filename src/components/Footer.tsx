import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1A1B2E]">
      <div className="py-12 max-w-3xl mx-auto px-6 flex flex-col gap-6">

        <p className="text-[#AABBCC] text-sm italic text-center">
          Life is best when technology just works.
        </p>

        <div className="h-px bg-[#2D3154] w-full" />

        <div className="flex flex-wrap items-center justify-center gap-8">
          <span className="text-[#AABBCC] text-sm">kerzie.ai</span>
          <Link
            href="/privacy-policy"
            className="text-[#AABBCC] text-sm hover:text-white transition-colors duration-150"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms-of-service"
            className="text-[#AABBCC] text-sm hover:text-white transition-colors duration-150"
          >
            Terms of Service
          </Link>
          <span className="text-[#AABBCC] text-sm">
            &copy; 2026 Kerzie Consulting LLC
          </span>
        </div>

      </div>
    </footer>
  );
}
