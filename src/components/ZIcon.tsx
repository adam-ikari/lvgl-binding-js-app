import { ZIconSymbol, ZText } from ".";
import { ZSizeEnum } from ".";
import React from "react";

interface ZIconProps {
  symbol: ZIconSymbol;
  size?: ZSizeEnum;
  light?: boolean;
}

const ZIcon = (props: ZIconProps) => {
  const { symbol, size = ZSizeEnum.Default, light } = props;
  return (
    <ZText size={size} light={light}>
      {symbol}
    </ZText>
  );
};

export type { ZIconProps };
export default ZIcon;
