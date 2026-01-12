"use client";

import { useState } from "react";
import Link from "next/link";
import {
  BookOpen,
  Rocket,
  Sparkles,
  ArrowRight,
  X,
  ChevronDown,
  Phone,
  MessageCircle,
  Mail,
  MessageSquare,
  Calendar,
  MapPin,
  DollarSign,
  Clock,
} from "lucide-react";

// 54 Reasons data
const reasons54 = {
  newLead: {
    title: "New Lead Inquiries",
    count: 18,
    color: "var(--accent-blue)",
    categories: [
      {
        name: "General Information",
        items: [
          "Business hours of operation",
          "Service area / geographic coverage",
          "General pricing / cost estimates",
          "Services offered / what you do",
          "Whether you service their specific need",
          "How quickly you can respond / availability",
          "Licensing, certifications, insurance verification",
          "Years in business / experience level",
        ],
      },
      {
        name: "Lead Qualification",
        items: [
          "Initial consultation / quote request",
          "Appointment scheduling / availability",
          "Emergency service availability",
          "Referral or recommendation questions",
          "Comparison shopping",
        ],
      },
      {
        name: "Contact & Next Steps",
        items: [
          "Website or location directions",
          "How to submit documentation",
          "Payment methods accepted",
          "Financing options available",
          "Timeline for project completion",
        ],
      },
    ],
  },
  existing: {
    title: "Existing Customer Questions",
    count: 16,
    color: "var(--deep-blush)",
    categories: [
      {
        name: "Account & Appointment Management",
        items: [
          "Appointment confirmation / reminder response",
          "Appointment rescheduling",
          "Appointment cancellation",
          "Appointment status",
          "Account status / history lookup",
          "Payment history / invoice questions",
        ],
      },
      {
        name: "Service Details",
        items: [
          "Follow-up questions after service",
          "Additional service requests",
          "Warranty or guarantee questions",
          "Maintenance schedule inquiries",
          "Product/service upgrade options",
          "Referral program / loyalty benefits",
        ],
      },
      {
        name: "Documentation Requests",
        items: [
          "Receipt or invoice resend",
          "Service documentation or records",
          "Insurance claim documentation",
          "Warranty documentation",
        ],
      },
    ],
  },
  support: {
    title: "Support & Problem Resolution",
    count: 12,
    color: "#b5502f",
    categories: [
      {
        name: "Issue Reporting",
        items: [
          "Problem with recent service",
          "Equipment malfunction or failure",
          "Billing dispute or question",
          "Service complaint or dissatisfaction",
          "Request for manager / escalation",
        ],
      },
      {
        name: "Technical Support",
        items: [
          "How-to questions about product/service",
          "Troubleshooting assistance",
          "Product care or maintenance guidance",
          "Return or exchange inquiry",
        ],
      },
      {
        name: "Follow-Up",
        items: [
          "Status update on open issue",
          "Callback request",
          "Second opinion request",
        ],
      },
    ],
  },
  urgent: {
    title: "Urgent / Time-Sensitive",
    count: 8,
    color: "#8b4513",
    categories: [
      {
        name: "Emergencies",
        items: [
          "Emergency service needed",
          "Safety concern or hazard",
          "Immediate access needed",
          "Cancellation within 24 hours",
        ],
      },
      {
        name: "Time-Critical",
        items: [
          "Same-day appointment request",
          "Expedited service request",
          "Delivery tracking / order status",
          '"I\'m at your location" / access questions',
        ],
      },
    ],
  },
};

const steps = [
  {
    icon: BookOpen,
    step: "Step 1",
    title: "We Build Your Knowledge Base",
    description:
      "We centralize everything about your business—services, pricing, policies, FAQs, common scenarios.",
    details: [
      "Your single source of truth",
      "Fixed, consistent, deterministic",
      "AI retrieves the right answer every time",
    ],
  },
  {
    icon: Rocket,
    step: "Step 2",
    title: "We Deploy Across Every Channel",
    description: "Your knowledge base powers every customer interaction with AI retrieval:",
    channels: [
      { icon: Phone, label: "Phone calls (voice AI)" },
      { icon: MessageCircle, label: "Website chatbot" },
      { icon: Mail, label: "Email responses" },
      { icon: MessageSquare, label: "Text/SMS" },
      { icon: MapPin, label: "Google Business Profile" },
    ],
  },
  {
    icon: Sparkles,
    step: "Step 3",
    title: "Customers Get Real Value",
    description:
      "When a customer reaches out, AI delivers actual solutions from your knowledge base:",
    examples: [
      { icon: Calendar, text: "Appointment booking with calendar sync" },
      { icon: MapPin, text: "Turn-by-turn directions to your location" },
      { icon: DollarSign, text: "Pricing for their specific project" },
      { icon: Clock, text: "Order status from your CRM" },
    ],
  },
];

export default function HowItWorks() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      {/* Hero Section */}
      <section className="section section-cream">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <span className="badge mb-6 inline-block">The Process</span>
            <h1 className="heading-xl mb-6">
              How <span className="text-gradient">Unison</span> Works
            </h1>
            <p className="text-xl text-[var(--foreground-muted)] max-w-3xl mx-auto">
              From knowledge base to 24/7 customer communication—here&apos;s
              exactly how Unison transforms your business.
            </p>
          </div>
        </div>
      </section>

      {/* 54 Reasons Intro */}
      <section className="section section-warm">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-lg mb-4">
              There Are <span className="text-gradient">54 Reasons</span>{" "}
              Customers Contact Your Business
            </h2>
            <p className="text-xl text-[var(--foreground-muted)] mb-12">
              Your current setup handles maybe 10-15 of these. We handle all 54.
            </p>

            {/* Category Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
              {Object.entries(reasons54).map(([key, category]) => (
                <div key={key} className="stat-card card-hover">
                  <div
                    className="stat-number mb-2"
                    style={{ color: category.color }}
                  >
                    {category.count}
                  </div>
                  <div className="text-[var(--foreground-muted)] text-sm">
                    {category.title}
                  </div>
                </div>
              ))}
            </div>

            <div className="card text-left mb-8">
              <p className="text-[var(--foreground-muted)] mb-4">
                You don&apos;t get to control WHICH reason they&apos;re
                contacting you about. And you don&apos;t control whether they
                call, text, email, or use your chatbot.
              </p>
              <p className="text-[var(--foreground)] font-semibold mb-6">
                But you CAN control whether they get real answers that solve
                their problem:
              </p>
              <ul className="space-y-3 text-[var(--foreground-muted)]">
                <li className="flex items-start gap-3">
                  <span className="text-[var(--accent-blue)]">•</span>
                  Directions to your facility—so they actually show up
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--accent-blue)]">•</span>
                  Your delivery schedule—pulled from your CRM in real-time
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--accent-blue)]">•</span>
                  Appointment availability—booked while you sleep
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--accent-blue)]">•</span>
                  Pricing for their exact scenario—not &quot;call us for a
                  quote&quot;
                </li>
              </ul>
            </div>

            <button
              onClick={() => setModalOpen(true)}
              className="btn-secondary"
            >
              <span>
                See All 54 Reasons
                <ChevronDown className="w-5 h-5 ml-2" />
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* 54 Reasons Modal */}
      {modalOpen && (
        <div
          className="fixed inset-0 modal-backdrop z-50 flex items-center justify-center p-4"
          onClick={() => setModalOpen(false)}
        >
          <div
            className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-6 border-b border-[var(--border)]">
              <h3 className="heading-md">
                The 54 Reasons Customers Contact Your Business
              </h3>
              <button
                onClick={() => setModalOpen(false)}
                className="p-2 hover:bg-[var(--background-secondary)] rounded-lg transition-colors"
                aria-label="Close modal"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-200px)]">
              <div className="grid md:grid-cols-2 gap-8">
                {Object.entries(reasons54).map(([key, category]) => (
                  <div key={key}>
                    <h4 className="text-lg font-bold text-[var(--foreground)] mb-4 flex items-center gap-2">
                      {category.title}
                      <span
                        className="px-2 py-0.5 rounded text-sm"
                        style={{
                          backgroundColor: `${category.color}15`,
                          color: category.color,
                        }}
                      >
                        {category.count}
                      </span>
                    </h4>
                    {category.categories.map((sub) => (
                      <div key={sub.name} className="mb-4">
                        <h5 className="text-sm font-semibold text-[var(--foreground-muted)] uppercase tracking-wide mb-2">
                          {sub.name}
                        </h5>
                        <ul className="space-y-1">
                          {sub.items.map((item, idx) => (
                            <li
                              key={idx}
                              className="text-[var(--foreground-muted)] text-sm flex items-start gap-2"
                            >
                              <span style={{ color: category.color }}>•</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
            <div className="p-6 border-t border-[var(--border)] bg-[var(--background-secondary)]">
              <p className="text-[var(--foreground-muted)] text-center mb-4">
                Your current setup handles maybe 10-15 of these. We handle all
                54.
                <br />
                Same professional response. Whether they call, text, email, or
                chat. 24/7.
              </p>
              <div className="text-center">
                <Link
                  href="/schedule"
                  onClick={() => setModalOpen(false)}
                  className="btn-primary"
                >
                  <span>Get Started</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* The Process Steps */}
      <section className="section section-cream">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">
              The <span className="text-gradient">Process</span>
            </h2>
            <p className="text-xl text-[var(--foreground-muted)]">
              Three simple steps to transform your customer communication
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {steps.map((step, index) => (
              <div
                key={step.step}
                className="card card-hover"
              >
                <div className="flex flex-col lg:flex-row lg:items-start gap-8">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="icon-box w-20 h-20 rounded-2xl">
                      <step.icon className="w-10 h-10" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <span className="badge mb-3 inline-block">
                      {step.step}
                    </span>
                    <h3 className="heading-md mb-4">
                      {step.title}
                    </h3>
                    <p className="text-lg text-[var(--foreground-muted)] mb-6">
                      {step.description}
                    </p>

                    {/* Step-specific content */}
                    {step.details && (
                      <ul className="space-y-3">
                        {step.details.map((detail, i) => (
                          <li
                            key={i}
                            className="flex items-center gap-3 text-[var(--foreground)]"
                          >
                            <span className="w-2 h-2 rounded-full bg-[var(--accent-blue)]" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    )}

                    {step.channels && (
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {step.channels.map((channel, i) => (
                          <div
                            key={i}
                            className="flex items-center gap-3 text-[var(--foreground)]"
                          >
                            <channel.icon className="w-5 h-5 text-[var(--accent-blue)]" />
                            {channel.label}
                          </div>
                        ))}
                      </div>
                    )}

                    {step.examples && (
                      <div className="grid md:grid-cols-2 gap-4">
                        {step.examples.map((example, i) => (
                          <div
                            key={i}
                            className="flex items-center gap-3 text-[var(--foreground)] bg-[var(--background-secondary)] rounded-lg p-4"
                          >
                            <example.icon className="w-5 h-5 text-[var(--accent-blue)]" />
                            {example.text}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section section-warm">
        <div className="container mx-auto text-center">
          <h2 className="heading-lg mb-4">
            Ready to <span className="text-gradient">Get Started?</span>
          </h2>
          <p className="text-xl text-[var(--foreground-muted)] mb-10 max-w-2xl mx-auto">
            Schedule a discovery call and see how Unison can transform your
            customer communication.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/schedule" className="btn-primary text-lg px-8 py-4">
              <span>
                Book Your Setup Call
                <ArrowRight className="w-5 h-5 ml-2" />
              </span>
            </Link>
            <Link href="/about" className="btn-secondary text-lg px-8 py-4">
              <span>Learn About Us</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
