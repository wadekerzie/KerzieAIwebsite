// The key model for "Wade Kerzie, on the record". No Node imports here: this
// module is shared by the client component and the API route.

// The key model. Each viewer holds a key set by the executive; sealed topics
// stay sealed to that key. Demo values for Wade's own record.
export type Viewer = "successor" | "leadership" | "board" | "family";

export const VIEWERS: Record<Viewer, { label: string; opens: string[]; sealed: { topic: string; note: string }[] }> = {
  successor: {
    label: "Successor",
    opens: ["Operating judgment", "Customers and pricing philosophy", "Crisis playbooks", "The rules and why they exist"],
    sealed: [
      { topic: "Compensation history", note: "Opens to the successor January 2028" },
      { topic: "The people file", note: "Sealed by Wade" },
      { topic: "Succession sessions", note: "Opens on a trigger Wade set" },
    ],
  },
  leadership: {
    label: "Leadership",
    opens: ["Operating judgment", "Crisis playbooks", "The rules and why they exist"],
    sealed: [
      { topic: "Compensation history", note: "Sealed to leadership" },
      { topic: "The people file", note: "Sealed by Wade" },
      { topic: "Succession sessions", note: "Sealed to leadership" },
      { topic: "Customer-level pricing", note: "Successor only" },
    ],
  },
  board: {
    label: "Board",
    opens: ["Operating judgment", "Crisis playbooks", "Succession sessions"],
    sealed: [
      { topic: "Compensation history", note: "Opens to the board January 2028" },
      { topic: "The people file", note: "Sealed by Wade" },
      { topic: "Customer-level pricing", note: "Successor only" },
    ],
  },
  family: {
    label: "Family",
    opens: ["The Dossier: the rules, the stories, the people map"],
    sealed: [
      { topic: "Everything operational", note: "The family holds the Dossier, not the business" },
    ],
  },
};

const SEALED_PATTERNS: { topic: string; re: RegExp }[] = [
  { topic: "Compensation history", re: /\b(compensation|comp history|salary|salaries|bonus|equity|stock options|paycheck|pay (yourself|himself|herself)|paid (yourself|himself|herself)|your pay|take[- ]home|how much (do|did|does) (you|he|she|wade) (make|earn|pay|take))\b/i },
  { topic: "The people file", re: /\b(fire|fired|firing|let go|performance review|underperform|hr file|personnel|who (is|was) the weakest)\b/i },
  { topic: "Succession sessions", re: /\b(successor|succession|who should (run|replace|take over)|next ceo|heir)\b/i },
];

export function sealedCheck(question: string, viewer: Viewer): { topic: string; note: string } | null {
  for (const p of SEALED_PATTERNS) {
    if (!p.re.test(question)) continue;
    const s = VIEWERS[viewer].sealed.find((x) => x.topic === p.topic);
    if (s) return s;
  }
  return null;
}
