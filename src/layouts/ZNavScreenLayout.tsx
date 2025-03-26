import { COLORS, COMMON_STYLE, CONSTANTS } from "@/common_style";
import {
  ZColumn,
  ZHeightEnum,
  ZIconSymbol,
  ZNavHeader,
  ZWidthEnum,
} from "@/components";
import { Button, EAlignType, Text, View } from "lvgljs-ui";
import React, { useRef } from "react";

interface ZNavScreenLayoutProps {
  children?: React.ReactNode | React.ReactNode[];
}

const ZNavScreenLayout = (props: ZNavScreenLayoutProps) => {
  const { children } = props;

  const topElementRef = useRef();

  return (
    <>
      <ZColumn
        width={ZWidthEnum.Full}
        height={ZHeightEnum.Full}
        style={{
          "background-color": COLORS.PAGE_BACKGROUND,
          overflow: "hidden",
        }}
        gap={0}
      >
        <ZNavHeader />
        <ZColumn
          width={ZWidthEnum.Full}
          style={{
            ...COMMON_STYLE.padding20,
            "flex-grow": 1,
            "background-color": COLORS.PAGE_BACKGROUND,
          }}
        >
          <View ref={topElementRef} style={{ width: 0, height: 0 }}></View>
          {children}
        </ZColumn>
      </ZColumn>
      <Button
        style={{
          "border-radius": CONSTANTS.MAX_RADIUS,
          width: 40,
          height: 40,
          padding: 0,
          display: "flex",
          "flex-direction": "row",
          "align-items": "center",
          "justify-content": "center",
        }}
        onClick={() => {
          topElementRef.current?.scrollIntoView();
        }}
        align={{
          type: EAlignType.ALIGN_BOTTOM_RIGHT,
          pos: [-10, -10],
        }}
      >
        <Text>{ZIconSymbol.Up}</Text>
      </Button>
    </>
  );
};
export type { ZNavScreenLayoutProps };
export { ZNavScreenLayout };
