import Link from "next/link";
import {
  ArrowRight,
  Zap,
  Shield,
  Phone,
  Globe,
  Brain,
  Users,
  Target,
  CheckCircle,
} from "lucide-react";

export default function About() {
  return (
    <>
      {/* Hero Section */}
      <section className="section section-cream">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <span className="badge mb-6 inline-block">About Kerzie AI</span>
            <h1 className="heading-xl mb-6">
              Why We&apos;re the{" "}
              <span className="text-gradient">Only Ones</span> Who Can Deliver
              This
            </h1>
            <p className="text-xl text-[var(--foreground-muted)] max-w-3xl mx-auto">
              Experts in both telecom AND applied AI—not digital marketers
              dabbling in technology they don&apos;t understand.
            </p>
          </div>
        </div>
      </section>

      {/* The Gap Section */}
      <section className="section section-warm">
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="heading-lg mb-4">
                The <span className="text-gradient">Gap</span> in the Market
              </h2>
              <p className="text-xl text-[var(--foreground-muted)]">
                Everyone specializes. Nobody integrates.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Digital Agencies */}
              <div className="card">
                <div className="icon-box-light mb-6">
                  <Globe className="w-6 h-6" />
                </div>
                <h3 className="heading-md mb-4">
                  Digital Marketing Agencies
                </h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3 text-[var(--foreground-muted)]">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    Handle website chat
                  </li>
                  <li className="flex items-start gap-3 text-[var(--foreground-muted)]">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    Handle email automation
                  </li>
                  <li className="flex items-start gap-3 text-[var(--foreground-muted)]">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    Social media management
                  </li>
                </ul>
                <div className="border-t border-[var(--border)] pt-6">
                  <p className="text-red-600 font-semibold mb-2">
                    But they won&apos;t touch your phone.
                  </p>
                  <p className="text-[var(--foreground-muted)]">
                    They don&apos;t understand telecom infrastructure, voice AI,
                    or how to route calls intelligently.
                  </p>
                </div>
              </div>

              {/* Phone Systems */}
              <div className="card">
                <div className="icon-box-light mb-6">
                  <Phone className="w-6 h-6" />
                </div>
                <h3 className="heading-md mb-4">
                  Traditional Phone Systems
                </h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3 text-[var(--foreground-muted)]">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    Handle inbound calls
                  </li>
                  <li className="flex items-start gap-3 text-[var(--foreground-muted)]">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    Basic IVR systems
                  </li>
                  <li className="flex items-start gap-3 text-[var(--foreground-muted)]">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    Call routing
                  </li>
                </ul>
                <div className="border-t border-[var(--border)] pt-6">
                  <p className="text-red-600 font-semibold mb-2">
                    But they can&apos;t integrate with digital.
                  </p>
                  <p className="text-[var(--foreground-muted)]">
                    They don&apos;t understand AI, automation, or modern digital
                    communication workflows.
                  </p>
                </div>
              </div>
            </div>

            {/* Kerzie AI - Unison */}
            <div className="card">
              <div className="flex items-center gap-4 mb-6">
                <div className="icon-box w-16 h-16 rounded-2xl">
                  <Brain className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="heading-md text-gradient">Kerzie AI - Unison</h3>
                  <p className="text-[var(--foreground-muted)]">
                    The complete all-in-one solution for customer communications
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-[var(--background-secondary)] rounded-xl p-6">
                  <Phone className="w-8 h-8 text-[var(--accent-blue)] mb-4" />
                  <h4 className="text-[var(--foreground)] font-semibold mb-2">
                    Telecom Expertise
                  </h4>
                  <p className="text-[var(--foreground-muted)] text-sm">
                    70+ years combined experience in telecommunications
                    infrastructure.
                  </p>
                </div>
                <div className="bg-[var(--background-secondary)] rounded-xl p-6">
                  <Brain className="w-8 h-8 text-[var(--accent-blue)] mb-4" />
                  <h4 className="text-[var(--foreground)] font-semibold mb-2">
                    Applied AI
                  </h4>
                  <p className="text-[var(--foreground-muted)] text-sm">
                    Deep expertise in practical AI implementation for real
                    business problems.
                  </p>
                </div>
                <div className="bg-[var(--background-secondary)] rounded-xl p-6">
                  <Zap className="w-8 h-8 text-[var(--accent-blue)] mb-4" />
                  <h4 className="text-[var(--foreground)] font-semibold mb-2">
                    Automation
                  </h4>
                  <p className="text-[var(--foreground-muted)] text-sm">
                    Zapier Silver Solution Partner. We connect everything seamlessly.
                  </p>
                </div>
              </div>

              <p className="text-xl text-[var(--foreground)] text-center">
                We handle{" "}
                <span className="text-gradient font-semibold">everything</span>
                . Phone, chat, email, text, social—unified under one intelligent
                knowledge base.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="section section-cream">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="heading-lg mb-4">
                Our <span className="text-gradient">Approach</span>
              </h2>
              <p className="text-xl text-[var(--foreground-muted)]">
                Simple principles that deliver results
              </p>
            </div>

            <div className="space-y-6">
              <div className="card card-hover flex items-start gap-6">
                <div className="icon-box flex-shrink-0">
                  <Target className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[var(--foreground)] mb-2">
                    Knowledge Base First
                  </h3>
                  <p className="text-[var(--foreground-muted)]">
                    Everything starts with your single source of truth. We build a
                    comprehensive knowledge base that powers every customer
                    interaction—ensuring consistent, accurate responses every
                    time.
                  </p>
                </div>
              </div>

              <div className="card card-hover flex items-start gap-6">
                <div className="icon-box flex-shrink-0">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[var(--foreground)] mb-2">
                    Customer-Centric
                  </h3>
                  <p className="text-[var(--foreground-muted)]">
                    Your customers choose how they want to communicate. We don&apos;t
                    force them into a single channel—we meet them wherever they
                    are and deliver the same exceptional experience.
                  </p>
                </div>
              </div>

              <div className="card card-hover flex items-start gap-6">
                <div className="icon-box flex-shrink-0">
                  <Shield className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[var(--foreground)] mb-2">
                    Deterministic, Not Probabilistic
                  </h3>
                  <p className="text-[var(--foreground-muted)]">
                    AI can be unpredictable. We constrain it with your knowledge
                    base, ensuring it retrieves fixed, accurate answers rather than
                    making things up. Your customers get the right information
                    every time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section section-blush">
        <div className="container mx-auto text-center">
          <h2 className="heading-lg mb-4 text-[var(--foreground)]">
            Ready to Work With Experts?
          </h2>
          <p className="text-xl text-[var(--foreground)] opacity-80 mb-10 max-w-2xl mx-auto">
            Schedule a discovery call and see how our unique combination of
            telecom and AI expertise can transform your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/schedule" className="btn-primary text-lg px-8 py-4">
              <span>
                Book Your Setup Call
                <ArrowRight className="w-5 h-5 ml-2" />
              </span>
            </Link>
            <Link href="/how-it-works" className="btn-secondary text-lg px-8 py-4 bg-white/50">
              <span>See How It Works</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
