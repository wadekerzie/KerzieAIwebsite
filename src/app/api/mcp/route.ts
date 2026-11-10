// Kerzie AI open-times MCP server (read-only). Wade 11/10, tracker K133.
//
// A tiny stateless MCP server over Streamable HTTP (JSON responses, no
// sessions). One tool: get_open_times. It reads Kerzie AI's open meeting
// times from GoHighLevel's public booking endpoint, the same one the
// booking widget on /schedule uses. NO token, NO secrets, NO writes: a
// person finishes the booking at the link the tool returns.
//
// Discovered through /.well-known/ard.json -> /.well-known/mcp/server-card.json.

import { NextRequest, NextResponse } from "next/server";

const CALENDAR_ID = "WUgRL3oHU40oA05SIaVT";
const TIMEZONE = "America/Chicago";
const BOOKING_URL = "https://kerzie.ai/schedule";
const SUPPORTED_VERSIONS = ["2025-11-25", "2025-06-18", "2025-03-26"];
const SERVER_INFO = { name: "kerzie-ai-open-times", title: "Kerzie AI open meeting times", version: "1.0.0" };

const CORS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Accept, Mcp-Protocol-Version, Mcp-Session-Id",
};

const TOOL = {
  name: "get_open_times",
  title: "Get Kerzie AI's open meeting times",
  description:
    "Returns open times to meet with Kerzie AI (Wade Kerzie) over the next few days, in US Central time, " +
    "plus the booking link where a person picks a time and books it. Read-only: this tool does not book.",
  inputSchema: {
    type: "object",
    properties: {
      days: { type: "integer", minimum: 1, maximum: 14, description: "How many days ahead to look (1 to 14). Default 7." },
    },
    additionalProperties: false,
  },
  annotations: { readOnlyHint: true, openWorldHint: false },
};

type RpcId = string | number | null;
type Rpc = { jsonrpc?: string; id?: RpcId; method?: string; params?: Record<string, unknown> };

function ok(id: RpcId, result: unknown) {
  return { jsonrpc: "2.0", id, result };
}
function fail(id: RpcId, code: number, message: string) {
  return { jsonrpc: "2.0", id, error: { code, message } };
}

async function openTimes(daysArg: unknown) {
  const n = Number.isInteger(daysArg) ? (daysArg as number) : 7;
  const days = Math.min(14, Math.max(1, n));
  const start = Date.now();
  const end = start + days * 86_400_000;
  const url =
    `https://backend.leadconnectorhq.com/calendars/${CALENDAR_ID}/free-slots` +
    `?startDate=${start}&endDate=${end}&timezone=${encodeURIComponent(TIMEZONE)}`;
  const res = await fetch(url, { next: { revalidate: 300 } });
  if (!res.ok) throw new Error(`calendar returned HTTP ${res.status}`);
  const raw = (await res.json()) as Record<string, { slots?: string[] }>;
  const byDate: Record<string, string[]> = {};
  for (const [date, v] of Object.entries(raw)) {
    if (/^\d{4}-\d{2}-\d{2}$/.test(date) && Array.isArray(v?.slots) && v.slots.length) byDate[date] = v.slots;
  }
  return { timezone: TIMEZONE, days_checked: days, open_times: byDate, booking_url: BOOKING_URL };
}

async function handle(msg: Rpc) {
  const id = msg.id ?? null;
  const isNotification = msg.id === undefined;
  switch (msg.method) {
    case "initialize": {
      const asked = typeof msg.params?.protocolVersion === "string" ? (msg.params.protocolVersion as string) : "";
      return ok(id, {
        protocolVersion: SUPPORTED_VERSIONS.includes(asked) ? asked : SUPPORTED_VERSIONS[0],
        capabilities: { tools: { listChanged: false } },
        serverInfo: SERVER_INFO,
        instructions:
          "Read-only. Call get_open_times to see when Kerzie AI is free to meet; send the person to booking_url to book.",
      });
    }
    case "ping":
      return ok(id, {});
    case "tools/list":
      return ok(id, { tools: [TOOL] });
    case "tools/call": {
      if (msg.params?.name !== TOOL.name) return fail(id, -32602, `Unknown tool: ${String(msg.params?.name)}`);
      try {
        const args = (msg.params?.arguments ?? {}) as Record<string, unknown>;
        const data = await openTimes(args.days);
        const count = Object.values(data.open_times).reduce((a, s) => a + s.length, 0);
        const text =
          count === 0
            ? `No open times in the next ${data.days_checked} days. Book or ask at ${BOOKING_URL}.`
            : `${count} open times in the next ${data.days_checked} days (US Central). Book at ${BOOKING_URL}.`;
        return ok(id, { content: [{ type: "text", text }], structuredContent: data, isError: false });
      } catch (e) {
        return ok(id, {
          content: [{ type: "text", text: `Could not read open times right now (${(e as Error).message}). Book at ${BOOKING_URL}.` }],
          isError: true,
        });
      }
    }
    default:
      if (isNotification) return null; // notifications/initialized and friends: no reply
      return fail(id, -32601, `Method not found: ${String(msg.method)}`);
  }
}

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => undefined);
  if (body === undefined) return NextResponse.json(fail(null, -32700, "Parse error"), { status: 400, headers: CORS });
  const batch = Array.isArray(body);
  const msgs: Rpc[] = batch ? body : [body];
  const replies = (await Promise.all(msgs.map(handle))).filter((r) => r !== null);
  if (replies.length === 0) return new NextResponse(null, { status: 202, headers: CORS });
  return NextResponse.json(batch ? replies : replies[0], { headers: CORS });
}

// No server-to-client stream on this server.
export async function GET() {
  return new NextResponse("Kerzie AI open-times MCP server. POST JSON-RPC here. Read-only.", {
    status: 405,
    headers: { ...CORS, Allow: "POST, OPTIONS" },
  });
}

export async function OPTIONS() {
  return new NextResponse(null, { status: 204, headers: CORS });
}
