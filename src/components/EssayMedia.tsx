import LiteYouTube from "@/components/LiteYouTube";
import { AITW_PODCAST, ESSAY_MEDIA, type EssaySlug } from "@/data/essay_media";

/* ============================================================================
   Read it, listen to it, watch it (Wade, 2026-10-09).

   Three pieces, all driven by src/data/essay_media.ts:
   - <EssayFormats>  the strip under the masthead. "Read it" is the page the
                     reader is on; "Listen" and "Watch" jump to the blocks.
   - <EssayListen>   the Buzzsprout player for the essay's episode, plus the
                     show's Apple Podcasts and Spotify links.
   - <EssayWatch>    the YouTube video, behind a click-to-load poster.

   While an essay's youtubeId is null, the Watch label and the Watch block
   both render nothing; the same for buzzsproutEpisodeId and Listen. While
   both are null (a page published ahead of its episode and video) the
   formats strip renders nothing too. Fill the ids in the data file and
   they appear.

   Styles: the `.p-formats`, `.p-media`, `.p-listen`, `.p-watch` blocks in
   globals.css, scoped to `.paper`.
   ========================================================================== */

export function EssayFormats({ slug }: { slug: EssaySlug }) {
  const media = ESSAY_MEDIA[slug];
  if (!media.buzzsproutEpisodeId && !media.youtubeId) return null;
  return (
    <nav className="p-formats p-noprint" aria-label="Formats">
      <span className="is-active" aria-current="page">
        Read it
      </span>
      {media.buzzsproutEpisodeId ? (
        <a href="#listen" className="k-focus">
          Listen
        </a>
      ) : null}
      {media.youtubeId ? (
        <a href="#watch" className="k-focus">
          Watch
        </a>
      ) : null}
    </nav>
  );
}

export function EssayListen({
  slug,
  title,
}: {
  slug: EssaySlug;
  /* The essay title, for the player's accessible name. */
  title: string;
}) {
  const media = ESSAY_MEDIA[slug];
  if (!media.buzzsproutEpisodeId) return null;
  /* Buzzsprout's official per-episode script (2121496/<id>.js?player=small)
     does nothing but write this iframe into the page, so the iframe is used
     directly: same player, no document.write, no render-blocking script. The
     small player is 200px tall at any width; the wrapper reserves that. */
  const src = `https://www.buzzsprout.com/${AITW_PODCAST.buzzsproutId}/episodes/${media.buzzsproutEpisodeId}?client_source=small_player&iframe=true`;

  return (
    <section id="listen" className="p-media p-noprint">
      <p className="p-media-label">Listen</p>
      <p className="p-media-body">
        This essay as an episode of {AITW_PODCAST.name}.
      </p>
      <div className="p-listen-frame">
        <iframe
          src={src}
          title={`${AITW_PODCAST.name}: ${title}`}
          loading="lazy"
          width="100%"
          height="200"
          scrolling="no"
        />
      </div>
      <p className="p-media-links">
        Also on{" "}
        <a href={AITW_PODCAST.apple} className="p-link" rel="noopener">
          Apple Podcasts
        </a>{" "}
        and{" "}
        <a href={AITW_PODCAST.spotify} className="p-link" rel="noopener">
          Spotify
        </a>
        .
      </p>
    </section>
  );
}

export function EssayWatch({
  slug,
  title,
}: {
  slug: EssaySlug;
  title: string;
}) {
  const media = ESSAY_MEDIA[slug];
  if (!media.youtubeId) return null;

  return (
    <section id="watch" className="p-media p-noprint">
      <p className="p-media-label">Watch</p>
      <p className="p-media-body">
        This essay as a video on the Kerzie AI channel.
      </p>
      <div className="p-watch-frame">
        <LiteYouTube id={media.youtubeId} title={title} />
      </div>
    </section>
  );
}
