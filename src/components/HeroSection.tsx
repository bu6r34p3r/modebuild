import Link from "next/link";

const stats = [
  { value: "7+", label: "Products Built" },
  { value: "2", label: "Enterprise Chatbots" },
  { value: "10+", label: "Years in M&A" },
];

export default function HeroSection() {
  return (
    <section className="py-20 px-6 text-center">
      <span className="inline-block text-xs text-gold bg-gold/10 border border-gold/20 px-3 py-1 rounded-full mb-5 tracking-wide">
        M&A Advisor + AI Builder
      </span>
      <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight tracking-tight mb-4">
        I help businesses <span className="text-gold">sell for more</span>.
        <br />
        Now I help them <span className="text-blue">build with AI</span>.
      </h1>
      <p className="text-lg text-text-subtle max-w-xl mx-auto mb-6 leading-relaxed">
        As an M&A advisor, I know what makes a business valuable. AI systems,
        automation, and efficiency aren&apos;t just buzzwords. They&apos;re what
        buyers pay a premium for.
      </p>
      <div className="flex gap-8 justify-center mb-8">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <div className="text-xl font-bold text-white">{stat.value}</div>
            <div className="text-xs text-text-faint">{stat.label}</div>
          </div>
        ))}
      </div>
      <div className="flex gap-3 justify-center">
        <Link href="/contact" className="bg-blue text-white px-6 py-3 rounded-lg font-semibold text-sm hover:bg-blue/90 transition-colors">
          Book a Free Call
        </Link>
        <Link href="/products" className="border border-border-light text-text-muted px-6 py-3 rounded-lg text-sm hover:border-text-faint transition-colors">
          See What I&apos;ve Built
        </Link>
      </div>
    </section>
  );
}
