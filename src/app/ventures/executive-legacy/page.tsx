import ProductStory from "@/components/ProductStory";

export const metadata = {
  title: "Executive Legacy | Kerzie AI",
  description:
    "Forty years of judgment walks out the door at retirement. Executive Legacy captures it in structured interviews and builds a private AI version your successor can actually ask.",
};

export default function ExecutiveLegacyPage() {
  return (
    <ProductStory
      clock="40 YRS"
      hook="Forty years of judgment retires at the end of the year. The phone keeps ringing anyway."
      problemBody="Every retiring owner knows the scene: the successor is capable, the handoff binder exists, and six weeks in the calls still come — what do we do about this customer, would you take this deal, who do we trust for this job. The knowledge that built the business was never written down because it never had to be. It lives in one person's judgment, and that person is trying to leave."
      whyLabel="Why It Stays Broken"
      whyHook="Succession plans transfer ownership. Nobody transfers judgment."
      whyBody="The consultants who do knowledge transfer bill Fortune 500 rates and leave behind binders and interviews on a shelf. The AI clone apps improvise plausible-sounding answers with nobody checking. Neither gives a successor what they actually need at a decision point: what the founder would really say, grounded in what the founder really said."
      builtHook="So we're building Executive Legacy."
      builtBody="A white-glove engagement: structured interview sessions capture the operating judgment, the people philosophy, the customer relationships, and the crisis playbooks — then we build a private, permission-gated AI version of the executive their successor can ask. Every answer traces to something the executive actually said, cited to the session. When the captured judgment doesn't cover a question, it says so honestly and points to who to call. The executive reviews what their virtual self is asked and can correct any answer, for as long as they want the job."
      steps={[
        "Multi-session capture across the domains that matter: operations, people, customers, crises.",
        "Every answer cites the session it came from. Nothing improvised, ever.",
        "Sealed topics stay sealed — the executive controls who can ask what.",
        "The successor asks at the decision point, not at the retirement dinner.",
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
      ctaHook="The business keeps its judgment. The founder keeps their retirement."
      ctaSub="Founding engagements by invitation, Fall 2026."
      ctaLabel="Request an invitation"
      ctaHref="mailto:wade@kerzie.ai?subject=Executive%20Legacy%20founding%20engagement"
      ctaExternal
    />
  );
}
