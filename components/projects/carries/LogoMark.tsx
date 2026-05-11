type Props = {
  size?: number;
  className?: string;
};

/**
 * Simplified dachshund + cup line illustration used as the brand mark.
 * Mirrors the line-illustration language of the source logo.
 */
export function LogoMark({ size = 36, className = "" }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
    >
      <g
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* head */}
        <path d="M22 28 Q22 18 32 18 Q42 18 42 28 Q42 32 40 34" />
        {/* ear */}
        <path d="M24 24 Q20 30 22 36 Q24 40 26 36" />
        {/* snout */}
        <path d="M40 28 Q46 30 48 34" />
        {/* eye */}
        <circle cx="33" cy="26" r="1" fill="currentColor" stroke="none" />
        {/* cup */}
        <path d="M42 38 Q42 48 36 48 L30 48 Q24 48 24 40" />
        <path d="M42 42 Q46 42 46 45 Q46 48 42 48" />
        {/* steam */}
        <path d="M30 36 Q31 33 30 31" strokeWidth="1.4" />
        <path d="M34 36 Q35 33 34 31" strokeWidth="1.4" />
      </g>
    </svg>
  );
}

export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`font-hand text-[24px] leading-none tracking-tight ${className}`}>
      CARRIES
    </span>
  );
}
