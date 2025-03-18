import { COLORS, COMMON_STYLE } from "@/common_style";
import { ZButton, ZButtonTypeEnum, ZColumn, ZRow } from "@/components";
import { View } from "lvgljs-ui";
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
    <View
      style={{
        ...COMMON_STYLE.noBorder,
        ...COMMON_STYLE.fullHeight,
        ...COMMON_STYLE.fullWidth,
        ...COMMON_STYLE.radius0,
        ...style.BackgroundStyle,
      }}
    >
      <ZColumn
        style={{
          ...style.BackgroundStyle,
        }}
      >
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
          <ZButton type={ZButtonTypeEnum.Primary} onClick={() => navigate("/list")}>
            List Demo
          </ZButton>
        </ZRow>
      </ZColumn>
    </View>
  );
};

export default HomeScreen;
