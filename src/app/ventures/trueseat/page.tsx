import ProductStory from "@/components/ProductStory";

export const metadata = {
  title: "TrueSeat | Kerzie AI",
  description:
    "Resumes are claims. TrueSeat interviews you like a great colleague would, then builds a sealed, evidence-backed dossier of what you can actually do.",
};

export default function TrueSeatPage() {
  return (
    <ProductStory
      clock="7 SEC"
      hook="A recruiter reads your resume for about seven seconds."
      problemBody="Thirty years of work, compressed to two pages, skimmed in the time it takes to sip coffee. Then software scores it by keyword and a stranger decides if you exist. The people who are great at the work are rarely the people who are great at describing the work — and the resume format punishes exactly that gap. Every week, the wrong person gets the seat because they had the better document."
      whyLabel="Why It Stays Broken"
      whyHook="Resumes are claims. Hiring runs on them anyway."
      whyBody="Nobody verifies. The interviewer asks about weaknesses, the candidate performs modesty, and both sides pretend the exercise produced information. Recruiters charge a quarter of a salary to pattern-match keywords with a phone call on top. What never gets captured: how someone actually operates, what they can prove they did, and what they truly need — the things that decide whether a hire works."
      builtHook="So we're building TrueSeat."
      builtBody="An AI interviewer that talks with you the way a great colleague would after six months of working together — then builds a sealed, evidence-backed dossier: what you can actually do, how you actually operate, what you actually need. Every claim carries a verification tier. You own every word, and nothing ships without your review."
      steps={[
        "Talk, don't type. The interview is a conversation.",
        "Every number gets read back and confirmed — or marked unverified.",
        "Your operating profile, written for your next manager.",
        "Constraints stay sealed until you say otherwise.",
      ]}
      ctaHook="The right person in the right seat, proven instead of pitched."
      ctaSub="Launching August 2026. Built in public."
      ctaLabel="See TrueSeat"
      ctaHref="https://trueseat.io"
      ctaExternal
    />
  );
}
