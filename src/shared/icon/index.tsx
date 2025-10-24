"use client";
import React from "react";
import icons from "./icons.json";
import parse, { domToReact, attributesToProps } from "html-react-parser";

export type IconProps = {
  src: keyof typeof icons;
};
export type CombinedProps = React.SVGProps<SVGSVGElement> & IconProps;
const Icon = ({ src, ...props }: Omit<CombinedProps, "children">) => {
  const selectedIcon = icons[src as keyof typeof icons];
  if (!selectedIcon) return null;
  const reactElement = parse(selectedIcon.data, {
    replace: ({ attribs, name, children }: any) => {
      if (name === "svg") {
        const svgProps = attributesToProps(attribs);
        return (
          <svg {...svgProps} {...props}>
            {domToReact(children)}
          </svg>
        );
      }
    },
  });
  return reactElement as React.JSX.Element;
};

export default Icon;
