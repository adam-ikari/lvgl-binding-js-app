import { ZFlexContainer } from "./ZFlexContainer";
import React from "react";

interface ZRowProps extends React.ComponentProps<typeof ZFlexContainer> {}

const ZRow = (props: React.ComponentProps<typeof ZFlexContainer>) => {
  return <ZFlexContainer {...props} flexDirection="row" />;
};

export type { ZRowProps };
export { ZRow };
