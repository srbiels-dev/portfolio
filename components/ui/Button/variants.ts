import { tv } from "tailwind-variants";

export const button = tv({
  base: [
    "inline-flex items-center justify-center gap-2",
    "font-ui text-sm tracking-tight",
    "rounded-full px-6 py-2",
    "border border-transparent",
    "transition-colors duration-150 cursor-pointer",
    "disabled:pointer-events-none disabled:opacity-40",
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-500",
  ],
  variants: {
    variant: {
      primary: [
        "bg-(--color-interactive-primary-bg) text-(--color-interactive-primary-fg)",
        "hover:bg-(--color-interactive-primary-bg-hover)",
      ],
      secondary: [
        "bg-transparent text-(--color-interactive-secondary-fg)",
        "border-(--color-interactive-secondary-bd)",
        "hover:bg-(--color-interactive-secondary-bg-hover)",
      ],
      brand: [
        "bg-(--color-interactive-brand-bg) text-(--color-interactive-brand-fg)",
        "hover:bg-(--color-interactive-brand-bg-hover)",
      ],
      ghost: [
        "bg-transparent text-(--color-text-secondary)",
        "hover:bg-(--color-surface-raised) hover:text-(--color-text)",
      ],
    },
    size: {
      sm: "px-4 py-1.5 text-xs",
      md: "px-6 py-2  text-sm",
      lg: "px-8 py-3  text-base",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});
