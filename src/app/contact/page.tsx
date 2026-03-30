import type { Metadata } from "next";
import StepCard from "@/components/StepCard";

export const metadata: Metadata = {
  title: "Book a Call - Mode:Build",
  description: "Book a free 30-minute call. No pitch deck, no fluff. Just a conversation about where AI can help your business.",
};

const steps = [
  { number: 1, title: "Quick Conversation", description: "Tell me about your business and where things feel slow or manual" },
  { number: 2, title: "Spot the Opportunities", description: "I'll identify 2-3 places where AI can make an immediate impact" },
  { number: 3, title: "Get a Game Plan", description: "Walk away with a clear picture of what's possible and what it would take" },
];

export default function ContactPage() {
  return (
    <div className="py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-[1fr_1.5fr] gap-12">
          <div>
            <span className="text-[0.65rem] uppercase tracking-widest font-semibold text-gold">Let&apos;s Talk</span>
            <h1 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight mt-2 mb-3">Let&apos;s talk about your business.</h1>
            <p className="text-sm text-text-subtle leading-relaxed mb-8">Book a free 30-minute call. No pitch deck, no fluff. Just a conversation about where AI can help your business.</p>
            <h3 className="text-xs uppercase tracking-widest font-semibold text-text-faint mb-4">What to Expect</h3>
            <div className="space-y-4 mb-8">
              {steps.map((step) => (
                <StepCard key={step.number} {...step} />
              ))}
            </div>
            <div className="border-t border-border pt-6">
              <p className="text-xs text-text-faint">
                Prefer email?{" "}
                <a href="mailto:soldbyphillip@gmail.com" className="text-blue hover:text-blue/80 transition-colors">soldbyphillip@gmail.com</a>
              </p>
            </div>
          </div>
          <div className="bg-surface border border-border rounded-xl min-h-[500px] flex flex-col items-center justify-center p-10 text-center">
            <h2 className="text-xl font-bold text-white mb-3">Ready to chat?</h2>
            <p className="text-sm text-text-subtle mb-6 max-w-sm">
              Pick a time that works for you. 30 minutes, no commitment.
            </p>
            <a
              href="https://calendar.app.google/HruF3T4fSdvRfjin8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue text-white px-8 py-3 rounded-lg font-semibold text-sm hover:bg-blue/90 transition-colors"
            >
              Book a Time
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
