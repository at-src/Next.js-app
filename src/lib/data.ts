import { Service, Incident, HistoryPoint } from "./types";

const services: Service[] = [
  {
    slug: "api-gateway",
    name: "API Gateway",
    url: "https://api.example.com/health",
    status: "operational",
    interval: 30,
    uptime: 99.98,
    avgLatency: 42,
    p95Latency: 89,
    lastChecked: "2025-08-28T15:30:00Z",
  },
  {
    slug: "auth-service",
    name: "Auth Service",
    url: "https://auth.example.com/ping",
    status: "operational",
    interval: 30,
    uptime: 99.95,
    avgLatency: 38,
    p95Latency: 71,
    lastChecked: "2025-08-28T15:30:00Z",
  },
  {
    slug: "postgres-primary",
    name: "Postgres Primary",
    url: "tcp://db.internal:5432",
    status: "operational",
    interval: 15,
    uptime: 99.99,
    avgLatency: 4,
    p95Latency: 12,
    lastChecked: "2025-08-28T15:30:00Z",
  },
  {
    slug: "redis-cache",
    name: "Redis Cache",
    url: "tcp://redis.internal:6379",
    status: "degraded",
    interval: 15,
    uptime: 99.87,
    avgLatency: 2,
    p95Latency: 18,
    lastChecked: "2025-08-28T15:30:00Z",
  },
  {
    slug: "worker-queue",
    name: "Worker Queue",
    url: "https://workers.example.com/health",
    status: "operational",
    interval: 60,
    uptime: 99.91,
    avgLatency: 120,
    p95Latency: 340,
    lastChecked: "2025-08-28T15:30:00Z",
  },
  {
    slug: "cdn",
    name: "CDN",
    url: "https://cdn.example.com/probe",
    status: "operational",
    interval: 60,
    uptime: 100.0,
    avgLatency: 11,
    p95Latency: 28,
    lastChecked: "2025-08-28T15:30:00Z",
  },
];

const incidents: Incident[] = [
  {
    id: "inc-1",
    service: "redis-cache",
    title: "elevated latency on redis cluster",
    status: "investigating",
    createdAt: "2025-08-28T14:12:00Z",
    resolvedAt: null,
  },
  {
    id: "inc-2",
    service: "api-gateway",
    title: "brief 502 errors during deploy",
    status: "resolved",
    createdAt: "2025-08-26T09:41:00Z",
    resolvedAt: "2025-08-26T09:48:00Z",
  },
  {
    id: "inc-3",
    service: "worker-queue",
    title: "job processing backlog",
    status: "resolved",
    createdAt: "2025-08-22T16:05:00Z",
    resolvedAt: "2025-08-22T17:30:00Z",
  },
];

function generateHistory(base: number, jitter: number, count: number): HistoryPoint[] {
  const now = Date.now();
  return Array.from({ length: count }, (_, i) => ({
    ts: new Date(now - (count - i) * 300_000).toISOString(),
    latency: Math.round(base + (Math.random() - 0.5) * jitter),
    ok: Math.random() > 0.005,
  }));
}

export function getServices(): Service[] {
  return services;
}

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getIncidents(): Incident[] {
  return incidents;
}

export function getServiceHistory(slug: string): HistoryPoint[] {
  const svc = getService(slug);
  if (!svc) return [];
  return generateHistory(svc.avgLatency, svc.avgLatency * 0.8, 288);
}
