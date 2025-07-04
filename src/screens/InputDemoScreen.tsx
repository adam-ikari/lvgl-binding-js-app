import { COLORS } from "@/styles/common_style";
import { ZInput, ZInputModeEnum, ZRow, ZSizeEnum, ZText } from "@/components";
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
    <>
      <ZText size={ZSizeEnum.Large}>Basic</ZText>
      <ZRow style={rowStyle}>
        <ZInput></ZInput>
        <ZInput placeholder={"please input"}></ZInput>
      </ZRow>
      <ZText size={ZSizeEnum.Large}>Password</ZText>
      <ZRow style={rowStyle}>
        <ZInput mode={ZInputModeEnum.PASSWORD}></ZInput>
      </ZRow>
      <ZText size={ZSizeEnum.Large}>Allow Clean</ZText>
      <ZRow style={rowStyle}>
        <ZInput value={"test"} allowClean></ZInput>
      </ZRow>
    </>
  );
};

export default InputDemoScreen;
