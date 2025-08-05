export type ServiceStatus = "operational" | "degraded" | "down";

export interface Service {
  slug: string;
  name: string;
  url: string;
  status: ServiceStatus;
  interval: number;
  uptime: number;
  avgLatency: number;
  p95Latency: number;
  lastChecked: string;
}

export interface Incident {
  id: string;
  service: string;
  title: string;
  status: "resolved" | "investigating" | "monitoring";
  createdAt: string;
  resolvedAt: string | null;
}

export interface HistoryPoint {
  ts: string;
  latency: number;
  ok: boolean;
}
