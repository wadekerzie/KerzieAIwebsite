import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Partner With Us | Kerzie AI",
  description:
    "Implement AI in your business, license a Kerzie AI product, or explore a deeper partnership. This is where it starts.",
};

const paths = [
  {
    title: "Implement AI in My Business",
    description:
      "You have a business. We have the systems and people to put AI inside it. End-to-end implementation, from workflow analysis to live deployment.",
    cta: "Learn About Implementation",
    href: "/services/implementation",
  },
  {
    title: "I Want to License a Product",
    description:
      "Unison, Zorli, GotaGuy, and more. Kerzie AI builds products designed for real business operations. See everything we have available.",
    cta: "See Our Ventures",
    href: "/ventures",
  },
  {
    title: "Let's Talk Strategy",
    description:
      "AI strategy, advisory, and consulting. We help leadership make the right AI decisions before the wrong vendors do.",
    cta: "See Our Services",
    href: "/services",
  },
];

export default function PartnerPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-hero section-cream">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="heading-xl mb-4 animate-fade-in-up">
              Let&apos;s Build Something.
            </h1>
            <p className="text-xl text-[var(--foreground-muted)] max-w-2xl mx-auto animate-fade-in-up delay-100">
              Whether you want to implement AI in your business, license one of our products, or
              explore a deeper partnership, this is where it starts.
            </p>
          </div>
        </div>
      </section>

      {/* 3 Path Cards */}
      <section className="section section-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {paths.map((p) => (
              <div key={p.title} className="card card-hover flex flex-col justify-between">
                <div>
                  <h2 className="heading-md mb-3">{p.title}</h2>
                  <p className="text-[var(--foreground-muted)]">{p.description}</p>
                </div>
                <div className="mt-6">
                  <Link
                    href={p.href}
                    className="text-[var(--accent-blue)] text-sm font-semibold hover:underline flex items-center gap-1"
                  >
                    {p.cta} <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Primary CTA + Contact Form */}
          <div className="max-w-2xl mx-auto mt-14 text-center">
            <Link href="/schedule" className="btn-primary btn-lg mb-10 inline-flex">
              <span>
                Book a Call
                <ArrowRight className="w-5 h-5 ml-2" />
              </span>
            </Link>

            <div className="card">
              <h3 className="heading-md mb-6">Or send us a message</h3>
              <form
                action="https://formsubmit.co/wade@kerzie.ai"
                method="POST"
                className="flex flex-col gap-4"
              >
                <input type="hidden" name="_subject" value="Partner inquiry from kerzie.ai/partner" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_next" value="https://kerzie.ai/partner" />

                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="w-full px-4 py-3 border border-[var(--border)] rounded-lg bg-[var(--background-secondary)] text-[var(--foreground)] placeholder-[var(--foreground-muted)] focus:outline-none focus:border-[var(--accent-blue)] transition-colors"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="w-full px-4 py-3 border border-[var(--border)] rounded-lg bg-[var(--background-secondary)] text-[var(--foreground)] placeholder-[var(--foreground-muted)] focus:outline-none focus:border-[var(--accent-blue)] transition-colors"
                />
                <textarea
                  name="message"
                  placeholder="Tell us what you have in mind"
                  rows={4}
                  required
                  className="w-full px-4 py-3 border border-[var(--border)] rounded-lg bg-[var(--background-secondary)] text-[var(--foreground)] placeholder-[var(--foreground-muted)] focus:outline-none focus:border-[var(--accent-blue)] transition-colors resize-none"
                />
                <button type="submit" className="btn-primary btn-lg w-full">
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
