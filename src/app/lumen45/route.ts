// Moved 2026-10-14: the plan now lives on Wade's personal site.
// Permanent redirect so any link already shared still lands on the plan.
export async function GET() {
  return new Response(null, {
    status: 308,
    headers: { Location: "https://www.wadekerzie.com/lumen" },
  });
}
