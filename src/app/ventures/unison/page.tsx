import ProductStory from "@/components/ProductStory";

export const metadata = {
  title: "Unison | Kerzie AI",
  description:
    "Someone calls your business after hours and you never knew they called. Unison answers immediately across every channel.",
};

export default function UnisonPage() {
  return (
    <ProductStory
      clock="7:05 PM"
      hook="Someone calls your business after hours."
      problemBody="They get voicemail. They needed an answer tonight. They will call someone else in the morning. You never knew they called."
      whyLabel="Why It Stays Broken"
      whyHook="Most businesses respond when it is convenient for them."
      whyBody="The lead does not wait. The window between someone reaching out and someone else answering them is measured in minutes not hours. Every hour you wait cuts your odds of closing that lead in half."
      builtHook="So we built Unison."
      builtBody="Omnichannel lead response that answers immediately across every channel. Phone, text, web form, email. The lead gets a real response in seconds. You get the conversation in your inbox."
      steps={[
        "Lead comes in on any channel.",
        "Unison responds immediately.",
        "Qualifies and routes to you.",
        "You pick up a warm conversation. Not a cold inquiry.",
      ]}
      ctaHook="Ready to stop losing leads?"
      ctaSub="Unison deploys in days. Not months."
      ctaLabel="Talk to Us About Unison"
      ctaHref="/schedule"
    />
  );
}
