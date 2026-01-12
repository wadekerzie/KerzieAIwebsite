import Link from "next/link";

export default function PrivacyPolicy() {
    return (
        <>
            <section className="section section-cream">
                <div className="container mx-auto">
                    <div className="max-w-4xl mx-auto">
                        <h1 className="heading-xl mb-6">Privacy Policy</h1>
                        <p className="text-[var(--foreground-muted)] mb-8">
                            Last Updated: January 2, 2026
                        </p>

                        <div className="prose prose-lg max-w-none">
                            {/* Introduction */}
                            <div className="card mb-8">
                                <h2 className="heading-md mb-4">Introduction</h2>
                                <p className="text-[var(--foreground-muted)] mb-4">
                                    Kerzie Consulting LLC, doing business as Kerzie AI (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;),
                                    respects your privacy and is committed to protecting your personal information. This Privacy
                                    Policy explains how we collect, use, disclose, and safeguard your information when you visit
                                    our website or use our services.
                                </p>
                                <p className="text-[var(--foreground-muted)]">
                                    By using our services, you consent to the data practices described in this policy.
                                </p>
                            </div>

                            {/* Information We Collect */}
                            <div className="card mb-8">
                                <h2 className="heading-md mb-4">Information We Collect</h2>
                                <p className="text-[var(--foreground-muted)] mb-4">
                                    We may collect the following types of information:
                                </p>
                                <ul className="list-disc pl-6 space-y-2 text-[var(--foreground-muted)]">
                                    <li><strong>Personal Information:</strong> Name, email address, phone number, and business information you provide when contacting us or scheduling a consultation.</li>
                                    <li><strong>Communication Data:</strong> Records of communications with us, including emails, phone calls, and text messages.</li>
                                    <li><strong>Usage Data:</strong> Information about how you interact with our website, including IP address, browser type, and pages visited.</li>
                                </ul>
                            </div>

                            {/* SMS/Text Messaging Terms */}
                            <div className="card mb-8 border-2 border-[var(--accent-blue)]">
                                <h2 className="heading-md mb-4 text-[var(--accent-blue)]">SMS/Text Messaging Terms</h2>
                                <p className="text-[var(--foreground-muted)] mb-4">
                                    By providing your phone number and opting in to receive SMS messages from Kerzie AI, you agree to the following:
                                </p>
                                <ul className="list-disc pl-6 space-y-3 text-[var(--foreground-muted)] mb-6">
                                    <li>
                                        <strong>Consent:</strong> You consent to receive SMS text messages from Kerzie Consulting LLC (DBA Kerzie AI)
                                        regarding work status updates, appointment reminders, and service-related communications.
                                    </li>
                                    <li>
                                        <strong>Message Frequency:</strong> You may receive up to 5 messages per month. Message frequency may vary based on your interaction with our services.
                                    </li>
                                    <li>
                                        <strong>Message and Data Rates:</strong> Message and data rates may apply. Please contact your mobile carrier for details about your text and data plan.
                                    </li>
                                    <li>
                                        <strong>Opt-Out:</strong> You can opt out of receiving SMS messages at any time by replying <strong>STOP</strong> to any message.
                                        After opting out, you will receive a confirmation message and no further messages will be sent unless you opt in again.
                                    </li>
                                    <li>
                                        <strong>Help:</strong> For assistance, reply <strong>HELP</strong> to any message or contact us using the information provided below.
                                    </li>
                                    <li>
                                        <strong>No Sharing of SMS Data:</strong> We will not share your phone number or SMS opt-in data with any third parties for marketing purposes.
                                        Your information may only be shared with our SMS service providers solely for the purpose of delivering messages to you.
                                    </li>
                                </ul>
                                <div className="bg-[var(--background-secondary)] rounded-lg p-4">
                                    <p className="text-sm text-[var(--foreground-muted)]">
                                        <strong>Summary:</strong> By opting in, you agree to receive up to 5 SMS messages per month.
                                        Message and data rates may apply. Reply STOP to unsubscribe. Reply HELP for help.
                                    </p>
                                </div>
                            </div>

                            {/* How We Use Your Information */}
                            <div className="card mb-8">
                                <h2 className="heading-md mb-4">How We Use Your Information</h2>
                                <p className="text-[var(--foreground-muted)] mb-4">
                                    We use the information we collect to:
                                </p>
                                <ul className="list-disc pl-6 space-y-2 text-[var(--foreground-muted)]">
                                    <li>Provide, operate, and maintain our services</li>
                                    <li>Communicate with you about our services, including sending work status updates via SMS</li>
                                    <li>Respond to your inquiries and provide customer support</li>
                                    <li>Send you appointment reminders and service-related notifications</li>
                                    <li>Improve our website and services</li>
                                    <li>Comply with legal obligations</li>
                                </ul>
                            </div>

                            {/* Information Sharing */}
                            <div className="card mb-8">
                                <h2 className="heading-md mb-4">Information Sharing and Disclosure</h2>
                                <p className="text-[var(--foreground-muted)] mb-4">
                                    We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
                                </p>
                                <ul className="list-disc pl-6 space-y-2 text-[var(--foreground-muted)]">
                                    <li><strong>Service Providers:</strong> We may share information with trusted third-party service providers who assist us in operating our business, including SMS delivery providers. These providers are bound by confidentiality agreements.</li>
                                    <li><strong>Legal Requirements:</strong> We may disclose information if required by law, court order, or governmental authority.</li>
                                    <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.</li>
                                </ul>
                            </div>

                            {/* Data Security */}
                            <div className="card mb-8">
                                <h2 className="heading-md mb-4">Data Security</h2>
                                <p className="text-[var(--foreground-muted)]">
                                    We implement appropriate technical and organizational measures to protect your personal information against unauthorized access,
                                    alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure,
                                    and we cannot guarantee absolute security.
                                </p>
                            </div>

                            {/* Your Rights */}
                            <div className="card mb-8">
                                <h2 className="heading-md mb-4">Your Rights</h2>
                                <p className="text-[var(--foreground-muted)] mb-4">
                                    You have the right to:
                                </p>
                                <ul className="list-disc pl-6 space-y-2 text-[var(--foreground-muted)]">
                                    <li>Access and receive a copy of your personal information</li>
                                    <li>Request correction of inaccurate personal information</li>
                                    <li>Request deletion of your personal information</li>
                                    <li>Opt out of SMS communications at any time by replying STOP</li>
                                    <li>Withdraw consent for data processing</li>
                                </ul>
                            </div>

                            {/* Contact Information */}
                            <div className="card mb-8">
                                <h2 className="heading-md mb-4">Contact Us</h2>
                                <p className="text-[var(--foreground-muted)] mb-4">
                                    If you have any questions about this Privacy Policy or our data practices, please contact us:
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

                            {/* Changes to Policy */}
                            <div className="card mb-8">
                                <h2 className="heading-md mb-4">Changes to This Privacy Policy</h2>
                                <p className="text-[var(--foreground-muted)]">
                                    We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page
                                    and updating the &quot;Last Updated&quot; date. Your continued use of our services after any changes constitutes acceptance of the updated policy.
                                </p>
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
