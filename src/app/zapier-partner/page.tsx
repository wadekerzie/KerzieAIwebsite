import Link from "next/link";
import {
  ArrowRight,
  Zap,
  Link2,
  Settings,
  LifeBuoy,
  CheckCircle,
} from "lucide-react";

export default function ZapierPartner() {
  return (
    <>
      {/* Hero Section */}
      <section className="section section-cream">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <span className="badge mb-6 inline-block">
              Zapier Silver Solution Partner
            </span>
            <h1 className="heading-xl mb-6">
              Automation Excellence with{" "}
              <span className="text-gradient">Zapier</span>
            </h1>
            <p className="text-xl text-[var(--foreground-muted)] max-w-3xl mx-auto mb-10">
              As a Zapier Silver Solution Partner, our team of Zapier experts
              helps businesses automate workflows and increase efficiency
              through custom integrations.
            </p>

            {/* Partner Lockup - Responsive */}
            <div className="flex justify-center mb-10">
              {/* Horizontal lockup for desktop (md and up) */}
              <img
                src="https://storage.googleapis.com/msgsndr/Dg5W9eZap2oolpBTgwTZ/media/6949628783fecf1245e06ad2.png"
                alt="Kerzie AI - Zapier Silver Solution Partner"
                className="hidden md:block w-auto max-w-[700px] lg:max-w-[800px]"
                style={{ height: 'auto' }}
              />
              {/* Vertical lockup for mobile only */}
              <img
                src="https://storage.googleapis.com/msgsndr/Dg5W9eZap2oolpBTgwTZ/media/69495ca3eb54326748a24f41.png"
                alt="Kerzie AI - Zapier Silver Solution Partner"
                className="md:hidden w-auto max-w-[320px]"
                style={{ height: 'auto' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* What This Partnership Means */}
      <section className="section section-warm">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="heading-lg mb-4">
                What This <span className="text-gradient">Partnership</span>{" "}
                Means
              </h2>
              <p className="text-xl text-[var(--foreground-muted)]">
                Our Zapier Silver Solution Partner status validates our
                expertise in automation.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="card text-center">
                <div className="icon-box w-14 h-14 rounded-xl mx-auto mb-4">
                  <CheckCircle className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-semibold text-[var(--foreground)] mb-2">
                  Verified Expertise
                </h3>
                <p className="text-[var(--foreground-muted)]">
                  Completed Zapier&apos;s foundational training and
                  certification requirements.
                </p>
              </div>

              <div className="card text-center">
                <div className="icon-box w-14 h-14 rounded-xl mx-auto mb-4">
                  <Zap className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-semibold text-[var(--foreground)] mb-2">
                  Enhanced Resources
                </h3>
                <p className="text-[var(--foreground-muted)]">
                  Access to expanded partner resources and priority support
                  channels.
                </p>
              </div>

              <div className="card text-center">
                <div className="icon-box w-14 h-14 rounded-xl mx-auto mb-4">
                  <LifeBuoy className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-semibold text-[var(--foreground)] mb-2">
                  Ongoing Training
                </h3>
                <p className="text-[var(--foreground-muted)]">
                  Continuous education on new Zapier features and best
                  practices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Help */}
      <section className="section section-cream">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="heading-lg mb-4">
                How We <span className="text-gradient">Help</span>
              </h2>
              <p className="text-xl text-[var(--foreground-muted)]">
                We build automation solutions that connect your business systems
                seamlessly.
              </p>
            </div>

            <div className="space-y-6">
              <div className="card card-hover flex items-start gap-6">
                <div className="icon-box flex-shrink-0">
                  <Settings className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[var(--foreground)] mb-2">
                    Workflow Automation Design
                  </h3>
                  <p className="text-[var(--foreground-muted)]">
                    We analyze your business processes and design automated
                    workflows that eliminate manual tasks, reduce errors, and
                    save your team hours every week.
                  </p>
                </div>
              </div>

              <div className="card card-hover flex items-start gap-6">
                <div className="icon-box flex-shrink-0">
                  <Link2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[var(--foreground)] mb-2">
                    Multi-App Integrations
                  </h3>
                  <p className="text-[var(--foreground-muted)]">
                    Connect your CRM, phone system, email, calendar, and other
                    tools into a unified ecosystem. Data flows automatically
                    between systems without manual entry.
                  </p>
                </div>
              </div>

              <div className="card card-hover flex items-start gap-6">
                <div className="icon-box flex-shrink-0">
                  <Zap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[var(--foreground)] mb-2">
                    Custom Zap Development
                  </h3>
                  <p className="text-[var(--foreground-muted)]">
                    We build custom Zaps tailored to your specific business
                    needs, including complex multi-step automations with
                    conditional logic and data transformations.
                  </p>
                </div>
              </div>

              <div className="card card-hover flex items-start gap-6">
                <div className="icon-box flex-shrink-0">
                  <LifeBuoy className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[var(--foreground)] mb-2">
                    Ongoing Optimization & Support
                  </h3>
                  <p className="text-[var(--foreground-muted)]">
                    Automation isn&apos;t set-and-forget. We monitor your
                    workflows, optimize performance, and adapt your automations
                    as your business evolves.
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
            Ready to Automate Your Business?
          </h2>
          <p className="text-xl text-[var(--foreground)] opacity-80 mb-10 max-w-2xl mx-auto">
            Schedule a discovery call and let our Zapier experts show you how
            automation can transform your operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/schedule" className="btn-primary text-lg px-8 py-4">
              <span>
                Book Your Setup Call
                <ArrowRight className="w-5 h-5 ml-2" />
              </span>
            </Link>
            <Link
              href="/how-it-works"
              className="btn-secondary text-lg px-8 py-4 bg-white/50"
            >
              <span>See How It Works</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
