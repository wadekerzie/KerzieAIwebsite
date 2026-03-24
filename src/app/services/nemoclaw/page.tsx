import { redirect } from "next/navigation";

export const metadata = {
  title: "NemoClaw Command Center | Kerzie AI",
  description:
    "NVIDIA's AI agent platform installed on your infrastructure in 1 week. AI employees, not chatbots. $22,500 flat fee.",
};

export default function NemoClawService() {
  redirect("/nemoclaw");
}
