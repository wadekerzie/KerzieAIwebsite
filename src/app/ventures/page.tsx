import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ventures | Kerzie AI",
  description:
    "Kerzie AI builds, owns, and operates AI-native companies and products. See every active venture.",
};

const ventures = [
  {
    name: "Unison",
    description:
      "AI-powered inbound communications for small business. One knowledge base powers every channel: phone, text, website chat, social DMs. 24/7 instant responses without adding headcount.",
    status: "Live",
    href: "/ventures/unison",
    comingSoon: false,
  },
  {
    name: "Zorli",
    description:
      "AI-powered consumer app, now available on the Apple App Store. Built and owned by Kerzie AI.",
    status: "Live",
    href: "/ventures/zorli",
    comingSoon: false,
  },
  {
    name: "GotaGuy",
    description:
      "SMS-first home repair service, live in McKinney, TX. Connecting homeowners with trusted technicians through a simple text conversation. National rollout coming.",
    status: "Live",
    href: "/ventures/gotaguy",
    comingSoon: false,
  },
  {
    name: "NemoClaw / OpenClaw",
    description:
      "AI command center installation and strategy. We deploy a full AI agent infrastructure inside your business in one week. For companies ready to move now.",
    status: "Live",
    href: "/services/nemoclaw",
    comingSoon: false,
  },
  {
    name: "AI Operating System",
    description:
      "A small business AI operating system that connects your tools, your team, and your data into a single AI-native layer. Designed from day one around how AI works, not how legacy software works.",
    status: "Coming Soon",
    href: "/ventures/ai-os",
    comingSoon: true,
  },
];

export default function VenturesPage() {
  return (
    <>
      <section className="section-hero section-cream">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="heading-xl mb-4 animate-fade-in-up">Our Ventures</h1>
            <p className="text-xl text-[var(--foreground-muted)] animate-fade-in-up delay-100">
              Kerzie AI is a venture studio. We build, own, and operate AI-native companies and
              products.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {ventures.map((v) => (
              <div
                key={v.name}
                className={`card flex flex-col justify-between ${
                  v.comingSoon
                    ? "opacity-70 border-dashed border-2 border-[var(--border)]"
                    : "card-hover"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h2 className="heading-md">{v.name}</h2>
                    <span
                      className={`text-xs px-2 py-1 rounded-full font-medium ${
                        v.comingSoon
                          ? "bg-[var(--background-secondary)] text-[var(--foreground-muted)]"
                          : "bg-[var(--background-accent)] text-[var(--accent-blue)]"
                      }`}
                    >
                      {v.status}
                    </span>
                  </div>
                  <p className="text-[var(--foreground-muted)]">{v.description}</p>
                </div>
                <div className="mt-6">
                  <Link
                    href={v.href}
                    className="text-[var(--accent-blue)] text-sm font-semibold hover:underline flex items-center gap-1"
                  >
                    Learn More <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-compact section-blush">
        <div className="container mx-auto text-center">
          <h2 className="heading-lg mb-6">Ready to put AI to work?</h2>
          <Link href="/schedule" className="btn-primary btn-lg">
            <span>
              Book a Call
              <ArrowRight className="w-5 h-5 ml-2" />
            </span>
          </Link>
        </div>
      </section>
    </>
  );
}
