import { ZIconSymbol, ZText } from ".";
import { ZSize } from ".";
import React from "react";

interface ZIconProps {
  symbol: ZIconSymbol;
  size?: ZSize;
  light?: boolean;
}

const ZIcon = (props: ZIconProps) => {
  const { symbol, size = ZSize.Default, light } = props;
  return (
    <ZText size={size} light={light}>
      {symbol}
    </ZText>
  );
};

export type { ZIconProps };
export default ZIcon;
