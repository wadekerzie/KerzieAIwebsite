"use client";

import { useEffect } from "react";
import { Calendar, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function SchedulePage() {
    useEffect(() => {
        // Load the GoHighLevel form embed script
        const script = document.createElement("script");
        script.src = "https://link.msgsndr.com/js/form_embed.js";
        script.type = "text/javascript";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            // Cleanup script on unmount
            const existingScript = document.querySelector(
                'script[src="https://link.msgsndr.com/js/form_embed.js"]'
            );
            if (existingScript) {
                existingScript.remove();
            }
        };
    }, []);

    return (
        <>
            {/* Hero Section */}
            <section className="section section-cream">
                <div className="container mx-auto">
                    <div className="max-w-4xl mx-auto text-center">
                        {/* Badge */}
                        <div className="badge mb-8 animate-fade-in">
                            <Calendar className="w-4 h-4 mr-2" />
                            <span>Get Started</span>
                        </div>

                        {/* Main Heading */}
                        <h1 className="heading-xl mb-6 animate-fade-in-up">
                            Book Your{" "}
                            <span className="text-gradient">Setup Call</span>
                        </h1>

                        {/* Subheading */}
                        <p className="text-xl text-[var(--foreground-muted)] mb-10 max-w-3xl mx-auto animate-fade-in-up delay-100">
                            See how one knowledge base can power instant responses across every
                            channel—phone, text, email, chat, and more. $500 setup + $500/month, everything included.
                        </p>
                    </div>
                </div>
            </section>

            {/* Calendar Embed Section */}
            <section className="section section-warm">
                <div className="container mx-auto">
                    <div className="max-w-4xl mx-auto">
                        <div className="card">
                            <div className="calendar-embed-container">
                                <iframe
                                    src="https://api.leadconnectorhq.com/widget/booking/WUgRL3oHU40oA05SIaVT"
                                    style={{
                                        width: "100%",
                                        minHeight: "700px",
                                        border: "none",
                                        overflow: "hidden",
                                    }}
                                    scrolling="no"
                                    id="WUgRL3oHU40oA05SIaVT_1767737997591"
                                    title="Book Your Free Consultation"
                                />
                            </div>
                            {/* SMS Consent Disclosure */}
                            <div className="mt-6 p-4 bg-[var(--background-secondary)] rounded-lg text-sm text-[var(--foreground-muted)]">
                                <p className="mb-2">
                                    By providing your phone number, you consent to receive SMS messages from Kerzie Consulting LLC (DBA Kerzie AI)
                                    regarding your scheduled appointment and work status updates. Message frequency: up to 5 messages/month.
                                    Message and data rates may apply.
                                </p>
                                <p>
                                    Reply STOP to unsubscribe. Reply HELP for help. View our{" "}
                                    <Link href="/privacy-policy" className="text-[var(--accent-blue)] hover:underline">Privacy Policy</Link>{" "}
                                    and{" "}
                                    <Link href="/terms-of-service" className="text-[var(--accent-blue)] hover:underline">Terms of Service</Link>.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* What to Expect Section */}
            <section className="section section-cream">
                <div className="container mx-auto">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="heading-lg mb-8">
                            What to <span className="text-gradient">Expect</span>
                        </h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="card card-hover">
                                <div className="text-3xl font-bold text-[var(--accent-blue)] mb-4">
                                    1
                                </div>
                                <h3 className="heading-md mb-3">Your Business</h3>
                                <p className="text-[var(--foreground-muted)]">
                                    We&apos;ll learn how customers currently reach you and where
                                    you&apos;re losing leads.
                                </p>
                            </div>
                            <div className="card card-hover">
                                <div className="text-3xl font-bold text-[var(--accent-blue)] mb-4">
                                    2
                                </div>
                                <h3 className="heading-md mb-3">Your Solution</h3>
                                <p className="text-[var(--foreground-muted)]">
                                    See exactly what your AI-powered communication system
                                    will look like.
                                </p>
                            </div>
                            <div className="card card-hover">
                                <div className="text-3xl font-bold text-[var(--accent-blue)] mb-4">
                                    3
                                </div>
                                <h3 className="heading-md mb-3">Get Started</h3>
                                <p className="text-[var(--foreground-muted)]">
                                    Walk away with a clear onboarding timeline to launch
                                    your system.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Alternative CTA */}
            <section className="section section-warm">
                <div className="container mx-auto text-center">
                    <h2 className="heading-lg mb-4">
                        Want to Learn More First?
                    </h2>
                    <p className="text-xl text-[var(--foreground-muted)] mb-8 max-w-2xl mx-auto">
                        See how Kerzie AI works and why we&apos;re different before booking your consultation.
                    </p>
                    <Link href="/how-it-works" className="btn-secondary text-lg px-8 py-4">
                        <span>
                            See How It Works
                            <ArrowRight className="w-5 h-5 ml-2" />
                        </span>
                    </Link>
                </div>
            </section>
        </>
    );
}

