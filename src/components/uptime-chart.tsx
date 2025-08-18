import { Service } from "@/lib/types";

export function UptimeChart({ services }: { services: Service[] }) {
  const maxUptime = 100;

  return (
    <div className="bg-card border border-border rounded-lg p-5">
      <h2 className="text-sm font-semibold mb-4">uptime overview</h2>
      <div className="space-y-3">
        {services.map((svc) => {
          const pct = (svc.uptime / maxUptime) * 100;
          const color =
            svc.uptime >= 99.95 ? "bg-emerald-500" : svc.uptime >= 99.5 ? "bg-amber-500" : "bg-red-500";
          return (
            <div key={svc.slug}>
              <div className="flex justify-between text-xs mb-1">
                <span>{svc.name}</span>
                <span className="text-zinc-500">{svc.uptime}%</span>
              </div>
              <div className="h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                <div className={`h-full ${color} rounded-full`} style={{ width: `${pct}%` }} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
