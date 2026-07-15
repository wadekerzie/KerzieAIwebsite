import ProductStory from "@/components/ProductStory";
import GotaGuyThread from "@/components/GotaGuyThread";

export const metadata = {
  title: "GotaGuy | Kerzie AI",
  description:
    "Finding a contractor is a part-time job. GotaGuy fixes that: you text, we scope it, a contractor shows up.",
};

export default function GotaGuyPage() {
  return (
    <ProductStory
      clock="DAY 3"
      hook="Finding a contractor is a part-time job."
      image="/evidence/gotaguy.jpg"
      imageAlt="A kitchen faucet dripping in a dark kitchen at night"
      problemBody="You post on Nextdoor. You call three numbers. One voicemail. One quote that feels made up. One guy who never shows. The repair takes an hour. Finding someone takes a week."
      whyLabel="Why It Stays Broken"
      whyHook="The existing platforms make money whether your job gets done or not."
      whyBody="Angi, Thumbtack, HomeAdvisor charge contractors for leads. Whether the job gets done or not. They built a bidding war because bidding wars generate revenue. The homeowner experience being slow and frustrating is not a bug. It is the business model."
      builtHook="So we built GotaGuy."
      builtBody="You text. We scope it. A contractor shows up. You pay when it is done. No app. No account. No forms. No bidding. The whole thing happens in your text messages."
      demo={<GotaGuyThread />}
      demoLabel="Watch It Happen"
      steps={[
        "Quote in 90 seconds.",
        "Confirm.",
        "Schedule on your timeframe.",
        "Contractor shows up when you said.",
        "Work gets done. Pay on your phone.",
      ]}
      ctaHook="See GotaGuy in action."
      ctaSub="Live in McKinney/Dallas TX and Aurora/Denver CO. More markets coming."
      ctaLabel="Visit GotaGuy"
      ctaHref="https://gotaguy.chat"
      ctaExternal
    />
  );
}
