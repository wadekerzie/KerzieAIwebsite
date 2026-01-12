import Link from "next/link";

export default function TermsOfService() {
    return (
        <>
            <section className="section section-cream">
                <div className="container mx-auto">
                    <div className="max-w-4xl mx-auto">
                        <h1 className="heading-xl mb-6">Terms of Service</h1>
                        <p className="text-[var(--foreground-muted)] mb-8">
                            Last Updated: January 2, 2026
                        </p>

                        <div className="prose prose-lg max-w-none">
                            {/* Agreement */}
                            <div className="card mb-8">
                                <h2 className="heading-md mb-4">Agreement to Terms</h2>
                                <p className="text-[var(--foreground-muted)] mb-4">
                                    These Terms of Service (&quot;Terms&quot;) govern your access to and use of the services provided by
                                    Kerzie Consulting LLC, doing business as Kerzie AI (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;).
                                </p>
                                <p className="text-[var(--foreground-muted)]">
                                    By accessing our website or using our services, you agree to be bound by these Terms. If you do not agree
                                    to these Terms, please do not use our services.
                                </p>
                            </div>

                            {/* Services Description */}
                            <div className="card mb-8">
                                <h2 className="heading-md mb-4">Description of Services</h2>
                                <p className="text-[var(--foreground-muted)] mb-4">
                                    Kerzie AI provides AI-powered customer communication solutions, including but not limited to:
                                </p>
                                <ul className="list-disc pl-6 space-y-2 text-[var(--foreground-muted)]">
                                    <li>AI-powered voice and chat assistants</li>
                                    <li>Multi-channel communication management (phone, email, SMS, chat, social media)</li>
                                    <li>Knowledge base development and management</li>
                                    <li>Website development and hosting</li>
                                    <li>Workflow automation and integration services</li>
                                </ul>
                            </div>

                            {/* SMS Communications Terms */}
                            <div className="card mb-8 border-2 border-[var(--accent-blue)]">
                                <h2 className="heading-md mb-4 text-[var(--accent-blue)]">SMS Communications Terms</h2>
                                <p className="text-[var(--foreground-muted)] mb-4">
                                    By providing your mobile phone number and opting in to receive SMS messages, you agree to the following terms:
                                </p>

                                <h3 className="text-lg font-semibold text-[var(--foreground)] mb-3">Consent to Receive SMS</h3>
                                <p className="text-[var(--foreground-muted)] mb-4">
                                    You expressly consent to receive SMS text messages from Kerzie Consulting LLC (DBA Kerzie AI) at the mobile
                                    phone number you provide. These messages may include work status updates, appointment reminders, and
                                    service-related communications.
                                </p>

                                <h3 className="text-lg font-semibold text-[var(--foreground)] mb-3">Message Frequency</h3>
                                <p className="text-[var(--foreground-muted)] mb-4">
                                    You may receive up to 5 SMS messages per month. Message frequency may vary based on your use of our services
                                    and your communication preferences.
                                </p>

                                <h3 className="text-lg font-semibold text-[var(--foreground)] mb-3">Message and Data Rates</h3>
                                <p className="text-[var(--foreground-muted)] mb-4">
                                    Standard message and data rates may apply to SMS messages sent and received. Please consult your mobile
                                    carrier for pricing details.
                                </p>

                                <h3 className="text-lg font-semibold text-[var(--foreground)] mb-3">Opt-Out Instructions</h3>
                                <div className="bg-[var(--background-secondary)] rounded-lg p-4 mb-4">
                                    <p className="text-[var(--foreground)] font-semibold mb-2">To stop receiving SMS messages:</p>
                                    <p className="text-[var(--foreground-muted)]">
                                        Reply <strong>STOP</strong> to any message you receive from us. You will receive a one-time confirmation
                                        that you have been unsubscribed. After this, you will no longer receive SMS messages from us unless you
                                        opt in again.
                                    </p>
                                </div>

                                <h3 className="text-lg font-semibold text-[var(--foreground)] mb-3">Help and Support</h3>
                                <div className="bg-[var(--background-secondary)] rounded-lg p-4 mb-4">
                                    <p className="text-[var(--foreground)] font-semibold mb-2">For help with SMS messages:</p>
                                    <p className="text-[var(--foreground-muted)]">
                                        Reply <strong>HELP</strong> to any message, or contact us at:
                                    </p>
                                    <p className="text-[var(--foreground-muted)] mt-2">Phone: +1 (214) 668-7986</p>
                                    <p className="text-[var(--foreground-muted)]">Email: wade@kerzieconsulting.com</p>
                                </div>

                                <h3 className="text-lg font-semibold text-[var(--foreground)] mb-3">SMS Data Privacy</h3>
                                <p className="text-[var(--foreground-muted)]">
                                    Your phone number and SMS consent information will not be shared with third parties for marketing purposes.
                                    For complete details on how we handle your data, please review our{" "}
                                    <Link href="/privacy-policy" className="text-[var(--accent-blue)] hover:underline">Privacy Policy</Link>.
                                </p>
                            </div>

                            {/* User Responsibilities */}
                            <div className="card mb-8">
                                <h2 className="heading-md mb-4">User Responsibilities</h2>
                                <p className="text-[var(--foreground-muted)] mb-4">
                                    When using our services, you agree to:
                                </p>
                                <ul className="list-disc pl-6 space-y-2 text-[var(--foreground-muted)]">
                                    <li>Provide accurate and complete information</li>
                                    <li>Maintain the confidentiality of your account credentials</li>
                                    <li>Use our services only for lawful purposes</li>
                                    <li>Not interfere with or disrupt our services or servers</li>
                                    <li>Comply with all applicable laws and regulations</li>
                                </ul>
                            </div>

                            {/* Payment Terms */}
                            <div className="card mb-8">
                                <h2 className="heading-md mb-4">Payment Terms</h2>
                                <p className="text-[var(--foreground-muted)] mb-4">
                                    Service fees are as follows:
                                </p>
                                <ul className="list-disc pl-6 space-y-2 text-[var(--foreground-muted)] mb-4">
                                    <li><strong>Setup Fee:</strong> $500 one-time payment</li>
                                    <li><strong>Monthly Service Fee:</strong> $500 per month</li>
                                </ul>
                                <p className="text-[var(--foreground-muted)]">
                                    All fees are due as specified in your service agreement. We reserve the right to modify pricing with
                                    30 days&apos; notice.
                                </p>
                            </div>

                            {/* Intellectual Property */}
                            <div className="card mb-8">
                                <h2 className="heading-md mb-4">Intellectual Property</h2>
                                <p className="text-[var(--foreground-muted)]">
                                    All content, features, and functionality of our website and services, including but not limited to text,
                                    graphics, logos, and software, are the exclusive property of Kerzie Consulting LLC and are protected by
                                    copyright, trademark, and other intellectual property laws.
                                </p>
                            </div>

                            {/* Limitation of Liability */}
                            <div className="card mb-8">
                                <h2 className="heading-md mb-4">Limitation of Liability</h2>
                                <p className="text-[var(--foreground-muted)]">
                                    To the fullest extent permitted by law, Kerzie Consulting LLC shall not be liable for any indirect,
                                    incidental, special, consequential, or punitive damages arising out of or relating to your use of our
                                    services. Our total liability shall not exceed the amount you paid for our services in the twelve months
                                    preceding the claim.
                                </p>
                            </div>

                            {/* Termination */}
                            <div className="card mb-8">
                                <h2 className="heading-md mb-4">Termination</h2>
                                <p className="text-[var(--foreground-muted)]">
                                    Either party may terminate services with 30 days&apos; written notice. We reserve the right to suspend or
                                    terminate your access to our services immediately if you violate these Terms or engage in any conduct that
                                    we determine, in our sole discretion, to be harmful to our business or other users.
                                </p>
                            </div>

                            {/* Governing Law */}
                            <div className="card mb-8">
                                <h2 className="heading-md mb-4">Governing Law</h2>
                                <p className="text-[var(--foreground-muted)]">
                                    These Terms shall be governed by and construed in accordance with the laws of the State of Texas, without
                                    regard to its conflict of law provisions. Any disputes arising from these Terms shall be resolved in the
                                    courts of Collin County, Texas.
                                </p>
                            </div>

                            {/* Changes to Terms */}
                            <div className="card mb-8">
                                <h2 className="heading-md mb-4">Changes to These Terms</h2>
                                <p className="text-[var(--foreground-muted)]">
                                    We reserve the right to modify these Terms at any time. We will notify you of material changes by posting
                                    the updated Terms on our website and updating the &quot;Last Updated&quot; date. Your continued use of our services
                                    after any changes constitutes acceptance of the modified Terms.
                                </p>
                            </div>

                            {/* Contact Information */}
                            <div className="card mb-8">
                                <h2 className="heading-md mb-4">Contact Information</h2>
                                <p className="text-[var(--foreground-muted)] mb-4">
                                    For questions about these Terms of Service, please contact us:
                                </p>
                                <div className="bg-[var(--background-secondary)] rounded-lg p-6">
                                    <p className="text-[var(--foreground)] font-semibold mb-2">Kerzie Consulting LLC</p>
                                    <p className="text-[var(--foreground-muted)]">DBA: Kerzie AI</p>
                                    <p className="text-[var(--foreground-muted)]">6005 Autumn Way</p>
                                    <p className="text-[var(--foreground-muted)]">McKinney, Texas 75072</p>
                                    <p className="text-[var(--foreground-muted)] mt-2">Phone: +1 (214) 668-7986</p>
                                    <p className="text-[var(--foreground-muted)]">Email: wade@kerzieconsulting.com</p>
                                </div>
                            </div>

                            <div className="text-center mt-12">
                                <Link href="/" className="btn-secondary px-6 py-3">
                                    <span>Return to Home</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
