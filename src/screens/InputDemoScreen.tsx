import { COLORS } from "@/common_style";
import { ZInput, ZRow, ZSizeEnum, ZText } from "@/components";
import { ZNavScreenLayout } from "@/layouts";
import React from "react";

const style = {
  background: {
    "background-color": COLORS.PAGE_BACKGROUND,
  },
};

const rowStyle = {
  ...style.background,
};

const InputDemoScreen = () => {
  return (
    <ZNavScreenLayout title={"Input Demo"} withBack>
      <ZText size={ZSizeEnum.Large}>Size</ZText>
      <ZRow style={rowStyle}>
        <ZInput></ZInput>
      </ZRow>
    </ZNavScreenLayout>
  );
};

export default InputDemoScreen;
