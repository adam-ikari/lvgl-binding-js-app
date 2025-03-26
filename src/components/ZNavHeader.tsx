import {
  ZButton,
  ZHeightEnum,
  ZIcon,
  ZIconSymbol,
  ZRow,
  ZSizeEnum,
  ZText,
  ZWidthEnum,
} from ".";
import useTime from "@/hooks/time";
import routerData from "@/router";
import React, { useLayoutEffect, useState } from "react";
import { useNavigate } from "react-router-native";
import { useLocation } from "react-router-native";

const HEIGHT = 40;

const HomeButton = React.memo(() => {
  const navigate = useNavigate();
  return (
    <ZButton
      style={{ "flex-grow": 0 }}
      size={ZSizeEnum.Small}
      icon={ZIconSymbol.Home}
      text
      onClick={() => navigate("/")}
    ></ZButton>
  );
});

const BackButton = React.memo(() => {
  const navigate = useNavigate();
  return (
    <ZButton
      style={{ "flex-grow": 0 }}
      size={ZSizeEnum.Small}
      icon={ZIconSymbol.Left}
      text
      onClick={() => navigate(-1)}
    >
      back
    </ZButton>
  );
});

const isHome = (location) => location.pathname !== "/";

const getMetaData = (location) => {
  const route = routerData.find((item) => item.path === location.pathname);
  if (route && route.meta) {
    return route.meta;
  }
  return {};
};

const TimeAera = React.memo(() => {
  const time = useTime({ format: "YYYY-MM-DD HH:mm" });
  return <ZText>{time}</ZText>;
});

const ZNavHeader = () => {
  const location = useLocation();
  const [title, setTitle] = useState("");

  const [withBack, setWithBack] = useState(isHome(location));

  useLayoutEffect(() => {
    setWithBack(isHome(location));
    setTitle(getMetaData(location)?.title);
  }, [location]);

  // const { withBack = false, title = "", addons } = props;

  return (
    <ZRow
      width={ZWidthEnum.Full}
      height={HEIGHT}
      style={{
        padding: 4,
        "align-items": "center",
      }}
    >
      <ZRow
        height={ZHeightEnum.Full}
        gap={0}
        style={{
          "align-items": "center",
        }}
      >
        <HomeButton />
        {withBack ? <BackButton /> : null}
      </ZRow>
      <ZRow
        height={ZHeightEnum.Full}
        style={{
          "flex-grow": 1,
          "align-items": "center",
        }}
      >
        <ZText>{title}</ZText>
      </ZRow>
      <ZRow
        height={ZHeightEnum.Full}
        style={{
          "align-items": "center",
        }}
      >
        <ZIcon symbol={ZIconSymbol.Usb}></ZIcon>
        <ZIcon symbol={ZIconSymbol.Wifi}></ZIcon>
        <ZIcon symbol={ZIconSymbol.Bell}></ZIcon>
        <ZIcon symbol={ZIconSymbol.Envelope}></ZIcon>
        <TimeAera></TimeAera>,
      </ZRow>
    </ZRow>
  );
};

export { ZNavHeader };
