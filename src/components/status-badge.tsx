import { ServiceStatus } from "@/lib/types";

const map: Record<ServiceStatus, { bg: string; text: string; label: string }> = {
  operational: { bg: "bg-emerald-500/10", text: "text-emerald-400", label: "operational" },
  degraded: { bg: "bg-amber-500/10", text: "text-amber-400", label: "degraded" },
  down: { bg: "bg-red-500/10", text: "text-red-400", label: "down" },
};

export function StatusBadge({ status }: { status: ServiceStatus }) {
  const s = map[status];
  return (
    <span className={`text-xs px-2 py-0.5 rounded-full ${s.bg} ${s.text}`}>
      {s.label}
    </span>
  );
}
