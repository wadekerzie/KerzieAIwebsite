import { promises as fs } from "fs";
import path from "path";

// "Wade Kerzie, on the record" - the Executive Legacy customer-zero demo.
// The ask box answers ONLY from Wade's published record (data/askwade/corpus.json,
// public sources only, see data/askwade/manifest.md). Retrieval is a small
// in-process lexical scorer: the corpus is a few hundred chunks, and a vector
// store would be a second system to keep true for no gain at this size.

export type Chunk = {
  id: string;
  title: string;
  date: string;
  type: "newsletter" | "linkedin" | "essay" | "page" | "byline" | string;
  url: string;
  source_file?: string;
  text: string;
};

let cache: Chunk[] | null = null;
let df: Map<string, number> | null = null;

export async function loadCorpus(): Promise<Chunk[]> {
  if (cache) return cache;
  try {
    const raw = await fs.readFile(path.join(process.cwd(), "data", "askwade", "corpus.json"), "utf-8");
    cache = JSON.parse(raw) as Chunk[];
  } catch {
    cache = [];
  }
  df = new Map();
  for (const c of cache) {
    for (const t of new Set(tokenize(c.title + " " + c.text))) df.set(t, (df.get(t) ?? 0) + 1);
  }
  return cache;
}

const STOP = new Set("a an and are as at be by for from has have how i in is it its of on or that the this to was were what when where which who why will with you your do does did about into over than then there these those they them he she his her we our us not no yes can could would should if but so".split(" "));

export function tokenize(s: string): string[] {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9$%. ]+/g, " ")
    .split(/\s+/)
    .map((t) => t.replace(/^\.+|\.+$/g, ""))
    .filter((t) => t.length > 1 && !STOP.has(t));
}

export async function retrieve(question: string, k = 6): Promise<Chunk[]> {
  const corpus = await loadCorpus();
  if (!corpus.length) return [];
  const N = corpus.length;
  const q = tokenize(question);
  const scored = corpus.map((c) => {
    const toks = tokenize(c.text);
    const titleToks = new Set(tokenize(c.title));
    const tf = new Map<string, number>();
    for (const t of toks) tf.set(t, (tf.get(t) ?? 0) + 1);
    let s = 0;
    for (const t of new Set(q)) {
      const f = tf.get(t) ?? 0;
      if (!f) continue;
      const idf = Math.log(1 + N / (1 + (df?.get(t) ?? 0)));
      s += (f / (f + 1.2)) * idf * (titleToks.has(t) ? 1.6 : 1);
    }
    return { c, s };
  });
  return scored
    .filter((x) => x.s > 0)
    .sort((a, b) => b.s - a.s)
    .slice(0, k)
    .map((x) => x.c);
}

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
  { topic: "Compensation history", re: /\b(compensation|comp history|salary|salaries|bonus|equity|stock options|how much (do|did) .* (make|earn)|paycheck)\b/i },
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
