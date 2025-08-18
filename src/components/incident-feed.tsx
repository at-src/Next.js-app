import { Incident } from "@/lib/types";

const statusColor: Record<string, string> = {
  resolved: "text-emerald-400",
  investigating: "text-amber-400",
  monitoring: "text-blue-400",
};

export function IncidentFeed({ incidents }: { incidents: Incident[] }) {
  return (
    <div className="bg-card border border-border rounded-lg p-5">
      <h2 className="text-sm font-semibold mb-4">recent incidents</h2>
      {incidents.length === 0 && (
        <p className="text-xs text-zinc-500">no incidents</p>
      )}
      <ul className="space-y-4">
        {incidents.map((inc) => (
          <li key={inc.id} className="text-sm">
            <div className="flex items-center gap-2">
              <span className={`text-xs ${statusColor[inc.status]}`}>{inc.status}</span>
              <span className="text-zinc-500 text-xs">{inc.service}</span>
            </div>
            <p className="mt-0.5">{inc.title}</p>
            <p className="text-xs text-zinc-600 mt-0.5">
              {new Date(inc.createdAt).toLocaleDateString()}
              {inc.resolvedAt && ` — resolved ${new Date(inc.resolvedAt).toLocaleDateString()}`}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
