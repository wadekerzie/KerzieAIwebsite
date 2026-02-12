"use client";

import Link from "next/link";
import {
  Brain,
  Network,
  Globe,
  DollarSign,
  Phone,
  MessageSquare,
  Mail,
  MessageCircle,
  Share2,
  MapPin,
  ArrowRight,
  Zap,
  Clock,
  Shield,
  Facebook,
  Instagram,
} from "lucide-react";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="section section-cream">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="badge mb-8 animate-fade-in">
              <Zap className="w-4 h-4 mr-2" />
              <span>AI-Powered Customer Communication</span>
            </div>

            {/* Main Heading */}
            <h1 className="heading-xl mb-6 animate-fade-in-up">
              Stop Manually Responding to{" "}
              <span className="text-gradient">Every Customer Interaction</span>
            </h1>

            {/* Subheadline */}
            <p className="text-2xl text-[var(--foreground)] mb-8 max-w-3xl mx-auto animate-fade-in-up delay-100 font-medium">
              If you handle customer communications for a small business,<br />
              <span className="text-gradient text-3xl font-semibold">Unison</span> is for you.
            </p>

            {/* Subheading */}
            <p className="text-xl text-[var(--foreground-muted)] mb-4 max-w-3xl mx-auto animate-fade-in-up delay-200">
              Your customers choose how they reach you. You can&apos;t control that.
            </p>
            <p className="text-xl text-[var(--foreground)] mb-10 max-w-3xl mx-auto animate-fade-in-up delay-300">
              But you <span className="text-gradient font-semibold">CAN</span> control
              whether they get immediate, consistent, valuable responses every single time.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-400">
              <Link href="/schedule" className="btn-primary text-lg px-8 py-4">
                <span>
                  Book Your Setup Call
                  <ArrowRight className="w-5 h-5 ml-2" />
                </span>
              </Link>
              <Link href="/how-it-works" className="btn-secondary text-lg px-8 py-4">
                <span>See How It Works</span>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-[var(--foreground-muted)] animate-fade-in delay-500">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-[var(--accent-blue)]" />
                <span>24/7 Availability</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-[var(--accent-blue)]" />
                <span>Rock-Solid Reliability</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-[var(--accent-blue)]" />
                <span>Instant Responses</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="section section-white">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto">
            <div className="relative w-full" style={{ aspectRatio: '16/9' }}>
              <iframe
                className="absolute inset-0 w-full h-full rounded-xl shadow-lg"
                src="https://www.youtube.com/embed/7TtsF--CVsA?si=7SeGAc2IM-qeLf5s"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="section section-warm">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">
              What You <span className="text-gradient">Get</span>
            </h2>
            <p className="text-xl text-[var(--foreground-muted)] max-w-2xl mx-auto">
              Everything you need to never miss a customer inquiry again
            </p>
          </div>

          <div className="flex flex-col gap-6 lg:gap-8 max-w-5xl mx-auto">
            {/* First Row - Two Cards Side by Side */}
            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
              {/* Card 1 - One Knowledge Base */}
              <div className="card card-hover">
                <div className="icon-box mb-6">
                  <Brain className="w-6 h-6" />
                </div>
                <h3 className="heading-md mb-4">
                  One Knowledge Base
                </h3>
                <p className="text-[var(--foreground-muted)] text-lg">
                  We build your single source of truth—consistent, accurate, and always available.
                </p>
              </div>

              {/* Card 2 - Every Channel Covered */}
              <div className="card card-hover">
                <div className="icon-box mb-6">
                  <Network className="w-6 h-6" />
                </div>
                <h3 className="heading-md mb-4">
                  Every Channel Covered
                </h3>
                <div className="grid grid-cols-2 gap-3 text-[var(--foreground-muted)]">
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-[var(--accent-blue)]" />
                    <span>Phone calls</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MessageCircle className="w-4 h-4 text-[var(--accent-blue)]" />
                    <span>Website Chat & Voice</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-[var(--accent-blue)]" />
                    <span>Text Messages</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Facebook className="w-4 h-4 text-[var(--accent-blue)]" />
                    <span>Facebook Messages</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Instagram className="w-4 h-4 text-[var(--accent-blue)]" />
                    <span>Instagram DMs</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-[var(--accent-blue)]" />
                    <span>Email - coming soon</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Second Row - Full Width Pricing Card */}
            <div className="card card-hover">
              <div className="icon-box mb-6">
                <DollarSign className="w-6 h-6" />
              </div>
              <h3 className="heading-md mb-6">
                Simple Pricing
              </h3>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Monthly Option */}
                <div className="bg-[var(--background-secondary)] border border-[var(--border)] rounded-lg p-6">
                  <h4 className="text-xl font-bold text-[var(--foreground)] mb-4">Monthly</h4>
                  <div className="mb-4">
                    <div className="text-3xl font-bold text-[var(--accent-blue)]">$500 Setup</div>
                    <div className="text-3xl font-bold text-[var(--accent-blue)]">$500/Month</div>
                  </div>
                  <p className="text-[var(--foreground-muted)]">
                    Everything included. No hidden fees. No per-message charges.
                  </p>
                </div>

                {/* Annual Option */}
                <div className="bg-[var(--background-secondary)] border-2 border-[var(--accent-blue)] rounded-lg p-6 relative">
                  <div className="absolute -top-3 left-6 bg-[var(--accent-blue)] text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Best Value
                  </div>
                  <h4 className="text-xl font-bold text-[var(--foreground)] mb-4">Annual Prepay</h4>
                  <div className="mb-4">
                    <div className="text-3xl font-bold text-[var(--accent-blue)] line-through opacity-50">$500 Setup</div>
                    <div className="text-3xl font-bold text-[var(--accent-blue)]">$0 Setup</div>
                    <div className="text-3xl font-bold text-[var(--accent-blue)]">$6,000/Annually</div>
                  </div>
                  <p className="text-[var(--foreground-muted)]">
                    Pay for 12 months upfront and get free Setup.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/schedule" className="btn-secondary text-lg px-8 py-4">
              <span>Get Started Today</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="section section-cream">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-lg mb-8">
              The Problem: <span className="text-gradient">Fragmented Communication</span>
            </h2>
            <p className="text-xl text-[var(--foreground-muted)] mb-8">
              Most small businesses can only handle customer inquiries consistently
              during business hours, through one or two channels.
            </p>
            <div className="card text-left mb-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-[var(--accent-blue)] font-semibold mb-4">What Happens Now:</h4>
                  <ul className="space-y-3 text-[var(--foreground-muted)]">
                    <li className="flex items-start gap-3">
                      <span className="text-red-500 mt-0.5">✗</span>
                      Calls go to voicemail
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-500 mt-0.5">✗</span>
                      Texts sit unread
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-500 mt-0.5">✗</span>
                      Social Media DMs
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-500 mt-0.5">✗</span>
                      Generic bot responses
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-[var(--deep-blush)] font-semibold mb-4">The Result:</h4>
                  <ul className="space-y-3 text-[var(--foreground-muted)]">
                    <li className="flex items-start gap-3">
                      <span className="text-red-500 mt-0.5">→</span>
                      Inconsistent experiences
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-500 mt-0.5">→</span>
                      Lost leads
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-500 mt-0.5">→</span>
                      Totally Forgotten
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-500 mt-0.5">→</span>
                      Revenue walking out the door
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <Link href="/how-it-works" className="btn-primary text-lg px-8 py-4">
              <span>
                See How We Solve This
                <ArrowRight className="w-5 h-5 ml-2" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Why We're Different */}
      <section className="section section-warm py-16">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-lg mb-6">
              Why We&apos;re <span className="text-gradient">Different</span>
            </h2>
            <p className="text-2xl text-[var(--foreground)] font-medium mb-4">
              We&apos;re experts in both <span className="text-gradient font-semibold">telecom</span> and <span className="text-gradient font-semibold">applied AI</span>.
            </p>
            <p className="text-lg text-[var(--foreground-muted)]">
              Most companies understand one or the other. We understand both—and that&apos;s how we deliver unified communication that actually works.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section section-cream">
        <div className="container mx-auto text-center">
          <h2 className="heading-lg mb-4">
            Ready to Stop Juggling Customer Communications?
          </h2>
          <p className="text-xl text-[var(--foreground-muted)] mb-10 max-w-2xl mx-auto">
            Get started today and never miss another customer inquiry.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/schedule" className="btn-primary text-lg px-8 py-4">
              <span>
                Book Your Setup Call
                <ArrowRight className="w-5 h-5 ml-2" />
              </span>
            </Link>
            <Link href="/how-it-works" className="btn-secondary text-lg px-8 py-4">
              <span>Learn More</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
