import Link from "next/link";
import {
  ArrowRight,
  Zap,
  Shield,
  MessageSquare,
  Cpu,
  Code,
  BarChart3,
  CheckCircle,
  Target,
  Rocket,
} from "lucide-react";

const services = [
  {
    icon: MessageSquare,
    title: "Unison — AI-Powered Communications",
    description:
      "One knowledge base powers every customer channel—phone, text, chat, social. 24/7 instant responses.",
    href: "/services/unison",
    featured: true,
  },
  {
    icon: Cpu,
    title: "NemoClaw Command Center",
    description:
      "NVIDIA\u2019s AI agent platform installed on your infrastructure. AI employees, not chatbots. 1-week deployment.",
    href: "/nemoclaw",
    featured: true,
    purple: true,
  },
  {
    icon: Code,
    title: "App Development",
    description:
      "Custom AI-powered applications built for your specific business workflows and operational needs.",
    href: "/services/app-development",
  },
  {
    icon: BarChart3,
    title: "AI Consulting & Implementation",
    description:
      "ROI-first AI strategy and systems architecture. We implement what we recommend—no slide decks.",
    href: "/services/ai-consulting",
  },
];

const pillars = [
  {
    icon: Target,
    title: "Proof-First Methodology",
    description:
      "We don\u2019t sell concepts. Every engagement delivers a working system with measurable results before you scale.",
  },
  {
    icon: Rocket,
    title: "Production-Ready Deployments",
    description:
      "Live AI systems in production with real users—not prototypes or demos. If it doesn\u2019t ship, it doesn\u2019t count.",
  },
  {
    icon: Shield,
    title: "Built for Small Business",
    description:
      "Enterprise-grade AI at price points that make sense. Fixed fees, clear scope, no surprise invoices.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="section-hero section-cream">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <div className="badge mb-6 animate-fade-in">
              <Zap className="w-4 h-4 mr-2" />
              <span>Applied AI Implementation</span>
            </div>

            <h1 className="heading-display mb-4 animate-fade-in-up">
              AI That Actually Works{" "}
              <span className="text-gradient">in&nbsp;Your&nbsp;Business</span>
            </h1>

            <p className="subheading mb-8 max-w-2xl mx-auto animate-fade-in-up delay-100">
              We build and deploy production AI systems for small-to-mid-size
              companies. Not slide decks. Not proofs of concept.
              Working systems that deliver&nbsp;ROI.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center animate-fade-in-up delay-200">
              <Link href="/schedule" className="btn-primary btn-lg">
                <span>
                  Book a Call
                  <ArrowRight className="w-5 h-5 ml-2" />
                </span>
              </Link>
              <Link href="#services" className="btn-secondary btn-lg">
                <span>See Our Services</span>
              </Link>
            </div>

            {/* Trust Signals */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-[var(--foreground-muted)] animate-fade-in delay-300">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[var(--accent-blue)]" />
                <span>Zapier Silver Solution Partner</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[var(--accent-blue)]" />
                <span>Live AI Deployments in Production</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[var(--accent-blue)]" />
                <span>McKinney, TX</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services — Bento Grid */}
      <section id="services" className="section section-white">
        <div className="container mx-auto">
          <div className="text-center mb-10">
            <h2 className="heading-lg mb-3">
              What We <span className="text-gradient">Build</span>
            </h2>
            <p className="subheading max-w-2xl mx-auto">
              Four service lines, one goal: AI that delivers measurable results
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 max-w-5xl mx-auto">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className={`${service.featured ? "card-featured" : "card"} card-hover group ${
                  service.purple ? "" : service.featured ? "card-accent-top" : ""
                }`}
                style={service.purple ? { borderLeft: "3px solid #7c3aed" } : undefined}
              >
                <div
                  className={`icon-box ${service.featured ? "icon-box-lg" : ""} mb-4`}
                  style={service.purple ? { background: "#7c3aed" } : undefined}
                >
                  <service.icon className={service.featured ? "w-6 h-6" : "w-5 h-5"} />
                </div>
                <h3 className="heading-md mb-2">{service.title}</h3>
                <p className={`text-[var(--foreground-muted)] mb-3 ${service.featured ? "" : "text-sm"}`}>
                  {service.description}
                </p>
                <span
                  className={`inline-flex items-center gap-1 font-medium text-sm group-hover:gap-2 transition-all ${
                    service.purple ? "text-[#7c3aed]" : "text-[var(--accent-blue)]"
                  }`}
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof — Dark Section */}
      <section className="section section-dark">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-lg mb-6">
              Real Systems. <span className="text-gradient">Real&nbsp;Results.</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <div className="card-dark text-center">
                <div className="stat-number mb-2">Live</div>
                <p className="text-sm">
                  GoHighLevel Voice AI in production — real customers, real calls
                </p>
              </div>
              <div className="card-dark text-center">
                <div className="stat-number mb-2">98</div>
                <p className="text-sm">
                  AACI score — Applied AI Competency Index
                </p>
              </div>
              <div className="card-dark text-center">
                <div className="stat-number mb-2">Silver</div>
                <p className="text-sm">
                  Zapier Solution Partner — verified automation expertise
                </p>
              </div>
            </div>
            <p className="text-base max-w-2xl mx-auto">
              We ship production systems, not pitch decks. Every proof point above
              represents a live deployment with real users and real&nbsp;revenue.
            </p>
          </div>
        </div>
      </section>

      {/* Why Kerzie AI */}
      <section className="section section-cream">
        <div className="container mx-auto">
          <div className="text-center mb-10">
            <h2 className="heading-lg mb-3">
              Why <span className="text-gradient">Kerzie&nbsp;AI</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {pillars.map((pillar) => (
              <div key={pillar.title} className="text-center">
                <div className="icon-box icon-box-lg rounded-2xl mx-auto mb-4">
                  <pillar.icon className="w-6 h-6" />
                </div>
                <h3 className="heading-md mb-2">
                  {pillar.title}
                </h3>
                <p className="text-[var(--foreground-muted)] text-sm">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner — Compact */}
      <section className="section-compact section-blush">
        <div className="container mx-auto text-center">
          <h2 className="heading-lg mb-3 text-[var(--foreground)]">
            Ready to Put AI to Work in&nbsp;Your&nbsp;Business?
          </h2>
          <p className="subheading mb-6 max-w-2xl mx-auto" style={{ color: "var(--foreground)", opacity: 0.8 }}>
            Schedule a discovery call and see what production AI looks like
            for your operation.
          </p>
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
