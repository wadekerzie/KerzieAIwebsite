import ProductStory from "@/components/ProductStory";

export const metadata = {
  title: "TrueNorth | Kerzie AI",
  description:
    "Everyone asking AI for life advice gets the same beige answer. TrueNorth interviews you about what you actually believe, then builds your personal board of history's wisest advisors — portable to whatever AI you already use.",
};

export default function TrueNorthPage() {
  return (
    <ProductStory
      clock="2 AM"
      hook="At 2 AM with a real decision on the table, everyone asks the same AI and gets the same answer."
      problemBody="Ask a chatbot whether to take the job, have the hard conversation, or make the move, and you get advice averaged from everyone and belonging to no one. It doesn't know what you believe about faith, family, money, or duty — so it can't tell you what the wisest version of you would do. Generic guidance for a specific life is no guidance at all."
      whyLabel="Why It Stays Broken"
      whyHook="AI knows everything except what you stand for."
      whyBody="The guidance apps ship one fixed personality for every user. The faith apps pick your tradition for you. Nobody starts where real counsel starts: with who you are and what you hold true. And every one of them wants to own the relationship — another subscription, another app, another place your inner life lives on someone else's server."
      builtHook="So we're building TrueNorth."
      builtBody="A twenty-minute interview about what you actually believe — then TrueNorth assembles your personal board of advisors from history's wisest voices, each seat matched to your principles and explained in your own words. You approve every seat, including the one or two you choose to challenge you. What you buy is yours to keep: your Principles Charter and your board, packaged to run in whatever AI you already use — ChatGPT, Claude, Grok, whatever comes next. One purchase. No app. No subscription."
      steps={[
        "The interview finds your principles and reads them back until you say that's me.",
        "Your board is proposed with reasons that quote your own words.",
        "Historical voices only, grounded in what they actually wrote and said.",
        "Your charter and board install in the AI you already use. It's yours.",
      ]}
      ctaHook="Counsel aligned to your compass, not the crowd's."
      ctaSub="In development. First cohort forming."
      ctaLabel="Join the waitlist"
      ctaHref="mailto:wade@kerzie.ai?subject=TrueNorth%20waitlist"
      ctaExternal
    />
  );
}
