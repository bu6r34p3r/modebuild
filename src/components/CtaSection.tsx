import Link from "next/link";
import StepCard from "./StepCard";

const steps = [
  { number: 1, title: "Quick Conversation", description: "Tell me about your business and where things feel slow or manual" },
  { number: 2, title: "Spot the Opportunities", description: "I'll identify 2-3 places where AI can make an immediate impact" },
  { number: 3, title: "Get a Game Plan", description: "Walk away with a clear picture of what's possible and what it would take" },
];

export default function CtaSection() {
  return (
    <section className="grid md:grid-cols-2">
      <div className="p-10 md:p-16 md:border-r border-border">
        <span className="text-[0.65rem] uppercase tracking-widest font-semibold text-gold">Let&apos;s Talk</span>
        <h2 className="text-2xl md:text-3xl font-bold text-white mt-3 mb-3 tracking-tight leading-snug">Your business is leaving money on the table.</h2>
        <p className="text-sm text-text-subtle leading-relaxed mb-6">Every manual process, every spreadsheet someone has to update by hand, every question your team can&apos;t answer without digging through files. AI solves all of it. Let me show you how.</p>
        <Link href="/contact" className="inline-block bg-blue text-white px-6 py-3 rounded-lg font-semibold text-sm hover:bg-blue/90 transition-colors">Book a Free Call</Link>
      </div>
      <div className="p-10 md:p-16 flex flex-col justify-center">
        <h3 className="text-xs uppercase tracking-widest font-semibold text-text-faint mb-6">What to Expect</h3>
        <div className="space-y-5">
          {steps.map((step) => (
            <StepCard key={step.number} {...step} />
          ))}
        </div>
      </div>
    </section>
  );
}
