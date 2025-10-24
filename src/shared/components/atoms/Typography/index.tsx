import { HTMLAttributes, PropsWithChildren, createElement } from "react";
import { twMerge } from "tailwind-merge";

export type TypographyProps = {
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div";
  color?:
    | "primary"
    | "secondary"
    | "accent"
    | "muted"
    | "charcoal"
    | "white"
    | "gray-600"
    | "neutral-high";
  fontWeight?: "light" | "normal" | "medium" | "semibold" | "bold" | "black";
  fontSize?: "xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl";
  fontFamily?: "sans" | "serif" | "mono";
  textAlign?: "left" | "center" | "right" | "justify";
  className?: string;
};

const Typography = (
  props: PropsWithChildren<HTMLAttributes<HTMLElement>> & TypographyProps
) => {
  const {
    variant = "p",
    color = "charcoal",
    fontWeight = "normal",
    fontSize = "base",
    fontFamily = "sans",
    textAlign = "left",
    className = "",
    children,
    ...rest
  } = props;
  console.log({ className });

  // Build Tailwind classes
  const colorClasses = {
    primary: "text-primary",
    secondary: "text-secondary",
    accent: "text-accent",
    muted: "text-muted",
    charcoal: "text-charcoal",
    white: "text-white",
    "gray-600": "text-gray-600",
    "neutral-high": "text-neutralHigh",
  };

  const fontWeightClasses = {
    light: "font-light",
    normal: "font-normal",
    medium: "font-medium",
    semibold: "font-semibold",
    bold: "font-bold",
    black: "font-black",
  };

  const fontSizeClasses = {
    xs: "text-xs",
    sm: "text-sm",
    base: "text-base",
    lg: "text-lg",
    xl: "text-xl",
    "2xl": "text-2xl",
    "3xl": "text-3xl",
    "4xl": "text-4xl",
    "5xl": "text-5xl",
  };

  const fontFamilyClasses = {
    sans: "font-sans",
    serif: "font-serif",
    mono: "font-mono",
  };

  const textAlignClasses = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
    justify: "text-justify",
  };

  // Combine all classes
  const combinedClassName = [
    colorClasses[color],
    fontWeightClasses[fontWeight],
    fontSizeClasses[fontSize],
    fontFamilyClasses[fontFamily],
    textAlignClasses[textAlign],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  // Create the appropriate HTML element
  return createElement(
    variant,
    {
      className: combinedClassName,
      ...rest,
    },
    children
  );
};

export default Typography;
