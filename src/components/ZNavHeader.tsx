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

const checkHome = (path) => path === "/";

const HomeButton = () => {
  const navigate = useNavigate();
  return (
    <ZButton
      style={{ "flex-grow": 0 }}
      size={ZSizeEnum.Small}
      icon={ZIconSymbol.Home}
      onClick={() => {
        navigate("/");
      }}
      text
      round
    />
  );
};

const BackButton = React.memo(() => {
  const navigate = useNavigate();
  return (
    <ZButton
      style={{ "flex-grow": 0 }}
      size={ZSizeEnum.Small}
      icon={ZIconSymbol.Left}
      onClick={() => navigate(-1)}
      text
      round
    >
      back
    </ZButton>
  );
});

const getMetaData = (location) => {
  const route = routerData.find((item) => item.path === location.pathname);
  if (route && route.meta) {
    return route.meta;
  }
  return {};
};

const NotificationAera = () => {
  return (
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
    </ZRow>
  );
};

const TimeAera = () => {
  const time = useTime({ format: "YYYY-MM-DD HH:mm" });
  return (
    <ZRow
      height={ZHeightEnum.Full}
      style={{
        "align-items": "center",
      }}
    >
      <ZText>{time}</ZText>;
    </ZRow>
  );
};

const ActionAera = () => {
  const location = useLocation();
  const [isHome, setIsHome] = useState(checkHome(location.pathname));
  useLayoutEffect(() => {
    setIsHome(checkHome(location.pathname));
  }, [location]);
  return (
    <ZRow
      height={ZHeightEnum.Full}
      gap={0}
      style={{
        "align-items": "center",
      }}
    >
      <HomeButton />
      {isHome ? null : <BackButton />}
    </ZRow>
  );
};

const ZNavHeader = () => {
  const location = useLocation();
  const [title, setTitle] = useState("");
  const [isHome, setIsHome] = useState(checkHome(location.pathname));

  useLayoutEffect(() => {
    setIsHome(checkHome(location.pathname));
    setTitle(getMetaData(location)?.title);
  }, [location]);

  return (
    <ZRow
      width={ZWidthEnum.Full}
      height={HEIGHT}
      style={{
        padding: 4,
        "align-items": "center",
      }}
    >
      <ActionAera />
      <ZRow
        height={ZHeightEnum.Full}
        style={{
          "flex-grow": 1,
          "align-items": "center",
        }}
      >
        <ZText>{title}</ZText>
      </ZRow>
      <NotificationAera />
      <TimeAera />
    </ZRow>
  );
};

export default ZNavHeader;
