import Link from "next/link";
import { ArrowRight, Hammer, Zap, Users } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Kerzie AI",
  description:
    "Kerzie AI is a venture studio powered by AI. We build AI-native companies, license AI products, and implement AI for operators. Based in McKinney, TX.",
};

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="section-hero section-cream">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <span className="badge mb-6 inline-block">About Kerzie AI</span>
            <h1 className="heading-xl mb-6 animate-fade-in-up">
              Built to <span className="text-gradient">Build.</span>
            </h1>
            <p className="text-xl text-[var(--foreground-muted)] max-w-3xl mx-auto animate-fade-in-up delay-100">
              Kerzie AI is an AI Studio. We build AI-native companies, license AI products to
              small businesses, and partner with operators to implement AI across their entire
              business. Not an agency. Not a SaaS company. A studio.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="section section-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="card mb-10">
              <h2 className="heading-lg mb-4">Who We Are</h2>
              <p className="text-xl text-[var(--foreground-muted)] mb-4">
                Kerzie AI was founded by Wade Kerzie, a business operator with 30+ years of
                experience in enterprise sales and operations. Not a researcher. Not a software
                engineer who discovered AI. An operator who has spent three decades building and
                running businesses, and who saw exactly what AI could do for the people actually
                running companies.
              </p>
              <p className="text-xl text-[var(--foreground-muted)]">
                We are headquartered in McKinney, TX, and we are a Zapier Silver Solution Partner
                with live AI deployments in production across multiple industries.
              </p>
            </div>

            {/* Three Lines */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="card card-hover text-center">
                <div className="icon-box-lg mx-auto mb-4">
                  <Hammer className="w-6 h-6" />
                </div>
                <h3 className="heading-md mb-2">We Build AI Companies</h3>
                <p className="text-[var(--foreground-muted)] text-sm">
                  We start, own, and operate AI-native ventures. Unison, Zorli, GotaGuy, and more
                  are products we have built from the ground up.
                </p>
              </div>
              <div className="card card-hover text-center">
                <div className="icon-box-lg mx-auto mb-4">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="heading-md mb-2">We License AI Products</h3>
                <p className="text-[var(--foreground-muted)] text-sm">
                  Our products are designed for real business operations, not demos. Small
                  businesses license them at price points that make sense.
                </p>
              </div>
              <div className="card card-hover text-center">
                <div className="icon-box-lg mx-auto mb-4">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="heading-md mb-2">We Implement for Clients</h3>
                <p className="text-[var(--foreground-muted)] text-sm">
                  We partner with businesses directly to implement AI into their operations,
                  train their teams, and deploy enterprise AI command centers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why We Are Different */}
      <section className="section section-dark">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="heading-lg text-[var(--foreground-dark)] mb-3">
                Why We Are Different
              </h2>
            </div>
            <div className="space-y-6">
              <div className="bg-[var(--background-dark-card)] p-6 rounded-xl border border-[var(--border-dark)]">
                <h3 className="heading-md text-[var(--foreground-dark)] mb-2">
                  We Have Skin in the Game
                </h3>
                <p className="text-[var(--foreground-dark-muted)]">
                  Every tool we recommend, we have built or deployed ourselves. Our ventures are
                  live, used by real customers, generating real revenue. When we say something
                  works, it is because we have already proven it.
                </p>
              </div>
              <div className="bg-[var(--background-dark-card)] p-6 rounded-xl border border-[var(--border-dark)]">
                <h3 className="heading-md text-[var(--foreground-dark)] mb-2">
                  AI-Native From Day One
                </h3>
                <p className="text-[var(--foreground-dark-muted)]">
                  We do not retrofit AI into old processes. Every system we design starts from
                  how AI actually works: what it can do reliably, where it needs constraints, and
                  how to build around its strengths without hiding its limitations.
                </p>
              </div>
              <div className="bg-[var(--background-dark-card)] p-6 rounded-xl border border-[var(--border-dark)]">
                <h3 className="heading-md text-[var(--foreground-dark)] mb-2">
                  Operator-First Mindset
                </h3>
                <p className="text-[var(--foreground-dark-muted)]">
                  Our founder has 30+ years in enterprise sales and operations. We speak business,
                  not just tech. We know what it costs to run a business, what actually matters
                  to an operator, and how to build AI systems that fit the way real businesses work.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-compact section-blush">
        <div className="container mx-auto text-center">
          <h2 className="heading-lg mb-4">Ready to work with us?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/partner" className="btn-primary btn-lg">
              <span>
                Partner With Us
                <ArrowRight className="w-5 h-5 ml-2" />
              </span>
            </Link>
            <Link href="/schedule" className="btn-secondary btn-lg">
              <span>Book a Call</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
