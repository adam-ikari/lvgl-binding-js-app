import { COLORS, COMMON_STYLE } from "@/common_style";
import { ZButton, ZButtonTypeEnum, ZColumn, ZRow } from "@/components";
import { ZNavHeaderLayout } from "@/layouts";
import React from "react";
import { useNavigate } from "react-router-native";

const style = {
  BackgroundStyle: {
    "background-color": COLORS.PAGE_BACKGROUND,
  },
};

const HomeScreen = () => {
  const navigate = useNavigate();
  return (
    <ZNavHeaderLayout title="Home">
      <ZRow
        style={{
          ...style.BackgroundStyle,
        }}
      >
        <ZButton
          type={ZButtonTypeEnum.Primary}
          onClick={() => navigate("/button")}
        >
          Button Demo
        </ZButton>
      </ZRow>
      <ZRow
        style={{
          ...style.BackgroundStyle,
        }}
      >
        <ZButton
          type={ZButtonTypeEnum.Primary}
          onClick={() => navigate("/state")}
        >
          State Demo
        </ZButton>
      </ZRow>
      <ZRow
        style={{
          ...style.BackgroundStyle,
        }}
      >
        <ZButton
          type={ZButtonTypeEnum.Primary}
          onClick={() => navigate("/list")}
        >
          List Demo
        </ZButton>
      </ZRow>
    </ZNavHeaderLayout>
  );
};

export default HomeScreen;
