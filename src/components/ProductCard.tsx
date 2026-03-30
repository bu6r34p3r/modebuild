import { Product } from "@/lib/products";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="bg-surface border border-border rounded-xl p-8">
      <div className="flex items-center gap-3 mb-3">
        <h3 className="text-lg font-bold text-white">{product.name}</h3>
        {product.type === "live" && (
          <span className="text-[0.6rem] uppercase tracking-widest font-semibold text-blue bg-blue/10 border border-blue/20 px-2 py-0.5 rounded-full">Live</span>
        )}
        {product.type === "deployed" && (
          <span className="text-[0.6rem] uppercase tracking-widest font-semibold text-gold bg-gold/10 border border-gold/20 px-2 py-0.5 rounded-full">Deployed</span>
        )}
        {product.type === "app" && (
          <span className="text-[0.6rem] uppercase tracking-widest font-semibold text-text-faint bg-surface-alt border border-border px-2 py-0.5 rounded-full">iOS App</span>
        )}
      </div>
      <p className="text-sm font-medium text-text-muted mb-2">{product.tagline}</p>
      <p className="text-sm text-text-subtle leading-relaxed mb-4">{product.description}</p>
      {product.url && (
        <a href={product.url} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-blue hover:text-blue/80 transition-colors">
          Visit Site &rarr;
        </a>
      )}
    </div>
  );
}
