import ProductStory from "@/components/ProductStory";

export const metadata = {
  title: "Ad2Action | Kerzie AI",
  description:
    "You paid for the ad and responded too late. Ad2Action starts a real conversation the moment someone converts.",
};

export default function Ad2ActionPage() {
  return (
    <ProductStory
      clock="+14 HRS"
      hook="You paid for the ad."
      problemBody="Someone clicked at 7pm on a Thursday. They filled out the form. Your autoresponder fired a confirmation email. You followed up Friday morning. They did not remember why they clicked. You bought their attention at peak interest and responded at zero interest."
      whyLabel="Why It Stays Broken"
      whyHook="Ad platforms optimize for the click. Nobody optimizes for what happens after."
      whyBody="That window is where leads die. Not because your product is wrong. Because your response was late. Eight minutes after someone clicks is worth more than eight hours of follow up the next day."
      builtHook="So we built Ad2Action."
      builtBody="Instant lead response the moment someone converts on your ad. Not an autoresponder. A real conversation that starts while they still remember clicking."
      steps={[
        "Lead converts on your ad.",
        "Ad2Action fires immediately.",
        "Qualifies the lead in real time.",
        "Books the appointment or routes to your team.",
        "By the time your competitor follows up manually, you already have the meeting.",
      ]}
      ctaHook="Stop losing leads you already paid for."
      ctaSub="Ad2Action deploys in days. Not months."
      ctaLabel="Talk to Us About Ad2Action"
      ctaHref="/schedule"
    />
  );
}
