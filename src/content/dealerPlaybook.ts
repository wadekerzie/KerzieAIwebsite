// THE DEALER PLAYBOOK EPISODE: one place for everything the campaign touches.
//
// Wade was a guest on The Dealer Playbook (host Michael Cirillo). On air he
// told dealers "Kerzie dot AI. That's me. My calendar's there, my email's
// there." They will type kerzie.ai and land on the HOME page, so the home
// page carries a banner that hands them to /dealerplaybook, and that page
// carries one form. Both read from this file.
//
// TO REMOVE THE HOME BANNER LATER: set SHOW_HOME_BANNER to false. Nothing
// else on the home page changes. The /dealerplaybook page stays live.
export const SHOW_HOME_BANNER = true;

export const DEALER_PLAYBOOK_PATH = "/dealerplaybook";

// The tag every lead from this page carries, in the email subject, body and
// Resend tags, so Wade can see where it came from at a glance.
export const DEALER_PLAYBOOK_SOURCE = "dealer-playbook";

export const EPISODE = {
  title: "AI Can't Find You: Why AI Is Skipping Your Dealership Website",
  show: "The Dealer Playbook",
  host: "Michael Cirillo",
  // The show's promo still, 16:9 (800x450, the largest size LinkedIn serves).
  // ONE file path on purpose: when their production team sends a higher-res
  // version, overwrite this file and nothing else changes.
  image: "/dealer-playbook/dealer-playbook-episode.jpg",
  imageWidth: 800,
  imageHeight: 450,
  imageAlt:
    "Wade Kerzie and Michael Cirillo on The Dealer Playbook: AI can't read your inventory",
  imageCredit: "Image: The Dealer Playbook",
} as const;

// EPISODE LINKS, all four in one place. The page HIDES any link whose href is
// blank. Aired Tue 10/6 (LinkedIn Live 7:30 AM CT); replays filled the same
// morning from the show's own YouTube, Spotify and Apple listings.
export const EPISODE_LINKS: { label: string; href: string }[] = [
  {
    label: "The Dealer Playbook",
    href: "https://thedealerplaybook.com/episodes/why-ai-is-skipping-your-dealership-website-wade-kerzie",
  },
  { label: "YouTube", href: "https://www.youtube.com/watch?v=j4hQTp-sW64" },
  { label: "Spotify", href: "https://open.spotify.com/episode/6DK0nA3R3qBfebu8XLNaHV" },
  {
    label: "Apple Podcasts",
    href: "https://podcasts.apple.com/us/podcast/ai-cant-find-you-why-ai-is-skipping-your-dealership/id857094979?i=1000793421077",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/feed/update/urn:li:activity:7511924342813851648/",
  },
];

// Home banner copy.
export const BANNER_COPY = {
  headline: "Heard Wade on The Dealer Playbook?",
  action: "Start here",
} as const;

// The form promise, said once here so the form, the thank-you and the email
// to Wade all repeat the same words.
export const CHECK_PROMISE =
  "We run the same check from the episode and email you what ChatGPT and Google's AI can and cannot read on your site, within one business day.";

export const CHECK_HEADLINE = "Free AI visibility check for your store";
