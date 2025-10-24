import React, { PropsWithChildren, HTMLAttributes } from "react";

const Box = (props: PropsWithChildren<HTMLAttributes<HTMLDivElement>>) => {
  return <div {...props}>{props.children}</div>;
};

export default Box;
