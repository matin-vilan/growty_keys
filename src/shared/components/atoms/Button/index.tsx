import React, { HTMLAttributes, PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

export type ButtonProps = {
  variant?: "primary" | "secondary" | "outline";
  size?: "small" | "medium" | "large";
};

const Button = (
  props: PropsWithChildren<HTMLAttributes<HTMLButtonElement>> & ButtonProps
) => {
  const {
    children,
    variant = "primary",
    size = "medium",
    className,
    ...rest
  } = props;

  const variantClasses = {
    primary: "bg-primary text-charcoal",
    secondary: "bg-secondary text-charcoal",
    outline:
      "bg-primary text-charcoal rounded-xl border-2 border-secondary hover:bg-muted transition-colors",
  };

  const sizeClasses = {
    small: "px-4 py-1 text-xs",
    medium: "px-6 py-2 text-sm",
    large: "px-8 py-3 text-lg",
  };

  return (
    <button
      className={twMerge(variantClasses[variant], sizeClasses[size], className)}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
