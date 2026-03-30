export default function StepCard({ number, title, description }: { number: number; title: string; description: string }) {
  return (
    <div className="flex gap-4 items-start">
      <div className="w-7 h-7 bg-surface-alt border border-border-light rounded-full flex items-center justify-center text-xs font-bold text-blue shrink-0">
        {number}
      </div>
      <div>
        <h4 className="text-sm font-semibold text-text">{title}</h4>
        <p className="text-xs text-text-faint">{description}</p>
      </div>
    </div>
  );
}
