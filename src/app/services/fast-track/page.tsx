import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import type { Metadata } from "next";
import FastTrackIntakeForm from "@/components/FastTrackIntakeForm";

export const metadata: Metadata = {
  title: "AI Fast-Track Session | Kerzie AI Services",
  description:
    "Three hours. Your computer, your business, your own AI subscription. We set it up together and ship one real piece of work before we are done. $750 flat.",
};

const takeaways = [
  "A working Claude setup on your own machine, under your own $20 per month subscription.",
  "Connected to the real accounts your business runs on.",
  "One painful workflow moved from manual to working. Your call which one; the intake helps us pick.",
  "A simple action system you can run every day.",
  "A check-in from me 30 days later to see what stuck.",
];

export default function FastTrackPage() {
  return (
    <>
      <section className="section-hero section-cream">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <div className="badge mb-6 inline-flex">AI Fast-Track Session</div>
            <h1 className="heading-xl mb-4 animate-fade-in-up">You leave with it working.</h1>
            <p className="text-xl text-[var(--foreground-muted)] mb-6 max-w-2xl mx-auto animate-fade-in-up delay-100">
              Three hours. Your computer, your business, your own $20 AI subscription. We set it
              up together and ship one real piece of work before we are done.
            </p>
            <p className="text-2xl font-semibold text-[var(--foreground)] mb-10 animate-fade-in-up delay-100">
              $750 flat.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-200">
              <a href="#intake" className="btn-primary btn-lg">
                <span>
                  Start With The Intake
                  <ArrowRight className="w-5 h-5 ml-2" />
                </span>
              </a>
              <Link href="/services" className="btn-secondary btn-lg">
                <span>All Services</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-white">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto space-y-12">
            <div>
              <h2 className="heading-md mb-4">The problem with AI demos</h2>
              <p className="text-[var(--foreground-muted)] mb-3">
                You can watch a free AI demo any week of the year. Google runs them. Intuit runs
                them. Your chamber of commerce runs them.
              </p>
              <p className="text-[var(--foreground-muted)] mb-3">
                You leave impressed. And nothing at your business changes.
              </p>
              <p className="text-[var(--foreground-muted)]">
                That is because a demo happens on someone else&apos;s screen, with someone
                else&apos;s business, solving someone else&apos;s problem.
              </p>
            </div>

            <div>
              <h2 className="heading-md mb-4">What this is</h2>
              <p className="text-[var(--foreground-muted)] mb-3">
                Not a class. Not a demo. Not a report you file away.
              </p>
              <p className="text-[var(--foreground-muted)] mb-3">
                A working session. We sit down at your computer, with your accounts, and set up AI
                to do real work in your business. Then we do some of that work, together, before
                the session ends.
              </p>
              <p className="text-[var(--foreground-muted)]">
                By the end you are not &quot;trained on AI.&quot; You have AI working, and you know
                how to keep it working tomorrow without me.
              </p>
            </div>

            <div>
              <h2 className="heading-md mb-4">What you leave with</h2>
              <ul className="space-y-3">
                {takeaways.map((t) => (
                  <li key={t} className="flex items-start gap-3">
                    <Check className="w-5 h-5 mt-1 shrink-0 text-[var(--accent-blue)]" />
                    <span className="text-[var(--foreground-muted)]">{t}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="heading-md mb-4">Before we book</h2>
              <p className="text-[var(--foreground-muted)] mb-3">
                Not everyone is a fit, and I would rather tell you that before you pay me.
              </p>
              <p className="text-[var(--foreground-muted)] mb-3">
                You fill out a short intake first. Two things are non-negotiable:
              </p>
              <ol className="list-decimal list-inside space-y-2 text-[var(--foreground-muted)] mb-3">
                <li>
                  You can name a workflow that actually hurts. &quot;I want to see what AI can
                  do&quot; is what the free demos are for.
                </li>
                <li>
                  You show up with an active $20 per month Claude subscription and your logins
                  ready. If that feels like too much before we start, this session is not for you
                  yet.
                </li>
              </ol>
              <p className="text-[var(--foreground-muted)]">
                If the intake tells me the session will not pay for itself, I will say so and
                point you somewhere free.
              </p>
            </div>

            <div>
              <h2 className="heading-md mb-4">The price</h2>
              <p className="text-[var(--foreground-muted)] mb-3">
                $750, flat. That covers the intake review, the 3-hour working session, and the
                30-day check-in.
              </p>
              <p className="text-[var(--foreground-muted)]">
                If what we find during the session is bigger than three hours can hold, that is a
                different conversation, and we will have it straight.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="intake" className="section section-cream">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="heading-lg mb-3">The intake</h2>
              <p className="text-[var(--foreground-muted)]">
                Five minutes. This tells us both whether the session is worth your $750 and my
                three hours.
              </p>
            </div>
            <FastTrackIntakeForm />
          </div>
        </div>
      </section>
    </>
  );
}
