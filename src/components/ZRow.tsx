import {
  ZFlexAlignItems,
  ZFlexContainer,
  ZFlexContainerDirection,
  ZFlexContainerProps,
} from ".";
import React from "react";

interface ZRowProps extends Omit<ZFlexContainerProps, "direction"> {}

const ZRow = (props: ZRowProps) => {
  return <ZFlexContainer {...props} direction={ZFlexContainerDirection.Row} alignItems={ZFlexAlignItems.Center}/>;
};

export type { ZRowProps };
export default ZRow;
