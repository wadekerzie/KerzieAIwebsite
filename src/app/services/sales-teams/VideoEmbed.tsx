// A 16:9 responsive embed. Renders nothing when there is no URL, so the page
// carries the slot without showing an empty frame. See VIDEO_URL in page.tsx.

export default function VideoEmbed({ url, title }: { url: string; title: string }) {
  if (!url) return null;
  return (
    <div className="relative w-full aspect-video border border-[rgba(26,27,46,0.13)] bg-[#1A1B2E]">
      <iframe
        src={url}
        title={title}
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        referrerPolicy="strict-origin-when-cross-origin"
        className="absolute inset-0 w-full h-full"
      />
    </div>
  );
}
