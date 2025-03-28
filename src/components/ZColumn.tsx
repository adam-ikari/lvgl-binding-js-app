import { ZFlexContainer, ZFlexContainerProps } from "./ZFlexContainer";
import React from "react";

interface ZColumnProps extends Omit<ZFlexContainerProps, "flexDirection"> {}

const ZColumn = (props: ZColumnProps) => {
  const { gap = 20 } = props;
  return <ZFlexContainer {...props} flexDirection="column" gap={gap} />;
};

export type { ZColumnProps };
export { ZColumn };
