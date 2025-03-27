import { ZFlexContainer } from "./ZFlexContainer";
import React from "react";

interface ZColumnProps extends React.ComponentProps<typeof ZFlexContainer> {}

const ZColumn = (props: React.ComponentProps<typeof ZFlexContainer>) => {
  return <ZFlexContainer {...props} flexDirection="column" />;
};

export type { ZColumnProps };
export { ZColumn };
