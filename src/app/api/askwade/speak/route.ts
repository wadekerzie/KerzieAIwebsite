// Reads an askwade answer aloud in Wade's own voice: his professional voice
// clone on ElevenLabs. The client sends the answer text it already has; this
// route streams the audio back. Nothing here touches the record or the model
// that answers, it only voices what the record already said.
//
// Env (Vercel, production + preview): ELEVENLABS_API_KEY, ELEVENLABS_VOICE_ID,
// optional ELEVENLABS_MODEL_ID (default eleven_multilingual_v2).

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const MAX_CHARS = 2400; // a situation take runs about 1,800 characters; a quick answer under 1,000
const PER_MINUTE = 8;

const hits = new Map<string, { n: number; t: number }>();
function limited(ip: string): boolean {
  const now = Date.now();
  const h = hits.get(ip);
  if (!h || now - h.t > 60_000) {
    hits.set(ip, { n: 1, t: now });
    return false;
  }
  h.n += 1;
  return h.n > PER_MINUTE;
}

function configured() {
  return Boolean(process.env.ELEVENLABS_API_KEY && process.env.ELEVENLABS_VOICE_ID);
}

// Make the text read well aloud: drop citation markers and bare URLs, and space
// the phone number so it is read as digits rather than as a number.
function forSpeech(text: string): string {
  return text
    .replace(/\[\d+\]/g, "")
    .replace(/https?:\/\/\S+/g, "")
    .replace(/(\d{3})-(\d{3})-(\d{4})/g, "$1, $2, $3")
    .replace(/[ \t]+/g, " ")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

export async function GET() {
  return Response.json({ enabled: configured() });
}

export async function POST(req: Request) {
  if (!configured()) return Response.json({ error: "Wade's voice is not set up on this deployment." }, { status: 503 });

  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "anon";
  if (limited(ip)) return Response.json({ error: "Slow down a little. Eight readings a minute is the limit." }, { status: 429 });

  let body: { text?: string };
  try {
    body = await req.json();
  } catch {
    return Response.json({ error: "Bad request." }, { status: 400 });
  }
  const text = forSpeech((body.text ?? "").toString()).slice(0, MAX_CHARS);
  if (text.length < 3) return Response.json({ error: "Nothing to read." }, { status: 400 });

  const voice = process.env.ELEVENLABS_VOICE_ID!;
  const model = process.env.ELEVENLABS_MODEL_ID || "eleven_multilingual_v2";
  try {
    const upstream = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${encodeURIComponent(voice)}/stream?output_format=mp3_44100_128`, {
      method: "POST",
      headers: {
        "xi-api-key": process.env.ELEVENLABS_API_KEY!,
        "Content-Type": "application/json",
        Accept: "audio/mpeg",
      },
      body: JSON.stringify({ text, model_id: model }),
    });
    if (!upstream.ok || !upstream.body) {
      const detail = await upstream.text().catch(() => "");
      console.error("askwade speak", upstream.status, detail.slice(0, 300));
      return Response.json({ error: "Wade's voice could not be reached just now." }, { status: 502 });
    }
    return new Response(upstream.body, {
      status: 200,
      headers: { "Content-Type": "audio/mpeg", "Cache-Control": "no-store" },
    });
  } catch (err) {
    console.error("askwade speak", err);
    return Response.json({ error: "Wade's voice could not be reached just now." }, { status: 502 });
  }
}
