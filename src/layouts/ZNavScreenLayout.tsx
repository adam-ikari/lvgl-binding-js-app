import { COLORS, COMMON_STYLE } from "@/common_style";
import {
  ZColumn,
  ZHeightEnum,
  ZIcon,
  ZIconSymbol,
  ZNavHeader,
  ZText,
  ZWidthEnum,
} from "@/components";
import useTime from "@/hooks/time";
import React from "react";

interface ZNavScreenLayoutProps {
  children?: React.ReactNode | React.ReactNode[];
  title?: string;
  withBack?: boolean;
}

const TimeAera = React.memo(() => {
  const time = useTime({ format: "YYYY-MM-DD HH:mm" });
  return <ZText>{time}</ZText>;
});

const ZNavScreenLayout = (props: ZNavScreenLayoutProps) => {
  const { children, title = "", withBack = false } = props;
  return (
    <ZColumn
      width={ZWidthEnum.Full}
      height={ZHeightEnum.Full}
      style={{
        "background-color": COLORS.PAGE_BACKGROUND,
        overflow: "hidden",
      }}
    >
      <ZNavHeader
        withBack={withBack}
        title={title}
        addons={[
          <ZIcon symbol={ZIconSymbol.Usb}></ZIcon>,
          <ZIcon symbol={ZIconSymbol.Wifi}></ZIcon>,
          <ZIcon symbol={ZIconSymbol.Bell}></ZIcon>,
          <ZIcon symbol={ZIconSymbol.Envelope}></ZIcon>,
          <TimeAera></TimeAera>,
        ]}
      ></ZNavHeader>

      <ZColumn
        width={ZWidthEnum.Full}
        style={{
          ...COMMON_STYLE.padding20,
          "flex-grow": 1,
          "background-color": COLORS.PAGE_BACKGROUND,
        }}
      >
        {children}
      </ZColumn>
    </ZColumn>
  );
};
export type { ZNavScreenLayoutProps };
export { ZNavScreenLayout };
