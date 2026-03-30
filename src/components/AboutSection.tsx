const stats = [
  { value: "10+", label: "Years in M&A" },
  { value: "7+", label: "Products Shipped" },
  { value: "2", label: "Enterprise Chatbots" },
  { value: "$0", label: "VC Raised" },
];

export default function AboutSection() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-4xl mx-auto grid md:grid-cols-[1fr_1.2fr] gap-12 items-start">
        <img
          src="/phillip.png"
          alt="Phillip Elliott"
          className="w-full aspect-[4/5] object-cover object-top rounded-xl"
        />
        <div>
          <span className="text-[0.65rem] uppercase tracking-widest font-semibold text-gold">The Builder</span>
          <h2 className="text-2xl md:text-3xl font-bold text-white mt-3 mb-4 tracking-tight leading-snug">
            M&A advisor by day.<br />AI builder by night.
          </h2>
          <p className="text-sm text-text-muted leading-relaxed mb-4">
            I spent over a decade helping business owners sell their companies. I saw firsthand what makes a business valuable: <strong className="text-text">systems, efficiency, and operations that don&apos;t depend on any one person.</strong>
          </p>
          <p className="text-sm text-text-muted leading-relaxed mb-4">
            Then AI happened. I picked up vibe coding, shipped my first product in a weekend, and haven&apos;t stopped since. I&apos;ve now built 7+ products and deployed AI chatbots for real companies.
          </p>
          <div className="bg-surface border-l-3 border-l-gold py-4 px-5 rounded-r-lg my-6">
            <p className="text-sm text-text italic leading-relaxed">
              &ldquo;The businesses with AI systems in place are worth more. Period. I know because I&apos;ve been on both sides of the table.&rdquo;
            </p>
          </div>
          <p className="text-sm text-text-muted leading-relaxed mb-6">
            Now I help other business owners do the same thing: use AI to run leaner, automate the grind, and build a business that&apos;s worth more whether you&apos;re selling next year or just want to keep more profit.
          </p>
          <div className="flex gap-8">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl font-extrabold text-white">{stat.value}</div>
                <div className="text-xs text-text-faint">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
