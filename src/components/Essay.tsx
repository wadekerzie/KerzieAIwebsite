import Link from "next/link";

/* ============================================================================
   Essay shell — a document, not a page.

   The navy canvas is the desk; the essay sits on a paper sheet with visible
   edges. Everything here is presentational and reusable: /kerzie-effect is the
   first tenant, /the-line and anything after it inherit the same treatment.

   Styles live in the `.paper` block at the bottom of globals.css.
   ========================================================================== */

/* --- The sheet ----------------------------------------------------------- */

export function EssaySheet({
  children,
  after,
  backHref = "/",
  backLabel,
}: {
  children: React.ReactNode;
  /* Site furniture — subscribe, next-step links. Rendered below the sheet,
     back on the navy: the document ends, then the website resumes. */
  after?: React.ReactNode;
  /* Where the back link goes. An appendix points at its argument, not home. */
  backHref?: string;
  backLabel?: string;
}) {
  return (
    <div className="bg-[#1A1B2E] min-h-screen pb-24">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 pt-8 pb-6 p-noprint">
        <Link
          href={backHref}
          className="k-mono text-[#AABBCC]/70 text-xs tracking-[0.15em] hover:text-white transition-colors duration-200 k-focus"
        >
          &larr;{" "}
          {backLabel ?? (
            <>
              KERZIE<span className="text-[#E8896A]">.</span>AI
            </>
          )}
        </Link>
      </div>

      <article className="paper">
        <div className="paper-inner">
          <div className="paper-col">{children}</div>
        </div>
      </article>

      {after ? (
        <div className="max-w-3xl mx-auto px-6 lg:px-12 pt-16 p-noprint">
          {after}
        </div>
      ) : null}
    </div>
  );
}

/* --- Masthead ------------------------------------------------------------ */

export function EssayMasthead({
  kicker,
  author,
  date,
  revised,
  title,
  deck,
}: {
  kicker: string;
  author: string;
  /* Date of publication. This never moves once a piece is out: it is the
     record of when the argument was made. Later edits go in `revised`. */
  date: string;
  revised?: string;
  title: React.ReactNode;
  deck: React.ReactNode;
}) {
  return (
    <header>
      {/* Explicit lines: in the gutter they stack right-aligned, and the
          gutter is too narrow to break "Wade Kerzie · July 24, 2026"
          anywhere that looks deliberate. Inline on small screens. */}
      <p className="p-kicker">
        <span className="idx">{kicker}</span>
        <span className="who">{author}</span>
        <span className="when">{date}</span>
        {revised ? <span className="revised">Revised {revised}</span> : null}
      </p>
      <h1 className="p-title">{title}</h1>
      <p className="p-deck">{deck}</p>
    </header>
  );
}

/* The paper states its claim before it argues it. */
export function Abstract({ children }: { children: React.ReactNode }) {
  return (
    <section className="p-abstract">
      <p className="p-abstract-label">Abstract</p>
      <p className="p-abstract-body">{children}</p>
    </section>
  );
}

/* --- Running text -------------------------------------------------------- */

export function P({
  children,
  open,
}: {
  children: React.ReactNode;
  open?: boolean;
}) {
  return <p className={open ? "p-p p-p--open" : "p-p"}>{children}</p>;
}

/* Sections number themselves with a CSS counter, so reordering the essay never
   leaves a stale numeral behind. */
export function Section({ children }: { children: React.ReactNode }) {
  return <h2 className="p-section">{children}</h2>;
}

/* Editorial marginalia, not citations. Zero-height in the flow: place one
   immediately before the paragraph it should sit beside. */
// MARGIN NOTES ARE NOT OPTIONAL (Wade's rule, 2026-07-31, after the Blast Door
// first shipped without them): every essay page uses <Note> margin notes at its
// key beats - short aphoristic lines, ~6-10 per essay, placed BEFORE the
// paragraph they annotate. See kerzie-effect and consequence-clock for the
// register. An essay PR without Notes is incomplete.
export function Note({ children }: { children: React.ReactNode }) {
  return (
    <div className="p-note" aria-hidden="false">
      <span>{children}</span>
    </div>
  );
}

export function Thesis({
  label = "The definition",
  children,
}: {
  label?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="p-thesis">
      <p className="p-thesis-label">{label}</p>
      <p className="p-thesis-body">{children}</p>
    </section>
  );
}

export function Callout({ children }: { children: React.ReactNode }) {
  return <p className="p-callout">{children}</p>;
}

/* --- Evidence ------------------------------------------------------------ */

export function Case({
  label,
  title,
}: {
  label: string;
  title: string;
}) {
  return (
    <div className="p-case">
      <p className="p-case-label">{label}</p>
      <h3 className="p-case-title">{title}</h3>
    </div>
  );
}

export function Sow({
  items,
  label = "Scope of work",
}: {
  items: string[];
  label?: string;
}) {
  return (
    <div className="p-sow">
      <p className="p-sow-label">{label}</p>
      <ul className="p-sow-list">
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

/* The transcripts are set in sans on purpose. Serif is the human argument;
   the typeface itself marks where Wade stops and the machine starts. */
export function Ai({
  children,
  label = "AI output, verbatim",
}: {
  children: React.ReactNode;
  label?: string;
}) {
  return (
    <blockquote className="p-ai">
      <p className="p-ai-label">{label}</p>
      {children}
    </blockquote>
  );
}

export function AiLine({ children }: { children: React.ReactNode }) {
  return <p className="p-ai-line">{children}</p>;
}

/* --- Foot ---------------------------------------------------------------- */

export function Colophon({
  label = "Sources",
  children,
}: {
  label?: string;
  children: React.ReactNode;
}) {
  return (
    <footer className="p-colophon">
      <p className="p-colophon-label">{label}</p>
      <p className="p-colophon-body">{children}</p>
    </footer>
  );
}
