import { ZFlexContainer, ZFlexContainerProps } from "./ZFlexContainer";
import React from "react";

interface ZRowProps extends Omit<ZFlexContainerProps, "flexDirection"> {}

const ZRow = (props: ZRowProps) => {
  return <ZFlexContainer {...props} flexDirection="row" />;
};

export type { ZRowProps };
export { ZRow };
