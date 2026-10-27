/* ============================================================================
   Per-essay media ids: read it, listen to it, watch it.

   Every essay ships as the written page, an AI in the WILD audio episode on
   Buzzsprout, and a video on the Kerzie AI YouTube channel. This is the one
   place those ids live. To light up the Watch label and block on an essay
   page, replace its `youtubeId: null` with the id from the YouTube URL
   (the part after `v=`). Same for Listen: replace `buzzsproutEpisodeId:
   null` with the episode id from the Buzzsprout URL. Nothing else changes.

   Rendered by src/components/EssayMedia.tsx.
   ========================================================================== */

export const AITW_PODCAST = {
  name: "AI in the WILD",
  buzzsproutId: "2121496",
  /* Verified 2026-10-11: both resolve to "AI in the WILD - Hosted by Wade
     Kerzie". */
  apple:
    "https://podcasts.apple.com/us/podcast/ai-in-the-wild-hosted-by-wade-kerzie/id1669058317",
  spotify: "https://open.spotify.com/show/7KDKge7ZtmkdIfxsby7wu1",
} as const;

export type EssayMedia = {
  /* The episode id from the Buzzsprout URL. null until the episode exists;
     while null the Listen label and block do not render, and while both ids
     are null the formats strip does not render at all. */
  buzzsproutEpisodeId: string | null;
  /* The YouTube video id. null until the video is uploaded; while null the
     Watch label and block do not render. */
  youtubeId: string | null;
};

export const ESSAY_MEDIA = {
  "kerzie-effect": { buzzsproutEpisodeId: "19937614", youtubeId: "uhP73PJcTAU" },
  "consequence-clock": { buzzsproutEpisodeId: "19937622", youtubeId: "M2v11EpyO9g" },
  "blast-door": { buzzsproutEpisodeId: "19937850", youtubeId: "mdLV2F0rJcc" },
  "blast-radius": { buzzsproutEpisodeId: "19937424", youtubeId: "ZwHjXFx0N9U" },
  shrapnel: { buzzsproutEpisodeId: "19938121", youtubeId: "2ggCf8j1sLM" },
  /* Publishes 2026-10-29. Fill both ids on release day. */
  crossfire: { buzzsproutEpisodeId: null, youtubeId: null },
} as const satisfies Record<string, EssayMedia>;

export type EssaySlug = keyof typeof ESSAY_MEDIA;
