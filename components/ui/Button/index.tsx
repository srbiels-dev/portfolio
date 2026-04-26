"use client";

import { type VariantProps } from "tailwind-variants";
import { forwardRef, type ButtonHTMLAttributes } from "react";
import { button } from "./variants";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof button> & {
    asChild?: boolean;
  };

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant, size, className, children, ...props }, ref) => (
    <button
      ref={ref}
      className={button({ variant, size, className })}
      {...props}
    >
      {children}
    </button>
  )
);

Button.displayName = "Button";

export { Button, button };
