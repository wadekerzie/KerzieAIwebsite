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
              <span className="text-gradient">Every Call, Text, and Email</span>
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

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {/* Card 1 */}
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

            {/* Card 2 */}
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
                  <span>Website chat</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[var(--accent-blue)]" />
                  <span>Email</span>
                </div>
                <div className="flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-[var(--accent-blue)]" />
                  <span>Text/SMS</span>
                </div>
                <div className="flex items-center gap-2">
                  <Share2 className="w-4 h-4 text-[var(--accent-blue)]" />
                  <span>Social media</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[var(--accent-blue)]" />
                  <span>Google Business</span>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="card card-hover">
              <div className="icon-box mb-6">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="heading-md mb-4">
                Your Website Rebuilt
              </h3>
              <p className="text-[var(--foreground-muted)] text-lg mb-3">
                Rebuilt to match your knowledge base.
              </p>
              <ul className="text-[var(--foreground-muted)] space-y-2">
                <li className="flex items-center gap-2">
                  <span className="text-[var(--accent-blue)]">•</span>
                  Hosted by us (free forever)
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[var(--accent-blue)]">•</span>
                  AI chatbot included
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[var(--accent-blue)]">•</span>
                  Voice assistant included
                </li>
              </ul>
            </div>

            {/* Card 4 - Pricing */}
            <div className="card card-hover">
              <div className="icon-box mb-6">
                <DollarSign className="w-6 h-6" />
              </div>
              <h3 className="heading-md mb-4">
                Simple Pricing
              </h3>
              <div className="mb-6">
                <div className="text-3xl font-bold text-[var(--accent-blue)]">$500 setup</div>
                <div className="text-3xl font-bold text-[var(--accent-blue)]">$500/month</div>
              </div>
              <p className="text-[var(--foreground-muted)]">
                Everything included. No hidden fees. No per-message charges.
              </p>
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
                      Emails pile up
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
                      Frustrated customers
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
      <section className="section section-warm">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-lg mb-8">
              Why We&apos;re <span className="text-gradient">Different</span>
            </h2>
            <div className="card mb-10">
              <div className="grid md:grid-cols-2 gap-8 text-left mb-8">
                <div>
                  <h4 className="text-[var(--foreground-muted)] font-medium mb-2">Digital Agencies</h4>
                  <p className="text-[var(--foreground)]">
                    Handle chat and email, but won&apos;t touch your phone—they don&apos;t understand telecom.
                  </p>
                </div>
                <div>
                  <h4 className="text-[var(--foreground-muted)] font-medium mb-2">Phone Systems</h4>
                  <p className="text-[var(--foreground)]">
                    Handle calls, but can&apos;t integrate with modern digital communication.
                  </p>
                </div>
              </div>
              <div className="divider mb-8" />
              <div className="text-center">
                <p className="text-xl text-[var(--foreground)]">
                  We handle <span className="text-gradient font-semibold">everything</span>. Experts in both telecom AND applied AI.
                </p>
              </div>
            </div>
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
