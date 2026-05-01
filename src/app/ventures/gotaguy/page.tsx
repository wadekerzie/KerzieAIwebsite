import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "GotaGuy | Kerzie AI Ventures",
  description:
    "GotaGuy is an SMS-first home repair service, live in McKinney, TX and Aurora, CO. National rollout coming.",
};

export default function GotaGuyPage() {
  /* <!-- STUB: expand with final copy --> */
  return (
    <>
      <section className="section-hero section-cream">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <span className="badge mb-6 inline-flex">
              <span className="bg-[var(--background-accent)] text-[var(--accent-blue)] text-xs font-medium px-2 py-1 rounded-full">
                Live in McKinney, TX and Aurora, CO
              </span>
            </span>
            <h1 className="heading-xl mb-4 animate-fade-in-up">GotaGuy</h1>
            <p className="text-xl text-[var(--foreground-muted)] mb-4 max-w-2xl mx-auto animate-fade-in-up delay-100">
              SMS-first home repair, live in McKinney, TX and Aurora, CO.
            </p>
            <p className="text-lg text-[var(--foreground-muted)] mb-10 max-w-2xl mx-auto animate-fade-in-up delay-200">
              Homeowners text to get connected with a trusted technician. Simple, fast, local.
              National rollout coming soon.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-300">
              <a
                href="https://gotaguy.chat"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary btn-lg"
              >
                <span>
                  Visit GotaGuy
                  <ExternalLink className="w-5 h-5 ml-2" />
                </span>
              </a>
              <Link href="/schedule" className="btn-secondary btn-lg">
                <span>Book a Call</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-compact section-blush">
        <div className="container mx-auto text-center">
          <h2 className="heading-lg mb-6">More from Kerzie AI</h2>
          <Link href="/ventures" className="btn-secondary btn-lg">
            <span>
              See All Ventures
              <ArrowRight className="w-5 h-5 ml-2" />
            </span>
          </Link>
        </div>
      </section>
    </>
  );
}
