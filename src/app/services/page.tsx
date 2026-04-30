import Link from "next/link";
import { ArrowRight, Cpu, Users, Terminal } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Kerzie AI",
  description:
    "Kerzie AI embeds AI into your business operations. AI implementation, AI training, and NemoClaw strategy for companies ready to move.",
};

const services = [
  {
    icon: Cpu,
    title: "AI Implementation",
    description:
      "We map, build, and deploy AI systems inside your business operations end-to-end. From workflow analysis to live production deployment.",
    href: "/services/implementation",
  },
  {
    icon: Users,
    title: "AI Training",
    description:
      "Hands-on AI training for teams and leadership. We upskill your people so AI becomes a competitive advantage, not a liability.",
    href: "/services/training",
  },
  {
    icon: Terminal,
    title: "NemoClaw / OpenClaw",
    description:
      "AI command center installation and enterprise strategy. NemoClaw installs in one week. OpenClaw covers broader enterprise AI architecture.",
    href: "/services/nemoclaw",
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="section-hero section-cream">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="heading-xl mb-4 animate-fade-in-up">We Work With You</h1>
            <p className="text-xl text-[var(--foreground-muted)] max-w-2xl mx-auto animate-fade-in-up delay-100">
              Beyond our ventures, we partner directly with businesses to implement AI, train
              teams, and deploy enterprise-grade AI command centers.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {services.map((s) => (
              <div key={s.title} className="card card-hover flex flex-col justify-between">
                <div>
                  <div className="icon-box-lg mb-4">
                    <s.icon className="w-6 h-6" />
                  </div>
                  <h2 className="heading-md mb-3">{s.title}</h2>
                  <p className="text-[var(--foreground-muted)]">{s.description}</p>
                </div>
                <div className="mt-6">
                  <Link
                    href={s.href}
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
