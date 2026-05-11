import type { CSSProperties } from "react";

type Props = {
  aspect?: string;
  label?: string;
  className?: string;
  style?: CSSProperties;
};

/**
 * Placeholder that renders an on-brand block where a real photo will live.
 * Once the user drops a real image in /public/projetos/carries/, swap to <Image>.
 */
export function PhotoSlot({ aspect = "4 / 5", label = "Carrie", className = "", style }: Props) {
  return (
    <div
      className={`relative w-full overflow-hidden rounded-[var(--radius-xl)] bg-[var(--carries-linen-deep)] flex items-center justify-center ${className}`}
      style={{ aspectRatio: aspect, ...style }}
      role="img"
      aria-label={`Placeholder for ${label} photo`}
    >
      <span
        className="font-hand text-[var(--carries-ash-brown)] opacity-50 text-[clamp(20px,_3vw,_28px)]"
      >
        {label}
      </span>
      <span
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, rgba(112,89,75,0.06), transparent 60%)",
        }}
      />
    </div>
  );
}
