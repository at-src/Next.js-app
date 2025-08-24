import { getService, getServiceHistory } from "@/lib/data";
import { StatusBadge } from "@/components/status-badge";
import { ResponseTimeGraph } from "@/components/response-time-graph";
import Link from "next/link";
import { notFound } from "next/navigation";

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = getService(params.slug);
  if (!service) notFound();

  const history = getServiceHistory(params.slug);

  return (
    <main className="max-w-4xl mx-auto px-6 py-10">
      <Link href="/" className="text-sm text-zinc-500 hover:text-zinc-300 mb-6 block">
        &larr; back
      </Link>
      <div className="flex items-center gap-3 mb-6">
        <h1 className="text-2xl font-semibold">{service.name}</h1>
        <StatusBadge status={service.status} />
      </div>
      <p className="text-zinc-400 text-sm mb-2">
        {service.url} &middot; checked every {service.interval}s
      </p>
      <div className="grid grid-cols-3 gap-4 mt-6 mb-8">
        <Stat label="uptime" value={`${service.uptime}%`} />
        <Stat label="avg latency" value={`${service.avgLatency}ms`} />
        <Stat label="p95 latency" value={`${service.p95Latency}ms`} />
      </div>
      <ResponseTimeGraph history={history} />
    </main>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-card border border-border rounded-lg p-4">
      <p className="text-xs text-zinc-500 uppercase tracking-wide">{label}</p>
      <p className="text-xl font-mono mt-1">{value}</p>
    </div>
  );
}
