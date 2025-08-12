import { Service } from "@/lib/types";
import { StatusBadge } from "./status-badge";
import Link from "next/link";

export function ServiceGrid({ services }: { services: Service[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {services.map((svc) => (
        <Link
          key={svc.slug}
          href={`/service/${svc.slug}`}
          className="bg-card border border-border rounded-lg p-4 hover:border-zinc-600 transition-colors"
        >
          <div className="flex items-center justify-between mb-3">
            <span className="font-medium text-sm">{svc.name}</span>
            <StatusBadge status={svc.status} />
          </div>
          <div className="flex items-baseline gap-4 text-xs text-zinc-500">
            <span>{svc.avgLatency}ms avg</span>
            <span>{svc.uptime}% uptime</span>
          </div>
        </Link>
      ))}
    </div>
  );
}
