import ProductStory from "@/components/ProductStory";

export const metadata = {
  title: "Zorli | Kerzie AI",
  description:
    "Information does not disappear. It scatters. Zorli is one place for the information you actually need to find again.",
};

export default function ZorliPage() {
  return (
    <ProductStory
      clock="8 MIN"
      hook="Your teenager calls while you are watching a movie."
      image="/evidence/zorli.jpg"
      imageAlt="A living room at night with a movie paused on the television"
      problemBody="They need the Netflix password. You know you saved it somewhere. Notes app, maybe. Or was it that email from three years ago. You pause the movie. You search. You try four things. You find it eight minutes later in a note called Misc. The movie is still paused. This happens every week."
      whyLabel="Why It Stays Broken"
      whyHook="Information does not disappear. It scatters."
      whyBody="Across apps, notes, texts, emails, browser bookmarks. The problem is not memory. It is retrieval. You have the answer. Finding it costs you more time than the answer is worth."
      builtHook="So we built Zorli."
      builtBody="One place for the information you actually need to find again. Not another note app. A retrieval system. You put it in once. You get it back instantly."
      steps={[
        "Save it once.",
        "Search in plain language.",
        "Get it back in seconds.",
        "No folders. No tags. No organizing system to maintain.",
      ]}
      ctaHook="Stop hunting for things you already know."
      ctaSub="Zorli is on the App Store. Free to try."
      ctaLabel="Download Zorli"
      ctaHref="https://apps.apple.com/us/app/zorli-ai-vault/id6757083833"
      ctaExternal
    />
  );
}
