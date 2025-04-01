import {
  ZFlexContainer,
  ZFlexContainerDirection,
  ZFlexContainerProps,
} from ".";
import React from "react";

interface ZColumnProps extends Omit<ZFlexContainerProps, "direction"> {}

const ZColumn = (props: ZColumnProps) => {
  return (
    <ZFlexContainer
      {...props}
      direction={ZFlexContainerDirection.Column}
    />
  );
};

export type { ZColumnProps };
export default ZColumn;
