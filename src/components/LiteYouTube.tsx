"use client";

import { useState } from "react";

/* A click-to-load YouTube facade. Until the reader presses play the page
   carries only a poster image and a button, no YouTube script, no third-party
   iframe. On play it swaps in the youtube-nocookie embed with autoplay. The
   wrapper reserves 16:9 so nothing shifts. */

export default function LiteYouTube({
  id,
  title,
}: {
  id: string;
  title: string;
}) {
  const [playing, setPlaying] = useState(false);

  if (playing) {
    return (
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        referrerPolicy="strict-origin-when-cross-origin"
        className="p-watch-iframe"
      />
    );
  }

  return (
    <button
      type="button"
      className="p-watch-facade k-focus"
      onClick={() => setPlaying(true)}
      aria-label={`Play video: ${title}`}
    >
      {/* Plain img on purpose: next/image would need a remotePatterns entry for
          i.ytimg.com and the poster is already a fixed 480x360 jpg. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`}
        alt=""
        width={480}
        height={360}
        loading="lazy"
        decoding="async"
      />
      <span className="p-watch-play" aria-hidden="true">
        <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
          <path d="M8 5v14l11-7z" />
        </svg>
      </span>
    </button>
  );
}
