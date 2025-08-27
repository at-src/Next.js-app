import { ServiceGrid } from "@/components/service-grid";
import { IncidentFeed } from "@/components/incident-feed";
import { UptimeChart } from "@/components/uptime-chart";
import { getServices, getIncidents } from "@/lib/data";

export default function Home() {
  const services = getServices();
  const incidents = getIncidents();

  return (
    <main className="max-w-6xl mx-auto px-6 py-10">
      <h1 className="text-2xl font-semibold mb-8">statusboard</h1>
      <ServiceGrid services={services} />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
        <UptimeChart services={services} />
        <IncidentFeed incidents={incidents} />
      </div>
    </main>
  );
}
