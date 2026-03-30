import Link from "next/link";

const products = [
  "Brokerlytics - M&A analytics",
  "DemandDrop - Demand validation",
  "NameDropped - LLM visibility",
  "Reddit Miner - SaaS idea finder",
  "PetDose - Pet medication tracker",
  "2 enterprise AI chatbots deployed",
];

const services = [
  "AI strategy for your industry",
  "Custom automations and workflows",
  "Internal AI chatbots (SharePoint, docs, etc.)",
  "Team training and enablement",
  "CEO dashboards and reporting",
  "Business value optimization",
];

export default function SplitCards() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 tracking-tight">Two sides of the same coin.</h2>
          <p className="text-sm text-text-faint">I build my own AI products. I also help businesses build theirs.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-surface border border-border rounded-xl p-8 border-t-2 border-t-blue">
            <span className="text-[0.65rem] uppercase tracking-widest font-semibold text-blue">What I Build</span>
            <h3 className="text-xl font-bold text-white mt-3 mb-2">My Products</h3>
            <p className="text-sm text-text-subtle leading-relaxed mb-5">AI-powered tools I&apos;ve designed, built, and shipped. No dev team. No VC. Just me and AI.</p>
            <ul className="space-y-1.5">
              {products.map((item) => (
                <li key={item} className="text-sm text-text-muted pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[0.55rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-blue">{item}</li>
              ))}
            </ul>
            <Link href="/products" className="inline-block mt-5 text-sm font-semibold text-blue hover:text-blue/80 transition-colors">Explore Products &rarr;</Link>
          </div>
          <div className="bg-surface border border-border rounded-xl p-8 border-t-2 border-t-gold">
            <span className="text-[0.65rem] uppercase tracking-widest font-semibold text-gold">What I Build For You</span>
            <h3 className="text-xl font-bold text-white mt-3 mb-2">AI Consulting</h3>
            <p className="text-sm text-text-subtle leading-relaxed mb-5">I help business owners implement AI to cut costs, automate the busy work, and make their business worth more.</p>
            <ul className="space-y-1.5">
              {services.map((item) => (
                <li key={item} className="text-sm text-text-muted pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[0.55rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-gold">{item}</li>
              ))}
            </ul>
            <Link href="/contact" className="inline-block mt-5 text-sm font-semibold text-gold hover:text-gold/80 transition-colors">Book a Free Call &rarr;</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
