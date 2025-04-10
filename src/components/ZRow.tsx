import {
  ZFlexAlignItems,
  ZFlexContainer,
  ZFlexContainerDirection,
  ZFlexContainerProps,
} from ".";
import React from "react";

export interface ZRowProps extends Omit<ZFlexContainerProps, "direction"> {}

const ZRow = (props: ZRowProps) => {
  return (
    <ZFlexContainer
      {...props}
      direction={ZFlexContainerDirection.Row}
      alignItems={ZFlexAlignItems.Center}
    />
  );
};

export default ZRow;
