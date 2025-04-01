import { ZFlexContainer, ZFlexContainerProps } from ".";
import React from "react";

interface ZRowProps extends Omit<ZFlexContainerProps, "flexDirection"> {}

const ZRow = (props: ZRowProps) => {
  return <ZFlexContainer {...props} flexDirection="row" />;
};

export type { ZRowProps };
export default ZRow;
