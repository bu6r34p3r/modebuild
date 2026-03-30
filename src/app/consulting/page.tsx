import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/lib/services";
import ServiceCard from "@/components/ServiceCard";
import StepCard from "@/components/StepCard";

export const metadata: Metadata = {
  title: "AI Consulting",
  description:
    "AI consulting for business owners. Strategy, automations, chatbots, dashboards, team training, and systems that make your business worth more.",
  openGraph: {
    title: "AI Consulting | Mode:Build",
    description:
      "AI consulting for business owners. I help you implement AI to cut costs, automate the busy work, and increase your business value.",
  },
};

const steps = [
  { number: 1, title: "Book a free call", description: "We talk about your business, your pain points, and where things feel slow or manual." },
  { number: 2, title: "I identify opportunities", description: "I'll pinpoint 2-3 places where AI can make an immediate, measurable impact." },
  { number: 3, title: "We build it together", description: "Implementation at your pace. I build the systems and train your team to use them." },
];

export default function ConsultingPage() {
  return (
    <div className="py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block text-xs text-gold bg-gold/10 border border-gold/20 px-3 py-1 rounded-full mb-5 tracking-wide">AI Consulting</span>
          <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-3">AI consulting for business owners.</h1>
          <p className="text-sm text-text-subtle max-w-lg mx-auto leading-relaxed">
            I know what makes a business valuable because I&apos;ve spent my career helping owners sell them. AI systems, automation, and efficiency are what buyers pay a premium for. Even if you&apos;re not selling, the same systems that increase value also increase profit.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
        <div className="mb-16">
          <h2 className="text-xl font-bold text-white text-center mb-8">How it works</h2>
          <div className="max-w-md mx-auto space-y-6">
            {steps.map((step) => (
              <StepCard key={step.number} {...step} />
            ))}
          </div>
        </div>
        <div className="grid md:grid-cols-2 bg-surface border border-border rounded-xl overflow-hidden">
          <div className="p-10">
            <span className="text-[0.65rem] uppercase tracking-widest font-semibold text-gold">Let&apos;s Talk</span>
            <h2 className="text-xl font-bold text-white mt-3 mb-3">Your business is leaving money on the table.</h2>
            <p className="text-sm text-text-subtle leading-relaxed mb-5">Every manual process, every spreadsheet someone has to update by hand, every question your team can&apos;t answer without digging through files. AI solves all of it.</p>
            <Link href="/contact" className="inline-block bg-blue text-white px-6 py-3 rounded-lg font-semibold text-sm hover:bg-blue/90 transition-colors">Book a Free Call</Link>
          </div>
          <div className="p-10 flex flex-col justify-center border-t md:border-t-0 md:border-l border-border">
            <h3 className="text-xs uppercase tracking-widest font-semibold text-text-faint mb-5">What to Expect</h3>
            <div className="space-y-4">
              <StepCard number={1} title="Quick Conversation" description="Tell me about your business and where things feel slow" />
              <StepCard number={2} title="Spot the Opportunities" description="I'll identify 2-3 places where AI makes an immediate impact" />
              <StepCard number={3} title="Get a Game Plan" description="Walk away with a clear picture of what's possible" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
