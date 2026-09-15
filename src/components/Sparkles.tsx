import { IconSparkle } from "./icons";

const positions = [
  { top: "10%", left: "6%", size: "h-4 w-4", delay: "0s", color: "text-gold" },
  { top: "20%", left: "90%", size: "h-3 w-3", delay: "0.6s", color: "text-rose" },
  { top: "70%", left: "4%", size: "h-3.5 w-3.5", delay: "1.2s", color: "text-gold-light" },
  { top: "82%", left: "92%", size: "h-4 w-4", delay: "1.8s", color: "text-rose-light" },
  { top: "45%", left: "50%", size: "h-2.5 w-2.5", delay: "0.9s", color: "text-gold" },
];

export default function Sparkles({ className }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute inset-0 -z-10 ${className ?? ""}`} aria-hidden="true">
      {positions.map((p, i) => (
        <span
          key={i}
          className="sparkle-dot absolute"
          style={{ top: p.top, left: p.left, animationDelay: p.delay }}
        >
          <IconSparkle className={`${p.size} ${p.color}`} />
        </span>
      ))}
    </div>
  );
}
