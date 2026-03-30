import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "M&A advisor turned AI builder. Over a decade helping business owners sell their companies, now building AI products and helping businesses implement AI.",
  openGraph: {
    title: "About Phillip Elliott | Mode:Build",
    description:
      "M&A advisor turned AI builder. The story behind Mode:Build.",
  },
};

const stats = [
  { value: "10+", label: "Years in M&A" },
  { value: "7+", label: "Products Shipped" },
  { value: "2", label: "Enterprise Chatbots" },
  { value: "$0", label: "VC Raised" },
];

export default function AboutPage() {
  return (
    <div className="py-16 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="grid md:grid-cols-[200px_1fr] gap-8 items-start mb-12">
          <img src="/phillip.png" alt="Phillip Elliott" className="w-full aspect-square object-cover object-top rounded-xl" />
          <div>
            <span className="text-[0.65rem] uppercase tracking-widest font-semibold text-gold">About</span>
            <h1 className="text-3xl font-extrabold text-white tracking-tight mt-2 mb-3">Phillip Elliott</h1>
            <p className="text-sm text-text-subtle leading-relaxed">M&A advisor. AI builder. Founder of Mode:Build. I help business owners sell their companies for a living, and I build AI products on the side. Now I&apos;m bringing those two worlds together.</p>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-4 mb-12">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-surface border border-border rounded-lg p-4 text-center">
              <div className="text-xl font-extrabold text-white">{stat.value}</div>
              <div className="text-xs text-text-faint">{stat.label}</div>
            </div>
          ))}
        </div>
        <div className="space-y-6 mb-12">
          <div>
            <h2 className="text-lg font-bold text-white mb-3">The M&A Background</h2>
            <p className="text-sm text-text-muted leading-relaxed">I&apos;ve spent over a decade as an M&A advisor, helping business owners navigate the process of selling their companies. Through hundreds of deals, I learned what buyers actually pay a premium for: documented systems, efficient operations, and businesses that don&apos;t fall apart when the owner steps away. The businesses with those things in place consistently sell for higher multiples. The ones without them leave money on the table.</p>
          </div>
          <div>
            <h2 className="text-lg font-bold text-white mb-3">The Builder Journey</h2>
            <p className="text-sm text-text-muted leading-relaxed">When AI tools started making it possible to build real software without a dev team, I dove in. I picked up vibe coding, shipped my first product in a weekend, and got hooked. Since then I&apos;ve built and launched 7+ products across SaaS, mobile, and enterprise AI. Every product I ship teaches me something I bring back to the businesses I advise.</p>
          </div>
          <div>
            <h2 className="text-lg font-bold text-white mb-3">Why Mode:Build</h2>
            <p className="text-sm text-text-muted leading-relaxed">Mode:Build exists because I saw a gap. I know what makes businesses valuable from the M&A side. I know how to build AI systems from the builder side. Most AI consultants can talk about technology but don&apos;t understand what actually moves the needle for a business owner. And most business advisors don&apos;t know how to build anything. I do both. That&apos;s the difference.</p>
          </div>
        </div>
        <div className="flex gap-6 mb-12">
          <a href="https://youtube.com/@modebuild" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-blue hover:text-blue/80 transition-colors">YouTube &rarr;</a>
          <a href="https://www.linkedin.com/in/soldbyphillip/" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-blue hover:text-blue/80 transition-colors">LinkedIn &rarr;</a>
          <a href="https://x.com/phi11ip_e11iott" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-blue hover:text-blue/80 transition-colors">Twitter &rarr;</a>
        </div>
        <div className="bg-surface border border-border rounded-xl p-8 text-center">
          <h2 className="text-xl font-bold text-white mb-2">Want to work together?</h2>
          <p className="text-sm text-text-subtle mb-5">Book a free call and let&apos;s talk about what AI can do for your business.</p>
          <Link href="/contact" className="inline-block bg-blue text-white px-6 py-3 rounded-lg font-semibold text-sm hover:bg-blue/90 transition-colors">Book a Free Call</Link>
        </div>
      </div>
    </div>
  );
}
