import { COLORS, COMMON_STYLE } from "@/common_style";
import { ZButton, ZColumn, ZRow } from "@/components";
import { View } from "lvgljs-ui";
import React from "react";
import { useNavigate } from "react-router-native";

function HomeScreen() {
  const navigate = useNavigate();
  return (
    <View
      style={{
        ...COMMON_STYLE.noBorder,
        ...COMMON_STYLE.fullHeight,
        ...COMMON_STYLE.fullWidth,
        "background-color": COLORS.PAGE_BACKGROUND,
      }}
    >
      <ZColumn>
        <ZRow>
          <ZButton onClick={() => navigate("/button")} text="Button"></ZButton>
        </ZRow>
      </ZColumn>
    </View>
  );
}

export default HomeScreen;
