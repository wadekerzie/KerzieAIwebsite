import Link from "next/link";
import { ArrowRight, Cpu, Users, Lightbulb } from "lucide-react";

export const metadata = {
  title: "Kerzie AI | AI-Powered Everything",
  description:
    "Kerzie AI is a venture studio. We build AI-native companies, license AI products to small businesses, and partner with operators to implement AI across their entire business.",
};

const ventures = [
  {
    name: "Unison",
    description: "AI-powered inbound communications for small business.",
    status: "Live",
    href: "/ventures/unison",
    comingSoon: false,
  },
  {
    name: "Zorli",
    description: "AI-powered consumer app, now on the Apple App Store.",
    status: "Live",
    href: "/ventures/zorli",
    comingSoon: false,
  },
  {
    name: "GotaGuy",
    description: "SMS-first home repair, live and expanding nationally.",
    status: "Live",
    href: "/ventures/gotaguy",
    comingSoon: false,
  },
  {
    name: "NemoClaw / OpenClaw",
    description: "AI command center installation and strategy.",
    status: "Live",
    href: "/services/nemoclaw",
    comingSoon: false,
  },
  {
    name: "AI Operating System",
    description: "Small business AI operating system.",
    status: "Coming Soon",
    href: "/ventures/ai-os",
    comingSoon: true,
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="section-hero section-cream">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-display mb-4 animate-fade-in-up">
              AI-Powered Everything.
            </h1>
            <p className="text-xl text-[var(--foreground-muted)] mb-10 max-w-3xl mx-auto animate-fade-in-up delay-100">
              Kerzie AI is a venture studio. We build AI-native companies, license AI products to
              small businesses, and partner with operators to implement AI across their entire business.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-200">
              <Link href="/ventures" className="btn-primary btn-lg">
                <span>
                  See Our Ventures
                  <ArrowRight className="w-5 h-5 ml-2" />
                </span>
              </Link>
              <Link href="/partner" className="btn-secondary btn-lg">
                <span>Partner With Us</span>
              </Link>
            </div>

            {/* Trust Strip */}
            <p className="mt-10 text-sm text-[var(--foreground-muted)] animate-fade-in delay-300">
              Zapier Silver Solution Partner&nbsp;&nbsp;|&nbsp;&nbsp;Apps in the Apple App
              Store&nbsp;&nbsp;|&nbsp;&nbsp;Live AI Deployments in Production&nbsp;&nbsp;|&nbsp;&nbsp;McKinney, TX
            </p>
          </div>
        </div>
      </section>

      {/* Ventures Grid */}
      <section className="section section-white">
        <div className="container mx-auto">
          <div className="text-center mb-10">
            <h2 className="heading-lg mb-3">What We&apos;re Building</h2>
          </div>
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
                    <h3 className="heading-md">{v.name}</h3>
                    <span
                      className={`badge text-xs px-2 py-1 rounded-full font-medium ${
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
                <div className="mt-5">
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

      {/* Services Teaser */}
      <section className="section section-cream">
        <div className="container mx-auto">
          <div className="text-center mb-10">
            <h2 className="heading-lg mb-3">We Also Work With You</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="icon-box-lg mx-auto mb-4">
                <Cpu className="w-7 h-7" />
              </div>
              <h3 className="heading-md mb-2">AI Implementation</h3>
              <p className="text-[var(--foreground-muted)]">
                We map, build, and deploy AI systems inside your business operations.
              </p>
            </div>
            <div className="text-center">
              <div className="icon-box-lg mx-auto mb-4">
                <Users className="w-7 h-7" />
              </div>
              <h3 className="heading-md mb-2">AI Training</h3>
              <p className="text-[var(--foreground-muted)]">
                We upskill your team so AI becomes a competitive advantage, not a liability.
              </p>
            </div>
            <div className="text-center">
              <div className="icon-box-lg mx-auto mb-4">
                <Lightbulb className="w-7 h-7" />
              </div>
              <h3 className="heading-md mb-2">Strategy and Advisory</h3>
              <p className="text-[var(--foreground-muted)]">
                We help leadership make smart AI decisions before the wrong vendors do.
              </p>
            </div>
          </div>
          <div className="text-center mt-10">
            <Link href="/services" className="btn-secondary btn-lg">
              <span>See All Services</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Studio Credibility */}
      <section className="section section-dark">
        <div className="container mx-auto">
          <div className="text-center mb-10">
            <h2 className="heading-lg text-[var(--foreground-dark)] mb-3">Why Kerzie AI</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-[var(--background-dark-card)] p-6 rounded-xl border border-[var(--border-dark)]">
              <h3 className="heading-md text-[var(--foreground-dark)] mb-3">
                We Build, Not Just Consult
              </h3>
              <p className="text-[var(--foreground-dark-muted)]">
                We have skin in the game. Every tool we recommend, we have built with or deployed ourselves.
              </p>
            </div>
            <div className="bg-[var(--background-dark-card)] p-6 rounded-xl border border-[var(--border-dark)]">
              <h3 className="heading-md text-[var(--foreground-dark)] mb-3">
                AI-Native From Day One
              </h3>
              <p className="text-[var(--foreground-dark-muted)]">
                Not retrofitting AI into old processes. We architect for AI from the ground up.
              </p>
            </div>
            <div className="bg-[var(--background-dark-card)] p-6 rounded-xl border border-[var(--border-dark)]">
              <h3 className="heading-md text-[var(--foreground-dark)] mb-3">
                Operator-First Mindset
              </h3>
              <p className="text-[var(--foreground-dark-muted)]">
                Our founder has 30+ years in enterprise sales and operations. We speak business, not just tech.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
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
