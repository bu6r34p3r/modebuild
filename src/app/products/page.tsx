import type { Metadata } from "next";
import Link from "next/link";
import { products } from "@/lib/products";
import ProductCard from "@/components/ProductCard";

export const metadata: Metadata = {
  title: "Products",
  description:
    "AI-powered products designed, built, and shipped from scratch. Brokerlytics, DemandDrop, NameDropped, Reddit Miner, PetDose, and enterprise AI chatbots.",
  openGraph: {
    title: "Products | Mode:Build",
    description:
      "AI-powered products designed, built, and shipped from scratch. No dev team. No VC. Just me and AI.",
  },
};

export default function ProductsPage() {
  return (
    <div className="py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-3">What I&apos;ve Built</h1>
          <p className="text-sm text-text-subtle max-w-md mx-auto">AI-powered products I&apos;ve designed, built, and shipped from scratch. No dev team. No VC. Just me and AI.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {products.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </div>
        <div className="text-center bg-surface border border-border rounded-xl p-10">
          <h2 className="text-xl font-bold text-white mb-2">Want something like this for your business?</h2>
          <p className="text-sm text-text-subtle mb-5">I build the same kind of tools for other businesses. Let&apos;s talk about what AI can do for yours.</p>
          <Link href="/contact" className="inline-block bg-blue text-white px-6 py-3 rounded-lg font-semibold text-sm hover:bg-blue/90 transition-colors">Book a Free Call</Link>
        </div>
      </div>
    </div>
  );
}
