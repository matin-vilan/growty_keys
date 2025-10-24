import Icon, { CombinedProps } from "@/shared/icon";
import React from "react";

const SinLine = (props: Omit<CombinedProps, "src">) => {
  return <Icon src="sinLine" {...props} />;
};

export default SinLine;
