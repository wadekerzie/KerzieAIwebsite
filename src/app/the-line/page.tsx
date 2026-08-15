import Link from "next/link";
import type { Metadata } from "next";
import {
  EssaySheet,
  EssayMasthead,
  P,
  Section,
  Note,
  Callout,
  Sow,
} from "@/components/Essay";

export const metadata: Metadata = {
  title: "The Wrong Side Of The Line | Kerzie AI",
  description:
    "The Kerzie effect has two preconditions: someone crosses the AI competency line, and they work from one window. If you finished the essay missing one of them, this is what to do about it.",
  openGraph: {
    title: "The Wrong Side Of The Line",
    description:
      "Appendix to The Kerzie Effect. Two preconditions, which one you're missing, and what each costs to fix.",
    type: "article",
    publishedTime: "2026-07-25",
    modifiedTime: "2026-07-27",
    authors: ["Wade Kerzie"],
  },
};

// The appendix carries offers, so it keeps its own footer link back to the
// argument it hangs off. Website, not document: it sits on the navy.
const afterMatter = (
  <p className="text-[#AABBCC]/80 leading-relaxed max-w-xl">
    This page only makes sense alongside the argument it comes from:{" "}
    <Link href="/kerzie-effect" className="k-link k-focus text-[#6B9FD4]">
      The Kerzie Effect
    </Link>
    .
  </p>
);

export default function TheLinePage() {
  return (
    <EssaySheet after={afterMatter} backHref="/kerzie-effect" backLabel="THE KERZIE EFFECT">
      <EssayMasthead
        kicker="Appendix"
        author="Wade Kerzie"
        date="July 25, 2026"
        revised="July 27, 2026"
        title={
          <>
            If you&rsquo;re on the wrong side of the line
            <span className="dot">.</span>
          </>
        }
        deck={
          <>
            The essay names two things that have to be true before any of this
            happens to you, or for you. This is what to do if you&rsquo;re
            missing one of them.
          </>
        }
      />

      <Section>The two preconditions</Section>
      <P>
        The whole essay comes down to one sentence: once someone has crossed the
        competency line and is working from one window, the AI stops
        recommending and starts executing.
      </P>
      <Callout>
        That is two separate conditions, and neither one is about being
        technical.
      </Callout>
      <Note>
        Two different problems. They do not have the same fix, and they do not
        cost the same to solve.
      </Note>
      <P>
        <strong>The competency line</strong> is knowing what to hand an AI and
        knowing when what comes back is wrong. It is measurable. In the Harvard
        Business School and BCG field experiment, consultants working inside
        that line finished about 25 percent faster with roughly 40 percent
        higher quality. The same study found consultants working outside it did
        worse, by 19 percentage points. It cuts both ways.
      </P>
      <P>
        <strong>One window</strong> is your AI being able to see the business:
        your files, your numbers, your accounts, your systems. Not a chat tab
        you paste things into and lose at the end of the thread.
      </P>

      <Section>Which one are you missing</Section>
      <Sow
        label="Diagnostic"
        items={[
          "You can already describe what you want the AI to do, and the problem is that it can’t see anything. You’re missing the window.",
          "Your AI can see plenty, and the problem is that you don’t know what to hand it or how to tell when the answer is wrong. You’re missing the crossing.",
          "Both. Start with the window. It is the cheaper half, and the session below includes it anyway.",
        ]}
      />

      <Section>If you&rsquo;re missing the window</Section>
      <P>
        The one-window setup is a document you load into the AI you already pay
        for. It asks you the questions and builds the working environment with
        you: the workspace, the operating manual, the tracker, the memory rules,
        the routines.
      </P>
      <P>
        It is the same framework my own businesses run on every day, which also
        means it is a synthesis of general knowledge, and I have priced it that
        way.
      </P>
      <p className="p-price">$99, one time.</p>
      <p className="mt-6">
        <Link href="/one-window" className="p-btn k-focus">
          One-Window <span className="k-arrow">&rarr;</span>
        </Link>
      </p>

      <Section>If you&rsquo;re missing the crossing</Section>
      <P>
        Three hours at your desk, on your machine, with your accounts and your
        own AI subscription. Bring up to two more people and they do the same
        thing beside you, each on their own machine. We set it up together and
        every person ships one real piece of their own work before the session
        ends. Not a class, not a demo on someone else&rsquo;s screen.
      </P>
      <Note>The bar is not impressed. The bar is self-sufficient.</Note>
      <P>
        Kurt Nelson runs a McKinney photography studio and had never touched AI.
        Three hours after I left, he sat back down at the same window and kept
        working, alone. That is the bar: not impressed, self-sufficient.
      </P>
      <p className="p-price">
        $999 flat for up to three people, and the one-window document is
        included for each of them.
      </p>
      <p className="mt-6">
        <Link href="/services/fast-track" className="p-btn k-focus">
          The AI Fast-Track Session <span className="k-arrow">&rarr;</span>
        </Link>
      </p>

      <Section>If you read it from the selling side</Section>
      <P>
        Different problem. Your exposure isn&rsquo;t that you can&rsquo;t use AI.
        It&rsquo;s that the document you hand out for free is a standalone
        product now.
      </P>
      <Callout>
        The move is not to stop writing proposals. It&rsquo;s to stop giving away
        the executable version, charge for the diagnosis before anyone sees a
        plan with their name on it, and be able to execute inside a
        client&rsquo;s actual systems rather than recommend from outside them.
      </Callout>
      <P>
        That last part is a build, not a purchase, and it&rsquo;s a longer
        conversation than a page.
      </P>
      <p className="mt-6">
        <Link href="/schedule" className="p-btn-ghost k-focus">
          Have that conversation <span className="k-arrow">&rarr;</span>
        </Link>
      </p>

      <Section>The honest part</Section>
      <P>
        The essay&rsquo;s own test applies to me, so here it is run on my own
        offers.
      </P>
      <Note>
        Same test, turned on myself. Synthesis is priced like synthesis.
      </Note>
      <P>
        The $99 document is a synthesis of general knowledge. Someone patient
        enough could assemble most of it themselves, and the price reflects
        exactly that. The three hours at your desk, with your accounts, on the
        workflow that actually hurts, is the part that can&rsquo;t be
        substituted. That&rsquo;s the $999.
      </P>
      <Callout>
        Neither one makes you immune to any of this. They put you on the side of
        the line where it works for you instead of on you.
      </Callout>
    </EssaySheet>
  );
}
