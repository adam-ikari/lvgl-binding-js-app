import { ZIconSymbol } from ".";
import { ZText } from "./ZText";
import React from "react";

interface ZIconProps {
  symbol: ZIconSymbol;
}

const ZIcon = ({ symbol }: ZIconProps) => {
  return <ZText>{symbol}</ZText>;
};

export type { ZIconProps };
export { ZIcon };