import Icon, { IconName } from "@/shared/icon";
import React, { HTMLAttributes, PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

export type ButtonProps = {
  variant?: "primary" | "secondary" | "outline" | "discover";
  size?: "small" | "medium" | "large";
  rightIcon?: IconName;
};

const Button = (
  props: PropsWithChildren<HTMLAttributes<HTMLButtonElement>> & ButtonProps
) => {
  const {
    children,
    variant = "primary",
    size = "medium",
    className,
    rightIcon,
    ...rest
  } = props;

  const variantClasses = {
    primary: "bg-primary text-charcoal",
    secondary: "bg-secondary text-charcoal",
    outline:
      "bg-primary text-charcoal rounded-xl border-2 border-secondary hover:bg-muted transition-colors",
    discover:
      "bg-white text-secondary rounded-full px-8 py-4 flex items-center justify-between gap-4 hover:bg-yellow-50 transition-colors font-black text-xl",
  };

  const sizeClasses = {
    small: "px-4 py-1 text-xs",
    medium: "px-6 py-2 text-sm",
    large: "px-8 py-3 text-lg",
  };

  return (
    <button
      className={twMerge(
        "z-10",
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      {...rest}
    >
      {children}
      {rightIcon && <Icon src={rightIcon} />}
    </button>
  );
};

export default Button;
