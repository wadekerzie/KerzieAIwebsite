"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Mail, MapPin, Send } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <section className="section-hero section-cream">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <span className="badge mb-6 inline-block">Get in Touch</span>
            <h1 className="heading-xl mb-6">
              Contact <span className="text-gradient">Us</span>
            </h1>
            <p className="text-xl text-[var(--foreground-muted)] max-w-2xl mx-auto">
              Have a question or want to discuss a project? Reach out below or
              book a call directly.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-white">
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div className="card">
              <h2 className="heading-md mb-6">Send Us a Message</h2>
              {submitted ? (
                <div className="text-center py-8">
                  <div className="icon-box w-16 h-16 rounded-2xl mx-auto mb-4">
                    <Send className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-[var(--foreground)] mb-2">
                    Message Sent
                  </h3>
                  <p className="text-[var(--foreground-muted)]">
                    We&apos;ll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form
                  action="https://formsubmit.co/wade@kerzie.ai"
                  method="POST"
                  onSubmit={() => setSubmitted(true)}
                >
                  <input type="hidden" name="_subject" value="New contact form submission — kerzie.ai" />
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_next" value="https://kerzie.ai/contact" />

                  <div className="space-y-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-[var(--foreground)] mb-1"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-[var(--border)] bg-white text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-blue)] focus:border-transparent transition-all"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-[var(--foreground)] mb-1"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-[var(--border)] bg-white text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-blue)] focus:border-transparent transition-all"
                        placeholder="you@company.com"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-[var(--foreground)] mb-1"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        className="w-full px-4 py-3 rounded-xl border border-[var(--border)] bg-white text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-blue)] focus:border-transparent transition-all resize-none"
                        placeholder="Tell us about your project or question..."
                      />
                    </div>
                    <button
                      type="submit"
                      className="btn-primary w-full"
                    >
                      <span>
                        Send Message
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </span>
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Contact Info + Book a Call */}
            <div className="space-y-6">
              <div className="card">
                <h2 className="heading-md mb-6">Book a Call</h2>
                <p className="text-[var(--foreground-muted)] mb-6">
                  Prefer to talk live? Schedule a discovery call and we&apos;ll
                  walk through how Kerzie AI can help your business.
                </p>
                <Link href="/schedule" className="btn-primary w-full text-center">
                  <span>
                    Book a Call
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </span>
                </Link>
              </div>

              <div className="card">
                <h2 className="heading-md mb-4">Contact Info</h2>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-[var(--foreground-muted)]">
                    <Mail className="w-5 h-5 text-[var(--accent-blue)]" />
                    <a
                      href="mailto:wade@kerzie.ai"
                      className="hover:text-[var(--accent-blue)] transition-colors"
                    >
                      wade@kerzie.ai
                    </a>
                  </div>
                  <div className="flex items-center gap-3 text-[var(--foreground-muted)]">
                    <MapPin className="w-5 h-5 text-[var(--accent-blue)]" />
                    <span>McKinney, TX</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
