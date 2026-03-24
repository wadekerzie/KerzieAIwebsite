// STUB: expand with final copy
import Link from "next/link";
import { ArrowRight, Code, Layers, Smartphone, Database } from "lucide-react";

export const metadata = {
  title: "App Development | Kerzie AI",
  description:
    "Custom AI-powered application development for business workflows and operational needs. Production-ready systems, not prototypes.",
};

export default function AppDevelopmentService() {
  return (
    <>
      <section className="section-hero section-cream">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <span className="badge mb-6 inline-block">App Development</span>
            <h1 className="heading-xl mb-6">
              Custom AI-Powered{" "}
              <span className="text-gradient">Applications</span>
            </h1>
            <p className="text-xl text-[var(--foreground-muted)] max-w-3xl mx-auto mb-6">
              We build production applications that solve specific business
              problems—powered by AI, designed for your workflows, and built to
              ship.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/schedule" className="btn-primary btn-lg">
                <span>
                  Book a Call
                  <ArrowRight className="w-5 h-5 ml-2" />
                </span>
              </Link>
              <Link href="/" className="btn-secondary btn-lg">
                <span>Back to Services</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="heading-lg mb-4">
                What We <span className="text-gradient">Build</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="card card-hover">
                <div className="icon-box mb-4">
                  <Smartphone className="w-6 h-6" />
                </div>
                <h3 className="heading-md mb-2">Mobile & Web Apps</h3>
                <p className="text-[var(--foreground-muted)]">
                  Cross-platform applications with AI-powered features built for
                  your specific use case.
                </p>
              </div>
              <div className="card card-hover">
                <div className="icon-box mb-4">
                  <Database className="w-6 h-6" />
                </div>
                <h3 className="heading-md mb-2">Data & Workflow Systems</h3>
                <p className="text-[var(--foreground-muted)]">
                  Internal tools, dashboards, and automation systems that
                  integrate with your existing tech stack.
                </p>
              </div>
              <div className="card card-hover">
                <div className="icon-box mb-4">
                  <Layers className="w-6 h-6" />
                </div>
                <h3 className="heading-md mb-2">API & Integration Layers</h3>
                <p className="text-[var(--foreground-muted)]">
                  Connect your systems with custom APIs, middleware, and
                  orchestration layers.
                </p>
              </div>
              <div className="card card-hover">
                <div className="icon-box mb-4">
                  <Code className="w-6 h-6" />
                </div>
                <h3 className="heading-md mb-2">AI Feature Development</h3>
                <p className="text-[var(--foreground-muted)]">
                  Add intelligent features to existing applications—semantic
                  search, document processing, automated workflows.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-compact section-blush">
        <div className="container mx-auto text-center">
          <h2 className="heading-lg mb-4 text-[var(--foreground)]">
            Have a Project in Mind?
          </h2>
          <p className="text-xl text-[var(--foreground)] opacity-80 mb-6 max-w-2xl mx-auto">
            Let&apos;s talk about what you need built. Fixed scope, clear
            timeline, production-ready delivery.
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
