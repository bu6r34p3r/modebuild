import { Service } from "@/lib/services";

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="bg-surface border border-border rounded-xl p-6">
      <h3 className="text-base font-bold text-white mb-2">{service.title}</h3>
      <p className="text-sm text-text-subtle leading-relaxed">{service.description}</p>
    </div>
  );
}
