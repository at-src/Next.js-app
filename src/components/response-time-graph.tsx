"use client";

import { HistoryPoint } from "@/lib/types";

export function ResponseTimeGraph({ history }: { history: HistoryPoint[] }) {
  const max = Math.max(...history.map((h) => h.latency));
  const height = 120;

  return (
    <div className="bg-card border border-border rounded-lg p-5">
      <h2 className="text-sm font-semibold mb-4">response time (24h)</h2>
      <div className="flex items-end gap-px" style={{ height }}>
        {history.slice(-96).map((point, i) => {
          const h = (point.latency / max) * height;
          const color = point.ok ? "bg-accent" : "bg-red-500";
          return (
            <div
              key={i}
              className={`flex-1 ${color} rounded-t-sm opacity-70 hover:opacity-100 transition-opacity`}
              style={{ height: h }}
              title={`${point.latency}ms — ${new Date(point.ts).toLocaleTimeString()}`}
            />
          );
        })}
      </div>
      <div className="flex justify-between text-xs text-zinc-600 mt-2">
        <span>24h ago</span>
        <span>now</span>
      </div>
    </div>
  );
}
