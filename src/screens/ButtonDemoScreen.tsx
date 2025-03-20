import { COLORS } from "@/common_style";
import { ZButton, ZButtonTypeEnum, ZRow, ZSizeEnum, ZText } from "@/components";
import { ZIconSymbol } from "@/components";
import { ZNavHeaderLayout } from "@/layouts";
import React from "react";

const buttonsData = [
  { text: "Default", type: ZButtonTypeEnum.Default },
  { text: "Primary", type: ZButtonTypeEnum.Primary },
  { text: "Success", type: ZButtonTypeEnum.Success },
  { text: "Info", type: ZButtonTypeEnum.Info },
  { text: "Danger", type: ZButtonTypeEnum.Danger },
  { text: "Warning", type: ZButtonTypeEnum.Warning },
];

const iconButtonsData = [
  { icon: ZIconSymbol.Home, text: "Default", type: ZButtonTypeEnum.Default },
  { icon: ZIconSymbol.Home, text: "Primary", type: ZButtonTypeEnum.Primary },
  { icon: ZIconSymbol.Home, text: "Success", type: ZButtonTypeEnum.Success },
  { icon: ZIconSymbol.Home, text: "Info", type: ZButtonTypeEnum.Info },
  { icon: ZIconSymbol.Home, text: "Danger", type: ZButtonTypeEnum.Danger },
  { icon: ZIconSymbol.Home, text: "Warning", type: ZButtonTypeEnum.Warning },
];

const style = {
  background: {
    "background-color": COLORS.PAGE_BACKGROUND,
  },
};

const rowStyle = {
  ...style.background,
};

const ButtonDemoScreen = () => {
  return (
    <ZNavHeaderLayout withBack={true} title={"Button Demo"}>
      <ZText size={ZSizeEnum.Large}>Size</ZText>
      <ZRow style={rowStyle}>
        {buttonsData.map((item, index) => (
          <ZButton key={index} size={ZSizeEnum.Small} type={item.type}>
            {item.text}
          </ZButton>
        ))}
      </ZRow>
      <ZRow style={rowStyle}>
        {buttonsData.map((item, index) => (
          <ZButton key={index} type={item.type}>
            {item.text}
          </ZButton>
        ))}
      </ZRow>
      <ZRow style={rowStyle}>
        {buttonsData.map((item, index) => (
          <ZButton key={index} size={ZSizeEnum.Large} type={item.type}>
            {item.text}
          </ZButton>
        ))}
      </ZRow>
      <ZText size={ZSizeEnum.Large}>Text Button</ZText>
      <ZRow style={rowStyle}>
        {buttonsData.map((item, index) => (
          <ZButton key={index} type={item.type} text>
            {item.text}
          </ZButton>
        ))}
      </ZRow>
      <ZText size={ZSizeEnum.Large}>Round Button</ZText>
      <ZRow style={rowStyle}>
        {buttonsData.map((item, index) => (
          <ZButton key={index} type={item.type} round>
            {item.text}
          </ZButton>
        ))}
      </ZRow>
      <ZText size={ZSizeEnum.Large}>Icon Button</ZText>
      <ZRow style={rowStyle}>
        {iconButtonsData.map((item, index) => (
          <ZButton key={index} type={item.type} icon={item.icon}>
            {item.text}
          </ZButton>
        ))}
      </ZRow>
      <ZRow style={rowStyle}>
        {iconButtonsData.map((item, index) => (
          <ZButton key={index} type={item.type} icon={item.icon}></ZButton>
        ))}
      </ZRow>
      <ZRow style={rowStyle}>
        {iconButtonsData.map((item, index) => (
          <ZButton key={index} type={item.type} icon={item.icon} round></ZButton>
        ))}
      </ZRow>
    </ZNavHeaderLayout>
  );
};

export default ButtonDemoScreen;
