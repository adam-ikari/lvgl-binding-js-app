import { ZIconSymbol, ZText } from ".";
import { ZSizeEnum } from ".";
import React from "react";

interface ZIconProps {
  symbol: ZIconSymbol;
  size?: ZSizeEnum;
}

const ZIcon = (props?: ZIconProps) => {
  const { symbol, size = ZSizeEnum.Default } = props;
  return <ZText size={size}>{symbol}</ZText>;
};

export type { ZIconProps };
export { ZIcon };
