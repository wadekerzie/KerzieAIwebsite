import ProductStory from "@/components/ProductStory";

export const metadata = {
  title: "Executive Legacy | Kerzie AI",
  description:
    "What walks out the door with a retiring executive? Executive Legacy captures that judgment in an answer set the successor can ask, every answer cited.",
};

// Rewritten 2026-09-17 on Wade's order ("beef up the offer page"): the
// walks-out-the-door question leads, the video clone is the demo (an avatar
// might be part of the deliverable, stated as optional), the engagement is
// laid out step by step, and the CTA is twenty minutes on the calendar.
// The pricing block (05) ships only after Wade rules on the numbers.
export default function ExecutiveLegacyPage() {
  return (
    <ProductStory
      clock="40 YRS"
      hook="Forty years of judgment retires at the end of the year. What walks out the door with it?"
      problemBody="Every retiring executive knows the scene: the successor is capable, the handoff binder exists, and six weeks in the calls still come. What do we do about this customer, would you take this deal, who do we trust for this job. The knowledge that built the business was never written down because it never had to be. It lives in one person's judgment, and that person is trying to leave. The company should be falling over itself to keep it. Most don't, because nobody knew how."
      whyLabel="Why It Stays Broken"
      whyHook="Succession plans transfer ownership. Nobody transfers judgment."
      whyBody="The consultants who do knowledge transfer bill Fortune 500 rates and leave behind binders and interviews on a shelf. The AI clone apps improvise plausible-sounding answers with nobody checking. A consulting retainer keeps the phone line open, and the bill scales with every question. None of it gives a successor what they need at a decision point: what the executive would really say, grounded in what the executive really said."
      builtHook="Executive Legacy keeps it."
      builtBody="A white-glove engagement across the executive's last months, and it is not a couple of interviews. We put the executive on the record. A recorder we buy and set up, worn every business day, with the transcripts coming to us. Every meeting, town hall, and board presentation captured. The emails where the decisions got made. And one-on-one sessions built around twelve questions the successor cannot answer today. From all of it we build a private, permission-gated answer set the successor can ask. Every answer traces to something the executive actually said, cited to the source. When the captured judgment does not cover a question, it says so and points to who to call. Sealed topics stay sealed. The executive reviews what their virtual self is asked and can correct any answer, for as long as they want the job. If the executive wants it, the answer set can look and sound like them: a video avatar, built from the same record. That part is optional. What sits behind it is not."
      demoLabel="Under Two Minutes, And The Clone Is The Demo"
      demo={
        <div className="max-w-2xl mx-auto">
          <video
            controls
            preload="metadata"
            playsInline
            poster="/videos/executive-legacy-poster.jpg"
            className="w-full rounded-lg border border-[rgba(26,27,46,0.2)]"
          >
            <source src="/videos/executive-legacy.mp4" type="video/mp4" />
          </video>
          <p className="mt-3 text-[#262B3D]/70 text-sm leading-relaxed">
            This is an AI video clone of Wade Kerzie. The words are his. An executive who wants one can have their answer set delivered the same way; the part that matters is what sits behind it.
          </p>
        </div>
      }
      steps={[
        "Week one: the twelve questions. We map what the successor cannot answer today, the executive seals what stays sealed, the recorder goes on, and the first one-on-one session is recorded.",
        "The last months: everything on the record. The recorder every business day, transcripts to us. Meetings, town halls, and board presentations pulled in. The decision emails. One-on-one sessions across operations, people, customers, and crises.",
        "The answer set. Built from the whole record, every answer cited to what the executive actually said. Nothing improvised. The executive reviews it before anyone else asks it a question.",
        "After the last day: the successor asks at the decision point, the executive sees every question and can correct any answer, and the record grows with each refresh session they choose to give.",
      ]}
      extra={{
        label: "Who Gets What",
        hook: "The executive owns it. The company licenses it.",
        paragraphs: [
          "Every person who inherits the judgment gets their own key, set by the executive at signing.",
          "The successor asks it where the work happens: text, phone, or web, at the decision point. Every answer comes back with the date and the conversation it came from. When the record is silent, it says so and names who to call.",
          "Leadership and the board get the topics the executive opens to them, and nothing else. Comp history, the people file, and the succession sessions stay sealed until a date or a trigger the executive sets, or forever.",
          "The family gets the Dossier: a bound volume of the rules, the stories, and the people map.",
          "The executive sees every question asked and every answer given, and can correct any of them, for as long as they want the job.",
        ],
      }}
      ctaHook="The business keeps its judgment. The executive keeps their retirement."
      ctaSub="Founding engagements, Fall 2026. Twenty minutes on a screen is enough to see it."
      ctaLabel="Book twenty minutes"
      ctaHref="/schedule"
    />
  );
}
