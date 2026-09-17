import corpusJson from "../../data/askwade/corpus.json";

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
  // Imported, not read from disk: Vercel only ships files the bundler can see.
  cache = corpusJson as Chunk[];
  df = new Map();
  for (const c of cache) {
    for (const t of new Set(tokenize(c.title + " " + c.text))) df.set(t, (df.get(t) ?? 0) + 1);
  }
  return cache;
}

const STOP = new Set("a an and are as at be by for from has have how i in is it its of on or that the this to was were what when where which who why will with you your do does did about into over than then there these those they them he she his her we our us not no yes can could would should if but so".split(" "));

// Light stemming so "receipt" finds "receipts" and "publish" finds "published".
function stem(t: string): string {
  if (t.length <= 4) return t;
  return t.replace(/(ing|ies|ers|ed|es|s)$/, (m) => (m === "ies" ? "y" : ""));
}

export function tokenize(s: string): string[] {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9$%. ]+/g, " ")
    .split(/\s+/)
    .map((t) => t.replace(/^\.+|\.+$/g, ""))
    .filter((t) => t.length > 1 && !STOP.has(t))
    .map(stem);
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

export { VIEWERS, sealedCheck } from "./askwade-keys";
export type { Viewer } from "./askwade-keys";
