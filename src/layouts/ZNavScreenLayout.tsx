import { COLORS, COMMON_STYLE, CONSTANTS } from "@/common_style";
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
import routerData from "@/router";
import { Button, EAlignType, Text, View } from "lvgljs-ui";
import React, { useEffect, useRef, useState, useLayoutEffect } from "react";
import { useLocation } from "react-router-native";

interface ZNavScreenLayoutProps {
  children?: React.ReactNode | React.ReactNode[];
}

const TimeAera = React.memo(() => {
  const time = useTime({ format: "YYYY-MM-DD HH:mm" });
  return <ZText>{time}</ZText>;
});

const isHome = (location) => location.pathname !== "/";

const getMetaData = (location) => {
  const route = routerData.find((item) => item.path === location.pathname);
  if (route && route.meta) {
    return route.meta;
  }
  return {};
};

const ZNavScreenLayout = (props: ZNavScreenLayoutProps) => {
  const { children } = props;

  const location = useLocation();
  const [title, setTitle] = useState("");
  const [withBack, setWithBack] = useState(isHome(location));

  useLayoutEffect(() => {
    setWithBack(isHome(location));
    setTitle(getMetaData(location)?.title);
  }, [location]);

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
